<!-- <template>
  <h3>USER MANUAL</h3>
</template> -->
<template>
  <v-container fluid fill-height>
    <client-only>
      <shared-toolbar />
      <shared-navigation :items="items" />
      <v-main>
        <v-card flat>
          <v-card-title>USER MANUAL</v-card-title>
        </v-card>
      </v-main>
    </client-only>
  </v-container>
</template>
<script>
import Global from '~/plugins/mixins/global'
import { isEmpty } from 'lodash'
export default {
  mixins: [Global],
  data() {
    return {
      items: [
        { title: 'FAQ', icon: 'mdi-frequently-asked-questions', name: 'index-faqs' },
          { title: 'User Manual', icon: 'mdi-folder-information', name: 'index-usermanual' }
      ]
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
