var gulp = require("gulp");// gulpプラグインの読み込み
var sass = require("gulp-sass")(require("sass"));// Sassをコンパイルするプラグインの読み込み
var browser = require("browser-sync");//ブラウザリロード
var autoprefixer = require("gulp-autoprefixer");//ベンダープレフィックス自動付与
var plumber = require("gulp-plumber");// エラーが発生しても強制終了させない
var notify = require("gulp-notify"); // エラー発生時のアラート出力

gulp.task("server", function(db) {
  browser({
    server: {
      baseDir: "./"
    }
  });
  db();
});

gulp.task("sass",function(db){//タスクの登録("sass"タスクを登録する)
  gulp.src("./assets/sass/**/*.scss")//gulp.src()...読み込むファイルを設定する
  .pipe(plumber())
  .pipe(sass({outputStyle:'expanded'}))//pipe()...srcで取得したファイルに行う処理を記載する。
                                      //sass()...コンパイルの実行をする。outputStyleで吐き出すcssのスタイルを設定する。
  .pipe(autoprefixer({
    cascade:false
  }))
  .pipe(gulp.dest("./assets/css"))//gulp.dest()...出力したい場所を記載する。
  .pipe(notify({
    message: 'Sassをコンパイルしました！',
    onLast: true
  }))
  db();
});

gulp.task("reload",function(db){
  browser.reload();
  db();
})

gulp.task("watch",function(db){
  gulp.watch("./assets/sass/**/*.scss",gulp.parallel(["sass","reload"]));
  gulp.watch("./**/*.html",gulp.series(["reload"]));
  //watch(['監視するファイル'],['実行したいタスク名'])
  //タスク名をdefaultにするとコマンドにタスク名を入れる必要がなくなり便利です。
  db();
});

gulp.task('default',gulp.series(gulp.parallel(['sass','watch','server'])));