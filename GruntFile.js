module.exports = function(grunt)
{
  grunt.initConfig({
    sass: {
      dist: {
        files: [{
          expand: true,
          src: ['css/**/*.scss', 'css/**/*.sass'],
          dest: 'dist',
          ext: '.css'
        }],
      },
    },
    concat: {
      options: {
        separator: ';',
      },
      js: {
        src: ['js/**/*.js'],
        dest: 'dist/js/built.js',
      },
      css: {
        src: ['css/**/*.css'],
        dest: 'dist/css/style.css',
      },
    },
    watch: {
      js: {
        files: ['js/**/*.js'],
        tasks: ['concat:js'],
      },
      css: {
        files: ['css/**/*.css'],
        tasks: ['concat:css'],
      },
    },
  });


  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass', 'concat', 'watch']);
}
