<template>
  <client-only>
    <v-layout wrap>
      <v-flex xs12 sm7 md8 lg9 class="landing-bg" v-if="$vuetify.breakpoint.smAndUp">
        <v-container fluid fill-height>
          <v-layout wrap justify-center align-center>
            <v-flex xs12 md8>
              <p class="font-weight-medium mb-0 pb-0 white--text text-justify" :style="titleStyle"><strong>A <span class="secondary-text-color">modern way</span> of processing<br> <span style="text-decoration: underline;" class="secondary-text-color">your building</span> related permits</strong></p><br>
              <p class="font-weight-medium white--text text-justify mt-8 mb-0 pb-0" :style="subtitleStyle">
                This is the official <strong class="secondary-text-color">One-Stop-Shop Permit Application System</strong> for Building and Occupancy permits in Davao City.
              </p><br>
              <p class="font-weight-medium white--text text-justify mb-0 pb-0" :style="smalltitleStyle">
                <strong class="secondary-text-color">Application Process Simplified</strong><br>
                Our step-by-step User Guide will walk you through your application.
              </p><br>
              <p class="font-weight-medium white--text text-justify mb-0 pb-0" :style="smalltitleStyle">
                <strong class="secondary-text-color">Full Online Submission</strong><br>
                Drag and drop your documents into the system for pre-evaluation.
              </p><br>
              <p class="font-weight-medium white--text text-justify mb-0 pb-0" :style="smalltitleStyle">
                <strong class="secondary-text-color">Hear from Us</strong><br>
                Monitor the status of your application and obtain the necessary checklists and recommendations for your project.
              </p><br>
              <!-- <v-layout wrap>
                <v-flex xs12 md6>
                  <span class="title secondary-text-color">Unified Applications</span><br>
                  <ul
                    class="font-weight-medium white--text text-justify"
                    v-for="(item, index) in items" :key="index">
                    <li class="caption">
                      {{ item.name }}
                    </li>
                  </ul>
                </v-flex>
                <v-flex xs12 md6>
                  <span class="title secondary-text-color">Standalone (Ancillary Permits)</span><br>
                  <ul
                    class="font-weight-medium white--text text-justify"
                    v-for="(item, index) in ancillary_items" :key="index">
                    <li class="caption">
                      {{ item.name }}
                    </li>
                  </ul>
                </v-flex>
              </v-layout> -->
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <v-flex xs12 sm5 md4 lg3>
        <shared-login />
      </v-flex>
    </v-layout>
  </client-only>
</template>
<script>
  import Global from '~/plugins/mixins/global'
  import imagePath from '~/plugins/imagepath'
  export default {
    mixins: [
      Global,
      imagePath
    ],
    data: () => ({
      items: [
      {
        name: 'Building Application'
      },
      {
        name: 'Occupancy Application'
      }],
      ancillary_items: [
      {
        name: 'Electronics Permit'
      },
      {
        name: 'Mechanical Permit'
      },
      {
        name: 'Signage Permit'
      }]
    }),
    computed: {
      titleStyle () {
        if (this.$vuetify.breakpoint.lgAndUp) {
          return 'font-size: 45px; letter-spacing: 1px;'
        } else if (this.$vuetify.breakpoint.mdOnly) {
          return 'font-size: 35px; letter-spacing: 1px;'
        } else {
          return 'font-size: 25px; letter-spacing: 1px;'
        }
      },
      subtitleStyle () {
        if (this.$vuetify.breakpoint.lgAndUp) {
          return 'font-size: 25px;'
        } else if (this.$vuetify.breakpoint.mdOnly) {
          return 'font-size: 20px;'
        } else {
          return 'font-size: 15px;'
        }
      },
      smalltitleStyle () {
        if (this.$vuetify.breakpoint.lgAndUp) {
          return 'font-size: 18px;'
        } else if (this.$vuetify.breakpoint.mdOnly) {
          return 'font-size: 13px;'
        } else {
          return 'font-size: 10px;'
        }
      }
    },
    methods: {
      newLink (payload) {
        if (process.client) {
          window.open(payload, '_blank')
        }
      },
      backHome () {}
    }
  }
</script>
