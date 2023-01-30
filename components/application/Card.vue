<template>
  <client-only>
    <v-container fluid fill-height class="mt-10">
      <v-layout wrap justify-center align-center>
        <v-flex xs12 md10>
          <v-card class="mx-2 card-title-border">
            <v-card flat class="card-title-border" color="#576AAD">
              <v-card-title class="my-0 py-2 white--text">Unified Applications</v-card-title>
            </v-card>
            <v-container>
              <v-layout wrap justify-center align-center>
                <v-flex :class="item.flex"
                  v-for="(item, index) in items" :key="index">
                  <v-card
                    :disabled="item.name === 'OCCUPANCY APPLICATION' ? true : false"
                    class="mx-2 my-12 pointer"
                    max-width="344"
                    outlined
                    style="border: 3px solid #DBDBDA;"
                    @click.stop="doToggleNav"
                    @click="$router.push({ name: item.route })"
                  >
                  <v-card flat
                    style="position: absolute; z-index: 2; opacity: 0.8;"
                    v-if="item.name === 'OCCUPANCY APPLICATION'">
                    <v-layout wrap justify-center align-center>
                      <v-flex xs12>
                      <p class="mt-2 text-h8 text-center font-weight-bold">This feature is not yet available.<br/></p>
                      <p class="text-center caption font-weight-bold">Sorry for the inconvenience. Please enjoy the existing features for now. Thank you!</p>
                      </v-flex>
                    </v-layout>
                  </v-card>
                    <v-list-item>
                      <v-list-item-content>
                         <v-avatar tile size="80" class="mb-2">
                          <img
                            :src="item.icon"
                            :alt="item.name"
                          >
                        </v-avatar>
                        <v-list-item-title class="font-weight-medium text-h6 mb-1 text-center">
                          {{ item.name }}
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
        <v-flex xs12 md10>
          <v-card class="mx-2 card-title-border">
            <v-card flat class="card-title-border" color="#576AAD">
              <v-card-title class="my-0 py-2 white--text">Standalone (Ancillary Permits)</v-card-title>
            </v-card>
            <v-container>
              <v-layout wrap justify-center align-center>
                <shared-unavailable-feature />
                <v-flex
                  :class="item.flex"
                  v-for="(item, index) in ancillary" :key="index">
                  <v-card
                    class="mx-2 my-12"
                    max-width="344"
                    outlined
                    style="border: 3px solid #DBDBDA;"
                  >
                    <v-list-item>
                      <v-list-item-content>
                         <v-avatar tile size="80" class="mb-2">
                          <img
                            :src="item.icon"
                            :alt="item.name"
                          >
                        </v-avatar>
                        <v-list-item-title class="font-weight-medium text-h6 mb-1 text-center">
                          {{ item.name }}
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </client-only>
</template>
<script>
  import imagePath from '~/plugins/imagepath'
  import { mapMutations } from 'vuex'
  export default {
    mixins: [
      imagePath
    ],
    data () {
      return {
        isAvailable: false
      }
    },
    computed: {
      items () {
        return [{
          icon: this.building_icon,
          name: 'BUILDING APPLICATION',
          flex: 'xs12 md4',
          route: 'index-application-unified-building'
        },
        {
          icon: this.occupancy_icon,
          name: 'OCCUPANCY APPLICATION',
          flex: 'xs12 md4',
          route: 'index-application-unified-occupancy'
        }]
      },
      ancillary () {
        return [{
          icon: this.sign_icon,
          name: 'SIGNAGE PERMIT',
          flex: 'xs12 md4',
          route: 'permit-name',
          param: 'signage'
        },
        {
          icon: this.electronics_icon,
          name: 'ELECTRONICS PERMIT',
          flex: 'xs12 md4',
          route: 'permit-name',
          param: 'electronics'
        },
        {
          icon: this.mechanical_icon,
          name: 'MECHANICAL PERMIT',
          flex: 'xs12 md4',
          route: 'permit-name',
          param: 'mechanical'
        }]
      }
    },
    methods: {
      ...mapMutations('events', ['SET_GUIDE_DRAWER']),
      doToggleNav () {
        this.SET_GUIDE_DRAWER(false)
      }
    }
  }
</script>
