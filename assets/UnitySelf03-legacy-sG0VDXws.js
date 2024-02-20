System.register(["./index-legacy-R5dxKujw.js"],(function(n,s){"use strict";var a,p,t;return{setters:[function(n){a=n.y,p=n.G,t=n.a5}],execute:function(){var s={class:"md-blog m-auto text-left"},o=[t('<p>本篇记录了物体移动以及摄像机跟随防抖动的实现。</p><hr><h2 id="%E9%94%AE%E7%9B%98%E6%8E%A7%E5%88%B6%E7%89%A9%E4%BD%93%E7%A7%BB%E5%8A%A8" tabindex="-1"><a class="header-anchor" href="#%E9%94%AE%E7%9B%98%E6%8E%A7%E5%88%B6%E7%89%A9%E4%BD%93%E7%A7%BB%E5%8A%A8" data-clickable=""><span>键盘控制物体移动</span></a></h2><p>使用 <code>Input.GetAxis()</code> 或 <code>Input.GetAxisRaw()</code> 获取 <code>axisName</code> 标识的虚拟轴的值。</p><p>以下内容摘自 Unity API.</p><blockquote><p>对于键盘和游戏杆输入设备， <code>GetAxis()</code> 返回值是一个介于 -1 和 1 之间的浮点数。</p><p>该值的含义取决于输入控制的类型，例如，对于游戏杆的水平轴，值为 1 表示游戏杆向右推到底，值为 -1 表示游戏杆向左推到底；值为 0 表示游戏杆处于中性位置。</p><p>如果将轴映射到鼠标，该值会有所不同，并且不会在 -1…1 的范围内。此时，该值为当前鼠标增量乘以轴灵敏度。通常，正值表示鼠标向右/向下移动，负值表示鼠标向左/向上移动。</p><p><code>GetAxisRaw()</code> 与前者类似，但未应用平滑过滤。</p><p>对于键盘和游戏杆输入，其返回值将处于 -1…1 的范围内。</p><p>由于未对输入进行平滑处理，键盘输入将始终为 -1、0 或 1。</p></blockquote><p>这里我使用了 <code>GetAxisRaw()</code> 进行键盘的输入。</p><p>首先创建一个方向变量。</p><pre class="language-cs"><code class="language-cs"><span class="token class-name">Vector2</span> dir <span class="token operator">=</span> Vector2<span class="token punctuation">.</span>zero<span class="token punctuation">;</span>\n</code></pre><p>用两个变量记录该帧方向键是否被按下</p><pre class="language-cs"><code class="language-cs"><span class="token class-name"><span class="token keyword">float</span></span> rh <span class="token operator">=</span> Input<span class="token punctuation">.</span><span class="token function">GetAxisRaw</span><span class="token punctuation">(</span><span class="token string">&quot;Horizontal&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name"><span class="token keyword">float</span></span> rv <span class="token operator">=</span> Input<span class="token punctuation">.</span><span class="token function">GetAxisRaw</span><span class="token punctuation">(</span><span class="token string">&quot;Vertical&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><p>接着判断这两个变量的正负，并修改方向变量，注意向量单位化。</p><p>同时可以控制 <code>animator</code> ，修改所控制物体的朝向与移动动画。</p><pre class="language-cs"><code class="language-cs"><span class="token keyword">if</span> <span class="token punctuation">(</span>rh <span class="token operator">&lt;</span> <span class="token number">0f</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    dir<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\n    animator<span class="token punctuation">.</span><span class="token function">SetInteger</span><span class="token punctuation">(</span><span class="token string">&quot;Direction&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>rh <span class="token operator">&gt;</span> <span class="token number">0f</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    dir<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    animator<span class="token punctuation">.</span><span class="token function">SetInteger</span><span class="token punctuation">(</span><span class="token string">&quot;Direction&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span>rv <span class="token operator">&gt;</span> <span class="token number">0f</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    dir<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    animator<span class="token punctuation">.</span><span class="token function">SetInteger</span><span class="token punctuation">(</span><span class="token string">&quot;Direction&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>rv <span class="token operator">&lt;</span> <span class="token number">0f</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    dir<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\n    animator<span class="token punctuation">.</span><span class="token function">SetInteger</span><span class="token punctuation">(</span><span class="token string">&quot;Direction&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\ndir<span class="token punctuation">.</span><span class="token function">Normalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nanimator<span class="token punctuation">.</span><span class="token function">SetBool</span><span class="token punctuation">(</span><span class="token string">&quot;IsMoving&quot;</span><span class="token punctuation">,</span> dir<span class="token punctuation">.</span>magnitude <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><p>为物体赋予速度</p><pre class="language-cs"><code class="language-cs"><span class="token generic-method"><span class="token function">GetComponent</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Rigidbody2D<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>velocity <span class="token operator">=</span> speed <span class="token operator">*</span> dir<span class="token punctuation">;</span>\n</code></pre><hr><h2 id="%E9%95%9C%E5%A4%B4%E8%B7%9F%E9%9A%8F" tabindex="-1"><a class="header-anchor" href="#%E9%95%9C%E5%A4%B4%E8%B7%9F%E9%9A%8F" data-clickable=""><span>镜头跟随</span></a></h2><p>一种简单的镜头跟随方式为</p><p>记录主角和镜头之间的初始相对位移，并在每一帧使用该相对位移修改摄像机位置，</p><p>达到主角和摄像机同步运动的效果。</p><p>代码如下</p><pre class="language-cs"><code class="language-cs"><span class="token keyword">public</span> <span class="token class-name">GameObject</span> target<span class="token punctuation">;</span>\n\n<span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>\n\n    offset <span class="token operator">=</span> transform<span class="token punctuation">.</span>position <span class="token operator">-</span> target<span class="token punctuation">.</span>position<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>\n\n    transform<span class="token punctuation">.</span>position <span class="token operator">=</span> target<span class="token punctuation">.</span>position <span class="token operator">+</span> offset<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><p>但该方法在主角撞击墙体的时候，可能会导致摄像机剧烈抖动。</p><p>一个简便的解决方案为，不让摄像机每时每刻都与主角的相对位置不变，</p><p>而是让摄像机跟随在主角身后，慢主角一步。</p><p>这样的效果就像是摄影师在跟随主角跑动一样。</p><p>这就需要用到插值，即 <code>Vector3.Lerp()</code></p><p>该函数原型为</p><pre class="language-cs"><code class="language-cs"><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">Vector3</span> Lerp <span class="token punctuation">(</span><span class="token class-name">Vector3</span> a<span class="token punctuation">,</span> <span class="token class-name">Vector3</span> b<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">float</span></span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><p>返回值为 <code>a + (b - a) * t</code></p><p>要求 <code>t</code> 的值限制在 0 到 1 之间。</p><p>在每次 <code>Update()</code> 的时候，不再直接修改 <code>position</code></p><p>而是使用</p><pre class="language-cs"><code class="language-cs">targetPos <span class="token operator">=</span> target<span class="token punctuation">.</span>position <span class="token operator">+</span> offset<span class="token punctuation">;</span>\ntransform<span class="token punctuation">.</span>position <span class="token operator">=</span> Vector3<span class="token punctuation">.</span><span class="token function">Lerp</span><span class="token punctuation">(</span>transform<span class="token punctuation">.</span>position<span class="token punctuation">,</span> targetPos<span class="token punctuation">,</span> lerpSpeed<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><p>此处 <code>lerpSpeed</code> 可以是一个较小的浮点数，如 <code>0.01f</code> ，</p><p>另外，为防止游戏帧率变化导致摄像机跟随速度变化，还可以将上述代码修改为</p><pre class="language-cs"><code class="language-cs">targetPos <span class="token operator">=</span> target<span class="token punctuation">.</span>position <span class="token operator">+</span> offset<span class="token punctuation">;</span>\ntransform<span class="token punctuation">.</span>position <span class="token operator">=</span> Vector3<span class="token punctuation">.</span><span class="token function">Lerp</span><span class="token punctuation">(</span>transform<span class="token punctuation">.</span>position<span class="token punctuation">,</span> targetPos<span class="token punctuation">,</span> lerpSpeed <span class="token operator">*</span> Time<span class="token punctuation">.</span>deltaTime<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><p>需要注意的是， <code>Time.deltaTime</code> 是以秒为单位，</p><p>在每次 <code>Update()</code> 的时候， <code>Time.deltaTime</code> 的值已经是一个较小的浮点数，</p><p>此时 <code>lerpSpeed</code> 应当作为 <code>Time.deltaTime</code> 的修饰系数。</p>',41)];n("default",{__name:"UnitySelf03",setup:function(n,t){return(0,t.expose)({frontmatter:{}}),function(n,t){return a(),p("div",s,o)}}})}}}));
