<template>
  <v-flex xs12>
    <v-img
      width="100%"
      :height="heightClass"
      contain
      alt="OCBO"
      :src="no_bg_logo">
    </v-img>
  <p class="mb-12 mt-3 font-weight-medium text-center"
    :style="fontStyle"
    :class="titleClass">Office of the City Building Official</p>
  </v-flex>
</template>
<script>
  import imagePath from '~/plugins/imagepath'
  export default {
    mixins: [
      imagePath
    ],
    props: {
      fontStyle: String
    },
    computed: {
      heightClass () {
        if (this.$vuetify.breakpoint.lgAndUp) {
          return '150px'
        } else {
          return '100px'
        }
      },
      titleClass () {
        if (this.$vuetify.breakpoint.lgAndUp) {
          return 'title'
        } else {
          return 'subtitle-1'
        }
      }
    }
  }
</script>
