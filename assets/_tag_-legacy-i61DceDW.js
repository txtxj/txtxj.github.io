System.register(["./index-legacy-gF2y_0wv.js","./Divider-legacy-cqj2UYxA.js"],(function(e,t){"use strict";var n,r,a,u,l,i,c,o,s,f,g,p,d,v,m,y,_,w,x,b,j,S;return{setters:[function(e){n=e.d,r=e.l,a=e.q,u=e.a9,l=e.w,i=e.J,c=e.K,o=e.W,s=e.M,f=e.R,g=e.a3,p=e.S,d=e.O,v=e.U,m=e.L,y=e.P,_=e.aC,w=e.af,x=e.ae,b=e.aD,j=e.aE},function(e){S=e._}],execute:function(){var t={style:{display:"flex","flex-direction":"row","flex-wrap":"wrap"}},q={class:"my-10 w-100vw flex",style:{"justify-content":"center"}};e("default",n({__name:"[tag]",props:{tag:{}},setup:function(e){var n=e,A=w(),C=r((function(){return A.value.filter((function(e){return e.tags.includes(n.tag)}))})),D=x(),E=D.setCurrentView,L=D.page,M=D.pageMax,U=r((function(){return C.value.map((function(e,t){return{detail:e,summary:C.value[t]}})).slice(8*(L.value-1),8*L.value)}));return a((function(){u(".n-pagination-item, .n-scrollbar-rail__scrollbar")})),a((function(){for(var e=0,t=Array.from(document.querySelectorAll(".n-scrollbar"));e<t.length;e++)t[e].addEventListener("mouseenter",(function(e){u(".n-scrollbar-rail__scrollbar",e.target)}))})),l((function(){return n.tag}),(function(){return E(n.tag,C)}),{immediate:!0}),function(e,n){var r=S,a=b,u=j;return i(),c("div",null,[o(r,{"title-placement":"left"},{default:s((function(){return[g(" # "+f(e.tag),1)]})),_:1}),p("div",t,[(i(!0),c(d,null,v(y(U),(function(e){return i(),m(a,{key:e.summary.url,post:e},null,8,["post"])})),128)),p("div",q,[o(u,{page:y(L),"onUpdate:page":n[0]||(n[0]=function(e){return _(L)?L.value=e:null}),"page-count":y(M)},null,8,["page","page-count"])])])])}}}))}}}));