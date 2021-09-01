const { src, dest, watch } = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'))
const webp = require('gulp-webp');

const path = {
    img: 'inputs/img/**/*',
    scss: 'inputs/scss/**/*.scss'
}

function imagesToWebp() {
    return src(path.img)
        .pipe(webp())
        .pipe(dest('outputs/img-webp/'));
}

function imagesToMinify() {
    return src(path.img)
        .pipe(imagemin())
        .pipe(dest('outputs/img-min/'));
}

function scssToCss() {
    return src(path.scss)
        .pipe(sass())
        .pipe(dest('outputs/css/'));
}

function observer() {
    watch(path.img, imagesToWebp);
    watch(path.img, imagesToMinify);
    watch('inputs/scss/*.*', scssToCss);
}

exports.default = observer;
exports.webp = imagesToWebp;
exports.minify = imagesToMinify;
exports.scss = scssToCss;