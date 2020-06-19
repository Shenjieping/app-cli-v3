module.exports = {
  // outputDir: process.env.outputDir,
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
};
