import{_ as i,c as a,o as l,ah as n}from"./chunks/framework.C48Jt1K0.js";const o=JSON.parse('{"title":"集群部署","description":"","frontmatter":{"sidebar_position":6},"headers":[],"relativePath":"zh_CN/installation/cluster_deploy.md","filePath":"zh_CN/installation/cluster_deploy.md"}'),e={name:"zh_CN/installation/cluster_deploy.md"};function t(p,s,h,E,r,k){return l(),a("div",null,[...s[0]||(s[0]=[n(`<h1 id="集群部署" tabindex="-1">集群部署 <a class="header-anchor" href="#集群部署" aria-label="Permalink to “集群部署”">​</a></h1><h2 id="集群部署架构图" tabindex="-1">集群部署架构图 <a class="header-anchor" href="#集群部署架构图" aria-label="Permalink to “集群部署架构图”">​</a></h2><div class="language-mermaid"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart TB</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    %% 外部连接</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    devices[&quot;物联网设备&lt;br&gt;(MQTT/HTTP/CoAP)&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    users[&quot;用户/应用程序&lt;br&gt;(Web/API访问)&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    %% 负载均衡层</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    subgraph LB[&quot;负载均衡层&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        lb[&quot;负载均衡集群&lt;br&gt;(Nginx/HAProxy)&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    %% MQTT代理层</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    subgraph MB[&quot;消息代理层&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        mqtt1[&quot;MQTT代理节点1&lt;br&gt;(VerneMQ)&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        mqtt2[&quot;MQTT代理节点2&lt;br&gt;(VerneMQ)&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        mqtt3[&quot;MQTT代理节点N&lt;br&gt;(VerneMQ)&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        webhook1[&quot;Webhook服务1&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        webhook2[&quot;Webhook服务2&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        webhook3[&quot;Webhook服务N&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    %% ThingsPanel应用层</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    subgraph APP[&quot;ThingsPanel应用层&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        subgraph TP1[&quot;应用节点1&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            api1[&quot;后端API服务&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            tdengine1[&quot;时序数据库服务&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        end</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        subgraph TP2[&quot;应用节点2&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            api2[&quot;后端API服务&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            tdengine2[&quot;时序数据库服务&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        end</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        subgraph TP3[&quot;应用节点N&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            api3[&quot;后端API服务&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            tdengine3[&quot;时序数据库服务&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        end</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    %% 缓存层</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    subgraph CACHE[&quot;缓存层&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        redis1[&quot;Redis主节点&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        redis2[&quot;Redis从节点1&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        redis3[&quot;Redis从节点N&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    %% 数据库层</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    subgraph DB[&quot;数据库层&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        td[&quot;时序数据库集群&lt;br&gt;(TDengine)&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        pg[&quot;元数据库集群&lt;br&gt;(PostgreSQL/TimescaleDB)&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    %% 连接关系</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    devices --&gt; lb</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    users --&gt; lb</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    lb --&gt; mqtt1 &amp; mqtt2 &amp; mqtt3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    lb --&gt; api1 &amp; api2 &amp; api3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    mqtt1 &lt;--&gt; mqtt2 &lt;--&gt; mqtt3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    mqtt1 --- webhook1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    mqtt2 --- webhook2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    mqtt3 --- webhook3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    mqtt1 --&gt; tdengine1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    mqtt2 --&gt; tdengine2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    mqtt3 --&gt; tdengine3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    api1 --- tdengine1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    api2 --- tdengine2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    api3 --- tdengine3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tdengine1 &amp; tdengine2 &amp; tdengine3 --&gt; td</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    api1 &amp; api2 &amp; api3 --&gt; redis1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    redis1 --&gt; redis2 &amp; redis3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    api1 &amp; api2 &amp; api3 --&gt; pg</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    api1 &amp; api2 &amp; api3 --&gt; td</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    %% 样式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    classDef default fill:#f9f9f9,stroke:#333,stroke-width:1px</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    classDef external fill:#f0f0f0,stroke:#666,stroke-width:1px</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    classDef layer fill:#e6f3ff,stroke:#333,stroke-width:2px</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    class devices,users external</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    class LB,MB,APP,CACHE,DB layer</span></span></code></pre></div><h2 id="_1-整体架构" tabindex="-1">1. 整体架构 <a class="header-anchor" href="#_1-整体架构" aria-label="Permalink to “1. 整体架构”">​</a></h2><p>ThingsPanel采用分层架构设计，从上到下分为负载均衡层、消息代理层、应用层、缓存层和数据库层。这种分层架构具有高可用性、可扩展性和可维护性的特点。</p><h2 id="_2-各层详细说明" tabindex="-1">2. 各层详细说明 <a class="header-anchor" href="#_2-各层详细说明" aria-label="Permalink to “2. 各层详细说明”">​</a></h2><h3 id="_2-1-接入层" tabindex="-1">2.1 接入层 <a class="header-anchor" href="#_2-1-接入层" aria-label="Permalink to “2.1 接入层”">​</a></h3><ul><li><p><strong>设备接入</strong></p><ul><li>支持多种协议：MQTT、HTTP、CoAP</li><li>支持海量设备并发接入</li><li>支持设备认证和安全机制</li></ul></li><li><p><strong>用户访问</strong></p><ul><li>支持Web界面访问</li><li>提供标准REST API接口</li><li>支持多种客户端应用接入</li></ul></li></ul><h3 id="_2-2-负载均衡层" tabindex="-1">2.2 负载均衡层 <a class="header-anchor" href="#_2-2-负载均衡层" aria-label="Permalink to “2.2 负载均衡层”">​</a></h3><ul><li><strong>组件</strong>：Nginx/HAProxy集群</li><li><strong>功能</strong>： <ul><li>实现设备连接的负载均衡</li><li>提供高可用性保证</li><li>支持横向扩展</li><li>流量控制和安全防护</li></ul></li></ul><h3 id="_2-3-消息代理层" tabindex="-1">2.3 消息代理层 <a class="header-anchor" href="#_2-3-消息代理层" aria-label="Permalink to “2.3 消息代理层”">​</a></h3><ul><li><p><strong>MQTT代理节点（VerneMQ）</strong></p><ul><li>支持集群部署</li><li>节点间数据同步</li><li>设备消息的实时转发</li><li>支持QoS服务质量保证</li></ul></li><li><p><strong>Webhook服务</strong></p><ul><li>与MQTT代理紧密集成</li><li>提供消息预处理能力</li><li>支持自定义消息处理逻辑</li></ul></li></ul><h3 id="_2-4-thingspanel应用层" tabindex="-1">2.4 ThingsPanel应用层 <a class="header-anchor" href="#_2-4-thingspanel应用层" aria-label="Permalink to “2.4 ThingsPanel应用层”">​</a></h3><ul><li><p><strong>后端API服务</strong></p><ul><li>设备管理</li><li>用户权限管理</li><li>业务规则引擎</li><li>告警管理</li><li>数据可视化</li></ul></li><li><p><strong>时序数据库服务</strong></p><ul><li>设备数据高效存储</li><li>数据清洗和转换</li><li>数据分析处理</li><li>历史数据管理</li></ul></li></ul><h3 id="_2-5-缓存层" tabindex="-1">2.5 缓存层 <a class="header-anchor" href="#_2-5-缓存层" aria-label="Permalink to “2.5 缓存层”">​</a></h3><ul><li><strong>Redis集群</strong><ul><li>采用主从架构</li><li>提供高速数据缓存</li><li>支持会话管理</li><li>提升系统响应速度</li></ul></li></ul><h3 id="_2-6-数据库层" tabindex="-1">2.6 数据库层 <a class="header-anchor" href="#_2-6-数据库层" aria-label="Permalink to “2.6 数据库层”">​</a></h3><ul><li><p><strong>时序数据库（TDengine）</strong></p><ul><li>针对物联网数据特点优化</li><li>高性能数据存储和查询</li><li>支持数据压缩</li><li>提供数据保留策略</li></ul></li><li><p><strong>元数据库（PostgreSQL/TimescaleDB）</strong></p><ul><li>存储业务元数据</li><li>设备配置信息</li><li>用户及权限数据</li><li>支持复杂业务查询</li></ul></li></ul><h2 id="_3-系统特点" tabindex="-1">3. 系统特点 <a class="header-anchor" href="#_3-系统特点" aria-label="Permalink to “3. 系统特点”">​</a></h2><h3 id="_3-1-高可用性" tabindex="-1">3.1 高可用性 <a class="header-anchor" href="#_3-1-高可用性" aria-label="Permalink to “3.1 高可用性”">​</a></h3><ul><li>各层组件支持集群部署</li><li>无单点故障设计</li><li>服务自动容错和恢复</li><li>数据多副本存储</li></ul><h3 id="_3-2-可扩展性" tabindex="-1">3.2 可扩展性 <a class="header-anchor" href="#_3-2-可扩展性" aria-label="Permalink to “3.2 可扩展性”">​</a></h3><ul><li>支持水平扩展</li><li>各层可独立扩容</li><li>灵活的节点添加/删除</li><li>动态负载均衡</li></ul><h3 id="_3-3-安全性" tabindex="-1">3.3 安全性 <a class="header-anchor" href="#_3-3-安全性" aria-label="Permalink to “3.3 安全性”">​</a></h3><ul><li>设备接入安全认证</li><li>数据传输加密</li><li>用户访问权限控制</li><li>多层安全防护</li></ul><h3 id="_3-4-可维护性" tabindex="-1">3.4 可维护性 <a class="header-anchor" href="#_3-4-可维护性" aria-label="Permalink to “3.4 可维护性”">​</a></h3><ul><li>组件解耦设计</li><li>便于问题定位</li><li>支持在线升级</li><li>完善的监控告警</li></ul><h2 id="_4-部署建议" tabindex="-1">4. 部署建议 <a class="header-anchor" href="#_4-部署建议" aria-label="Permalink to “4. 部署建议”">​</a></h2><h3 id="_4-1-小型部署-设备数量-1万" tabindex="-1">4.1 小型部署（设备数量<code>&lt;1万</code>） <a class="header-anchor" href="#_4-1-小型部署-设备数量-1万" aria-label="Permalink to “4.1 小型部署（设备数量&lt;1万）”">​</a></h3><ul><li>最小化组件部署</li><li>单节点部署即可满足需求</li><li>建议配置： <ul><li>2核4G以上服务器</li><li>100GB以上存储空间</li></ul></li></ul><h3 id="_4-2-中型部署-设备数量1万-10万" tabindex="-1">4.2 中型部署（设备数量1万-10万） <a class="header-anchor" href="#_4-2-中型部署-设备数量1万-10万" aria-label="Permalink to “4.2 中型部署（设备数量1万-10万）”">​</a></h3><ul><li>建议双节点集群部署</li><li>关键组件冗余备份</li><li>建议配置： <ul><li>4核8G以上服务器</li><li>500GB以上存储空间</li></ul></li></ul><h3 id="_4-3-大型部署-设备数量-10万" tabindex="-1">4.3 大型部署（设备数量<code>&gt;10万</code>） <a class="header-anchor" href="#_4-3-大型部署-设备数量-10万" aria-label="Permalink to “4.3 大型部署（设备数量&gt;10万）”">​</a></h3><ul><li>全组件集群部署</li><li>跨机房容灾备份</li><li>建议配置： <ul><li>8核16G以上服务器</li><li>1TB以上存储空间</li><li>根据实际需求扩展节点</li></ul></li></ul><h2 id="_5-扩展性建议" tabindex="-1">5. 扩展性建议 <a class="header-anchor" href="#_5-扩展性建议" aria-label="Permalink to “5. 扩展性建议”">​</a></h2><ul><li>预留50%以上的性能余量</li><li>分阶段扩容规划</li><li>关注数据存储容量</li><li>定期进行性能评估</li></ul>`,36)])])}const g=i(e,[["render",t]]);export{o as __pageData,g as default};
