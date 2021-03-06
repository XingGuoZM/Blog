class logPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('logPlugin', (compilation) => {
      compilation.hooks.buildModule.tap('logPlugin', (module) => {
        console.log('buildModule===', JSON.stringify(module));
      })
    })
  }
}


module.exports = logPlugin;