<template>
  <v-btn
    fab
    fixed
    right
    dark
    :large="mobile ? false : true"
    bottom
    class="float text-none"
    @click="$emit('scrollPage')"
    color="blue darken-1">
    <v-icon large>
      {{ icon }}
    </v-icon>
  </v-btn>
</template>
<script>
  import Global from '~/plugins/mixins/global'
  export default {
    mixins: [
      Global
    ],
    props: {
      icon: String
    }
  }
</script>
