// ==UserScript==
// @name         去掉网易广告
// @name:zh-CN   去掉网易广告
// @description:zh-cn 去掉网易广告
// @namespace    https://github.com/hikerwu/chrometp
// @version      0.0.2
// @description  try to take over the world!
// @author       hikerwu
// @match        https://note.youdao.com/web/*
// @require      http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==
// 1.去掉左下角的网易广告。
// 2.将广告位置空间合理利用。
// 3.通过事件捕获避免闪烁.
function closeAd() {
    $(".sidebar-ft").css("display","none");
    $(".sidebar-content").css("bottom","-40px");
}

(function() {
    'use strict';
    // 通过事件捕获来避免广告闪烁;
    document.addEventListener("DOMSubtreeModified", function (event) {
        $(event.target).find(".widget-scroller-wrap").show(function(){
            closeAd();
        });
    });
})();