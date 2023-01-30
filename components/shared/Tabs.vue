<template>
  <v-card tile>
    <v-tabs
      v-model="activetab"
      :vertical="$vuetify.breakpoint.mdAndUp"
      next-icon="keyboard_arrow_right"
      prev-icon="keyboard_arrow_left"
      :show-arrows="isArrowEnabled"
      slider-color="transparent"
      class="tabs justify-center align-top mt-5 pb-2">
      <v-card
        flat
        tile
        class="text-center card-text-color"
        v-if="$vuetify.breakpoint.mdAndUp">
        <v-card-title class="justify-center subtitle-1 font-weight-medium">
          Checklist of General<br>Requirements for<br>{{ title }}
        </v-card-title>
        <v-divider />
      </v-card>

      <NuxtLink
        v-for="(item, index) in scrollTo" :key="index"
        class="text-decor-none checklist-color"
        :to="{ name: item.route }">
        <v-tab
          :class="getIndex(index, activetab)"
          class="tab pointer checked-menu text-none tab-width"
          @click="setActiveTab(index)">
          <v-card-actions v-if="showIcon">
            <v-btn
              v-if="item.icon !== ''"
              :color="getColor(item.icon)"
              x-small
              fab
              depressed>
              <v-icon class="white--text">{{ item.icon }}</v-icon>
            </v-btn>
            <span v-else class="mx-4"></span>
          </v-card-actions>
          <v-card-text class="text-left pl-5 font-weight-regular">{{ item.title }}</v-card-text>
        </v-tab>
        <v-card flat tile style="height: 3px; width: 100%;" color="#566794" v-if="index === activetab" />
      </NuxtLink>
    </v-tabs>
  </v-card>
</template>
<script>
  import Global from '~/plugins/mixins/global'
  import { mapGetters, mapMutations } from 'vuex'
  import { isEmpty } from 'lodash'
  export default {
    mixins: [Global],
    props: {
      isIconEnabled: {
        type: Boolean,
        default: true
      },
      isBtnDisabled: {
        type: Boolean,
        default: true
      },
      isRouteEnabled: {
        type: Boolean,
        default: true
      },
      scrollTo: {
        type: [Array, Object],
        default: () => ({
          title: String,
          icon: String,
        })
      },
      active: Number,
      isSubmitEnabled: {
        type: Boolean,
        default: true
      },
      title: String
    },
    data () {
      return {
        activetab: this.active,
        offsetTop: 0,
        showIcon: this.isIconEnabled,
        showSubmit: this.isSubmitEnabled
      }
    },
    watch: {
      active (val) {
        this.activetab = val
      }
    },
    computed: {
      ...mapGetters('registration', ['register']),
      isArrowEnabled () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return true
          case 'sm': return true
          case 'md': return false
        }
      },
      scrollheight () {
        return window.innerHeight
      },
      isDividerEnabled () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return false
          case 'sm': return false
          case 'md': return true
          case 'lg': return true
          case 'xl': return true
        }
      },
      userStatus () {
        return this.register.position
      },
      viewProfile () {
        return this.$route.params.position
      }
    },
    methods: {
      ...mapMutations('events', ['SET_ACTIVE']),
      isIconEmpty (item) {
        return isEmpty(item.icon)
      },
      setActiveTab (tab) {
        this.$nextTick(() => {
          this.SET_ACTIVE(tab)
        })
      }
    }
  }
</script>
