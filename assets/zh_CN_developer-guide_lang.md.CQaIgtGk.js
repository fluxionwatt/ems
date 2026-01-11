import{_ as a,c as n,o as e,ah as l,ey as i}from"./chunks/framework.C48Jt1K0.js";const u=JSON.parse('{"title":"国际化","description":"","frontmatter":{"sidebar_position":4},"headers":[],"relativePath":"zh_CN/developer-guide/lang.md","filePath":"zh_CN/developer-guide/lang.md"}'),p={name:"zh_CN/developer-guide/lang.md"};function t(c,s,o,r,h,d){return e(),n("div",null,[...s[0]||(s[0]=[l('<h1 id="国际化" tabindex="-1">国际化 <a class="header-anchor" href="#国际化" aria-label="Permalink to “国际化”">​</a></h1><h2 id="一、概述" tabindex="-1">一、概述 <a class="header-anchor" href="#一、概述" aria-label="Permalink to “一、概述”">​</a></h2><p>通过 ThingsPanel 对国际化 (i18n) 的支持，你可以 轻松地实现对 ThingsPanel 平台的翻译工作 。 目前支持两种语言，中文和英文。如果这两种语言不满足您的需求，可以定制其他语言。</p><h2 id="二、开发步骤" tabindex="-1">二、开发步骤 <a class="header-anchor" href="#二、开发步骤" aria-label="Permalink to “二、开发步骤”">​</a></h2><h3 id="_1、-新建语言文件" tabindex="-1">1、 新建语言文件 <a class="header-anchor" href="#_1、-新建语言文件" aria-label="Permalink to “1、 新建语言文件”">​</a></h3><p>语言文件在src\\locales文件夹下</p><p><img src="'+i+`" alt="img.png"></p><p>ch.js是中文语言文件，en.js是英文语言文件，其他语种请自定义。<br> 语言文件的格式如下：</p><div class="language-aidl"><button title="Copy Code" class="copy"></button><span class="lang">aidl</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const local: App.I18n.Schema = {</span></span>
<span class="line"><span>  custom,</span></span>
<span class="line"><span>  default: &#39;&#39;,</span></span>
<span class="line"><span>  title: &#39;ThingsPanel&#39;,</span></span>
<span class="line"><span>  system: {</span></span>
<span class="line"><span>    title: &#39;System Name: {name}&#39;,</span></span>
<span class="line"><span>    screen: &#39;可视化大屏&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  }</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title custom-block-title-default">TIP</p><p>所有的key都是大写，多个单词用下划线隔开<br> 长文本用TEXT1, TEXT2...<br> 多次复用的组件的KEY可放在COMMON里</p></div><h3 id="_2、使用语言文件" tabindex="-1">2、使用语言文件 <a class="header-anchor" href="#_2、使用语言文件" aria-label="Permalink to “2、使用语言文件”">​</a></h3><p>如果只翻译中文和英文，可跳过这一节.<br> 打开src\\locales\\locale.ts文件，将您定义的语言添加到languages中</p><div class="language-aidl"><button title="Copy Code" class="copy"></button><span class="lang">aidl</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import zhCN from &#39;./langs/zh-cn&#39;</span></span>
<span class="line"><span>import enUS from &#39;./langs/en-us&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const locales: Record&lt;App.I18n.LangType, App.I18n.Schema&gt; = {</span></span>
<span class="line"><span>  &#39;zh-CN&#39;: zhCN,</span></span>
<span class="line"><span>  &#39;en-US&#39;: enUS</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default locales</span></span></code></pre></div><p>其中lang是文件名，name是项目中语言下拉列表的语种名称，flag是语种图标。<br> 然后您就可以在页面中翻译文本了。</p><h3 id="_3、翻译页面" tabindex="-1">3、翻译页面 <a class="header-anchor" href="#_3、翻译页面" aria-label="Permalink to “3、翻译页面”">​</a></h3><ul><li>Template</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>格式： {{ $t(名称)}}  \`\`\`</span></span>
<span class="line"><span>  举例：</span></span>
<span class="line"><span>\`\`\`aidl</span></span>
<span class="line"><span>// 插槽方式</span></span>
<span class="line"><span>&lt;span class=&quot;font-weight-bolder text-dark&quot;&gt;</span></span>
<span class="line"><span>  {{ $t(&quot;HOME.QUICK_GUIDE&quot;) }}</span></span>
<span class="line"><span>&lt;/span&gt;</span></span></code></pre></div><div class="language-aidl"><button title="Copy Code" class="copy"></button><span class="lang">aidl</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 传值方式</span></span>
<span class="line"><span>&lt;el-table-column :label=&quot;$t(&#39;COMMON.NO&#39;)&quot; type=&quot;index&quot; width=&quot;260&quot;&gt;&lt;/el-table-column&gt;</span></span></code></pre></div><ul><li>js<br> 格式： this.$t(名称);<br> 举例：</li></ul><div class="language-aidl"><button title="Copy Code" class="copy"></button><span class="lang">aidl</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// vue 2.0</span></span>
<span class="line"><span>this.$t(&quot;PLUGIN.DEVICE_INFO&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// vue 3.0</span></span>
<span class="line"><span>const self = getCurrentInstance().proxy;</span></span>
<span class="line"><span>self.$t(&quot;PLUGIN.DEVICE_INFO&quot;);</span></span></code></pre></div>`,20)])])}const b=a(p,[["render",t]]);export{u as __pageData,b as default};
