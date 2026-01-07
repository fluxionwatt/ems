package core

import (
	"context"
	"errors"
	"io/fs"
	"log"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/fluxionwatt/ems/webui"

	"github.com/gofiber/fiber/v3"
	"github.com/gofiber/fiber/v3/middleware/logger"
	"github.com/gofiber/fiber/v3/middleware/recover"
	"github.com/gofiber/fiber/v3/middleware/static"
)

type APIResp[T any] struct {
	Data    T      `json:"data,omitempty"`
	Message string `json:"message,omitempty"`
}

type SystemInfo struct {
	Version    string `json:"version"`
	Commit     string `json:"commit"`
	BuildTime  string `json:"buildTime"`
	ServerTime string `json:"serverTime"`
	UptimeSec  int64  `json:"uptimeSec"`
}

func Server() {
	app := fiber.New(fiber.Config{
		AppName: "fiber-v3-demo",
		// 统一错误返回
		ErrorHandler: func(c fiber.Ctx, err error) error {
			code := fiber.StatusInternalServerError

			var fe *fiber.Error
			if errors.As(err, &fe) {
				code = fe.Code
			}

			_ = c.Status(code)
			return c.JSON(APIResp[any]{Message: err.Error()})
		},
	})

	// middleware
	app.Use(recover.New())
	app.Use(logger.New())

	// health
	app.Get("/health", func(c fiber.Ctx) error {
		return c.JSON(APIResp[string]{Data: "ok"})
	})

	// API v1
	v1 := app.Group("/api/v1")

	// GET /api/v1/system
	startedAt := time.Now()
	v1.Get("/system", func(c fiber.Ctx) error {
		now := time.Now()
		info := SystemInfo{
			Version:    envOr("APP_VERSION", "0.0.0-dev"),
			Commit:     envOr("GIT_COMMIT", "local"),
			BuildTime:  envOr("BUILD_TIME", now.Format(time.RFC3339)),
			ServerTime: now.Format(time.RFC3339),
			UptimeSec:  int64(time.Since(startedAt).Seconds()),
		}
		return c.JSON(APIResp[SystemInfo]{Data: info})
	})

	distFS, _ := fs.Sub(webui.Assets(), "dist")
	app.Use("/", static.New("", static.Config{
		FS:            distFS,
		IndexNames:    []string{"index.html"},
		CacheDuration: -1,
		MaxAge:        0,
		ModifyResponse: func(c fiber.Ctx) error {
			// 顺手把浏览器缓存也干掉
			c.Response().Header.Del("Last-Modified")
			c.Response().Header.Del("Etag")
			c.Set("Cache-Control", "no-cache, no-store, must-revalidate")
			c.Set("Pragma", "no-cache")
			c.Set("Expires", "0")
			return nil
		},
	}))

	// POST /api/v1/echo
	type EchoReq struct {
		Message string `json:"message"`
	}
	v1.Post("/echo", func(c fiber.Ctx) error {
		var req EchoReq
		if err := c.Bind().Body(&req); err != nil {
			return fiber.NewError(fiber.StatusBadRequest, "invalid json body")
		}
		if req.Message == "" {
			return fiber.NewError(fiber.StatusBadRequest, "message is required")
		}
		return c.JSON(APIResp[EchoReq]{Data: req})
	})

	// 启动 + 优雅退出
	addr := ":8080"
	go func() {
		log.Printf("listening on %s\n", addr)
		if err := app.Listen(addr); err != nil {
			log.Printf("listen error: %v\n", err)
		}
	}()

	// wait for signal
	sigCh := make(chan os.Signal, 1)
	signal.Notify(sigCh, syscall.SIGINT, syscall.SIGTERM)
	<-sigCh

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	log.Println("shutting down...")
	if err := app.ShutdownWithContext(ctx); err != nil {
		log.Printf("shutdown error: %v\n", err)
	}
	log.Println("bye")
}

func envOr(key, def string) string {
	if v := os.Getenv(key); v != "" {
		return v
	}
	return def
}
