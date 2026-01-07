
## fluxion-manager
Fluxion EMS 是一款开源的，电站级别能量管理系统，该系统为企业和提供光伏与储能电站能量监控、定额管理和运维管理等功能，支持实时数据采集和分析，提升管理效率。通过物联网技术，借助 gridbeat 采集设备。数据，帮企业建立能源管理体系，找到跑冒滴漏，从而为企业节能提供依据。 进一步为企业实现碳跟踪、碳盘查、碳交易、谈汇报的全生命过程。 为中国碳达峰-碳中和做出贡献。 针对客户场景：政府、园区、企业、工矿、公共建筑等。

## 主要特性
- 数据采集 - 支持 MQTT 通信，实时采集各类设备的能耗数据
- 设备管理 - 管理设备和网关的台账信息
- 运维管理 - 包含巡检计划、维修工单等管理功能
- 能耗分析 - 供能耗概览、同比环比分析、能耗趋势和分项概况等
- 报警管理 - 实时报警、历史报警、报警规则配置等
- 定额管理 - 定额配置、用量监测和预警
- 系统管理 - 用户、权限、日志、系统监控等
- 其它功能 碳资产管理 能耗分析报告 管理体系管理
- 视频监控 充电桩应用场景 【充电桩运营平台解决方案】
- 订单管理
- 电站、电桩管理
- 价格策略配置
- 数据看板

## 软件架构

前端框架：vue2 + element-ui + ECharts
后端框架：SpringBoot + Mysql + TDengine + Redis + RabbitMq + MQTT

支持单机、三机虚拟机部署、支持云化部署


# 电站级 EMS（Energy Management System）🚀

> 面向电站/园区级的开源 EMS：把 **光伏（PV）/储能（BESS）/PCS/计量表计/并网变压器/环境监测/（可选）柴发** 等设备纳入统一的监控与调度体系，形成 **数据采集 → 状态评估 → 策略计算 → 指令下发 → 审计追溯** 的闭环。

- **定位**：工程可落地、可扩展、可部署、可运维的电站级 EMS 基座
- **目标用户**：工商业园区、集中式电站、多站点运维平台、系统集成商

---

## ✨ 核心特性

### 设备接入（南向）
- 支持/规划：Modbus RTU/TCP、IEC-104、MQTT、HTTP/Webhook
- 设备树与点位模板：统一建模、统一点位命名、统一采样与质量标记
- 插件化驱动：新增设备类型无需改动核心服务（见 Plugin SDK）

### 数据与分析
- 实时采集、聚合（1s/5s/15min/1h 可配置）
- 时间序列存储（默认 PostgreSQL + TimescaleDB，可替换）
- 事件/告警：越限、质量异常、通讯异常、策略保护触发
- 运行审计：控制指令、策略版本、参数变更可追溯

### 策略与调度（北向控制）
- 典型策略：削峰填谷、需量控制、SOC 管理、功率/能量计划、限电跟踪
- 策略可插拔：策略引擎与设备控制解耦，支持模板化与版本化
- 安全保护：功率/电流/温度/SOC 边界保护、控制节流与去抖

### 可视化与运维
- 站点总览、实时监控、趋势曲线、报表导出（CSV/Excel 规划）
- 权限与审计（RBAC）
- 可观测性：Metrics / Logs / Tracing（Prometheus + Grafana 方案友好）
- 容器化部署：Docker / Kubernetes

---

## 🧱 架构概览

- **api-gateway / server**：统一对外 API（鉴权、配置、资产、告警、审计）
- **southbound drivers**：南向协议与设备驱动（Modbus/104/MQTT…）
- **collector**：采集任务编排、质量标记、缓存与落库
- **strategy engine**：策略计算（计划/实时闭环）、保护与限幅
- **dispatcher**：控制指令下发、回执、重试与审计
- **storage**：关系数据（Postgresql） + 时间序列数据（默认 TimescaleDB）
- **web ui**：站控界面/运维界面（可接 Nuxt/Vue）
- **MQTT**：MQTT 服务器

---

## 🧰 技术栈（建议默认）
> 你可以按实际情况替换，只要遵守接口与数据契约

- 后端：Go（Fiber / Gin 均可）+ GORM
- 存储：PostgreSQL + TimescaleDB（时间序列） / Redis（缓存，可选）
- 消息：MQTT（Mosquitto，可选）/ NATS（可选）
- 可观测：Prometheus + Grafana（可选）
- 接口：OpenAPI/Swagger（推荐）

---

## 📁 目录结构（建议）

```text
.
├── cmd/
│   ├── ems-server/           # API + 管理面
│   ├── ems-collector/        # 采集服务
│   └── ems-dispatcher/       # 控制下发服务
├── internal/
│   ├── api/                  # HTTP API / middleware
│   ├── core/                 # 领域模型：站点/设备/点位/告警/审计
│   ├── storage/              # DB 访问层（gorm）
│   ├── drivers/              # 内置驱动（可选）
│   ├── plugins/              # 插件加载与生命周期
│   ├── strategy/             # 策略引擎与策略实现
│   └── jobs/                 # 采集/聚合/计划任务
├── configs/
│   ├── ems.yaml              # 主配置
│   └── templates/            # 设备模板（点位图）
├── deployments/
│   ├── docker-compose.yml
│   └── k8s/                  # Helm/Manifests（规划）
├── docs/                     # 文档与方案
└── README.md