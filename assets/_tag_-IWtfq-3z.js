import{d as B,l as o,q as m,a9 as p,v as M,P as c,Q as _,M as d,R as P,$ as V,a7 as N,a0 as g,S as h,Y as q,X as z,T as s,ad as A,aH as D,_ as E,af as L,ae as R,a8 as T,aI as j,aJ as F}from"./index-g-ZO5vKN.js";import{_ as H}from"./Divider-ShsTFvlM.js";const Q=B({__name:"[tag]",props:{tag:{}},setup(f){const l=f,y=L(),u=o(()=>y.value.filter(e=>e.tags.includes(l.tag))),{setCurrentView:v,page:t,pageMax:S}=R(),b=o(()=>u.value.map((a,n)=>({detail:a,summary:u.value[n]})).slice((t.value-1)*8,t.value*8));m(()=>{p(".n-pagination-item, .n-scrollbar-rail__scrollbar")}),m(()=>{let e=Array.from(document.querySelectorAll(".n-scrollbar"));for(let a of e)a.addEventListener("mouseenter",n=>{p(".n-scrollbar-rail__scrollbar",n.target)})}),M(()=>l.tag,()=>v(l.tag,u),{immediate:!0});const{isMobile:i}=T(),w=o(()=>i.value?"":"display: flex; flex-direction: row; flex-wrap: wrap"),x=o(()=>(i.value?"":"w-100vw ")+"my-10 flex");return(e,a)=>{const n=H,C=j,k=F;return c(),_("div",null,[d(n,{"title-placement":"left"},{default:P(()=>[N(" # "+V(e.tag),1)]),_:1}),g("div",{style:E(s(w))},[(c(!0),_(h,null,q(s(b),r=>(c(),z(C,{key:r.summary.url,post:r},null,8,["post"]))),128)),g("div",{class:A(s(x)),style:{"justify-content":"center"}},[d(k,{page:s(t),"onUpdate:page":a[0]||(a[0]=r=>D(t)?t.value=r:null),"page-count":s(S)},null,8,["page","page-count"])],2)],4)])}}});export{Q as default};
