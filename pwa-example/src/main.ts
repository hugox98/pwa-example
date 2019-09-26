import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import firebase from 'firebase';

Vue.config.productionTip = false;
const config = {
  apiKey: "AIzaSyAiY_PUDkOHvxO9HiNjwE8UJgRtw_u2XY8",
    authDomain: "pwa-example-596ed.firebaseapp.com",
    databaseURL: "https://pwa-example-596ed.firebaseio.com",
    projectId: "pwa-example-596ed",
    storageBucket: "",
    messagingSenderId: "464824193207",
    appId: "1:464824193207:web:0c3b383243463658f13d32"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.usePublicVapidKey("BLnvjrntkNaOtqB-3mdXyGl19pM0tnMsvpfdBihPjm8rf0kGFy1SOy4pz_k82JvOHlWfltS9dRYJPBsRZClZ4-0");

messaging.requestPermission().then(()=> {
  console.log('Notification permission granted.');
  //Get Token
  messaging.getToken().then((token)=> {
    console.log(token);
  });
}).catch((err)=> {
  console.log('Unable to get permission to notify.', err);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

