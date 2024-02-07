const path = require('path');

module.exports = {
    // ... outras configurações

    module: {
        rules: [
            {
                test: /\.gif$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets/posts', // ou o caminho desejado
                        },
                    },
                ],
            },
        ],
    },
};
