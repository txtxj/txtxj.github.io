!function(){function n(n,r){var e="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=function(n,r){if(!n)return;if("string"==typeof n)return t(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return t(n,r)}(n))||r&&n&&"number"==typeof n.length){e&&(n=e);var i=0,o=function(){};return{s:o,n:function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,c=!0,a=!1;return{s:function(){e=e.call(n)},n:function(){var n=e.next();return c=n.done,n},e:function(n){a=!0,u=n},f:function(){try{c||null==e.return||e.return()}finally{if(a)throw u}}}}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}System.register(["./index-legacy-gF2y_0wv.js","./useToc-legacy-pF9Iaz0j.js"],(function(t,r){"use strict";var e,i,o,u,c,a,l,d,m,f,s,p,y,v,b,g,S,j,h,A,C,w,k,x,E,U,G,_;return{setters:[function(n){e=n.d,i=n.l,o=n.aa,u=n.J,c=n.K,a=n.P,l=n.W,d=n.M,m=n.R,f=n.a3,s=n.a0,p=n.af,y=n.S,v=n.O,b=n.U,g=n.L,S=n.ax,j=n.ay,h=n.q,A=n.a9,C=n.v,w=n.w,k=n.az,x=n.a4,E=n.ac,U=n.aA,G=n.aB},function(n){_=n.u}],execute:function(){var T=document.createElement("style");T.textContent=".n-image{display:inherit!important;cursor:inherit!important}.n-image-preview-toolbar .n-base-icon{box-sizing:content-box;cursor:inherit!important}.n-image-preview{cursor:inherit!important}\n",document.head.appendChild(T);var I={class:"overflow-hidden my-12 p-4 border-t border-b"},M={key:0,class:"float-left my-2"},N={key:1,class:"float-right my-2"},O=e({__name:"PostFooter",props:{post:{}},setup:function(n){var t=n,r=p(),e=i((function(){return r.value.findIndex((function(n){return n.url===t.post}))}));return function(n,t){var i=o("router-link");return u(),c("div",I,[a(e)>0?(u(),c("div",M,[l(i,{to:"/posts/".concat(encodeURIComponent(a(r)[a(e)-1].url)),"data-clickable":""},{default:d((function(){return[f(" 上一篇："+m(a(r)[a(e)-1].title),1)]})),_:1},8,["to"])])):s("",!0),a(e)+1<a(r).length?(u(),c("div",N,[l(i,{to:"/posts/".concat(encodeURIComponent(a(r)[a(e)+1].url)),"data-clickable":""},{default:d((function(){return[f(" 下一篇："+m(a(r)[a(e)+1].title),1)]})),_:1},8,["to"])])):s("",!0)])}}}),P={class:"md-blog m-auto text-left"},R={class:"border-b pb-4"},z=e({__name:"PostHeader",props:{post:{}},setup:function(n){return function(n,t){var r=o("router-link"),e=S;return u(),c("div",P,[y("h1",null,m(n.post.title),1),y("p",null,m(n.post.date),1),y("div",R,[(u(!0),c(v,null,b(n.post.tags,(function(n){return u(),g(e,{key:n,class:"mr-2 mb-4 no-cursor",type:"info",round:""},{default:d((function(){return[l(r,{to:"/tags/".concat(encodeURIComponent(n)),class:"!text-inherit","data-clickable":""},{default:d((function(){return[f(m(n),1)]})),_:2},1032,["to"])]})),_:2},1024)})),128))])])}}}),H={class:"md-blog m-auto text-left"};t("default",e({__name:"[post]",props:{post:{}},setup:function(t){var e=t,o=p(),m=i((function(){var n;return null!==(n=o.value.find((function(n){return e.post.includes(n.url)})))&&void 0!==n?n:{url:"",title:"",tags:[],date:"",toc:!1}})),f=i((function(){return"".concat(m.value.title," | Citrineのblog")}));j(f),h((function(){for(var n=0,t=Array.from(document.querySelectorAll(".n-scrollbar-rail"));n<t.length;n++){t[n].addEventListener("mouseenter",(function(n){A(".n-scrollbar-rail__scrollbar",n.target)}))}})),C((function(){document&&(document.title="Citrineのblog"),b&&(b.value=!1)}));var s,y=_(),v=y.setToc,b=y.enableToc;function S(){b.value=!!m.value.toc,b.value&&v(Array.from(document.querySelectorAll(".md-blog h2,h3,h4")));var t,r=n(A(".n-image > img"));try{for(r.s();!(t=r.n()).done;){t.value.addEventListener("click",(function(){return A(".n-image-preview-toolbar .n-base-icon")}))}}catch(e){r.e(e)}finally{r.f()}}var T=Object.assign({"/public/dynamic/CSharpClass.md":function(){return G((function(){return r.import("./CSharpClass-legacy-DYM_bEqQ.js")}),void 0)},"/public/dynamic/Clash4Linux.md":function(){return G((function(){return r.import("./Clash4Linux-legacy-5jdVe1Oe.js")}),void 0)},"/public/dynamic/ClothSimulation.md":function(){return G((function(){return r.import("./ClothSimulation-legacy-tUe6B5hQ.js")}),void 0)},"/public/dynamic/GAMESNote01.md":function(){return G((function(){return r.import("./GAMESNote01-legacy--niZZ2TR.js")}),void 0)},"/public/dynamic/GAMESNote02.md":function(){return G((function(){return r.import("./GAMESNote02-legacy-cwz2-g1I.js")}),void 0)},"/public/dynamic/GAMESNote03.md":function(){return G((function(){return r.import("./GAMESNote03-legacy-GZ0IPVqt.js")}),void 0)},"/public/dynamic/HackerGame2022.md":function(){return G((function(){return r.import("./HackerGame2022-legacy-gFdM_PGA.js")}),void 0)},"/public/dynamic/HackerGame2023.md":function(){return G((function(){return r.import("./HackerGame2023-legacy-c6fRboWT.js")}),void 0)},"/public/dynamic/Interview.md":function(){return G((function(){return r.import("./Interview-legacy-ainqf4Za.js")}),void 0)},"/public/dynamic/ObjectToWorldNormal.md":function(){return G((function(){return r.import("./ObjectToWorldNormal-legacy-JjZY-sBK.js")}),void 0)},"/public/dynamic/RayTracingGem.md":function(){return G((function(){return r.import("./RayTracingGem-legacy-EwLYdz5c.js")}),void 0)},"/public/dynamic/SSAOUnity.md":function(){return G((function(){return r.import("./SSAOUnity-legacy-6bKmi3UI.js")}),void 0)},"/public/dynamic/SolutionCF1452D.md":function(){return G((function(){return r.import("./SolutionCF1452D-legacy-V8TbhO5c.js")}),void 0)},"/public/dynamic/SolutionP5020.md":function(){return G((function(){return r.import("./SolutionP5020-legacy-SbkNFxVi.js")}),void 0)},"/public/dynamic/SolutionPrize.md":function(){return G((function(){return r.import("./SolutionPrize-legacy-9VMTVPFL.js")}),void 0)},"/public/dynamic/SublimeCpp.md":function(){return G((function(){return r.import("./SublimeCpp-legacy-FOF4aVnn.js")}),void 0)},"/public/dynamic/SublimeMarkdown.md":function(){return G((function(){return r.import("./SublimeMarkdown-legacy--60UZrOC.js")}),void 0)},"/public/dynamic/TencentIntern.md":function(){return G((function(){return r.import("./TencentIntern-legacy-kaDQq-_r.js")}),void 0)},"/public/dynamic/TreeDebugger.md":function(){return G((function(){return r.import("./TreeDebugger-legacy-oBVzJJB0.js")}),void 0)},"/public/dynamic/UnityEditorWindowBug.md":function(){return G((function(){return r.import("./UnityEditorWindowBug-legacy-hgwnPfMT.js")}),void 0)},"/public/dynamic/UnitySelf01.md":function(){return G((function(){return r.import("./UnitySelf01-legacy-UdTO8buH.js")}),void 0)},"/public/dynamic/UnitySelf02.md":function(){return G((function(){return r.import("./UnitySelf02-legacy-1CilrcF2.js")}),void 0)},"/public/dynamic/UnitySelf03.md":function(){return G((function(){return r.import("./UnitySelf03-legacy-KP1p0tY9.js")}),void 0)},"/public/dynamic/VEGExtension.md":function(){return G((function(){return r.import("./VEGExtension-legacy--fORETQS.js")}),void 0)}});return w((function(){return e.post}),(function(){void 0!==T["/public/dynamic/".concat(e.post,".md")]?s=k(T["/public/dynamic/".concat(e.post,".md")]):x().replace("/notFound")}),{immediate:!0}),function(n,t){var r=z,e=O;return u(),c("div",H,[l(r,{post:a(m)},null,8,["post"]),(u(),g(U,{onResolve:S},{default:d((function(){return[(u(),g(E(a(s))))]})),_:1})),l(e,{post:a(m).url},null,8,["post"])])}}}))}}}))}();
