// ==UserScript==
// @name         改一下主页moe123.net
// @namespace    https://github.com/judgedong/MyTampermonkey
// @version      0.1
// @icon         http://www.moe123.net/favicon.ico
// @author       You
// @match        http://www.moe123.net/
// @require      https://cdn.staticfile.org/jquery/3.2.1/jquery.min.js
// ==/UserScript==

(function() {
   $(".m-shortcut-panel li")[6].remove();
   $(".m-shortcut-panel").append('<li class="item"><a suggest="true" target="_blank" href="https://index.66-77.cc/"><img alt="Index" src="https://i.loli.net/2017/09/05/59ae074c510dc.png" width="54" height="54"><div class="title"><span>Index</span></div></a></li>');
})();