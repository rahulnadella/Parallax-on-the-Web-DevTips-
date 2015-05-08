# Parallex Example

An example implementation taken from the video series done by [Travis Neilson](https://www.youtube.com/playlist?list=PLqGj3iMvMa4IyCbhul-PdeiDqmh4ooJzk).

###Overview

This project is an example implementation of the [Parallex on the Web](https://github.com/DevTips/Parallax-on-the-Web-DevTips-) done by [Travis Neilson](https://github.com/travisneilson). I have modified the code to be used in my development enviorment.

#####Packages (Required)

>Modules (Install globally)
->Node.js, NPM, Grunt-Cli Ruby, Sass

>Modules (Grunt)
->Grunt, Grunt-Contrib-Concat, Grunt-Contrib-Imagemin, Grunt-Contrib-Jade, Grunt-Contrib-Jshint, Grunt-Contrib-Sass, Grunt-Contrib-Uglify, Grunt-Contrib-Watch, Grunt-Express, Body-Parser, Imagemin-mozjpeg, Method-Override, Mongoose, Mozjpeg

###Usage

After installing the software modules listed above you will have to run `grunt server` in a terminal prompt.

Below is the listed output of running `grunt server`:

    | => grunt server
    Running "imagemin:static" (imagemin) task
    Minified 1 image (saved 868 B)

    Running "imagemin:dynamic" (imagemin) task
    Minified 8 images (saved 327.74 kB)

    Running "jade:debug" (jade) task
    >> 1 file created.

    Running "sass:public" (sass) task

    Running "jshint:all" (jshint) task
    >> 1 file lint free.

    Running "concat:js" (concat) task
    File dist/js/functions.js created.

    Running "concat:css" (concat) task
    File dist/css/style.css created.

    Running "uglify:my_target" (uglify) task
    >> 1 file created.

    Running "express:all" (express) task

    Running "express-server:all" (express-server) task
    Server available at http://localhost:3000
    Web server started on port:8080, hostname: localhost [pid: 28693]

    Running "watch" task
    Waiting...


###License

*MIT License* --> A short, permissive software license. Basically, you can do whatever you want as long as you include the original copyright and license notice in any copy of the software/source.  There are many variations of this license in use.
