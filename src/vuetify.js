
// for vutify
import Vuetify from "vuetify";
import Vue from "vue";
import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify);

export const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#4caf50',
        secondary: '#ffeb3b',
        accent: '#cddc39',
        error: '#ff5722',
        warning: '#ff9800',
        info: '#2196f3',
        success: '#009688'
      },
    },
  },
})

