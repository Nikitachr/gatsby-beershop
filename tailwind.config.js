module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        boxShadow: {
            secondary: '0px -12px 30px 20px #F5F3F0',
            innerSecondary: 'inset 0px 0px 8px rgba(192, 191, 189, 0.5);'
        },
        extend: {
            colors: {
                blue: '#3B7FE8',
                green: '#1BCF92',
                secondary: '#F5F3F0',
                red: '#E55249',
                yellow: '#FFC839'
            },
            minWidth: {
                '300': '300px',
                '28': '7rem'
            },
            margin: {
                '512': '512px'
            },
            inset: {
                'half': 'calc(50% - 24px)'
            },
            width: {
                'fit': 'fit-content'
            },
            height: {
                '500': '500px',
                '17': '17px',
                '14': '14px',
                'fit': 'fit-content'
            },
            gridTemplateColumns: {
                '4-auto': 'repeat(4, auto)',
                '3-auto': 'repeat(3, auto)',
                '2-auto': 'repeat(2, auto)',
                '1-auto': 'repeat(1, auto)',
                '3-pr': 'repeat(3, minmax(0, 1fr))'
            },
            left: {
                'product-card-btn': 'calc(50% - 24px)'
            },
            top: {
                'product-card-btn': 'calc(50% - 24px)'
            }
        },
    },
    variants: {
        extend: {
            boxShadow: ['hover'],
        },
    },
    plugins: [],
}
