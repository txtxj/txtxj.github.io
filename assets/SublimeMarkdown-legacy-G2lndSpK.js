System.register(["./index-legacy-uM9g0Om3.js"],(function(n,s){"use strict";var a,t,o;return{setters:[function(n){a=n.P,t=n.Q,o=n.ag}],execute:function(){var s={class:"md-blog m-auto text-left"},p=[o('<p>快捷键 <code>[&quot;alt+`&quot;]</code></p><p>由 sublime 默认的插入双引号快捷键修改而来。</p><h3 id="sublime-%E7%89%88%E6%9C%AC" tabindex="-1"><a class="header-anchor" href="#sublime-%E7%89%88%E6%9C%AC" data-clickable=""><span>Sublime 版本</span></a></h3><pre class="language-json"><code class="language-json"><span class="token punctuation">[</span>\n\t<span class="token punctuation">{</span> <span class="token property">&quot;keys&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;alt+`&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;insert_snippet&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;contents&quot;</span><span class="token operator">:</span> <span class="token string">&quot;```$0```&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token property">&quot;context&quot;</span><span class="token operator">:</span>\n\t\t<span class="token punctuation">[</span>\n\t\t\t<span class="token punctuation">{</span> <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;setting.auto_match_enabled&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;equal&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operand&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t<span class="token punctuation">{</span> <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;selection_empty&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;equal&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operand&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t<span class="token punctuation">{</span> <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;following_text&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;regex_contains&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^(?:\\t| |\\\\)|]|\\\\}|&gt;|$)&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t<span class="token punctuation">{</span> <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;preceding_text&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;not_regex_contains&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;[```a-zA-Z0-9_]$&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t<span class="token punctuation">{</span> <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eol_selector&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;not_equal&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string.quoted.double - punctuation.definition.string.end&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>\n\t\t<span class="token punctuation">]</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">{</span> <span class="token property">&quot;keys&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;alt+`&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;insert_snippet&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;contents&quot;</span><span class="token operator">:</span> <span class="token string">&quot;```${0:$SELECTION}```&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token property">&quot;context&quot;</span><span class="token operator">:</span>\n\t\t<span class="token punctuation">[</span>\n\t\t\t<span class="token punctuation">{</span> <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;setting.auto_match_enabled&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;equal&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operand&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t<span class="token punctuation">{</span> <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;selection_empty&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;equal&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operand&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>\n\t\t<span class="token punctuation">]</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">{</span> <span class="token property">&quot;keys&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;alt+`&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;move&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;by&quot;</span><span class="token operator">:</span> <span class="token string">&quot;characters&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;forward&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token property">&quot;context&quot;</span><span class="token operator">:</span>\n\t\t<span class="token punctuation">[</span>\n\t\t\t<span class="token punctuation">{</span> <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;setting.auto_match_enabled&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;equal&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operand&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t<span class="token punctuation">{</span> <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;selection_empty&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;equal&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operand&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t<span class="token punctuation">{</span> <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;following_text&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;regex_contains&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^```&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t<span class="token punctuation">{</span> <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;selector&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;not_equal&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;punctuation.definition.string.begin&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t<span class="token punctuation">{</span> <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eol_selector&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;not_equal&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string.quoted.double - punctuation.definition.string.end&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t<span class="token punctuation">]</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">{</span> <span class="token property">&quot;keys&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;backspace&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;run_macro_file&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;res://Packages/Default/Delete Left Right.sublime-macro&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token property">&quot;context&quot;</span><span class="token operator">:</span>\n\t\t<span class="token punctuation">[</span>\n\t\t\t<span class="token punctuation">{</span> <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;setting.auto_match_enabled&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;equal&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operand&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t<span class="token punctuation">{</span> <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;selection_empty&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;equal&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operand&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t<span class="token punctuation">{</span> <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;preceding_text&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;regex_contains&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;```$&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t<span class="token punctuation">{</span> <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;following_text&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;regex_contains&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^```&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t<span class="token punctuation">{</span> <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;selector&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;not_equal&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;punctuation.definition.string.begin&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t<span class="token punctuation">{</span> <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eol_selector&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;not_equal&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string.quoted.double - punctuation.definition.string.end&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t<span class="token punctuation">]</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n</code></pre><h3 id="vs-code-%E7%89%88%E6%9C%AC" tabindex="-1"><a class="header-anchor" href="#vs-code-%E7%89%88%E6%9C%AC" data-clickable=""><span>VS Code 版本</span></a></h3><pre class="language-json"><code class="language-json"><span class="token punctuation">[</span>\n\t<span class="token punctuation">{</span> <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alt+oem_3&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;editor.action.insertSnippet&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;snippet&quot;</span><span class="token operator">:</span> <span class="token string">&quot;```$0```&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token property">&quot;context&quot;</span><span class="token operator">:</span>\n\t\t<span class="token punctuation">[</span>\n\t\t\t<span class="token punctuation">{</span> <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;setting.auto_match_enabled&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;equal&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operand&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t<span class="token punctuation">{</span> <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;selection_empty&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;equal&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operand&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t<span class="token punctuation">{</span> <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;following_text&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;regex_contains&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^(?:\\t| |\\\\)|]|\\\\}|&gt;|$)&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t<span class="token punctuation">{</span> <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;preceding_text&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;not_regex_contains&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;[```a-zA-Z0-9_]$&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t<span class="token punctuation">{</span> <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eol_selector&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;not_equal&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string.quoted.double - punctuation.definition.string.end&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>\n\t\t<span class="token punctuation">]</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">{</span> <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alt+oem_3&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;editor.action.insertSnippet&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;snippet&quot;</span><span class="token operator">:</span> <span class="token string">&quot;```${0:$SELECTION}```&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token property">&quot;context&quot;</span><span class="token operator">:</span>\n\t\t<span class="token punctuation">[</span>\n\t\t\t<span class="token punctuation">{</span> <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;setting.auto_match_enabled&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;equal&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operand&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t<span class="token punctuation">{</span> <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;selection_empty&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;equal&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operand&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>\n\t\t<span class="token punctuation">]</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n</code></pre><p>由于笔者不了解 VS Code 指令集，未能在 VS Code 中实现光标后移、成对删除两个功能。</p>',7)];n("title","快捷键 - MarkDown 插入代码块"),n("date","2022-01-05T14:54:43.000Z"),n("toc",!0),n("math","md"),n("tags",["笔记"]),n("cover","https://s2.loli.net/2022/01/05/VXLbwvYEs3BFeAo.jpg"),n("grow",null),n("default",{__name:"SublimeMarkdown",setup:function(n,o){return(0,o.expose)({frontmatter:{title:"快捷键 - MarkDown 插入代码块",date:"2022-01-05T14:54:43.000Z",toc:!0,math:"md",tags:["笔记"],cover:"https://s2.loli.net/2022/01/05/VXLbwvYEs3BFeAo.jpg",grow:null}}),function(n,o){return a(),t("div",s,p)}}})}}}));
