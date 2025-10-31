export default defineConfig({
  plugins: [react()],
  base: '/ApolloPerformingArts/',  // ← CHANGED
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
