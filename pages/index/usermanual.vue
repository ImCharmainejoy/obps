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
                          label="Tagalog"
                          value="tagalog"
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
                      Kindly locate the 'Register' button, situated at the bottom-right of the screen, adjacent to the 'Login' button. Upon clicking it, you will be redirected to the registration page.
                    </p>
                    
                    <p>
                      <span class="manual-step">Step 2:</span>
                      <span class="manual-title">Click Proceed when PRIVACY POLICY appears</span>
                    </p>
                    <p class="manual-info">
                      Before bringing you to the registration page, allow us to tell you a little bit about our privacy policy. You'll notice a detailed list of the data we gather within. To continue, kindly click the button 'Proceed' located at the lower right.
                    </p>

                    <p>
                      <span class="manual-step">Step 3:</span>
                      <span class="manual-title">Select Applicant Type</span>
                    </p>
                    <p class="manual-info">
                      As a default recommendation, we suggest that the owner applies for the process. However, we also permit representatives, provided that they are licensed architects or engineers. Please note that you may be required to upload your Professional Regulation Commission Identification (PRC ID) and Professional Tax Receipt (PTR) in Portable Document Format (PDF) for verification purposes.
                    </p>

                    <p>
                      <span class="manual-step">Step 4:</span>
                      <span class="manual-title">Fill in everything with red-star</span>
                    </p>
                    <p class="manual-info">
                      Kindly ensure that all fields marked with a red star <a style="color:#FF0000">*</a> are accurately and completely filled in.
                    </p>

                    <p>
                      <span class="manual-step">Step 5:</span>
                      <span class="manual-title">Fill in Login Information</span>
                    </p>
                    <p class="manual-info">
                      Please ensure that your password consists of a minimum of 8 characters. To complete the process, kindly confirm your password by re-entering it and click 'Submit'.
                    </p>

                    <p>
                      <span class="manual-step">Step 6:</span>
                      <span class="manual-title">Check E-mail Verification</span>
                    </p>
                    <p class="manual-info">
                      Your registration may be confirmed through email correspondence.
                    </p>


                    <v-checkbox
                    v-model="showPictures"
                    label="Show Pictures"
                    color="#223345"
                    hide-details
                  ></v-checkbox>
                  
                  <v-flex align-self-center>
                  <v-carousel
                    v-if="showPictures"
                    height="auto"
                    hide-delimiter-background
                    show-arrows-on-hover
                    class="carousel"
                  >
                    <v-carousel-item>
                      <h3 class="steps">Step 1</h3>
                      <v-img
                        contain
                        width="35rem"
                        :src="register1"
                      ></v-img>
                    </v-carousel-item>

                    <v-carousel-item>
                      <h3 class="steps">Step 2</h3>
                      <v-img
                        contain
                        width="35rem"
                        :src="register2"
                      ></v-img> 
                    </v-carousel-item>

                    <v-carousel-item>
                      <h3 class="steps">Step 3</h3>
                      <v-img
                        contain
                        width="35rem"
                        :src="register3"
                      ></v-img> 
                    </v-carousel-item>

                    <v-carousel-item>
                      <h3 class="steps">Step 4</h3>
                      <v-img
                        contain
                        width="35rem"
                        :src="register4"
                      ></v-img> 
                    </v-carousel-item>

                    <v-carousel-item>
                      <h3 class="steps">Step 5</h3>
                      <v-img
                        contain
                        width="35rem"
                        :src="register5"
                      ></v-img> 
                    </v-carousel-item>

                    <v-carousel-item>
                      <h3 class="steps">Step 6</h3>
                      <v-img
                        contain
                        width="35rem"
                        :src="register6"
                      ></v-img> 
                    </v-carousel-item>

                  </v-carousel>
                </v-flex>
                  </div>

                  <div v-else>
                    <p>
                      <span class="manual-step">Step 1:</span>
                      <span class="manual-title">I-click ang Register</span>
                    </p>
                    <p class="manual-info">
                      Hanapin po natin ang 'Register' button, na matatagpuan sa babang-kanan ng screen, malapit sa 'Login' button. Kapag naclick na po ito, mapupunta na po tayo sa registration page.                    </p>
                    <p>
                      <span class="manual-step">Step 2:</span>
                      <span class="manual-title">I-click ang Proceed paglabas sa PRIVACY POLICY</span>
                    </p>
                    <p class="manual-info">
                      Bago po namin kayo dalhin sa registration page, ibibigay po muna namin sa iyo ang ilang detalye tungkol sa aming privacy policy. Mapapansin po dito ang detalyadong listahan ng data na aming kinukuha. Upang makapagpatuloy, pindotin ang 'Proceed' button na matatagpuan sa kanang-baba
                    </p>

                    <p>
                      <span class="manual-step">Step 3:</span>
                      <span class="manual-title">Pumili ng Applicant Type</span>
                    </p>
                    <p class="manual-info">
                      Bilang seguridad, inirerekomenda namin na ang may-ari ang mag-apply sa proseso. Gayunpaman, pinapayagan din namin ang mga kinatawan, basta't sila ay lisenyadong arkitekto o engineer. Ngunit kailangan po nilang mag-upload ng kanilang Professional Regulation Commission Identification (PRC ID) at Professional Tax Receipt (PTR) sa Portable Document Format (PDF) para sa layunin ng pag-verify.
                    </p>

                    <p>
                      <span class="manual-step">Step 4:</span>
                      <span class="manual-title">Punan ang lahat ng may pulang bituin (*)</span>
                    </p>
                    <p class="manual-info">
                      Siguraduhin na lahat ng mga field na may pamagat na pulang bituin <a style="color:#FF0000">*</a> ay tama at kumpleto
                    </p>

                    <p>
                      <span class="manual-step">Step 5:</span>
                      <span class="manual-title">Punan ang impormasyon sa pag-login</span>
                    </p>
                    <p class="manual-info">
                      Siguraduhing ang pinaglalaman ng inyong password ng hindi bababa sa 8 na mga character. Upang matapos ang proseso, paki kumpirma po ng inyong password sa pamamagitan ng pag-re-enter nito at i-click ang "Submit".
                    </p>

                    <p>
                      <span class="manual-step">Step 6:</span>
                      <span class="manual-title">Tingnan ang Verification sa Email</span>
                    </p>
                    <p class="manual-info">
                      Ang iyong pagrehistro ay maaaring tukuyin sa pamamagitan ng email na korespondensya.
                    </p>
                    

                    <v-checkbox
                    v-model="showPictures"
                    label="Ipakita ang mga larawan"
                    color="#223345"
                    hide-details
                  ></v-checkbox>
                  
                  <v-flex align-self-center>
                  <v-carousel
                    v-if="showPictures"
                    height="auto"
                    hide-delimiter-background
                    show-arrows-on-hover
                    class="carousel"
                  >
                    <v-carousel-item>
                      <h3 class="steps">Step 1</h3>
                      <v-img
                        contain
                        width="35rem"
                        :src="registertagalog1"
                      ></v-img>
                    </v-carousel-item>

                    <v-carousel-item>
                      <h3 class="steps">Step 2</h3>
                      <v-img
                        contain
                        width="35rem"
                        :src="registertagalog2"
                      ></v-img> 
                    </v-carousel-item>

                    <v-carousel-item>
                      <h3 class="steps">Step 3</h3>
                      <v-img
                        contain
                        width="35rem"
                        :src="registertagalog3"
                      ></v-img> 
                    </v-carousel-item>

                    <v-carousel-item>
                      <h3 class="steps">Step 4</h3>
                      <v-img
                        contain
                        width="35rem"
                        :src="registertagalog4"
                      ></v-img> 
                    </v-carousel-item>

                    <v-carousel-item>
                      <h3 class="steps">Step 5</h3>
                      <v-img
                        contain
                        width="35rem"
                        :src="registertagalog5"
                      ></v-img> 
                    </v-carousel-item>

                    <v-carousel-item>
                      <h3 class="steps">Step 6</h3>
                      <v-img
                        contain
                        width="35rem"
                        :src="registertagalog6"
                      ></v-img> 
                    </v-carousel-item>

                  </v-carousel>
                </v-flex>
                  </div>

                  
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

  .carousel {
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
</style>