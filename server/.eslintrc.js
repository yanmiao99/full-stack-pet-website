module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true
    },
    extends: 'standard',
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        indent: [2, 2], // 缩进2个空格
        semi: [2, 'never'], // 要求或禁止使用分号代替 ASI,即禁用行尾使用分号
        quotes: [2, 'single'], // 使用单引号
        'no-mixed-spaces-and-tabs': [2], // 禁止空格和 tab 的混合缩进
        'no-extra-semi': [2], // 禁止不必要的分号
        'comma-dangle': [2, 'never'] // 禁止末尾逗号
    }
}
