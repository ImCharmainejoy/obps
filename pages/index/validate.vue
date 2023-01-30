<template>
  <client-only>
    <v-layout wrap>
      <v-flex xs12 sm7 md8 lg9>
        <v-container fluid fill-height>
          <v-layout wrap justify-center align-center>
            <v-flex xs12 v-if="mobile">
              <shared-logo />
            </v-flex>
            <v-flex xs12 md8>
              <v-card class="px-5" flat color="#F0F2F5" style="border: 1px solid #E5E4E4;">
                <v-card-title>Email Validation</v-card-title>
                <v-card-text class="mb-12 text-justify" :class="titleClass">We have sent a verification email to <span class="font-weight-bold secondary-text-color">{{ user.email }}</span>. Please check your email.</v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    large
                    @click="goTo('index')"
                    class="mb-2 px-5 primary-bg-color white--text"
                  >Continue</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex xs12>
              <shared-footer :colspan="mobile ? '12' : '8'" />
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <v-flex xs12 sm5 md4 lg3 v-if="$vuetify.breakpoint.smAndUp">
        <shared-building-logo-card />
      </v-flex>
    </v-layout>
  </client-only>
</template>
<script>
import Global from '~/plugins/mixins/global'
import { mapGetters } from 'vuex'
import { isEmpty } from 'lodash'
export default {
  mixins: [Global],
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters('user', ['user']),
    titleClass () {
      if (this.$vuetify.breakpoint.lgAndUp) {
        return 'subtitle-1 ml-5'
      } else {
        return 'subtitle-2'
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      let user = null
      if (process.client) {
        if (!isEmpty(localStorage.vuex)) {
          user = JSON.parse(localStorage.vuex).user.user
        }
        if (!isEmpty(user)) {
          vm.goTo('index-validate')
        } else {
          localStorage.clear()
          vm.goTo('index')
        }
      }
    })
  }
}
</script>
