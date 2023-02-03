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
                  
                  <v-carousel
                    cycle
                    height="auto"
                    hide-delimiter-background
                    show-arrows-on-hover
                  >
                    <v-carousel-item>
                      <h2 class="steps">Step 1</h2>
                      <v-img
                        contain
                        :src="register1"
                      ></v-img>
                    </v-carousel-item>

                    <v-carousel-item>
                      <h2 class="steps">Step 2</h2>
                      <v-img
                        contain
                        :src="register2"
                      ></v-img> 
                    </v-carousel-item>

                    <v-carousel-item>
                      <h2 class="steps">Step 3</h2>
                      <v-img
                        contain
                        :src="register3"
                      ></v-img> 
                    </v-carousel-item>

                    <v-carousel-item>
                      <h2 class="steps">Step 4</h2>
                      <v-img
                        contain
                        :src="register4"
                      ></v-img> 
                    </v-carousel-item>

                  </v-carousel>
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
import { mdiAccountPlus, mdiOfficeBuilding } from '@mdi/js'
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
      },
      // steps: [
      //   { number: 1, image: 'register1' },
      //   { number: 2, image: 'register2' },
      //   { number: 3, image: 'register3' }
      // ]
    }
  },
}
</script>

<style>
  .steps {
    padding-bottom: 1rem;
    color: #223345;
  }
</style>