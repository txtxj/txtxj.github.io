!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){s=!0,a=e},f:function(){try{u||null==n.return||n.return()}finally{if(s)throw a}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(t,r){for(var n=0;n<r.length;n++){var i=r[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(o=i.key,a=void 0,a=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,r||"default");if("object"!==e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(o,"string"),"symbol"===e(a)?a:String(a)),i)}var o,a}function o(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}System.register(["./index-legacy-XuNBSaRB.js","./Divider-legacy-Iv5tN5hD.js"],(function(e,r){"use strict";var i,a,u,s,l,c,f,h,d,v,m,g,y,p,w,C,E,M,R,b,k,A,N,S,P,I,_,x,z,B,O;return{setters:[function(e){i=e.d,a=e.u,u=e.m,s=e.au,l=e.l,c=e.n,f=e.aY,h=e.aZ,d=e.a_,v=e.h,m=e.f,g=e.e,y=e.c,p=e.o,w=e.r,C=e.q,E=e.w,M=e.a9,R=e.P,b=e.Q,k=e.a0,A=e.M,N=e.R,S=e.a7,P=e.T,I=e._,_=e.a3,x=e.a8,z=e.a$,B=e.a1},function(e){O=e._}],execute:function(){var r,F={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},L={name:"Flex",self:function(){return F}},T=Object.assign(Object.assign({},u.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrap:{type:Boolean,default:!0}}),D=i({name:"Flex",props:T,setup:function(e){var t=a(e),r=t.mergedClsPrefixRef,n=t.mergedRtlRef,i=u("Flex","-flex",void 0,L,e,r);return{rtlEnabled:s("Flex",n,r),mergedClsPrefix:r,margin:l((function(){var t=e.size;if(Array.isArray(t))return{horizontal:t[0],vertical:t[1]};if("number"==typeof t)return{horizontal:t,vertical:t};var r=i.value.self[c("gap",t)],n=f(r),o=n.row,a=n.col;return{horizontal:h(a),vertical:h(o)}}))}},render:function(){var e=this.vertical,t=this.reverse,r=this.align,n=this.inline,i=this.justify,o=this.margin,a=this.wrap,u=this.mergedClsPrefix,s=this.rtlEnabled,l=d(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=e.$slots[t];return void 0===n?r:n()}(this),!1);return l.length?v("div",{role:"none",class:["".concat(u,"-flex"),s&&"".concat(u,"-flex--rtl")],style:{display:n?"inline-flex":"flex",flexDirection:e&&!t?"column":e&&t?"column-reverse":!e&&t?"row-reverse":"row",justifyContent:i,flexWrap:!a||e?"nowrap":"wrap",alignItems:r,gap:"".concat(o.vertical,"px ").concat(o.horizontal,"px")}},l):null}}),H=m([g("qr-code","\n background: #fff;\n border-radius: var(--n-border-radius);\n display: inline-flex;\n ")]),U={name:"QrCode",common:y,self:function(e){return{borderRadius:e.borderRadius}}};!function(e){var r=function(){function r(e,t,i,o){if(n(this,r),this.version=e,this.errorCorrectionLevel=t,this.modules=[],this.isFunction=[],e<r.MIN_VERSION||e>r.MAX_VERSION)throw new RangeError("Version value out of range");if(o<-1||o>7)throw new RangeError("Mask value out of range");this.size=4*e+17;for(var a=[],u=0;u<this.size;u++)a.push(!1);for(var s=0;s<this.size;s++)this.modules.push(a.slice()),this.isFunction.push(a.slice());this.drawFunctionPatterns();var l=this.addEccAndInterleave(i);if(this.drawCodewords(l),-1===o)for(var c=1e9,f=0;f<8;f++){this.applyMask(f),this.drawFormatBits(f);var h=this.getPenaltyScore();h<c&&(o=f,c=h),this.applyMask(f)}this.mask=o,this.applyMask(o),this.drawFormatBits(o),this.isFunction=[]}return o(r,[{key:"getModule",value:function(e,t){return e>=0&&e<this.size&&t>=0&&t<this.size&&this.modules[t][e]}},{key:"drawFunctionPatterns",value:function(){for(var e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);for(var t=this.getAlignmentPatternPositions(),r=t.length,n=0;n<r;n++)for(var i=0;i<r;i++)0===n&&0===i||0===n&&i===r-1||n===r-1&&0===i||this.drawAlignmentPattern(t[n],t[i]);this.drawFormatBits(0),this.drawVersion()}},{key:"drawFormatBits",value:function(e){for(var t=this.errorCorrectionLevel.formatBits<<3|e,r=t,n=0;n<10;n++)r=r<<1^1335*(r>>>9);for(var i=21522^(t<<10|r),o=0;o<=5;o++)this.setFunctionModule(8,o,a(i,o));this.setFunctionModule(8,7,a(i,6)),this.setFunctionModule(8,8,a(i,7)),this.setFunctionModule(7,8,a(i,8));for(var u=9;u<15;u++)this.setFunctionModule(14-u,8,a(i,u));for(var s=0;s<8;s++)this.setFunctionModule(this.size-1-s,8,a(i,s));for(var l=8;l<15;l++)this.setFunctionModule(8,this.size-15+l,a(i,l));this.setFunctionModule(8,this.size-8,!0)}},{key:"drawVersion",value:function(){if(!(this.version<7)){for(var e=this.version,t=0;t<12;t++)e=e<<1^7973*(e>>>11);for(var r=this.version<<12|e,n=0;n<18;n++){var i=a(r,n),o=this.size-11+n%3,u=Math.floor(n/3);this.setFunctionModule(o,u,i),this.setFunctionModule(u,o,i)}}}},{key:"drawFinderPattern",value:function(e,t){for(var r=-4;r<=4;r++)for(var n=-4;n<=4;n++){var i=Math.max(Math.abs(n),Math.abs(r)),o=e+n,a=t+r;o>=0&&o<this.size&&a>=0&&a<this.size&&this.setFunctionModule(o,a,2!==i&&4!==i)}}},{key:"drawAlignmentPattern",value:function(e,t){for(var r=-2;r<=2;r++)for(var n=-2;n<=2;n++)this.setFunctionModule(e+n,t+r,1!==Math.max(Math.abs(n),Math.abs(r)))}},{key:"setFunctionModule",value:function(e,t,r){this.modules[t][e]=r,this.isFunction[t][e]=!0}},{key:"addEccAndInterleave",value:function(e){var t=this.version,n=this.errorCorrectionLevel;if(e.length!==r.getNumDataCodewords(t,n))throw new RangeError("Invalid argument");for(var i=r.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][t],o=r.ECC_CODEWORDS_PER_BLOCK[n.ordinal][t],a=Math.floor(r.getNumRawDataModules(t)/8),u=i-a%i,s=Math.floor(a/i),l=[],c=r.reedSolomonComputeDivisor(o),f=0,h=0;f<i;f++){var d=e.slice(h,h+s-o+(f<u?0:1));h+=d.length;var v=r.reedSolomonComputeRemainder(d,c);f<u&&d.push(0),l.push(d.concat(v))}for(var m=[],g=function(e){l.forEach((function(t,r){(e!==s-o||r>=u)&&m.push(t[e])}))},y=0;y<l[0].length;y++)g(y);return m}},{key:"drawCodewords",value:function(e){if(e.length!==Math.floor(r.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var t=0,n=this.size-1;n>=1;n-=2){6===n&&(n=5);for(var i=0;i<this.size;i++)for(var o=0;o<2;o++){var u=n-o,s=0==(n+1&2)?this.size-1-i:i;!this.isFunction[s][u]&&t<8*e.length&&(this.modules[s][u]=a(e[t>>>3],7-(7&t)),t++)}}}},{key:"applyMask",value:function(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(var t=0;t<this.size;t++)for(var r=0;r<this.size;r++){var n=void 0;switch(e){case 0:n=(r+t)%2==0;break;case 1:n=t%2==0;break;case 2:n=r%3==0;break;case 3:n=(r+t)%3==0;break;case 4:n=(Math.floor(r/3)+Math.floor(t/2))%2==0;break;case 5:n=r*t%2+r*t%3==0;break;case 6:n=(r*t%2+r*t%3)%2==0;break;case 7:n=((r+t)%2+r*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][r]&&n&&(this.modules[t][r]=!this.modules[t][r])}}},{key:"getPenaltyScore",value:function(){for(var e=0,n=0;n<this.size;n++){for(var i=!1,o=0,a=[0,0,0,0,0,0,0],u=0;u<this.size;u++)this.modules[n][u]===i?5===++o?e+=r.PENALTY_N1:o>5&&e++:(this.finderPenaltyAddHistory(o,a),i||(e+=this.finderPenaltyCountPatterns(a)*r.PENALTY_N3),i=this.modules[n][u],o=1);e+=this.finderPenaltyTerminateAndCount(i,o,a)*r.PENALTY_N3}for(var s=0;s<this.size;s++){for(var l=!1,c=0,f=[0,0,0,0,0,0,0],h=0;h<this.size;h++)this.modules[h][s]===l?5===++c?e+=r.PENALTY_N1:c>5&&e++:(this.finderPenaltyAddHistory(c,f),l||(e+=this.finderPenaltyCountPatterns(f)*r.PENALTY_N3),l=this.modules[h][s],c=1);e+=this.finderPenaltyTerminateAndCount(l,c,f)*r.PENALTY_N3}for(var d=0;d<this.size-1;d++)for(var v=0;v<this.size-1;v++){var m=this.modules[d][v];m===this.modules[d][v+1]&&m===this.modules[d+1][v]&&m===this.modules[d+1][v+1]&&(e+=r.PENALTY_N2)}var g,y=0,p=t(this.modules);try{for(p.s();!(g=p.n()).done;){y=g.value.reduce((function(e,t){return e+(t?1:0)}),y)}}catch(C){p.e(C)}finally{p.f()}var w=this.size*this.size;return e+=(Math.ceil(Math.abs(20*y-10*w)/w)-1)*r.PENALTY_N4}},{key:"getAlignmentPatternPositions",value:function(){if(1===this.version)return[];for(var e=Math.floor(this.version/7)+2,t=32===this.version?26:2*Math.ceil((4*this.version+4)/(2*e-2)),r=[6],n=this.size-7;r.length<e;n-=t)r.splice(1,0,n);return r}},{key:"finderPenaltyCountPatterns",value:function(e){var t=e[1],r=t>0&&e[2]===t&&e[3]===3*t&&e[4]===t&&e[5]===t;return(r&&e[0]>=4*t&&e[6]>=t?1:0)+(r&&e[6]>=4*t&&e[0]>=t?1:0)}},{key:"finderPenaltyTerminateAndCount",value:function(e,t,r){return e&&(this.finderPenaltyAddHistory(t,r),t=0),t+=this.size,this.finderPenaltyAddHistory(t,r),this.finderPenaltyCountPatterns(r)}},{key:"finderPenaltyAddHistory",value:function(e,t){0===t[0]&&(e+=this.size),t.pop(),t.unshift(e)}}],[{key:"encodeText",value:function(t,n){var i=e.QrSegment.makeSegments(t);return r.encodeSegments(i,n)}},{key:"encodeBinary",value:function(t,n){var i=e.QrSegment.makeBytes(t);return r.encodeSegments([i],n)}},{key:"encodeSegments",value:function(e,n){var o,a,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:40,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,f=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];if(!(r.MIN_VERSION<=s&&s<=l&&l<=r.MAX_VERSION)||c<-1||c>7)throw new RangeError("Invalid value");for(o=s;;o++){var h=8*r.getNumDataCodewords(o,n),d=u.getTotalBits(e,o);if(d<=h){a=d;break}if(o>=l)throw new RangeError("Data too long")}for(var v=0,m=[r.Ecc.MEDIUM,r.Ecc.QUARTILE,r.Ecc.HIGH];v<m.length;v++){var g=m[v];f&&a<=8*r.getNumDataCodewords(o,g)&&(n=g)}var y,p=[],w=t(e);try{for(w.s();!(y=w.n()).done;){var C=y.value;i(C.mode.modeBits,4,p),i(C.numChars,C.mode.numCharCountBits(o),p);var E,M=t(C.getData());try{for(M.s();!(E=M.n()).done;){var R=E.value;p.push(R)}}catch(N){M.e(N)}finally{M.f()}}}catch(N){w.e(N)}finally{w.f()}var b=8*r.getNumDataCodewords(o,n);i(0,Math.min(4,b-p.length),p),i(0,(8-p.length%8)%8,p);for(var k=236;p.length<b;k^=253)i(k,8,p);for(var A=[];8*A.length<p.length;)A.push(0);return p.forEach((function(e,t){return A[t>>>3]|=e<<7-(7&t)})),new r(o,n,A,c)}},{key:"getNumRawDataModules",value:function(e){if(e<r.MIN_VERSION||e>r.MAX_VERSION)throw new RangeError("Version number out of range");var t=(16*e+128)*e+64;if(e>=2){var n=Math.floor(e/7)+2;t-=(25*n-10)*n-55,e>=7&&(t-=36)}return t}},{key:"getNumDataCodewords",value:function(e,t){return Math.floor(r.getNumRawDataModules(e)/8)-r.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e]*r.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]}},{key:"reedSolomonComputeDivisor",value:function(e){if(e<1||e>255)throw new RangeError("Degree out of range");for(var t=[],n=0;n<e-1;n++)t.push(0);t.push(1);for(var i=1,o=0;o<e;o++){for(var a=0;a<t.length;a++)t[a]=r.reedSolomonMultiply(t[a],i),a+1<t.length&&(t[a]^=t[a+1]);i=r.reedSolomonMultiply(i,2)}return t}},{key:"reedSolomonComputeRemainder",value:function(e,n){var i,o=n.map((function(e){return 0})),a=t(e);try{var u=function(){var e=i.value^o.shift();o.push(0),n.forEach((function(t,n){return o[n]^=r.reedSolomonMultiply(t,e)}))};for(a.s();!(i=a.n()).done;)u()}catch(s){a.e(s)}finally{a.f()}return o}},{key:"reedSolomonMultiply",value:function(e,t){if(e>>>8!=0||t>>>8!=0)throw new RangeError("Byte out of range");for(var r=0,n=7;n>=0;n--)r=r<<1^285*(r>>>7),r^=(t>>>n&1)*e;return r}}]),r}();function i(e,t,r){if(t<0||t>31||e>>>t!=0)throw new RangeError("Value out of range");for(var n=t-1;n>=0;n--)r.push(e>>>n&1)}function a(e,t){return 0!=(e>>>t&1)}r.MIN_VERSION=1,r.MAX_VERSION=40,r.PENALTY_N1=3,r.PENALTY_N2=3,r.PENALTY_N3=40,r.PENALTY_N4=10,r.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],r.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=r;var u=function(){function e(t,r,i){if(n(this,e),this.mode=t,this.numChars=r,this.bitData=i,r<0)throw new RangeError("Invalid argument");this.bitData=i.slice()}return o(e,[{key:"getData",value:function(){return this.bitData.slice()}}],[{key:"makeBytes",value:function(r){var n,o=[],a=t(r);try{for(a.s();!(n=a.n()).done;){i(n.value,8,o)}}catch(u){a.e(u)}finally{a.f()}return new e(e.Mode.BYTE,r.length,o)}},{key:"makeNumeric",value:function(t){if(!e.isNumeric(t))throw new RangeError("String contains non-numeric characters");for(var r=[],n=0;n<t.length;){var o=Math.min(t.length-n,3);i(parseInt(t.substr(n,o),10),3*o+1,r),n+=o}return new e(e.Mode.NUMERIC,t.length,r)}},{key:"makeAlphanumeric",value:function(t){if(!e.isAlphanumeric(t))throw new RangeError("String contains unencodable characters in alphanumeric mode");var r,n=[];for(r=0;r+2<=t.length;r+=2){var o=45*e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r));i(o+=e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r+1)),11,n)}return r<t.length&&i(e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r)),6,n),new e(e.Mode.ALPHANUMERIC,t.length,n)}},{key:"makeSegments",value:function(t){return""===t?[]:e.isNumeric(t)?[e.makeNumeric(t)]:e.isAlphanumeric(t)?[e.makeAlphanumeric(t)]:[e.makeBytes(e.toUtf8ByteArray(t))]}},{key:"makeEci",value:function(t){var r=[];if(t<0)throw new RangeError("ECI assignment value out of range");if(t<128)i(t,8,r);else if(t<16384)i(2,2,r),i(t,14,r);else{if(!(t<1e6))throw new RangeError("ECI assignment value out of range");i(6,3,r),i(t,21,r)}return new e(e.Mode.ECI,0,r)}},{key:"isNumeric",value:function(t){return e.NUMERIC_REGEX.test(t)}},{key:"isAlphanumeric",value:function(t){return e.ALPHANUMERIC_REGEX.test(t)}},{key:"getTotalBits",value:function(e,r){var n,i=0,o=t(e);try{for(o.s();!(n=o.n()).done;){var a=n.value,u=a.mode.numCharCountBits(r);if(a.numChars>=1<<u)return 1/0;i+=4+u+a.bitData.length}}catch(s){o.e(s)}finally{o.f()}return i}},{key:"toUtf8ByteArray",value:function(e){e=encodeURI(e);for(var t=[],r=0;r<e.length;r++)"%"!==e.charAt(r)?t.push(e.charCodeAt(r)):(t.push(parseInt(e.substr(r+1,2),16)),r+=2);return t}}]),e}();u.NUMERIC_REGEX=/^[0-9]*$/,u.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+./:-]*$/,u.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",e.QrSegment=u}(r||(r={})),function(e){var t,r;t=e.QrCode||(e.QrCode={}),(r=o((function e(t,r){n(this,e),this.ordinal=t,this.formatBits=r}))).LOW=new r(0,1),r.MEDIUM=new r(1,0),r.QUARTILE=new r(2,3),r.HIGH=new r(3,2),t.Ecc=r}(r||(r={})),function(e){var t,r;t=e.QrSegment||(e.QrSegment={}),(r=function(){function e(t,r){n(this,e),this.modeBits=t,this.numBitsCharCount=r}return o(e,[{key:"numCharCountBits",value:function(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}}]),e}()).NUMERIC=new r(1,[10,12,14]),r.ALPHANUMERIC=new r(2,[9,11,13]),r.BYTE=new r(4,[8,16,16]),r.KANJI=new r(8,[8,10,12]),r.ECI=new r(7,[0,0,0]),t.Mode=r}(r||(r={}));var Q=r,V={L:Q.QrCode.Ecc.LOW,M:Q.QrCode.Ecc.MEDIUM,Q:Q.QrCode.Ecc.QUARTILE,H:Q.QrCode.Ecc.HIGH},j=Object.assign(Object.assign({},u.props),{value:String,color:{type:String,default:"#000"},backgroundColor:{type:String,default:"#FFF"},iconSrc:String,iconSize:{type:Number,default:40},iconBackgroundColor:{type:String,default:"#FFF"},iconBorderRadius:{type:Number,default:4},size:{type:Number,default:100},padding:{type:[Number,String],default:12},errorCorrectionLevel:{type:String,default:"M"}}),Y=i({name:"QrCode",props:j,setup:function(e){var t=a(e),r=t.mergedClsPrefixRef,n=t.inlineThemeDisabled,i=u("QrCode","-qr-code",H,U,e,r),o=l((function(){return{"--n-border-radius":i.value.self.borderRadius}})),s=n?p("qr-code",void 0,o,e):void 0,c=w(),f=l((function(){var t,r=V[e.errorCorrectionLevel];return Q.QrCode.encodeText(null!==(t=e.value)&&void 0!==t?t:"-",r)}));return C((function(){var t=w(0),r=null;E((function(){t.value,function(e,t,r,n,i){var o=c.value;if(!o)return;var a=2*t,u=e.size,s=a/u;o.width=a,o.height=a;var l=o.getContext("2d");if(!l)return;l.clearRect(0,0,o.width,o.height);for(var f=0;f<e.size;f++)for(var h=0;h<e.size;h++){l.fillStyle=e.getModule(h,f)?r:n;var d=Math.floor(h*s),v=Math.ceil((h+1)*s),m=Math.floor(f*s),g=Math.ceil((f+1)*s);l.fillRect(d,m,v-d,g-m)}if(i){var y=i.icon,p=i.iconBackgroundColor,w=i.iconBorderRadius,C=2*i.iconSize,E=(o.width-C)/2,M=(o.height-C)/2;l.fillStyle=p,l.beginPath(),l.roundRect(E,M,C,C,2*w),l.fill();var R=y.width/y.height,b=R>=1?C:C*R,k=R<=1?C:C/R,A=E+(C-b)/2,N=M+(C-k)/2;l.drawImage(y,A,N,b,k)}}(f.value,e.size,e.color,e.backgroundColor,r?{icon:r,iconBorderRadius:e.iconBorderRadius,iconSize:e.iconSize,iconBackgroundColor:e.iconBackgroundColor}:null)})),E((function(){var n=e.iconSrc;if(n){var i=!1,o=new Image;return o.src=n,o.onload=function(){i||(r=o,t.value++)},function(){i=!0}}}))})),{canvasRef:c,mergedClsPrefix:r,cssVars:n?void 0:o,themeClass:null==s?void 0:s.themeClass}},render:function(){var e=this.mergedClsPrefix,t=this.backgroundColor,r=this.padding,n=this.cssVars,i=this.themeClass,o=this.size;return v("div",{class:["".concat(e,"-qr-code"),i],style:Object.assign({padding:"number"==typeof r?"".concat(r,"px"):r,backgroundColor:t,width:"".concat(o,"px"),height:"".concat(o,"px")},n)},v("canvas",{ref:"canvasRef",style:{width:"".concat(o,"px"),height:"".concat(o,"px")}}))}}),X={class:"md-blog m-auto text-left"},G=k("p",null,"从 19 年第一次接触到 Hexo 之后，我就非常喜欢折腾博客。",-1),K=k("p",null,"期间尝试了 Hexo、WordPress、Hogo 等框架，但并没有深入学习，仅仅会改个主题、加点五毛钱特效。",-1),W=k("p",null,"所以，我经常会感到博客的客制化程度不尽人意，但又没有办法。",-1),$=k("p",null,"我一直觉得前端很有趣，但一转眼四年过去了，我却一直没有系统地学习前端。",-1),q=k("p",null,"但好在这几年来打比赛、折腾博客、写爬虫之类的经历让我的前端基础不算差，学习 Vue 需要的前置知识点我差不多都掌握了。",-1),Z=k("p",null,"正巧，大四最不缺的就是闲时间了，遂决定把留了四年的前端学习坑补一补，用 Vue 自建了这么一个博客出来。",-1),J=k("p",null,[S("这个项目参考了 "),k("a",{href:"https://github.com/liuly0322/Q-Blog","data-clickable":""},"Q-Blog"),S("，我觉得它很适合初学者去模仿学习。")],-1),ee=k("p",null,"费了老大劲，把 Markdown 内容都改成动态加载的了。完全舍弃 v-html 的好处是可以随意在 Markdown 文件中使用 Vue 组件了",-1),te=k("p",null,"比如：",-1),re={key:0},ne=k("p",null,"同时，这要求 Markdown 文件不能在本地解析为 HTML 后再导入 Vue 组件中，而是使用动态 import 将 Markdown 原文作为 Vue 组件导入。",-1),ie=k("p",null,"因此，我的所有博客的原文都是开源的，你可以直接在根目录下的 dynamic 文件夹中找到对应的 Markdown 文件。",-1);e("default",{__name:"VueBlog",setup:function(e,t){(0,t.expose)({frontmatter:{}});var r=w("在虚构的故事当中寻求真实感的人脑袋一定有问题"),n=x().isMobile;return C((function(){return M(".n-input, input")})),function(e,t){var i=O,o=Y,a=z,u=D,s=B;return R(),b("div",X,[G,K,W,$,q,Z,J,k("p",null,[k("em",null,[A(i,{"title-placement":"right",style:{"font-size":"0.8rem"}},{default:N((function(){return[S("新建文件夹于 2023 年 11 月 23 日")]})),_:1})])]),ee,te,A(s,{size:"small",style:I("".concat(P(n)?"":"min-width: 500px;"," width: 60%; margin: auto")),hoverable:""},{default:N((function(){return[A(u,{vertical:P(n),align:P(n)?"center":"undefined"},{default:N((function(){return[A(o,{value:r.value,style:I(P(n)?"":"max-width:25%")},null,8,["value","style"]),A(u,{vertical:"",style:{width:"65%"}},{default:N((function(){return[P(n)?_("",!0):(R(),b("h2",re,"二维码生成")),A(a,{value:r.value,"onUpdate:value":t[0]||(t[0]=function(e){return r.value=e}),maxlength:30,type:P(n)?"textarea":"text"},null,8,["value","type"])]})),_:1})]})),_:1},8,["vertical","align"])]})),_:1},8,["style"]),ne,ie])}}})}}}))}();
