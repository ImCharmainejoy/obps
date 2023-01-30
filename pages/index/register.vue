<template>
  <client-only>
    <v-layout wrap class="mb-5">
      <v-flex xs12 sm7 md8 lg9>
        <v-container fluid fill-height>
          <v-btn
            fixed
            top
            left
            dark
            text
            style="z-index: 999;"
            class="black--text"
            @click="backHome">
            <v-icon medium class="black--text">chevron_left</v-icon>
            Back
          </v-btn>
          <v-layout wrap justify-center align-center>
            <v-flex xs12 v-if="mobile">
              <shared-logo />
            </v-flex>
            <v-flex xs12 md10>
              <v-layout wrap justify-center align-center class="mb-12">
                <v-flex xs12 md11>
                  <v-card-title>Information on Applicant</v-card-title>
                </v-flex>
                <v-flex xs12 md10>
                  <v-layout wrap>
                    <v-flex xs12>
                      <small>Type of Applicant<span class="pl-1 red--text title">*</span></small>
                      <v-radio-group
                        v-model="form.client_type"
                        row
                        @blur="setFormData"
                         class="my-0 py-2"
                      >
                        <v-radio
                          label="Owner"
                          value="owner"
                        ></v-radio>
                        <v-radio
                          label="Representative"
                          value="representative"
                        ></v-radio>
                      </v-radio-group>
                    </v-flex>
                    <v-flex xs12>
                      <v-layout wrap>
                        <v-flex xs12>
                          <small>{{ form.client_type === 'owner' ? 'Name of the Owner' : 'Authorized Representative (Should be an Architect or an Engineer of record)'}}</small>
                          <v-layout wrap>
                            <v-flex xs12 md3>
                              <small>First Name<span class="pl-1 red--text title">*</span></small>
                              <v-text-field
                                v-model="form.first_name"
                                solo
                                flat
                                dense
                                placeholder="First Name"
                                background-color="#F0F2F7"
                                color="#223345"
                                class="mx-2"
                                @blur="setFormData"
                                :error-messages="errors['first_name']"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs12 md3>
                              <small>Middle Name<span class="pl-1 title"></span></small>
                              <v-text-field
                                v-model="form.middle_name"
                                solo
                                flat
                                dense
                                placeholder="Middle Name"
                                background-color="#F0F2F7"
                                color="#223345"
                                class="mx-2"
                                @blur="setFormData"
                                :error-messages="errors['middle_name']"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs12 md3>
                              <small>Last Name<span class="pl-1 red--text title">*</span></small>
                              <v-text-field
                                v-model="form.last_name"
                                solo
                                flat
                                dense
                                placeholder="Last Name"
                                background-color="#F0F2F7"
                                color="#223345"
                                class="mx-2"
                                @blur="setFormData"
                                :error-messages="errors['last_name']"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs12 md3>
                              <small>Suffix<span class="pl-1 title"></span></small>
                              <v-autocomplete
                                v-model="form.suffix"
                                :items="suffixes"
                                solo
                                flat
                                dense
                                background-color="#F0F2F7"
                                color="#223345"
                                placeholder="Select Suffix"
                                return-string
                                class="mx-2"
                                required
                                @change="setFormData"
                                :error-messages="errors['suffix']">
                              </v-autocomplete>
                            </v-flex>
                            <v-flex xs12 md6>
                              <small>Contact No. (Please make sure to use your active contact number for application tracking purposes.)<span class="pl-1 red--text title">*</span></small>
                              <v-text-field
                                v-model="form.contact"
                                solo
                                flat
                                dense
                                placeholder="Contact No."
                                background-color="#F0F2F7"
                                color="#223345"
                                v-mask="'###-###-####'"
                                :masked="true"
                                prefix="+63"
                                class="mx-2"
                                @blur="setFormData"
                                :error-messages="errors['contact']"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs12 md3>
                              <small>Gender<span class="pl-1 red--text title">*</span></small>
                              <v-radio-group
                                v-model="form.gender"
                                row
                                :error-messages="errors['gender']"
                                class="my-0 py-2"
                              >
                                <v-radio
                                  label="Male"
                                  value="Male"
                                ></v-radio>
                                <v-radio
                                  label="Female"
                                  value="Female"
                                ></v-radio>
                              </v-radio-group>
                            </v-flex>
                            <v-flex xs12 md3>
                              <small>PSN (PhilSys Number)<span class="pl-1 title"></span></small>
                              <v-text-field
                                v-model="form.psn"
                                solo
                                flat
                                dense
                                v-mask="'####-####-####-####'"
                                placeholder="####-####-####-####"
                                background-color="#F0F2F7"
                                color="#223345"
                                class="mx-2"
                                @blur="setFormData"
                              ></v-text-field>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                        <v-flex xs12
                          v-if="form.client_type === 'representative'">
                          <v-layout wrap>
                            <v-flex xs12>
                              <small>Type of Representative<span class="pl-1 red--text title">*</span></small>
                                <v-radio-group
                                  v-model="form.profession"
                                  row
                                  @blur="setFormData"
                                  class="my-0 py-2"
                                  :error-messages="errors['profession']"
                                >
                                  <v-radio
                                    label="Architect"
                                    value="architect"
                                  ></v-radio>
                                  <v-radio
                                    label="Engineer"
                                    value="engineer"
                                  ></v-radio>
                                </v-radio-group>
                            </v-flex>
                            <v-flex xs12 md6>
                              <v-layout wrap>
                                <v-flex xs12>
                                  <small>Representative Address (No.,Street,Barangay, City/Municipality)<span class="pl-1 red--text title">*</span></small>
                                  <v-text-field
                                    v-model="form.complete_address"
                                    solo
                                    flat
                                    dense
                                    placeholder="Complete Address"
                                    background-color="#F0F2F7"
                                    color="#223345"
                                    class="mx-2"
                                    @blur="setFormData"
                                    :error-messages="errors['complete_address']"
                                  ></v-text-field>
                                </v-flex>
                                <v-flex xs12 md6>
                                  <small>PRC NO.<span class="pl-1 red--text title">*</span></small>
                                  <v-text-field
                                    v-model="form.prc_no"
                                    solo
                                    flat
                                    dense
                                    type="number"
                                    placeholder="PRC NO."
                                    background-color="#F0F2F7"
                                    color="#223345"
                                    class="mx-2"
                                    @blur="setFormData"
                                    :error-messages="errors['prc_no']"
                                  ></v-text-field>
                                </v-flex>
                                <v-flex xs12 md6>
                                  <small>Validity<span class="pl-1 red--text title">*</span></small>
                                  <v-text-field
                                    v-model="form.validity"
                                    solo
                                    flat
                                    dense
                                    type="date"
                                    placeholder="Validity"
                                    background-color="#F0F2F7"
                                    color="#223345"
                                    class="mx-2"
                                    @blur="setFormData"
                                    :error-messages="errors['validity']"
                                  ></v-text-field>
                                </v-flex>
                                <v-flex xs12 md6>
                                  <small>PTR NO.<span class="pl-1 red--text title">*</span></small>
                                  <v-text-field
                                    v-model="form.ptr_no"
                                    solo
                                    flat
                                    dense
                                    placeholder="PTR NO."
                                    background-color="#F0F2F7"
                                    color="#223345"
                                    class="mx-2"
                                    @blur="setFormData"
                                    :error-messages="errors['ptr_no']"
                                  ></v-text-field>
                                </v-flex>
                                <v-flex xs12 md6>
                                  <small>Date Issued<span class="pl-1 red--text title">*</span></small>
                                  <v-text-field
                                    v-model="form.date_issued"
                                    flat
                                    solo
                                    type="date"
                                    dense
                                    placeholder="Date Issued"
                                    background-color="#F0F2F7"
                                    color="#223345"
                                    class="mx-2"
                                    @blur="setFormData"
                                    :error-messages="errors['date_issued']"
                                  ></v-text-field>
                                </v-flex>
                                <v-flex xs12 md6>
                                  <small>Place Issued<span class="pl-1 red--text title">*</span></small>
                                  <v-text-field
                                    v-model="form.place_issued"
                                    solo
                                    flat
                                    dense
                                    placeholder="Place Issued"
                                    background-color="#F0F2F7"
                                    color="#223345"
                                    class="mx-2"
                                    @blur="setFormData"
                                    :error-messages="errors['place_issued']"
                                  ></v-text-field>
                                </v-flex>
                                <v-flex xs12 md6>
                                  <small>TIN<span class="pl-1 red--text title">*</span></small>
                                  <v-text-field
                                    v-model="form.tin"
                                    solo
                                    flat
                                    dense
                                    background-color="#F0F2F7"
                                    color="#223345"
                                    v-mask="'####-###-###-###'"
                                    placeholder="####-###-###-###"
                                    :masked="true"
                                    class="mx-2"
                                    @blur="setFormData"
                                    :error-messages="errors['tin']"
                                  ></v-text-field>
                                </v-flex>
                              </v-layout>
                            </v-flex>
                            <v-flex xs12 md6>
                              <small>PRC ID and PTR (recent) with 3 signature specimen<span class="pl-1 red--text title">*</span></small>
                                <shared-file-upload
                                  theme="grid"
                                  file_name="form.file_upload"
                                  :errors="errors['file_upload']"
                                  @fileData="setFileData"
                                />
                            </v-flex>
                          </v-layout>
                        </v-flex>
                        <v-flex xs12
                          v-if="form.client_type === 'owner'">
                          <small class="subtitle-1 font-weight-medium">Address Information (Owner’s Address)</small>
                          <v-layout wrap>
                            <v-flex xs12>
                              <small class="ml-3">Status of Residence in Davao City
                                <span class="pl-1 red--text">*</span><span class="pl-1 red--text title">*</span></small>
                              <v-radio-group
                                v-model="form.is_resident"
                                class="ml-3 my-0 py-2"
                                row
                                @blur="setFormData">
                                <v-radio label="Resident" :value="1"></v-radio>
                                <v-radio label="Non-Resident" :value="0"></v-radio>
                              </v-radio-group>
                            </v-flex>
                            <v-flex xs12>
                              <small>Owner’s Address (No.,Street,Barangay, City/Municipality)<span class="pl-1 red--text title">*</span></small>
                              <v-text-field
                                v-model="form.complete_address"
                                solo
                                flat
                                dense
                                placeholder="Complete Address"
                                background-color="#F0F2F7"
                                color="#223345"
                                class="mx-2"
                                @blur="setFormData"
                                :error-messages="errors['complete_address']"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs12 md4>
                              <small>Country<span class="pl-1 red--text title">*</span></small>
                              <v-autocomplete
                                v-model="form.country"
                                :items="country"
                                solo
                                flat
                                dense
                                :disabled="form.is_resident === 1"
                                background-color="#F0F2F7"
                                color="#223345"
                                placeholder="Select Country"
                                return-object
                                item-text="name"
                                item-value="name"
                                class="mx-2"
                                required
                                @change="setFormData"
                                :error-messages="errors['country']">
                              </v-autocomplete>
                            </v-flex>
                            <v-flex xs12 md4>
                              <small>Province<span class="pl-1 red--text title">*</span></small>
                              <v-autocomplete
                                v-model="form.province"
                                :items="provinces"
                                solo
                                flat
                                dense
                                :disabled="form.is_resident === 1 || form.country !== 'PHILIPPINES'"
                                background-color="#F0F2F7"
                                color="#223345"
                                placeholder="Select Province"
                                return-string
                                item-text="province"
                                item-value="province"
                                class="mx-2"
                                required
                                @change="setFormData"
                                :error-messages="errors['province']">
                              </v-autocomplete>
                            </v-flex>
                            <v-flex xs12 md4>
                              <small>City<span class="pl-1 red--text title">*</span></small>
                              <v-autocomplete
                                v-if="form.is_resident === 0"
                                v-model="form.city"
                                :items="cities"
                                solo
                                flat
                                dense
                                return-string
                                :disabled="form.country !== 'PHILIPPINES'"
                                background-color="#F0F2F7"
                                color="#223345"
                                placeholder="Select City"
                                item-text="city"
                                item-value="city"
                                class="mx-2"
                                @change="setFormData"
                                :error-messages="errors['city']"
                              >
                              </v-autocomplete>
                              <v-text-field
                                v-model="form.city"
                                solo
                                flat
                                dense
                                v-if="form.is_resident === 1"
                                :disabled="form.is_resident === 1"
                                placeholder="City"
                                background-color="#F0F2F7"
                                color="#223345"
                                class="mx-2"
                                @blur="setFormData"
                                :error-messages="errors['city']"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs12 md4
                              v-if="form.is_resident === 1">
                              <small>District<span class="pl-1 red--text title">*</span></small>
                              <v-autocomplete
                                v-model="form.district_id"
                                :items="districtItems"
                                solo
                                flat
                                dense
                                return-object
                                background-color="#F0F2F7"
                                color="#223345"
                                placeholder="Select District"
                                item-text="name"
                                item-value="name"
                                class="mx-2"
                                @change="setFormData"
                                :error-messages="errors['district']"
                              >
                              </v-autocomplete>
                            </v-flex>
                            <v-flex xs12 md4>
                              <small>Barangay<span class="pl-1 red--text title">*</span></small>
                              <v-autocomplete
                                v-model="form.barangay"
                                :items="barangays"
                                solo
                                flat
                                dense
                                :disabled="form.country !== 'PHILIPPINES'"
                                return-string
                                background-color="#F0F2F7"
                                color="#223345"
                                placeholder="Select Barangay"
                                item-text="name"
                                item-value="name"
                                class="mx-2"
                                @change="setFormData"
                                :error-messages="errors['barangay']"
                              >
                              </v-autocomplete>
                            </v-flex>
                            <v-flex xs12 md4>
                              <small>Zip Code<span class="pl-1 red--text title">*</span></small>
                              <v-text-field
                                v-model="form.zipcode"
                                solo
                                flat
                                dense
                                background-color="#F0F2F7"
                                color="#223345"
                                class="mx-2"
                                @blur="setFormData"
                                :error-messages="errors['zipcode']"
                              ></v-text-field>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-flex xs12>
                      <small class="subtitle-1 font-weight-bold">Account Information</small>
                      <v-layout wrap>
                        <v-flex xs12 md4>
                          <small>Email Address<span class="pl-1 red--text title">*</span></small>
                          <v-text-field
                            solo
                            flat
                            dense
                            autocomplete="off"
                            v-model="form.email"
                            background-color="#F0F2F7"
                            color="#223345"
                            class="mx-2"
                            prepend-inner-icon="email"
                            @keyup.enter="submit()"
                            :error-messages="errors['email']"
                          />
                        </v-flex>
                        <v-flex xs12 md4>
                          <small>Password<span class="pl-1 red--text title">*</span></small>
                          <v-text-field
                            solo
                            flat
                            dense
                            background-color="#F0F2F7"
                            color="#223345"
                            @keyup.enter="submit()"
                            autocomplete="off"
                            :append-icon="show ? 'visibility_off' : 'visibility'"
                            :type="show ? 'text' : 'password'"
                            @click:append="show = !show"
                            v-model="form.password"
                            light
                            class="mx-2"
                            prepend-inner-icon="lock"
                            :error-messages="errors['password']"
                          />
                        </v-flex>
                        <v-flex xs12 md4>
                          <small>Confirm Password<span class="pl-1 red--text title">*</span></small>
                          <v-text-field
                            solo
                            flat
                            dense
                            background-color="#F0F2F7"
                            color="#223345"
                            @keyup.enter="submit()"
                            autocomplete="off"
                            :append-icon="show1 ? 'visibility_off' : 'visibility'"
                            :type="show1 ? 'text' : 'password'"
                            @click:append="show1 = !show1"
                            v-model="form.confirm_password"
                            light
                            class="mx-2"
                            prepend-inner-icon="lock"
                            :error-messages="errors['confirm_password']"
                          />
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </v-layout>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn
                      large
                      width="100px"
                      :disabled="loading"
                      :loading="loading"
                      @click="submit()"
                      class="mb-2 px-5 primary-bg-color white--text"
                    >Submit</v-btn>
                  </v-card-actions>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>

        </v-container>
      </v-flex>
      <v-flex xs12 sm5 md4 lg3 v-if="$vuetify.breakpoint.smAndUp">
        <shared-building-logo-card />
      </v-flex>

    <v-dialog
      persistent
      v-model="dialog"
      width="1200"
      scrollable
      >
      <v-card class="pa-1 tertiary-bg-color">
      <h2
        style="text-align: center"
        class="py-2 px-3 modal-title text-center align-center"
        >
        PRIVACY POLICY
      </h2>
      <v-card-text class="py-2 px-4 pt-3 text-justify">
        <p style="overflow-wrap: break-word;">
        <p class="text-justify" style="overflow-wrap: break-word;">
          <strong class="black--text">Your privacy is important to us.</strong><br>
          It is the Office of the Building Official's policy to respect your privacy and comply with any applicable law and regulation regarding any personal information we may collect about you, including across our website, https:______________//, and other sites we own and operate.<br>
          This policy is effective as of ______________<br>
        </p>
        <p class="text-justify" style="overflow-wrap: break-word;">
          <strong class="title black--text">Information We Collect</strong><br>
          Information we collect includes both information you knowingly and actively provide us when using or participating in any of our services and promotions, and any information automatically sent by your devices in the course of accessing our products and services.<br>
          <ol type="A">
            <li><strong class="subtitle-1 font-weight-medium">Log Data</strong><br>
            When you visit our website, our servers may automatically log the standard data provided by your web browser. It may include your device's Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, other details about your visit, and technical details that occur in conjunction with any errors you may encounter.
            Please be aware that while this information may not be personally identifying by itself, it may be possible to combine it with other data to personally identify individual persons.<br></li>
            <li>
              <strong class="subtitle-1 font-weight-medium">Personal Information and Business Information</strong><br>
               We may ask for personal information which may include one or more of the following:<br>
            </li>
          </ol>
          <ul>
            <li v-for="(item, index) in items" :key="index">
               {{ item.title }}
            </li>
          </ul>
        </p>
        <p class="text-justify mb-0" style="overflow-wrap: break-word;">
          <strong class="title black--text">Legitimate Reasons for Processing Your Permit</strong><br>
          <p class="ml-3 text-justify" style="overflow-wrap: break-word;">
            We may collect personal information from you when you do any of the following on our website:<br>
            <ul>
              <li v-for="(info, infoIndex) in personalInfos" :key="infoIndex">
                 {{ info.title }}
              </li>
              <li>
                <p>
                Use a mobile device or web browser to access our content.  Contact us via email, social media, or on any similar technologies When you mention us on social media<br>
              </p>
              </li>
            </ul>
          </p>
        </p>
        <p class="ml-3 text-justify" style="overflow-wrap: break-word;">
          We may collect, hold, use, and disclose information for the following purposes, and personal information will not be further processed in a manner that is incompatible with these purposes:<br>
          <ol>
            <li>To contact and communicate with you for internal record keeping and administrative purposes for contact tracing purposes.<br></li>
            <li>Please be aware that we may combine information we collect about you with general information or research data we receive from other trusted sources.</li>
          </ol>
        </p>
        <p class="text-justify" style="overflow-wrap: break-word;">
          <strong class="title black--text">How Long We Keep Your Personal Information</strong><br>
          We keep your personal information only for as long as necessary for the fulfillment of the purposes expressed in this privacy policy. This period may vary, depending on what we are using your information for. Once your personal and permit information is no longer required, we will delete it or make it anonymous by removing all details that identify you.<br>
          However, if necessary, we may retain your personal and permit information for our compliance with a legal, accounting, or reporting obligation or for archiving purposes in the public interest, as well as scientific, or historical research purposes or statistical purposes.<br>
        </p>

        <p class="text-justify" style="overflow-wrap: break-word;">
          <strong class="title black--text">Security of Your Personal and Business Information</strong><br>
          When we collect and process personal information, and while we retain this information, we will protect it within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use, or modification.<br>
          All Permit Application information voluntarily provided by you will be shared with other personalities participating in the Permit procedure and/or people with authorize access to collect information for the purposes of application processes, reporting, and others.<br>
          You are responsible for selecting any password and its overall security strength, ensuring the security of your own information within the bounds of our services.<br>
          We advise that no method of electronic transmission or storage is 100% secure, and no one can guarantee absolute data security. However, we will do our best to protect the personal information you provide to us and will comply with laws applicable to us in respect of any data breach.<br>
        </p>

        <p class="text-justify" style="overflow-wrap: break-word;">
          <strong class="title black--text">Your Rights</strong><br>
          <p class="ml-3">
             <strong class="subtitle-1 font-weight-medium">Right to reasonable access to personal information</strong><br>
              You retain the right to request details of any personal information we hold about you.<br>

              <strong class="subtitle-1 font-weight-medium">Right to correction of personal information</strong><br>
              If you believe that any information we hold about you is inaccurate, incomplete, outdated, false, irrelevant, or misleading, please contact us using the details provided in this privacy policy. We will take reasonable steps to correct any information found to be such.<br>

              <strong class="subtitle-1 font-weight-medium">Right to lodge a complaint</strong><br>
              If you believe that we have breached a relevant data protection law and wish to make a complaint, please contact us using the details below and provide us with full details of the alleged breach. We will promptly investigate your complaint and respond to you, in writing, setting out the outcome of our investigation and the steps we will take to deal with your complaint. You also have the right to contact a regulatory body or data protection authority in relation to your complaint.<br>
          </p>
        </p>

        <p class="text-justify" style="overflow-wrap: break-word;">
          <strong class="title black--text">Controlling Your Personal Information</strong><br>
          You always retain the right to withhold personal and business information from us, with the understanding that your experience of our website may be affected. You may withdraw your consent to the use of personal and business information previously provided. We will not discriminate against you for exercising any of your rights over your personal information. If you do provide us with personal and business information you understand that we will collect, hold, use and disclose it in accordance with this privacy policy.<br>

          Personal and business information about you supplied by a third party will be protected in the manner set out in this privacy policy. A third party providing personal information about somebody else presents and warrants to have such other person's consent to provide the personal information to us.<br>

          We will provide you with the ability to unsubscribe from our email-database or opt out of communications. Please be aware we may need to request specific information from you to help us confirm your identity.<br>
        </p>

        <p class="text-justify" style="overflow-wrap: break-word;">
          <strong class="title black--text">Use of Cookiess</strong><br>
          We use “cookies” to collect information about you and your activity across our site. A cookie is a small piece of data that our website stores on your computer, and accesses each time you visit, so we can understand how you use our site. This helps us serve you content based on preferences you have specified.<br>
        </p>

        <p class="text-justify" style="overflow-wrap: break-word;">
          <strong class="title black--text">Limits of Our Policy</strong><br>
          Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and policies of those sites, and cannot accept responsibility or liability for their respective privacy practices.<br>
        </p>

        <p class="text-justify" style="overflow-wrap: break-word;">
          <strong class="title black--text">Changes to This Policy</strong><br>
          The terms of this privacy policy may be changed at our discretion to reflect updates to our business processes, current acceptable practices, or legislative or regulatory changes. Any such change will be posted here at the same link by which you are accessing this privacy policy.<br>

          We will get your permission or give you the opportunity to opt in to or opt out of, as applicable, any new uses of your personal information, as may be required by law.<br>
        </p>

        <p class="text-justify" style="overflow-wrap: break-word;">
          <strong class="title black--text">Contact Us</strong><br>
          For any questions or concerns regarding your privacy, you may contact us using the following details at: obo@davaocity.gov.ph.
        </p>
        </p>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          depressed
          small
          to="/"
          style="color:#6d6d6d"
          @click="cancel()">
          CANCEL
        </v-btn>
        <v-btn
          depressed
          small
          class="primary-bg-color white--text"
          @click="proceed()"
          >
          PROCEED
        </v-btn>
      </v-card-actions>
    </v-card>
    </v-dialog>
    <shared-footer />
    </v-layout>
  </client-only>
