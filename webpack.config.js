const path = require('path')
module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'testing.js',
        path: path.resolve(__dirname, '.')
    }
}