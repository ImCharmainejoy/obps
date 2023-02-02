<template>
  <v-container fluid fill-height>
    <client-only>
      <shared-toolbar />
      <shared-navigation :items="items" />
      <v-main>
        <v-card flat>
          <v-card-title>USER MANUAL</v-card-title>
          <v-tabs
            vertical
            color="#223345"
          >
            <v-tab>
              <v-icon left>{{icons.mdiAccountPlus}}</v-icon>
              Registration
            </v-tab>
            <v-tab>
              <v-icon left>{{icons.mdiOfficeBuilding}}</v-icon>
              Building Permit Application
            </v-tab>

            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p><h2>Registration</h2></p>
                  <p>
                    <h3>Step 1</h3>
                    <v-img
                      contain
                      max-width="80%"
                      :src="register1"
                    ></v-img>
                  </p>
                  <p>
                    <h3>Step 2</h3>
                    <v-img
                      contain
                      max-width="80%"
                      :src="register2"
                    ></v-img> 
                  </p>
                </v-card-text>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p>
                    The quick brown fox jumps over the lazy dog. Unfortunately, the fox wasn't as quick as I expected. It wasn't fast enough to catch the squirrel. That lazy dog just sits there like a piece of sh*t, watching the whole scenario. A rhino walks by scaring the other animals. This wild animal is very territorial, it will attack anything on its territory. Oh, sh*t, it spotted me. Fuck, it's heading this way. Fuck, fuck, fuck, aaahhh.
                  </p>
                </v-card-text>
              </v-card>
            </v-tab-item>
        </v-tabs>
        </v-card>
      </v-main>
    </client-only>
  </v-container>
</template>

<script>
import Global from '~/plugins/mixins/global'
import { mdiAccountPlus, mdiOfficeBuilding, mdiFrequentlyAskedQuestions } from '@mdi/js'
import imagePath from '~/plugins/imagepath'
// import { isEmpty } from 'lodash'
export default {
  mixins: [Global, imagePath],
  data() {
    return {
      items: [
        { title: 'FAQ', icon: 'mdi-frequently-asked-questions', name: 'index-faqs' },
          { title: 'User Manual', icon: 'mdi-folder-information', name: 'index-usermanual' }
      ],
      icons: {
        mdiAccountPlus,
        mdiOfficeBuilding,
        mdiFrequentlyAskedQuestions,
      },
    }
  },
  created() {
    // let user = null
    // if (process.client) {
    //   const token = localStorage.getItem('token')
    //   if (!isEmpty(localStorage.vuex)) {
    //     user = JSON.parse(localStorage.vuex).user.user
    //   }
    //   if (!isEmpty(user) && token) {
    //     this.goTo('index-faqs')
    //   } else {
    //     localStorage.clear()
    //     this.goTo('index')
    //   }
    // }
  }
}
</script>
