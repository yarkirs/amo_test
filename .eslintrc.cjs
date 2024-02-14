const INLINE_ELEMENTS = require('eslint-plugin-vue/lib/utils/inline-non-void-elements.json');

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      alias: [
        ['@', './src'],
        ['tests', './tests'],
      ],
    },
  },
  rules: {
    'no-shadow': 'off',
    'linebreak-style': 0,
    'template-curly-spacing': ['error', 'never'],
    strict: 0,
    'no-param-reassign': ['error', { props: false }],
    'import/extensions': 'off',
    'lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: true,
    }],

    'brace-style': ['error', '1tbs'],
    curly: ['error', 'all'],
    quotes: ['error', 'single'],
    'no-plusplus': 0,
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxEOF: 1,
    }],

    'lines-around-comment': ['error', {
      beforeBlockComment: true,
      beforeLineComment: true,
      allowBlockStart: true,
      allowClassStart: true,
      allowObjectStart: true,
      allowArrayStart: true,
    }],

    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: [
          'const', 'let', 'var', 'directive',
          'block', 'block-like', 'multiline-block-like',
        ],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'const', 'let', 'var',
          'block', 'block-like', 'multiline-block-like',
          'continue', 'return',
        ],
      },
      { blankLine: 'any', prev: 'const', next: 'const' },
      { blankLine: 'any', prev: 'let', next: 'let' },
      { blankLine: 'any', prev: 'var', next: 'var' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
    ],
    indent: [
      'error', 2,
      {
        ignoredNodes: ['TemplateLiteral'],
        SwitchCase: 1,
      },
    ],
    'max-len': ['error', {
      code: 120,
      ignoreUrls: true,
      ignoreComments: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'vue/max-len': ['error', {
      code: 120,
      template: 120,
      ignoreUrls: true,
      ignoreComments: true,
      ignoreStrings: true,
      ignoreHTMLAttributeValues: true,
    }],

    /**
     * For Vuejs
     */
    'vue/array-bracket-spacing': ['error', 'never'],
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/camelcase': ['error', { properties: 'never', ignoreDestructuring: false }],
    'vue/comma-dangle': ['error', 'always-multiline'],
    'vue/comma-spacing': ['error', {
      before: false,
      after: true,
    }],
    'vue/comma-style': ['error', 'last'],
    'vue/html-comment-content-newline': 'error',
    'vue/html-comment-content-spacing': ['error', 'always'],
    'vue/html-comment-indent': ['error', 2],
    'vue/prefer-template': 'error',
    'vue/space-in-parens': ['error', 'never'],
    'vue/template-curly-spacing': 'error',
    'vue/dot-location': ['error', 'property'],
    'vue/eqeqeq': ['error', 'always'],
    'vue/key-spacing': 'error',
    'vue/no-static-inline-styles': 'warn',
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/require-direct-export': 'off',
    'vue/require-name-property': 'error',
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': 'error',
    'vue/v-on-function-call': ['error', 'always'],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      ignores: [],
    }],

    'vue/max-attributes-per-line': ['error', {
      singleline: 1,
      multiline: 1,
    }],

    'vue/singleline-html-element-content-newline': ['error', {
      ignoreWhenNoAttributes: false,
      ignoreWhenEmpty: true,
      ignores: ['pre', 'textarea', ...INLINE_ELEMENTS],
    }],

    'vue/attributes-order': ['error', {
      order: [
        'GLOBAL',
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'UNIQUE',
        'OTHER_ATTR',
        'OTHER_DIRECTIVES',
        'TWO_WAY_BINDING',
        'CONTENT',
        'EVENTS',
      ],
    }],
    'vue/order-in-components': ['error', {
      order: [
        'name',
        'el',
        'functional',
        'parent',
        'mixins',
        'extends',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'inheritAttrs',
        'model',
        ['template', 'render'],
        ['props', 'propsData'],
        'data',
        'computed',
        'watch',
        'beforeCreate',
        'created',
        'beforeMount',
        'mounted',
        'beforeUpdate',
        'updated',
        'activated',
        'deactivated',
        'beforeDestroy',
        'destroyed',
        'methods',
        'renderError',
      ],
    }],
  },
};
