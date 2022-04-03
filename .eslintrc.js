module.exports = {
    extends: [
        'react-app',
        'react-app/jest',
        'airbnb',
        'airbnb/hooks',
        'plugin:react/jsx-runtime',
        'plugin:prettier/recommended',
    ],
    plugins: ['prettier'],
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    },
};
