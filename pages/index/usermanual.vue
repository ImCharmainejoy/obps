<template>
  <v-container fluid fill-height>
    <client-only>
      <shared-toolbar />
      <shared-navigation :items="items" />
      <v-main>
        <v-card flat>
          <v-card-title class="vtitle">USER MANUAL</v-card-title>
            <v-card-text>
                <div class="flex-space-between">
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
                  <v-expansion-panels flat color="#F0F2F5" style="border: 1px solid #E5E4E4;">
                    <v-expansion-panel style="border: 1px solid #E5E4E4;">
                      <v-expansion-panel-header>
                        <span class="manual-step">1. Registration</span>
                        <template v-slot:actions>
                          <v-icon>
                            mdi-arrow-right-thin
                          </v-icon>
                        </template>
                      </v-expansion-panel-header>

                      <v-expansion-panel-content>
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

                        <shared-manual-step :step="steps[0].step" :title="steps[0].title" :infos="steps[0].infos" />
                        <shared-manual-step :step="steps[1].step" :title="steps[1].title" :infos="steps[1].infos" />
                        <shared-manual-step :step="steps[2].step" :title="steps[2].title" :infos="steps[2].infos" />
                        <v-img contain :src="sample_format" alt="Sample Format" class="sample-format"/>
                        <shared-manual-step :step="steps[3].step" :title="steps[3].title" :infos="steps[3].infos" />
                        <shared-manual-step :step="steps[4].step" :title="steps[4].title" :infos="steps[4].infos" />
                        <shared-manual-step :step="steps[5].step" :title="steps[4].title" :infos="steps[5].infos" />
                      </v-expansion-panel-content>
                    </v-expansion-panel>


                    <v-expansion-panel style="border: 1px solid #E5E4E4;">
                      <v-expansion-panel-header>
                        <span class="manual-step">2. Pre-Evaluation</span>
                        <template v-slot:actions>
                          <v-icon>
                            mdi-arrow-right-thin
                          </v-icon>
                        </template>
                      </v-expansion-panel-header>

                      <v-expansion-panel-content>
                        <shared-manual-step :step="stepsPreEvaluation[0].step" :title="stepsPreEvaluation[0].title" :infos="stepsPreEvaluation[0].infos" />
                        <shared-manual-step :step="stepsPreEvaluation[1].step" :title="stepsPreEvaluation[1].title" :infos="stepsPreEvaluation[1].infos" />
                        <shared-manual-step :step="stepsPreEvaluation[2].step" :title="stepsPreEvaluation[2].title" :infos="stepsPreEvaluation[2].infos" />
                        <shared-manual-step :step="stepsPreEvaluation[3].step" :title="stepsPreEvaluation[3].title" :infos="stepsPreEvaluation[3].infos" />
                        <shared-manual-step :step="stepsPreEvaluation[4].step" :title="stepsPreEvaluation[4].title" :infos="stepsPreEvaluation[4].infos" />
                        <shared-manual-step :step="stepsPreEvaluation[5].step" :title="stepsPreEvaluation[5].title" :infos="stepsPreEvaluation[5].infos" />
                        <shared-manual-step :step="stepsPreEvaluation[6].step" :title="stepsPreEvaluation[6].title" :infos="stepsPreEvaluation[6].infos" />
                        <shared-manual-step :step="stepsPreEvaluation[7].step" :title="stepsPreEvaluation[7].title" :infos="stepsPreEvaluation[7].infos" />
                        <shared-manual-step :step="stepsPreEvaluation[8].step" :title="stepsPreEvaluation[8].title" :infos="stepsPreEvaluation[8].infos" />
                        <shared-manual-step :step="stepsPreEvaluation[9].step" :title="stepsPreEvaluation[9].title" :infos="stepsPreEvaluation[9].infos" />
                        <shared-manual-step :step="stepsPreEvaluation[10].step" :title="stepsPreEvaluation[10].title" :infos="stepsPreEvaluation[10].infos" />
                        <shared-manual-step :step="stepsPreEvaluation[11].step" :title="stepsPreEvaluation[11].title" :infos="stepsPreEvaluation[11].infos" />
                        <shared-manual-step :step="stepsPreEvaluation[12].step" :title="stepsPreEvaluation[12].title" :infos="stepsPreEvaluation[12].infos" />
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </div>

                <div v-else>
                  <v-expansion-panels flat color="#F0F2F5" style="border: 1px solid #E5E4E4;">
                    <v-expansion-panel style="border: 1px solid #E5E4E4;">
                      <v-expansion-panel-header>
                        <span class="manual-step">1. Pagrehistro</span>
                        <template v-slot:actions>
                          <v-icon>
                            mdi-arrow-right-thin
                          </v-icon>
                        </template>
                      </v-expansion-panel-header>

                      <v-expansion-panel-content>
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

                        <shared-manual-step :step="stepsTagalog[0].step" :title="stepsTagalog[0].title" :infos="stepsTagalog[0].infos" />
                        <shared-manual-step :step="stepsTagalog[1].step" :title="stepsTagalog[1].title" :infos="stepsTagalog[1].infos" />
                        <shared-manual-step :step="stepsTagalog[2].step" :title="stepsTagalog[2].title" :infos="stepsTagalog[2].infos" />
                        <v-img contain :src="sample_format" alt="Sample Format" class="sample-format"/>
                        <shared-manual-step :step="stepsTagalog[3].step" :title="stepsTagalog[3].title" :infos="stepsTagalog[3].infos" />
                        <shared-manual-step :step="stepsTagalog[4].step" :title="stepsTagalog[4].title" :infos="stepsTagalog[4].infos" />
                        <shared-manual-step :step="stepsTagalog[5].step" :title="stepsTagalog[5].title" :infos="stepsTagalog[5].infos" />
                      </v-expansion-panel-content>
                    </v-expansion-panel>

                    <v-expansion-panel style="border: 1px solid #E5E4E4;">
                      <v-expansion-panel-header>
                        <span class="manual-step">2. Paunang Pag-Evaluate</span>
                        <template v-slot:actions>
                          <v-icon>
                            mdi-arrow-right-thin
                          </v-icon>
                        </template>
                      </v-expansion-panel-header>

                      <v-expansion-panel-content>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </div>
              </v-card-text>
            <!-- </v-tab-item> -->

            <!-- <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p>
                    The quick brown fox jumps over the lazy dog. Unfortunately, the fox wasn't as quick as I expected. It wasn't fast enough to catch the squirrel. That lazy dog just sits there like a piece of sh*t, watching the whole scenario. A rhino walks by scaring the other animals. This wild animal is very territorial, it will attack anything on its territory. Oh, sh*t, it spotted me. Fuck, it's heading this way. Fuck, fuck, fuck, aaahhh.
                  </p>
                </v-card-text>
              </v-card>
            </v-tab-item>
        </v-tabs> -->
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
      showPictures: false,
      steps: [
        { step: 1, title: 'Registration', infos:["Kindly locate the 'Register' button, situated at the bottom-right of the screen, adjacent to the 'Login' button. Upon clicking it, you will be redirected to the registration page."] },
        { step: 2, title: 'Privacy Policy', infos:["Upon registration, the website's Privacy Policy will appear. This pop-up contains all information regarding the data we collect, how the data will be utilized, and the security measures undertaken to ensure confidentiality. Click ‘Proceed’ after reviewing the Privacy Policy."]},
        { step: 3, title: 'Select Applicant Type',  infos:["Building owners are highly encouraged to apply for their permit, however, design professionals may also register as an authorized representative on behalf of the client.", "Authorized Representatives must be duly registered and licensed architects and/or engineers that are involved with the project. In this regard, authorized representatives are required to upload their updated PRC Identification Card (PRC ID) and Professional Tax Receipt (PTR) with three (3) specimen signatures in PDF.", "See format below:"]},
        { step: 4, title: 'Fill-out necessary information',  infos:["Kindly ensure that all required fields all fields marked with a red star * are accurately and completely filled out."]},
        { step: 5, title: 'Provide Login Credentials',  infos:["For log-in credentials, ensure to provide the following:", "Active email address: your account may only be activated once verified via email. This is also to ensure that applicants will be able to receive notifications and recommendations through email.", "Password: ensure that your password consists a minimum of eight (8) characters.", "Re-enter your password to confirm and click 'Submit' to proceed." ]},
        { step: 6, title: 'Check E-mail Verification',  infos:["Your registration may be confirmed through email correspondence."]},
      ],
      stepsTagalog: [
        { step: 1, title: 'Pagrehistro', infos:["Hanapin po natin ang 'Register' button, na matatagpuan sa babang-kanan ng screen, malapit sa 'Login' button. Kapag naclick na po ito, mapupunta na po tayo sa registration page."] },
        { step: 2, title: 'Privacy Policy', infos:["Sa pagrehistro, ang Privacy Policy ng website ay lalabas. Ang pop-up na ito ay naglalaman ng lahat ng impormasyon tungkol sa data na nakalap namin, kung paano gagamitin ang data, at ang mga hakbang sa seguridad na ginawa upang garantahin ang pagkapribado. I-click ang 'Magpatuloy' pagkatapos suriin ang Privacy Policy."]},
        { step: 3, title: 'Pumili ng Uri ng Aplikante',  infos:["Ang mga may-ari lamang ang aming pinapayuhan na mag-apply para sa kanilang permit, gayunpaman, ang mga propesyonal sa disenyo ay maaari rin magrehistro bilang isang authorized na representante sa ngalan ng client.", "Ang mga Authorized na Representante ay dapat na narehistro at may lisensya na arkitekto at/o engineer na involved sa proyekto. Sa ganitong paraan, kinakailangan ng mga authorized na representante na i-upload ang kanilang na-update na PRC Identification Card (PRC ID) at Professional Tax Receipt (PTR) na may tatlong (3) halimbawa ng lagda sa PDF. Tingnan ang format sa ibaba:"]},
        { step: 4, title: 'Punan ang kinakailangang impormasyon',  infos:["Siguraduhin po na lahat ng mga field na may pamagat na pulang bituin (*) ay tama at kumpleto"]},
        { step: 5, title: 'Ibigay ang Mga Credentials ng Login',  infos:["Para sa mga credentials ng log-in, siguraduhin na ibigay ang sumusunod:", "Aktibong email address: ang iyong account ay maaring ma-activate lamang pag na-verify sa pamamagitan ng email. Ito rin ay upang siguraduhin na ang mga aplikante ay makakatanggap ng mga notification at rekomendasyon sa pamamagitan ng email.", "Password: siguraduhin na ang iyong password ay naglalaman ng hindi bababa sa walong (8) character.", "I-type ulit ang iyong password upang kumpirmahin at i-click ang 'Sumbit' upang magpatuloy."]},
        { step: 6, title: 'Suriin ang E-mail Verification',  infos:["Ang iyong pagrehistro ay maaaring tukuyin sa pamamagitan ng email na korespondensya."]},
      ],
      stepsPreEvaluation: [
        { step: 1, title: 'Select Building Application', infos:["Upon logging in, kindly ensure that you have selected the 'Application' option located in the left corner below the display of your name. In case your name is not visible, please click on the hamburger menu icon to display it. Furthermore, you will be given the choice of which type of application you wish to submit. To proceed, kindly select the 'Building Application' option from the comprehensive list of Unified Applications."] },
        { step: 2, title: 'Apply Now', infos:["Upon selecting the option 'Building Application', a comprehensive list of your previously submitted applications will be presented below. If you wish to start a new application, kindly click the 'Apply Now' button next to the 'User Guide' button."]},
        { step: 3, title: 'Fill in Missing Information',  infos:["Please note that the registration information will be automatically filled in, but the application information must be manually entered. Kindly be aware that the system will not retrieve or pre-populate the application information, and therefore it is necessary for the applicant to input the required details manually."]},
        { step: 4, title: 'Fill in Project Cost',  infos:["Please provide the total cost of the project in this space."]},
        { step: 5, title: 'Fill in Proposed Date of Construction',  infos:["Please specify the precise date that construction began using the numerical  format (mm/dd/yyyy) in order to ensure the accuracy and completeness of the project records. You can choose the appropriate date by clicking the calendar icon, which will then reveal a clickable calendar input."]},
        { step: 6, title: 'Fill in Proposed Date of Completion',  infos:["To facilitate the tracking and monitoring of the project timeline, please indicate the estimated date of completion using the numerical format (mm/dd/yyyy). You may use the calendar icon provided to ensure accuracy in selecting the target date."]},
        { step: 7, title: "Fill in Owner's Mobile Number",  infos:["Kindly provide the contact number that can be used for communication and notifications regarding the project. This information will be kept confidential and will only be used for project-related purposes."]},
        { step: 8, title: 'Pin Location on the Map',  infos:["To ensure proper identification and documentation of the construction site, kindly use the provided map to carefully locate the exact location of the project. Once you have identified the location, please click on the construction site to mark the area. The longitude and latitude will be automatically calculated."]},
        { step: 9, title: 'Specify Type of Ownership',  infos:["Sole Proprietorship -  is considered the most fundamental form of business organization. It can be formed by a single individual, known as the sole proprietor, and does not require any formal registration process. However, it is essential to note that in a sole proprietorship, the personal assets of the owner are held liable for any claims against the business.", "Choose Sole Proprietorship: if the building contructed is an independent business entity, owned and managed by a one person.", "Partnership - is a type of business organization where two or more individuals or entities come together to form and operate a business. In a partnership, the partners contribute capital, share profits, and have joint control over the management and decision-making processes of the business.", "Corporation - is a type of business organization that consists of multiple individuals, with a maximum limit of 15, who operate as a unified unit for the betterment of the corporation as a whole.", "Choose Partnership/Corporation: If the building's management is jointly administered by two or more individuals.", "Community Association - is a type of non-profit organization that is formed by residents of a community or neighborhood to promote the common interests of its members.", "Choose Community Association: if the building is a public entity and is formed for charitable purpose and operates to achieve that purpose rather than to generate a profit. Examples: Religious organizations (Churches, Mosques, Temples), Fundraising organizations (Homeless Shelter, Disaster Relief Volunteers), Social welfare organizations", "Government ownership refers to the ownership and control of assets, resources, or services by a government entity. In this type of ownership, the government holds legal title to the assets or resources and has the power to make decisions regarding their use, management, and distribution.", "Choose Government: if the building is under government property. This may include buildings owned and operated by national or local government agencies."]},
        { step: 10, title: 'Select one Proof of Ownership that you can provide',  infos:["Certified True Copy of Land Title - is the legally valid copy of a land title that has been officially certified by the Land Registration Authority (LRA).", "Notarized Deed of Absolute Sale - is a legal document that is used to transfer ownership of a property from one person or entity to another. The deed is executed by the seller and the buyer in the presence of a notary public who acknowledges the signatures of both parties.", "Contract of Lease - is a legal agreement between a property owner, known as the lessor, and a tenant, known as the lessee, which outlines the terms and conditions of a rental agreement.", "Contract of Sell - is a legal agreement between a buyer and a seller for the sale and transfer of a property, goods, or services.", "Notarized Authority to Construct - is a legal document that grants permission for a person or entity to undertake construction activities on a property.", "Community Association - is a legal documents that establish and govern the operations of a Community Association.", "City Housing Clearance - is a certificate or permit issued by the local government of a city or municipality that indicates that a building or property is in compliance with local housing and building codes, as well as other regulations related to land use and development.", "Ancestral Domain - is a legal document that identifies and recognizes the ancestral domain of an indigenous community or group.", "Certificate of Lot Purchase - is a legal document that certifies the purchase of a specific lot or parcel of land."]},
        { step: 11, title: 'Upload Proof of Ownership Validation',  infos:[""]},
        { step: 12, title: 'Fill in Designing Engineer/Architect Information',  infos:[""]},
        { step: 13, title: 'Upload Building Plan',  infos:[""]},
      ],
      stepsPreEvaluationTagalog: [
        { step: 1, title: 'Pumili ng Building Application', infos:["Kapag nakalogin na po kayo, siguraduhin na nakaselect po ang 'Application' option na nasa kanto sa kaliwa sa ilalim ng display ng inyong pangalan. Kung hindi po nakikita ang inyong pangalan, pindutin po ang hamburger menu icon para maipakita ito. Bukod dito, bibigyan po kayo ng pagpipilian kung alin sa mga uri ng application ang nais ninyong isumite. Para makapagpatuloy, pumili po ng 'Building Application' option mula sa listahan ng Unified Applications."] },
        { step: 2, title: 'Apply Now', infos:["Kapag pumili na po kayo ng 'Building Application' option, makikita ninyo ang kumpletong listahan ng mga naunang isinumiteng aplikasyon sa ibaba. Kung nais ninyong gumawa ng bagong aplikasyon, pindutin po ang 'Apply Now' na button na kasunod ng 'User Guide' button."]},
        { step: 3, title: 'Fill in Missing Information',  infos:["Please note that the registration information will be automatically filled in, but the application information must be manually entered. Kindly be aware that the system will not retrieve or pre-populate the application information, and therefore it is necessary for the applicant to input the required details manually."]},
        { step: 4, title: 'Fill in Project Cost',  infos:["Please provide the total cost of the project in this space."]},
        { step: 5, title: 'Fill in Proposed Date of Construction',  infos:["Please specify the precise date that construction began using the numerical  format (mm/dd/yyyy) in order to ensure the accuracy and completeness of the project records. You can choose the appropriate date by clicking the calendar icon, which will then reveal a clickable calendar input."]},
        { step: 6, title: 'Fill in Proposed Date of Completion',  infos:["To facilitate the tracking and monitoring of the project timeline, please indicate the estimated date of completion using the numerical format (mm/dd/yyyy). You may use the calendar icon provided to ensure accuracy in selecting the target date."]},
        { step: 7, title: "Fill in Owner's Mobile Number",  infos:["Kindly provide the contact number that can be used for communication and notifications regarding the project. This information will be kept confidential and will only be used for project-related purposes."]},
        { step: 8, title: 'Pin Location on the Map',  infos:["To ensure proper identification and documentation of the construction site, kindly use the provided map to carefully locate the exact location of the project. Once you have identified the location, please click on the construction site to mark the area. The longitude and latitude will be automatically calculated."]},
        { step: 9, title: 'Specify Type of Ownership',  infos:["Sole Proprietorship -  is considered the most fundamental form of business organization. It can be formed by a single individual, known as the sole proprietor, and does not require any formal registration process. However, it is essential to note that in a sole proprietorship, the personal assets of the owner are held liable for any claims against the business.", "Choose Sole Proprietorship: if the building contructed is an independent business entity, owned and managed by a one person.", "Partnership - is a type of business organization where two or more individuals or entities come together to form and operate a business. In a partnership, the partners contribute capital, share profits, and have joint control over the management and decision-making processes of the business.", "Corporation - is a type of business organization that consists of multiple individuals, with a maximum limit of 15, who operate as a unified unit for the betterment of the corporation as a whole.", "Choose Partnership/Corporation: If the building's management is jointly administered by two or more individuals.", "Community Association - is a type of non-profit organization that is formed by residents of a community or neighborhood to promote the common interests of its members.", "Choose Community Association: if the building is a public entity and is formed for charitable purpose and operates to achieve that purpose rather than to generate a profit. Examples: Religious organizations (Churches, Mosques, Temples), Fundraising organizations (Homeless Shelter, Disaster Relief Volunteers), Social welfare organizations", "Government ownership refers to the ownership and control of assets, resources, or services by a government entity. In this type of ownership, the government holds legal title to the assets or resources and has the power to make decisions regarding their use, management, and distribution.", "Choose Government: if the building is under government property. This may include buildings owned and operated by national or local government agencies."]},
        { step: 10, title: 'Select one Proof of Ownership that you can provide',  infos:["Certified True Copy of Land Title - is the legally valid copy of a land title that has been officially certified by the Land Registration Authority (LRA).", "Notarized Deed of Absolute Sale - is the legal document that is used to transfer ownership of a property from one person or entity to another. The deed is executed by the seller and the buyer in the presence of a notary public who acknowledges the signatures of both parties.", "Contract of Lease - is the legal agreement between a property owner, known as the lessor, and a tenant, known as the lessee, which outlines the terms and conditions of a rental agreement.", "Contract of Sell - is the legal agreement between a buyer and a seller for the sale and transfer of a property, goods, or services.", "Notarized Authority to Construct - is the legal document that grants permission for a person or entity to undertake construction activities on a property.", "Community Association - is the legal documents that establish and govern the operations of a Community Association.", "City Housing Clearance - is the certificate or permit issued by the local government of a city or municipality that indicates that a building or property is in compliance with local housing and building codes, as well as other regulations related to land use and development.", "Ancestral Domain - is the legal document that identifies and recognizes the ancestral domain of an indigenous community or group.", "Certificate of Lot Purchase - is the legal document that certifies the purchase of a specific lot or parcel of land."]},
        { step: 11, title: 'Upload Proof of Ownership Validation',  infos:[""]},
        { step: 12, title: 'Fill in Designing Engineer/Architect Information',  infos:[""]},
        { step: 13, title: 'Upload Building Plan',  infos:[""]},
      ]
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

  .vtitle {
    padding-top: 4rem;
  }

  .sample-format {
    width: 25rem;
    height: auto;
  }
</style>
