<template>
  <v-container fluid fill class="tertiary-bg-color">
  <v-btn
    fixed
    top
    left
    dark
    text
    style="z-index: 999;"
    class="primary-text-color"
    @click="back">
    <v-icon medium class="black--text">chevron_left</v-icon>
    Back
  </v-btn>
    <client-only>
      <shared-privacy-policy />
      <shared-footer />
    </client-only>
  </v-container>
</template>
<script>
  import Global from '~/plugins/mixins/global'
  export default {
    mixins: [
      Global
    ],
    methods: {
      back () {
        this.goTo('index')
      }
    }
  }
</script>
