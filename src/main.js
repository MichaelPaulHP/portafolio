import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import './registerServiceWorker'


import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAD72otQFhVhMt7uRBjMHxs9Hdz9_hjYOA",
  authDomain: "michaelpauldev.firebaseapp.com",
  databaseURL: "https://michaelpauldev.firebaseio.com",
  projectId: "michaelpauldev",
  storageBucket: "michaelpauldev.appspot.com",
  messagingSenderId: "873393379457",
  appId: "1:873393379457:web:9ce4800fd37ab70fe3d580",
  measurementId: "G-VJF9JGJK00"
};

firebase.initializeApp(firebaseConfig);
const analytics=firebase.analytics();
analytics.logEvent("mainJS");

Vue.config.productionTip = false;
Vue.prototype.$analytics = analytics;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
