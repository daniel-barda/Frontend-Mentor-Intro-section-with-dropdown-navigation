export default {
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "script.js", // add this
        assetFileNames: "images/[name].[ext]",
      },
    },
  },
};
