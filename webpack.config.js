const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
    entry: './src/scripts/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.less$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ],
            },
            {
                test: /\.(jpg|png)$/i,
                loader: "file-loader",
                options: {
                    outputPath: 'images',
                    publicPath: 'dist/images',
                    esModule: false,
                    name(file) {
                        if (process.env.NODE_ENV === 'development') {
                            return '[path][name].[ext]';
                        }
                        return '[contenthash].[ext]';
                    },
                }
            },
        ]
    }
};

module.exports = config;
