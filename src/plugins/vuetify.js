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
        brown1: '#483B30',
        gray1: '#454545',
        gray2: '#333',
        gray3: '#575757',
      },
    },
  },
};

export default new Vuetify(opts);
