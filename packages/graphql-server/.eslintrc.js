module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": [
        "prettier",
        "prettier/@typescript-eslint"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module",
        "createDefaultProgram": "true"     
    },
    "plugins": [
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    "rules": {
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/brace-style": "off",
        "@typescript-eslint/comma-spacing": "off",
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/dot-notation": "error",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/func-call-spacing": "off",
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/keyword-spacing": "off",
        "@typescript-eslint/member-delimiter-style": [
            "off",
            {
                "multiline": {
                    "delimiter": "none",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-extra-parens": "off",
        "@typescript-eslint/no-extra-semi": "off",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/no-unused-expressions": "error",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/quotes": "off",
        "@typescript-eslint/semi": [
            "off",
            null
        ],
        "@typescript-eslint/space-before-function-paren": "off",
        "@typescript-eslint/triple-slash-reference": [
            "error",
            {
                "path": "always",
                "types": "prefer-import",
                "lib": "always"
            }
        ],
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rules": {
                    "object-literal-sort-keys": true,
                    "prefer-conditional-expression": true,
                    "prettier": true
                }
            }
        ],
        "@typescript-eslint/type-annotation-spacing": "off",
        "@typescript-eslint/unified-signatures": "error",
        "array-bracket-newline": "off",
        "array-bracket-spacing": "off",
        "array-element-newline": "off",
        "arrow-body-style": "off",
        "arrow-parens": [
            "off",
            "always"
        ],
        "arrow-spacing": "off",
        "block-spacing": "off",
        "brace-style": [
            "off",
            "off"
        ],
        "camelcase": "off",
        "comma-dangle": "off",
        "comma-spacing": "off",
        "comma-style": "off",
        "complexity": "off",
        "computed-property-spacing": "off",
        "constructor-super": "error",
        "curly": "error",
        "dot-location": "off",
        "eol-last": "off",
        "eqeqeq": [
            "error",
            "smart"
        ],
        "func-call-spacing": "off",
        "function-call-argument-newline": "off",
        "function-paren-newline": "off",
        "generator-star": "off",
        "generator-star-spacing": "off",
        "guard-for-in": "error",
        "id-match": "error",
        "implicit-arrow-linebreak": "off",
        "import/no-extraneous-dependencies": "off",
        "import/no-internal-modules": "off",
        "indent": "off",
        "indent-legacy": "off",
        "jsx-quotes": "off",
        "key-spacing": "off",
        "keyword-spacing": "off",
        "linebreak-style": "off",
        "lines-around-comment": "off",
        "max-classes-per-file": [
            "error",
            1
        ],
        "max-len": "off",
        "multiline-ternary": "off",
        "new-parens": "off",
        "newline-per-chained-call": "off",
        "no-arrow-condition": "off",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-comma-dangle": "off",
        "no-cond-assign": "error",
        "no-confusing-arrow": "off",
        "no-console": "error",
        "no-debugger": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": "error",
        "no-empty": "error",
        "no-eval": "error",
        "no-extra-bind": "error",
        "no-extra-parens": "off",
        "no-extra-semi": "off",
        "no-fallthrough": "off",
        "no-floating-decimal": "off",
        "no-invalid-this": "off",
        "no-irregular-whitespace": "off",
        "no-mixed-operators": "off",
        "no-mixed-spaces-and-tabs": "off",
        "no-multi-spaces": "off",
        "no-multiple-empty-lines": "off",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-redeclare": "error",
        "no-reserved-keys": "off",
        "no-return-await": "error",
        "no-sequences": "error",
        "no-shadow": [
            "error",
            {
                "hoist": "all"
            }
        ],
        "no-space-before-semi": "off",
        "no-spaced-func": "off",
        "no-sparse-arrays": "error",
        "no-tabs": "off",
        "no-template-curly-in-string": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "off",
        "no-undef-init": "error",
        "no-underscore-dangle": "off",
        "no-unexpected-multiline": "off",
        "no-unsafe-finally": "error",
        "no-unused-labels": "error",
        "no-var": "error",
        "no-whitespace-before-property": "off",
        "no-wrap-func": "off",
        "nonblock-statement-body-position": "off",
        "object-curly-newline": "off",
        "object-curly-spacing": "off",
        "object-property-newline": "off",
        "object-shorthand": "error",
        "one-var": [
            "error",
            "never"
        ],
        "one-var-declaration-per-line": "off",
        "operator-linebreak": "off",
        "padded-blocks": "off",
        "prefer-arrow-callback": "off",
        "prefer-const": "error",
        "prefer-object-spread": "error",
        "quote-props": "off",
        "quotes": "off",
        "radix": "error",
        "rest-spread-spacing": "off",
        "semi": "off",
        "semi-spacing": "off",
        "semi-style": "off",
        "space-after-function-name": "off",
        "space-after-keywords": "off",
        "space-before-blocks": "off",
        "space-before-function-paren": "off",
        "space-before-function-parentheses": "off",
        "space-before-keywords": "off",
        "space-in-brackets": "off",
        "space-in-parens": [
            "off",
            "never"
        ],
        "space-infix-ops": "off",
        "space-return-throw-case": "off",
        "space-unary-ops": "off",
        "space-unary-word-ops": "off",
        "spaced-comment": [
            "error",
            "always",
            {
                "markers": [
                    "/"
                ]
            }
        ],
        "switch-colon-spacing": "off",
        "template-curly-spacing": "off",
        "template-tag-spacing": "off",
        "unicode-bom": "off",
        "use-isnan": "error",
        "valid-typeof": "off",
        "wrap-iife": "off",
        "wrap-regex": "off",
        "yield-star-spacing": "off"
    }
};
