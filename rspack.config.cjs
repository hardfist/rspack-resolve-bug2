module.exports = {
    mode: "development",
    entry: "./src/components/TestA/index.tsx",
    externals: ["react"],
    externalsType: "amd",
    // module: {
    //   rules: [
    //     {
    //       test: /\.js$/,
    //       resolve: {
    //         fullySpecified: false, // disable the behaviour
    //       },
    //     },
    //   ],
    // },
    builtins: {
      react: {
        runtime: "automatic",
      },
    },
    output: {
      filename: `[name]/[name].js`,
      library: "test",
      libraryTarget: "amd",
    },
  }