</template>
<script>
  import Global from '~/plugins/mixins/global'
  import imagePath from '~/plugins/imagepath'
  import constants from '~/plugins/mixins/constants/index'
  import Country from '~/plugins/mixins/country'
  import { isUndefined, isEmpty, findIndex } from 'lodash'
  import { mapMutations, mapActions, mapGetters } from 'vuex'
  export default {
    mixins: [
      Country,
      constants,
      Global,
      imagePath
    ],
    data: () => ({
      email: '',
      errors: {},
      loading: false,
      show: false,
      show1: false,
      form: {
        client_type: 'owner',
        is_resident: 1,
        city: 'Davao City'
      },
      dialog: false,
      cities: [],
      barangays: []
    }),
    computed: {
      ...mapGetters('user', ['user']),
      titleClass () {
        if (this.$vuetify.breakpoint.lgAndUp) {
          return 'subtitle-1 ml-5'
        } else {
          return 'subtitle-2'
        }
      },
      brgyChoices () {
        if (this.form.district_id) {
          let items = this.brgyItems.filter(item => item.district_id === Number(this.form.district_id.id))
          return items
        } else {
          return []
        }
      }
    },
    watch: {
      form: {
        handler (val) {
          if (val.is_resident === 1) {
            this.$set(this.form, 'country', 'PHILIPPINES')
            this.$set(this.form, 'province', 'DAVAO DEL SUR')
            this.$set(this.form, 'city', 'CITY OF DAVAO')
            this.setProvince()
            if (val.district_id) {
              this.$set(this.form, 'district', val.district_id.name)
              this.barangays = this.brgyChoices
            }
          }
          if (val.province) {
            this.setProvince()
          }
        },
        deep: true
      }
    },
    methods: {
      ...mapMutations('events', ['SET_PRIVACY_DIALOG']),
      ...mapMutations('user', ['SET_USER']),
      ...mapActions('user', ['POST_API', 'POST_ATACHMENT']),
      checkResidency () {
        if (this.form.is_resident === 1) {
          this.$set(this.form, 'country', 'PHILIPPINES')
          this.$set(this.form, 'province', 'DAVAO DEL SUR')
          this.$set(this.form, 'city', 'CITY OF DAVAO')
        } else {
          this.$set(this.form, 'province', '')
          this.$set(this.form, 'city', '')
          this.$set(this.form, 'district_id', '')
        }
      },
      proceed () {
        this.dialog = false
      },
      cancel () {
        this.dialog = false
        this.goTo('index')
      },
      submit () {
        this.loading = true
        const inputs = new FormData()
        for (const [key, value] of Object.entries(this.form)) {
          inputs.append(key, String(value))
        }
        this.$set(inputs, 'api', 'register')
        this.$set(inputs, 'zipcode', '8000')
        inputs.append('file_upload', this.form.file_upload)
        this.POST_API(inputs).then(res => {
          this.errors = {}
          this.verify({ api: `verify/${res.data.user.id}` })
        }).catch(err => {
          this.loading = false
          if (err) {
            if (err.response.data.error) {
              this.errors = err.response.data.error
            }
            if (err.response.data.errors) {
              this.errors = err.response.data.errors
            }
          }
        })
      },
      verify (payload) {
        this.POST_API(payload).then(res => {
          this.goTo('index-validate')
        }).catch(err => {
          if (err) {
            console.log(err)
          }
        }).finally(() => {
          this.loading = false
        })
      },
      backHome () {
        this.goTo('index')
      },
      setProvince () {
        if (this.form.province) {
          this.barangays = []
          let index = _.findIndex(this.provinces, { province: String(this.form.province) })
          if (index !== -1) {
            this.cities = []
            for (let index2 of Object.keys(this.provinces[index].cities)) {
              this.cities.push(this.provinces[index].cities[index2])
            }
            let cindex = findIndex(this.cities, { city: String(this.form.city) })
            if (cindex !== -1) {
              this.barangays = this.cities[cindex].barangays
            } else {
              this.barangays = this.brgyChoices
            }
          }
        } else {
          this.barangays = this.brgyChoices
        }
      },
      setFormData () {
        this.SET_USER(this.form)
      },
      validateDialog () {
        if (isUndefined(localStorage.vuex)) {
          this.dialog = true
        } else {
          // if (global._.isEmpty(this.user)) {
            this.dialog = true
          // }
        }
      },
      setFileData (payload) {
        this.$set(this.form, 'file_upload', payload)
        this.$set(this.form, 'name', 'PRC ID and PTR (recent) with 3 signature specimen')
        this.$set(this.form, 'file_name', payload.name)
      }
    },
    created () {
      this.checkResidency()
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        vm.validateDialog()
      })
    }
  }
</script>
