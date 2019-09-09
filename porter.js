module.exports = {
  babel: {
    targets: ["> 4%", "ie 11", "safari 8"],
    options: {
      decorators: false,
      classProperties: true,
      objectRestSpread: true,
      reactJsx: true,
      forOfAsArray: false,
      reactRemovePropTypes: true,
      transformImportsMap: {},
      rewire: false
    },
    inputPath: "src",
    cjsOutputPath: "lib",
    esOutputPath: "es"
  },
  rollup: {
    name: "ReactSelectCss",
    inputFile: "src/index.js",
    externalPackages: [
      "react",
      "react-dom",
      "react-input-autosize",
      "prop-types"
    ],
    globalPackages: {
      react: "React",
      "react-dom": "ReactDOM",
      "react-input-autosize": "AutosizeInput",
      "prop-types": "PropTypes"
    },
    analyze: true,
    umdOutputFile: "dist/react-select-css.js",
    minOutputFile: "dist/react-select-css.min.js"
  },
  mocha: {
    files: ["test"]
  }
};
