System.register(["./index-legacy-gF2y_0wv.js"],(function(n,a){"use strict";var s,t,l,e,u,r,c,p;return{setters:[function(n){s=n.aa,t=n.J,l=n.K,e=n.S,u=n.a3,r=n.W,c=n.M,p=n.ag}],execute:function(){var a={class:"md-blog m-auto text-left"},o=e("p",null,"cyz好兄弟上了大学一直在刷题打比赛，",-1),i=e("p",null,"某日忘了概率怎么算了，半夜来问我这个题。",-1),m=e("p",null,"题面：",-1),f=e("p",null,[e("a",{href:"https://codeforces.com/contest/1452/problem/D","data-clickable":""},"https://codeforces.com/contest/1452/problem/D")],-1),d={class:"katex"},h={class:"katex-mathml"},g=e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6644em"}}),e("span",{class:"mord"},[e("span",{class:"mord"},"2"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.6644em"}},[e("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"n")])])])])])])])])],-1),k=e("p",null,"问题是求出建造合法的方案数。",-1),_=e("p",null,"不难看出，每座塔能覆盖的区间总长度一定是一个奇数，",-1),y=e("p",null,"要求所有塔的覆盖范围不重叠，",-1),b={class:"katex"},w={class:"katex-mathml"},x=e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.4306em"}}),e("span",{class:"mord mathnormal"},"n")])],-1),v=e("p",null,"因此考虑 dp .",-1),M={class:"katex"},L={class:"katex-mathml"},D=e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.4306em"}}),e("span",{class:"mord mathnormal"},"n")])],-1),O={class:"katex"},q={class:"katex-mathml"},z=e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.4306em"}}),e("span",{class:"mord mathnormal"},"n")])],-1),P={class:"katex"},S={class:"katex-mathml"},j=e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6595em"}}),e("span",{class:"mord mathnormal"},"i")])],-1),C={class:"katex"},F={class:"katex-mathml"},J=e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6595em"}}),e("span",{class:"mord mathnormal"},"i")])],-1),K={class:"katex"},W={class:"katex-mathml"},A=e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),e("span",{class:"mord mathnormal"},"n"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"−"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6595em"}}),e("span",{class:"mord mathnormal"},"i")])],-1),B=e("p",null,"上述过程的状态转移方程为",-1),E=e("p",null,"奇数：",-1),G={class:"katex-display"},H={class:"katex"},I={class:"katex-mathml"},N=e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal"},"d"),e("span",{class:"mord mathnormal"},"p"),e("span",{class:"mopen"},"["),e("span",{class:"mord mathnormal"},"n"),e("span",{class:"mclose"},"]"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal"},"d"),e("span",{class:"mord mathnormal"},"p"),e("span",{class:"mopen"},"["),e("span",{class:"mord mathnormal"},"n"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"−"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord"},"1"),e("span",{class:"mclose"},"]"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal"},"d"),e("span",{class:"mord mathnormal"},"p"),e("span",{class:"mopen"},"["),e("span",{class:"mord mathnormal"},"n"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"−"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord"},"3"),e("span",{class:"mclose"},"]"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),e("span",{class:"mord"},"..."),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal"},"d"),e("span",{class:"mord mathnormal"},"p"),e("span",{class:"mopen"},"["),e("span",{class:"mord"},"0"),e("span",{class:"mclose"},"]")])],-1),Q=e("p",null,"偶数：",-1),R={class:"katex-display"},T={class:"katex"},U={class:"katex-mathml"},V=e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal"},"d"),e("span",{class:"mord mathnormal"},"p"),e("span",{class:"mopen"},"["),e("span",{class:"mord mathnormal"},"n"),e("span",{class:"mclose"},"]"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal"},"d"),e("span",{class:"mord mathnormal"},"p"),e("span",{class:"mopen"},"["),e("span",{class:"mord mathnormal"},"n"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"−"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord"},"1"),e("span",{class:"mclose"},"]"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal"},"d"),e("span",{class:"mord mathnormal"},"p"),e("span",{class:"mopen"},"["),e("span",{class:"mord mathnormal"},"n"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"−"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord"},"3"),e("span",{class:"mclose"},"]"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),e("span",{class:"mord"},"..."),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal"},"d"),e("span",{class:"mord mathnormal"},"p"),e("span",{class:"mopen"},"["),e("span",{class:"mord"},"1"),e("span",{class:"mclose"},"]")])],-1),X={class:"katex"},Y={class:"katex-mathml"},Z=e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal"},"d"),e("span",{class:"mord mathnormal"},"p"),e("span",{class:"mopen"},"["),e("span",{class:"mord"},"1"),e("span",{class:"mclose"},"]"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal"},"d"),e("span",{class:"mord mathnormal"},"p"),e("span",{class:"mopen"},"["),e("span",{class:"mord"},"0"),e("span",{class:"mclose"},"]"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6444em"}}),e("span",{class:"mord"},"1")])],-1),$=e("p",null,"可以得到",-1),nn={class:"katex-display"},an={class:"katex"},sn={class:"katex-mathml"},tn=e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal"},"d"),e("span",{class:"mord mathnormal"},"p"),e("span",{class:"mopen"},"["),e("span",{class:"mord"},"2"),e("span",{class:"mord mathnormal"},"n"),e("span",{class:"mclose"},"]"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal"},"d"),e("span",{class:"mord mathnormal"},"p"),e("span",{class:"mopen"},"["),e("span",{class:"mord"},"1"),e("span",{class:"mclose"},"]"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal"},"d"),e("span",{class:"mord mathnormal"},"p"),e("span",{class:"mopen"},"["),e("span",{class:"mord"},"3"),e("span",{class:"mclose"},"]"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal"},"d"),e("span",{class:"mord mathnormal"},"p"),e("span",{class:"mopen"},"["),e("span",{class:"mord"},"5"),e("span",{class:"mclose"},"]"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),e("span",{class:"mord"},"..."),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal"},"d"),e("span",{class:"mord mathnormal"},"p"),e("span",{class:"mopen"},"["),e("span",{class:"mord"},"2"),e("span",{class:"mord mathnormal"},"n"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"−"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord"},"1"),e("span",{class:"mclose"},"]")])],-1),ln={class:"katex-display"},en={class:"katex"},un={class:"katex-mathml"},rn=e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal"},"d"),e("span",{class:"mord mathnormal"},"p"),e("span",{class:"mopen"},"["),e("span",{class:"mord"},"2"),e("span",{class:"mord mathnormal"},"n"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"−"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord"},"1"),e("span",{class:"mclose"},"]"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),e("span",{class:"mord"},"1"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal"},"d"),e("span",{class:"mord mathnormal"},"p"),e("span",{class:"mopen"},"["),e("span",{class:"mord"},"2"),e("span",{class:"mclose"},"]"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal"},"d"),e("span",{class:"mord mathnormal"},"p"),e("span",{class:"mopen"},"["),e("span",{class:"mord"},"4"),e("span",{class:"mclose"},"]"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),e("span",{class:"mord"},"..."),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal"},"d"),e("span",{class:"mord mathnormal"},"p"),e("span",{class:"mopen"},"["),e("span",{class:"mord"},"2"),e("span",{class:"mord mathnormal"},"n"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"−"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord"},"2"),e("span",{class:"mclose"},"]")])],-1),cn=p('<p>正是斐波那契数列。</p><p>代码：</p><pre class="language-cpp"><code class="language-cpp"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstdlib&gt;</span></span>\n<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstdio&gt;</span></span>\n<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MOD</span> <span class="token expression"><span class="token number">998244353ll</span></span></span>\n<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>\n<span class="token keyword">long</span> <span class="token keyword">long</span> <span class="token function">fastPow</span><span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">long</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">,</span><span class="token keyword">long</span> <span class="token keyword">long</span> m<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n\t<span class="token keyword">long</span> <span class="token keyword">long</span> ans <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\t<span class="token keyword">while</span> <span class="token punctuation">(</span>b<span class="token punctuation">)</span>\n\t<span class="token punctuation">{</span>\n\t\t<span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span>\n\t\t<span class="token punctuation">{</span>\n\t\t\tb<span class="token operator">--</span><span class="token punctuation">;</span>\n\t\t\tans <span class="token operator">*=</span> a<span class="token punctuation">;</span>\n\t\t\tans <span class="token operator">%=</span> m<span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span>\n\t\tb <span class="token operator">&gt;&gt;=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\t\ta <span class="token operator">*=</span> a<span class="token punctuation">;</span>\n\t\ta <span class="token operator">%=</span> m<span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\t<span class="token keyword">return</span> ans<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">long</span> <span class="token keyword">long</span> <span class="token function">inv</span><span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">long</span> x<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> <span class="token function">fastPow</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> MOD <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">,</span> MOD<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">int</span> n<span class="token punctuation">;</span>\n<span class="token keyword">int</span> now <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> pre <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> temp<span class="token punctuation">;</span>\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n\t<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">{</span>\n\t\ttemp <span class="token operator">=</span> <span class="token punctuation">(</span>now <span class="token operator">+</span> pre<span class="token punctuation">)</span> <span class="token operator">%</span> MOD<span class="token punctuation">;</span>\n\t\tpre <span class="token operator">=</span> now <span class="token operator">%</span> MOD<span class="token punctuation">;</span>\n\t\tnow <span class="token operator">=</span> temp <span class="token operator">%</span> MOD<span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\t<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%lld&quot;</span><span class="token punctuation">,</span>now <span class="token operator">*</span> <span class="token function">inv</span><span class="token punctuation">(</span><span class="token function">fastPow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> n<span class="token punctuation">,</span> MOD<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">%</span> MOD<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>',3);n("default",{__name:"SolutionCF1452D",setup:function(n,p){return(0,p.expose)({frontmatter:{}}),function(n,p){var pn=s("mn"),on=s("mi"),mn=s("msup"),fn=s("mrow"),dn=s("annotation"),hn=s("semantics"),gn=s("math"),kn=s("eq"),_n=s("mo"),yn=s("eqn");return t(),l("div",a,[o,i,m,f,e("p",null,[u("显然总方案数是 "),r(kn,null,{default:c((function(){return[e("span",d,[e("span",h,[r(gn,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:c((function(){return[r(hn,null,{default:c((function(){return[r(fn,null,{default:c((function(){return[r(mn,null,{default:c((function(){return[r(pn,null,{default:c((function(){return[u("2")]})),_:1}),r(on,null,{default:c((function(){return[u("n")]})),_:1})]})),_:1})]})),_:1}),r(dn,{encoding:"application/x-tex"},{default:c((function(){return[u("2 ^ n")]})),_:1})]})),_:1})]})),_:1})]),g])]})),_:1})]),k,_,y,e("p",null,[u("问题就化为了求正整数 "),r(kn,null,{default:c((function(){return[e("span",b,[e("span",w,[r(gn,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:c((function(){return[r(hn,null,{default:c((function(){return[r(fn,null,{default:c((function(){return[r(on,null,{default:c((function(){return[u("n")]})),_:1})]})),_:1}),r(dn,{encoding:"application/x-tex"},{default:c((function(){return[u("n")]})),_:1})]})),_:1})]})),_:1})]),x])]})),_:1}),u(" 能拆分成若干个允许相同的奇数的和的方案个数。")]),v,e("p",null,[u("对于任意的正整数 "),r(kn,null,{default:c((function(){return[e("span",M,[e("span",L,[r(gn,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:c((function(){return[r(hn,null,{default:c((function(){return[r(fn,null,{default:c((function(){return[r(on,null,{default:c((function(){return[u("n")]})),_:1})]})),_:1}),r(dn,{encoding:"application/x-tex"},{default:c((function(){return[u("n")]})),_:1})]})),_:1})]})),_:1})]),D])]})),_:1}),u(" ，")]),e("p",null,[u("我们可以枚举所有不大于 "),r(kn,null,{default:c((function(){return[e("span",O,[e("span",q,[r(gn,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:c((function(){return[r(hn,null,{default:c((function(){return[r(fn,null,{default:c((function(){return[r(on,null,{default:c((function(){return[u("n")]})),_:1})]})),_:1}),r(dn,{encoding:"application/x-tex"},{default:c((function(){return[u("n")]})),_:1})]})),_:1})]})),_:1})]),z])]})),_:1}),u(" 的奇数 "),r(kn,null,{default:c((function(){return[e("span",P,[e("span",S,[r(gn,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:c((function(){return[r(hn,null,{default:c((function(){return[r(fn,null,{default:c((function(){return[r(on,null,{default:c((function(){return[u("i")]})),_:1})]})),_:1}),r(dn,{encoding:"application/x-tex"},{default:c((function(){return[u("i")]})),_:1})]})),_:1})]})),_:1})]),j])]})),_:1}),u(" ，将其作为拆分序列的首个奇数，")]),e("p",null,[u("这样，除去 "),r(kn,null,{default:c((function(){return[e("span",C,[e("span",F,[r(gn,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:c((function(){return[r(hn,null,{default:c((function(){return[r(fn,null,{default:c((function(){return[r(on,null,{default:c((function(){return[u("i")]})),_:1})]})),_:1}),r(dn,{encoding:"application/x-tex"},{default:c((function(){return[u("i")]})),_:1})]})),_:1})]})),_:1})]),J])]})),_:1}),u(" 后，我们只需要求解剩余部分（即 "),r(kn,null,{default:c((function(){return[e("span",K,[e("span",W,[r(gn,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:c((function(){return[r(hn,null,{default:c((function(){return[r(fn,null,{default:c((function(){return[r(on,null,{default:c((function(){return[u("n")]})),_:1}),r(_n,null,{default:c((function(){return[u("−")]})),_:1}),r(on,null,{default:c((function(){return[u("i")]})),_:1})]})),_:1}),r(dn,{encoding:"application/x-tex"},{default:c((function(){return[u("n - i")]})),_:1})]})),_:1})]})),_:1})]),A])]})),_:1}),u(" ）的拆分方案数即可。")]),B,E,e("section",null,[r(yn,null,{default:c((function(){return[e("span",G,[e("span",H,[e("span",I,[r(gn,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:c((function(){return[r(hn,null,{default:c((function(){return[r(fn,null,{default:c((function(){return[r(on,null,{default:c((function(){return[u("d")]})),_:1}),r(on,null,{default:c((function(){return[u("p")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("[")]})),_:1}),r(on,null,{default:c((function(){return[u("n")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("]")]})),_:1}),r(_n,null,{default:c((function(){return[u("=")]})),_:1}),r(on,null,{default:c((function(){return[u("d")]})),_:1}),r(on,null,{default:c((function(){return[u("p")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("[")]})),_:1}),r(on,null,{default:c((function(){return[u("n")]})),_:1}),r(_n,null,{default:c((function(){return[u("−")]})),_:1}),r(pn,null,{default:c((function(){return[u("1")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("]")]})),_:1}),r(_n,null,{default:c((function(){return[u("+")]})),_:1}),r(on,null,{default:c((function(){return[u("d")]})),_:1}),r(on,null,{default:c((function(){return[u("p")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("[")]})),_:1}),r(on,null,{default:c((function(){return[u("n")]})),_:1}),r(_n,null,{default:c((function(){return[u("−")]})),_:1}),r(pn,null,{default:c((function(){return[u("3")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("]")]})),_:1}),r(_n,null,{default:c((function(){return[u("+")]})),_:1}),r(on,{mathvariant:"normal"},{default:c((function(){return[u(".")]})),_:1}),r(on,{mathvariant:"normal"},{default:c((function(){return[u(".")]})),_:1}),r(on,{mathvariant:"normal"},{default:c((function(){return[u(".")]})),_:1}),r(_n,null,{default:c((function(){return[u("+")]})),_:1}),r(on,null,{default:c((function(){return[u("d")]})),_:1}),r(on,null,{default:c((function(){return[u("p")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("[")]})),_:1}),r(pn,null,{default:c((function(){return[u("0")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("]")]})),_:1})]})),_:1}),r(dn,{encoding:"application/x-tex"},{default:c((function(){return[u("dp[n] = dp[n - 1] + dp[n - 3] + ... + dp[0]")]})),_:1})]})),_:1})]})),_:1})]),N])])]})),_:1})]),Q,e("section",null,[r(yn,null,{default:c((function(){return[e("span",R,[e("span",T,[e("span",U,[r(gn,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:c((function(){return[r(hn,null,{default:c((function(){return[r(fn,null,{default:c((function(){return[r(on,null,{default:c((function(){return[u("d")]})),_:1}),r(on,null,{default:c((function(){return[u("p")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("[")]})),_:1}),r(on,null,{default:c((function(){return[u("n")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("]")]})),_:1}),r(_n,null,{default:c((function(){return[u("=")]})),_:1}),r(on,null,{default:c((function(){return[u("d")]})),_:1}),r(on,null,{default:c((function(){return[u("p")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("[")]})),_:1}),r(on,null,{default:c((function(){return[u("n")]})),_:1}),r(_n,null,{default:c((function(){return[u("−")]})),_:1}),r(pn,null,{default:c((function(){return[u("1")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("]")]})),_:1}),r(_n,null,{default:c((function(){return[u("+")]})),_:1}),r(on,null,{default:c((function(){return[u("d")]})),_:1}),r(on,null,{default:c((function(){return[u("p")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("[")]})),_:1}),r(on,null,{default:c((function(){return[u("n")]})),_:1}),r(_n,null,{default:c((function(){return[u("−")]})),_:1}),r(pn,null,{default:c((function(){return[u("3")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("]")]})),_:1}),r(_n,null,{default:c((function(){return[u("+")]})),_:1}),r(on,{mathvariant:"normal"},{default:c((function(){return[u(".")]})),_:1}),r(on,{mathvariant:"normal"},{default:c((function(){return[u(".")]})),_:1}),r(on,{mathvariant:"normal"},{default:c((function(){return[u(".")]})),_:1}),r(_n,null,{default:c((function(){return[u("+")]})),_:1}),r(on,null,{default:c((function(){return[u("d")]})),_:1}),r(on,null,{default:c((function(){return[u("p")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("[")]})),_:1}),r(pn,null,{default:c((function(){return[u("1")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("]")]})),_:1})]})),_:1}),r(dn,{encoding:"application/x-tex"},{default:c((function(){return[u("dp[n] = dp[n - 1] + dp[n - 3] + ... + dp[1]")]})),_:1})]})),_:1})]})),_:1})]),V])])]})),_:1})]),e("p",null,[u("考虑到 "),r(kn,null,{default:c((function(){return[e("span",X,[e("span",Y,[r(gn,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:c((function(){return[r(hn,null,{default:c((function(){return[r(fn,null,{default:c((function(){return[r(on,null,{default:c((function(){return[u("d")]})),_:1}),r(on,null,{default:c((function(){return[u("p")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("[")]})),_:1}),r(pn,null,{default:c((function(){return[u("1")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("]")]})),_:1}),r(_n,null,{default:c((function(){return[u("=")]})),_:1}),r(on,null,{default:c((function(){return[u("d")]})),_:1}),r(on,null,{default:c((function(){return[u("p")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("[")]})),_:1}),r(pn,null,{default:c((function(){return[u("0")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("]")]})),_:1}),r(_n,null,{default:c((function(){return[u("=")]})),_:1}),r(pn,null,{default:c((function(){return[u("1")]})),_:1})]})),_:1}),r(dn,{encoding:"application/x-tex"},{default:c((function(){return[u("dp[1] = dp[0] = 1")]})),_:1})]})),_:1})]})),_:1})]),Z])]})),_:1})]),$,e("section",null,[r(yn,null,{default:c((function(){return[e("span",nn,[e("span",an,[e("span",sn,[r(gn,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:c((function(){return[r(hn,null,{default:c((function(){return[r(fn,null,{default:c((function(){return[r(on,null,{default:c((function(){return[u("d")]})),_:1}),r(on,null,{default:c((function(){return[u("p")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("[")]})),_:1}),r(pn,null,{default:c((function(){return[u("2")]})),_:1}),r(on,null,{default:c((function(){return[u("n")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("]")]})),_:1}),r(_n,null,{default:c((function(){return[u("=")]})),_:1}),r(on,null,{default:c((function(){return[u("d")]})),_:1}),r(on,null,{default:c((function(){return[u("p")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("[")]})),_:1}),r(pn,null,{default:c((function(){return[u("1")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("]")]})),_:1}),r(_n,null,{default:c((function(){return[u("+")]})),_:1}),r(on,null,{default:c((function(){return[u("d")]})),_:1}),r(on,null,{default:c((function(){return[u("p")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("[")]})),_:1}),r(pn,null,{default:c((function(){return[u("3")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("]")]})),_:1}),r(_n,null,{default:c((function(){return[u("+")]})),_:1}),r(on,null,{default:c((function(){return[u("d")]})),_:1}),r(on,null,{default:c((function(){return[u("p")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("[")]})),_:1}),r(pn,null,{default:c((function(){return[u("5")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("]")]})),_:1}),r(_n,null,{default:c((function(){return[u("+")]})),_:1}),r(on,{mathvariant:"normal"},{default:c((function(){return[u(".")]})),_:1}),r(on,{mathvariant:"normal"},{default:c((function(){return[u(".")]})),_:1}),r(on,{mathvariant:"normal"},{default:c((function(){return[u(".")]})),_:1}),r(_n,null,{default:c((function(){return[u("+")]})),_:1}),r(on,null,{default:c((function(){return[u("d")]})),_:1}),r(on,null,{default:c((function(){return[u("p")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("[")]})),_:1}),r(pn,null,{default:c((function(){return[u("2")]})),_:1}),r(on,null,{default:c((function(){return[u("n")]})),_:1}),r(_n,null,{default:c((function(){return[u("−")]})),_:1}),r(pn,null,{default:c((function(){return[u("1")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("]")]})),_:1})]})),_:1}),r(dn,{encoding:"application/x-tex"},{default:c((function(){return[u("dp[2n] = dp[1] + dp[3] + dp[5] + ... + dp[2n - 1]")]})),_:1})]})),_:1})]})),_:1})]),tn])])]})),_:1})]),e("section",null,[r(yn,null,{default:c((function(){return[e("span",ln,[e("span",en,[e("span",un,[r(gn,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:c((function(){return[r(hn,null,{default:c((function(){return[r(fn,null,{default:c((function(){return[r(on,null,{default:c((function(){return[u("d")]})),_:1}),r(on,null,{default:c((function(){return[u("p")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("[")]})),_:1}),r(pn,null,{default:c((function(){return[u("2")]})),_:1}),r(on,null,{default:c((function(){return[u("n")]})),_:1}),r(_n,null,{default:c((function(){return[u("−")]})),_:1}),r(pn,null,{default:c((function(){return[u("1")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("]")]})),_:1}),r(_n,null,{default:c((function(){return[u("=")]})),_:1}),r(pn,null,{default:c((function(){return[u("1")]})),_:1}),r(_n,null,{default:c((function(){return[u("+")]})),_:1}),r(on,null,{default:c((function(){return[u("d")]})),_:1}),r(on,null,{default:c((function(){return[u("p")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("[")]})),_:1}),r(pn,null,{default:c((function(){return[u("2")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("]")]})),_:1}),r(_n,null,{default:c((function(){return[u("+")]})),_:1}),r(on,null,{default:c((function(){return[u("d")]})),_:1}),r(on,null,{default:c((function(){return[u("p")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("[")]})),_:1}),r(pn,null,{default:c((function(){return[u("4")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("]")]})),_:1}),r(_n,null,{default:c((function(){return[u("+")]})),_:1}),r(on,{mathvariant:"normal"},{default:c((function(){return[u(".")]})),_:1}),r(on,{mathvariant:"normal"},{default:c((function(){return[u(".")]})),_:1}),r(on,{mathvariant:"normal"},{default:c((function(){return[u(".")]})),_:1}),r(_n,null,{default:c((function(){return[u("+")]})),_:1}),r(on,null,{default:c((function(){return[u("d")]})),_:1}),r(on,null,{default:c((function(){return[u("p")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("[")]})),_:1}),r(pn,null,{default:c((function(){return[u("2")]})),_:1}),r(on,null,{default:c((function(){return[u("n")]})),_:1}),r(_n,null,{default:c((function(){return[u("−")]})),_:1}),r(pn,null,{default:c((function(){return[u("2")]})),_:1}),r(_n,{stretchy:"false"},{default:c((function(){return[u("]")]})),_:1})]})),_:1}),r(dn,{encoding:"application/x-tex"},{default:c((function(){return[u("dp[2n - 1] = 1 + dp[2] + dp[4] + ... + dp[2n - 2]")]})),_:1})]})),_:1})]})),_:1})]),rn])])]})),_:1})]),cn])}}})}}}));
