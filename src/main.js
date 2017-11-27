
import Vue from 'vue'
import Vuetify from 'vuetify'
import Framework7 from 'framework7'
import Framework7Vue from 'framework7-vue'


// Import F7 iOS Theme Styles
//import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
//import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
// OR for Material Theme:
 import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
 import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'

// Import App Custom Styles
import AppStyles from './assets/sass/main.scss'
import VuetifyStyles from 'vuetify/dist/vuetify.css'
import FlexibleGridStyles from 'flexible-grid/dist/css/flexible-grid.css'



import Routes from './routes.js'
import App from './main.vue'

// Init F7 Vue Plugin
Vue.use(Framework7Vue)
Vue.use(Vuetify)

window.hammer = require('hammerjs')

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  // Init Framework7 by passing parameters here
  framework7: {
    root: '#app',
    /* Uncomment to enable Material theme: */
    // material: true,
    routes: Routes
  },
  // Register App Component
  components: {
    app: App
  }
})
