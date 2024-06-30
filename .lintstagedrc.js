const { ESLint } = require('eslint')

const eslintRemoveIgnoredFiles = async (files) => {
    const eslint = new ESLint({
        ignorePath: '.gitignore',
    })
    const isIgnored = await Promise.all(
        files.map((file) => {
            return eslint.isPathIgnored(file)
        }),
    )
    const filteredFiles = files.filter((_, i) => !isIgnored[i])
    return filteredFiles.join(' ')
}

module.exports = {
    '**/*.{ts,tsx}': 'tsc-files --noEmit',
    '**/*.{ts,tsx,js,jsx}': async (files) => {
        const filesToLint = await eslintRemoveIgnoredFiles(files)
        return [`eslint --fix ${filesToLint}`]
    },
    '**/*.{ts,tsx,js,jsx,json,css,scss}': 'prettier --write',
}
