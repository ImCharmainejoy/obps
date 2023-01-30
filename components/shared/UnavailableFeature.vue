<template>
<v-card flat :width="cardWidth ? cardWidth : '100%'" :height="cardheight ? cardheight : '80%'" class="mt-3" style="position: absolute; z-index: 2; opacity: 0.8;">
  <v-container fluid fill-height>
    <v-layout wrap justify-center align-center>
      <v-flex xs12>
      <p class="text-h4 text-center font-weight-bold">This feature is not yet available.<br/></p>
      <p class="text-center body-2 font-weight-bold">Sorry for the inconvenience. Please enjoy the existing features for now. Thank you!</p  >
      </v-flex>
    </v-layout>
  </v-container>
</v-card>
</template>
<script type="text/javascript">
  import Global from '~/plugins/mixins/global'
  export default {
    mixins: [
      Global
    ],
    props: {
      cardWidth: String,
      cardheight: String
    }
  }
</script>
