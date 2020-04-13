import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@/styles/variables.sass'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            default: "dark",
            light: {
                primary: '#ee44aa',
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107'
            },
            dark: {
                primary: '#2E3440',
                secondary: '#4C566A',
                accent: '#88C0D0',
                error: '#BF616A',
                info: '#D08770',
                success: '#A3BE8C',
                warning: '#EBCB8B'
            },
        },
        dark: true
    },
    icons: {
        iconfont: 'fa',
    },
});
