//Declaración de variables asociado a las dependencias instaladas
var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
//Ubicaciones de los archivos que se van a utilizar
var rutas = {
	rutaJS: './src/js/*.js',
	rutaSCSS: './src/scss/*.scss',
	html: "./src/**/*.html",

};
//Los cambios que se realizan en html de desarrollo los copia al html de public
gulp.task('html',function(){
	gulp.src(rutas.html)
		.pipe(gulp.dest('./public'));
});
//Toma todos los js que hay en producción, los minifica y reemplaza caracteres(ofusca) y los copia a la carpeta public
gulp.task('js', function(){
	gulp.src(rutas.rutaJS)
	.pipe(gulp.dest('public/js/'))
});
//Toma el archivo scss y lo convierte a css y lo copia en la carpeta publica
gulp.task('css', function(){
	gulp.src(rutas.rutaSCSS)
	.pipe(sass({outputStyle:'compressed'})
	.on('error', sass.logError))
	.pipe(gulp.dest('public/css/'))
});


gulp.task('jade', function(){
    gulp.src('./src/*.jade')
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest('./public'))
})

gulp.task('watch', function(){
    gulp.watch('./src/*.jade', ['jade'])
});

gulp.task('tareas',['html','js','css','jade','watch']);
