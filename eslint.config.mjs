import js from "@eslint/js";
import globals from "globals";

export default [
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.node,
      ecmaVersion: "latest",
    },
    ...js.configs.recommended, // extends the recommended JS rules
    rules: {
      semi: "error",             // require semicolons
      "no-unused-vars": "error", // catch unused variables
      "no-undef": "error",       // catch undefined variables
      quotes: ["error", "double"], // enforce double quotes
    },
  },
];
