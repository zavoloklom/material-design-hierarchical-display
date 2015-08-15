module.exports = {
    // Development settings
    dev: {
        options: {
            banner: '/* ========================================================================\n' +
                    ' * Zavoloklom Material Design: jquery.zmd.hierarchical-display.js\n' +
                    ' * http://zavoloklom.github.io/material-design-hierarchical-display/\n' +
                    ' * ========================================================================\n' +
                    ' * Copyright 2014 Zavoloklom.\n' +
                    ' * Licensed under MIT (https://github.com/zavoloklom/material-design-hierarchical-display/blob/master/LICENSE)\n' +
                    ' * ======================================================================== */\n',
            sourceMap: true,
            compress: {
                drop_console: true
            }
        },
        files: {
            'tests/dev/jquery.zmd.hierarchical-display.min.js': ['js/jquery.zmd.hierarchical-display.js']
        }
    },
    // Production settings
    prod: {
        options: {
            banner: '/* ========================================================================\n' +
            ' * Zavoloklom Material Design: jquery.zmd.hierarchical-display.js\n' +
            ' * http://zavoloklom.github.io/material-design-hierarchical-display/\n' +
            ' * ========================================================================\n' +
            ' * Copyright 2014 Zavoloklom.\n' +
            ' * Licensed under MIT (https://github.com/zavoloklom/material-design-hierarchical-display/blob/master/LICENSE)\n' +
            ' * ======================================================================== */\n',
            sourceMap: true,
            compress: {
                drop_console: true
            }
        },
        files: {
            'dist/jquery.zmd.hierarchical-display.min.js': ['js/jquery.zmd.hierarchical-display.js']
        }
    }
};