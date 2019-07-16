const { dest, src, watch, series } = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')

const dist = 'assets/css'
const source = 'assets/sass/'

const css = {
    in: source + 'styles.scss',
    out: dist,
    sassOpts: {
        outputStyle: 'compressed',
        errLogToConsole: true
    },
    autoprefixerOpts: {
        browsers: ['last 5 versions', '> 1%']
    },
    watch: source + '**/*'
}

function style(cb) {
    src(css.in)
        .pipe(sourcemaps.init())
        .pipe(sass(css.sassOpts))
        .pipe(autoprefixer(css.autoprefixerOpts))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(css.out))
    watch(css.watch, style)
    cb()
}

exports.default = style