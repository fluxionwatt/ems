import{_ as a,c as n,o as p,ah as l,e0 as e,e1 as t,e2 as i,e3 as o,e4 as r,e5 as c,e6 as g,e7 as d,e8 as u}from"./chunks/framework.C48Jt1K0.js";const _=JSON.parse('{"title":"依赖型插件","description":"","frontmatter":{"sidebar_position":3},"headers":[],"relativePath":"zh_CN/developer-guide/developing-plug-in/dependentPlug-in.md","filePath":"zh_CN/developer-guide/developing-plug-in/dependentPlug-in.md"}'),h={name:"zh_CN/developer-guide/developing-plug-in/dependentPlug-in.md"};function b(m,s,k,v,f,q){return p(),n("div",null,[...s[0]||(s[0]=[l('<h1 id="依赖型插件" tabindex="-1">依赖型插件 <a class="header-anchor" href="#依赖型插件" aria-label="Permalink to “依赖型插件”">​</a></h1><p>依赖型插件是一个可搭建各种行业方案的开发方案,或者<strong>行业积木</strong>。</p><p>依赖型插件的优点是：</p><ul><li><strong>快速拼装解决方案</strong>，效率比低代码更高。</li><li><strong>方案与底层平台分离</strong>，将个性化层与标准通用层完全分离。</li><li><strong>并行开发解耦</strong>，使大规模项目并行开发达到最高速度。</li><li><strong>跨项目复用</strong>，不同的项目之间，可以直接复制安装并引用。</li></ul><h2 id="举例说明" tabindex="-1">举例说明 <a class="header-anchor" href="#举例说明" aria-label="Permalink to “举例说明”">​</a></h2><p>一个消防机组依赖型插件，包含了发电机、储能电池、水泵等设备的监控与管理等功能与界面单元。</p><p>在任何需要消防机组的项目中，例如智慧楼宇，可以直接安装这个消防机组插件，就能将与这个机组管理相关的图表组件、报表、大屏都一次性加载并复用。因此大大节省了开发时间。</p><h2 id="依赖型插件依赖关系图" tabindex="-1">依赖型插件依赖关系图 <a class="header-anchor" href="#依赖型插件依赖关系图" aria-label="Permalink to “依赖型插件依赖关系图”">​</a></h2><p><img src="'+e+'" alt="依赖型插件依赖关系图"></p><h2 id="如何开发依赖型插件" tabindex="-1">如何开发依赖型插件 <a class="header-anchor" href="#如何开发依赖型插件" aria-label="Permalink to “如何开发依赖型插件”">​</a></h2><p>按照ThingsPanel可视化插件开发规范<strong>开发可视化插件</strong>，具体参考：<a href="./visualPlugin.html">可视化插件开发</a></p><p>如图所示，这是一个旅游大数据分析系统插件。<br> 开发效果样例图:<br><img src="'+t+'" alt="开发效果样例图"></p><p>可视化插件的视图主要由3部分组成</p><ul><li>左侧组件列表中可拖拽的图标视图<strong>icon.svg</strong></li><li>拖拽到画布上后显示的节点视图<strong>Main.vue</strong></li><li>右侧面板的样式视图<strong>Attribute.vue</strong>和数据视图<strong>Data.vue</strong></li></ul><p><img src="'+i+'" alt="依赖型插件视图"></p><h3 id="开发步骤" tabindex="-1">开发步骤： <a class="header-anchor" href="#开发步骤" aria-label="Permalink to “开发步骤：”">​</a></h3><ol><li><strong>在项目的src/plugins目录下新建一个travel-plugin文件夹作为旅游分析系统的插件主目录。</strong></li><li><strong>然后在trave-plugin目录下再新建一个travel文件夹。</strong></li><li><strong>在travel目录下创建Main.vue、Attribute.vue、Data.vue、index.ts。</strong></li><li><strong>将准备好的icon.svg文件放到插件的travel目录里。svg文件可以在这里 <a href="https://www.iconfont.cn/" target="_blank" rel="noreferrer">https://www.iconfont.cn/</a> 下载</strong></li></ol><p>目录结构如下：<br><img src="'+o+'" alt="依赖型插件目录结构"></p><ol start="5"><li><strong>在Main.vue中编写依赖型插件的主视图，参考开发效果样例图。</strong></li><li><strong>在Attribute.vue中编写依赖型插件的配置样式的面板，如图所示：</strong><br><img src="'+r+`" alt="样式面板"><br> Attribute.vue代码如下：</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;el-collapse v-model=&quot;activeNames&quot;&gt;</span></span>
<span class="line"><span>        &lt;el-collapse-item title=&quot;样式&quot; name=&quot;style&quot;&gt;</span></span>
<span class="line"><span>            &lt;el-form v-model=&quot;formData&quot; label-width=&quot;80px&quot; label-position=&quot;left&quot;&gt;</span></span>
<span class="line"><span>                &lt;el-form-item label=&quot;字体大小&quot;&gt;</span></span>
<span class="line"><span>                    &lt;el-input type=&quot;number&quot; v-model=&quot;formData.fontSize&quot;&gt;&lt;/el-input&gt;</span></span>
<span class="line"><span>                &lt;/el-form-item&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                &lt;el-form-item label=&quot;字体颜色&quot;&gt;</span></span>
<span class="line"><span>                    &lt;tp-color-picker v-model=&quot;formData.color&quot; /&gt;</span></span>
<span class="line"><span>                &lt;/el-form-item&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                &lt;el-form-item label=&quot;背景颜色&quot;&gt;</span></span>
<span class="line"><span>                    &lt;tp-color-picker v-model=&quot;formData.backgroundColor&quot; /&gt;</span></span>
<span class="line"><span>                &lt;/el-form-item&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                &lt;el-form-item label=&quot;边框宽度&quot;&gt;</span></span>
<span class="line"><span>                    &lt;el-input type=&quot;number&quot; v-model=&quot;formData.borderWidth&quot;&gt;&lt;/el-input&gt;</span></span>
<span class="line"><span>                &lt;/el-form-item&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                &lt;el-form-item label=&quot;边框颜色&quot;&gt;</span></span>
<span class="line"><span>                    &lt;tp-color-picker v-model=&quot;formData.borderColor&quot; /&gt;</span></span>
<span class="line"><span>                &lt;/el-form-item&gt;</span></span>
<span class="line"><span>            &lt;/el-form&gt;</span></span>
<span class="line"><span>        &lt;/el-collapse-item&gt;</span></span>
<span class="line"><span>    &lt;/el-collapse&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  components: {},</span></span>
<span class="line"><span>  props: {},</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>        formData: {</span></span>
<span class="line"><span>            fontSize: 20,</span></span>
<span class="line"><span>            color: &#39;#000000&#39;,</span></span>
<span class="line"><span>            backgroundColor: &#39;&#39;,</span></span>
<span class="line"><span>            borderWidth: 0,</span></span>
<span class="line"><span>            borderColor: &#39;#000000&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  methods: {}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre></div><ol start="7"><li><strong>在Data.vue中编写依赖型插件的数据绑定面板，如图所示：</strong><br><img src="`+c+`" alt="数据面板"><br> Data.vue代码如下：</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div style=&quot;height:100%&quot;&gt;</span></span>
<span class="line"><span>    &lt;el-row style=&quot;margin-bottom: 10px&quot;&gt;</span></span>
<span class="line"><span>        &lt;el-radio-group v-model=&quot;formData.bindType&quot;&gt;</span></span>
<span class="line"><span>          &lt;el-radio v-for=&quot;item in bindOptions&quot; :label=&quot;item.value&quot; size=&quot;small&quot;&gt;{{ item.label}}&lt;/el-radio&gt;</span></span>
<span class="line"><span>        &lt;/el-radio-group&gt;</span></span>
<span class="line"><span>    &lt;/el-row&gt;</span></span>
<span class="line"><span>    &lt;el-row style=&quot;height:100%&quot;&gt;</span></span>
<span class="line"><span>        &lt;!-- 静态数据 --&gt;</span></span>
<span class="line"><span>        &lt;el-input v-if=&quot;formData.bindType===&#39;static&#39;&quot; :rows=&quot;20&quot; type=&quot;textarea&quot; v-model=&quot;formData.static&quot;&gt;&lt;/el-input&gt;</span></span>
<span class="line"><span>        &lt;!-- 动态数据 --&gt;</span></span>
<span class="line"><span>        &lt;el-form-item v-else-if=&quot;formData.bindType===&#39;dynamic&#39;&quot; style=&quot;width:100%&quot;&gt;</span></span>
<span class="line"><span>          &lt;el-input :rows=&quot;2&quot; type=&quot;textarea&quot; v-model=&quot;formData.dynamic&quot;&gt;&lt;/el-input&gt;</span></span>
<span class="line"><span>        &lt;/el-form-item&gt;</span></span>
<span class="line"><span>        &lt;!-- 设备数据 --&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;w-full&quot; v-else-if=&quot;formData.bindType===&#39;device&#39;&quot; &gt;</span></span>
<span class="line"><span>          &lt;slot&gt;&lt;/slot&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    &lt;/el-row&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  components: {},</span></span>
<span class="line"><span>  props: {},</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>        formData: {}</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  methods: {}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre></div><ol start="8"><li><strong>在travel/index.ts文件中导出组件，示例代码如下：</strong></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import Travel_Attribute from &#39;./Attribute.vue&#39;;</span></span>
<span class="line"><span>import Travel_Data from &#39;./Data.vue&#39;;</span></span>
<span class="line"><span>import Travel_Main from &#39;./Main.vue&#39;;</span></span>
<span class="line"><span>import Travel_Icon from &#39;./icon.svg&#39;;</span></span>
<span class="line"><span>export { Travel_Attribute, Travel_Data, Travel_Main, Travel_Icon }</span></span></code></pre></div><ol start="9"><li><strong>在travel-plugin/index.ts文件中导出并配置插件的名称、分组、宽高等属性，示例代码如下：</strong></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import { Travel_Attribute, Travel_Data, Travel_Icon, Travel_Main } from &quot;./travel&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    views: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            name: &quot;travel&quot;,</span></span>
<span class="line"><span>            description: &quot;&quot;,</span></span>
<span class="line"><span>            group: &quot;旅游分析插件&quot;,</span></span>
<span class="line"><span>            size: { width: 200, height: 100 },</span></span>
<span class="line"><span>            icon: Travel_Icon,</span></span>
<span class="line"><span>            Main: Travel_Main,</span></span>
<span class="line"><span>            Attribute: Travel_Attribute,</span></span>
<span class="line"><span>            Data: Travel_Data</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="10"><li><strong>在plugins/index.ts文件中导出插件，示例代码如下：</strong></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// ...</span></span>
<span class="line"><span>import travelPlugin from &#39;./travel-plugin&#39;;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    travelPlugin,</span></span>
<span class="line"><span>    // 导出其他插件</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="11"><li>此时就可以启动项目查看效果了。<br> 在项目根目录下输入命令<code>pnpm run dev</code>，启动成功后，在浏览器输入localhost:5173/editor打开编辑器。<br> 在编辑器左侧组件列表的分组中找到旅游分析插件。<br><img src="`+g+'" alt="左侧列表"><br> 把组件拖拽到中间的画布上，效果如图所示： <img src="'+d+`" alt="左侧列表"></li></ol><h2 id="数据交互" tabindex="-1">数据交互 <a class="header-anchor" href="#数据交互" aria-label="Permalink to “数据交互”">​</a></h2><h3 id="编辑时交互" tabindex="-1">编辑时交互 <a class="header-anchor" href="#编辑时交互" aria-label="Permalink to “编辑时交互”">​</a></h3><p>当用户在右侧样式面板和数据面板配置了样式或绑定了数据后，还需要和画布上的节点进行交互，比如在样式面板配置了背景颜色或文字大小，画布上的节点需要相应的做出改变。</p><ol><li><strong>样式交互</strong><br><strong>当Attribute.vue中的数据发生改变时，我们通过如下代码把改变后的样式数据传递出去。</strong></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>this.$emit(&quot;onChange&quot;, { style: { ...val }});</span></span></code></pre></div><p>Attribute.vue示例代码如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>        formData: {</span></span>
<span class="line"><span>            // ...</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>watch: {</span></span>
<span class="line"><span>    formData: {</span></span>
<span class="line"><span>        handler(val) {</span></span>
<span class="line"><span>            // 监听formData，当formData的值改变时，把改变后的数据传递出去</span></span>
<span class="line"><span>            this.$emit(&quot;onChange&quot;, {</span></span>
<span class="line"><span>                style: { ...val }</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        deep: true</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>然后就可以在Main.vue中监听样式数据了。<br> Main.vue示例代码:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>props: {</span></span>
<span class="line"><span>    style: {</span></span>
<span class="line"><span>        type: Object,</span></span>
<span class="line"><span>        default: () =&gt; ({})</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>watch: {</span></span>
<span class="line"><span>    style: {</span></span>
<span class="line"><span>        handler: function (val, oldVal) {</span></span>
<span class="line"><span>            if (JSON.stringify(val) === &quot;{}&quot;) return;</span></span>
<span class="line"><span>            console.log(val);</span></span>
<span class="line"><span>            // 获取改变后的样式数据后，要执行的代码</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        immediate: true,</span></span>
<span class="line"><span>        deep: true</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="2"><li><strong>数据绑定交互</strong><br><strong>Data.vue中的数据发生改变时，我们通过如下代码把改变后的数据传递出去,</strong></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>this.$emit(&quot;onChange&quot;, { data: { bindType: this.bindType, ...val }});</span></span></code></pre></div><p>Data.vue示例代码如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      formData: {</span></span>
<span class="line"><span>        bindType: &#39;static&#39;,</span></span>
<span class="line"><span>        static: &quot;文本&quot;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      bindOptions: [</span></span>
<span class="line"><span>        { value: &#39;static&#39;, label: &#39;静态数据&#39; },</span></span>
<span class="line"><span>        { value: &#39;dynamic&#39;, label: &#39;动态数据&#39; },</span></span>
<span class="line"><span>        { value: &#39;device&#39;, label: &#39;设备数据&#39; }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  watch: {</span></span>
<span class="line"><span>    formData: {</span></span>
<span class="line"><span>      handler(val) {</span></span>
<span class="line"><span>        this.$emit(&quot;onChange&quot;, {</span></span>
<span class="line"><span>          data: { bindType: this.bindType, ...val }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      deep: true</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p>在Main.vue中监听数据</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  props: {</span></span>
<span class="line"><span>    data: {</span></span>
<span class="line"><span>      type: Object,</span></span>
<span class="line"><span>      default: () =&gt; ({})</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  watch: {</span></span>
<span class="line"><span>    data: {</span></span>
<span class="line"><span>      handler(val) {</span></span>
<span class="line"><span>        if (JSON.stringify(val) === &quot;{}&quot;) return;</span></span>
<span class="line"><span>        console.log(val);</span></span>
<span class="line"><span>        // 获取改变后的数据后，要执行的代码</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      deep: true,</span></span>
<span class="line"><span>      immediate: true</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="查看时交互" tabindex="-1">查看时交互 <a class="header-anchor" href="#查看时交互" aria-label="Permalink to “查看时交互”">​</a></h3><p>当用户预览或查看可视化时，想要向编辑器传递数据。<br> 比如我们在主视图Main.vue里加入了一个按钮，当点击了按钮时通知编辑器用户按下了按钮，让编辑器处理这个按钮的点击事件。通过如下代码实现：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>this.$emit(&#39;change&#39;, 要传递的数据)</span></span></code></pre></div><p>示例代码如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div style=&quot;width:100%;height:100%;&quot;&gt;</span></span>
<span class="line"><span>    &lt;el-button @click=&quot;handleClick&quot;&gt;按钮&lt;/el-button&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>    methods: {</span></span>
<span class="line"><span>        handleClick() {</span></span>
<span class="line"><span>          this.$emit(&#39;change&#39;, &quot;hello&quot;)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre></div><p>然后在src\\display\\components\\DisplayComponent.tsx中的onChange方法接收。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>methods: {</span></span>
<span class="line"><span>    onChange(value: any, _callback: any) {</span></span>
<span class="line"><span>        console.log(value)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>点击预览按钮打开可视化预览界面，打开控制台，点击按钮<br><img src="`+u+'" alt="数据交互"></p><h2 id="如何使用依赖型插件" tabindex="-1">如何使用依赖型插件 <a class="header-anchor" href="#如何使用依赖型插件" aria-label="Permalink to “如何使用依赖型插件”">​</a></h2><ol><li>创建依赖型插件所依赖的设备插件。</li><li>在应用管理中安装依赖型插件。</li><li>创建并接入设备，成功采集数据。</li><li>打开可视化、拖入依赖型插件所包含的大屏、图表组件。</li><li>点击大屏或者图表组件，绑定数据。</li><li>正常使用。</li></ol>',54)])])}const C=a(h,[["render",b]]);export{_ as __pageData,C as default};
