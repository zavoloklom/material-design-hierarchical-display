module.exports = {
    font: {
        files: [{
            expand: true,
            dot: true,
            filter: 'isFile',
            flatten: true,
            cwd: 'bower_components/material-design-iconic-font/dist/fonts/',
            dest: 'fonts/',
            src: ['{,*/}*']
        }]
    },
    animatecss: {
        files: [{
            expand: true,
            dot: true,
            filter: 'isFile',
            flatten: true,
            src: 'bower_components/animate.css/animate.min.css',
            dest: 'css/'
        }]
    },
    jquery: {
        files: [{
            expand: true,
            dot: true,
            filter: 'isFile',
            flatten: true,
            src: 'bower_components/jquery/dist/jquery.min.js',
            dest: 'js/'
        }]
    },
    highlight: {
        files: [{
            expand: true,
            dot: true,
            filter: 'isFile',
            flatten: true,
            src: 'bower_components/jquery.highlight/jquery.highlight.js',
            dest: 'js/'
        }]
    },
    jssocial: {
        files: [{
            expand: true,
            dot: true,
            filter: 'isFile',
            flatten: true,
            src: 'bower_components/jssocials/dist/jssocials.min.js',
            dest: 'js/'
        }]
    },
    onScreen: {
        files: [{
            expand: true,
            dot: true,
            filter: 'isFile',
            flatten: true,
            src: 'bower_components/onScreen/jquery.onscreen.min.js',
            dest: 'js/'
        }]
    },
    scroll: {
        files: [{
            expand: true,
            dot: true,
            filter: 'isFile',
            flatten: true,
            src: 'bower_components/jquery-smooth-scroll/jquery.smooth-scroll.min.js',
            dest: 'js/'
        }]
    }
};