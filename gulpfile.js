const { src, dest } = require('gulp');
const webp = require('gulp-webp');

const path = {
    imagenes: 'input/**/*'
}

function convertWebp() {
    return src(path.imagenes)
        .pipe(webp())
        .pipe(dest('./output'));
}

exports.convertWebp = convertWebp;