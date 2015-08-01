// ==UserScript==
// @name        和谐华新助手
// @include     http://bbs.huasing.org/*
// @version     0.21
// @description Hide posts from penzi
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @grant       GM_addStyle
// ==/UserScript==

// 可以自己加的 ^_^ 我这是测试数据而已 不是攻击啊，别喷我
var penzi = ['唐甬', 'materialist']

// hide post in 华新鲜事
$('div.brow2 div[class="ccol6 brow2h"] a[class="nickname bblack"]').each(function(index, element) {
    if ($.inArray($(this).attr('title'), penzi) > -1) {
        $(this).parents().eq(2).hide();
    }
});

// hide post in 版面
$('div.brow2 div[class="bcol5 brow2h"] a[class="nickname bblack"]').each(function(index, element) {
    if ($.inArray($(this).attr('title'), penzi) > -1) {
        $(this).parents().eq(2).hide();
    }
});

// hide 在帖子里的
$('div.authordiv div:first-child>a:first-child').each(function(index, element) {
    if ($.inArray($(this).text(), penzi) > -1) {
        $(this).parents().eq(1).hide();
        $(this).parents().eq(1).next().hide();
    }
});

// hide 漂浮出来的frame里的
$('div[id^="i-"]>div a[href^="user.php"]>font>b').each(function(index, element) {
    if ($.inArray($(this).text(), penzi) > -1) {
        $(this).parents().eq(3).hide();
    }
});
