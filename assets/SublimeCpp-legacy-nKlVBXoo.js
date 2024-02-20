System.register(["./index-legacy-Hxo3klQ_.js","./Image-legacy-_Im3IUy2.js"],(function(n,a){"use strict";var t,s,p,e,l,o;return{setters:[function(n){t=n.y,s=n.G,p=n.E,e=n.I,l=n.a5},function(n){o=n._}],execute:function(){var a={class:"md-blog m-auto text-left"},u=l('<h1 id="windows-%E4%B8%8B%E4%B8%BA-sublime-text-3-%E6%90%AD%E5%BB%BA-c%2Fc%2B%2B%E7%8E%AF%E5%A2%83" tabindex="-1"><a class="header-anchor" href="#windows-%E4%B8%8B%E4%B8%BA-sublime-text-3-%E6%90%AD%E5%BB%BA-c%2Fc%2B%2B%E7%8E%AF%E5%A2%83" data-clickable=""><span>Windows 下为 Sublime Text 3 搭建 C/C++环境</span></a></h1><p>写这篇博客时，我正在为新电脑搭建 C/C++ 环境</p><hr><p>步骤：</p><ol><li><p>下载 Sublime Text 3 本体</p></li><li><p>安装 MinGW</p></li><li><p>配置系统变量</p></li><li><p>让 Sublime 变得更适合工作</p><ul><li><p>安装插件</p></li><li><p>设置编译系统</p></li></ul></li></ol><hr><h2 id="%E4%B8%8B%E8%BD%BD-sublime-text-3-%E6%9C%AC%E4%BD%93" tabindex="-1"><a class="header-anchor" href="#%E4%B8%8B%E8%BD%BD-sublime-text-3-%E6%9C%AC%E4%BD%93" data-clickable=""><span>下载 Sublime Text 3 本体</span></a></h2><p>官方下载地址：<a href="http://sublimetext.com/3" data-clickable="">http://sublimetext.com/3</a></p><p>选择 Windows 64 bit.</p><p>下载后运行，安装。</p><p>安装时记住安装目录，因为 Sublime Text 3 安装后不会在桌面生成快捷方式。</p><p>如果没有记住也无妨，你可以在开始菜单里找到 Sublime Text 3.</p><hr><h2 id="%E5%AE%89%E8%A3%85-mingw" tabindex="-1"><a class="header-anchor" href="#%E5%AE%89%E8%A3%85-mingw" data-clickable=""><span>安装 MinGW</span></a></h2><p>如果你的电脑上已经有了 C/C++ 的编译器，那么你不需要重新下载 MinGW.</p><p>在 Dev C++ 和 CodeBlocks 等软件的文件夹内，</p><p>都可以找到一个名为 MinGW 的文件夹。</p><p>这个文件夹就是我们需要的东西。</p><p>如果你的电脑上没有 MinGW，那么在下面的地址下载到最新版：</p><p>下载地址：<a href="https://osdn.net/projects/mingw/releases/" data-clickable="">https://osdn.net/projects/mingw/releases/</a></p><p>下载按钮在左下角。</p>',21),i=p("p",null,"下载好之后一路确定，",-1),c=p("p",null,"在之后的这个页面里，把这几个全打上勾",-1),r=p("p",null,"然后 Installation -> Apply Changes -> Apply",-1),k=p("p",null,"完成之后 Win+R -> cmd -> g++ -v",-1),E=p("p",null,"如果出现类似这样的版本信息，就证明安装成功了。",-1),h=l('<hr><h2 id="%E9%85%8D%E7%BD%AE%E7%B3%BB%E7%BB%9F%E5%8F%98%E9%87%8F" tabindex="-1"><a class="header-anchor" href="#%E9%85%8D%E7%BD%AE%E7%B3%BB%E7%BB%9F%E5%8F%98%E9%87%8F" data-clickable=""><span>配置系统变量</span></a></h2><p>右键 此电脑 -&gt; 属性 -&gt; 高级系统设置 -&gt; 环境变量。</p><p>在下面一栏，也就是系统变量里，找到 Path，</p><p>在值里加入 MinGW 目录下，bin 文件夹的地址</p><p>例如，我把 MinGW 安装到了 C 盘根目录下，那么我需要加入：</p><pre><code>C:\\MinGW\\bin;\n</code></pre><p>如果系统是 Win7 还需要注意上一个值后面有没有分号，</p><p>如果前面没有分号，你需要先加入分号，再加入这个内容。</p><hr><h2 id="%E8%AE%A9-sublime-%E5%8F%98%E5%BE%97%E6%9B%B4%E9%80%82%E5%90%88%E5%B7%A5%E4%BD%9C" tabindex="-1"><a class="header-anchor" href="#%E8%AE%A9-sublime-%E5%8F%98%E5%BE%97%E6%9B%B4%E9%80%82%E5%90%88%E5%B7%A5%E4%BD%9C" data-clickable=""><span>让 Sublime 变得更适合工作</span></a></h2><p>打开 Sublime Text 3，按 Ctrl+Shift+P</p><p>在出现的控制台里输入 Package Control，安装 Package Control.</p><p>安装过程中是看不到进度条的，不要以为你电脑卡了。</p><p>安装成功后会有提示。</p><p>再按 Ctrl+Shift+P 呼出控制台，输入 Package Control，</p><p>找到 Package Control: Install Package</p>',17),q=l('<p>Enter之后会有几秒的寂寞。</p><p>输入 Chinese，安装 ChineseLocalizations.</p><p>过几秒安装完成就会变成中文界面。</p><p>还有很多对工作有用的插件都可以在这里找到。</p><p>之后是建立 C/C++ 的编译系统。</p><p>工具 -&gt; 编译系统 -&gt; 新建编译系统…</p><p>把以下内容原封不动地放在新文件里，替换掉原内容。</p><pre class="language-yml"><code class="language-yml"><span class="token punctuation">{</span>\n    <span class="token key atrule">&quot;encoding&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">,</span>\n    <span class="token key atrule">&quot;working_dir&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;$file_path&quot;</span><span class="token punctuation">,</span>\n    <span class="token key atrule">&quot;shell_cmd&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;g++ -Wall -std=c++11 \\&quot;$file_name\\&quot; -o \\&quot;$file_base_name\\&quot;&quot;</span><span class="token punctuation">,</span>\n    <span class="token key atrule">&quot;file_regex&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;^(..[^:]*):([0-9]+):?([0-9]+)?:? (.*)$&quot;</span><span class="token punctuation">,</span>\n    <span class="token key atrule">&quot;selector&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;source.c++&quot;</span><span class="token punctuation">,</span>\n    <span class="token key atrule">&quot;shell&quot;</span><span class="token punctuation">:</span> <span class="token boolean important">true</span><span class="token punctuation">,</span>\n \n    <span class="token key atrule">&quot;variants&quot;</span><span class="token punctuation">:</span>\n    <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>  \n        <span class="token key atrule">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Run in sublime&quot;</span><span class="token punctuation">,</span>\n            <span class="token key atrule">&quot;shell_cmd&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;g++ -Wall -std=c++11 \\&quot;$file_name\\&quot; -o \\&quot;$file_base_name\\&quot; &amp;&amp; cmd /c \\&quot;${file_path}/${file_base_name}\\&quot;&quot;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>  \n        <span class="token key atrule">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;CMD Run&quot;</span><span class="token punctuation">,</span>\n            <span class="token key atrule">&quot;shell_cmd&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;g++ -Wall -std=c++11 \\&quot;$file\\&quot; -o \\&quot;$file_base_name\\&quot; &amp;&amp; start cmd /c \\&quot;\\&quot;${file_path}/${file_base_name}\\&quot; &amp; pause\\&quot;&quot;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><p>Ctrl+S保存为 c++.sublime-build</p><p>写一个代码，Ctrl+Shift+B 选择刚才的编译系统 CMD Run</p>',10),m=p("p",null,"配置/测试完成",-1),B=p("p",null,"以后需要编译+运行代码的时候，只需要按 Ctrl+B 即可。",-1);n("default",{__name:"SublimeCpp",setup:function(n,l){return(0,l.expose)({frontmatter:{}}),function(n,l){var d=o;return t(),s("div",a,[u,p("p",null,[e(d,{src:"https://i.loli.net/2021/07/31/P9fndb4KtCswm8G.jpg",alt:"","show-toolbar-tooltip":""})]),i,c,p("p",null,[e(d,{src:"https://i.loli.net/2021/07/31/Zfivk2LDFbpYcox.jpg",alt:"","show-toolbar-tooltip":""})]),r,k,E,p("p",null,[e(d,{src:"https://i.loli.net/2021/07/31/SVjlsBFf6cYINAy.jpg",alt:"","show-toolbar-tooltip":""})]),h,p("p",null,[e(d,{src:"https://i.loli.net/2021/07/31/LuYxvgEZOyk8dpM.jpg",alt:"","show-toolbar-tooltip":""})]),q,p("p",null,[e(d,{src:"https://i.loli.net/2021/07/31/PCkqyXG3ESbjNJI.jpg",alt:"","show-toolbar-tooltip":""})]),m,B])}}})}}}));
