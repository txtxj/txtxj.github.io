import{al as Y,c as G,f as S,e as b,d as k,u as W,m as O,l as w,n as Z,av as j,h as l,aw as X,ax as ee,Q as L,j as T,aq as te,o as ne,a6 as q,L as h,T as E,P as s,J as y,O as x,Y as C,a3 as B,U,ab as K,Z as D,S as J,M as I,ay as ie,q as M,a5 as z,s as re,az as H,v as oe,aA as ae,K as le,r as ce,W as de,R as se,aB as ue,aC as r}from"./index-ukExRzut.js";import{u as _e}from"./useToc-hCV_Nu8Q.js";let F=!1;function me(){if(Y&&window.CSS&&!F&&(F=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch(t){}}const he=t=>{const{textColor1:e,textColor2:o,fontWeightStrong:n,fontSize:c}=t;return{fontSize:c,titleTextColor:e,textColor:o,titleFontWeight:n}},pe={name:"Thing",common:G,self:he},ge=pe,ve=t=>{const{heightSmall:e,heightMedium:o,heightLarge:n,borderRadius:c}=t;return{color:"#eee",colorEnd:"#ddd",borderRadius:c,heightSmall:e,heightMedium:o,heightLarge:n}},fe={name:"Skeleton",common:G,self:ve},be=S([b("skeleton","\n height: 1em;\n width: 100%;\n transition: background-color .3s var(--n-bezier);\n transition:\n --n-color-start .3s var(--n-bezier),\n --n-color-end .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);\n background-color: var(--n-color-start);\n "),S("@keyframes skeleton-loading","\n 0% {\n background: var(--n-color-start);\n }\n 40% {\n background: var(--n-color-end);\n }\n 80% {\n background: var(--n-color-start);\n }\n 100% {\n background: var(--n-color-start);\n }\n ")]),ye=Object.assign(Object.assign({},O.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}}),Ee=k({name:"Skeleton",inheritAttrs:!1,props:ye,setup(t){me();const{mergedClsPrefixRef:e}=W(t),o=O("Skeleton","-skeleton",be,fe,t,e);return{mergedClsPrefix:e,style:w(()=>{var n,c;const u=o.value,{common:{cubicBezierEaseInOut:p}}=u,v=u.self,{color:_,colorEnd:m,borderRadius:i}=v;let a;const{circle:d,sharp:f,round:A,width:g,height:R,size:P,text:N,animated:Q}=t;P!==void 0&&(a=v[Z("height",P)]);const V=d?(n=g!=null?g:R)!==null&&n!==void 0?n:a:g,$=(c=d&&g!=null?g:R)!==null&&c!==void 0?c:a;return{display:N?"inline-block":"",verticalAlign:N?"-0.125em":"",borderRadius:d?"50%":A?"4096px":f?"":i,width:typeof V=="number"?j(V):V,height:typeof $=="number"?j($):$,animation:Q?"":"none","--n-bezier":p,"--n-color-start":_,"--n-color-end":m}})}},render(){const{repeat:t,style:e,mergedClsPrefix:o,$attrs:n}=this,c=l("div",X({class:"".concat(o,"-skeleton"),style:e},n));return t>1?l(L,null,ee(t,null).map(u=>[c,"\n"])):c}}),xe=b("thing","\n display: flex;\n transition: color .3s var(--n-bezier);\n font-size: var(--n-font-size);\n color: var(--n-text-color);\n",[b("thing-avatar","\n margin-right: 12px;\n margin-top: 2px;\n "),b("thing-avatar-header-wrapper","\n display: flex;\n flex-wrap: nowrap;\n ",[b("thing-header-wrapper","\n flex: 1;\n ")]),b("thing-main","\n flex-grow: 1;\n ",[b("thing-header","\n display: flex;\n margin-bottom: 4px;\n justify-content: space-between;\n align-items: center;\n ",[T("title","\n font-size: 16px;\n font-weight: var(--n-title-font-weight);\n transition: color .3s var(--n-bezier);\n color: var(--n-title-text-color);\n ")]),T("description",[S("&:not(:last-child)","\n margin-bottom: 4px;\n ")]),T("content",[S("&:not(:first-child)","\n margin-top: 12px;\n ")]),T("footer",[S("&:not(:first-child)","\n margin-top: 12px;\n ")]),T("action",[S("&:not(:first-child)","\n margin-top: 12px;\n ")])])]),Se=Object.assign(Object.assign({},O.props),{title:String,titleExtra:String,description:String,descriptionClass:String,descriptionStyle:[String,Object],content:String,contentClass:String,contentStyle:[String,Object],contentIndented:Boolean}),Re=k({name:"Thing",props:Se,setup(t,{slots:e}){const{mergedClsPrefixRef:o,inlineThemeDisabled:n,mergedRtlRef:c}=W(t),u=O("Thing","-thing",xe,ge,t,o),p=te("Thing",c,o),v=w(()=>{const{self:{titleTextColor:m,textColor:i,titleFontWeight:a,fontSize:d},common:{cubicBezierEaseInOut:f}}=u.value;return{"--n-bezier":f,"--n-font-size":d,"--n-text-color":i,"--n-title-font-weight":a,"--n-title-text-color":m}}),_=n?ne("thing",void 0,v,t):void 0;return()=>{var m;const{value:i}=o,a=p?p.value:!1;return(m=_==null?void 0:_.onRender)===null||m===void 0||m.call(_),l("div",{class:["".concat(i,"-thing"),_==null?void 0:_.themeClass,a&&"".concat(i,"-thing--rtl")],style:n?void 0:v.value},e.avatar&&t.contentIndented?l("div",{class:"".concat(i,"-thing-avatar")},e.avatar()):null,l("div",{class:"".concat(i,"-thing-main")},!t.contentIndented&&(e.header||t.title||e["header-extra"]||t.titleExtra||e.avatar)?l("div",{class:"".concat(i,"-thing-avatar-header-wrapper")},e.avatar?l("div",{class:"".concat(i,"-thing-avatar")},e.avatar()):null,e.header||t.title||e["header-extra"]||t.titleExtra?l("div",{class:"".concat(i,"-thing-header-wrapper")},l("div",{class:"".concat(i,"-thing-header")},e.header||t.title?l("div",{class:"".concat(i,"-thing-header__title")},e.header?e.header():t.title):null,e["header-extra"]||t.titleExtra?l("div",{class:"".concat(i,"-thing-header__extra")},e["header-extra"]?e["header-extra"]():t.titleExtra):null),e.description||t.description?l("div",{class:["".concat(i,"-thing-main__description"),t.descriptionClass],style:t.descriptionStyle},e.description?e.description():t.description):null):null):l(L,null,e.header||t.title||e["header-extra"]||t.titleExtra?l("div",{class:"".concat(i,"-thing-header")},e.header||t.title?l("div",{class:"".concat(i,"-thing-header__title")},e.header?e.header():t.title):null,e["header-extra"]||t.titleExtra?l("div",{class:"".concat(i,"-thing-header__extra")},e["header-extra"]?e["header-extra"]():t.titleExtra):null):null,e.description||t.description?l("div",{class:["".concat(i,"-thing-main__description"),t.descriptionClass],style:t.descriptionStyle},e.description?e.description():t.description):null),e.default||t.content?l("div",{class:["".concat(i,"-thing-main__content"),t.contentClass],style:t.contentStyle},e.default?e.default():t.content):null,e.footer?l("div",{class:"".concat(i,"-thing-main__footer")},e.footer()):null,e.action?l("div",{class:"".concat(i,"-thing-main__action")},e.action()):null))}}}),Pe={class:"overflow-hidden my-12 p-4 border-t border-b"},Te={key:0,class:"float-left my-2"},Ce={key:1,class:"float-right my-2"},ke=k({__name:"PostFooter",props:{post:{}},setup(t){const e=t,o=K(),n=w(()=>o.value.findIndex(c=>c.url===e.post));return(c,u)=>{const p=q("router-link");return h(),E("div",Pe,[s(n)>0?(h(),E("div",Te,[y(p,{to:"/posts/".concat(encodeURIComponent(s(o)[s(n)-1].url)),"data-clickable":""},{default:x(()=>[B(" 上一篇："+C(s(o)[s(n)-1].title),1)]),_:1},8,["to"])])):U("",!0),s(n)+1<s(o).length?(h(),E("div",Ce,[y(p,{to:"/posts/".concat(encodeURIComponent(s(o)[s(n)+1].url)),"data-clickable":""},{default:x(()=>[B(" 下一篇："+C(s(o)[s(n)+1].title),1)]),_:1},8,["to"])])):U("",!0)])}}}),Ae={class:"md-blog m-auto text-left"},Ie={class:"border-b pb-4"},Oe=k({__name:"PostHeader",props:{post:{}},setup(t){return(e,o)=>{const n=q("router-link"),c=ie;return h(),E("div",Ae,[D("h1",null,C(e.post.title),1),D("p",null,C(e.post.date),1),D("div",Ie,[(h(!0),E(L,null,J(e.post.tags,u=>(h(),I(c,{key:u,class:"mr-2 mb-4 no-cursor",type:"info",round:""},{default:x(()=>[y(n,{to:"/tags/".concat(encodeURIComponent(u)),class:"!text-inherit","data-clickable":""},{default:x(()=>[B(C(u),1)]),_:2},1032,["to"])]),_:2},1024))),128))])])}}}),we={class:"md-blog m-auto text-left"},$e=k({__name:"[post]",props:{post:{}},setup(t){const e=t,o=K(),n=w(()=>{var a;return(a=o.value.find(d=>e.post.includes(d.url)))!=null?a:{url:"",title:"",tags:[],date:"",toc:!1}});M(()=>{let a=Array.from(document.querySelectorAll(".n-scrollbar-rail"));for(let d of a)d.addEventListener("mouseenter",f=>{z(".n-scrollbar-rail__scrollbar",f.target)})});const{setToc:c,enableToc:u}=_e();re(()=>{u.value=!1,H.value=""});function p(){H.value=n.value.title,u.value=!!n.value.toc,u.value&&c(Array.from(document.querySelectorAll(".md-blog h2,h3,h4")));let a=z(".n-image > img");for(let d of a)d.addEventListener("click",()=>z(".n-image-preview-toolbar .n-base-icon"))}let v;const _=Object.assign({"/public/dynamic/CSharpClass.md":()=>r(()=>import("./CSharpClass-HD0J7c2W.js"),__vite__mapDeps([0,1,2])),"/public/dynamic/Clash4Linux.md":()=>r(()=>import("./Clash4Linux-anzOZgK0.js"),__vite__mapDeps([3,1,2])),"/public/dynamic/ClothSimulation.md":()=>r(()=>import("./ClothSimulation-eUN73jYE.js"),__vite__mapDeps([4,5,6,1,2])),"/public/dynamic/GAMESNote01.md":()=>r(()=>import("./GAMESNote01-NJvsxbf1.js"),__vite__mapDeps([7,1,2,5,6])),"/public/dynamic/GAMESNote02.md":()=>r(()=>import("./GAMESNote02-FuL8mer4.js"),__vite__mapDeps([8,1,2,5,6])),"/public/dynamic/GAMESNote03.md":()=>r(()=>import("./GAMESNote03-YSazVK6j.js"),__vite__mapDeps([9,1,2,5,6])),"/public/dynamic/HackerGame2022.md":()=>r(()=>import("./HackerGame2022-7nlYBmcM.js"),__vite__mapDeps([10,1,2,5,6])),"/public/dynamic/HackerGame2023.md":()=>r(()=>import("./HackerGame2023-rf19b5Gf.js"),__vite__mapDeps([11,1,2,5,6])),"/public/dynamic/Interview.md":()=>r(()=>import("./Interview-SeXIz3_A.js"),__vite__mapDeps([12,1,2])),"/public/dynamic/ObjectToWorldNormal.md":()=>r(()=>import("./ObjectToWorldNormal-hpND1WZN.js"),__vite__mapDeps([13,1,2,5,6])),"/public/dynamic/RayTracingGem.md":()=>r(()=>import("./RayTracingGem-GBDiVOtC.js"),__vite__mapDeps([14,1,2,5,6])),"/public/dynamic/SSAOUnity.md":()=>r(()=>import("./SSAOUnity-CUsTGgrZ.js"),__vite__mapDeps([15,1,2,5,6])),"/public/dynamic/SolutionCF1452D.md":()=>r(()=>import("./SolutionCF1452D-eAt3pmTH.js"),__vite__mapDeps([16,1,2])),"/public/dynamic/SolutionP5020.md":()=>r(()=>import("./SolutionP5020-huRJ_WX9.js"),__vite__mapDeps([17,1,2])),"/public/dynamic/SolutionPrize.md":()=>r(()=>import("./SolutionPrize-1VaqEEHn.js"),__vite__mapDeps([18,1,2,5,6])),"/public/dynamic/SublimeCpp.md":()=>r(()=>import("./SublimeCpp-PxXZqQjA.js"),__vite__mapDeps([19,1,2,5,6])),"/public/dynamic/SublimeMarkdown.md":()=>r(()=>import("./SublimeMarkdown-6MOmrEiQ.js"),__vite__mapDeps([20,1,2])),"/public/dynamic/TencentIntern.md":()=>r(()=>import("./TencentIntern-1gjHafDH.js"),__vite__mapDeps([21,1,2])),"/public/dynamic/TreeDebugger.md":()=>r(()=>import("./TreeDebugger-oF-bymlS.js"),__vite__mapDeps([22,1,2,5,6])),"/public/dynamic/UnityEditorWindowBug.md":()=>r(()=>import("./UnityEditorWindowBug-FzM0CJ57.js"),__vite__mapDeps([23,1,2,5,6])),"/public/dynamic/UnitySelf01.md":()=>r(()=>import("./UnitySelf01-z8YGizA0.js"),__vite__mapDeps([24,1,2])),"/public/dynamic/UnitySelf02.md":()=>r(()=>import("./UnitySelf02-D5R_x7ei.js"),__vite__mapDeps([25,1,2])),"/public/dynamic/UnitySelf03.md":()=>r(()=>import("./UnitySelf03-wIzMSoLz.js"),__vite__mapDeps([26,1,2])),"/public/dynamic/VEGExtension.md":()=>r(()=>import("./VEGExtension--hhKjhtu.js"),__vite__mapDeps([27,1,2,5,6])),"/public/dynamic/VueBlog.md":()=>r(()=>import("./VueBlog-PAxCNkBI.js"),__vite__mapDeps([28,1,2,29]))});oe(()=>e.post,()=>{_["/public/dynamic/".concat(e.post,".md")]!==void 0?v=ae(_["/public/dynamic/".concat(e.post,".md")]):le().replace("/notFound")},{immediate:!0});function m(a,d){return a+Math.round(Math.random()*(d-a))}const i=ce([]);return M(()=>{i.value=[];let a=m(4,8);for(let d=0;d<a;d++)i.value.push({repeat:m(1,3),width:"width: "+m(20,80)+"%"})}),(a,d)=>{const f=Oe,A=Ee,g=Re,R=ke;return h(),E("div",we,[y(f,{post:s(n)},null,8,["post"]),(h(),I(ue,{onResolve:p},{fallback:x(()=>[(h(!0),E(L,null,J(s(i),P=>(h(),I(g,null,{default:x(()=>[y(A,{text:"",repeat:P.repeat},null,8,["repeat"]),y(A,{text:"",style:de(P.width)},null,8,["style"])]),_:2},1024))),256))]),default:x(()=>[(h(),I(se(s(v))))]),_:1})),y(R,{post:s(n).url},null,8,["post"])])}}});export{$e as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CSharpClass-HD0J7c2W.js","assets/index-ukExRzut.js","assets/index-ZkhcNzeF.css","assets/Clash4Linux-anzOZgK0.js","assets/ClothSimulation-eUN73jYE.js","assets/Image-3ToJOppo.js","assets/utils-AJyvZ1xd.js","assets/GAMESNote01-NJvsxbf1.js","assets/GAMESNote02-FuL8mer4.js","assets/GAMESNote03-YSazVK6j.js","assets/HackerGame2022-7nlYBmcM.js","assets/HackerGame2023-rf19b5Gf.js","assets/Interview-SeXIz3_A.js","assets/ObjectToWorldNormal-hpND1WZN.js","assets/RayTracingGem-GBDiVOtC.js","assets/SSAOUnity-CUsTGgrZ.js","assets/SolutionCF1452D-eAt3pmTH.js","assets/SolutionP5020-huRJ_WX9.js","assets/SolutionPrize-1VaqEEHn.js","assets/SublimeCpp-PxXZqQjA.js","assets/SublimeMarkdown-6MOmrEiQ.js","assets/TencentIntern-1gjHafDH.js","assets/TreeDebugger-oF-bymlS.js","assets/UnityEditorWindowBug-FzM0CJ57.js","assets/UnitySelf01-z8YGizA0.js","assets/UnitySelf02-D5R_x7ei.js","assets/UnitySelf03-wIzMSoLz.js","assets/VEGExtension--hhKjhtu.js","assets/VueBlog-PAxCNkBI.js","assets/Divider-Eqy9a8LR.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}