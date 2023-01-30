<template>
  <client-only>
    <v-layout wrap>
      <v-flex xs12 sm7 md8 lg9>
        <v-container fluid fill-height>
          <v-layout wrap justify-center align-center>
            <v-flex xs12 v-if="mobile">
              <shared-logo />
            </v-flex>
            <v-flex xs12 sm8 md6 lg5>
              <v-card class="px-5" flat color="#F0F2F5" style="border: 1px solid #E5E4E4;">
                <v-card-title>Reset password</v-card-title>
                  <v-layout wrap justify-center align-center class="mb-12">
                  <v-flex xs12 v-if="isMessage">
                    <v-card flat color="transparent" class="mx-2 my-2 py-0">
                      <v-layout wrap justify-center align-center>
                        <v-flex xs12>
                          <v-card-text headline v-if="color === 'success'" class="green--text ml-2">{{ text }}</v-card-text>
                          <v-card-text headline v-if="color === 'error'" class="red--text ml-2">{{ text }}</v-card-text>
                        </v-flex>
                      </v-layout>
                    </v-card>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      outlined
                      ref="password"
                      @keyup.enter="submit()"
                      autocomplete="off"
                      placeholder="New Password"
                      background-color="white"
                      color="#223345"
                      :append-icon="show ? 'visibility_off' : 'visibility'"
                      :type="show ? 'text' : 'password'"
                      @click:append="show = !show"
                      v-model="password"
                      class="white--text my-0 py-0 mx-3"
                      prepend-inner-icon="fas fa-lock"
                      :error-messages="errors['password']"
                    />
                    <v-card-actions class="py-0">
                      <v-spacer />
                      <v-btn
                        :loading="loading"
                        @click="submit()"
                        class="mb-2 mr-1 white--text text-none body-2 primary-bg-color"
                        width="100px"
                      >Submit</v-btn>
                    </v-card-actions>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
            <v-flex xs12 class="mt-12 mb-3">
              <shared-footer />
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
  import imagePath from '~/plugins/imagepath'
  import { mapActions } from 'vuex'
  import { isUndefined } from 'lodash'
  export default {
    mixins: [
      Global,
      imagePath
    ],
    data: () => ({
      password: '',
      errors: {},
      loading: false,
      show: false,
      color: '',
      text: '',
      isMessage: false
    }),
    computed: {
      titleClass () {
        if (this.$vuetify.breakpoint.lgAndUp) {
          return 'subtitle-1 ml-5'
        } else {
          return 'subtitle-2'
        }
      }
    },
    methods: {
      ...mapActions('user', ['POST_API']),
      submit () {
        let payload = {
          api: 'reset/password',
          token: this.$nuxt._route.params.id,
          password: this.password
        }
        this.loading = true
        this.POST_API(payload).then(res => {
          this.goTo('index')
        }).catch(err => {
          if (err) {
            if (err.response.data.errors) {
              this.errors = err.response.data.errors
            }
            if (err.response.data.message && isUndefined(err.response.data.errors)) {
              this.isMessage = true
              this.color = 'error'
              this.text = err.response.data.message
            }
          }
        }).finally(() => {
          this.loading = false
        })
      },
      backHome () {
        this.goTo('index')
      }
    }
  }
</script>
