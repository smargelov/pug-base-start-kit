module.exports = function () {
    sm.gulp.task('img:build', function () { // обычная структура gulp.tusk
        return sm.gulp.src('src/img/*.{png, jpeg, jpg, gif}') //путь, откуда берём файлы
        .pipe(sm.gp.tinypng('voh3HuYcKAIZ7ldxsrnxCWWYPYFfsELk'))
        .pipe(sm.gulp.dest('buid/img/'));
    });

    sm.gulp.task('img:dev', function () { // обычная структура gulp.tusk
        return sm.gulp.src('src/img/*.{png, jpeg, jpg, gif}') //путь, откуда берём файлы
        .pipe(sm.gulp.dest('buid/img/'));
    });
};
    
    
 