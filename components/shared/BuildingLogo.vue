<template>
  <v-flex xs12>
    <v-img
      v-if="isOnline"
      style="background-color: transparent;"
      :style="imgStyle"
      width="100%"
      height="100%"
      contain
      alt="OCBO"
      :src="movingbuilding_bg">
    </v-img>
    <v-img
      v-if="isOffline"
      style="background-color: transparent;"
      :style="imgStyle"
      width="100%"
      height="100%"
      contain
      alt="OCBO"
      :src="movingbuilding_png">
    </v-img>
  </v-flex>
</template>
<script>
  import Global from '~/plugins/mixins/global'
  import imagePath from '~/plugins/imagepath'
  export default {
    mixins: [
      Global,
      imagePath
    ],
    computed: {
      imgStyle () {
        if (this.$vuetify.breakpoint.lgAndUp) {
          return 'margin-top: 200px'
        } else {
          return ''
        }
      },
      isOffline () {
        return this.$nuxt.isOffline
      },
      isOnline () {
        return this.$nuxt.isOnline
      }
    }
  }
</script>
