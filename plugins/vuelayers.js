import Vue from 'vue'
import VueLayers from 'vuelayers'
import 'vuelayers/dist/vuelayers.css' // needs css-loader
import { createStyle } from 'vuelayers/dist/ol-ext'

const style = createStyle({
  imageRadius: 100,
  imageStrokeColor: '#000',
  imageFillColor: '#ffffff',
  text: 'qwerty',
  textFillColor: 'blue',
})
Vue.use(VueLayers)
