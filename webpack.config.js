const path = require("path");

module.exports = {
    mode: "development", // Change to 'production' for production builds
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/ // Exclude node_modules from TypeScript processing
            },
            {
                test: /\.js$/, // Add this rule to handle .js files
                include: /node_modules\/intl-tel-input/, // Specifically include intl-tel-input JS files
                use: {
                    loader: "babel-loader", // Use Babel for JS processing
                    options: {
                        presets: ["@babel/preset-env"] // Transpile to compatible JS
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "wwwroot/js")
    },
    watchOptions: {
        aggregateTimeout: 300, // Delay rebuild (optional)
        poll: 1000, // Check for changes every second
    }
};
