module.exports = {
    less: {
        files: [{
            expand: true,
            dot: true,
            filter: 'isFile',
            flatten: true,
            cwd: 'scss/temp/',
            dest: 'scss/',
            src: ['{,*/}*.scss'],
            rename: function(dest, src) {
                if (src !== 'hierarchical-display.scss') {
                    src = "_" + src;
                }
                return dest + src;
            }
        }]
    },
    js: {
        files: [{
            expand: false,
            src: 'js/jquery.zmd.hierarchical-display.js',
            dest: 'dist/jquery.zmd.hierarchical-display.js'
        }]
    },
    jquery: {
        files: [{
            expand: false,
            src: 'bower_components/jquery/dist/jquery.min.js',
            dest: 'tests/lib/jquery.min.js'
        }]
    },
    animateCSS: {
        files: [{
            expand: false,
            src: 'bower_components/animate.css/animate.min.css',
            dest: 'tests/lib/animate.min.css'
        }]
    },
    onScreen: {
        files: [{
            expand: false,
            src: 'bower_components/onScreen/jquery.onscreen.min.js',
            dest: 'tests/lib/jquery.onscreen.min.js'
        }]
    },
    qunit: {
        files: [{
            expand: true,
            dot: true,
            filter: 'isFile',
            flatten: true,
            cwd: 'bower_components/qunit/qunit/',
            src: ['*'],
            dest: 'tests/lib/'
        }]
    }
};