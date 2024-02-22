import{d as W,u as j,m as I,aq as J,l as O,n as Z,aV as Q,aW as H,aX as tt,h as S,f as et,e as nt,c as ot,o as st,r as k,q as G,w as V,a5 as it,L as Y,T as $,Z as w,J as y,O as B,a3 as F,P as A,W as X,U as rt,a4 as at,aY as lt,$ as ct}from"./index-ukExRzut.js";import{_ as ut}from"./Divider-Eqy9a8LR.js";function ht(u,i="default",l=[]){const a=u.$slots[i];return a===void 0?l:a()}const dt={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},ft=()=>dt,mt={name:"Flex",self:ft},gt=mt,pt=Object.assign(Object.assign({},I.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrap:{type:Boolean,default:!0}}),Et=W({name:"Flex",props:pt,setup(u){const{mergedClsPrefixRef:i,mergedRtlRef:l}=j(u),g=I("Flex","-flex",void 0,gt,u,i);return{rtlEnabled:J("Flex",l,i),mergedClsPrefix:i,margin:O(()=>{const{size:m}=u;if(Array.isArray(m))return{horizontal:m[0],vertical:m[1]};if(typeof m=="number")return{horizontal:m,vertical:m};const{self:{[Z("gap",m)]:t}}=g.value,{row:n,col:e}=Q(t);return{horizontal:H(e),vertical:H(n)}})}},render(){const{vertical:u,reverse:i,align:l,inline:g,justify:a,margin:m,wrap:t,mergedClsPrefix:n,rtlEnabled:e}=this,o=tt(ht(this),!1);return o.length?S("div",{role:"none",class:["".concat(n,"-flex"),e&&"".concat(n,"-flex--rtl")],style:{display:g?"inline-flex":"flex",flexDirection:u&&!i?"column":u&&i?"column-reverse":!u&&i?"row-reverse":"row",justifyContent:a,flexWrap:!t||u?"nowrap":"wrap",alignItems:l,gap:"".concat(m.vertical,"px ").concat(m.horizontal,"px")}},o):null}}),wt=et([nt("qr-code","\n background: #fff;\n border-radius: var(--n-border-radius);\n display: inline-flex;\n ")]),Mt=u=>({borderRadius:u.borderRadius}),Rt={name:"QrCode",common:ot,self:Mt},Ct=Rt;var b;(function(u){class i{static encodeText(t,n){const e=u.QrSegment.makeSegments(t);return i.encodeSegments(e,n)}static encodeBinary(t,n){const e=u.QrSegment.makeBytes(t);return i.encodeSegments([e],n)}static encodeSegments(t,n,e=1,o=40,s=-1,c=!0){if(!(i.MIN_VERSION<=e&&e<=o&&o<=i.MAX_VERSION)||s<-1||s>7)throw new RangeError("Invalid value");let r,d;for(r=e;;r++){const f=i.getNumDataCodewords(r,n)*8,p=a.getTotalBits(t,r);if(p<=f){d=p;break}if(r>=o)throw new RangeError("Data too long")}for(const f of[i.Ecc.MEDIUM,i.Ecc.QUARTILE,i.Ecc.HIGH])c&&d<=i.getNumDataCodewords(r,f)*8&&(n=f);const h=[];for(const f of t){l(f.mode.modeBits,4,h),l(f.numChars,f.mode.numCharCountBits(r),h);for(const p of f.getData())h.push(p)}const N=i.getNumDataCodewords(r,n)*8;l(0,Math.min(4,N-h.length),h),l(0,(8-h.length%8)%8,h);for(let f=236;h.length<N;f^=253)l(f,8,h);const R=[];for(;R.length*8<h.length;)R.push(0);return h.forEach((f,p)=>R[p>>>3]|=f<<7-(p&7)),new i(r,n,R,s)}constructor(t,n,e,o){if(this.version=t,this.errorCorrectionLevel=n,this.modules=[],this.isFunction=[],t<i.MIN_VERSION||t>i.MAX_VERSION)throw new RangeError("Version value out of range");if(o<-1||o>7)throw new RangeError("Mask value out of range");this.size=t*4+17;const s=[];for(let r=0;r<this.size;r++)s.push(!1);for(let r=0;r<this.size;r++)this.modules.push(s.slice()),this.isFunction.push(s.slice());this.drawFunctionPatterns();const c=this.addEccAndInterleave(e);if(this.drawCodewords(c),o===-1){let r=1e9;for(let d=0;d<8;d++){this.applyMask(d),this.drawFormatBits(d);const h=this.getPenaltyScore();h<r&&(o=d,r=h),this.applyMask(d)}}this.mask=o,this.applyMask(o),this.drawFormatBits(o),this.isFunction=[]}getModule(t,n){return t>=0&&t<this.size&&n>=0&&n<this.size&&this.modules[n][t]}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2===0),this.setFunctionModule(e,6,e%2===0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const t=this.getAlignmentPatternPositions(),n=t.length;for(let e=0;e<n;e++)for(let o=0;o<n;o++)e===0&&o===0||e===0&&o===n-1||e===n-1&&o===0||this.drawAlignmentPattern(t[e],t[o]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(t){const n=this.errorCorrectionLevel.formatBits<<3|t;let e=n;for(let s=0;s<10;s++)e=e<<1^(e>>>9)*1335;const o=(n<<10|e)^21522;for(let s=0;s<=5;s++)this.setFunctionModule(8,s,g(o,s));this.setFunctionModule(8,7,g(o,6)),this.setFunctionModule(8,8,g(o,7)),this.setFunctionModule(7,8,g(o,8));for(let s=9;s<15;s++)this.setFunctionModule(14-s,8,g(o,s));for(let s=0;s<8;s++)this.setFunctionModule(this.size-1-s,8,g(o,s));for(let s=8;s<15;s++)this.setFunctionModule(8,this.size-15+s,g(o,s));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let t=this.version;for(let e=0;e<12;e++)t=t<<1^(t>>>11)*7973;const n=this.version<<12|t;for(let e=0;e<18;e++){const o=g(n,e),s=this.size-11+e%3,c=Math.floor(e/3);this.setFunctionModule(s,c,o),this.setFunctionModule(c,s,o)}}drawFinderPattern(t,n){for(let e=-4;e<=4;e++)for(let o=-4;o<=4;o++){const s=Math.max(Math.abs(o),Math.abs(e)),c=t+o,r=n+e;c>=0&&c<this.size&&r>=0&&r<this.size&&this.setFunctionModule(c,r,s!==2&&s!==4)}}drawAlignmentPattern(t,n){for(let e=-2;e<=2;e++)for(let o=-2;o<=2;o++)this.setFunctionModule(t+o,n+e,Math.max(Math.abs(o),Math.abs(e))!==1)}setFunctionModule(t,n,e){this.modules[n][t]=e,this.isFunction[n][t]=!0}addEccAndInterleave(t){const n=this.version,e=this.errorCorrectionLevel;if(t.length!==i.getNumDataCodewords(n,e))throw new RangeError("Invalid argument");const o=i.NUM_ERROR_CORRECTION_BLOCKS[e.ordinal][n],s=i.ECC_CODEWORDS_PER_BLOCK[e.ordinal][n],c=Math.floor(i.getNumRawDataModules(n)/8),r=o-c%o,d=Math.floor(c/o),h=[],N=i.reedSolomonComputeDivisor(s);for(let f=0,p=0;f<o;f++){const E=t.slice(p,p+d-s+(f<r?0:1));p+=E.length;const C=i.reedSolomonComputeRemainder(E,N);f<r&&E.push(0),h.push(E.concat(C))}const R=[];for(let f=0;f<h[0].length;f++)h.forEach((p,E)=>{(f!==d-s||E>=r)&&R.push(p[f])});return R}drawCodewords(t){if(t.length!==Math.floor(i.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let n=0;for(let e=this.size-1;e>=1;e-=2){e===6&&(e=5);for(let o=0;o<this.size;o++)for(let s=0;s<2;s++){const c=e-s,d=(e+1&2)===0?this.size-1-o:o;!this.isFunction[d][c]&&n<t.length*8&&(this.modules[d][c]=g(t[n>>>3],7-(n&7)),n++)}}}applyMask(t){if(t<0||t>7)throw new RangeError("Mask value out of range");for(let n=0;n<this.size;n++)for(let e=0;e<this.size;e++){let o;switch(t){case 0:o=(e+n)%2===0;break;case 1:o=n%2===0;break;case 2:o=e%3===0;break;case 3:o=(e+n)%3===0;break;case 4:o=(Math.floor(e/3)+Math.floor(n/2))%2===0;break;case 5:o=e*n%2+e*n%3===0;break;case 6:o=(e*n%2+e*n%3)%2===0;break;case 7:o=((e+n)%2+e*n%3)%2===0;break;default:throw new Error("Unreachable")}!this.isFunction[n][e]&&o&&(this.modules[n][e]=!this.modules[n][e])}}getPenaltyScore(){let t=0;for(let s=0;s<this.size;s++){let c=!1,r=0;const d=[0,0,0,0,0,0,0];for(let h=0;h<this.size;h++)this.modules[s][h]===c?(r++,r===5?t+=i.PENALTY_N1:r>5&&t++):(this.finderPenaltyAddHistory(r,d),c||(t+=this.finderPenaltyCountPatterns(d)*i.PENALTY_N3),c=this.modules[s][h],r=1);t+=this.finderPenaltyTerminateAndCount(c,r,d)*i.PENALTY_N3}for(let s=0;s<this.size;s++){let c=!1,r=0;const d=[0,0,0,0,0,0,0];for(let h=0;h<this.size;h++)this.modules[h][s]===c?(r++,r===5?t+=i.PENALTY_N1:r>5&&t++):(this.finderPenaltyAddHistory(r,d),c||(t+=this.finderPenaltyCountPatterns(d)*i.PENALTY_N3),c=this.modules[h][s],r=1);t+=this.finderPenaltyTerminateAndCount(c,r,d)*i.PENALTY_N3}for(let s=0;s<this.size-1;s++)for(let c=0;c<this.size-1;c++){const r=this.modules[s][c];r===this.modules[s][c+1]&&r===this.modules[s+1][c]&&r===this.modules[s+1][c+1]&&(t+=i.PENALTY_N2)}let n=0;for(const s of this.modules)n=s.reduce((c,r)=>c+(r?1:0),n);const e=this.size*this.size,o=Math.ceil(Math.abs(n*20-e*10)/e)-1;return t+=o*i.PENALTY_N4,t}getAlignmentPatternPositions(){if(this.version===1)return[];{const t=Math.floor(this.version/7)+2,n=this.version===32?26:Math.ceil((this.version*4+4)/(t*2-2))*2,e=[6];for(let o=this.size-7;e.length<t;o-=n)e.splice(1,0,o);return e}}static getNumRawDataModules(t){if(t<i.MIN_VERSION||t>i.MAX_VERSION)throw new RangeError("Version number out of range");let n=(16*t+128)*t+64;if(t>=2){const e=Math.floor(t/7)+2;n-=(25*e-10)*e-55,t>=7&&(n-=36)}return n}static getNumDataCodewords(t,n){return Math.floor(i.getNumRawDataModules(t)/8)-i.ECC_CODEWORDS_PER_BLOCK[n.ordinal][t]*i.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][t]}static reedSolomonComputeDivisor(t){if(t<1||t>255)throw new RangeError("Degree out of range");const n=[];for(let o=0;o<t-1;o++)n.push(0);n.push(1);let e=1;for(let o=0;o<t;o++){for(let s=0;s<n.length;s++)n[s]=i.reedSolomonMultiply(n[s],e),s+1<n.length&&(n[s]^=n[s+1]);e=i.reedSolomonMultiply(e,2)}return n}static reedSolomonComputeRemainder(t,n){const e=n.map(o=>0);for(const o of t){const s=o^e.shift();e.push(0),n.forEach((c,r)=>e[r]^=i.reedSolomonMultiply(c,s))}return e}static reedSolomonMultiply(t,n){if(t>>>8||n>>>8)throw new RangeError("Byte out of range");let e=0;for(let o=7;o>=0;o--)e=e<<1^(e>>>7)*285,e^=(n>>>o&1)*t;return e}finderPenaltyCountPatterns(t){const n=t[1],e=n>0&&t[2]===n&&t[3]===n*3&&t[4]===n&&t[5]===n;return(e&&t[0]>=n*4&&t[6]>=n?1:0)+(e&&t[6]>=n*4&&t[0]>=n?1:0)}finderPenaltyTerminateAndCount(t,n,e){return t&&(this.finderPenaltyAddHistory(n,e),n=0),n+=this.size,this.finderPenaltyAddHistory(n,e),this.finderPenaltyCountPatterns(e)}finderPenaltyAddHistory(t,n){n[0]===0&&(t+=this.size),n.pop(),n.unshift(t)}}i.MIN_VERSION=1,i.MAX_VERSION=40,i.PENALTY_N1=3,i.PENALTY_N2=3,i.PENALTY_N3=40,i.PENALTY_N4=10,i.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],i.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],u.QrCode=i;function l(m,t,n){if(t<0||t>31||m>>>t)throw new RangeError("Value out of range");for(let e=t-1;e>=0;e--)n.push(m>>>e&1)}function g(m,t){return(m>>>t&1)!==0}class a{static makeBytes(t){const n=[];for(const e of t)l(e,8,n);return new a(a.Mode.BYTE,t.length,n)}static makeNumeric(t){if(!a.isNumeric(t))throw new RangeError("String contains non-numeric characters");const n=[];for(let e=0;e<t.length;){const o=Math.min(t.length-e,3);l(parseInt(t.substr(e,o),10),o*3+1,n),e+=o}return new a(a.Mode.NUMERIC,t.length,n)}static makeAlphanumeric(t){if(!a.isAlphanumeric(t))throw new RangeError("String contains unencodable characters in alphanumeric mode");const n=[];let e;for(e=0;e+2<=t.length;e+=2){let o=a.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e))*45;o+=a.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e+1)),l(o,11,n)}return e<t.length&&l(a.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e)),6,n),new a(a.Mode.ALPHANUMERIC,t.length,n)}static makeSegments(t){return t===""?[]:a.isNumeric(t)?[a.makeNumeric(t)]:a.isAlphanumeric(t)?[a.makeAlphanumeric(t)]:[a.makeBytes(a.toUtf8ByteArray(t))]}static makeEci(t){const n=[];if(t<0)throw new RangeError("ECI assignment value out of range");if(t<128)l(t,8,n);else if(t<16384)l(2,2,n),l(t,14,n);else if(t<1e6)l(6,3,n),l(t,21,n);else throw new RangeError("ECI assignment value out of range");return new a(a.Mode.ECI,0,n)}static isNumeric(t){return a.NUMERIC_REGEX.test(t)}static isAlphanumeric(t){return a.ALPHANUMERIC_REGEX.test(t)}constructor(t,n,e){if(this.mode=t,this.numChars=n,this.bitData=e,n<0)throw new RangeError("Invalid argument");this.bitData=e.slice()}getData(){return this.bitData.slice()}static getTotalBits(t,n){let e=0;for(const o of t){const s=o.mode.numCharCountBits(n);if(o.numChars>=1<<s)return 1/0;e+=4+s+o.bitData.length}return e}static toUtf8ByteArray(t){t=encodeURI(t);const n=[];for(let e=0;e<t.length;e++)t.charAt(e)!=="%"?n.push(t.charCodeAt(e)):(n.push(parseInt(t.substr(e+1,2),16)),e+=2);return n}}a.NUMERIC_REGEX=/^[0-9]*$/,a.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+./:-]*$/,a.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",u.QrSegment=a})(b||(b={}));(function(u){(function(i){class l{constructor(a,m){this.ordinal=a,this.formatBits=m}}l.LOW=new l(0,1),l.MEDIUM=new l(1,0),l.QUARTILE=new l(2,3),l.HIGH=new l(3,2),i.Ecc=l})(u.QrCode||(u.QrCode={}))})(b||(b={}));(function(u){(function(i){class l{constructor(a,m){this.modeBits=a,this.numBitsCharCount=m}numCharCountBits(a){return this.numBitsCharCount[Math.floor((a+7)/17)]}}l.NUMERIC=new l(1,[10,12,14]),l.ALPHANUMERIC=new l(2,[9,11,13]),l.BYTE=new l(4,[8,16,16]),l.KANJI=new l(8,[8,10,12]),l.ECI=new l(7,[0,0,0]),i.Mode=l})(u.QrSegment||(u.QrSegment={}))})(b||(b={}));const v=b,Nt={L:v.QrCode.Ecc.LOW,M:v.QrCode.Ecc.MEDIUM,Q:v.QrCode.Ecc.QUARTILE,H:v.QrCode.Ecc.HIGH},bt=Object.assign(Object.assign({},I.props),{value:String,color:{type:String,default:"#000"},backgroundColor:{type:String,default:"#FFF"},iconSrc:String,iconSize:{type:Number,default:40},iconBackgroundColor:{type:String,default:"#FFF"},iconBorderRadius:{type:Number,default:4},size:{type:Number,default:100},padding:{type:[Number,String],default:12},errorCorrectionLevel:{type:String,default:"M"}}),L=2,yt=W({name:"QrCode",props:bt,setup(u){const{mergedClsPrefixRef:i,inlineThemeDisabled:l}=j(u),g=I("QrCode","-qr-code",wt,Ct,u,i),a=O(()=>({"--n-border-radius":g.value.self.borderRadius})),m=l?st("qr-code",void 0,a,u):void 0,t=k(),n=O(()=>{var o;const s=Nt[u.errorCorrectionLevel];return v.QrCode.encodeText((o=u.value)!==null&&o!==void 0?o:"-",s)});G(()=>{const o=k(0);let s=null;V(()=>{o.value,e(n.value,u.size,u.color,u.backgroundColor,s?{icon:s,iconBorderRadius:u.iconBorderRadius,iconSize:u.iconSize,iconBackgroundColor:u.iconBackgroundColor}:null)}),V(()=>{const{iconSrc:c}=u;if(c){let r=!1;const d=new Image;return d.src=c,d.onload=()=>{r||(s=d,o.value++)},()=>{r=!0}}})});function e(o,s,c,r,d){const h=t.value;if(!h)return;const N=s*L,R=o.size,f=N/R;h.width=N,h.height=N;const p=h.getContext("2d");if(p){p.clearRect(0,0,h.width,h.height);for(let E=0;E<o.size;E++)for(let C=0;C<o.size;C++){p.fillStyle=o.getModule(C,E)?c:r;const P=Math.floor(C*f),z=Math.ceil((C+1)*f),M=Math.floor(E*f),_=Math.ceil((E+1)*f);p.fillRect(P,M,z-P,_-M)}if(d){const{icon:E,iconBackgroundColor:C,iconBorderRadius:P,iconSize:z}=d,M=z*L,_=(h.width-M)/2,T=(h.height-M)/2;p.fillStyle=C,p.beginPath(),p.roundRect(_,T,M,M,P*L),p.fill();const x=E.width/E.height,D=x>=1?M:M*x,U=x<=1?M:M/x,K=_+(M-D)/2,q=T+(M-U)/2;p.drawImage(E,K,q,D,U)}}}return{canvasRef:t,mergedClsPrefix:i,cssVars:l?void 0:a,themeClass:m==null?void 0:m.themeClass}},render(){const{mergedClsPrefix:u,backgroundColor:i,padding:l,cssVars:g,themeClass:a,size:m}=this;return S("div",{class:["".concat(u,"-qr-code"),a],style:Object.assign({padding:typeof l=="number"?"".concat(l,"px"):l,backgroundColor:i},g)},S("canvas",{ref:"canvasRef",style:{width:"".concat(m,"px"),height:"".concat(m,"px")}}))}}),At={class:"md-blog m-auto text-left"},vt=w("p",null,"从 19 年第一次接触到 Hexo 之后，我就非常喜欢折腾博客。",-1),Pt=w("p",null,"期间尝试了 Hexo、WordPress、Hogo 等框架，但并没有深入学习，仅仅会改个主题、加点五毛钱特效。",-1),_t=w("p",null,"所以，我经常会感到博客的客制化程度不尽人意，但又没有办法。",-1),xt=w("p",null,"我一直觉得前端很有趣，但一转眼四年过去了，我却一直没有系统地学习前端。",-1),Bt=w("p",null,"但好在这几年来打比赛、折腾博客、写爬虫之类的经历让我的前端基础不算差，学习 Vue 需要的前置知识点我差不多都掌握了。",-1),It=w("p",null,"正巧，大四最不缺的就是闲时间了，遂决定把留了四年的前端学习坑补一补，用 Vue 自建了这么一个博客出来。",-1),zt=w("p",null,[F("这个项目参考了 "),w("a",{href:"https://github.com/liuly0322/Q-Blog","data-clickable":""},"Q-Blog"),F("，我觉得它很适合初学者去模仿学习。")],-1),Lt=w("p",null,"费了老大劲，把 Markdown 内容都改成动态加载的了。完全舍弃 v-html 的好处是可以随意在 Markdown 文件中使用 Vue 组件了",-1),Ot=w("p",null,"比如：",-1),St={key:0},kt=w("p",null,"同时，这要求 Markdown 文件不能在本地解析为 HTML 后再导入 Vue 组件中，而是使用动态 import 将 Markdown 原文作为 Vue 组件导入。",-1),Ft=w("p",null,"因此，我的所有博客的原文都是开源的，你可以直接在根目录下的 dynamic 文件夹中找到对应的 Markdown 文件。",-1),Ut={__name:"VueBlog",setup(u,{expose:i}){i({frontmatter:{}});const g=k("在虚构的故事当中寻求真实感的人脑袋一定有问题"),{isMobile:a}=at();return G(()=>it(".n-input, input")),(m,t)=>{const n=ut,e=yt,o=lt,s=Et,c=ct;return Y(),$("div",At,[vt,Pt,_t,xt,Bt,It,zt,w("p",null,[w("em",null,[y(n,{"title-placement":"right",style:{"font-size":"0.8rem"}},{default:B(()=>[F("新建文件夹于 2023 年 11 月 23 日")]),_:1})])]),Lt,Ot,y(c,{size:"small",style:X("".concat(A(a)?"":"min-width: 500px;"," width: 60%; margin: auto")),hoverable:""},{default:B(()=>[y(s,{vertical:A(a),align:A(a)?"center":"undefined"},{default:B(()=>[y(e,{value:g.value,style:X(A(a)?"":"max-width:25%")},null,8,["value","style"]),y(s,{vertical:"",style:{width:"65%"}},{default:B(()=>[A(a)?rt("",!0):(Y(),$("h2",St,"二维码生成")),y(o,{value:g.value,"onUpdate:value":t[0]||(t[0]=r=>g.value=r),maxlength:30,type:A(a)?"textarea":"text"},null,8,["value","type"])]),_:1})]),_:1},8,["vertical","align"])]),_:1},8,["style"]),kt,Ft])}}};export{Ut as default};