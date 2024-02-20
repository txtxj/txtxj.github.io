System.register(["./index-legacy-Hxo3klQ_.js"],(function(n,a){"use strict";var s,p,t;return{setters:[function(n){s=n.y,p=n.G,t=n.a5}],execute:function(){var a={class:"md-blog m-auto text-left"},e=[t('<p>本篇笔记记录了瞬移魔法的穿墙问题的解决问题。</p><hr><h2 id="%E7%9E%AC%E7%A7%BB%E9%AD%94%E6%B3%95%E7%A9%BF%E5%A2%99%E9%97%AE%E9%A2%98" tabindex="-1"><a class="header-anchor" href="#%E7%9E%AC%E7%A7%BB%E9%AD%94%E6%B3%95%E7%A9%BF%E5%A2%99%E9%97%AE%E9%A2%98" data-clickable=""><span>瞬移魔法穿墙问题</span></a></h2><p>在 2021.1.1 的版本中，</p><p>如果玩家贴墙向墙内发射瞬移魔法，</p><p>由于发射口与玩家人物中心之间有一定的距离，</p><p>所以瞬移魔法发射的一瞬间，就已经位于墙内，</p><p>接着魔法立刻消失，玩家被传送至墙内。</p><p>网上查找解决方案，</p><p>关于防止子弹穿墙问题的解决方案大多是</p><p>发射射线，</p><p>然后在射线命中碰撞体时做出命中效果，</p><p>再发射一个物体作为子弹。</p><p>但在我的游戏中，魔法的移动速度并不快，</p><p>不能用射线这种瞬间判断是否命中的方式。</p><hr><h2 id="%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88" tabindex="-1"><a class="header-anchor" href="#%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88" data-clickable=""><span>解决方案</span></a></h2><p>给发射口加一个刚体组件和一个碰撞体组件，</p><p>且将碰撞体设置为触发器，</p><p>加入如下代码：</p><pre class="language-cs"><code class="language-cs"><span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnTriggerStay2D</span><span class="token punctuation">(</span><span class="token class-name">Collider2D</span> target<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span>tag <span class="token operator">!=</span> <span class="token string">&quot;Player&quot;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        isfence <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><p>并在攻击时加入如下判断：</p><pre class="language-cs"><code class="language-cs"><span class="token keyword">if</span> <span class="token punctuation">(</span>fr <span class="token operator">==</span> <span class="token number">1f</span> <span class="token operator">&amp;&amp;</span> isfire <span class="token operator">==</span> <span class="token boolean">false</span> <span class="token operator">&amp;&amp;</span> isinterval <span class="token operator">==</span> <span class="token boolean">false</span> <span class="token operator">&amp;&amp;</span> isfence <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    isfire <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    timeCounter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><p>经测试，</p><p>当玩家面朝墙的时候，</p><p>按下攻击键不能使用魔法。</p><p>问题解决。</p><hr><h2 id="%E8%BF%98%E6%98%AF%E7%9E%AC%E7%A7%BB%E9%AD%94%E6%B3%95%E7%A9%BF%E5%A2%99%E9%97%AE%E9%A2%98" tabindex="-1"><a class="header-anchor" href="#%E8%BF%98%E6%98%AF%E7%9E%AC%E7%A7%BB%E9%AD%94%E6%B3%95%E7%A9%BF%E5%A2%99%E9%97%AE%E9%A2%98" data-clickable=""><span>还是瞬移魔法穿墙问题</span></a></h2><p>远距离发射瞬移魔法的时候，</p><p>可能由于角度问题，导致魔法仍然会卡进墙内，使得玩家瞬移入墙。</p><p>玩家入墙后，由于发射口与墙始终有接触，玩家不能发射任何魔法，</p><p>游戏卡死。</p><hr><h2 id="%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88-1" tabindex="-1"><a class="header-anchor" href="#%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88-1" data-clickable=""><span>解决方案</span></a></h2><p>网上查阅了Unity手册，</p><p>发现是因为子弹和障碍物的 <code>Collision Detection</code> 没有设置为 <code>Continuous</code>。</p><p>将两者设置好后，再次测试，</p><p>发现玩家瞬移卡墙次数明显减少，</p><p>但偶尔还是会发生卡墙的情况。</p><p>下面给出一种解决方案，</p><p>这个方案是尝试了 5h 后偶然发现的，</p><p>不清楚原理是什么。</p><ol><li>给障碍物添加一个物理材质，将其弹性设置为 1。</li><li>魔法离开碰撞体时将玩家传送至魔法所在的位置。</li></ol><p>代码如下：</p><pre class="language-cs"><code class="language-cs"><span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnCollisionExit2D</span><span class="token punctuation">(</span><span class="token class-name">Collision2D</span> target<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    PlayerList<span class="token punctuation">.</span>player<span class="token punctuation">[</span><span class="token generic-method"><span class="token function">GetComponent</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>BulletInformation<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>user<span class="token punctuation">]</span><span class="token punctuation">.</span>transform<span class="token punctuation">.</span>position <span class="token operator">=</span> transform<span class="token punctuation">.</span>position<span class="token punctuation">;</span>\n    <span class="token function">Destroy</span><span class="token punctuation">(</span>gameObject<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>',46)];n("default",{__name:"UnitySelf01",setup:function(n,t){return(0,t.expose)({frontmatter:{}}),function(n,t){return s(),p("div",a,e)}}})}}}));
