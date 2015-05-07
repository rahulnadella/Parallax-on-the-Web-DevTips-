module.exports = function(grunt)
{
  var mozjpeg = require('imagemin-mozjpeg');

  grunt.initConfig({
    imagemin: {
      static:  {
        options: {
          optimizationLevel: 7,
          svgoPlugins: [{ removeViewBox: false }],
          use: [mozjpeg()]
        },
        files: {
          'dist/images/black-bird-logo.svg': 'images/black-bird-logo.svg'
        }
      },
      dynamic: {
        files: [{
          expand: true,
          src: ['images/**/*.{png,jpg,gif}'],
          dest: 'dist'
        }]
      },
    },
    jade: {
      debug: {
        options: {
          data: {
            debug: true,
            timestamp: "<%= grunt.template.today() %>"
          }
        },
        files: {
          "dist/index.html": "index.jade"
        },
      },
    },
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
    jshint: {
      all: ['js/**/*.js']
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
    uglify: {
      options: {
        mangle: {
          except: ['jQuery', 'Backbone']
        }
      },
      my_target: {
        files: {
          'dist/js/built.js': ['js/**/*.js']
        }
      },
    },
    watch: {
      jade: {
        files: ['index.jade'],
        tasks: ['jade'],
      },
      js: {
        files: ['js/**/*.js'],
        tasks: ['jshint', 'concat:js'],
      },
      css: {
        files: ['css/**/*.css'],
        tasks: ['concat:css'],
      },
    },
  });


  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['imagemin', 'jade', 'sass', 'jshint', 'concat', 'uglify', 'watch']);
}
