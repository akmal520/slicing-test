const withMT = require('@material-tailwind/react/utils/withMT');

// export default {
module.exports = withMT({
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            inter: ['Inter', 'sans-serif'],
            rubik: ['Rubik', 'sans-serif'],
        },
        extend: {
            colors: {
                primary: '#0B132A',
                secondary: '#4F5665',
            },
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        container: {
            padding: {
                sm: '2rem',
                lg: '4rem',
                xl: '6rem',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
});
