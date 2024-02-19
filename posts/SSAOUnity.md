<p>Games 101 大作业 Screen Space Ambient Occlusion With Unity</p>
<p>本文旨在记录大作业实现过程中遇到的各种问题与解决方案。</p>
<p>仓库地址：<a href="https://github.com/txtxj/Screen-Space-Ambient-Occlusion" data-clickable="">https://github.com/txtxj/Screen-Space-Ambient-Occlusion</a></p>
<h2 id="%E9%9A%8F%E6%9C%BA%E5%87%BD%E6%95%B0" tabindex="-1"><a class="header-anchor" href="#%E9%9A%8F%E6%9C%BA%E5%87%BD%E6%95%B0" data-clickable=""><span>随机函数</span></a></h2>
<pre class="language-c"><code class="language-c"><span class="token keyword">float</span> <span class="token function">fract</span><span class="token punctuation">(</span><span class="token keyword">float</span> x<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">-</span> <span class="token function">floor</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p><code>fract</code> 函数返回浮点数的小数部分。</p>
<pre class="language-c"><code class="language-c"><span class="token keyword">float</span> <span class="token function">random</span><span class="token punctuation">(</span>float2 st<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">fract</span><span class="token punctuation">(</span><span class="token function">sin</span><span class="token punctuation">(</span><span class="token function">dot</span><span class="token punctuation">(</span>st<span class="token punctuation">.</span>xy<span class="token punctuation">,</span> <span class="token function">float2</span><span class="token punctuation">(</span><span class="token number">12.9898</span><span class="token punctuation">,</span><span class="token number">78.233</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">43758.5453123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p><code>random</code> 函数用于生成一个随机浮点数，这是一个很用于着色器的经典随机数生成器。</p>
<pre class="language-c"><code class="language-c">float3 <span class="token function">random3</span><span class="token punctuation">(</span>float2 seed<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    float3 vec<span class="token punctuation">;</span>
    vec<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token function">random</span><span class="token punctuation">(</span>seed<span class="token punctuation">)</span><span class="token punctuation">;</span>
    vec<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token function">random</span><span class="token punctuation">(</span>seed <span class="token operator">*</span> seed<span class="token punctuation">)</span><span class="token punctuation">;</span>
    vec<span class="token punctuation">.</span>z <span class="token operator">=</span> <span class="token function">random</span><span class="token punctuation">(</span>seed <span class="token operator">*</span> seed <span class="token operator">*</span> seed<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">normalize</span><span class="token punctuation">(</span>vec<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>该函数使用一个二维向量（一般是 uv 坐标），生成一个归一化的三维随机向量，这个向量用于生成 TBN 矩阵。</p>
<pre class="language-c"><code class="language-c">float3 <span class="token function">sampling</span><span class="token punctuation">(</span>float2 seed<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    float4 r<span class="token punctuation">;</span>
    r<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token function">random</span><span class="token punctuation">(</span>seed<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    r<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token function">random</span><span class="token punctuation">(</span>seed <span class="token operator">*</span> seed<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    r<span class="token punctuation">.</span>z <span class="token operator">=</span> <span class="token function">random</span><span class="token punctuation">(</span>seed <span class="token operator">*</span> seed <span class="token operator">*</span> seed<span class="token punctuation">)</span><span class="token punctuation">;</span>
    r<span class="token punctuation">.</span>w <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    r <span class="token operator">=</span> <span class="token function">normalize</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> r<span class="token punctuation">.</span>xyz<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>与 <code>random3</code> 类似，但返回值的 <code>x</code> 和 <code>y</code> 方向范围在 <eq><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">-1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord">1</span></span></span></span></eq> 和 <eq><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>1</mn></mrow><annotation encoding="application/x-tex">1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></eq> 之间， <code>z</code> 方向范围在 <eq><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>0</mn></mrow><annotation encoding="application/x-tex">0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span></eq> 和 <eq><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>1</mn></mrow><annotation encoding="application/x-tex">1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></eq> 之间，这个向量用于半球内采样。</p>
<h2 id="%E9%A1%B6%E7%82%B9%E7%9D%80%E8%89%B2%E5%99%A8" tabindex="-1"><a class="header-anchor" href="#%E9%A1%B6%E7%82%B9%E7%9D%80%E8%89%B2%E5%99%A8" data-clickable=""><span>顶点着色器</span></a></h2>
<pre class="language-c"><code class="language-c">v2f <span class="token function">vert</span><span class="token punctuation">(</span>appdata_full v<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    v2f o<span class="token punctuation">;</span>
    o<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token function">UnityObjectToClipPos</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>vertex<span class="token punctuation">)</span><span class="token punctuation">;</span>
    o<span class="token punctuation">.</span>uv <span class="token operator">=</span> v<span class="token punctuation">.</span>texcoord<span class="token punctuation">;</span>
    o<span class="token punctuation">.</span>screenPos <span class="token operator">=</span> <span class="token function">ComputeScreenPos</span><span class="token punctuation">(</span>o<span class="token punctuation">.</span>position<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> o<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>此处笔者曾尝试将计算屏幕空间坐标推迟到片段着色器进行，但效果如下图</p>
<p><n-image src="https://s2.loli.net/2022/07/12/oUhPbzOWD25yBYi.png" alt="20220712_1.png" show-toolbar-tooltip /></p>
<p>可见明显条纹。</p>
<p>造成这一现象的原因是 <code>ComputeScreenPos()</code> 函数返回的是齐次坐标下屏幕空间的坐标值，其核心实现为</p>
<pre class="language-c"><code class="language-c">float4 <span class="token function">ComputeScreenPos</span><span class="token punctuation">(</span>float4 pos<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    float4 o<span class="token punctuation">;</span>
    o<span class="token punctuation">.</span>x <span class="token operator">=</span> pos<span class="token punctuation">.</span>x <span class="token operator">*</span> <span class="token number">0.5f</span> <span class="token operator">+</span> pos<span class="token punctuation">.</span>w <span class="token operator">*</span> <span class="token number">0.5f</span><span class="token punctuation">;</span>
    o<span class="token punctuation">.</span>y <span class="token operator">=</span> pos<span class="token punctuation">.</span>y <span class="token operator">*</span> <span class="token number">0.5f</span> <span class="token operator">*</span> _ProjectionParams<span class="token punctuation">.</span>x <span class="token operator">+</span> pos<span class="token punctuation">.</span>w <span class="token operator">*</span> <span class="token number">0.5f</span><span class="token punctuation">;</span>
    o<span class="token punctuation">.</span>zw <span class="token operator">=</span> pos<span class="token punctuation">.</span>zw<span class="token punctuation">;</span>
    <span class="token keyword">return</span> o<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>然而投影变换不是线性变换，而片段着色器的插值是线性插值，这会导致该函数在投影前、投影后调用的结果不同。</p>
<h2 id="%E7%89%87%E6%AE%B5%E7%9D%80%E8%89%B2%E5%99%A8" tabindex="-1"><a class="header-anchor" href="#%E7%89%87%E6%AE%B5%E7%9D%80%E8%89%B2%E5%99%A8" data-clickable=""><span>片段着色器</span></a></h2>
<pre class="language-c"><code class="language-c"><span class="token comment">// Get view space normal and lineal0-1 depth</span>
<span class="token function">DecodeDepthNormal</span><span class="token punctuation">(</span><span class="token function">tex2D</span><span class="token punctuation">(</span>_CameraDepthNormalsTexture<span class="token punctuation">,</span> i<span class="token punctuation">.</span>uv<span class="token punctuation">)</span><span class="token punctuation">,</span> depth<span class="token punctuation">,</span> normal<span class="token punctuation">)</span><span class="token punctuation">;</span>
normal<span class="token punctuation">.</span>z <span class="token operator">*=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
</code></pre>
<p>从相机深度法线纹理中采样深度与法向，注意由于摄像机看向 z 轴负方向，该法线纹理的 z 分量需要取反。</p>
<pre class="language-c"><code class="language-c"><span class="token comment">// screen space -> ndc -> clip space -> view space</span>
float4 ndc <span class="token operator">=</span> i<span class="token punctuation">.</span>screenPos <span class="token operator">/</span> i<span class="token punctuation">.</span>screenPos<span class="token punctuation">.</span>w <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
float4 clipPos <span class="token operator">=</span> <span class="token function">float4</span><span class="token punctuation">(</span>ndc<span class="token punctuation">.</span>xy<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> _ProjectionParams<span class="token punctuation">.</span>z<span class="token punctuation">;</span>
float4 viewPos <span class="token operator">=</span> <span class="token function">mul</span><span class="token punctuation">(</span>unity_CameraInvProjection<span class="token punctuation">,</span> clipPos<span class="token punctuation">)</span><span class="token punctuation">;</span>
viewPos <span class="token operator">=</span> viewPos <span class="token operator">/</span> viewPos<span class="token punctuation">.</span>w <span class="token operator">*</span> depth<span class="token punctuation">;</span>
</code></pre>
<p>从屏幕空间出发，三行依次计算出 ndc 空间坐标、裁剪空间坐标、观察空间坐标，我们接下来的采样工作均在观察空间中进行。</p>
<pre class="language-c"><code class="language-c"><span class="token comment">// Get normal direction hemisphere TBN matrix</span>
float3 tangent <span class="token operator">=</span> <span class="token function">random3</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>uv<span class="token punctuation">)</span><span class="token punctuation">;</span>
float3 bitangent <span class="token operator">=</span> <span class="token function">cross</span><span class="token punctuation">(</span>normal<span class="token punctuation">,</span> tangent<span class="token punctuation">)</span><span class="token punctuation">;</span>
tangent <span class="token operator">=</span> <span class="token function">cross</span><span class="token punctuation">(</span>bitangent<span class="token punctuation">,</span> normal<span class="token punctuation">)</span><span class="token punctuation">;</span>
float3x3 TBN <span class="token operator">=</span> <span class="token function">float3x3</span><span class="token punctuation">(</span>tangent<span class="token punctuation">,</span> bitangent<span class="token punctuation">,</span> normal<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>获取当前采样点的 TBN 矩阵，先随机一个向量，求法线与该向量的叉乘，结果作为副切线，再利用副切线与法线的乘积作为切线方向。</p>
<p><n-image src="https://s2.loli.net/2022/07/12/8IamxurzJtGTSZL.png" alt="20220712_2.png" show-toolbar-tooltip /></p>
<p>接下来是在采样点半球内进行随机采样，计算遮挡百分比。</p>
<pre class="language-c"><code class="language-c">float3 offset <span class="token operator">=</span> <span class="token function">sampling</span><span class="token punctuation">(</span>j <span class="token operator">*</span> i<span class="token punctuation">.</span>uv<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">float</span> scale <span class="token operator">=</span> j <span class="token operator">/</span> _SampleCount<span class="token punctuation">;</span>
<span class="token comment">// Bringing the sampling point closer to the centre of the ball</span>
offset <span class="token operator">*=</span> scale<span class="token punctuation">;</span>
offset <span class="token operator">=</span> <span class="token function">mul</span><span class="token punctuation">(</span>offset<span class="token punctuation">,</span> TBN<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">float</span> weight <span class="token operator">=</span> <span class="token function">smoothstep</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token function">length</span><span class="token punctuation">(</span>offset<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>使用 <code>sampling</code> 随机得到的向量模长服从 <eq><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>0</mn></mrow><annotation encoding="application/x-tex">0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span></eq> 到 <eq><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>1</mn></mrow><annotation encoding="application/x-tex">1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></eq> 之间的均匀分布，而我们希望采样更多离球心更近的点，使得估计的方差不会太大。</p>
<p>因此使用一个 <code>scale</code> 作为约束，让采样点更靠近球心。</p>
<p>另外，使用 <code>weight</code> 参数作为权重，采样点离球心越远，该采样点对球心的遮挡效果越明显。</p>
<pre class="language-c"><code class="language-c"><span class="token comment">// samp: view space -> clip space -> ndc</span>
float3 samp <span class="token operator">=</span> viewPos <span class="token operator">+</span> offset <span class="token operator">*</span> _SampleRadius<span class="token punctuation">;</span>
samp <span class="token operator">=</span> <span class="token function">mul</span><span class="token punctuation">(</span>unity_CameraProjection<span class="token punctuation">,</span> samp<span class="token punctuation">)</span><span class="token punctuation">;</span>
samp <span class="token operator">/=</span> samp<span class="token punctuation">.</span>z<span class="token punctuation">;</span>
samp <span class="token operator">=</span> <span class="token punctuation">(</span>samp <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0.5</span><span class="token punctuation">;</span>
<span class="token keyword">float</span> sampDepth <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
float3 sampNormal <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token function">DecodeDepthNormal</span><span class="token punctuation">(</span><span class="token function">tex2D</span><span class="token punctuation">(</span>_CameraDepthNormalsTexture<span class="token punctuation">,</span> samp<span class="token punctuation">.</span>xy<span class="token punctuation">)</span><span class="token punctuation">,</span> sampDepth<span class="token punctuation">,</span> sampNormal<span class="token punctuation">)</span><span class="token punctuation">;</span>
ao <span class="token operator">+=</span> <span class="token function">abs</span><span class="token punctuation">(</span>sampDepth <span class="token operator">-</span> depth<span class="token punctuation">)</span> <span class="token operator">&lt;</span> _DepthRange <span class="token operator">&amp;&amp;</span> depth <span class="token operator">></span> sampDepth <span class="token operator">+</span> <span class="token number">0.0001</span> <span class="token operator">?</span> weight <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre>
<p>与球心点的操作相反，将采样点从观察空间变换到 ndc 空间中，采样得到该点的深度，计算遮挡关系。</p>
<h2 id="%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99" tabindex="-1"><a class="header-anchor" href="#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99" data-clickable=""><span>参考资料</span></a></h2>
<ul>
<li>https://www.bilibili.com/video/BV16q4y1U7S3?p=2</li>
<li>https://www.bilibili.com/video/BV1YK4y1T7yY?p=8</li>
<li>https://blog.csdn.net/linuxheik/article/details/86691117</li>
<li>https://zhuanlan.zhihu.com/p/148627526</li>
<li>https://zhuanlan.zhihu.com/p/510620589</li>
</ul>
