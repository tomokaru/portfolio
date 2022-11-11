// ハンバーガーメニュー
$('.js_hamburger').on('click', function () {
  $('.js_header-nav').toggleClass('on');
  $('.js_hamburger-btn_line').toggleClass('on');
})

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