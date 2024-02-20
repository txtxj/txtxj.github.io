System.register(["./index-legacy-Hxo3klQ_.js","./Image-legacy-_Im3IUy2.js"],(function(n,s){"use strict";var a,t,p,o,e,c;return{setters:[function(n){a=n.y,t=n.G,p=n.E,o=n.I,e=n.a5},function(n){c=n._}],execute:function(){var s={class:"md-blog m-auto text-left"},l=p("p",null,"之前调红黑树的时候写的一个二叉树打印方法。",-1),u=p("p",null,"可以以如下图形式在控制台输出树的结构。",-1),k=e('<p>代码如下：</p><pre class="language-cpp"><code class="language-cpp"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifdef</span> <span class="token expression">DEBUG</span></span>\n<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">DebugPrintMessage</span><span class="token punctuation">(</span>Node<span class="token operator">*</span> p<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n\t<span class="token comment">// This is an example print function</span>\n\t<span class="token comment">// Here puts the info you want to print</span>\n\tstd<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;val: &quot;</span> <span class="token operator">&lt;&lt;</span> p <span class="token operator">-&gt;</span> val <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; siz: &quot;</span> <span class="token operator">&lt;&lt;</span> p <span class="token operator">-&gt;</span> siz <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; color: &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span>p <span class="token operator">-&gt;</span> color <span class="token operator">?</span> <span class="token string">&quot;R&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">void</span> <span class="token function">DebugPrintNode</span><span class="token punctuation">(</span>Node<span class="token operator">*</span> p<span class="token punctuation">,</span> <span class="token keyword">int</span> step<span class="token punctuation">,</span> <span class="token keyword">int</span> valid<span class="token punctuation">,</span> <span class="token keyword">bool</span> right<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">==</span> nil<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>\n\t<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> step<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">{</span>\n\t\tstd<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>valid <span class="token operator">&amp;</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">&quot;   &quot;</span><span class="token operator">:</span> <span class="token string">&quot;│  &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\tstd<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span>right <span class="token operator">?</span> <span class="token string">&quot;└ &quot;</span> <span class="token operator">:</span> <span class="token string">&quot;├ &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token function">DebugPrintMessage</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token function">DebugPrintNode</span><span class="token punctuation">(</span>p <span class="token operator">-&gt;</span> left<span class="token punctuation">,</span> step <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> valid <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> step<span class="token punctuation">)</span><span class="token punctuation">,</span> p <span class="token operator">-&gt;</span> right <span class="token operator">==</span> nil<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token function">DebugPrintNode</span><span class="token punctuation">(</span>p <span class="token operator">-&gt;</span> right<span class="token punctuation">,</span> step <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> valid <span class="token operator">&amp;</span> <span class="token operator">~</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> step<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>\n<span class="token keyword">void</span> <span class="token function">DebugPrintTree</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n\t<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifdef</span> <span class="token expression">DEBUG</span></span>\n\tstd<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;/******************/&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;TREE&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>\n\t<span class="token function">DebugPrintNode</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\tstd<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;/******************/&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>\n\t<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>\n<span class="token punctuation">}</span>\n</code></pre><p>上述代码要求树使用二叉链表的形式存储，每个结点的两个儿子分别使用 <code>left</code> 和 <code>right</code> 指针。</p><p>要求将 <code>root</code> 作为一个全局变量，作为函数 <code>void DebugPrintNode()</code> 的入口结点。</p><p>使用时需要将 <code>DebugPrintMessage(Node*)</code> 函数内输出内容修改为自己代码中树结点的信息，然后在需要输出树的位置插入代码 <code>DebugPrintTree();</code> 即可。</p><p>可以参考笔者红黑树类的定义：</p><pre class="language-cpp"><code class="language-cpp"><span class="token keyword">class</span> <span class="token class-name">BlackRedTree</span>\n<span class="token punctuation">{</span>\n<span class="token keyword">private</span><span class="token operator">:</span>\n\t<span class="token keyword">enum</span> <span class="token class-name">Color</span> <span class="token punctuation">{</span>black<span class="token punctuation">,</span> red<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\t<span class="token keyword">struct</span> <span class="token class-name">Node</span>\n\t<span class="token punctuation">{</span>\n\t\t<span class="token keyword">int</span> val<span class="token punctuation">;</span>\n\t\t<span class="token keyword">int</span> siz<span class="token punctuation">;</span>\n\t\tNode<span class="token operator">*</span> left<span class="token punctuation">;</span>\n\t\tNode<span class="token operator">*</span> right<span class="token punctuation">;</span>\n\t\tNode<span class="token operator">*</span> parent<span class="token punctuation">;</span>\n\t\tColor color<span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\tNode<span class="token operator">*</span> nil<span class="token punctuation">;</span>\n\tNode<span class="token operator">*</span> root<span class="token punctuation">;</span>\n<span class="token keyword">private</span><span class="token operator">:</span>\n\t<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifdef</span> <span class="token expression">DEBUG</span></span>\n\t<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">DebugPrintMessage</span><span class="token punctuation">(</span>Node<span class="token operator">*</span> p<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token keyword">void</span> <span class="token function">DebugPrintNode</span><span class="token punctuation">(</span>Node<span class="token operator">*</span> p<span class="token punctuation">,</span> <span class="token keyword">int</span> step<span class="token punctuation">,</span> <span class="token keyword">int</span> valid<span class="token punctuation">,</span> <span class="token keyword">bool</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>\n\t<span class="token keyword">void</span> <span class="token function">DebugPrintTree</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><p><a href="https://github.com/txtxj/USTC-Algorithm/blob/master/lab2/BRT/brt.cpp" data-clickable="">一个实例</a></p>',8);n("default",{__name:"TreeDebugger",setup:function(n,e){return(0,e.expose)({frontmatter:{}}),function(n,e){var r=c;return a(),t("div",s,[l,u,p("p",null,[o(r,{src:"https://s2.loli.net/2022/05/14/UxpEL73QnSKr8Vs.png",alt:"20220514_1.png","show-toolbar-tooltip":""})]),k])}}})}}}));
