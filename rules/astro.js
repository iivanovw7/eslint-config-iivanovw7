module.exports = {
    rules: {
        'astro/no-conflict-set-directives': 'error',
        'astro/no-unused-define-vars-in-style': 'error',
        'react/jsx-filename-extension': [
            'error',
            {
                'extensions': ['.astro']
            }
        ],
    },
};
