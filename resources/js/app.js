require('./bootstrap');

import Vue from 'vue'
import { Form, HasError, AlertError } from 'vform'
import moment from 'moment'
import Swal from 'sweetalert2'
window.swal = require('sweetalert2')

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)



window.Form=Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)


import VueRouter from 'vue-router';
Vue.use(VueRouter)
    const routes=[
      { path: '/dashboard', component: require('./components/Dashboard.vue').default },
      { path: '/developer', component: require('./components/Developer.vue').default },
      { path: '/users', component: require('./components/Users.vue').default }
    ]

      Vue.component(
        'passport-clients',
        require('./components/passport/Clients.vue').default
    );
    
    Vue.component(
        'passport-authorized-clients',
        require('./components/passport/AuthorizedClients.vue').default
    );
    
    Vue.component(
        'passport-personal-access-tokens',
        require('./components/passport/PersonalAccessTokens.vue').default
    );
    
   const router=new VueRouter({
    mode:'history',
    routes
   })

   import VueProgressBar from 'vue-progressbar'
   Vue.use(VueProgressBar, {
    color:'rgb(143,255,199)',
    failedColor: '#874b4b',
   thickness: '3px',
   transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  }
   });


   Vue.filter('upText',function(text){
     return text.charAt(0).toUpperCase() + text.slice(1);
   });
 
   Vue.filter('myDate',function(created){
     return moment(created).format('MMMM Do YYYY');
   });


  const app = new Vue({
   el:'#app',
   router
  });