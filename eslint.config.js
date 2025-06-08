import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import boundaries from "eslint-plugin-boundaries";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      boundaries,
    },
    settings: {
      "boundaries/dependency-types": ["import", "file"],
      "boundaries/include": ["src/**/*"],
      "import/resolver": {
        alias: {
          map: [
            ["@", "./src"],
            ["@app", "./src/app"],
            ["@pages", "./src/pages"],
            ["@widgets", "./src/widgets"],
            ["@features", "./src/features"],
            ["@entities", "./src/entities"],
            ["@shared", "./src/shared"],
          ],
          extensions: [".ts", ".tsx", ".js", ".jsx"],
        },
      },
      "boundaries/elements": [
        {
          type: "app",
          pattern: "src/app/**/*",
        },
        {
          type: "pages",
          pattern: "src/pages/**/*",
          capture: ["page"],
        },
        {
          type: "widgets",
          pattern: "src/widgets/**/*",
          capture: ["widget"],
        },
        {
          type: "features",
          pattern: "src/features/**/*",
          capture: ["feature"],
        },
        {
          type: "entities",
          pattern: "src/entities/**/*",
          capture: ["entity"],
        },
        {
          type: "shared",
          pattern: "src/shared/**/*",
          capture: ["segment"],
        },
      ],
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      "boundaries/entry-point": [
        "error",
        {
          default: "disallow",
          rules: [
            {
              target: ["shared"],
              allow: "**",
            },
            {
              target: ["app", "pages", "widgets", "features", "entities"],
              allow: "index.(ts|tsx)",
            },
          ],
        },
      ],

      "boundaries/element-types": [
        "error",
        {
          default: "allow",
          message: "${file.type} is not allowed to import (${dependency.type})",
          rules: [
            {
              from: ["shared"],
              disallow: ["app", "pages", "widgets", "features", "entities"],
              message:
                "Shared module must not import upper layers (${dependency.type})",
            },
            {
              from: ["entities"],
              disallow: ["app", "pages", "widgets", "features"],
              message:
                "Entities must not import upper layers (${dependency.type})",
            },
            {
              from: ["entities"],
              allow: ["entities", "shared"],
            },
            {
              from: ["entities"],
              disallow: [["entities", { entity: "!${entity}" }]],
              message: "Entity must not import other entity",
            },
            {
              from: ["features"],
              allow: ["features", "entities", "shared"],
            },
            {
              from: ["features"],
              disallow: ["app", "pages", "widgets"],
              message:
                "Features must not import upper layers (${dependency.type})",
            },
            {
              from: ["features"],
              disallow: [["features", { feature: "!${feature}" }]],
              message: "Feature must not import other feature",
            },
            {
              from: ["widgets"],
              allow: ["widgets", "features", "entities", "shared"],
            },
            {
              from: ["widgets"],
              disallow: ["app", "pages"],
              message:
                "Widgets must not import upper layers (${dependency.type})",
            },
            {
              from: ["widgets"],
              disallow: [["widgets", { widget: "!${widget}" }]],
              message: "Widget must not import other widget",
            },
            {
              from: ["pages"],
              allow: ["pages", "widgets", "features", "entities", "shared"],
            },
            {
              from: ["pages"],
              disallow: ["app"],
              message: "Pages must not import app layer",
            },
            {
              from: ["pages"],
              disallow: [["pages", { page: "!${page}" }]],
              message: "Page must not import other page",
            },
          ],
        },
      ],
    },
  }
);
