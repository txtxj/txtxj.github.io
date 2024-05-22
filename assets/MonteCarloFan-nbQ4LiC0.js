import{a2 as l,P as o,Q as e,aK as u,M as s,R as k,a0 as n,ag as r}from"./index-ISKQwl1N.js";import{_ as i}from"./Image-lMWWUQJf.js";import"./utils-YEEAJbpI.js";const m={},d={style:{display:"flex","justify-content":"space-between","flex-wrap":"nowrap",gap:"1.6em"}};function f(t,p){return o(),e("div",d,[u(t.$slots,"default")])}const y=l(m,[["render",f]]),_={class:"md-blog m-auto text-left"},h=n("p",null,"暑期实习做究极手的时候想到的用来模拟风扇的方法，后来虽然没做究极手，去做了个 mini 版人类一败涂地，但还是把这个功能实现了，当作全游第二大的特点。",-1),w=n("p",null,"现实中的风扇出风一般不是时刻均匀的，如果把一张纸放在风扇上，会被随机地吹开，而不能稳定地浮在风扇上。",-1),g=n("p",null,"考虑类似光线追踪算法的方式，使用蒙特卡洛积分来计算风扇对物体的吹力。在每一物理帧中，依照概率对风扇出风面采样，得到一个或多个采样点。从采样点向出风方向（方向也可以依概率随机采样）发射一条风力线，并进行射线检测，在最近撞击点对目标物体施加一个推动力。图中白线为风扇发射出的风力线。",-1),b=r('<p>P3 在风力线打在物体表面时，从命中点沿切线再发射一次风力线，模拟物体把风分割开的效果。本来是准备用这个特性做一个需要障碍物改变风向的小关卡，但没想好关卡怎么设计，所以没怎么调切向风，效果不太好。</p><p>实现方式类似于光线追踪，部分代码如下：</p><pre class="language-cs"><code class="language-cs"><span class="token keyword">public</span> <span class="token class-name"><span class="token keyword">int</span></span> monteMax<span class="token punctuation">;</span> <span class="token comment">// 每帧采样次数</span>\n<span class="token keyword">public</span> <span class="token class-name"><span class="token keyword">float</span></span> maxForce<span class="token punctuation">;</span> <span class="token comment">// 最大风力</span>\n<span class="token keyword">public</span> <span class="token class-name"><span class="token keyword">float</span></span> maxDistance<span class="token punctuation">;</span> <span class="token comment">// 最大触发距离</span>\n<span class="token keyword">public</span> <span class="token class-name"><span class="token keyword">float</span></span> radius<span class="token punctuation">;</span> <span class="token comment">// 风扇半径</span>\n<span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">float</span></span> forceRate<span class="token punctuation">;</span> <span class="token comment">// 风扇效率 档位</span>\n\n<span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">DetectItemAndAddForce</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token class-name">Transform</span> tr <span class="token operator">=</span> transform<span class="token punctuation">;</span>\n    <span class="token class-name">Vector3</span> center <span class="token operator">=</span> tr<span class="token punctuation">.</span>position<span class="token punctuation">;</span>\n    <span class="token class-name"><span class="token keyword">float</span></span> alpha <span class="token operator">=</span> forceRate <span class="token operator">*</span> maxForce <span class="token operator">/</span> <span class="token punctuation">(</span>maxDistance <span class="token operator">*</span> maxDistance <span class="token operator">*</span> monteMax<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> monteMax<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token class-name">Vector2</span> rand <span class="token operator">=</span> Random<span class="token punctuation">.</span>insideUnitCircle <span class="token operator">*</span> radius<span class="token punctuation">;</span> <span class="token comment">// 单位圆均匀采样</span>\n        <span class="token class-name">Vector3</span> origin <span class="token operator">=</span> center <span class="token operator">+</span> rand<span class="token punctuation">.</span>x <span class="token operator">*</span> tr<span class="token punctuation">.</span>right <span class="token operator">+</span> rand<span class="token punctuation">.</span>y <span class="token operator">*</span> tr<span class="token punctuation">.</span>forward<span class="token punctuation">;</span>\n        <span class="token class-name">Vector3</span> direction <span class="token operator">=</span> transform<span class="token punctuation">.</span>up<span class="token punctuation">;</span>\n        \n        <span class="token function">WindRayCast</span><span class="token punctuation">(</span>origin<span class="token punctuation">,</span> direction<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> alpha<span class="token punctuation">,</span> maxDistance<span class="token punctuation">,</span> maxForce<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">WindRayCast</span><span class="token punctuation">(</span><span class="token class-name">Vector3</span> origin<span class="token punctuation">,</span> <span class="token class-name">Vector3</span> direction<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> depth<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">float</span></span> alpha<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">float</span></span> restDistance<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">float</span></span> restForce<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>depth <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>\n    \n    <span class="token class-name">Ray</span> ray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Ray</span><span class="token punctuation">(</span>origin<span class="token punctuation">,</span> direction<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>Physics<span class="token punctuation">.</span><span class="token function">Raycast</span><span class="token punctuation">(</span>ray<span class="token punctuation">,</span> <span class="token keyword">out</span> <span class="token class-name">RaycastHit</span> hitInfo<span class="token punctuation">,</span> restDistance<span class="token punctuation">,</span> <span class="token operator">~</span>LayerMask<span class="token punctuation">.</span><span class="token function">GetMask</span><span class="token punctuation">(</span><span class="token string">&quot;Ground&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token class-name">Vector3</span> force <span class="token operator">=</span> Mathf<span class="token punctuation">.</span><span class="token function">Pow</span><span class="token punctuation">(</span>restDistance <span class="token operator">-</span> hitInfo<span class="token punctuation">.</span>distance<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">*</span> alpha <span class="token operator">*</span> direction<span class="token punctuation">;</span>\n        <span class="token class-name">Vector3</span> forceNormal <span class="token operator">=</span> Vector3<span class="token punctuation">.</span><span class="token function">Dot</span><span class="token punctuation">(</span>force<span class="token punctuation">,</span> hitInfo<span class="token punctuation">.</span>normal<span class="token punctuation">)</span> <span class="token operator">*</span> hitInfo<span class="token punctuation">.</span>normal<span class="token punctuation">;</span>\n        <span class="token class-name"><span class="token keyword">float</span></span> forceTangent <span class="token operator">=</span> <span class="token punctuation">(</span>force <span class="token operator">-</span> forceNormal<span class="token punctuation">)</span><span class="token punctuation">.</span>magnitude<span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>hitInfo<span class="token punctuation">.</span>collider<span class="token punctuation">.</span><span class="token function">TryGetComponent</span><span class="token punctuation">(</span><span class="token keyword">out</span> <span class="token class-name">Rigidbody</span> rb<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>rb<span class="token punctuation">.</span>isKinematic<span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            rb<span class="token punctuation">.</span><span class="token function">AddForceAtPosition</span><span class="token punctuation">(</span>forceNormal<span class="token punctuation">,</span> hitInfo<span class="token punctuation">.</span>point<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n            \n        <span class="token comment">// 切线分量</span>\n        origin <span class="token operator">=</span> hitInfo<span class="token punctuation">.</span>point <span class="token operator">+</span> hitInfo<span class="token punctuation">.</span>normal <span class="token operator">*</span> <span class="token number">0.1f</span><span class="token punctuation">;</span>\n        direction <span class="token operator">-=</span> Vector3<span class="token punctuation">.</span><span class="token function">Dot</span><span class="token punctuation">(</span>hitInfo<span class="token punctuation">.</span>normal<span class="token punctuation">,</span> direction<span class="token punctuation">)</span> <span class="token operator">*</span> hitInfo<span class="token punctuation">.</span>normal<span class="token punctuation">;</span>\n        alpha <span class="token operator">/=</span> restDistance <span class="token operator">*</span> restDistance<span class="token punctuation">;</span>\n        restDistance <span class="token operator">-=</span> hitInfo<span class="token punctuation">.</span>distance<span class="token punctuation">;</span>\n        alpha <span class="token operator">*=</span> restDistance <span class="token operator">*</span> restDistance <span class="token operator">*</span> forceTangent <span class="token operator">/</span> restForce<span class="token punctuation">;</span>\n        \n        <span class="token function">WindRayCast</span><span class="token punctuation">(</span>origin<span class="token punctuation">,</span> direction<span class="token punctuation">,</span> depth <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> alpha<span class="token punctuation">,</span> restDistance<span class="token punctuation">,</span> forceTangent<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>',3),v="蒙特卡洛风扇",C="2024-03-14T12:08:59.000Z",F=!1,M=["Unity"],A="https://s2.loli.net/2024/05/22/TG6RAa9QWb1Lm3g.jpg",N=null,W={__name:"MonteCarloFan",setup(t,{expose:p}){return p({frontmatter:{title:"蒙特卡洛风扇",date:"2024-03-14T12:08:59.000Z",toc:!1,tags:["Unity"],cover:"https://s2.loli.net/2024/05/22/TG6RAa9QWb1Lm3g.jpg",grow:null}}),(D,I)=>{const a=i,c=y;return o(),e("div",_,[h,w,g,s(c,null,{default:k(()=>[n("p",null,[s(a,{src:"https://s2.loli.net/2024/05/22/5iugsatnf2N8DWT.png",alt:"20240314_1.png","show-toolbar-tooltip":""})]),n("p",null,[s(a,{src:"https://s2.loli.net/2024/05/22/jhpsSc5wyxAr3mT.png",alt:"20240314_2.png","show-toolbar-tooltip":""})]),n("p",null,[s(a,{src:"https://s2.loli.net/2024/05/22/WjyawmPI1xhcQE4.png",alt:"20240314_3.png","show-toolbar-tooltip":""})])]),_:1}),b])}}};export{A as cover,C as date,W as default,N as grow,M as tags,v as title,F as toc};
