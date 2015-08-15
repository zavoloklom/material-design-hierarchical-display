module.exports = {
    // Development settings
    dev: {
        options: {
            paths: ["less"],
            sourceMap: true,
            sourceMapRootpath: "/",
            sourceMapFilename: "tests/dev/zmd.hierarchical-display.css.map",
            sourceMapURL: "zmd.hierarchical-display.css.map"
        },
        files: {
            "tests/dev/zmd.hierarchical-display.css": "less/hierarchical-display.less"
        }
    },
    // Production settings
    prod: {
        options: {
            paths: ["less"],
            sourceMap: false
        },
        files: {
            "dist/zmd.hierarchical-display.css": "less/hierarchical-display.less"
        }
    }
};