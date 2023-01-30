import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

const opts = {
  theme: {
    options: {
      customProperties: false,
    },
    themes: {
      light: {
        primary: '#F08824',
        background: '#F7F6F4',
      },
    },
  },
};

export default new Vuetify(opts);
