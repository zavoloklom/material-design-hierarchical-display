module.exports = {
    prod: {
        options: {
            autoprefixer: {'browsers': ["> 1%", "last 2 versions"]},
            filters: {'oldIE': false},
            opacity: true,
            pseudoElements: true,
            minifier: false
        },
        files: {
            'css/docs.hierarchical-display.css': 'css/docs.hierarchical-display.css'
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
            'css/docs.hierarchical-display.min.css': 'css/docs.hierarchical-display.css'
        }
    }
};