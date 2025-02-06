module.exports = {
    '**/*.{ts,tsx,js,jsx}': () => 'tsc --noEmit',
    '**/*.{ts,tsx,js,jsx,json,css,scss}': 'biome check --write --unsafe',
}
