
<template>
  <v-container fluid fill-height>
    <client-only>
      <shared-toolbar />
      <shared-navigation :items="items" />
      <v-main>
        <v-card flat>
          <v-card-title>FREQUENTLY ASKED QUESTION</v-card-title>
          <v-card class="pa-5" flat>
            <v-expansion-panels flat color="#F0F2F5" style="border: 1px solid #E5E4E4;">

              <v-expansion-panel
                style="border: 1px solid #E5E4E4;">
                <v-expansion-panel-header>
                  <strong>1. What is the process/flow of a building permit application?</strong>
                  <template v-slot:actions>
                    <v-icon>
                      mdi-arrow-right-thin
                    </v-icon>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <ol>
                    <li><strong>Pre-evaluation</strong>
                      <ul>
                        <li>Fill in the necessary forms and upload the following documents:</li>
                        <ul class="ul-circle">
                          <br>
                          <li>Pre-evaluation Form</li>
                          <li>Site development plan</li>
                          <li>Floor plans</li>
                          <li>Four (4) elevations</li>
                          <li>Two (2) sections</li>
                          <li>Perspective</li>
                          <li>Sketch plan</li>
                          <li>Certified True Copy of Land Title</li>
                          <br>
                        </ul>
                        <li>Wait for an SMS regarding your pre-evaluation. Approval may take up to <strong>three (3)
                            days</strong>
                        </li>
                        <li>Once recommendations are applied, reupload and resubmit as advised. This pre-evaluation
                          approval
                          <strong>resets to three (3) days</strong>
                        </li>
                      </ul>
                    </li>
                    <br>
                    <li><strong>Proceed Application</strong></li>
                    <ul>
                      <li>Fill up the Building Permit Application Form</li>
                      <li>Upload <strong>all pre-requisite and technical documents</strong> defined by the OCBO during
                        pre-evaluation that must be
                        signed, sealed, and notarized</li>
                      <li>Wait for an SMS regarding your application. Approval may take up to <strong>seven (7)
                          days.</strong> The
                        evaluation
                        starts <strong>after submission</strong></li>
                      <li>Once recommendations are applied, reupload and resubmit as advised. This pre-evaluation
                        approval
                        <strong>resets
                          to seven (7) days</strong>
                      </li>
                      <p><strong>Schedule a Visit</strong></p>
                      <li>This will be enabled once all evaluators finish the evaluation and give their remarks as well
                      </li>
                      <li>On the scheduled visit, validate your online application and bring your signed, stamped
                        sealed, and
                        notarized documents for validation and do the payment processing</li>
                    </ul>
                    <br>

                    <li>Receipt of Order of Payment</li>
                    <p>You will be notified of your Order of Payment once your online application and documents have
                      been validated.
                    </p>
                    <p><strong>One-Time Payment</strong></p>
                    <p>You may proceed with your payment through our counters located on the <strong>Ground Floor,
                        Office of the
                        City
                        Engineer and Building Official, Pichon (former Magallanes) St., Davao City</strong>
                    </p>
                  </ol>
                </v-expansion-panel-content>

              </v-expansion-panel>

              <v-expansion-panel
                style="border: 1px solid #E5E4E4;">
                <v-expansion-panel-header>
                  <strong>2. How many sections/divisions will be assessing the plans?</strong>
                  <template v-slot:actions>
                  <v-icon>
                    mdi-arrow-right-thin
                  </v-icon>
                </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <ul>
                    <li class="ul-none">PD 1096 Rule III Sec 303</li>
                    <br>
                    <li class="ul-none">The plans, specifications, and other documents will be verified by the
                      following Divisions
                      to ensure that the
                      proposed building/structure conforms to the provisions of relevant Codes and Regulations:</li>
                    <br>
                    <ol>
                      <li>Line and Grade Division<br>
                        Sec 303 (2)</li>
                      <ul>
                        <li class="ul-circle">Verifies the lot plan as reflected in the submitted documents (i.e. TCT/OCT)
                          and its
                          relation to the
                          proposed buildings/structures
                        </li>
                        <li class="ul-circle"> Checks compliance to establish easements/setbacks and determines grades in
                          relation
                          to road lots,
                          property lines, streets, or highways as reflected in the land use zoning or development plan
                          of the
                          city
                        </li>
                        <li class="ul-circle"> Verifies that at least one (1) side of the lot has direct access to a
                          street/alley
                        </li>
                      </ul>
                      <br>
                      <li>Architectural<br>
                        Sec 303 (3)</li>
                      <br>
                      <span>Evaluates building/structure documents as to compliance with technical requirements:</span>
                      <ul>
                        <li>Types of Construction</li>
                        <li>Requirements of Fire Zones and Fire Resistive Regulation</li>
                        <li>Building projections over public streets</li>
                        <li>Access Streets/Roads and Alleys</li>
                        <li>Architectural Interior/Interior Design</li>
                        <li>Classification and General Requirements of all Buildings by Use or Occupancy</li>
                        <li>Maximum Height of Buildings/Structures</li>
                        <li>Parking and Loading/Unloading Space Requirement</li>
                        <li>Corner Buildings with Chaflans</li>
                        <li>Occupant Load</li>
                        <li>Glazing of Opening</li>
                        <li>Architectural Accessibility Features</li>
                        <li>Light and Ventilation</li>
                        <li>Construction of Buildings/Structures within the obstacle limitation surfaces of Aerodromes
                        </li>
                        <li>Buildings and other Ancillary Structures within Cemeteries and Memorial Parks</li>
                      </ul>
                      <br>
                      <li>Civil/Structural<br>
                        Sec 303 (4)
                      </li>
                      <br>
                      <span>Evaluates building/structure documents as to compliance with technical requirements:</span>
                      <ul>
                        <li>Types of Construction</li>
                        <li>Requirements of Fire Zones and Fire Resistive Regulation</li>
                        <li>Building projections over public streets</li>
                        <li>Access Streets/Roads and Alleys</li>
                        <li>Architectural Interior/Interior Design</li>
                        <li>Classification and General Requirements of all Buildings by Use or Occupancy</li>
                        <li>Maximum Height of Buildings/Structures</li>
                        <li>Parking and Loading/Unloading Space Requirement</li>
                        <li>Corner Buildings with Chaflans</li>
                        <li>Occupant Load</li>
                      </ul>
                      <br>
                      <li>Electrical<br>
                        Sec 303 (5)
                      </li>
                      <p>Evaluates building/structure documents as to compliance with technical requirements for
                        Electrical
                        Regulations.</p>
                      <li>Mechanical<br>
                        Sec 303 (6)</li>
                      <p>Evaluates building/structure documents as to compliance with technical requirements for
                        Mechanical
                        Regulations.</p>
                      <li>Sanitary<br>
                        Sec 303 (7)
                      </li>
                      <p>Evaluates building/structure documents as to compliance with technical requirements under the
                        Sanitary
                        Engineering Law (RA 1364).</p>
                      <li>Plumbing<br>
                        Sec 303 (8)
                      </li>
                      <p>Evaluates building/structure documents as to compliance with technical requirements under the
                        Plumbing
                        Law
                        (RA 1378).</p>
                      <li>Electronic<br>
                        Sec 303 (9)
                      </li>
                      <p>The Electronics Section/Unit evaluates building/structure documents as to compliance with
                        technical
                        requirements.</p>
                      <li>Fire Safety Requirements<br>
                        Sec 303 (10)
                      </li>
                      <p>The Building Official shall refer plans and specifications to the City/Municipal Fire Marshall
                        (C/MFM),
                        Bureau of Fire Protection (BFP), for his review and recommendations with respect to fire safety
                        and
                        control
                        requirements.</p>
                    </ol>
                  </ul>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel
                style="border: 1px solid #E5E4E4;">
                <v-expansion-panel-header>
                  <strong>3. What are the requirements when applying for a building permit?</strong>
                  <template v-slot:actions>
                    <v-icon>
                      mdi-arrow-right-thin
                    </v-icon>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <ol type="A">
                    <li>Pre-requisite Documents</li>
                    <ol>
                      <li class="ul-none">A1. Clearances/Certificates from other Offices</li>
                      <ul class="ul-circle">
                        <li>Zoning Locational Clearance</li>
                        <li>BFP Fire Safety Evaluation Certificate</li>
                        <li>CSHP (DOLE)</li>
                        <li>Others (if applicable)</li>
                        <ul class="ul-square">
                          <li>DPWH clearance (if along the national highway)</li>
                          <li>CAAP (ATO) Clearance (if applicable)</li>
                          <li>DENR Environmental Compliance Certificate (for environmentally critical projects)</li>
                          <li>Traffic Impact Assessment (for major developments)</li>
                          <li>CEO RROW Clearance (if along city/brgy/subd road)</li>

                        </ul>
                      </ul>
                      <li class="ul-none">A2. Legal Documents</li>
                      <ul class="ul-circle">
                        <li>Certified True Copy of Land Title</li>
                        <li>Tax Declaration of property</li>
                        <li>Current Real Property Tax Receipt</li>
                        <li>Photocopy of valid ID of owner/applicant with three (3) specimen signatures</li>
                        <li>Photocopy of valid PRC IDs, current PTR and TIN of all signing professionals</li>
                        <li>Others (if applicable)</li>
                        <ul class="ul-square">
                          <li>If owner is not the owner of the lot (whichever is applicable)</li>
                          <ul>
                            <li>Notarized Deed of Absolute Sale</li>
                            <li>Notarized Contract of Lease</li>
                            <li>Notarized Contract of Sale</li>
                            <li>Notarized Authority to Construct from Lot Owner</li>
                          </ul>
                          <li>If another person is authorized to sign in behalf of the applicant</li>
                          <ul>
                            <li>Notarized Special Power of Attorney</li>
                            <li>Notarized Secretary Certificate for company-owned application</li>
                          </ul>
                          <li>Community Association (for residential buildings)</li>
                          <ul>
                            <li>Association board resolution</li>
                            <li>Approved subdivision plans (if located in subdivision)</li>
                            <li>City Housing Clearance (if government housing)</li>
                          </ul>
                        </ul>
                      </ul>
                      <li class="ul-none">B. Technical Documents </li>
                      <ul class="ul-circle">
                        <li>Application Letter</li>
                        <li>Unified Building Permit Form</li>
                        <li>Technical Specifications</li>
                        <li>Bill of materials and Cost Estimate</li>
                        <li>Architectural Plans and Specifications</li>
                        <li>Civil/Structural Plans and Computations</li>
                        <li>Electrical Plans and Computations</li>
                        <li>Mechanical Plans and Specifications</li>
                        <li>Plumbing/Sanitary Plans and Specifications</li>
                        <li>Electronics Plans and Specifications</li>
                        <li>Sketch/Lot Plan</li>
                        <li>Seismic analysis</li>
                        <li>Others (if applicable)</li>
                        <ul>
                          <li>Structural Design Analysis (NSCP 2015) (for 2 storeys and above)</li>
                          <li>Boring & Plate Load Test (for 3 storeys and above)</li>
                        </ul>
                      </ul>
                    </ol>
                  </ol>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel
                style="border: 1px solid #E5E4E4;">
                <v-expansion-panel-header>
                  <strong>4. What is the status of my building permit application?</strong>
                  <template v-slot:actions>
                    <v-icon>
                      mdi-arrow-right-thin
                    </v-icon>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <ul class="ul-none">
                    <li>You may track the status of your building permit application through your dashboard</li>
                  </ul>
                </v-expansion-panel-content>
              </v-expansion-panel>

            </v-expansion-panels>
          </v-card>
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
