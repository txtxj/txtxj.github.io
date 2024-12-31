System.register(["./index-legacy-uM9g0Om3.js"],(function(l,i){"use strict";var e,t,p;return{setters:[function(l){e=l.P,t=l.Q,p=l.ag}],execute:function(){var i={class:"md-blog m-auto text-left"},o=[p('<h2 id="%E5%AD%97%E8%8A%82%E7%BB%BF%E6%B4%B2-%E4%B8%80%E9%9D%A2%EF%BC%8840min%EF%BC%89" tabindex="-1"><a class="header-anchor" href="#%E5%AD%97%E8%8A%82%E7%BB%BF%E6%B4%B2-%E4%B8%80%E9%9D%A2%EF%BC%8840min%EF%BC%89" data-clickable=""><span>字节绿洲-一面（40min）</span></a></h2><p>字节跳动绿洲工作室，在做一款已经拿到版号，预计 23 年上线的游戏。用的是 UE4 。</p><p>第一次面试，面试前好紧张。面试过程心情逐渐放松了，但是回答不出来问题的时候还是好紧张。</p><p>面试问了挺多 C++ 11 的特性，今早刚好看了<a href="https://zhuanlan.zhihu.com/p/139515439" data-clickable="">这篇文章</a>，帮助很大。</p><p>面试问题：</p><ul><li>自我介绍。 <blockquote><p>一句话说了一下学习情况，然后主要介绍自己的项目。我主要讲了 GMTK 2022 的作品。讲了万向锁和信号量。后面面试官也问了一下万向锁和信号量。</p></blockquote></li><li>会不会 Lua ？ <blockquote><p>会一点。</p></blockquote></li><li>选语言 C++ 或者 C# 。 <blockquote><p>选了 C++ ，因为这两天看的面试题全是 C++ 。然后后面就完全没问 C# 。垃圾回收和 Monobehaviour 白看了。</p><p>不过毕竟人家项目组用的是 UE ，可能也不怎么想问 Unity 相关。</p></blockquote></li><li>static 的作用？ <blockquote><p>静态全局变量，静态局部变量，静态函数，静态数据成员，静态成员函数。</p></blockquote></li><li>静态全局变量存放在哪个区？ <blockquote><p>静态存储区。</p></blockquote></li><li>静态局部变量是类的话，什么时候初始化？ <blockquote><p>答了第一次运行到这里时初始化。面试官说可以，但是后来搜了一下疑似是根据编译器不同，初始化时机也不同。</p></blockquote></li><li>inline 的作用？ <blockquote><p>内联函数，暗示编译器内联，复杂结构不能内敛，有可能影响原函数性能。</p></blockquote></li><li>推断变量类型的两个关键词？怎么使用？能举出一个场景，只能使用后者才能解决吗？ <blockquote><p>auto 和 decltype ，今早刚看过。又答了一个 typeof ，面试官说 C++ 没有，但是后来试了一下是有的。</p><p>搜到的答案：容器迭代器类型推断必须用 decltype 。（因为容器传入的类型为 const 时，迭代器是 const_iterator 而非 iterator）</p></blockquote></li><li>nullptr 和 NULL 的区别？前者的优点？ <blockquote><p>NULL 是宏定义的 0 ，会被隐式转换为整数，不安全。</p></blockquote></li><li>面向对象的特征？你怎么理解类的多态（特地强调了一下不是运行时多态，但是我就只知道一个多态啊，哪来那么多区分）？ <blockquote><p>封装，继承，多态。</p><p>不会八股文，就讲了一下最近在学的设计模式里经常能用到的一个例子。</p><p>面试官说举的例子很好，但是能不能总结成一句话？有没有在网上搜过相关问题？有没有背过答案？我说不会，没背过。然后这个问题就过去了。</p><p>一句话总结：同一操作作用于不同的对象，可以有不同的解释，产生不同的执行结果，这就是多态性。</p></blockquote></li><li>虚函数。虚表在内存的哪里？构造函数内可以调用虚函数吗，析构函数呢？ <blockquote><p>虚表指针在实例首部。构造函数可以内调用虚函数，但只能调用基类虚函数。析构函数也是一样。但是析构函数本身往往是虚函数，被重写了就没影响。</p></blockquote></li><li>堆是什么？用什么存？怎么建堆？怎么插入？怎么删除？ <blockquote><p>自己翻书。</p></blockquote></li><li>如何在一个平面三角形中等概率地随机出一个点？ <blockquote><p>用两边作为基底构造一个二维线性空间，在这个空间中随机选点，再映射回去。</p></blockquote></li><li>反问环节。 <blockquote><p>实习生进去先写 Lua ，修 bug ，不会接触到 C++ 和 UE ，主要是学习。</p></blockquote></li></ul><p>答得不好，一周没通知，凉了。不过也学到了很重要的一点：别给自己挖坑，不会就直说。</p><h2 id="%E8%85%BE%E8%AE%AF%E9%AD%94%E6%96%B9-%E4%B8%80%E9%9D%A2%EF%BC%881h%EF%BC%89" tabindex="-1"><a class="header-anchor" href="#%E8%85%BE%E8%AE%AF%E9%AD%94%E6%96%B9-%E4%B8%80%E9%9D%A2%EF%BC%881h%EF%BC%89" data-clickable=""><span>腾讯魔方-一面（1h）</span></a></h2><p>面试官说他玩了一下我做的 Weigh The Dice ，觉得不错，吼吼吼。</p><ul><li>自我介绍。</li><li>问了一下做的几个项目相关的问题，这个问的比较多，耗时比较长。挑几个还记得住的问题列一下： <ul><li>在小组中具体做了什么贡献？</li><li>四元数的四个数字分别是什么含义？</li><li>四元数怎么插值？SLerp 、 NLerp 、 Lerp 的区别？</li><li>布料如何建模成弹簧质点系统？</li><li>布料模拟 cGPU 和 CPU 相比，性能提升如何？</li><li>AO 和 SSAO 的区别？知道 AO 的常用方法有哪些吗？</li><li>SSAO 如何处理斜着的平面？如何处理墙角？</li><li>计算管线流程？渲染管线流程？</li></ul></li><li>面试官似乎很喜欢问 Unity ，我说明了一下我比较熟悉 C++ ，于是开始问 C++ 了。</li><li>智能指针。 <blockquote><p>Q：智能指针有了解过吗？</p><p>A：了解，会写，但不常写。不过您要是问的话我也能答出来。</p><p>Q：那我不问了。</p></blockquote></li><li>虚函数、虚表相关。</li><li>手撕一个链表排序，刚写完还没调好，面试官不让调了，就讲了一下思路。</li><li>反问环节。 <blockquote><p>不透露面评结果。</p><p>实习生进去做未上线游戏的工具开发。</p></blockquote></li></ul><p>一面问了很多项目相关的内容，面试官看我做了几个图形学相关的项目，就一直在图形学方面问，答起来也比较舒服。</p><p>一个工作日后官网状态更新了，等了一个过年，终于给二面通知了。</p><h2 id="%E8%85%BE%E8%AE%AF%E9%AD%94%E6%96%B9-%E4%BA%8C%E9%9D%A2%EF%BC%8840min%EF%BC%89" tabindex="-1"><a class="header-anchor" href="#%E8%85%BE%E8%AE%AF%E9%AD%94%E6%96%B9-%E4%BA%8C%E9%9D%A2%EF%BC%8840min%EF%BC%89" data-clickable=""><span>腾讯魔方-二面（40min）</span></a></h2><ul><li>自我介绍。</li><li>两个代码题：最大区间和、删除最大的 N 个数。</li><li>C 语言编译过程？</li><li>了解 STL 吗？ map 和 unordered map 的区别？</li><li>内联函数？</li><li>判断两线段是否相交？</li><li>了解 DOTS 吗？了解 ECS 吗？</li><li>A star 算法？</li><li>反问环节。</li></ul><p>面试官人很好，答不出来的问题他都会给提示，在提示的帮助下都勉强答出来了。</p><p>面试官说岗位可能不太够，不过面评不错。</p><p>当晚流程变灰，第二天又绿了，看来是被捞了。</p><h2 id="%E8%85%BE%E8%AE%AF%E9%AD%94%E6%96%B9-hr%E9%9D%A2%EF%BC%8830min%EF%BC%89" tabindex="-1"><a class="header-anchor" href="#%E8%85%BE%E8%AE%AF%E9%AD%94%E6%96%B9-hr%E9%9D%A2%EF%BC%8830min%EF%BC%89" data-clickable=""><span>腾讯魔方-HR面（30min）</span></a></h2><ul><li>自我介绍。</li><li>讲一下做得最好的项目？</li><li>为什么想要做游戏开发？</li><li>成绩如何？</li><li>期望城市？</li><li>什么时候能入职？</li><li>反问环节。</li></ul><p>面完说一到两周内给回复。</p><hr><p>七个工作日后给了 OC ，说等两天发 offer 。</p>',22)];l("title","游戏客户端开发日常实习面经"),l("date","2023-01-03T09:05:58.000Z"),l("toc",!0),l("math","md"),l("tags",["笔记"]),l("cover","https://s2.loli.net/2023/01/17/tq9su6nQhEaZjMX.jpg"),l("default",{__name:"Interview",setup:function(l,p){return(0,p.expose)({frontmatter:{title:"游戏客户端开发日常实习面经",date:"2023-01-03T09:05:58.000Z",toc:!0,math:"md",tags:["笔记"],cover:"https://s2.loli.net/2023/01/17/tq9su6nQhEaZjMX.jpg"}}),function(l,p){return e(),t("div",i,o)}}})}}}));
