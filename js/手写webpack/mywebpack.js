const  fs = require('fs');
const babylon = require('babylon')
const  traverse = require('babel-traverse').default;
const path = require('path')
const bable = require('babel-core');
let ID = 0;
function createAsset(filename) {
    const content = fs.readFileSync(filename, 'utf-8');

    const  ast = babylon.parse(content, {
        sourceType: 'module'
    });

    const dependencies = [];

    traverse(ast, {
        ImportDeclaration: ({node}) => {
            dependencies.push(node.source.value);
        }
    });

    const  id = ID++;
    const { code } = bable.transformFromAst(ast, null, {
        presets: ['env']
    });
    let data = {
        id,
        filename,
        dependencies,
        code
    };
    return  data;
}

function createGraph(entry) {
    const mainAsset = createAsset(entry);
    const allAsset = [mainAsset];
    for(let asset of allAsset){
        const dirname = path.dirname(asset.filename);

        asset.mapping = {};

        asset.dependencies.forEach(relativePath => {
            const absolutePath = path.join(dirname, relativePath);
            const childAsset = createAsset(absolutePath);

            asset.mapping[relativePath] = childAsset.id;

            allAsset.push(childAsset);
        })
    }


    return allAsset;
}

function bundle( graph) {
    let modules = '';
    graph.forEach(module => {
        modules += `${module.id}:[
            function(require, module, exports){
                ${module.code}  
            },
            ${JSON.stringify(module.mapping)},
        ],`
    });
    // 实现require 方法
    const result = `
        (function(modules){
            function require(id){
                const [fn, mapping] = modules[id];
                
                function localRequire(relativePath){
                    return require(mapping[relativePath]);
                }
                
                const module = { exports: {}};
                
                fn(localRequire, module, module.exports);
                
                return module.exports;
            }
            require(0);
        })({${modules}})
    `;
    return result;
}

const graph = createGraph('./source/entry.js');
const result = bundle(graph);
console.log(result);
