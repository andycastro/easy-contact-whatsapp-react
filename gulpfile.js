const {src, dest, series, parallel, watch} = require('gulp');
const sass = require('gulp-sass');

const filesPath = {
    sassFile: './src/sass/**/*',
    fileDist: './src/'
}

//taskGulpsass
function sassTask(){
    return src(filesPath.sassFile)
    .pipe(sass())
    .pipe(dest(filesPath.fileDist))
}

function watchTask(){
    watch([filesPath.sassFile],
        series(sassTask))
}

exports.default = series(
    parallel(sassTask),
    watchTask
);