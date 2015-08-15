module.exports = {
    prod: {
        options: {
            paths: ["less"],
            sourceMap: false
        },
        files: {
            "css/docs.hierarchical-display.css": "less/docs.hierarchical-display.less"
        }
    }
};