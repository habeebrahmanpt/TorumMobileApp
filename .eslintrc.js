module.exports = {
    root: true,
    extends: '@react-native',
    plugins: ['import'],
    settings: {
        'import/resolver': {
            node: {
                paths: ['src'],
                alias: {
                    api: './src/api',
                    assets: './src/assets',
                    components: './src/components',
                    config: './src/config',
                    navigation: './src/navigation',
                    scenes: './src/scenes',
                    services:'./src/services',
                    store: './src/store',
                    utils: './src/utils',
                    themes: './src/themes',
                },
            },
        },
    },
};
