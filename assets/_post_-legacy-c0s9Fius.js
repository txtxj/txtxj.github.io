!function(){function t(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){c=!0,a=t},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw a}}}}function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}System.register(["./index-legacy-LCXMVAvl.js","./_...notFound_.vue_vue_type_script_setup_true_lang-legacy-1MEf93uq.js","./useToc-legacy-8IkOZ6OO.js"],(function(n,e){"use strict";var r,o,i,a,l,c,s,u,d,f,p,m,g,v,h,y,b,S,x,j,w,_,C,k,E,z,A,T,I,R,O,G,M,P,U,B,N,W,F,L,V,q,D,H;return{setters:[function(t){r=t.al,o=t.c,i=t.f,a=t.e,l=t.d,c=t.u,s=t.m,u=t.l,d=t.n,f=t.am,p=t.h,m=t.an,g=t.ao,v=t.S,h=t.j,y=t.ap,b=t.o,S=t.aa,x=t.P,j=t.Q,w=t.T,_=t.M,C=t.R,k=t.$,E=t.a7,z=t.a3,A=t.af,T=t.a0,I=t.Y,R=t.X,O=t.aq,G=t.q,M=t.a9,P=t.s,U=t.ar,B=t.r,N=t.v,W=t.as,F=t._,L=t.W,V=t.at,q=t.au},function(t){D=t._},function(t){H=t.u}],execute:function(){var $=document.createElement("style");$.textContent=".n-image{display:inherit!important;cursor:inherit!important}.n-image-preview-toolbar .n-base-icon{box-sizing:content-box;cursor:inherit!important}.n-image-preview{cursor:inherit!important}\n",document.head.appendChild($);var Q=!1;var X={name:"Thing",common:o,self:function(t){var n=t.textColor1,e=t.textColor2,r=t.fontWeightStrong;return{fontSize:t.fontSize,titleTextColor:n,textColor:e,titleFontWeight:r}}},Y={name:"Skeleton",common:o,self:function(t){var n=t.heightSmall,e=t.heightMedium,r=t.heightLarge;return{color:"#eee",colorEnd:"#ddd",borderRadius:t.borderRadius,heightSmall:n,heightMedium:e,heightLarge:r}}},J=i([a("skeleton","\n height: 1em;\n width: 100%;\n transition:\n --n-color-start .3s var(--n-bezier),\n --n-color-end .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);\n background-color: var(--n-color-start);\n "),i("@keyframes skeleton-loading","\n 0% {\n background: var(--n-color-start);\n }\n 40% {\n background: var(--n-color-end);\n }\n 80% {\n background: var(--n-color-start);\n }\n 100% {\n background: var(--n-color-start);\n }\n ")]),K=Object.assign(Object.assign({},s.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}}),Z=l({name:"Skeleton",inheritAttrs:!1,props:K,setup:function(t){!function(){if(r&&window.CSS&&!Q&&(Q=!0,"registerProperty"in(null===window||void 0===window?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch(t){}}();var n=c(t).mergedClsPrefixRef,e=s("Skeleton","-skeleton",J,Y,t,n);return{mergedClsPrefix:n,style:u((function(){var n,r,o,i=e.value,a=i.common.cubicBezierEaseInOut,l=i.self,c=l.color,s=l.colorEnd,u=l.borderRadius,p=t.circle,m=t.sharp,g=t.round,v=t.width,h=t.height,y=t.size,b=t.text,S=t.animated;void 0!==y&&(o=l[d("height",y)]);var x=p?null!==(n=null!=v?v:h)&&void 0!==n?n:o:v,j=null!==(r=p&&null!=v?v:h)&&void 0!==r?r:o;return{display:b?"inline-block":"",verticalAlign:b?"-0.125em":"",borderRadius:p?"50%":g?"4096px":m?"":u,width:"number"==typeof x?f(x):x,height:"number"==typeof j?f(j):j,animation:S?"":"none","--n-bezier":a,"--n-color-start":c,"--n-color-end":s}}))}},render:function(){var t=this.repeat,n=this.style,e=this.mergedClsPrefix,r=this.$attrs,o=p("div",m({class:"".concat(e,"-skeleton"),style:n},r));return t>1?p(v,null,g(t,null).map((function(t){return[o,"\n"]}))):o}}),tt=a("thing","\n display: flex;\n transition: color .3s var(--n-bezier);\n font-size: var(--n-font-size);\n color: var(--n-text-color);\n",[a("thing-avatar","\n margin-right: 12px;\n margin-top: 2px;\n "),a("thing-avatar-header-wrapper","\n display: flex;\n flex-wrap: nowrap;\n ",[a("thing-header-wrapper","\n flex: 1;\n ")]),a("thing-main","\n flex-grow: 1;\n ",[a("thing-header","\n display: flex;\n margin-bottom: 4px;\n justify-content: space-between;\n align-items: center;\n ",[h("title","\n font-size: 16px;\n font-weight: var(--n-title-font-weight);\n transition: color .3s var(--n-bezier);\n color: var(--n-title-text-color);\n ")]),h("description",[i("&:not(:last-child)","\n margin-bottom: 4px;\n ")]),h("content",[i("&:not(:first-child)","\n margin-top: 12px;\n ")]),h("footer",[i("&:not(:first-child)","\n margin-top: 12px;\n ")]),h("action",[i("&:not(:first-child)","\n margin-top: 12px;\n ")])])]),nt=Object.assign(Object.assign({},s.props),{title:String,titleExtra:String,description:String,descriptionClass:String,descriptionStyle:[String,Object],content:String,contentClass:String,contentStyle:[String,Object],contentIndented:Boolean}),et=l({name:"Thing",props:nt,setup:function(t,n){var e=n.slots,r=c(t),o=r.mergedClsPrefixRef,i=r.inlineThemeDisabled,a=r.mergedRtlRef,l=s("Thing","-thing",tt,X,t,o),d=y("Thing",a,o),f=u((function(){var t=l.value,n=t.self,e=n.titleTextColor,r=n.textColor,o=n.titleFontWeight,i=n.fontSize;return{"--n-bezier":t.common.cubicBezierEaseInOut,"--n-font-size":i,"--n-text-color":r,"--n-title-font-weight":o,"--n-title-text-color":e}})),m=i?b("thing",void 0,f,t):void 0;return function(){var n,r=o.value,a=!!d&&d.value;return null===(n=null==m?void 0:m.onRender)||void 0===n||n.call(m),p("div",{class:["".concat(r,"-thing"),null==m?void 0:m.themeClass,a&&"".concat(r,"-thing--rtl")],style:i?void 0:f.value},e.avatar&&t.contentIndented?p("div",{class:"".concat(r,"-thing-avatar")},e.avatar()):null,p("div",{class:"".concat(r,"-thing-main")},!t.contentIndented&&(e.header||t.title||e["header-extra"]||t.titleExtra||e.avatar)?p("div",{class:"".concat(r,"-thing-avatar-header-wrapper")},e.avatar?p("div",{class:"".concat(r,"-thing-avatar")},e.avatar()):null,e.header||t.title||e["header-extra"]||t.titleExtra?p("div",{class:"".concat(r,"-thing-header-wrapper")},p("div",{class:"".concat(r,"-thing-header")},e.header||t.title?p("div",{class:"".concat(r,"-thing-header__title")},e.header?e.header():t.title):null,e["header-extra"]||t.titleExtra?p("div",{class:"".concat(r,"-thing-header__extra")},e["header-extra"]?e["header-extra"]():t.titleExtra):null),e.description||t.description?p("div",{class:["".concat(r,"-thing-main__description"),t.descriptionClass],style:t.descriptionStyle},e.description?e.description():t.description):null):null):p(v,null,e.header||t.title||e["header-extra"]||t.titleExtra?p("div",{class:"".concat(r,"-thing-header")},e.header||t.title?p("div",{class:"".concat(r,"-thing-header__title")},e.header?e.header():t.title):null,e["header-extra"]||t.titleExtra?p("div",{class:"".concat(r,"-thing-header__extra")},e["header-extra"]?e["header-extra"]():t.titleExtra):null):null,e.description||t.description?p("div",{class:["".concat(r,"-thing-main__description"),t.descriptionClass],style:t.descriptionStyle},e.description?e.description():t.description):null),e.default||t.content?p("div",{class:["".concat(r,"-thing-main__content"),t.contentClass],style:t.contentStyle},e.default?e.default():t.content):null,e.footer?p("div",{class:"".concat(r,"-thing-main__footer")},e.footer()):null,e.action?p("div",{class:"".concat(r,"-thing-main__action")},e.action()):null))}}}),rt={class:"overflow-hidden my-12 p-4 border-t border-b"},ot={key:0,class:"float-left my-2"},it={key:1,class:"float-right my-2"},at=l({__name:"PostFooter",props:{post:{}},setup:function(t){var n=t,e=A(),r=u((function(){return e.value.findIndex((function(t){return t.url===n.post}))}));return function(t,n){var o=S("router-link");return x(),j("div",rt,[w(r)>0?(x(),j("div",ot,[_(o,{to:"/posts/".concat(encodeURIComponent(w(e)[w(r)-1].url)),"data-clickable":""},{default:C((function(){return[E(" 上一篇："+k(w(e)[w(r)-1].title),1)]})),_:1},8,["to"])])):z("",!0),w(r)+1<w(e).length?(x(),j("div",it,[_(o,{to:"/posts/".concat(encodeURIComponent(w(e)[w(r)+1].url)),"data-clickable":""},{default:C((function(){return[E(" 下一篇："+k(w(e)[w(r)+1].title),1)]})),_:1},8,["to"])])):z("",!0)])}}}),lt={class:"md-blog m-auto text-left"},ct={class:"border-b pb-4"},st=l({__name:"PostHeader",props:{post:{}},setup:function(t){return function(t,n){var e=S("router-link"),r=O;return x(),j("div",lt,[T("h1",null,k(t.post.title),1),T("p",null,k(t.post.date),1),T("div",ct,[(x(!0),j(v,null,I(t.post.tags,(function(t){return x(),R(r,{key:t,class:"mr-2 mb-4 no-cursor",type:"info",round:""},{default:C((function(){return[_(e,{to:"/tags/".concat(encodeURIComponent(t)),class:"!text-inherit","data-clickable":""},{default:C((function(){return[E(k(t),1)]})),_:2},1032,["to"])]})),_:2},1024)})),128))])])}}}),ut={key:1,class:"md-blog m-auto text-left"};n("default",l({__name:"[post]",props:{post:{}},setup:function(n){var r=n,o=A(),i=u((function(){var t;return null!==(t=o.value.find((function(t){return r.post.includes(t.url)})))&&void 0!==t?t:{url:"",title:"",tags:[],date:"",toc:!1}}));G((function(){for(var t=0,n=Array.from(document.querySelectorAll(".n-scrollbar-rail"));t<n.length;t++){n[t].addEventListener("mouseenter",(function(t){M(".n-scrollbar-rail__scrollbar",t.target)}))}}));var a,l=H(),c=l.setToc,s=l.enableToc;function d(){U.value=i.value.title,s.value=!!i.value.toc,s.value&&c(Array.from(document.querySelectorAll(".md-blog h2,h3,h4")));var n,e=t(M(".n-image > img"));try{for(e.s();!(n=e.n()).done;){n.value.addEventListener("click",(function(){return M(".n-image-preview-toolbar .n-base-icon")}))}}catch(r){e.e(r)}finally{e.f()}}P((function(){s.value=!1,U.value=""}));var f=B(!1),p=Object.assign({"/src/posts/CSharpClass.md":function(){return q((function(){return e.import("./CSharpClass-legacy--m1t0e99.js")}),void 0)},"/src/posts/Clash4Linux.md":function(){return q((function(){return e.import("./Clash4Linux-legacy-0sWQlHYc.js")}),void 0)},"/src/posts/ClothSimulation.md":function(){return q((function(){return e.import("./ClothSimulation-legacy-pbDBf9wx.js")}),void 0)},"/src/posts/GAMESNote01.md":function(){return q((function(){return e.import("./GAMESNote01-legacy-LeTssx7P.js")}),void 0)},"/src/posts/GAMESNote02.md":function(){return q((function(){return e.import("./GAMESNote02-legacy-WCbNin-F.js")}),void 0)},"/src/posts/GAMESNote03.md":function(){return q((function(){return e.import("./GAMESNote03-legacy-ibGJylqO.js")}),void 0)},"/src/posts/HackerGame2022.md":function(){return q((function(){return e.import("./HackerGame2022-legacy-IBc3a4Qu.js")}),void 0)},"/src/posts/HackerGame2023.md":function(){return q((function(){return e.import("./HackerGame2023-legacy-XTjjpdkq.js")}),void 0)},"/src/posts/Interview.md":function(){return q((function(){return e.import("./Interview-legacy-GYjMC0hr.js")}),void 0)},"/src/posts/ObjectToWorldNormal.md":function(){return q((function(){return e.import("./ObjectToWorldNormal-legacy-2vMUaGrO.js")}),void 0)},"/src/posts/RayTracingGem.md":function(){return q((function(){return e.import("./RayTracingGem-legacy-8IVvU560.js")}),void 0)},"/src/posts/SSAOUnity.md":function(){return q((function(){return e.import("./SSAOUnity-legacy-5VQD0E8R.js")}),void 0)},"/src/posts/SolutionCF1452D.md":function(){return q((function(){return e.import("./SolutionCF1452D-legacy-PaTluyJA.js")}),void 0)},"/src/posts/SolutionP5020.md":function(){return q((function(){return e.import("./SolutionP5020-legacy-wlr22qJt.js")}),void 0)},"/src/posts/SolutionPrize.md":function(){return q((function(){return e.import("./SolutionPrize-legacy-PM3H8MVb.js")}),void 0)},"/src/posts/SublimeCpp.md":function(){return q((function(){return e.import("./SublimeCpp-legacy-upK2pgB_.js")}),void 0)},"/src/posts/SublimeMarkdown.md":function(){return q((function(){return e.import("./SublimeMarkdown-legacy-r_FiichP.js")}),void 0)},"/src/posts/TencentIntern.md":function(){return q((function(){return e.import("./TencentIntern-legacy-XIK7P3PW.js")}),void 0)},"/src/posts/TreeDebugger.md":function(){return q((function(){return e.import("./TreeDebugger-legacy-Ceawy_D8.js")}),void 0)},"/src/posts/UnityEditorWindowBug.md":function(){return q((function(){return e.import("./UnityEditorWindowBug-legacy-Y3mLi03v.js")}),void 0)},"/src/posts/UnitySelf01.md":function(){return q((function(){return e.import("./UnitySelf01-legacy-LGNZHFbH.js")}),void 0)},"/src/posts/UnitySelf02.md":function(){return q((function(){return e.import("./UnitySelf02-legacy-01ON_LqC.js")}),void 0)},"/src/posts/UnitySelf03.md":function(){return q((function(){return e.import("./UnitySelf03-legacy-mFPI4w8E.js")}),void 0)},"/src/posts/VEGExtension.md":function(){return q((function(){return e.import("./VEGExtension-legacy-mJzeMN-l.js")}),void 0)},"/src/posts/VueBlog.md":function(){return q((function(){return e.import("./VueBlog-legacy-T0NlG40E.js")}),void 0)}});function m(t,n){return t+Math.round(Math.random()*(n-t))}N((function(){return r.post}),(function(){f.value=void 0===p["/src/posts/".concat(r.post,".md")],f.value||(a=W(p["/src/posts/".concat(r.post,".md")]))}),{immediate:!0});var g=B([]);return G((function(){g.value=[];for(var t=m(4,8),n=0;n<t;n++)g.value.push({repeat:m(1,3),width:"width: "+m(20,80)+"%"})})),function(t,n){var e=st,r=Z,o=et,l=at;return x(),j("div",null,[w(f)?(x(),R(D,{key:0})):(x(),j("div",ut,[_(e,{post:w(i)},null,8,["post"]),(x(),R(V,{onResolve:d},{fallback:C((function(){return[(x(!0),j(v,null,I(w(g),(function(t){return x(),R(o,null,{default:C((function(){return[_(r,{text:"",repeat:t.repeat},null,8,["repeat"]),_(r,{text:"",style:F(t.width)},null,8,["style"])]})),_:2},1024)})),256))]})),default:C((function(){return[(x(),R(L(w(a))))]})),_:1})),_(l,{post:w(i).url},null,8,["post"])]))])}}}))}}}))}();
