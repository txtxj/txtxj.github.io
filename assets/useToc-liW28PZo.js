import{r as n}from"./index-KTs1BggA.js";const a=n([]),o=n([]),s=n(!1);function c(t){a.value=t,l()}function l(){o.value=[];let t="9";for(let e of a.value)t>e.tagName[1]&&(t=e.tagName[1]);for(let e of a.value)o.value.push({id:e.id,text:e.innerText,tab:parseInt(e.tagName[1])-parseInt(t)})}function u(){return o}const f=()=>({setToc:c,getToc:u,enableToc:s});export{f as u};
