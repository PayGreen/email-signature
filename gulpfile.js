const { dest, src, watch } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

const dist = 'assets/css';
const source = 'assets/sass/';

const css = {
    in: source + 'styles.scss',
    out: dist,
    sassOpts: {
        outputStyle: 'compressed',
        errLogToConsole: true
    },
    watch: source + '**/*'
};

function style(cb) {
    src(css.in)
        .pipe(sourcemaps.init())
        .pipe(sass(css.sassOpts))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(dest(css.out));
    watch(css.watch, style);
    cb();
}

exports.default = style;
