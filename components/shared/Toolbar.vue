<template>
  <v-app-bar color="white" fixed clipped class="toolbar-bg elevation-1 xs12" style='padding-left: 10px; padding-right: auto; z-index: 999;'>
    <v-app-bar-nav-icon @click="doToggleNav(toggle = !toggle)">
    </v-app-bar-nav-icon>
    <v-toolbar-title class="pointer" v-if="$vuetify.breakpoint.smAndUp">Office of the City Building Official</v-toolbar-title>
    <v-toolbar-title v-if="mobile" class="pointer font-weight-bold caption">OCBO</v-toolbar-title>
    <v-spacer />

    <shared-logout-menu />
  </v-app-bar>
</template>
<script>
  import Global from '~/plugins/mixins/global'
  import imagepath from '~/plugins/imagepath'
  import { mapMutations, mapGetters } from 'vuex'
  import { includes } from 'lodash'
  export default {
    mixins: [
      Global,
      imagepath
    ],
    data () {
      return {
        toggle: false,
        openMenu: false
      }
    },
    computed: {
      ...mapGetters('user', ['user', 'application_item']),
      ...mapGetters('events', ['drawer']),
      routePath () {
        return this.$nuxt._route.path
      },
      fontSize () {
        if (this.$vuetify.breakpoint.smAndUp) {
          return 'text-h7'
        } else {
          return 'caption'
        }
      },
      isToken () {
        const token = localStorage.getItem('token')
        if (!token) return false
        return true
      },
      isRemarkedDocument () {
        return this.routePath === '/remarkeduploads'
      }
    },
    watch: {
      drawer: {
        handler (val) {
          this.toggle = val
        },
        deep: true
      }
    },
    methods: {
      ...mapMutations('events', ['SET_DRAWER']),
      ...mapMutations('form', ['RESET_FORM_STATE']),
      hasViewRoute (route) {
        return includes(route, 'viewmore')
      },
      doToggleNav (val) {
        this.SET_DRAWER(val)
      },
      goToRegister () {
        this.SET_PRIVACY_DIALOG(true)
        this.$router.push({ name: 'index-registerbusiness' })
      },
      goToLogin () {
        this.SET_IS_TOOLBAR(true)
        this.SET_VIEW_MORE_DIALOG(true)
        this.SET_IS_EMAIL(false)
      },
      goToSearch () {
        this.$nextTick(function () {
          this.$router.push({ name: 'index-searchapplication' })
          this.RESET_FORM_STATE()
          this.Logout()
        })
      },
      goToBusiness () {
        this.$nextTick(function () {
          this.Logout()
        })
        this.$router.push({ name: 'index-businessincentives' })
      }
    },
    mounted () {
      this.toggle = this.drawer
    }
  }
</script>
  