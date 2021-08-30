const { src, dest, watch } = require('gulp');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');

const path = {
    imagenes: 'input/**/*'
}

function convertWebp() {
    return src(path.imagenes)
        .pipe(webp())
        .pipe(dest('output-webp/'));
}

function minImages() {
    return src(path.imagenes)
        .pipe(imagemin())
        .pipe(dest('output-min/'));
}

function observer() {
    watch('input/*.*', convertWebp);
    watch('input/*.*', minImages);
}

exports.default = observer;
exports.convertWebp = convertWebp;
exports.minImages = minImages;