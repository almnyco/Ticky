import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default defineConfig([
  { ignores: ["dist/"] },
  { files: ["src/**/*.{js,mjs,cjs,ts}"] },
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: globals.node },
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettier,
]);
