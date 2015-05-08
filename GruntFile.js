module.exports = function(grunt)
{
  var mozjpeg = require('imagemin-mozjpeg');

  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),

    imagemin: {
      static:  {
        options: {
          optimizationLevel: 7,
          svgoPlugins: [{ removeViewBox: false }],
          use: [mozjpeg()]
        },
        files: {
          'public/images/black-bird-logo.svg': 'images/black-bird-logo.svg'
        }
      },
      dynamic: {
        files: [{
          expand: true,
          src: ['images/**/*.{png,jpg,gif}'],
          dest: 'public'
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
          "public/index.html": "index.jade"
        },
      },
    },
    sass: {
      public: {
        files: [{
          expand: true,
          src: ['css/**/*.scss', 'css/**/*.sass'],
          dest: 'public',
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
        dest: 'public/js/functions.js',
      },
      css: {
        src: ['public/css/**/*.css'],
        dest: 'public/css/style.css',
      },
    },
    uglify: {
      options: {
        mangle: {
          except: ['jQuery']
        }
      },
      my_target: {
        files: {
          'public/js/functions.js': ['js/**/*.js']
        }
      },
    },
    watch: {
      options: {
        livereload: true,
      },
      jade: {
        files: ['index.jade'],
        tasks: ['jade'],
      },
      js: {
        files: ['js/**/*.js'],
        tasks: ['jshint', 'concat:js'],
      },
      sass: {
        files: ['css/**/*.scss', 'css/**/*.sass'],
        tasks: ['sass'],
      },
      css: {
        files: ['public/css/**/*.css'],
        tasks: ['concat:css'],
      },
      files:['public/**','server/**'],
      tasks:[],
    },

    express:{
        all:{
            options:{
                server:'server.js',
                hostname:'localhost',
                bases:['./public'],
                livereload:true
            }
        },
    },
  });


  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-middleware');
  grunt.loadNpmTasks('grunt-open');
  grunt.registerTask('default', ['imagemin', 'jade', 'sass', 'jshint', 'concat', 'uglify']);
  grunt.registerTask('server',['default', 'express', 'watch']);
}
