var parant = 'test'
var projectname = 'test'
var glob = require('glob')
var path = require('path')

// function getEntry() {
//     var entries = {}
//     var basename, tmp,pathname;
//     //var items = glob.sync( 'src/modules/' + projectname + '/' + pagename + '/*.js')
//     var items = glob.sync( 'src/modules/**/*.js')

//     if (process.env.NODE_ENV == 'production') {
      
//       items.forEach(function(entry){

//         console.log("entry=" + entry);

//         basename = path.basename(entry, path.extname(entry));

//         tmp = entry.split('/').splice(-4);

//         console.log("tmp=" + tmp);

//         pathname = tmp.splice(0, 1) + '/' + tmp.splice(0, 1) + '/test/' + basename; // 正确输出js和html的路径
//         // pathname ='modules/edit/test';

//         console.log("pathname=" + pathname);

//         entries[basename] = {
//           entry: entry,
//           // 模板来源
//           template: entry.replace('js','html'),
//           // 在 dist/index.html 的输出
//           filename: `${basename}.html`,

//           // title: pathname,

//           // // 提取出来的通用 chunk 和 vendor chunk。
//           // chunks: ['chunk-vendors', 'chunk-common',  pathname]
//         }

//       });
//     } else {
//       for (var i in items) {
//         var filepath = items[i]
//         var fileList = filepath.split('/');
//         var fileName = fileList[fileList.length-2];
//         entries[fileName] = {
//           entry: `src/modules/${fileName}/main.js`,
//           // 模板来源
//           template: `public/index.html`,
//           // 在 dist/index.html 的输出
//           filename: `${fileName}.html`,
//           // 提取出来的通用 chunk 和 vendor chunk。
//           chunks: ['chunk-vendors', 'chunk-common', fileName]
//         }
//       }
//     }
//     return entries
// }

function getEntry() {
  var entries = {}
  if (process.env.NODE_ENV == 'production') {
    entries[projectname] = {
      // page的入口
      entry: `src/modules/${parant}/${projectname}/${projectname}.js`,
      // 模板来源
      //template: 'public/index.html',
      template: `src/modules/${parant}/${projectname}/${projectname}.html`,
      // 在 dist/index.html 的输出
      //filename: `${parant}/${projectname}/${projectname}.html`,
      filename: `${projectname}.html`,
      // title: projectname,
      chunks: ['chunk-vendors', 'chunk-common',projectname]
    }
  } else {
    // var items = glob.sync( './src/modules/*/*.js')
    // for (var i in items) {
    //   var filepath = items[i]
    //   var fileList = filepath.split('/');
    //   var fileName = fileList[fileList.length-2];
    //   entries[fileName] = {
    //     entry: `src/modules/${fileName}/main.js`,
    //     // 模板来源
    //     template: `public/index.html`,
    //     // 在 dist/index.html 的输出
    //     filename: `${fileName}.html`,
    //     // 提取出来的通用 chunk 和 vendor chunk。
    //     chunks: ['chunk-vendors', 'chunk-common', fileName]
    //   }
 
    // }

    entries[projectname] = {
      // page的入口
      entry: `src/modules/${parant}/${projectname}/${projectname}.js`,
      // 模板来源
      //template: 'public/index.html',
      template: `src/modules/${parant}/${projectname}/${projectname}.html`,
      // 在 dist/index.html 的输出
      filename: `${projectname}.html`,
      // title: projectname,
      chunks: ['chunk-vendors', 'chunk-common',projectname]      
    }       
  }
  return entries
}

var pages = getEntry()
module.exports = {
  publicPath: './',
  productionSourceMap: false, // 生产禁止显示源代码
  outputDir: `dist/${parant}/${projectname}`,
  //outputDir:'dist',
  //indexPath:'edit/index.html',
  //assetsDir:`${parant}/${projectname}`,
  assetsDir:'./',
  pages: pages,
  devServer: {
    proxy: {
        '/api': {
            target: 'http://localhost:5000',
            ws: true,//是否代理websockets
            changeOrigin: true,   // 设置同源  默认false，是否需要改变原始主机头为目标URL
            pathRewrite: {
                '^/api': '/api'
            }, 
        }
    }
}
}