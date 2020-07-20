import typescript from "rollup-plugin-typescript";
import { uglify } from "rollup-plugin-uglify";
export default {
  input: "src/index.ts",
  plugins: [
    typescript({
      exclude: "node_modules/**",
      typescript: require("typescript"),
    }),
    uglify(),
  ],
  output: [
    {
      exports: "named",
      format: "umd",
      file: "umd/coms-min.js",
      name: "coms",
    },
  ],
};
