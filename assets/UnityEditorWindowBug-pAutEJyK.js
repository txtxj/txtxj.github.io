import{y as p,G as o,E as n,I as e,R as s,a5 as c}from"./index-zopG3GF8.js";import{_ as l}from"./Image-mqHgw-Nk.js";const u={class:"md-blog m-auto text-left"},i=n("p",null,[s("在 Unity 中编写自定义的 Editor Window 时，如果在窗口第一次 "),n("code",null,"OnGUI()"),s(" 调用前出现错误，则窗体无法被画出，并且无法关闭。")],-1),k=n("p",null,"并且，Unity 在编译过修改后的代码后，不会自动关闭已经打开的错误窗口，这会导致即使修改后的代码是正确的，仍然无法打开窗口。",-1),r=n("p",null,"在这种情况下，可以观察到屏幕上有一个如下图所示的图标，无法交互、不随 Unity 主窗口移动、会随着 Unity 主窗口一起关闭。",-1),d=c('<p>这个图标即为之前打开的错误窗口。</p><p>此时需要在打开窗口之前先关闭一次窗口</p><p>修改代码如下：</p><pre class="language-cs"><code class="language-cs"><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">MenuItem</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;MyTools/MyEditorWindow&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token class-name">MyEditorWindow</span> window <span class="token operator">=</span> <span class="token generic-method"><span class="token function">GetWindow</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>MyEditorWindow<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    window<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 关闭错误窗口</span>\n    window<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><p>运行一次后，上图所示的图标消失，但窗口不会出现，再将代码中关闭窗口的操作删除，重新运行即可打开窗口。</p><p>也可以单独为关闭窗口操作设置一个新的 Menu Item</p><pre class="language-cs"><code class="language-cs"><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">readonly</span> <span class="token class-name">Type<span class="token punctuation">[</span><span class="token punctuation">]</span></span> WindowTypes <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">Window1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">Window2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">Window3</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">MenuItem</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;MyTools/CloseAll&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">CloseAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name">Type</span> type <span class="token keyword">in</span> WindowTypes<span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token class-name">EditorWindow</span> window <span class="token operator">=</span> <span class="token function">GetWindow</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            window<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n</code></pre>',7),W={__name:"UnityEditorWindowBug",setup(y,{expose:a}){return a({frontmatter:{}}),(m,_)=>{const t=l;return p(),o("div",u,[i,k,r,n("p",null,[e(t,{src:"https://s2.loli.net/2023/05/21/1fxkaRLdJXs2z64.jpg",alt:"20230521_1.jpg","show-toolbar-tooltip":""})]),d])}}};export{W as default};
