
export default {
  input: `src/${process.env.INPUT_FILE}.js`,
  output: {
    file: 'bundle.js',
    format: 'cjs'
  }
};
