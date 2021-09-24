const { src, dest, watch } = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'))
const xml2json = require('gulp-xml2json');
const csv2json = require('gulp-csv2json');
const replace = require('gulp-replace');
const rename = require('gulp-rename');
const webp = require('gulp-webp');

const path = {
    img: 'inputs/img/**/*',
    scss: 'inputs/scss/**/*.scss',
    xml: 'inputs/xml/**/*.xml',
    csv: 'inputs/csv/**/*.csv',
    replace: 'inputs/replace-str/**/*.*'
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

function xmlToJson() {
    return src(path.xml)
        .pipe(xml2json())
        .pipe(rename({extname: '.json'}))
        .pipe(dest('outputs/json/'));
}

function csvToJson() {
    return src(path.csv)
    .pipe(csv2json({}))
    .pipe(rename({extname: '.json'}))
    .pipe(dest('outputs/json/'));
}

function replaceString() {
    return src(path.replace)
      .pipe(replace('string to be replaced', 'string to replace'))
      .pipe(dest('outputs/replaced-str/'));
  };

function observer() {
    watch(path.img, imagesToWebp);
    watch(path.img, imagesToMinify);
    watch('inputs/scss/*.*', scssToCss);
}

exports.default = observer;
exports.replacer = replaceString;
exports.minify = imagesToMinify;
exports.webp = imagesToWebp;
exports.scss = scssToCss;
exports.xml = xmlToJson;
exports.csv = csvToJson;