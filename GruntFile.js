module.exports = function(grunt)
{
  grunt.initConfig({
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


  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['concat', 'watch']);
}
