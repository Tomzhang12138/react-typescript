const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlIncludeAssetsPlugin = require("html-webpack-include-assets-plugin");
const devMode = process.env.NODE_ENV !== "production";

const postCssLoader = {
    loader:  "postcss-loader",
    options: {
        plugins: [require("autoprefixer")]
    }
};

const lessLoader = {
    loader:  "less-loader",
    options: {
        javascriptEnabled: true,
        globalVars:        {},
        modifyVars:        {
            "primary-color":        "#5da381", // 全局主色
            "link-color":           "#1890ff", // 链接色
            "success-color":        "#52c41a", // 成功色
            "warning-color":        "#faad14", // 警告色
            "error-color":          "#f5222d", // 错误色
            "font-size-base":       "14px", // 主字号
            "heading-color":        "rgba(0, 0, 0, 0.85)", // 标题色
            "text-color":           "rgba(0, 0, 0, 0.65)", // 主文本色
            "text-color-secondary": "rgba(0, 0, 0, .45)", // 次文本色
            "disabled-color":       "rgba(0, 0, 0, .25)", // 失效色
            "border-radius-base":   "4px", // 组件/浮层圆角
            "border-color-base":    "#d9d9d9", // 边框色
            "box-shadow-base":      "0 2px 8px rgba(0, 0, 0, 0.15)" // 浮层阴影
        }
    }
};

const cssLoader = options => {
    return {
        loader:  "css-loader",
        options: { ...options }
    };
};

const MiniCssExtractPluginLoader = options => {
    return {
        loader:  MiniCssExtractPlugin.loader,
        options: Object.assign(
            {
                publicPath: "../../"
            },
            options
        )
    };
};

module.exports = {
    entry: ["./src/index.tsx"],
    output: {
        filename:   "assets/js/[name].[hash].js",
        path:       path.join(__dirname, "../dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:  [devMode ? "style-loader" : MiniCssExtractPluginLoader(), cssLoader({ importLoaders: 1 }), postCssLoader]
            },
            {
                test: /\.less$/,
                use:  [devMode ? "style-loader" : MiniCssExtractPluginLoader(), cssLoader({ importLoaders: 2 }), postCssLoader, lessLoader]
            },
            {
                test: /\.json$/,
                use:  ["json-loader"]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use:  [
                    {
                        loader:  "url-loader",
                        options: {
                            limit:      8192,
                            outputPath: "assets/img",
                            name() {
                                if (devMode) {
                                    return "[name].[ext]";
                                }
                                return "[hash].[ext]";
                            }
                        }
                    }
                ]
            },
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    resolve: {
        modules: ["node_modules"],
        alias:   {
            "@": path.resolve(__dirname, "../src")
        },
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            inject:   false
        }),
        new MiniCssExtractPlugin({
            filename:      devMode ? "assets/css/[name].css" : "assets/css/[name].[hash].css",
            chunkFilename: devMode ? "assets/css/[id].css" : "assets/css/[id].[hash].css"
        })
    ]
}