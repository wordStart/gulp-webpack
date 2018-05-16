// 一些全局的配置，比如 HTML 文件的路径、publicPath 等
const fs = require('fs');
const path = require('path');
// 获取所有页面 生成多页面的集合
function getFileNameList(path) {
  let fileList = [];
  let dirList = fs.readdirSync(path);
  dirList.forEach(item => {
    if (item.indexOf('js') > -1) {
      fileList.push(item.split('.')[0]);
    }
  });
  return fileList;
}
const JSPath = path.resolve(__dirname, './src/js');
let JSDirs = getFileNameList(JSPath);
module.exports = {
  JSDirs: JSDirs,
};