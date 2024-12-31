import{aa as e,P as m,Q as d,a0 as s,M as n,R as a,a7 as t,ag as g}from"./index-PIOGxJKm.js";const _={class:"md-blog m-auto text-left"},h=s("p",null,[s("s",null,"某凯的疑惑")],-1),f=s("p",null,"看样例：",-1),y={class:"katex-display"},w={class:"katex"},b={class:"katex-mathml"},x=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8389em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},"3"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"10"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"19"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"6"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"⇔"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8389em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},"3"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"10")])],-1),v=s("p",null,"这是因为",-1),q={class:"katex-display"},j={class:"katex"},M={class:"katex-mathml"},T=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"19"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"10"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"3"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"3"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8389em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},"3"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"6"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"3"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"3")])],-1),C=g('<p>看起来我们要把 <strong>能够被其他钱凑出来的钱</strong> 给筛掉，</p><p>这样一来剩下的就是我们必须要保留的面值了。</p><p>那我们可以建一个数组 <code>mon[i]</code> ，</p><p>来存 <strong>面值为 i 的钱能不能被其它面值的钱凑出来</strong> ，</p><p>最后再把整个 <code>mon</code> 跑一遍，</p><p>看看原货币系统中剩下几个不能被凑出来的钱，这就是答案了。</p><p>代码如下</p><pre class="language-cpp"><code class="language-cpp"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstdlib&gt;</span></span>\n<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstdio&gt;</span></span>\n<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstring&gt;</span></span>\n<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;algorithm&gt;</span></span>\n<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>\n<span class="token keyword">int</span> mon<span class="token punctuation">[</span><span class="token number">25001</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token comment">/*\nmon[i] = 0 表示i面值的钱不能被凑出来\nmon[i] = 1 表示i面值的钱可以被凑出来\nmon[i] = 2 表示i面值的钱是货币系统中本来就有的钱\n*/</span>\n<span class="token keyword">int</span> coins<span class="token punctuation">[</span><span class="token number">101</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token comment">//存钱的面值</span>\n<span class="token keyword">int</span> T<span class="token punctuation">,</span> n<span class="token punctuation">,</span> ans <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d &quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>T<span class="token punctuation">)</span><span class="token punctuation">;</span>\n	<span class="token keyword">while</span> <span class="token punctuation">(</span>T<span class="token operator">--</span><span class="token punctuation">)</span>\n	<span class="token punctuation">{</span>\n		ans<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>\n		<span class="token function">memset</span><span class="token punctuation">(</span>mon<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>mon<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n		<span class="token function">memset</span><span class="token punctuation">(</span>coins<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>coins<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n		<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>\n		<span class="token punctuation">{</span>\n			<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> coins <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n			mon<span class="token punctuation">[</span>coins<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>\n		<span class="token punctuation">}</span>\n        <span class="token comment">//把货币系统中的钱标好</span>\n		<span class="token function">sort</span><span class="token punctuation">(</span>coins <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> coins <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">+</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> coins<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>\n		<span class="token punctuation">{</span>\n			<span class="token keyword">if</span> <span class="token punctuation">(</span>mon<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>\n			<span class="token comment">//如果mon[i]能被凑出来</span>\n			<span class="token comment">//那么mon[i+coins[j]]也能被凑出来</span>\n			<span class="token punctuation">{</span>\n				<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span>\n				<span class="token punctuation">{</span>\n					<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> coins<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> coins<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//防止数组越界</span>\n					<span class="token punctuation">{</span>\n						mon<span class="token punctuation">[</span>i <span class="token operator">+</span> coins<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n					<span class="token punctuation">}</span>\n					<span class="token keyword">else</span> <span class="token keyword">break</span><span class="token punctuation">;</span> \n				<span class="token punctuation">}</span>\n			<span class="token punctuation">}</span>\n		<span class="token punctuation">}</span>\n		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> coins<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>\n		<span class="token punctuation">{</span>\n			<span class="token keyword">if</span> <span class="token punctuation">(</span>mon<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> ans<span class="token operator">++</span><span class="token punctuation">;</span>\n		<span class="token punctuation">}</span>\n		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> ans<span class="token punctuation">)</span><span class="token punctuation">;</span>\n	<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>',8),E="【题解】 P5020 【货币系统】",L="2019-02-07T15:50:45.000Z",r="md",z=["题解"],A="https://i.loli.net/2021/07/31/eZJwq8ChXcEytAx.jpg",J="large",S={__name:"SolutionP5020",setup(N,{expose:k}){return k({frontmatter:{title:"【题解】 P5020 【货币系统】",date:"2019-02-07T15:50:45.000Z",math:"md",tags:["题解"],cover:"https://i.loli.net/2021/07/31/eZJwq8ChXcEytAx.jpg",grow:"large"}}),(V,Z)=>{const p=e("mn"),o=e("mo"),c=e("mrow"),l=e("annotation"),u=e("semantics"),i=e("eqn");return m(),d("div",_,[h,f,s("section",null,[n(i,null,{default:a(()=>[s("span",y,[s("span",w,[s("span",b,[n(r,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:a(()=>[n(u,null,{default:a(()=>[n(c,null,{default:a(()=>[n(p,null,{default:a(()=>[t("3")]),_:1}),n(o,{separator:"true"},{default:a(()=>[t(",")]),_:1}),n(p,null,{default:a(()=>[t("10")]),_:1}),n(o,{separator:"true"},{default:a(()=>[t(",")]),_:1}),n(p,null,{default:a(()=>[t("19")]),_:1}),n(o,{separator:"true"},{default:a(()=>[t(",")]),_:1}),n(p,null,{default:a(()=>[t("6")]),_:1}),n(o,null,{default:a(()=>[t("⇔")]),_:1}),n(p,null,{default:a(()=>[t("3")]),_:1}),n(o,{separator:"true"},{default:a(()=>[t(",")]),_:1}),n(p,null,{default:a(()=>[t("10")]),_:1})]),_:1}),n(l,{encoding:"application/x-tex"},{default:a(()=>[t("3, 10, 19, 6 \\Leftrightarrow 3, 10")]),_:1})]),_:1})]),_:1})]),x])])]),_:1})]),v,s("section",null,[n(i,null,{default:a(()=>[s("span",q,[s("span",j,[s("span",M,[n(r,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:a(()=>[n(u,null,{default:a(()=>[n(c,null,{default:a(()=>[n(p,null,{default:a(()=>[t("19")]),_:1}),n(o,null,{default:a(()=>[t("=")]),_:1}),n(p,null,{default:a(()=>[t("10")]),_:1}),n(o,null,{default:a(()=>[t("+")]),_:1}),n(p,null,{default:a(()=>[t("3")]),_:1}),n(o,null,{default:a(()=>[t("+")]),_:1}),n(p,null,{default:a(()=>[t("3")]),_:1}),n(o,null,{default:a(()=>[t("+")]),_:1}),n(p,null,{default:a(()=>[t("3")]),_:1}),n(o,{separator:"true"},{default:a(()=>[t(",")]),_:1}),n(p,null,{default:a(()=>[t("6")]),_:1}),n(o,null,{default:a(()=>[t("=")]),_:1}),n(p,null,{default:a(()=>[t("3")]),_:1}),n(o,null,{default:a(()=>[t("+")]),_:1}),n(p,null,{default:a(()=>[t("3")]),_:1})]),_:1}),n(l,{encoding:"application/x-tex"},{default:a(()=>[t("19 = 10 + 3 + 3 + 3, 6 = 3 + 3")]),_:1})]),_:1})]),_:1})]),T])])]),_:1})]),C])}}};export{A as cover,L as date,S as default,J as grow,r as math,z as tags,E as title};
