const { useReducer } = require("@amove/next");
const path = require("path");
const fs = require("fs-extra");
useReducer({
    AppJs (node, store) {
        let output = path.join(store.config.output, node.body.projectPath);
        this.$node.content = fs.readFileSync(node.body.path, "utf8");
        this.$node.dist = output;
        this.addChild({
            type: "ProcessBabel",
            key: node.path + "ProcessBabel",
            path: node.path,
            body: node.body,
            dist: output,
        });
    },
});

