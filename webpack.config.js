const path = require('path');
const fs = require('fs');

// 读取 echarts 和 echarts-gl 的压缩文件
const echartsMin = fs.readFileSync(
  path.resolve(__dirname, 'node_modules/echarts/dist/echarts.min.js'),
  'utf8'
);
const echartsGLMin = fs.readFileSync(
  path.resolve(__dirname, 'node_modules/echarts-gl/dist/echarts-gl.min.js'),
  'utf8'
);

module.exports = {
    entry: './charts-render.js',
    output: {
        filename: 'charts-bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            type: 'window'
        }
    },
    resolve: {
        extensions: ['.js']
    },
    externals: {
        'echarts': {
            root: 'echarts',
            commonjs: 'echarts',
            commonjs2: 'echarts',
            amd: 'echarts'
        },
        'echarts-gl': {
            root: 'echarts-gl',
            commonjs: 'echarts-gl',
            commonjs2: 'echarts-gl',
            amd: 'echarts-gl'
        }
    },
    plugins: [
        {
            apply: (compiler) => {
                compiler.hooks.emit.tapAsync('ConcatPlugin', (compilation, callback) => {
                    // 获取打包后的文件内容
                    const bundleContent = compilation.assets['charts-bundle.js'].source();
                    
                    // 将三个文件内容拼接在一起，添加全局变量声明
                    const finalContent = `
// 确保 echarts 作为全局变量
var echarts = window.echarts;
${echartsMin}
${echartsGLMin}
${bundleContent}
                    `;
                    
                    // 更新输出文件内容
                    compilation.assets['charts-bundle.js'] = {
                        source: () => finalContent,
                        size: () => finalContent.length
                    };
                    
                    callback();
                });
            }
        }
    ],
    mode: 'production'
}; 