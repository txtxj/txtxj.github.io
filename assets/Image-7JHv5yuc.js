import{o as Je,i as qe}from"./utils-_We6MTy-.js";import{aF as he,aG as D,h as n,d as j,z as ve,c as ge,aH as Qe,a as eo,u as X,m as $,r as b,l as pe,aI as oo,aJ as to,b as we,f as V,e as M,aK as ie,aL as no,aj as io,H as me,aM as ro,w as ao,aN as W,aO as A,v as xe,k as Ce,o as so,aP as lo,aQ as uo,aR as re,aS as co,ab as Y,O as ae,E as R,aT as fo,Q as ho,aU as vo,q as se,s as le,C as go}from"./index-xe0QDQa5.js";function po(e,a,i,u){var s=-1,w=e==null?0:e.length;for(u&&w&&(i=e[++s]);++s<w;)i=a(i,e[s],s,e);return i}function wo(e){return function(a){return e==null?void 0:e[a]}}var mo={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},xo=wo(mo);const Co=xo;var bo=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Oo="\\u0300-\\u036f",So="\\ufe20-\\ufe2f",Ro="\\u20d0-\\u20ff",Lo=Oo+So+Ro,Mo="["+Lo+"]",Po=RegExp(Mo,"g");function Io(e){return e=he(e),e&&e.replace(bo,Co).replace(Po,"")}var ko=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function yo(e){return e.match(ko)||[]}var zo=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function To(e){return zo.test(e)}var be="\\ud800-\\udfff",Eo="\\u0300-\\u036f",Ao="\\ufe20-\\ufe2f",Ho="\\u20d0-\\u20ff",Do=Eo+Ao+Ho,Oe="\\u2700-\\u27bf",Se="a-z\\xdf-\\xf6\\xf8-\\xff",jo="\\xac\\xb1\\xd7\\xf7",$o="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",_o="\\u2000-\\u206f",Zo=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Re="A-Z\\xc0-\\xd6\\xd8-\\xde",Bo="\\ufe0e\\ufe0f",Le=jo+$o+_o+Zo,Me="['’]",ue="["+Le+"]",No="["+Do+"]",Pe="\\d+",Uo="["+Oe+"]",Ie="["+Se+"]",ke="[^"+be+Le+Pe+Oe+Se+Re+"]",Vo="\\ud83c[\\udffb-\\udfff]",Wo="(?:"+No+"|"+Vo+")",Yo="[^"+be+"]",ye="(?:\\ud83c[\\udde6-\\uddff]){2}",ze="[\\ud800-\\udbff][\\udc00-\\udfff]",E="["+Re+"]",Xo="\\u200d",ce="(?:"+Ie+"|"+ke+")",Fo="(?:"+E+"|"+ke+")",de="(?:"+Me+"(?:d|ll|m|re|s|t|ve))?",fe="(?:"+Me+"(?:D|LL|M|RE|S|T|VE))?",Te=Wo+"?",Ee="["+Bo+"]?",Go="(?:"+Xo+"(?:"+[Yo,ye,ze].join("|")+")"+Ee+Te+")*",Ko="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Jo="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",qo=Ee+Te+Go,Qo="(?:"+[Uo,ye,ze].join("|")+")"+qo,et=RegExp([E+"?"+Ie+"+"+de+"(?="+[ue,E,"$"].join("|")+")",Fo+"+"+fe+"(?="+[ue,E+ce,"$"].join("|")+")",E+"?"+ce+"+"+de,E+"+"+fe,Jo,Ko,Pe,Qo].join("|"),"g");function ot(e){return e.match(et)||[]}function tt(e,a,i){return e=he(e),a=i?void 0:a,a===void 0?To(e)?ot(e):yo(e):e.match(a)||[]}var nt="['’]",it=RegExp(nt,"g");function rt(e){return function(a){return po(tt(Io(a).replace(it,"")),e,"")}}var at=rt(function(e,a,i){return e+(i?"-":"")+a.toLowerCase()});const st=at,lt=D("rotateClockwise",n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 12.7916 15.3658 15.2026 13 16.3265V14.5C13 14.2239 12.7761 14 12.5 14C12.2239 14 12 14.2239 12 14.5V17.5C12 17.7761 12.2239 18 12.5 18H15.5C15.7761 18 16 17.7761 16 17.5C16 17.2239 15.7761 17 15.5 17H13.8758C16.3346 15.6357 18 13.0128 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 10.2761 2.22386 10.5 2.5 10.5C2.77614 10.5 3 10.2761 3 10Z",fill:"currentColor"}),n("path",{d:"M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12ZM10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11Z",fill:"currentColor"}))),ut=D("rotateClockwise",n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 12.7916 4.63419 15.2026 7 16.3265V14.5C7 14.2239 7.22386 14 7.5 14C7.77614 14 8 14.2239 8 14.5V17.5C8 17.7761 7.77614 18 7.5 18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H6.12422C3.66539 15.6357 2 13.0128 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 10.2761 17.7761 10.5 17.5 10.5C17.2239 10.5 17 10.2761 17 10Z",fill:"currentColor"}),n("path",{d:"M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12ZM10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11Z",fill:"currentColor"}))),ct=D("zoomIn",n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M11.5 8.5C11.5 8.22386 11.2761 8 11 8H9V6C9 5.72386 8.77614 5.5 8.5 5.5C8.22386 5.5 8 5.72386 8 6V8H6C5.72386 8 5.5 8.22386 5.5 8.5C5.5 8.77614 5.72386 9 6 9H8V11C8 11.2761 8.22386 11.5 8.5 11.5C8.77614 11.5 9 11.2761 9 11V9H11C11.2761 9 11.5 8.77614 11.5 8.5Z",fill:"currentColor"}),n("path",{d:"M8.5 3C11.5376 3 14 5.46243 14 8.5C14 9.83879 13.5217 11.0659 12.7266 12.0196L16.8536 16.1464C17.0488 16.3417 17.0488 16.6583 16.8536 16.8536C16.68 17.0271 16.4106 17.0464 16.2157 16.9114L16.1464 16.8536L12.0196 12.7266C11.0659 13.5217 9.83879 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3ZM8.5 4C6.01472 4 4 6.01472 4 8.5C4 10.9853 6.01472 13 8.5 13C10.9853 13 13 10.9853 13 8.5C13 6.01472 10.9853 4 8.5 4Z",fill:"currentColor"}))),dt=D("zoomOut",n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M11 8C11.2761 8 11.5 8.22386 11.5 8.5C11.5 8.77614 11.2761 9 11 9H6C5.72386 9 5.5 8.77614 5.5 8.5C5.5 8.22386 5.72386 8 6 8H11Z",fill:"currentColor"}),n("path",{d:"M14 8.5C14 5.46243 11.5376 3 8.5 3C5.46243 3 3 5.46243 3 8.5C3 11.5376 5.46243 14 8.5 14C9.83879 14 11.0659 13.5217 12.0196 12.7266L16.1464 16.8536L16.2157 16.9114C16.4106 17.0464 16.68 17.0271 16.8536 16.8536C17.0488 16.6583 17.0488 16.3417 16.8536 16.1464L12.7266 12.0196C13.5217 11.0659 14 9.83879 14 8.5ZM4 8.5C4 6.01472 6.01472 4 8.5 4C10.9853 4 13 6.01472 13 8.5C13 10.9853 10.9853 13 8.5 13C6.01472 13 4 10.9853 4 8.5Z",fill:"currentColor"}))),ft=j({name:"ResizeSmall",render(){return n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},n("g",{fill:"none"},n("path",{d:"M5.5 4A1.5 1.5 0 0 0 4 5.5v1a.5.5 0 0 1-1 0v-1A2.5 2.5 0 0 1 5.5 3h1a.5.5 0 0 1 0 1h-1zM16 5.5A1.5 1.5 0 0 0 14.5 4h-1a.5.5 0 0 1 0-1h1A2.5 2.5 0 0 1 17 5.5v1a.5.5 0 0 1-1 0v-1zm0 9a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-1 0v1zm-12 0A1.5 1.5 0 0 0 5.5 16h1.25a.5.5 0 0 1 0 1H5.5A2.5 2.5 0 0 1 3 14.5v-1.25a.5.5 0 0 1 1 0v1.25zM8.5 7A1.5 1.5 0 0 0 7 8.5v3A1.5 1.5 0 0 0 8.5 13h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 11.5 7h-3zM8 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3z",fill:"currentColor"})))}}),ht={padding:"8px 14px"},vt=e=>{const{borderRadius:a,boxShadow2:i,baseColor:u}=e;return Object.assign(Object.assign({},ht),{borderRadius:a,boxShadow:i,color:eo(u,"rgba(0, 0, 0, .85)"),textColor:u})},gt=ve({name:"Tooltip",common:ge,peers:{Popover:Qe},self:vt}),Ae=gt,pt=Object.assign(Object.assign({},to),$.props),wt=j({name:"Tooltip",props:pt,__popover__:!0,setup(e){const{mergedClsPrefixRef:a}=X(e),i=$("Tooltip","-tooltip",void 0,Ae,e,a),u=b(null);return Object.assign(Object.assign({},{syncPosition(){u.value.syncPosition()},setShow(w){u.value.setShow(w)}}),{popoverRef:u,mergedTheme:i,popoverThemeOverrides:pe(()=>i.value.self)})},render(){const{mergedTheme:e,internalExtraClass:a}=this;return n(oo,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:a.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),He=Object.assign(Object.assign({},$.props),{onPreviewPrev:Function,onPreviewNext:Function,showToolbar:{type:Boolean,default:!0},showToolbarTooltip:Boolean}),De=we("n-image"),mt=(e,a)=>{if(!e)return;const i=document.createElement("a");i.href=e,a!==void 0&&(i.download=a),document.body.appendChild(i),i.click(),document.body.removeChild(i)};function xt(){return{toolbarIconColor:"rgba(255, 255, 255, .9)",toolbarColor:"rgba(0, 0, 0, .35)",toolbarBoxShadow:"none",toolbarBorderRadius:"24px"}}const Ct=ve({name:"Image",common:ge,peers:{Tooltip:Ae},self:xt}),bt=n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M6 5C5.75454 5 5.55039 5.17688 5.50806 5.41012L5.5 5.5V14.5C5.5 14.7761 5.72386 15 6 15C6.24546 15 6.44961 14.8231 6.49194 14.5899L6.5 14.5V5.5C6.5 5.22386 6.27614 5 6 5ZM13.8536 5.14645C13.68 4.97288 13.4106 4.9536 13.2157 5.08859L13.1464 5.14645L8.64645 9.64645C8.47288 9.82001 8.4536 10.0894 8.58859 10.2843L8.64645 10.3536L13.1464 14.8536C13.3417 15.0488 13.6583 15.0488 13.8536 14.8536C14.0271 14.68 14.0464 14.4106 13.9114 14.2157L13.8536 14.1464L9.70711 10L13.8536 5.85355C14.0488 5.65829 14.0488 5.34171 13.8536 5.14645Z",fill:"currentColor"})),Ot=n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M13.5 5C13.7455 5 13.9496 5.17688 13.9919 5.41012L14 5.5V14.5C14 14.7761 13.7761 15 13.5 15C13.2545 15 13.0504 14.8231 13.0081 14.5899L13 14.5V5.5C13 5.22386 13.2239 5 13.5 5ZM5.64645 5.14645C5.82001 4.97288 6.08944 4.9536 6.28431 5.08859L6.35355 5.14645L10.8536 9.64645C11.0271 9.82001 11.0464 10.0894 10.9114 10.2843L10.8536 10.3536L6.35355 14.8536C6.15829 15.0488 5.84171 15.0488 5.64645 14.8536C5.47288 14.68 5.4536 14.4106 5.58859 14.2157L5.64645 14.1464L9.79289 10L5.64645 5.85355C5.45118 5.65829 5.45118 5.34171 5.64645 5.14645Z",fill:"currentColor"})),St=n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M4.089 4.216l.057-.07a.5.5 0 0 1 .638-.057l.07.057L10 9.293l5.146-5.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07L10.707 10l5.147 5.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057L10 10.707l-5.146 5.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07L9.293 10L4.146 4.854a.5.5 0 0 1-.057-.638l.057-.07l-.057.07z",fill:"currentColor"})),Rt=n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 1024 1024"},n("path",{fill:"currentColor",d:"M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"})),Lt=V([V("body >",[M("image-container","position: fixed;")]),M("image-preview-container","\n position: fixed;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n display: flex;\n "),M("image-preview-overlay","\n z-index: -1;\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n background: rgba(0, 0, 0, .3);\n ",[ie()]),M("image-preview-toolbar","\n z-index: 1;\n position: absolute;\n left: 50%;\n transform: translateX(-50%);\n border-radius: var(--n-toolbar-border-radius);\n height: 48px;\n bottom: 40px;\n padding: 0 12px;\n background: var(--n-toolbar-color);\n box-shadow: var(--n-toolbar-box-shadow);\n color: var(--n-toolbar-icon-color);\n transition: color .3s var(--n-bezier);\n display: flex;\n align-items: center;\n ",[M("base-icon","\n padding: 0 8px;\n font-size: 28px;\n cursor: pointer;\n "),ie()]),M("image-preview-wrapper","\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n display: flex;\n pointer-events: none;\n ",[no()]),M("image-preview","\n user-select: none;\n -webkit-user-select: none;\n pointer-events: all;\n margin: auto;\n max-height: calc(100vh - 32px);\n max-width: calc(100vw - 32px);\n transition: transform .3s var(--n-bezier);\n "),M("image","\n display: inline-flex;\n max-height: 100%;\n max-width: 100%;\n ",[io("preview-disabled","\n cursor: pointer;\n "),V("img","\n border-radius: inherit;\n ")])]),H=32,Mt=j({name:"ImagePreview",props:Object.assign(Object.assign({},He),{onNext:Function,onPrev:Function,clsPrefix:{type:String,required:!0}}),setup(e){const a=$("Image","-image",Lt,Ct,e,me(e,"clsPrefix"));let i=null;const u=b(null),s=b(null),w=b(void 0),O=b(!1),S=b(!1),{localeRef:P}=ro("Image");function l(){const{value:o}=s;if(!i||!o)return;const{style:r}=o,t=i.getBoundingClientRect(),d=t.left+t.width/2,f=t.top+t.height/2;r.transformOrigin="".concat(d,"px ").concat(f,"px")}function c(o){var r,t;switch(o.key){case" ":o.preventDefault();break;case"ArrowLeft":(r=e.onPrev)===null||r===void 0||r.call(e);break;case"ArrowRight":(t=e.onNext)===null||t===void 0||t.call(e);break;case"Escape":oe();break}}ao(O,o=>{o?W("keydown",document,c):A("keydown",document,c)}),xe(()=>{A("keydown",document,c)});let v=0,F=0,I=0,k=0,_=0,Z=0,G=0,K=0,B=!1;function J(o){const{clientX:r,clientY:t}=o;I=r-v,k=t-F,vo(x)}function je(o){const{mouseUpClientX:r,mouseUpClientY:t,mouseDownClientX:d,mouseDownClientY:f}=o,p=d-r,m=f-t,C="vertical".concat(m>0?"Top":"Bottom"),L="horizontal".concat(p>0?"Left":"Right");return{moveVerticalDirection:C,moveHorizontalDirection:L,deltaHorizontal:p,deltaVertical:m}}function q(o){const{value:r}=u;if(!r)return{offsetX:0,offsetY:0};const t=r.getBoundingClientRect(),{moveVerticalDirection:d,moveHorizontalDirection:f,deltaHorizontal:p,deltaVertical:m}=o||{};let C=0,L=0;return t.width<=window.innerWidth?C=0:t.left>0?C=(t.width-window.innerWidth)/2:t.right<window.innerWidth?C=-(t.width-window.innerWidth)/2:f==="horizontalRight"?C=Math.min((t.width-window.innerWidth)/2,_-(p!=null?p:0)):C=Math.max(-((t.width-window.innerWidth)/2),_-(p!=null?p:0)),t.height<=window.innerHeight?L=0:t.top>0?L=(t.height-window.innerHeight)/2:t.bottom<window.innerHeight?L=-(t.height-window.innerHeight)/2:d==="verticalBottom"?L=Math.min((t.height-window.innerHeight)/2,Z-(m!=null?m:0)):L=Math.max(-((t.height-window.innerHeight)/2),Z-(m!=null?m:0)),{offsetX:C,offsetY:L}}function Q(o){A("mousemove",document,J),A("mouseup",document,Q);const{clientX:r,clientY:t}=o;B=!1;const d=je({mouseUpClientX:r,mouseUpClientY:t,mouseDownClientX:G,mouseDownClientY:K}),f=q(d);I=f.offsetX,k=f.offsetY,x()}const h=Ce(De,null);function $e(o){var r,t;if((t=(r=h==null?void 0:h.previewedImgPropsRef.value)===null||r===void 0?void 0:r.onMousedown)===null||t===void 0||t.call(r,o),o.button!==0)return;const{clientX:d,clientY:f}=o;B=!0,v=d-I,F=f-k,_=I,Z=k,G=d,K=f,x(),W("mousemove",document,J),W("mouseup",document,Q)}function _e(o){var r,t;(t=(r=h==null?void 0:h.previewedImgPropsRef.value)===null||r===void 0?void 0:r.onDblclick)===null||t===void 0||t.call(r,o);const d=ee();g=g===d?1:d,x()}const N=1.5;let y=0,g=1,z=0;function U(){g=1,y=0}function Ze(){var o;U(),z=0,(o=e.onPrev)===null||o===void 0||o.call(e)}function Be(){var o;U(),z=0,(o=e.onNext)===null||o===void 0||o.call(e)}function Ne(){z-=90,x()}function Ue(){z+=90,x()}function Ve(){const{value:o}=u;if(!o)return 1;const{innerWidth:r,innerHeight:t}=window,d=Math.max(1,o.naturalHeight/(t-H)),f=Math.max(1,o.naturalWidth/(r-H));return Math.max(3,d*2,f*2)}function ee(){const{value:o}=u;if(!o)return 1;const{innerWidth:r,innerHeight:t}=window,d=o.naturalHeight/(t-H),f=o.naturalWidth/(r-H);return d<1&&f<1?1:Math.max(d,f)}function We(){const o=Ve();g<o&&(y+=1,g=Math.min(o,Math.pow(N,y)),x())}function Ye(){if(g>.5){const o=g;y-=1,g=Math.max(.5,Math.pow(N,y));const r=o-g;x(!1);const t=q();g+=r,x(!1),g-=r,I=t.offsetX,k=t.offsetY,x()}}function Xe(){const o=w.value;o&&mt(o,void 0)}function x(o=!0){var r;const{value:t}=u;if(!t)return;const{style:d}=t,f=ho((r=h==null?void 0:h.previewedImgPropsRef.value)===null||r===void 0?void 0:r.style);let p="";if(typeof f=="string")p=f+";";else for(const C in f)p+="".concat(st(C),": ").concat(f[C],";");const m="transform-origin: center; transform: translateX(".concat(I,"px) translateY(").concat(k,"px) rotate(").concat(z,"deg) scale(").concat(g,");");B?d.cssText=p+"cursor: grabbing; transition: none;"+m:d.cssText=p+"cursor: grab;"+m+(o?"":"transition: none;"),o||t.offsetHeight}function oe(){O.value=!O.value,S.value=!0}function Fe(){g=ee(),y=Math.ceil(Math.log(g)/Math.log(N)),I=0,k=0,x()}const Ge={setPreviewSrc:o=>{w.value=o},setThumbnailEl:o=>{i=o},toggleShow:oe};function Ke(o,r){if(e.showToolbarTooltip){const{value:t}=a;return n(wt,{to:!1,theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,keepAliveOnHover:!1},{default:()=>P.value[r],trigger:()=>o})}else return o}const te=pe(()=>{const{common:{cubicBezierEaseInOut:o},self:{toolbarIconColor:r,toolbarBorderRadius:t,toolbarBoxShadow:d,toolbarColor:f}}=a.value;return{"--n-bezier":o,"--n-toolbar-icon-color":r,"--n-toolbar-color":f,"--n-toolbar-border-radius":t,"--n-toolbar-box-shadow":d}}),{inlineThemeDisabled:ne}=X(),T=ne?so("image-preview",void 0,te,e):void 0;return Object.assign({previewRef:u,previewWrapperRef:s,previewSrc:w,show:O,appear:lo(),displayed:S,previewedImgProps:h==null?void 0:h.previewedImgPropsRef,handleWheel(o){o.preventDefault()},handlePreviewMousedown:$e,handlePreviewDblclick:_e,syncTransformOrigin:l,handleAfterLeave:()=>{U(),z=0,S.value=!1},handleDragStart:o=>{var r,t;(t=(r=h==null?void 0:h.previewedImgPropsRef.value)===null||r===void 0?void 0:r.onDragstart)===null||t===void 0||t.call(r,o),o.preventDefault()},zoomIn:We,zoomOut:Ye,handleDownloadClick:Xe,rotateCounterclockwise:Ne,rotateClockwise:Ue,handleSwitchPrev:Ze,handleSwitchNext:Be,withTooltip:Ke,resizeToOrignalImageSize:Fe,cssVars:ne?void 0:te,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender},Ge)},render(){var e,a;const{clsPrefix:i}=this;return n(ae,null,(a=(e=this.$slots).default)===null||a===void 0?void 0:a.call(e),n(uo,{show:this.show},{default:()=>{var u;return this.show||this.displayed?((u=this.onRender)===null||u===void 0||u.call(this),re(n("div",{class:["".concat(i,"-image-preview-container"),this.themeClass],style:this.cssVars,onWheel:this.handleWheel},n(Y,{name:"fade-in-transition",appear:this.appear},{default:()=>this.show?n("div",{class:"".concat(i,"-image-preview-overlay"),onClick:this.toggleShow}):null}),this.showToolbar?n(Y,{name:"fade-in-transition",appear:this.appear},{default:()=>{if(!this.show)return null;const{withTooltip:s}=this;return n("div",{class:"".concat(i,"-image-preview-toolbar")},this.onPrev?n(ae,null,s(n(R,{clsPrefix:i,onClick:this.handleSwitchPrev},{default:()=>bt}),"tipPrevious"),s(n(R,{clsPrefix:i,onClick:this.handleSwitchNext},{default:()=>Ot}),"tipNext")):null,s(n(R,{clsPrefix:i,onClick:this.rotateCounterclockwise},{default:()=>n(ut,null)}),"tipCounterclockwise"),s(n(R,{clsPrefix:i,onClick:this.rotateClockwise},{default:()=>n(lt,null)}),"tipClockwise"),s(n(R,{clsPrefix:i,onClick:this.resizeToOrignalImageSize},{default:()=>n(ft,null)}),"tipOriginalSize"),s(n(R,{clsPrefix:i,onClick:this.zoomOut},{default:()=>n(dt,null)}),"tipZoomOut"),s(n(R,{clsPrefix:i,onClick:this.zoomIn},{default:()=>n(ct,null)}),"tipZoomIn"),s(n(R,{clsPrefix:i,onClick:this.handleDownloadClick},{default:()=>Rt}),"tipDownload"),s(n(R,{clsPrefix:i,onClick:this.toggleShow},{default:()=>St}),"tipClose"))}}):null,n(Y,{name:"fade-in-scale-up-transition",onAfterLeave:this.handleAfterLeave,appear:this.appear,onEnter:this.syncTransformOrigin,onBeforeLeave:this.syncTransformOrigin},{default:()=>{const{previewedImgProps:s={}}=this;return re(n("div",{class:"".concat(i,"-image-preview-wrapper"),ref:"previewWrapperRef"},n("img",Object.assign({},s,{draggable:!1,onMousedown:this.handlePreviewMousedown,onDblclick:this.handlePreviewDblclick,class:["".concat(i,"-image-preview"),s.class],key:this.previewSrc,src:this.previewSrc,ref:"previewRef",onDragstart:this.handleDragStart}))),[[fo,this.show]])}})),[[co,{enabled:this.show}]])):null}}))}}),Pt=we("n-image-group"),It=Object.assign({alt:String,height:[String,Number],imgProps:Object,previewedImgProps:Object,lazy:Boolean,intersectionObserverOptions:Object,objectFit:{type:String,default:"fill"},previewSrc:String,fallbackSrc:String,width:[String,Number],src:String,previewDisabled:Boolean,loadDescription:String,onError:Function,onLoad:Function},He),zt=j({name:"Image",props:It,inheritAttrs:!1,setup(e){const a=b(null),i=b(!1),u=b(null),s=Ce(Pt,null),{mergedClsPrefixRef:w}=s||X(e),O={click:()=>{if(e.previewDisabled||i.value)return;const l=e.previewSrc||e.src;if(s){s.setPreviewSrc(l),s.setThumbnailEl(a.value),s.toggleShow();return}const{value:c}=u;c&&(c.setPreviewSrc(l),c.setThumbnailEl(a.value),c.toggleShow())}},S=b(!e.lazy);se(()=>{var l;(l=a.value)===null||l===void 0||l.setAttribute("data-group-id",(s==null?void 0:s.groupId)||"")}),se(()=>{if(e.lazy&&e.intersectionObserverOptions){let l;const c=le(()=>{l==null||l(),l=void 0,l=Je(a.value,e.intersectionObserverOptions,S)});xe(()=>{c(),l==null||l()})}}),le(()=>{var l;e.src,(l=e.imgProps)===null||l===void 0||l.src,i.value=!1});const P=b(!1);return go(De,{previewedImgPropsRef:me(e,"previewedImgProps")}),Object.assign({mergedClsPrefix:w,groupId:s==null?void 0:s.groupId,previewInstRef:u,imageRef:a,showError:i,shouldStartLoading:S,loaded:P,mergedOnClick:l=>{var c,v;O.click(),(v=(c=e.imgProps)===null||c===void 0?void 0:c.onClick)===null||v===void 0||v.call(c,l)},mergedOnError:l=>{if(!S.value)return;i.value=!0;const{onError:c,imgProps:{onError:v}={}}=e;c==null||c(l),v==null||v(l)},mergedOnLoad:l=>{const{onLoad:c,imgProps:{onLoad:v}={}}=e;c==null||c(l),v==null||v(l),P.value=!0}},O)},render(){var e,a;const{mergedClsPrefix:i,imgProps:u={},loaded:s,$attrs:w,lazy:O}=this,S=(a=(e=this.$slots).placeholder)===null||a===void 0?void 0:a.call(e),P=this.src||u.src,l=n("img",Object.assign(Object.assign({},u),{ref:"imageRef",width:this.width||u.width,height:this.height||u.height,src:this.showError?this.fallbackSrc:O&&this.intersectionObserverOptions?this.shouldStartLoading?P:void 0:P,alt:this.alt||u.alt,"aria-label":this.alt||u.alt,onClick:this.mergedOnClick,onError:this.mergedOnError,onLoad:this.mergedOnLoad,loading:qe&&O&&!this.intersectionObserverOptions?"lazy":"eager",style:[u.style||"",S&&!s?{height:"0",width:"0",visibility:"hidden"}:"",{objectFit:this.objectFit}],"data-error":this.showError,"data-preview-src":this.previewSrc||this.src}));return n("div",Object.assign({},w,{role:"none",class:[w.class,"".concat(i,"-image"),(this.previewDisabled||this.showError)&&"".concat(i,"-image--preview-disabled")]}),this.groupId?l:n(Mt,{theme:this.theme,themeOverrides:this.themeOverrides,clsPrefix:i,ref:"previewInstRef",showToolbar:this.showToolbar,showToolbarTooltip:this.showToolbarTooltip},{default:()=>l}),!s&&S)}});export{zt as _};
