System.register(["./index-legacy-R5dxKujw.js","./Image-legacy-CptC_qWa.js"],(function(n,s){"use strict";var a,p,t,e,o,c,l;return{setters:[function(n){a=n.y,p=n.G,t=n.E,e=n.I,o=n.a5,c=n.R},function(n){l=n._}],execute:function(){var s={class:"md-blog m-auto text-left"},u=o('<p>VFX Graph 中将变量设置为暴露（Exposed）后，可以在 Inspector 中查看、修改该变量。</p><p>如需使用 C# 脚本控制暴露变量，需要为 VEG 特效物体挂载一个 VFX Property Binder 组件。</p><p>VFX Graph 内置了许多常用的变量绑定类型，但官方文档并未详细说明如何对 VFX Property Binder 进行拓展，使其支持自定义类型的变量绑定。</p><p>如需实现自定义类型的输入与处理，需要了解 <code>VFXPropertyBinder</code> 这一类的内部实现。</p><p><code>VFXPropertyBinder</code> 类继承自 <code>MonoBehaviour</code> ，其中最重要的成员为 <code>List&lt;VFXBinderBase&gt; m_Bindings</code>.</p><p>该列表包含了当前物体上的 <code>VisualEffect</code> 的所有绑定，列表的所有成员都需要继承自 <code>VFXBinderBase</code>.</p><p><code>VFXBinderBase</code> 类有两个重要的抽象方法，分别为 <code>IsValid</code> 和 <code>UpdateBinding</code>.</p><p><code>IsValid</code> 方法用于判断当前绑定是否合法，只有当绑定合法的时候才会开始处理数据。</p><p><code>UpdateBinding</code> 方法用于在绑定合法的情况下任意地处理绑定数据，再将处理结果交给 <code>VisualEffect</code>. 如果需要对输入数据进行采样、计算等处理，需要重写该方法来完成。</p><hr><p>Unity 中对 <code>Transform</code> 类型实现绑定的方法是定义一个继承自 <code>VFXBinderBase</code> 的类 <code>VFXTransformBinder</code>.</p><p>其结构大致如下，完整代码见 <a href="https://github.com/NavidK0/unity-visualeffectgraph-builtin/blob/main/Runtime/Utilities/PropertyBinding/Implementation/VFXTransformBinder.cs" data-clickable="">VFXTransformBinder.cs</a></p><pre class="language-cs"><code class="language-cs"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">VFXTransformBinder</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">VFXBinderBase</span></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">protected</span> <span class="token class-name">ExposedParameter</span> m_Parameter<span class="token punctuation">;</span>\n    <span class="token keyword">public</span> <span class="token class-name">Transform</span> Target<span class="token punctuation">;</span>\n    \n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Parameter <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    \n    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">bool</span></span> <span class="token function">IsValid</span><span class="token punctuation">(</span><span class="token class-name">VisualEffect</span> component<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">protected</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnEnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">UpdateBinding</span><span class="token punctuation">(</span><span class="token class-name">VisualEffect</span> component<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><p>该类中保存了需要被绑定的数据 <code>Target</code> 以及被绑定的参数名称 <code>Parameter</code>.</p><p>效仿其做法，实现自定义 Serializable 类 MyDataType 的绑定，可以定义如下类</p><pre class="language-cs"><code class="language-cs"><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">VFXBinderAttribute</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token named-parameter punctuation">menuPath</span><span class="token punctuation">:</span><span class="token string">&quot;MyBinder/MyDataType&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyDataTypeBinder</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">VFXBinderBase</span></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token class-name"><span class="token keyword">string</span></span> PropertySpeed<span class="token punctuation">;</span>\n    <span class="token keyword">public</span> <span class="token class-name"><span class="token keyword">string</span></span> PropertyColor<span class="token punctuation">;</span>\n    \n    <span class="token keyword">public</span> <span class="token class-name">MyDataType</span> Target<span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">bool</span></span> <span class="token function">IsValid</span><span class="token punctuation">(</span><span class="token class-name">VisualEffect</span> component<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> Target <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> \n               component<span class="token punctuation">.</span><span class="token function">HasInt</span><span class="token punctuation">(</span>PropertySpeed<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>\n               component<span class="token punctuation">.</span><span class="token function">HasVector3</span><span class="token punctuation">(</span>PropertyColor<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">UpdateBinding</span><span class="token punctuation">(</span><span class="token class-name">VisualEffect</span> component<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        component<span class="token punctuation">.</span><span class="token function">SetInt</span><span class="token punctuation">(</span>PropertySpeed<span class="token punctuation">,</span> Target<span class="token punctuation">.</span>speed<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        component<span class="token punctuation">.</span><span class="token function">SetVector3</span><span class="token punctuation">(</span>PropertyColor<span class="token punctuation">,</span> Target<span class="token punctuation">.</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    \n    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token interpolation-string"><span class="token string">$&quot;MyDataType : &#39;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">PropertySpeed</span><span class="token punctuation">}</span></span><span class="token string">&#39;, &#39;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">PropertyColor</span><span class="token punctuation">}</span></span><span class="token string">&#39;-&gt;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">Target</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><p>其中 <code>[VFXBinderAttribute(menuPath:&quot;MyBinder/MyDataType&quot;)]</code> 用于向标准 VFX Property Binder 组件中注册该绑定，这样才能在 Inspector 中直接为物体添加该类型的绑定。</p>',17),r=t("p",null,[c("类似地，令 "),t("code",null,"Target"),c(" 的类型继承自 "),t("code",null,"Object"),c(" 即可实现将 prefab 等物体拖拽到 Inspector 上进行绑定等效果。")],-1);n("default",{__name:"VEGExtension",setup:function(n,o){return(0,o.expose)({frontmatter:{}}),function(n,o){var c=l;return a(),p("div",s,[u,t("p",null,[e(c,{src:"https://s2.loli.net/2023/04/02/gm5XRh3LCfT1JEq.png",alt:"20230401_1.png","show-toolbar-tooltip":""})]),r,t("p",null,[e(c,{src:"https://s2.loli.net/2023/04/02/1KCyqVuz4IBRidF.png",alt:"20230401_2.png","show-toolbar-tooltip":""})])])}}})}}}));
