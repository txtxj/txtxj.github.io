import{P as s,Q as n,ag as e}from"./index-_YeMFVQC.js";const l={class:"md-blog m-auto text-left"},o=e('<h1 id="%E5%9C%A8-ubuntu-20.04-%E4%B8%AD%E9%85%8D%E7%BD%AE-clash-for-linux" tabindex="-1"><a class="header-anchor" href="#%E5%9C%A8-ubuntu-20.04-%E4%B8%AD%E9%85%8D%E7%BD%AE-clash-for-linux" data-clickable=""><span>在 Ubuntu 20.04 中配置 Clash for Linux</span></a></h1><p>之前一直在用 Windows ，用的梯子是不需要自己配置的。装了双系统之后一直苦于 Ubuntu 中 Github 等网站速度过慢。尝试了使用 <a href="https://github.com/qingshuisiyuan/electron-ssr-backup" data-clickable="">electron-ssr</a> ，但没找到靠谱的机场，后来在一个看起来不错的 Trojan 机场下面看见能用 Clash 托管，就换用 Clash 了。</p><h2 id="%E4%B8%8B%E8%BD%BD-clash" tabindex="-1"><a class="header-anchor" href="#%E4%B8%8B%E8%BD%BD-clash" data-clickable=""><span>下载 Clash</span></a></h2><p>Clash 仓库地址：<a href="https://github.com/Dreamacro/clash" data-clickable="">https://github.com/Dreamacro/clash</a></p><p>在 <a href="https://github.com/Dreamacro/clash/releases" data-clickable="">Release</a> 页面中下载最新的 gz 压缩包，我下载的版本为 <a href="https://github.com/Dreamacro/clash/releases/download/v1.9.0/clash-linux-amd64-v1.9.0.gz" data-clickable="">clash-linux-amd64-v1.9.0.gz</a> .</p><p>在 Terminal 中进入下载文件夹，解压压缩包</p><pre class="language-shell"><code class="language-shell">gunzip clash-linux-amd64-v1.9.0.gz\n</code></pre><p>解压得到文件为 clash-linux-amd64-v1.9.0 ，为操作方便，可将其重命名为 clash</p><pre class="language-shell"><code class="language-shell"><span class="token function">mv</span> clash-linux-amd64-v1.9.0 clash\n</code></pre><p>将其移动到一个单独的文件夹中</p><pre class="language-shell"><code class="language-shell"><span class="token function">mkdir</span> ~/clash\n<span class="token function">mv</span> clash ~/clash\n</code></pre><h2 id="%E4%B8%8B%E8%BD%BD%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6" tabindex="-1"><a class="header-anchor" href="#%E4%B8%8B%E8%BD%BD%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6" data-clickable=""><span>下载配置文件</span></a></h2><p>进入刚创建的 clash 文件夹，为 clash 授予可执行权限，并运行</p><pre class="language-shell"><code class="language-shell"><span class="token builtin class-name">cd</span> ~/clash\n<span class="token function">chmod</span> +x clash\nclash\n</code></pre><p>程序将会提示缺少 config.yaml 和 Country.mmdb 两个配置文件，并自动开始下载，文件下载后位于 <code>~/.config/clash/</code> 中。</p><p>需要注意的是，如果安装的 Go 语言版本过低，在该步骤中可能会出现报错。需要按照如下方法卸载旧版本 Go 并安装至少 Go v1.17 。</p><pre class="language-shell"><code class="language-shell"><span class="token function">sudo</span> <span class="token function">apt-get</span> remove golang\n<span class="token function">sudo</span> <span class="token function">apt-get</span> remove golang-go\n<span class="token function">sudo</span> <span class="token function">apt</span> auto remove\n<span class="token function">wget</span> https://studygolang.com/dl/golang/go1.17.linux-amd64.tar.gz\n<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> go1.17.linux-amd64.tar.gz <span class="token parameter variable">-C</span> /usr/lib\n</code></pre><p>并添加环境变量</p><pre class="language-shell"><code class="language-shell">gedit /etc/profile\n</code></pre><p>在最后添加</p><pre class="language-shell"><code class="language-shell"><span class="token builtin class-name">export</span> <span class="token assign-left variable">GOPATH</span><span class="token operator">=</span>/opt/gopath\n<span class="token builtin class-name">export</span> <span class="token assign-left variable">GOROOT</span><span class="token operator">=</span>/usr/lib/go\n<span class="token builtin class-name">export</span> <span class="token assign-left variable">GOARCH</span><span class="token operator">=</span><span class="token number">386</span>\n<span class="token builtin class-name">export</span> <span class="token assign-left variable">GOOS</span><span class="token operator">=</span>linux\n<span class="token builtin class-name">export</span> <span class="token assign-left variable">GOTOOLS</span><span class="token operator">=</span><span class="token variable">$GOROOT</span>/pkg/tool\n<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$GOROOT</span>/bin:<span class="token variable">$GOPATH</span>/bin\n</code></pre><p>查询 Go 版本结果如下</p><pre class="language-shell"><code class="language-shell">txtxj@txtxj-Lenovo-Legion:~$ go version\ngo version go1.17 linux/amd64\n</code></pre><h2 id="%E8%8E%B7%E5%8F%96%E8%AE%A2%E9%98%85%E9%93%BE%E6%8E%A5" tabindex="-1"><a class="header-anchor" href="#%E8%8E%B7%E5%8F%96%E8%AE%A2%E9%98%85%E9%93%BE%E6%8E%A5" data-clickable=""><span>获取订阅链接</span></a></h2><p>在你使用的机场中复制 Clash 订阅，获得一个订阅链接，访问该链接下载得到一个 yaml 文件。</p><p>进入下载文件夹，将该文件重命名为 config.yaml ，并覆盖上一步中的 config.yaml 文件</p><pre class="language-shell"><code class="language-shell"><span class="token function">mv</span> ClashR_xxxxxxxxxx.yaml config.yaml\n<span class="token function">mv</span> <span class="token parameter variable">-f</span> config.yaml ~/.config/clash\n</code></pre><h2 id="%E9%85%8D%E7%BD%AE%E7%BD%91%E7%BB%9C%E4%BB%A3%E7%90%86%E8%AE%BE%E7%BD%AE" tabindex="-1"><a class="header-anchor" href="#%E9%85%8D%E7%BD%AE%E7%BD%91%E7%BB%9C%E4%BB%A3%E7%90%86%E8%AE%BE%E7%BD%AE" data-clickable=""><span>配置网络代理设置</span></a></h2><p>访问 <a href="http://clash.razord.top/" data-clickable="">clash.razord.top</a> ，代理与端口、密钥分别对应 config.yaml 文件中的 <code>external-controller</code> 、 <code>secret</code> ，如果 <code>secret</code> 为空，则先设置一个密钥后再在网页端登录。</p><p>打开 设置 - 网络 - 网络代理，设置为手动。</p><p>根据网页端信息填写 HTTP 代理、 HTTPS 代理、 Socks 主机。</p><p>运行 Clash</p><pre class="language-shell"><code class="language-shell">~/clash/clash\n</code></pre><p>保持 Terminal 运行，即可正常访问国外网页。</p><h2 id="%E8%AE%BE%E7%BD%AE%E5%BF%AB%E6%8D%B7%E6%96%B9%E5%BC%8F" tabindex="-1"><a class="header-anchor" href="#%E8%AE%BE%E7%BD%AE%E5%BF%AB%E6%8D%B7%E6%96%B9%E5%BC%8F" data-clickable=""><span>设置快捷方式</span></a></h2><p>在桌面创建快捷方式，以快速启动 Clash</p><pre class="language-shell"><code class="language-shell">gedit ~/桌面/clash.desktop\n</code></pre><p>文件内容为</p><pre class="language-shell"><code class="language-shell"><span class="token punctuation">[</span>Desktop Entry<span class="token punctuation">]</span>\n<span class="token assign-left variable">Name</span><span class="token operator">=</span>Clash\n<span class="token assign-left variable">Icon</span><span class="token operator">=</span>/home/<span class="token variable">$username</span>/clash/clash_logo.png\n<span class="token assign-left variable">Exec</span><span class="token operator">=</span><span class="token string">&quot;/home/<span class="token variable">$username</span>/clash/clash&quot;</span> %u\n<span class="token assign-left variable">Version</span><span class="token operator">=</span><span class="token number">1.0</span>\n<span class="token assign-left variable">Type</span><span class="token operator">=</span>Application\n<span class="token assign-left variable">Terminal</span><span class="token operator">=</span>false\n<span class="token assign-left variable">StartupNotify</span><span class="token operator">=</span>true\n</code></pre><p>其中 clash_logo.png 为自行设置的快捷方式图标。</p>',40),c=[o],g="配置 Clash for Linux",u="2022-02-09T12:27:03.000Z",d=!0,E="md",k=["笔记"],m="https://s2.loli.net/2022/02/09/ElLMdJiOr98Igf2.jpg",b=null,f={__name:"Clash4Linux",setup(t,{expose:a}){return a({frontmatter:{title:"配置 Clash for Linux",date:"2022-02-09T12:27:03.000Z",toc:!0,math:"md",tags:["笔记"],cover:"https://s2.loli.net/2022/02/09/ElLMdJiOr98Igf2.jpg",grow:null}}),(r,i)=>(s(),n("div",l,c))}};export{m as cover,u as date,f as default,b as grow,E as math,k as tags,g as title,d as toc};
