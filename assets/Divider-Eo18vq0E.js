import{a as f,f as p,ae as c,m as s,g as o,d as u,i as x,u as v,k as b,l as C,h as d,F as _}from"./index-je7ubDW8.js";const $=i=>{const{textColor1:t,dividerColor:n,fontWeightStrong:l}=i;return{textColor:t,color:n,fontWeight:l}},w={name:"Divider",common:f,self:$},y=w,z=p("divider","\n position: relative;\n display: flex;\n width: 100%;\n box-sizing: border-box;\n font-size: 16px;\n color: var(--n-text-color);\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n",[c("vertical","\n margin-top: 24px;\n margin-bottom: 24px;\n ",[c("no-title","\n display: flex;\n align-items: center;\n ")]),s("title","\n display: flex;\n align-items: center;\n margin-left: 12px;\n margin-right: 12px;\n white-space: nowrap;\n font-weight: var(--n-font-weight);\n "),o("title-position-left",[s("line",[o("left",{width:"28px"})])]),o("title-position-right",[s("line",[o("right",{width:"28px"})])]),o("dashed",[s("line","\n background-color: #0000;\n height: 0px;\n width: 100%;\n border-style: dashed;\n border-width: 1px 0 0;\n ")]),o("vertical","\n display: inline-block;\n height: 1em;\n margin: 0 8px;\n vertical-align: middle;\n width: 1px;\n "),s("line","\n border: none;\n transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);\n height: 1px;\n width: 100%;\n margin: 0;\n "),c("dashed",[s("line",{backgroundColor:"var(--n-color)"})]),o("dashed",[s("line",{borderColor:"var(--n-color)"})]),o("vertical",{backgroundColor:"var(--n-color)"})]),k=Object.assign(Object.assign({},v.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),R=u({name:"Divider",props:k,setup(i){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=x(i),l=v("Divider","-divider",z,y,i,t),a=b(()=>{const{common:{cubicBezierEaseInOut:e},self:{color:h,textColor:g,fontWeight:m}}=l.value;return{"--n-bezier":e,"--n-color":h,"--n-text-color":g,"--n-font-weight":m}}),r=n?C("divider",void 0,a,i):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:a,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var i;const{$slots:t,titlePlacement:n,vertical:l,dashed:a,cssVars:r,mergedClsPrefix:e}=this;return(i=this.onRender)===null||i===void 0||i.call(this),d("div",{role:"separator",class:["".concat(e,"-divider"),this.themeClass,{["".concat(e,"-divider--vertical")]:l,["".concat(e,"-divider--no-title")]:!t.default,["".concat(e,"-divider--dashed")]:a,["".concat(e,"-divider--title-position-").concat(n)]:t.default&&n}],style:r},l?null:d("div",{class:"".concat(e,"-divider__line ").concat(e,"-divider__line--left")}),!l&&t.default?d(_,null,d("div",{class:"".concat(e,"-divider__title")},this.$slots),d("div",{class:"".concat(e,"-divider__line ").concat(e,"-divider__line--right")})):null)}});export{R as _};
