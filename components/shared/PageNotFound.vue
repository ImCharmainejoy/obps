<template>
  <client-only>
    <v-container fluid fill-height>
      <v-layout wrap justify-center align-center>
        <v-flex xs12 sm9 md6>
          <shared-logo fontStyle="color: black" />
    	  <v-card class="px-5 pt-5" flat color="#F0F2F5" style="border: 1px solid #E5E4E4;">
            <v-card-title>404 Not Found</v-card-title>
            <v-card-text>An error occurred</v-card-text>
            <v-card-text>The page you were looking for does not exist.</v-card-text>
              <v-layout wrap justify-center align-center class="mb-12">
              <v-flex xs12>
                <v-card-actions class="py-0">
                  <v-spacer />
                  <v-btn
                    @click="homePage()"
                    class="mb-2 mr-1 white--text text-none body-2 primary-bg-color"
                    width="100px"
                  >Home page</v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </client-only>
</template>
<script>
  import Global from '~/plugins/mixins/global'
  export default {
    mixins: [
      Global
    ],
    methods: {
      homePage () {
        this.$nextTick(function () {
          this.Logout()
        })
        this.goTo('index')
      }
    }
  }
</script>
