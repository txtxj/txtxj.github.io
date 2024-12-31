import{aa as r,P as z,Q as k,a0 as s,M as a,a7 as t,R as l}from"./index-_YeMFVQC.js";import{_ as M}from"./Image--s2EQ7fV.js";import"./utils-kXIbzceS.js";const P={class:"md-blog m-auto text-left"},E=s("p",null,"在经过模型、视图、投影变换后，待显示的所有物体都处在了一个标准正方体内。",-1),Q=s("p",null,"而光栅化的目的，就是把这个标准正方体内的物体转化为一个个像素点显示在屏幕上。",-1),A=s("h2",{id:"%E8%A7%86%E5%8F%A3%E5%8F%98%E6%8D%A2(viewpoint-transformation)",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#%E8%A7%86%E5%8F%A3%E5%8F%98%E6%8D%A2(viewpoint-transformation)","data-clickable":""},[s("span",null,"视口变换(Viewpoint Transformation)")])],-1),L=s("p",null,"屏幕中的每个像素点都可以使用一个整数坐标表示，每个像素点的边长为 1 ，",-1),B={class:"katex"},j={class:"katex-mathml"},C=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},")")])],-1),D={class:"katex"},N={class:"katex-mathml"},T=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8389em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},"0.5"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"0.5"),s("span",{class:"mclose"},")")])],-1),F={class:"katex"},V={class:"katex-mathml"},q=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"0"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"0"),s("span",{class:"mclose"},")")])],-1),G={class:"katex"},I={class:"katex-mathml"},S=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"0.5"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"0.5"),s("span",{class:"mclose"},")")])],-1),Z=s("p",null,"要将标准正方体变换到屏幕的矩形中，需要",-1),O=s("li",null,"无视 Z 坐标",-1),U={class:"katex"},X={class:"katex-mathml"},H=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"["),s("span",{class:"mord"},"0"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord text"},[s("span",{class:"mord"},"width")]),s("span",{class:"mclose"},"]"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"×"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"["),s("span",{class:"mord"},"0"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord text"},[s("span",{class:"mord"},"height")]),s("span",{class:"mclose"},"]")])],-1),R=s("p",null,"可以直接写出变换矩阵",-1),Y={class:"katex-display"},J={class:"katex"},K={class:"katex-mathml"},W=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9722em","vertical-align":"-0.2861em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathbf"},"M"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3361em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathbf mtight"},"viewpoint")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"8.5323em","vertical-align":"-4.0162em"}}),s("span",{class:"minner"},[s("span",{class:"mopen"},[s("span",{class:"delimsizing mult"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"4.4499em"}},[s("span",{style:{top:"-6.4499em"}},[s("span",{class:"pstrut",style:{height:"10.4em"}}),s("span",{style:{width:"0.875em",height:"8.400em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.875em",height:"8.400em",viewBox:"0 0 875 8400"},[s("path",{d:"M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1\nc-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,\n-36,557 l0,4884c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,\n949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9\nc0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,\n-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189\nl0,-4892c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,\n-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z"})])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"3.9501em"}},[s("span")])])])])]),s("span",{class:"mord"},[s("span",{class:"mtable"},[s("span",{class:"col-align-c"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"4.5162em"}},[s("span",{style:{top:"-6.6361em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8801em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord text mtight"},[s("span",{class:"mord mtight"},"width")])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])]),s("span",{style:{top:"-5.4361em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"})]),s("span",{style:{top:"-4.1438em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"0")])]),s("span",{style:{top:"-2.9438em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"})]),s("span",{style:{top:"-1.7438em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"0")])]),s("span",{style:{top:"-0.5438em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"})]),s("span",{style:{top:"0.6562em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"0")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"4.0162em"}},[s("span")])])])]),s("span",{class:"arraycolsep",style:{width:"0.5em"}}),s("span",{class:"arraycolsep",style:{width:"0.5em"}}),s("span",{class:"col-align-c"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"4.5162em"}},[s("span",{style:{top:"-6.6361em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"0")])]),s("span",{style:{top:"-4.1438em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.9322em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.4461em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord text mtight"},[s("span",{class:"mord mtight"},"height")])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])]),s("span",{style:{top:"-1.7438em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"0")])]),s("span",{style:{top:"0.6562em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"0")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"4.0162em"}},[s("span")])])])]),s("span",{class:"arraycolsep",style:{width:"0.5em"}}),s("span",{class:"arraycolsep",style:{width:"0.5em"}}),s("span",{class:"col-align-c"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"4.5162em"}},[s("span",{style:{top:"-6.6361em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"0")])]),s("span",{style:{top:"-4.1438em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"0")])]),s("span",{style:{top:"-1.7438em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"1")])]),s("span",{style:{top:"0.6562em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"0")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"4.0162em"}},[s("span")])])])]),s("span",{class:"arraycolsep",style:{width:"0.5em"}}),s("span",{class:"arraycolsep",style:{width:"0.5em"}}),s("span",{class:"col-align-c"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"4.5162em"}},[s("span",{style:{top:"-6.6361em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8801em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord text mtight"},[s("span",{class:"mord mtight"},"width")])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])]),s("span",{style:{top:"-4.1438em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.9322em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.4461em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord text mtight"},[s("span",{class:"mord mtight"},"height")])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])]),s("span",{style:{top:"-1.7438em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"0")])]),s("span",{style:{top:"0.6562em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"4.0162em"}},[s("span")])])])])])]),s("span",{class:"mclose"},[s("span",{class:"delimsizing mult"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"4.4499em"}},[s("span",{style:{top:"-6.4499em"}},[s("span",{class:"pstrut",style:{height:"10.4em"}}),s("span",{style:{width:"0.875em",height:"8.400em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.875em",height:"8.400em",viewBox:"0 0 875 8400"},[s("path",{d:"M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,\n63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5\nc11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,4809\nc-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664\nc-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11\nc0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17\nc242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558\nl0,-4944c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,\n-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z"})])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"3.9501em"}},[s("span")])])])])])])])],-1),$=s("h2",{id:"%E4%B8%89%E8%A7%92%E5%BD%A2%E5%85%89%E6%A0%85%E5%8C%96",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#%E4%B8%89%E8%A7%92%E5%BD%A2%E5%85%89%E6%A0%85%E5%8C%96","data-clickable":""},[s("span",null,"三角形光栅化")])],-1),ss=s("p",null,"由于三角形是最简单的多边形，任意的多边形也都可以拆分为若干个三角形，三角形光栅化也就是多边形光栅化的基础。",-1),as=s("p",null,"考虑任意一个给定三顶点坐标的三角形，该三角形唯一确定。想要在屏幕上显示这个三角形，可以判断屏幕中每个像素点是否在该三角形内部，这种方法被称为采样法。",-1),ls=s("p",null,"对于每个像素点，如果该像素点的中央位于三角形内部，那么这个点将被采用；如果位于外部，那么这个点不被采用。",-1),ts=s("p",null,"而判断一个像素点的中心是否在三角形内部，可以通过向量的叉积解决。",-1),es={class:"katex"},ns={class:"katex-mathml"},ps=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8778em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"0")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])],-1),is={class:"katex"},cs={class:"katex-mathml"},ms=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8778em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal"},"Q")])],-1),rs={class:"katex"},hs={class:"katex-mathml"},us=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"0")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"×"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8778em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"0")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord mathnormal"},"Q"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"×"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8778em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord mathnormal"},"Q"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"0")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"×"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8778em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord mathnormal"},"Q")])],-1),os={class:"katex"},ds={class:"katex-mathml"},gs=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8778em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal"},"Q")])],-1),_s={class:"katex"},fs={class:"katex-mathml"},ys=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8778em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal"},"Q")])],-1),vs=s("p",null,"特殊地，对于恰好落在三角形边界的像素点，可以统一规定采用或不采用，也可以设定更详细的规则来判断。",-1),Es="GAMES笔记03-光栅化",Qs="2021-12-29T19:13:15.000Z",As=!0,d="mathjax",Ls=["图形学","笔记"],Bs="https://s2.loli.net/2022/01/05/Lkz73Iro9D158ed.jpg",js=null,Cs={__name:"GAMESNote03",setup(xs,{expose:x}){return x({frontmatter:{title:"GAMES笔记03-光栅化",date:"2021-12-29T19:13:15.000Z",toc:!0,math:"mathjax",tags:["图形学","笔记"],cover:"https://s2.loli.net/2022/01/05/Lkz73Iro9D158ed.jpg",grow:null}}),(bs,zs)=>{const v=M,p=r("mo"),n=r("mi"),m=r("mrow"),u=r("annotation"),o=r("semantics"),g=r("eq"),e=r("mn"),f=r("mtext"),h=r("msub"),y=r("mfrac"),i=r("mstyle"),c=r("mtd"),_=r("mtr"),w=r("mtable"),b=r("eqn");return z(),k("div",P,[E,Q,A,L,s("p",null,[a(v,{src:"https://s2.loli.net/2022/01/04/nAB1h6CV97lvkNF.jpg",alt:"","show-toolbar-tooltip":""})]),s("p",null,[t("需要注意，坐标 "),a(g,null,{default:l(()=>[s("span",B,[s("span",j,[a(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:l(()=>[a(o,null,{default:l(()=>[a(m,null,{default:l(()=>[a(p,{stretchy:"false"},{default:l(()=>[t("(")]),_:1}),a(n,null,{default:l(()=>[t("x")]),_:1}),a(p,{separator:"true"},{default:l(()=>[t(",")]),_:1}),a(n,null,{default:l(()=>[t("y")]),_:1}),a(p,{stretchy:"false"},{default:l(()=>[t(")")]),_:1})]),_:1}),a(u,{encoding:"application/x-tex"},{default:l(()=>[t("(x, y)")]),_:1})]),_:1})]),_:1})]),C])]),_:1}),t(" 表示的像素点的中心位置实际应为 "),a(g,null,{default:l(()=>[s("span",D,[s("span",N,[a(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:l(()=>[a(o,null,{default:l(()=>[a(m,null,{default:l(()=>[a(p,{stretchy:"false"},{default:l(()=>[t("(")]),_:1}),a(n,null,{default:l(()=>[t("x")]),_:1}),a(p,null,{default:l(()=>[t("+")]),_:1}),a(e,null,{default:l(()=>[t("0.5")]),_:1}),a(p,{separator:"true"},{default:l(()=>[t(",")]),_:1}),a(n,null,{default:l(()=>[t("y")]),_:1}),a(p,null,{default:l(()=>[t("+")]),_:1}),a(e,null,{default:l(()=>[t("0.5")]),_:1}),a(p,{stretchy:"false"},{default:l(()=>[t(")")]),_:1})]),_:1}),a(u,{encoding:"application/x-tex"},{default:l(()=>[t("(x + 0.5, y + 0.5)")]),_:1})]),_:1})]),_:1})]),T])]),_:1})]),s("p",null,[t("例如，坐标为 "),a(g,null,{default:l(()=>[s("span",F,[s("span",V,[a(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:l(()=>[a(o,null,{default:l(()=>[a(m,null,{default:l(()=>[a(p,{stretchy:"false"},{default:l(()=>[t("(")]),_:1}),a(e,null,{default:l(()=>[t("0")]),_:1}),a(p,{separator:"true"},{default:l(()=>[t(",")]),_:1}),a(e,null,{default:l(()=>[t("0")]),_:1}),a(p,{stretchy:"false"},{default:l(()=>[t(")")]),_:1})]),_:1}),a(u,{encoding:"application/x-tex"},{default:l(()=>[t("(0, 0)")]),_:1})]),_:1})]),_:1})]),q])]),_:1}),t(" 的像素点中心位于 "),a(g,null,{default:l(()=>[s("span",G,[s("span",I,[a(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:l(()=>[a(o,null,{default:l(()=>[a(m,null,{default:l(()=>[a(p,{stretchy:"false"},{default:l(()=>[t("(")]),_:1}),a(e,null,{default:l(()=>[t("0.5")]),_:1}),a(p,{separator:"true"},{default:l(()=>[t(",")]),_:1}),a(e,null,{default:l(()=>[t("0.5")]),_:1}),a(p,{stretchy:"false"},{default:l(()=>[t(")")]),_:1})]),_:1}),a(u,{encoding:"application/x-tex"},{default:l(()=>[t("(0.5, 0.5)")]),_:1})]),_:1})]),_:1})]),S])]),_:1}),t(" 。")]),Z,s("ul",null,[O,s("li",null,[t("将坐标变换（缩放）到 "),a(g,null,{default:l(()=>[s("span",U,[s("span",X,[a(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:l(()=>[a(o,null,{default:l(()=>[a(m,null,{default:l(()=>[a(p,{stretchy:"false"},{default:l(()=>[t("[")]),_:1}),a(e,null,{default:l(()=>[t("0")]),_:1}),a(p,{separator:"true"},{default:l(()=>[t(",")]),_:1}),a(f,null,{default:l(()=>[t("width")]),_:1}),a(p,{stretchy:"false"},{default:l(()=>[t("]")]),_:1}),a(p,null,{default:l(()=>[t("×")]),_:1}),a(p,{stretchy:"false"},{default:l(()=>[t("[")]),_:1}),a(e,null,{default:l(()=>[t("0")]),_:1}),a(p,{separator:"true"},{default:l(()=>[t(",")]),_:1}),a(f,null,{default:l(()=>[t("height")]),_:1}),a(p,{stretchy:"false"},{default:l(()=>[t("]")]),_:1})]),_:1}),a(u,{encoding:"application/x-tex"},{default:l(()=>[t("[0, \\text{width}] \\times [0, \\text{height}]")]),_:1})]),_:1})]),_:1})]),H])]),_:1}),t(" 的区域中")])]),R,s("section",null,[a(b,null,{default:l(()=>[s("span",Y,[s("span",J,[s("span",K,[a(d,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:l(()=>[a(o,null,{default:l(()=>[a(m,null,{default:l(()=>[a(h,null,{default:l(()=>[a(n,{mathvariant:"bold"},{default:l(()=>[t("M")]),_:1}),a(m,null,{default:l(()=>[a(n,{mathvariant:"bold"},{default:l(()=>[t("v")]),_:1}),a(n,{mathvariant:"bold"},{default:l(()=>[t("i")]),_:1}),a(n,{mathvariant:"bold"},{default:l(()=>[t("e")]),_:1}),a(n,{mathvariant:"bold"},{default:l(()=>[t("w")]),_:1}),a(n,{mathvariant:"bold"},{default:l(()=>[t("p")]),_:1}),a(n,{mathvariant:"bold"},{default:l(()=>[t("o")]),_:1}),a(n,{mathvariant:"bold"},{default:l(()=>[t("i")]),_:1}),a(n,{mathvariant:"bold"},{default:l(()=>[t("n")]),_:1}),a(n,{mathvariant:"bold"},{default:l(()=>[t("t")]),_:1})]),_:1})]),_:1}),a(p,null,{default:l(()=>[t("=")]),_:1}),a(m,null,{default:l(()=>[a(p,{fence:"true"},{default:l(()=>[t("(")]),_:1}),a(w,{rowspacing:"0.16em",columnalign:"center center center center",columnspacing:"1em"},{default:l(()=>[a(_,null,{default:l(()=>[a(c,null,{default:l(()=>[a(i,{scriptlevel:"0",displaystyle:"false"},{default:l(()=>[a(y,null,{default:l(()=>[a(f,null,{default:l(()=>[t("width")]),_:1}),a(e,null,{default:l(()=>[t("2")]),_:1})]),_:1})]),_:1})]),_:1}),a(c,null,{default:l(()=>[a(i,{scriptlevel:"0",displaystyle:"false"},{default:l(()=>[a(e,null,{default:l(()=>[t("0")]),_:1})]),_:1})]),_:1}),a(c,null,{default:l(()=>[a(i,{scriptlevel:"0",displaystyle:"false"},{default:l(()=>[a(e,null,{default:l(()=>[t("0")]),_:1})]),_:1})]),_:1}),a(c,null,{default:l(()=>[a(i,{scriptlevel:"0",displaystyle:"false"},{default:l(()=>[a(y,null,{default:l(()=>[a(f,null,{default:l(()=>[t("width")]),_:1}),a(e,null,{default:l(()=>[t("2")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(_,null,{default:l(()=>[a(c,null,{default:l(()=>[a(i,{scriptlevel:"0",displaystyle:"false"},{default:l(()=>[a(m)]),_:1})]),_:1})]),_:1}),a(_,null,{default:l(()=>[a(c,null,{default:l(()=>[a(i,{scriptlevel:"0",displaystyle:"false"},{default:l(()=>[a(e,null,{default:l(()=>[t("0")]),_:1})]),_:1})]),_:1}),a(c,null,{default:l(()=>[a(i,{scriptlevel:"0",displaystyle:"false"},{default:l(()=>[a(y,null,{default:l(()=>[a(f,null,{default:l(()=>[t("height")]),_:1}),a(e,null,{default:l(()=>[t("2")]),_:1})]),_:1})]),_:1})]),_:1}),a(c,null,{default:l(()=>[a(i,{scriptlevel:"0",displaystyle:"false"},{default:l(()=>[a(e,null,{default:l(()=>[t("0")]),_:1})]),_:1})]),_:1}),a(c,null,{default:l(()=>[a(i,{scriptlevel:"0",displaystyle:"false"},{default:l(()=>[a(y,null,{default:l(()=>[a(f,null,{default:l(()=>[t("height")]),_:1}),a(e,null,{default:l(()=>[t("2")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(_,null,{default:l(()=>[a(c,null,{default:l(()=>[a(i,{scriptlevel:"0",displaystyle:"false"},{default:l(()=>[a(m)]),_:1})]),_:1})]),_:1}),a(_,null,{default:l(()=>[a(c,null,{default:l(()=>[a(i,{scriptlevel:"0",displaystyle:"false"},{default:l(()=>[a(e,null,{default:l(()=>[t("0")]),_:1})]),_:1})]),_:1}),a(c,null,{default:l(()=>[a(i,{scriptlevel:"0",displaystyle:"false"},{default:l(()=>[a(e,null,{default:l(()=>[t("0")]),_:1})]),_:1})]),_:1}),a(c,null,{default:l(()=>[a(i,{scriptlevel:"0",displaystyle:"false"},{default:l(()=>[a(e,null,{default:l(()=>[t("1")]),_:1})]),_:1})]),_:1}),a(c,null,{default:l(()=>[a(i,{scriptlevel:"0",displaystyle:"false"},{default:l(()=>[a(e,null,{default:l(()=>[t("0")]),_:1})]),_:1})]),_:1})]),_:1}),a(_,null,{default:l(()=>[a(c,null,{default:l(()=>[a(i,{scriptlevel:"0",displaystyle:"false"},{default:l(()=>[a(m)]),_:1})]),_:1})]),_:1}),a(_,null,{default:l(()=>[a(c,null,{default:l(()=>[a(i,{scriptlevel:"0",displaystyle:"false"},{default:l(()=>[a(e,null,{default:l(()=>[t("0")]),_:1})]),_:1})]),_:1}),a(c,null,{default:l(()=>[a(i,{scriptlevel:"0",displaystyle:"false"},{default:l(()=>[a(e,null,{default:l(()=>[t("0")]),_:1})]),_:1})]),_:1}),a(c,null,{default:l(()=>[a(i,{scriptlevel:"0",displaystyle:"false"},{default:l(()=>[a(e,null,{default:l(()=>[t("0")]),_:1})]),_:1})]),_:1}),a(c,null,{default:l(()=>[a(i,{scriptlevel:"0",displaystyle:"false"},{default:l(()=>[a(e,null,{default:l(()=>[t("1")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(p,{fence:"true"},{default:l(()=>[t(")")]),_:1})]),_:1})]),_:1}),a(u,{encoding:"application/x-tex"},{default:l(()=>[t(" \\mathbf{M_{viewpoint}} = \\begin{pmatrix} \\frac{\\text{width}}{2} & 0 & 0 & \\frac{\\text{width}}{2} \\\\\\\\ 0 & \\frac{\\text{height}}{2} & 0 & \\frac{\\text{height}}{2} \\\\\\\\ 0 & 0 & 1 & 0 \\\\\\\\ 0 & 0 & 0 & 1 \\end{pmatrix} ")]),_:1})]),_:1})]),_:1})]),W])])]),_:1})]),$,ss,as,s("p",null,[a(v,{src:"https://s2.loli.net/2022/01/04/OisGBj4mHNIUTX5.jpg",alt:"","show-toolbar-tooltip":""})]),ls,ts,s("p",null,[a(v,{src:"https://s2.loli.net/2022/01/04/yYsmfU59cOPCXTI.jpg",alt:"","show-toolbar-tooltip":""})]),s("p",null,[t("已知三角形的三顶点坐标 "),a(g,null,{default:l(()=>[s("span",es,[s("span",ns,[a(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:l(()=>[a(o,null,{default:l(()=>[a(m,null,{default:l(()=>[a(h,null,{default:l(()=>[a(n,null,{default:l(()=>[t("P")]),_:1}),a(e,null,{default:l(()=>[t("0")]),_:1})]),_:1}),a(p,{separator:"true"},{default:l(()=>[t(",")]),_:1}),a(h,null,{default:l(()=>[a(n,null,{default:l(()=>[t("P")]),_:1}),a(e,null,{default:l(()=>[t("1")]),_:1})]),_:1}),a(p,{separator:"true"},{default:l(()=>[t(",")]),_:1}),a(h,null,{default:l(()=>[a(n,null,{default:l(()=>[t("P")]),_:1}),a(e,null,{default:l(()=>[t("2")]),_:1})]),_:1})]),_:1}),a(u,{encoding:"application/x-tex"},{default:l(()=>[t("P_0, P_1, P_2")]),_:1})]),_:1})]),_:1})]),ps])]),_:1}),t(" ，以及需要判断的像素点中心坐标 "),a(g,null,{default:l(()=>[s("span",is,[s("span",cs,[a(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:l(()=>[a(o,null,{default:l(()=>[a(m,null,{default:l(()=>[a(n,null,{default:l(()=>[t("Q")]),_:1})]),_:1}),a(u,{encoding:"application/x-tex"},{default:l(()=>[t("Q")]),_:1})]),_:1})]),_:1})]),ms])]),_:1}),t(" ，")]),s("p",null,[t("可以通过计算 "),a(g,null,{default:l(()=>[s("span",rs,[s("span",hs,[a(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:l(()=>[a(o,null,{default:l(()=>[a(m,null,{default:l(()=>[a(h,null,{default:l(()=>[a(n,null,{default:l(()=>[t("P")]),_:1}),a(e,null,{default:l(()=>[t("0")]),_:1})]),_:1}),a(h,null,{default:l(()=>[a(n,null,{default:l(()=>[t("P")]),_:1}),a(e,null,{default:l(()=>[t("1")]),_:1})]),_:1}),a(p,null,{default:l(()=>[t("×")]),_:1}),a(h,null,{default:l(()=>[a(n,null,{default:l(()=>[t("P")]),_:1}),a(e,null,{default:l(()=>[t("0")]),_:1})]),_:1}),a(n,null,{default:l(()=>[t("Q")]),_:1}),a(p,{separator:"true"},{default:l(()=>[t(",")]),_:1}),a(h,null,{default:l(()=>[a(n,null,{default:l(()=>[t("P")]),_:1}),a(e,null,{default:l(()=>[t("1")]),_:1})]),_:1}),a(h,null,{default:l(()=>[a(n,null,{default:l(()=>[t("P")]),_:1}),a(e,null,{default:l(()=>[t("2")]),_:1})]),_:1}),a(p,null,{default:l(()=>[t("×")]),_:1}),a(h,null,{default:l(()=>[a(n,null,{default:l(()=>[t("P")]),_:1}),a(e,null,{default:l(()=>[t("1")]),_:1})]),_:1}),a(n,null,{default:l(()=>[t("Q")]),_:1}),a(p,{separator:"true"},{default:l(()=>[t(",")]),_:1}),a(h,null,{default:l(()=>[a(n,null,{default:l(()=>[t("P")]),_:1}),a(e,null,{default:l(()=>[t("2")]),_:1})]),_:1}),a(h,null,{default:l(()=>[a(n,null,{default:l(()=>[t("P")]),_:1}),a(e,null,{default:l(()=>[t("0")]),_:1})]),_:1}),a(p,null,{default:l(()=>[t("×")]),_:1}),a(h,null,{default:l(()=>[a(n,null,{default:l(()=>[t("P")]),_:1}),a(e,null,{default:l(()=>[t("2")]),_:1})]),_:1}),a(n,null,{default:l(()=>[t("Q")]),_:1})]),_:1}),a(u,{encoding:"application/x-tex"},{default:l(()=>[t("P_0 P_1 \\times P_0 Q, P_1 P_2 \\times P_1 Q, P_2 P_0 \\times P_2 Q")]),_:1})]),_:1})]),_:1})]),us])]),_:1}),t(" ，判断三者结果是否同号，若结果同号，则 "),a(g,null,{default:l(()=>[s("span",os,[s("span",ds,[a(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:l(()=>[a(o,null,{default:l(()=>[a(m,null,{default:l(()=>[a(n,null,{default:l(()=>[t("Q")]),_:1})]),_:1}),a(u,{encoding:"application/x-tex"},{default:l(()=>[t("Q")]),_:1})]),_:1})]),_:1})]),gs])]),_:1}),t(" 点一定位于三角形内部，否则 "),a(g,null,{default:l(()=>[s("span",_s,[s("span",fs,[a(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:l(()=>[a(o,null,{default:l(()=>[a(m,null,{default:l(()=>[a(n,null,{default:l(()=>[t("Q")]),_:1})]),_:1}),a(u,{encoding:"application/x-tex"},{default:l(()=>[t("Q")]),_:1})]),_:1})]),_:1})]),ys])]),_:1}),t(" 点位于三角形外部。")]),vs])}}};export{Bs as cover,Qs as date,Cs as default,js as grow,d as math,Ls as tags,Es as title,As as toc};
