// https://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parserOptions: {
		parser: 'babel-eslint'
	},
	env: {
		browser: true,
	},
	// https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
	// consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
	extends: ['plugin:vue/essential'],
	// required to lint *.vue files
	plugins: [
		'vue'
	],
	// add your custom rules here
	rules: {
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

		"no-comma-dangle": 1,
		"no-invalid-regexp": 1,
		"no-irregular-whitespace": 1,
		"no-unreachable": 1,
		"use-isnan": 1,

		"block-scoped-var": 1,
		"consistent-return": 0,
		"curly": 1,
		"eqeqeq": 1,
		"guard-for-in": 1,
		"wrap-iife": 1,

		"no-unused-vars": 1,

		"brace-style": 1,
		"camelcase": 1,
		"comma-spacing": 0,
		"comma-style": 1,
		"eol-last": 1,
		"func-names": 0,
		"indent": [1, "tab"],
		"key-spacing": 1,
		"no-array-constructor": 1,
		"no-mixed-spaces-and-tabs": 1,
		"no-space-before-semi": 1,
		"no-spaced-func": 0,
		"no-trailing-spaces": 1,
		"no-underscore-dangle": 0,
		"no-wrap-func": 0,
		"operator-assignment": 0,
		"padded-blocks": 1,
		"quotes": [1, "double"],
		"semi": 1,
		"space-after-function-name": 1,
		"space-after-keywords": 1,
		"space-return-throw-case": 0,

		"no-var": 1,

	}
};
