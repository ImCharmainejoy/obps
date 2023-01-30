<template>
  <div class="text-center form-z-index">
    <client-only>
      <v-menu
        v-model="menu"
        offset-x
        transition="slide-y-transition"
        persistent
        bottom
        right
        :close-on-click="false"
        :close-on-content-click="false"
        :nudge-bottom="60"
        max-width="450px"
      >
        <template v-slot:activator="{ on }">
          <v-toolbar-items  
            v-on="on"
            class="ma-0 pa-0 pointer"
            >
            <v-list
              class="ma-0 pa-0">
              <v-list-item
               class="ma-0 pa-0">
              <v-avatar
                class="pa-1 primary-bg-color"
                size="42"
              >
                <span v-if="wordCount(name_initials) > 3" class="pa-2 white--text caption">{{ initialLetter(name_initials) }}</span>
                <span v-if="wordCount(name_initials) < 4" class="pa-2 white--text text-h7">{{ initialLetter(name_initials) }}</span>
              </v-avatar>
              <v-icon right v-show="!menu">keyboard_arrow_down</v-icon>
              <v-icon right v-show="menu">keyboard_arrow_up</v-icon>
            </v-list-item>
            </v-list>
          </v-toolbar-items>
        </template>
        <v-card>
          <v-list>  
            <v-list-item>
              <v-avatar
                class="pa-1 primary-bg-color white--text"
                size="70">
                <span v-if="wordCount(name) > 3" class="pa-2 white--text caption">{{  
                initialLetter(name) }}</span>
                <span v-if="wordCount(name) < 4" class="pa-2 white--text text-h7">{{ initialLetter(name) }}</span>
              </v-avatar>
              </v-avatar>
              <v-list-item-content class="pl-3">
                <v-list-item-title class="font-weight-medium">{{ textCapitalize(name) }}</v-list-item-title>
                <v-list-item-subtitle class="caption">{{ role_name === 'Applicant' ? textCapitalize(applicant_role_type) : role_name }}</v-list-item-subtitle>
                <v-list-item-subtitle class="caption">{{ email }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list>
            <v-list-item class="pointer log-menu"
              v-if="roleId === 3"
              @click.enter="goToProfile">
              <v-list-item-action>
                <v-icon large>mdi-account-box</v-icon>
              </v-list-item-action>
              <v-list-item-title class="grey--text font-weight-medium">My Profile</v-list-item-title>
            </v-list-item>

            <v-list-item class="pointer log-menu"
              @click="dialog = true, menu = false">
              <v-list-item-action>
                <v-icon large>mdi-logout-variant</v-icon>
              </v-list-item-action>
              <v-list-item-title class="grey--text font-weight-medium">Log out</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </client-only>

  <shared-confirm-dialog
    :dialog="dialog"
    @proceed="logout()"
    @close="dialog = false"
    message="Are you sure you want to log out ?"
    color="primary-bg-color"
    :hasConfirm="true"
    :hasClose="true"
    :isOutlined="true"
    icon="mdi-logout"
  />
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import Global from '~/plugins/mixins/global'
  import profile from '~/plugins/mixins/constants/profile'
  export default {
    mixins: [
      Global,
      profile
    ],
    data: () => ({
      dialog: false,
      menu: false
    }),
    computed: {
      ...mapGetters('user', ['user'])
    },
    methods: {
      goToProfile () {
        this.menu = false
        this.goTo('index-myprofile')
      },
      logout () {
        this.$nextTick(function () {
          this.Logout()
        })
        this.goTo('index')
      }
    }
  }
</script>
