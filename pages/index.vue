<template>
<v-layout wrap>
  <client-only>
   	<v-offline
   	  style="position: absolute;"
      @detected-condition="setConnected">
    </v-offline>
    <shared-snackbar
      :snack="snackbar"
      :color="color"
      :message="snackMsg"
      @close="snackbar = false"
      :icon="icon"
    />
   <nuxt-child/>
 </client-only>
</v-layout>
</template>
<script>
  import { VOffline } from 'v-offline'
  import Global from '~/plugins/mixins/global'
  import { isEmpty } from 'lodash'
  export default {
    mixins: [Global],
    components: {
      VOffline
    },
    data () {
      return {
        snackbar: false,
        color: '',
        snackMsg: '',
        icon: ''
      }
    },
    methods: {
      setConnected (val) {
      	this.snackbar = false
        if (val) {
      	  this.snackbar = true
          this.color = 'green'
          this.snackMsg = 'You are currently online.'
          this.icon = 'mdi-wifi'
        } else {
      	  this.snackbar = true
      	  this.color = 'red'
          this.snackMsg = 'You are currently offline.'
          this.icon = 'mdi-wifi-off'
        }
      }
    }
  }
</script>
