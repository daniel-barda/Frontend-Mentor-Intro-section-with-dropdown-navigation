export default {
  build: {
    assetsInlineLimit: 100000000,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `[ext]/[name].[ext]`,
      },
    },
  },
};
