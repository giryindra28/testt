const path = require('path')
module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'deploy_main.js',
        path: path.resolve(__dirname, '.')
    }
}