// ハンバーガーメニュー
let hamburger = $('.js_hamburger');
let nav = $('.js_header-nav');
let btn_line = $('.js_hamburger-btn_line');
let main = $('.ly_main');

hamburger.on('click', function() {
  nav.toggleClass('on');
  btn_line.toggleClass('on');
  main.toggleClass('on');
})
$('.js_header-nav a[href]').on('click', function() {
  hamburger.trigger('click');
});
main.on('click', function() {
  if(nav.hasClass('on')){
    hamburger.trigger('click');
  }
})

//ページ遷移時のローディング
$(window).on('load',function(){
  $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
});

//ページ遷移時のロゴアニメーション
let classname = "-visible";
let timeout = 5000;
let $target = $(".splash-logo");

setInterval(() => {
  $target.addClass(classname);
  setTimeout(() => {
    $target.removeClass(classname);
  }, timeout);
}, timeout * 0.00001);

// スムーススクロール
let header = $('.ly_header');
$('.smooth a').click(function () {
    let gap = header.outerHeight();
    let speed = 600;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top - gap;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
});

// WORKSのアコーディオン
  $('.js_work_head').on('click', function () {
    let findWork = $(this).parent(".un_work");
    let findBody = $(this).next(".un_work_body");
    $(findBody).toggleClass('on');
    $(findWork).toggleClass('on');
  })

//スクロール発火処理
function scrollEffect(){
  $(".js_scrl-target").each(function(){
    let scroll = $(window).scrollTop();//現在のyスクロール量を取得
    let windowHeight = $(window).height();//ウィンドウの高さを取得
    let tgtPos = $(this).offset().top//ターゲットのy位置を取得
    let threshould;//閾値
    threshould = tgtPos - windowHeight + 200;//発火位置調整
    //
    if (scroll > threshould) {//クラスを付与する処理
      $(this).addClass("js_scrl-target-fire");
    }
  });
}
$(window).scroll(function(){
  scrollEffect();
});

//gsap