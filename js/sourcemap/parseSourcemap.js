const fs = require('fs');
const sourceMap = require('source-map');

const info = {
  line: 2,
  column: 66462,
}
const rawSourceMap = JSON.parse(fs.readFileSync('./systemConfig.bundle.15204f808b9eab541099.js.map', "utf8").toString());
async function resolveInfo(info){
  let consumer = await new sourceMap.SourceMapConsumer(rawSourceMap);
  let result = consumer.originalPositionFor({
    line: info.line, // 压缩后的行号
    column: info.column, // 压缩后的列号
  });
  console.log(result);
}

resolveInfo(info)
