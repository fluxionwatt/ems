import{_ as n,c as a,o as e,ah as p,ai as i,aj as l,ak as t,al as o,am as c}from"./chunks/framework.C48Jt1K0.js";const y=JSON.parse('{"title":"Menus and Pages","description":"","frontmatter":{"sidebar_position":2},"headers":[],"relativePath":"en_US/developer-guide/devPage.md","filePath":"en_US/developer-guide/devPage.md"}'),r={name:"en_US/developer-guide/devPage.md"};function h(d,s,g,k,u,E){return e(),a("div",null,[...s[0]||(s[0]=[p(`<h1 id="menus-and-pages" tabindex="-1">Menus and Pages <a class="header-anchor" href="#menus-and-pages" aria-label="Permalink to “Menus and Pages”">​</a></h1><h2 id="i-overview" tabindex="-1">I. Overview <a class="header-anchor" href="#i-overview" aria-label="Permalink to “I. Overview”">​</a></h2><p>If the system-provided menus or pages do not meet your needs, you can develop your own pages and then create menus in the Permission Management page to link to your custom pages.</p><h3 id="project-directory-structure" tabindex="-1">Project Directory Structure <a class="header-anchor" href="#project-directory-structure" aria-label="Permalink to “Project Directory Structure”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>thinspanel</span></span>
<span class="line"><span>├── .vscode                        // vscode extensions and settings</span></span>
<span class="line"><span>│   ├── extensions.json            // vscode recommended extensions</span></span>
<span class="line"><span>│   ├── launch.json                // debug config (debug Vue and TS)</span></span>
<span class="line"><span>│   └── settings.json              // vscode settings (effective in this project, can be copied to user settings)</span></span>
<span class="line"><span>├── build                          // vite build related config and plugins</span></span>
<span class="line"><span>│   ├── config                     // build config</span></span>
<span class="line"><span>│   │   └── proxy.ts               // network proxy</span></span>
<span class="line"><span>│   └── plugins                    // build plugins</span></span>
<span class="line"><span>│       ├── index.ts               // plugins summary</span></span>
<span class="line"><span>│       ├── router.ts              // elegant-router plugin</span></span>
<span class="line"><span>│       ├── unocss.ts              // unocss plugin</span></span>
<span class="line"><span>│       └── unplugin.ts            // auto-import UI components, auto-parse iconify icons, auto-parse local svg</span></span>
<span class="line"><span>├── packages                       // sub-projects</span></span>
<span class="line"><span>│   ├── axios                      // network request wrapper</span></span>
<span class="line"><span>│   ├── color-palette              // color palette</span></span>
<span class="line"><span>│   ├── hooks                      // composable hooks</span></span>
<span class="line"><span>│   ├── materials                  // component materials</span></span>
<span class="line"><span>│   ├── ofetch                     // network request wrapper</span></span>
<span class="line"><span>│   ├── scripts                    // scripts</span></span>
<span class="line"><span>│   ├── uno-preset                 // uno-preset config</span></span>
<span class="line"><span>│   └── utils                      // utility functions</span></span>
<span class="line"><span>├── public                         // public directory (resources here will be in root after build)</span></span>
<span class="line"><span>│   └── favicon.svg                // website favicon</span></span>
<span class="line"><span>├── src</span></span>
<span class="line"><span>│   ├── assets                     // static assets</span></span>
<span class="line"><span>│   │   ├── imgs                   // images</span></span>
<span class="line"><span>│   │   └── svg-icon               // local svg icons</span></span>
<span class="line"><span>│   ├── components                 // global components</span></span>
<span class="line"><span>│   │   ├── advanced               // advanced components</span></span>
<span class="line"><span>│   │   ├── common                 // common components</span></span>
<span class="line"><span>│   │   └── custom                 // custom components</span></span>
<span class="line"><span>│   ├── constants                  // constants</span></span>
<span class="line"><span>│   │   ├── app.ts                 // app constants</span></span>
<span class="line"><span>│   │   ├── business.ts            // business constants</span></span>
<span class="line"><span>│   │   ├── common.ts              // common constants</span></span>
<span class="line"><span>│   │   └── reg.ts                 // regex constants</span></span>
<span class="line"><span>│   ├── enums                      // enums</span></span>
<span class="line"><span>│   ├── hooks                      // composable hooks</span></span>
<span class="line"><span>│   │   ├── business               // business hooks</span></span>
<span class="line"><span>│   │   │   ├── auth               // user auth</span></span>
<span class="line"><span>│   │   │   └── captcha            // captcha</span></span>
<span class="line"><span>│   │   └── common                 // common hooks</span></span>
<span class="line"><span>│   │       ├── echarts            // echarts</span></span>
<span class="line"><span>│   │       ├── form               // form</span></span>
<span class="line"><span>│   │       ├── icon               // icon</span></span>
<span class="line"><span>│   │       ├── router             // router</span></span>
<span class="line"><span>│   │       └── table              // table</span></span>
<span class="line"><span>│   ├── layouts                    // layout components</span></span>
<span class="line"><span>│   │   ├── base-layout            // base layout (global header, tabs, sidebar, footer)</span></span>
<span class="line"><span>│   │   ├── blank-layout           // blank layout (single page)</span></span>
<span class="line"><span>│   │   ├── context                // layout context state</span></span>
<span class="line"><span>│   │   ├── hooks                  // layout hooks</span></span>
<span class="line"><span>│   │   └── modules                // layout modules</span></span>
<span class="line"><span>│   │       ├── global-breadcrumb  // global breadcrumb</span></span>
<span class="line"><span>│   │       ├── global-content     // global content</span></span>
<span class="line"><span>│   │       ├── global-footer      // global footer</span></span>
<span class="line"><span>│   │       ├── global-header      // global header</span></span>
<span class="line"><span>│   │       ├── global-logo        // global logo</span></span>
<span class="line"><span>│   │       ├── global-menu        // global menu</span></span>
<span class="line"><span>│   │       ├── global-search      // global search</span></span>
<span class="line"><span>│   │       ├── global-sider       // global sidebar</span></span>
<span class="line"><span>│   │       ├── global-tab         // global tabs</span></span>
<span class="line"><span>│   │       └── theme-drawer       // theme drawer</span></span>
<span class="line"><span>│   ├── locales                // i18n config</span></span>
<span class="line"><span>│   │   ├── langs              // language files</span></span>
<span class="line"><span>│   │   ├── dayjs.ts           // dayjs i18n config</span></span>
<span class="line"><span>│   │   ├── locale.ts          // language file summary</span></span>
<span class="line"><span>│   │   └── naive.ts           // NaiveUI i18n config</span></span>
<span class="line"><span>│   ├── plugins                // plugins</span></span>
<span class="line"><span>│   │   ├── assets.ts          // static asset imports (css, scss, etc)</span></span>
<span class="line"><span>│   │   ├── dayjs.ts           // dayjs plugin</span></span>
<span class="line"><span>│   │   ├── iconify.ts         // iconify plugin</span></span>
<span class="line"><span>│   │   ├── loading.ts         // global loading plugin</span></span>
<span class="line"><span>│   │   └── nprogress.ts       // nprogress plugin</span></span>
<span class="line"><span>│   ├── router                 // vue router</span></span>
<span class="line"><span>│   │   ├── elegant            // elegant-router generated files</span></span>
<span class="line"><span>│   │   ├── guard              // router guards</span></span>
<span class="line"><span>│   │   ├── routes             // router declaration entry</span></span>
<span class="line"><span>│   │   │   ├── builtin        // built-in routes (root, 404)</span></span>
<span class="line"><span>│   │   │   └── index          // static router entry</span></span>
<span class="line"><span>│   │   └── index.ts           // router plugin entry</span></span>
<span class="line"><span>│   ├── service                // network requests</span></span>
<span class="line"><span>│   │   ├── api                // interface api</span></span>
<span class="line"><span>│   │   └── request            // encapsulated request functions</span></span>
<span class="line"><span>│   ├── store                  // pinia state management</span></span>
<span class="line"><span>│   │   ├── modules            // state modules</span></span>
<span class="line"><span>│   │   │   ├── app            // app state (reload, collapse, drawer)</span></span>
<span class="line"><span>│   │   │   ├── auth           // auth state (user info, rights)</span></span>
<span class="line"><span>│   │   │   ├── route          // route state (dynamic routes, menus, cached routes)</span></span>
<span class="line"><span>│   │   │   ├── tab            // tab state (tabs, scroll position)</span></span>
<span class="line"><span>│   │   │   └── theme          // theme state</span></span>
<span class="line"><span>│   │   └── plugins            // state mgmt plugins</span></span>
<span class="line"><span>│   ├── styles                 // global styles</span></span>
<span class="line"><span>│   │   ├── css                // css</span></span>
<span class="line"><span>│   │   └── scss               // scss</span></span>
<span class="line"><span>│   ├── theme                  // theme config</span></span>
<span class="line"><span>│   │   ├── settings.ts        // default &amp; override settings</span></span>
<span class="line"><span>│   │   └── vars.ts            // theme token css variables</span></span>
<span class="line"><span>│   ├── typings                // TS type declarations (*.d.ts)</span></span>
<span class="line"><span>│   │   ├── api.d.ts           // api response types</span></span>
<span class="line"><span>│   │   ├── app.d.ts           // app related types</span></span>
<span class="line"><span>│   │   ├── common.d.ts        // common types</span></span>
<span class="line"><span>│   │   ├── components.d.ts    // auto-imported component types</span></span>
<span class="line"><span>│   │   ├── elegant-router.d.ts// elegant-router types</span></span>
<span class="line"><span>│   │   ├── env.d.ts           // env types</span></span>
<span class="line"><span>│   │   ├── global.d.ts        // global types</span></span>
<span class="line"><span>│   │   ├── naive-ui.d.ts      // NaiveUI types</span></span>
<span class="line"><span>│   │   ├── router.d.ts        // Vue router types</span></span>
<span class="line"><span>│   │   ├── storage.d.ts       // storage types</span></span>
<span class="line"><span>│   │   └── union-key.d.ts     // union key types</span></span>
<span class="line"><span>│   ├── utils                  // global utility functions (pure, no state)</span></span>
<span class="line"><span>│   │   ├── common             // common utils</span></span>
<span class="line"><span>│   │   ├── icon               // icon utils</span></span>
<span class="line"><span>│   │   ├── service            // service utils</span></span>
<span class="line"><span>│   │   └── storage            // storage utils</span></span>
<span class="line"><span>│   ├── views                  // pages</span></span>
<span class="line"><span>│   │   ├── _builtin           // built-in pages: login, exception</span></span>
<span class="line"><span>│   │   ├── about              // about</span></span>
<span class="line"><span>│   │   ├── function           // function</span></span>
<span class="line"><span>│   │   ├── home               // home</span></span>
<span class="line"><span>│   │   ├── manage             // system management</span></span>
<span class="line"><span>│   │   ├── multi-menu         // multi-level menu</span></span>
<span class="line"><span>│   │   └── user-center        // user center</span></span>
<span class="line"><span>│   ├── App.vue                // Vue entry</span></span>
<span class="line"><span>│   └── main.ts                // TS entry</span></span>
<span class="line"><span>├── .editorconfig              // editor config</span></span>
<span class="line"><span>├── .env                       // env file</span></span>
<span class="line"><span>├── .env.prod                  // production env</span></span>
<span class="line"><span>├── .env.test                  // test env</span></span>
<span class="line"><span>├── .gitattributes             // git attributes</span></span>
<span class="line"><span>├── .gitignore                 // git ignore</span></span>
<span class="line"><span>├── .npmrc                     // npm config</span></span>
<span class="line"><span>├── CHANGELOG.md               // changelog</span></span>
<span class="line"><span>├── eslint.config.js           // eslint flat config</span></span>
<span class="line"><span>├── index.html                 // html file</span></span>
<span class="line"><span>├── package.json               // npm package file</span></span>
<span class="line"><span>├── pnpm-lock.yaml             // pnpm lock file</span></span>
<span class="line"><span>├── README.md                  // readme</span></span>
<span class="line"><span>├── README.zh-CN.md            // readme (chinese)</span></span>
<span class="line"><span>├── tsconfig.json              // TS config</span></span>
<span class="line"><span>├── uno.config.ts              // unocss config</span></span>
<span class="line"><span>└── vite.config.ts             // vite config</span></span></code></pre></div><h2 id="ii-development-steps" tabindex="-1">II. Development Steps <a class="header-anchor" href="#ii-development-steps" aria-label="Permalink to “II. Development Steps”">​</a></h2><h3 id="_1-start-project-configure-environment-variables" tabindex="-1">1. Start Project &amp; Configure Environment Variables <a class="header-anchor" href="#_1-start-project-configure-environment-variables" aria-label="Permalink to “1. Start Project &amp; Configure Environment Variables”">​</a></h3><p>Install dependencies:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pnpm i</span></span></code></pre></div><p>Start Project:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pnpm dev</span></span></code></pre></div><p>Modify <code>devURL</code> in <code>env.config.ts</code> to your backend address. Clone the backend from <a href="https://github.com/ThingsPanel/thingspanel-backend-community" target="_blank" rel="noreferrer">ThingsPanel Backend</a> or use Docker deployment.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  const devURL = &#39;&#39;;</span></span></code></pre></div><p>Configure Environment Variables: <code>.env</code>, <code>.env.development</code>, <code>.env.production</code> correspond to global, development, and production variables respectively. Menus are fetched from the backend only when <code>VITE_AUTH_ROUTE_MODE=dynamic</code>.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>VITE_BASE_URL=/</span></span>
<span class="line"><span>VITE_APP_TITLE=ThingsPanel IoT Cloud Platform</span></span>
<span class="line"><span>VITE_APP_DESC=ThingsPanel</span></span>
<span class="line"><span># the prefix of the icon name</span></span>
<span class="line"><span>VITE_ICON_PREFIX=icon</span></span>
<span class="line"><span># the prefix of the local svg icon component, must include VITE_ICON_PREFIX</span></span>
<span class="line"><span># format {VITE_ICON_PREFIX}-{local icon name}</span></span>
<span class="line"><span>VITE_ICON_LOCAL_PREFIX=icon-local</span></span>
<span class="line"><span># auth route mode: static ｜ dynamic</span></span>
<span class="line"><span>VITE_AUTH_ROUTE_MODE=static</span></span>
<span class="line"><span># VITE_AUTH_ROUTE_MODE=dynamic</span></span>
<span class="line"><span># static auth route home</span></span>
<span class="line"><span>VITE_ROUTE_HOME=home</span></span>
<span class="line"><span># default menu icon</span></span>
<span class="line"><span>VITE_MENU_ICON=mdi:menu</span></span>
<span class="line"><span># encrypt password</span></span>
<span class="line"><span>VITE_ENCRYPT_PASSWORD=0</span></span></code></pre></div><h3 id="_2-write-vue-page" tabindex="-1">2. Write Vue Page <a class="header-anchor" href="#_2-write-vue-page" aria-label="Permalink to “2. Write Vue Page”">​</a></h3><p>Open the frontend project in your IDE. Create a new folder in <code>src/view</code>. Name it as you wish, for example, <code>test123</code>. <img src="`+i+`" alt="img.png"></p><p>Create a new Vue page named <code>index.vue</code> inside the <code>test123</code> directory. When running <code>pnpm dev</code>, the page route will be automatically added to <code>src\\router\\elegant\\routes.ts</code> mentioned above. Key info: <code>i18nKey</code>, <code>path</code>, <code>component</code>, <code>title</code>. You will need these when configuring the menu.</p><p><code>index.vue</code> code:</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;color:white&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;This is a test page&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h2</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;color:green&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;This is a test page&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;index&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> scoped</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>Route (auto-generated):</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;test123&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/test123&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;layout.base$view.test123&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    meta</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;test123&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      i18nKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;route.test123&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span></code></pre></div><p>After writing the page, you can add the menu.</p><h3 id="_3-add-menu" tabindex="-1">3. Add Menu <a class="header-anchor" href="#_3-add-menu" aria-label="Permalink to “3. Add Menu”">​</a></h3><p>Start the project, log in as <strong>Administrator</strong>, and ensure <code>VITE_AUTH_ROUTE_MODE=dynamic</code> is set in environment variables. Go to <strong>System Management</strong> -&gt; <strong>Menu Management</strong> on the left menu to open the permission management page. <img src="`+l+'" alt="img.png"></p><div class="tip custom-block"><p class="custom-block-title custom-block-title-default">TIP</p><p>Note: Only Super Admins have permission to view or edit the permission management page. Be sure to backup the database before modification. You must configure the I18n for the corresponding key in the language files. <img src="'+t+'" alt="img.png"></p></div><ol><li>Click <code>+ Add</code> in Menu Management.</li><li>Select Parent Menu.</li><li>Enter Title.</li><li>Enter <code>i18nKey: &#39;route.test123&#39;</code> from the route.</li><li>Enter <code>name: &#39;test123&#39;</code>.</li><li>Enter <code>path: &#39;/test123&#39;</code>.</li><li>Select an icon.</li><li>Set Sort Order.</li><li>Select Type.</li><li>Select Permissions.</li><li>Enter Description.</li><li>Confirm Add.</li></ol><p><img src="'+o+'" alt="img.png"></p><p>Refresh the page, and you should see the page appear in the menu list.</p><p><img src="'+c+'" alt="img.png"></p>',30)])])}const b=n(r,[["render",h]]);export{y as __pageData,b as default};
