System.register(["./index-legacy-m8obCYys.js"],(function(n,s){"use strict";var a,p,t;return{setters:[function(n){a=n.P,p=n.Q,t=n.ag}],execute:function(){var s={class:"md-blog m-auto text-left"},o=[t('<p>面试被问到如何理解类的多态性了，没答出来呜呜呜。</p><blockquote><p>同一操作作用于不同的对象，可以有不同的解释，产生不同的执行结果，这就是多态性。</p></blockquote><hr><p>C# 类的多态性允许把不同的派生类用一个统一的基类接口来处理。</p><p>即一段代码可以同样地工作在所有这些具有同一个基类的不同派生类上。</p><p>并且不同的派生类可以使用同一个接口实现不同的操作。</p><p>在 C# 中提供了三种方法来实现类的多态：</p><ul><li>虚方法</li><li>抽象类与抽象方法</li><li>接口</li></ul><p>如果需要使用基类实例化对象，则使用虚方法；</p><p>如果不需要使用基类实例化对象，则使用抽象类与抽象方法。</p><h2 id="%E8%99%9A%E6%96%B9%E6%B3%95" tabindex="-1"><a class="header-anchor" href="#%E8%99%9A%E6%96%B9%E6%B3%95" data-clickable=""><span>虚方法</span></a></h2><p>在基类中将一个方法声明为 <code>virtual</code> ，就可以在其派生类中使用 <code>override</code> 重写该方法（也可以使用 <code>new</code> 隐藏基类中的方法，两者有所区别）。</p><p>例如，我们需要编写一个 <code>Character</code> 基类，用于表示各种角色；此外，在 <code>Character</code> 基类上派生出 <code>Player</code> 类表示玩家。</p><p>基类：</p><pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Character</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Die</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;A Character Died.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> \n<span class="token punctuation">}</span>\n</code></pre><p>派生类：</p><pre class="language-csharp"><code class="language-csharp"><span class="token keyword">class</span> <span class="token class-name">Player</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Character</span></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Die</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;A Player Died.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><p>如果想要玩家死亡之后还会触发游戏结束，那么可以直接在 <code>Player</code> 派生类中添加方法</p><pre class="language-csharp"><code class="language-csharp"><span class="token keyword">class</span> <span class="token class-name">Player</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Character</span></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">GameOver</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Game Over!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Die</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;A Player Died.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">GameOver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><p>测试一下：</p><pre class="language-csharp"><code class="language-csharp"><span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token class-name">Character</span> character <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Character</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">Player</span> player <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Player</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    character<span class="token punctuation">.</span><span class="token function">Die</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    player<span class="token punctuation">.</span><span class="token function">Die</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><p>运行结果</p><pre><code>A Character Died.\nA Player Died.\nGame Over!\n</code></pre><h2 id="%E6%8A%BD%E8%B1%A1%E7%B1%BB%E4%B8%8E%E6%8A%BD%E8%B1%A1%E6%96%B9%E6%B3%95" tabindex="-1"><a class="header-anchor" href="#%E6%8A%BD%E8%B1%A1%E7%B1%BB%E4%B8%8E%E6%8A%BD%E8%B1%A1%E6%96%B9%E6%B3%95" data-clickable=""><span>抽象类与抽象方法</span></a></h2><p>例如，我们需要用类表示猫、鸽子、鱼等各种动物，那么可以从中抽象出动物这个概念作为基类。</p><p>我们可以实例化一只猫、一只鸽子、一条鱼，但不能实例化一个作为基类的动物。</p><p>基类：</p><pre class="language-csharp"><code class="language-csharp"><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><p>需要注意的是，与虚方法不同，此处使用抽象方法，不能有方法体。</p><p>派生类仍使用 <code>override</code> 重写方法</p><p>派生类：</p><pre class="language-csharp"><code class="language-csharp"><span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Animal</span></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Cat eats&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Dove</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Animal</span></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Dove eats&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Fish</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Animal</span></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Fish eats&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><p>在定义派生类时，必须给出抽象方法的方法体，否则会报错 <code>Abstract inherited member is not implemented</code></p><p>鸽子会飞，鱼会游泳，那么就可以单独为这两种派生类定义飞和游泳方法：</p><pre class="language-csharp"><code class="language-csharp"><span class="token keyword">class</span> <span class="token class-name">Dove</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Animal</span></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Dove eats&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Dove can fly&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Fish</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Animal</span></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Fish eats&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    \n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Swim</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Fish can swim&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><p>测试一下</p><pre class="language-csharp"><code class="language-csharp"><span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token class-name">Animal</span> animal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><p>报错：不能实例化一个抽象类。</p><pre><code>Cannot create an instance of the abstract class\n</code></pre><p>再次测试：</p><pre class="language-csharp"><code class="language-csharp"><span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token class-name">Cat</span> cat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">Dove</span> dove <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Dove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">Fish</span> fish <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Fish</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name">Animal</span> animal <span class="token keyword">in</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Animal<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">{</span>cat<span class="token punctuation">,</span> dove<span class="token punctuation">,</span> fish<span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        animal<span class="token punctuation">.</span><span class="token function">Eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    dove<span class="token punctuation">.</span><span class="token function">Fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    fish<span class="token punctuation">.</span><span class="token function">Swim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><p>输出结果：</p><pre><code>Cat eats\nDove eats\nFish eats\nDove can fly\nFish can swim\n</code></pre><h2 id="%E6%8E%A5%E5%8F%A3" tabindex="-1"><a class="header-anchor" href="#%E6%8E%A5%E5%8F%A3" data-clickable=""><span>接口</span></a></h2><p>一个派生类只能继承自一个基类，如果想要实现类似一个派生类继承自多个基类的效果，就需要使用接口。</p><p>接口成员不能使用 <code>private</code> <code>public</code> <code>protected</code> <code>internal</code> <code>static</code> <code>virtual</code> <code>abstract</code> <code>sealed</code> 修饰符，</p><p>接口中声明的方法默认是 <code>public</code> 的。</p><p>接口中不能定义字段，不能含有方法体，可以定义属性。</p><p>接口使用 <code>interface</code> 定义，通常使用大写字母 <code>I</code> 开头命名：</p><pre class="language-csharp"><code class="language-csharp"><span class="token keyword">interface</span> <span class="token class-name">IBark</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// float Volume { get; set; } // This is ok</span>\n    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><p>猫和鸽子都会叫，因此可以如下定义猫和鸽子：</p><pre class="language-csharp"><code class="language-csharp"><span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Animal</span><span class="token punctuation">,</span> <span class="token class-name">IBark</span></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Cat eats&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Meo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Dove</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Animal</span><span class="token punctuation">,</span> <span class="token class-name">IBark</span></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Dove eats&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    \n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Gu&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><p>测试一下：</p><pre class="language-csharp"><code class="language-csharp"><span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token class-name">Cat</span> cat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">Dove</span> dove <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Dove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name">IBark</span> animal <span class="token keyword">in</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">IBark<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">{</span>cat<span class="token punctuation">,</span> dove<span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        animal<span class="token punctuation">.</span><span class="token function">Bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><p>输出：</p><pre><code>Meo\nGu\n</code></pre><h2 id="%E9%87%8C%E6%B0%8F%E8%BD%AC%E6%8D%A2%E5%8E%9F%E5%88%99" tabindex="-1"><a class="header-anchor" href="#%E9%87%8C%E6%B0%8F%E8%BD%AC%E6%8D%A2%E5%8E%9F%E5%88%99" data-clickable=""><span>里氏转换原则</span></a></h2><p>在上文抽象类与抽象方法的例子中，可以看到这样的写法</p><pre class="language-csharp"><code class="language-csharp"><span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name">Animal</span> animal <span class="token keyword">in</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Animal<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">{</span>cat<span class="token punctuation">,</span> dove<span class="token punctuation">,</span> fish<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    animal<span class="token punctuation">.</span><span class="token function">Eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><p>这样的写法将三个子类对象装入了一个基类的数组中，并在后续执行了基类对象的方法。</p><p>这样的写法涉及到了里氏转换原则：</p><p>如果 <code>S</code> 是 <code>T</code> 的子类型，对于 <code>S</code> 类型的任意对象，如果将他们看作是 <code>T</code> 类型的对象，则对象的行为也理应与期望的行为一致。</p><p>在 C# 中其表现为</p><ul><li>可以将一个子类对象赋值给其父类对象，但不能将一个父类对象赋值给子类对象。</li><li>子类对象可以调用父类中的成员，但父类对象不能调用子类中的成员。</li><li>如果父类装的是子类对象，可以将这个对象强转化为子类的对象（使用 <code>as</code> 或 <code>is</code>）。</li></ul><p>虚方法测试：</p><pre class="language-csharp"><code class="language-csharp"><span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token class-name">Player</span> player <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Character</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token class-name">Player</span><span class="token punctuation">;</span>\n    player<span class="token punctuation">.</span><span class="token function">Die</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Warning: Possible &#39;System.NullReferenceException&#39;</span>\n<span class="token punctuation">}</span>\n</code></pre><p>抽象类与抽象方法测试：</p><pre class="language-csharp"><code class="language-csharp"><span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token class-name">Cat</span> cat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">Animal</span> animal <span class="token operator">=</span> cat<span class="token punctuation">;</span>\n    <span class="token class-name">Cat</span> cat2 <span class="token operator">=</span> animal<span class="token punctuation">;</span> <span class="token comment">// Error: Cannot convert source type &#39;Animal&#39; to target type &#39;Cat&#39;</span>\n    <span class="token class-name">Cat</span> cat3 <span class="token operator">=</span> <span class="token punctuation">(</span>Cat<span class="token punctuation">)</span>animal<span class="token punctuation">;</span> <span class="token comment">// Safe cast</span>\n    <span class="token class-name">Cat</span> cat4 <span class="token operator">=</span> animal <span class="token keyword">as</span> <span class="token class-name">Cat</span><span class="token punctuation">;</span> <span class="token comment">// Safe cast</span>\n    <span class="token class-name">Dove</span> dove1 <span class="token operator">=</span> <span class="token punctuation">(</span>Dove<span class="token punctuation">)</span>animal<span class="token punctuation">;</span> <span class="token comment">// Warning: Possible &#39;System.InvalidCastException&#39;</span>\n    <span class="token class-name">Dove</span> dove2 <span class="token operator">=</span> animal <span class="token keyword">as</span> <span class="token class-name">Dove</span><span class="token punctuation">;</span> <span class="token comment">// Warning: Expression is always null</span>\n<span class="token punctuation">}</span>\n</code></pre><h2 id="%E9%87%8D%E5%86%99%E4%B8%8E%E9%9A%90%E8%97%8F" tabindex="-1"><a class="header-anchor" href="#%E9%87%8D%E5%86%99%E4%B8%8E%E9%9A%90%E8%97%8F" data-clickable=""><span>重写与隐藏</span></a></h2><p>在虚方法一节中，提到可以使用 <code>override</code> 重写和 <code>new</code> 隐藏基类中的虚方法。</p><p>两者区别在于，如果使用 <code>override</code> 重写，那么该对象所继承自的基类中的该方法被修改（其他实例不受影响），</p><p>后续即使将该对象赋值给一个基类对象，该基类对象调用被重写的方法时仍然会执行重写后的方法。</p><p>例如：</p><pre class="language-csharp"><code class="language-csharp"><span class="token keyword">class</span> <span class="token class-name">Character</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Die</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;A Character Died.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> \n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Player</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Character</span></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">GameOver</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Game Over!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Die</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;A Player Died.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">GameOver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token class-name">Character</span> player <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Player</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    player<span class="token punctuation">.</span><span class="token function">Die</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><p>输出：</p><pre><code>A Player Died.\nGame Over!\n</code></pre><p>而 <code>new</code> 隐藏则是在派生类中重新声明了一个同名方法，并将基类的方法隐藏起来，并没有覆盖。</p><p>将上述代码中的 <code>override</code> 替换为 <code>new</code> 之后：</p><pre class="language-csharp"><code class="language-csharp"><span class="token keyword">class</span> <span class="token class-name">Character</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Die</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;A Character Died.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> \n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Player</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Character</span></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">GameOver</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Game Over!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">new</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Die</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;A Player Died.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">GameOver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token class-name">Character</span> player <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Player</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    player<span class="token punctuation">.</span><span class="token function">Die</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><p>输出结果：</p><pre><code>A Character Died.\n</code></pre><p>可以看到将 <code>Player</code> 的一个实例赋值给 <code>Character</code> 实例后，调用 <code>Die</code> 方法，实际执行的是 <code>Character</code> 类的方法。</p><h2 id="%E5%AE%9E%E9%99%85%E7%94%A8%E9%80%94" tabindex="-1"><a class="header-anchor" href="#%E5%AE%9E%E9%99%85%E7%94%A8%E9%80%94" data-clickable=""><span>实际用途</span></a></h2><p><a href="https://huotuyouxi.com/2021/11/06/c-sharp-002/#%E7%BB%9F%E4%B8%80%E5%8F%82%E6%95%B0%E6%8E%A5%E5%8F%A3" data-clickable="">统一参数接口</a></p>',84)];n("title","C# 类的多态"),n("date","2022-09-10T08:16:23.000Z"),n("toc",!0),n("math","md"),n("tags",["C#","笔记"]),n("cover","https://s2.loli.net/2022/09/10/nueZiWDaydjLhrS.jpg"),n("grow",null),n("default",{__name:"CSharpClass",setup:function(n,t){return(0,t.expose)({frontmatter:{title:"C# 类的多态",date:"2022-09-10T08:16:23.000Z",toc:!0,math:"md",tags:["C#","笔记"],cover:"https://s2.loli.net/2022/09/10/nueZiWDaydjLhrS.jpg",grow:null}}),function(n,t){return a(),p("div",s,o)}}})}}}));
