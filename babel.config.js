module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                alias: {
                    api: './src/api',
                    assets: './src/assets',
                    components: './src/components',
                    config: './src/config',
                    navigation: './src/navigation',
                    scenes: './src/scenes',
                    services: './src/services',
                    store: './src/store',
                    utils: './src/utils',
                    themes: './src/themes',
                },
            },
        ]
    ],
};
