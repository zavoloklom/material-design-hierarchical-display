module.exports = {
    dev: {
        options: {
            autoprefixer: {'browsers': ["> 1%", "last 2 versions"]},
            filters: {'oldIE': false},
            opacity: true,
            pseudoElements: true,
            minifier: false
        },
        files: {
            'tests/dev/zmd.hierarchical-display.css': 'tests/dev/zmd.hierarchical-display.css'
        }
    },
    prod: {
        options: {
            autoprefixer: {'browsers': ["> 1%", "last 2 versions"]},
            filters: {'oldIE': false},
            opacity: true,
            pseudoElements: true,
            minifier: false
        },
        files: {
            'dist/zmd.hierarchical-display.css': 'dist/zmd.hierarchical-display.css'
        }
    },
    'prod-min': {
        options: {
            autoprefixer: {'browsers': ["> 1%", "last 2 versions"]},
            filters: {'oldIE': false},
            opacity: true,
            pseudoElements: true,
            minifier: {preserveHacks: true, removeAllComments: true}
        },
        files: {
            'dist/zmd.hierarchical-display.min.css': 'dist/zmd.hierarchical-display.css'
        }
    }
};