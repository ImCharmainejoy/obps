<template>
  <v-navigation-drawer
    dark
    app
    mobile-breakpoint
    v-model="isDrawer"
    :style="zindexstyle"
    :temporary="isTemporary"
    :apsolute="isTemporary"
    :permanent="isPermanent"
    class="primary-bg-color"
  >
    <v-layout wrap justify-center align-center
      class="mt-12 pt-12 mx-0 px-0">
      <v-flex xs12>
        <h4 class="text-center white--text">
          <v-avatar
            class="pa-1"
            size="60"
            color="white"
          >
            <span v-if="wordCount(name_initials) > 3" class="pa-2 black--text caption">{{
            initialLetter(name_initials) }}</span>
            <span v-if="wordCount(name_initials) < 4" class="pa-2 black--text text-h7">{{ initialLetter(name_initials) }}</span>
          </v-avatar>
        </h4>
        <v-card-text v-if="wordCount(name) > 3" class="text-center mb-0 mt-2 py-0 mr-3 white--text subtitle-1 font-weight-light"
              style="text-align: left; overflow-wrap: break-word; justify-content: center;">{{ name }}</v-card-text>
        <v-card-text v-if="wordCount(name) < 4" class="text-center mb-0 mt-2 py-0 mr-3 white--text subtitle-1 font-weight-light"
              style="text-align: left; overflow-wrap: break-word; justify-content: center;">{{ name }}</v-card-text>
        <v-card-text v-if="wordCount(role_name) > 3" class="text-center py-0 mt-3 mb-2 white--text subtitle-1 font-weight-medium dense"
              style="text-align: left; overflow-wrap: break-word; justify-content: center;"><v-chip label>{{ role_name === 'Applicant' ? textCapitalize(applicant_role_type) : role_name }}</v-chip></v-card-text>
        <v-card-text v-if="wordCount(role_name) < 4" class="text-center py-0 mt-3 mb-2 white--text subtitle-1 font-weight-medium dense"
              style="text-align: left; overflow-wrap: break-word; justify-content: center;"><v-chip label>{{ role_name === 'Applicant' ? textCapitalize(applicant_role_type) : role_name }}</v-chip></v-card-text>
      </v-flex>
    </v-layout>
    <v-divider class="my-2" />
    <v-list dense nav>
      <v-list-item-group v-model="model">
        <span
          v-for="(item, index) in items"
          :key="index"> 
          <v-list-group
            v-if="item.itemGroup"
          >
            <v-list-item slot="activator"
              class="ml-0">
              <v-list-item-icon>
                <v-icon class="white--text" left>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <NuxtLink
              v-for="(itemlist, indexList) in item.itemGroup"
              :key="indexList"
              :to="{ name: itemlist.name, params: itemlist.params }"
              class="text-decor-none"
              >
              <v-list-item
                :class="getActive(model,indexList)">
                <v-list-item-icon>
                </v-list-item-icon>
                <v-list-item-title >
                  <v-icon>{{ itemlist.icon }}</v-icon>
                  {{ itemlist.title }}
                </v-list-item-title>
              </v-list-item>
            </NuxtLink>
          </v-list-group>

          <v-list-item
            v-else
            class="ml-2 pointer"
            @click="goTo(item.name)"
            :class="getActive(model,index)"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </span>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
  import Global from '~/plugins/mixins/global'
  import profile from '~/plugins/mixins/constants/profile'
  import imagepath from '~/plugins/imagepath'
  import { mapGetters, mapMutations } from 'vuex'
  import { isEmpty } from 'lodash'
  export default {
    mixins: [
      Global,
      imagepath,
      profile
    ],
    props: {
      items: Array
    },
    data () {
      return {
        nav_drawer: true,
        right: null,
        mini: false,
        model: 0
      }
    },
    computed: {
      ...mapGetters('events', ['drawer']),
      imgWidth () {
        if (this.$vuetify.breakpoint.smAndUp) {
          return '40px'
        } else {
          return '50px'
        }
      },
      imgHeight () {
        if (this.$vuetify.breakpoint.smAndUp) {
          return '40px'
        } else {
          return '40px'
        }
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
      logoTitle () {
        if (this.$vuetify.breakpoint.mdAndUp) return ''
        return 'letter-spacing: -1px; font-size: 21px; margin-left: -1px;'
      },
      isPermanent () {
        if (this.$vuetify.breakpoint.mdAndUp) {
          return this.isDrawer
        } else {
          return false
        }
      },
      isTemporary () {
        if (this.mobile) {
          return true
        } else {
          return false
        }
      },
      zindexstyle () {
        if (this.mobile) {
          return ''
        } else {
          return 'z-index: 1;'
        }
      },
      isDrawer: {
        get: function () {
          return this.drawer
        },
        // setter
        set: function (value) {
          return this.SET_DRAWER(value)
        }
      }
    },
    methods: {
      ...mapMutations('events', ['SET_DRAWER']),
      LogoutUser () {
        this.$nextTick(() => {
          this.Logout()
        })
        this.$router.push({ name: 'index' })
      }
    }
  }
</script>
<style>
div.v-toolbar__extension {
  background-color: #082B49;
  text-align: left;
}
.v-toolbar--prominent .v-toolbar__content {
  align-items: center !important;
}
.v-toolbar--prominent:not(.v-toolbar--bottom) .v-toolbar__title {
  align-self: unset !important;
}
.v-toolbar__title.v-app-bar-title, .v-toolbar__title.v-app-bar-title>div, .v-toolbar__title.v-app-bar-title>div>div {
  width: 100% !important;
}
</style>
