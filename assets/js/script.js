// ハンバーガーメニュー
$('.js_hamburger').on('click', function () {
  $('.js_header-nav').toggleClass('on');
  $('.js_hamburger-btn_line').toggleClass('on');
})
$('.js_header-nav a[href]').on('click', function(event) {
  $('.js_hamburger').trigger('click');
});

//ページ遷移時のローディング
$(window).on('load',function(){
  $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
});

//ページ遷移時のロゴアニメーション
const classname = "-visible";
const timeout = 2000;
const $target = $(".splash-logo");

setInterval(() => {
  $target.addClass(classname);
  setTimeout(() => {
    $target.removeClass(classname);
  }, timeout);
}, timeout * 0.00001);

// スムーススクロール
const header = $('.ly_header');
$('.smooth a').click(function () {
    var gap = header.outerHeight();
    var speed = 600;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - gap;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
});