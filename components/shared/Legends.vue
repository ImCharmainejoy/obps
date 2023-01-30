<template>
 <client-only>
   <v-card class="pa-1">
     <v-layout wrap>
       <v-flex xs12 md12 :lg3="isPreAndEval" :lg7="!isPreAndEval">
         <v-card tile flat class="pl-3" :class="borderClass">
          <v-layout wrap justify-center align-center class="py-1">
            <v-flex xs12>
              <span class="mx-1 break-word body-1 font-weight-bold">{{ isPreAndEval ? 'Evaluation' : 'Pre-Evaluation' }} legend</span>
            </v-flex>
            <v-flex xs12>
              <v-layout wrap justify-center align-center class="pa-1">
                <v-flex
                  v-for="(item, index) in evaluations" :key="index">
                  <span v-if="!isPreAndEval">
                    <v-btn
                      :color="item.color"
                      x-small
                      fab
                      v-if="item.title !== 'Disapproved'"
                      class="my-2"
                      depressed>
                      <v-icon class="white--text">{{ item.icon }}</v-icon>
                    </v-btn>
                    <small v-if="item.title !== 'Disapproved'">{{ item.title }}</small>
                  </span>
                  <span v-else>
                    <v-btn
                      :color="item.color"
                      x-small
                      fab
                      class="my-2"
                      depressed>
                      <v-icon class="white--text">{{ item.icon }}</v-icon>
                    </v-btn>
                    <small>{{ item.title }}</small>
                  </span>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-card>
       </v-flex>
       <v-flex xs12 md12 :lg7="isPreAndEval && isApplicant" :lg9="isPreAndEval && !isApplicant"
         v-if="isPreAndEval">
        <v-card tile flat class="pl-3" :class="borderClass1">
          <v-layout wrap>
            <v-flex xs12>
              <span class="mx-1 break-word body-1 font-weight-bold">Evaluator’s Legend</span>
            </v-flex>
            <v-flex xs12>
              <v-layout wrap class="pa-1">
                <v-flex :class="item.flex"
                  v-for="(item, index) in evaluators" :key="index">
                  <v-chip
                    :color="item.color"
                    small
                    label
                    class="white--text my-2">
                    {{ index + 1 }}
                  </v-chip>
                  <small class="break-word">{{ item.title }}</small>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-card>
       </v-flex>
       <v-flex
          v-if="isPreAndEval && isApplicant"
          xs12 md12 :lg2="isPreAndEval" :lg5="!isPreAndEval">
        <v-layout wrap justify-center align-center fill-height>
          <v-btn
            large
            color="#7C7C7C"
            class="mx-1 break-word my-1 white--text text-center"
            @click="doToggleNav(toggleguide = !toggleguide)"
          >
          <v-icon left color="#7C7C7C" class="white--text">{{ guidedrawer ? 'mdi-chevron-left' : 'mdi-chevron-right' }}</v-icon>
            User Guide
          </v-btn>
          <v-btn
            large
            width="140"
            class="mx-1 my-4 primary-bg-color white--text text-center"
            @click="$emit('doApply')"
          >
            Apply Now
          </v-btn>
        </v-layout>
       </v-flex>
     </v-layout>
   </v-card>
 </client-only>
</template>
<script>
  import legendsConstants from '~/plugins/mixins/constants/legends.js'
  import { mapGetters, mapMutations } from 'vuex'
  import Global from '~/plugins/mixins/global'
  export default {
    mixins: [
      legendsConstants,
      Global
    ],
    props: {
      isPreAndEval: {
        type: Boolean,
        default: false
      },
      guideTitle: String,
      isApplicant: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        toggleguide: false
      }
    },
    computed: {
      ...mapGetters('events', ['guidedrawer']),
      borderClass () {
        if (this.$vuetify.breakpoint.lgAndUp) {
          return ''
        } else if (this.$vuetify.breakpoint.mdOnly) {
          return 'horizontal'
        } else if (this.$vuetify.breakpoint.smOnly) {
          return 'horizontal'
        } else {
          return 'horizontal'
        }
      },
      borderClass1 () {
        if (this.$vuetify.breakpoint.lgAndUp) {
          return 'vertical-border-left'
        } else if (this.$vuetify.breakpoint.mdOnly) {
          return 'horizontal'
        } else if (this.$vuetify.breakpoint.smOnly) {
          return 'horizontal'
        } else {
          return 'horizontal'
        }
      },
      classWidth () {
        if (this.$vuetify.breakpoint.lgOnly) {
          return '170'
        } else {
          return ''
        }
      }
    },
    watch: {
      guidedrawer: {
        handler (val) {
          this.toggleguide = val
        },
        deep: true
      }
    },
    methods: {
      ...mapMutations('events', ['SET_GUIDE_DRAWER']),
      doToggleNav (val) {
        this.SET_GUIDE_DRAWER(val)
      }
    }
  }
</script>
