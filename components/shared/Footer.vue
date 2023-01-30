<template>
<v-footer absolute>
  <v-layout wrap justify-center align-center
    :class="mobile ? 'caption' : ''"
    class="text-center"
  >
    <v-img class="ml-2" :src="citc_logo" style="max-width: 30px; max-height: 50px;" />
    <v-img class="mx-0 px-0" :src="davaolifeishere_logo" style="max-width: 80px; max-height: 100px;" />
    <v-flex xs12>
      ©  {{ new Date().getFullYear() }}-{{ new Date().getFullYear() + 1 }} — <strong>Online Building Permit System</strong>
    </v-flex>
    
    <li class="caption">Developed by</li>
    <v-img class="mx-2 pointer" :src="infosoft_logo" style="max-width: 80px; max-height: 100px;" @click="newLink('https://infosoftstudio.com/')"/>
    <!-- <li class="caption">Powered by CITC</li> -->
  </v-layout>
</v-footer>
</template />
<script>
  import Global from '~/plugins/mixins/global'
  import imagePath from '~/plugins/imagepath'
  export default {
    mixins: [
      Global,
      imagePath
    ],
    props: {
      colspan: String
    },
    methods: {
      newLink (payload) {
        if (process.client) {
          window.open(payload, '_blank')
        }
      }
    }
  }
</script>
