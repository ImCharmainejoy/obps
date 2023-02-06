<template>
  <v-container fluid fill-height>
    <client-only>
      <shared-toolbar />
      <shared-navigation :items="items" />
      <v-main>
        <v-card flat>
          <v-card-title>USER MANUAL</v-card-title>
          <v-tabs
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
                  <div class="flex-space-between">
                    <!-- <h3>Registration</h3> -->
                    <section class="column">
                      <h3>Language</h3>
                      <v-radio-group v-model="language" row >
                        <v-radio
                          color="#223345"
                          label="English"
                          value="english"
                        ></v-radio>
                        <v-radio
                          color="#223345"
                          label="Bisaya"
                          value="bisaya"
                        ></v-radio>
                      </v-radio-group>
                    </section>
                  </div>

                  <div v-if="language==='english'">
                    <p>
                      <span class="manual-step">Step 1:</span>
                      <span class="manual-title">Click Register</span>
                    </p>
                    <p class="manual-info">
                      Look for the Register button at the bottom, right next to Login. Click it to redirect you to the registration page.
                    </p>
                    
                    <p>
                      <span class="manual-step">Step 2:</span>
                      <span class="manual-title">Click Proceed when PRIVACY POLICY appears</span>
                    </p>
                    <p class="manual-info">
                      Before we redirect you to our registration page, we will provide you with information about your privacy. Listed inside are the information we gather. To proceed, click the button at the lower right.
                    </p>

                    <p>
                      <span class="manual-step">Step 3:</span>
                      <span class="manual-title">Select Applicant Type</span>
                    </p>
                    <p class="manual-info">
                      By default, we recommend the owner apply, but we also allow representatives as long as they're licensed architects or engineers. You may need to upload your PRC ID and PTR in PDF format.
                    </p>

                    <p>
                      <span class="manual-step">Step 4:</span>
                      <span class="manual-title">Fill-up Everything with Red-Star</span>
                    </p>
                    <p class="manual-info">
                      Make sure everything that has a red star <a style="color:#FF0000">*</a> on it is properly filled up.
                    </p>

                    <p>
                      <span class="manual-step">Step 5:</span>
                      <span class="manual-title">Fill-up Login Information</span>
                    </p>
                    <p class="manual-info">
                      Make sure your password is 8 characters or more.
                    </p>

                    <p>
                      <span class="manual-step">Step 6:</span>
                      <span class="manual-title">Check E-mail Verification</span>
                    </p>
                    <p class="manual-info">
                      You may confirm your registration via email.
                    </p>
                  </div>

                  <div v-else>
                    <p>
                      <span class="manual-step">Step 1:</span>
                      <span class="manual-title">Pindota ang Register</span>
                    </p>
                    <p class="manual-info">
                      Sa ulalom sa Login na button, naa kay makita na Register button. Pindota na aron ma adto ka sa registration page.
                    </p>
                    
                    <p>
                      <span class="manual-step">Step 2:</span>
                      <span class="manual-title">Pindota and Proceed paggawas sa PRIVACY POLICY</span>
                    </p>
                    <p class="manual-info">
                      Bag-o ka maka adto sa registration page, pahibal-on sa ka namo sa among polisiya sa privacy. Pag okay na, pindota ang Proceed button sa ulalom.
                    </p>

                    <p>
                      <span class="manual-step">Step 3:</span>
                      <span class="manual-title">Pagpili og Applicant Type</span>
                    </p>
                    <p class="manual-info">
                      Wala ko kabalo unsaon pag-explain.
                    </p>

                    <p>
                      <span class="manual-step">Step 4:</span>
                      <span class="manual-title">Sulatan tanan naay Red-Star</span>
                    </p>
                    <p class="manual-info">
                      Ambot, twinkle twinkle little start siguro.
                    </p>
                  </div>

                  <v-checkbox
                    v-model="showPictures"
                    label="Show Pictures"
                    color="#223345"
                    hide-details
                  ></v-checkbox>
                  
                  <v-flex align-self-center>
                  <v-carousel
                    v-if="showPictures"
                    cycle
                    height="50%"
                    hide-delimiter-background
                    show-arrows-on-hover
                    padding
                  >
                    <v-carousel-item>
                      <h3 class="steps">Step 1</h3>
                      <v-img
                        contain
                        :src="register1"
                      ></v-img>
                    </v-carousel-item>

                    <v-carousel-item>
                      <h3 class="steps">Step 2</h3>
                      <v-img
                        contain
                        :src="register2"
                      ></v-img> 
                    </v-carousel-item>

                    <v-carousel-item>
                      <h3 class="steps">Step 3</h3>
                      <v-img
                        contain
                        :src="register3"
                      ></v-img> 
                    </v-carousel-item>

                    <v-carousel-item>
                      <h3 class="steps">Step 4</h3>
                      <v-img
                        contain
                        :src="register4"
                      ></v-img> 
                    </v-carousel-item>

                  </v-carousel>
                </v-flex>
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
      language: 'english',
      showPictures: false
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

  .flex-space-between {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: flex-start;
    align-content: center;
  }

  .manual-step {
    font-size: 1rem;
    font-weight: bold;
  }

  .manual-title {
    font-size: 1.1rem;
  }

  .manual-info {
    padding-bottom: 1rem;
  }
</style>