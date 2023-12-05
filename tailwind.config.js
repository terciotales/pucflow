import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            colors: {
                'orange' : '#F6A62B',
                'orange-dark' : '#613C04',
                'blue' : '#072A51',
                'blue-dark' : '#072A51',
                'blue-bg' : '#042241',
                'white' : '#ffffff',
                'black' : '#000000'
            },
            width: {
                'post' : 'calc((100% - 1rem) / 3)'
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
};
