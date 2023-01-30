<template>
  <v-container fluid fill-height class="primary-bg-color">
    <v-layout wrap justify-center align-center>
      <v-flex xs12>
        <shared-logo
          fontStyle="color: white" />
        <v-flex xs12>
          <v-container dark class="ma-0">
            <v-layout wrap justify-center align-center>
              <v-flex xs12>
                <v-layout wrap justify-center align-center>
                  <v-flex xs12 v-if="isMessage">
                    <v-card flat color="#394757" class="mx-2 my-2 py-0">
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
                      autocomplete="off"
                      placeholder="Email"
                      v-model="form.email"
                      background-color="white"
                      color="#223345"
                      class="mx-2 black--text"
                      prepend-inner-icon="email"
                      @keyup.enter="submit()"
                      :error-messages="errors['email']"
                    ><template v-slot:label>
                     <span class="black--text font-weight-medium">Email</span>
                    </template>
                  </v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      outlined
                      background-color="white"
                      color="#223345"
                      @keyup.enter="submit()"
                      autocomplete="off"
                      placeholder="Password"
                      :append-icon="show ? 'visibility_off' : 'visibility'"
                      :type="show ? 'text' : 'password'"
                      @click:append="show = !show"
                      v-model="form.password"
                      light
                      class="mx-2 black--text"
                      :hide-details="errors['password'] ? false : true"
                      prepend-inner-icon="lock"
                      :error-messages="errors['password']"
                    ><template v-slot:label>
                     <span class="black--text font-weight-medium">Password</span>
                    </template>
                  </v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-card-actions class="my-0 py-0">
                      <v-spacer />
	                    <v-btn
	                      class="mt-0 pt-0 mb-2 white--text"
	                      text
	                      plain
	                      @click="goToForgotPass"
	                    >Forgot password?</v-btn>
                    </v-card-actions>
                  </v-flex>
                  <v-flex xs12 class="pa-2">
                    <v-btn
                      large
                      :loading="loading"
                      @click="submit()"
                      class="mb-2 secondary-bg-color"
                      block
                    >Login</v-btn>
                  </v-flex>
                  <v-flex xs12 class="text-center white--text" :class="subtitleClass">
                    Don't have an account yet?
                  </v-flex>
                  <v-flex xs12 class="pa-2">
                    <v-btn
                      large
                      class="secondary-text-color"
                      block
                      outlined
                      @click="goToRegister"
                    >Register
                    </v-btn>
                  </v-flex>
                  <v-flex xs12>
                    <v-card-actions class="white--text card-actions my-0 py-0">
                      <v-spacer />
                      <v-btn
                        class="white--text"
                        text
                        plain
                        @click="goToPrivacy"
                      >PRIVACY POLICY</v-btn>
                    </v-card-actions>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  import Global from '~/plugins/mixins/global'
  import imagePath from '~/plugins/imagepath'
  import { mapActions, mapMutations } from 'vuex'
  import { isUndefined, isEmpty, trim } from 'lodash'
  export default {
    mixins: [
      Global,
      imagePath
    ],
    data: () => ({
      show: false,
      form: {},
      loading: false,
      errors: {},
      color: '',
      text: '',
      isMessage: false
    }),
    computed: {
      titleClass () {
        if (this.$vuetify.breakpoint.mdAndUp) {
          return 'title'
        } else {
          return 'subtitle-1'
        }
      },
      subtitleClass () {
        if (this.$vuetify.breakpoint.mdAndUp) {
          return 'subtitle-1'
        } else {
          return 'subtitle-2'
        }
      },
      heightClass () {
        if (this.$vuetify.breakpoint.mdAndUp) {
          return '120px'
        } else {
          return '100px'
        }
      }
    },
    methods: {
      ...mapActions('user', ['POST_API']),
      ...mapMutations('user', ['SET_USER']),
      ...mapMutations('events', ['SET_ACTIVE']),
      goToRegister () {
        this.goTo('index-register')
      },
      goToForgotPass () {
      	this.goTo('index-forgotpassword')
      },
      goToPrivacy () {
        this.goTo('index-privacypolicy')
      },
      submit () {
        this.errors = {}
        let payload = {
          api: 'login',
          ...this.form
        }
        if (!isEmpty(this.form.email) && !isEmpty(this.form.password)) {
          this.loading = true
          this.POST_API(payload).then(res => {
            this.SET_USER(res.data)
            localStorage.setItem('token', res.data.success)
            if (res.data.user) {
              if (res.data.user.role) {
                if (trim(res.data.user.role.role) === 'Applicant') {
                  this.goTo('index-faqs')
                } else {
                  this.isMessage = true
                  this.color = 'error'
                  this.text = 'Invalid Account'
                }
              } else {
                this.isMessage = true
                this.color = 'error'
                this.text = 'Invalid Account. Please check with your systems administrator.'
              }
            } else {
              this.isMessage = true
              this.color = 'error'
              this.text = 'Invalid Account. Please check with your systems administrator.'
            }
          }).catch(err => {
            if (err) {
              this.loading = false
              if (err.response.data.errors) {
                this.errors = err.response.data.errors
              } else if (err.response.data.error) {
                this.isMessage = true
                this.color = 'error'
                this.text = err.response.data.error
              } else {
                console.log('err:', err)
              }
            }
          }).finally(() => {
            this.loading = false
          })
        } else {
          if (isEmpty(this.form.email)) {
            this.$set(this.errors, 'email', ['Email is required'])
          }
          if (isEmpty(this.form.email)) {
            this.$set(this.errors, 'password', ['Password is required'])
          }
        }
      }
    }
  }
</script>
