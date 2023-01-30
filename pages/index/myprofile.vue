
<template>
  <v-container fluid fill>
    <client-only>
      <shared-toolbar />
      <shared-navigation :items="items" />
      <v-main>
        <v-card flat class="pa-2">
          <v-layout wrap>
            <v-flex xs12>
              <v-card style="margin-top: 60px;">
                <v-toolbar flat
                  v-if="userRole === 'representative'"
                  class="primary-bg-color">
                  <v-toolbar-title class="grey--text">
                    PERSONAL INFORMATION
                  </v-toolbar-title>

                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-toolbar flat
                  v-if="userRole === 'owner'"
                  class="primary-bg-color">
                  <v-toolbar-title class="grey--text">
                    PERSONAL INFORMATION
                  </v-toolbar-title>

                  <v-spacer></v-spacer>
                  <v-btn class="tertiary-bg-color" v-show="isDisabledProfile && !mobile" @click="editProfile">
                    <v-icon small >mdi-pencil</v-icon>
                    Edit
                  </v-btn>
                  <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      v-show="isDisabledProfile && mobile"
                      v-on="on"
                      icon
                      depressed
                      class="ma-1 white--text"
                      @click="editProfile"
                      >
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </template>
                  <span>Edit</span>
                </v-tooltip>
                  <v-btn class="tertiary-bg-color" v-if="!isDisabledProfile && !mobile" @click="saveProfile">
                    <v-icon small >mdi-content-save</v-icon>
                    Save
                  </v-btn>
                  <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      v-if="!isDisabledProfile && mobile"
                      v-on="on"
                      icon
                      depressed
                      class="ma-1 white--text"
                      @click="saveProfile"
                      >
                      <v-icon>mdi-content-save</v-icon>
                    </v-btn>
                  </template>
                  <span>v</span>
                </v-tooltip>
                </v-toolbar>

                <v-divider></v-divider>

                <v-card-text>
                  <v-layout wrap>
                    <v-flex xs12 md3>
                      <small>First Name<span class="pl-1 title"></span></small>
                      <v-text-field
                        v-model="form.personal.first_name"
                        solo
                        flat
                        dense
                        :disabled="isDisabledProfile"
                        placeholder="First Name"
                        background-color="#F0F2F7"
                        color="#223345"
                        class="mx-2"
                        @blur="setFormData"
                        :error-messages="profileErrors['first_name']"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 md3>
                      <small>Middle Name<span class="pl-1 title"></span></small>
                      <v-text-field
                        v-model="form.personal.middle_name"
                        solo
                        flat
                        dense
                        :disabled="isDisabledProfile"
                        placeholder="Middle Name"
                        background-color="#F0F2F7"
                        color="#223345"
                        class="mx-2"
                        @blur="setFormData"
                        :error-messages="profileErrors['middle_name']"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 md3>
                      <small>Last Name<span class="pl-1 title"></span></small>
                      <v-text-field
                        v-model="form.personal.last_name"
                        solo
                        flat
                        dense
                        :disabled="isDisabledProfile"
                        placeholder="Last Name"
                        background-color="#F0F2F7"
                        color="#223345"
                        class="mx-2"
                        @blur="setFormData"
                        :error-messages="profileErrors['last_name']"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 md3>
                      <small>Suffix<span class="pl-1 title"></span></small>
                      <v-autocomplete
                        v-model="form.personal.suffix"
                        :items="suffixes"
                        solo
                        flat
                        dense
                        :disabled="isDisabledProfile"
                        background-color="#F0F2F7"
                        color="#223345"
                        placeholder="Select Suffix"
                        return-string
                        class="mx-2"
                        required
                        @change="setFormData"
                        :error-messages="profileErrors['suffix']">
                      </v-autocomplete>
                    </v-flex>
                    <v-flex xs12 md6>
                      <small>Contact No. (Please make sure to use your active contact number for application tracking purposes.)<span class="pl-1 title"></span></small>
                      <v-text-field
                        v-model="form.personal.contact"
                        solo
                        flat
                        dense
                        :disabled="isDisabledProfile"
                        placeholder="Contact No."
                        background-color="#F0F2F7"
                        color="#223345"
                        v-mask="'###-###-####'"
                        :masked="true"
                        prefix="+63"
                        class="mx-2"
                        @blur="setFormData"
                        :error-messages="profileErrors['contact']"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 md6>
                      <small>Gender<span class="pl-1 title"></span></small>
                      <v-radio-group
                        :disabled="isDisabledProfile"
                        v-model="form.personal.gender"
                        row
                        :error-messages="profileErrors['gender']"
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
                  </v-layout>
                  <v-layout wrap
                   v-if="userRole === 'representative'">
                    <v-flex xs12>
                      <small>Type of Representative<span class="pl-1 title"></span></small>
                        <v-radio-group
                          :disabled="isDisabled"
                          v-model="form.designer.profession"
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
                    <v-flex xs12>
                      <v-layout wrap>
                        <v-flex xs12>
                          <small>Representative Address (No.,Street,Barangay, City/Municipality)<span class="pl-1 title"></span></small>
                          <v-text-field
                            v-model="form.designer.complete_address"
                            solo
                            flat
                            dense
                            :disabled="isDisabled"
                            placeholder="Complete Address"
                            background-color="#F0F2F7"
                            color="#223345"
                            class="mx-2"
                            @blur="setFormData"
                            :error-messages="errors['complete_address']"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 md3>
                          <small>PRC NO.<span class="pl-1 title"></span></small>
                          <v-text-field
                            v-model="form.designer.prc_no"
                            solo
                            flat
                            dense
                            :disabled="isDisabled"
                            type="number"
                            placeholder="PRC NO."
                            background-color="#F0F2F7"
                            color="#223345"
                            class="mx-2"
                            @blur="setFormData"
                            :error-messages="errors['prc_no']"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 md3>
                          <small>Validity<span class="pl-1 title"></span></small>
                          <v-text-field
                            v-model="form.designer.validity"
                            solo
                            flat
                            dense
                            :disabled="isDisabled"
                            type="date"
                            placeholder="Validity"
                            background-color="#F0F2F7"
                            color="#223345"
                            class="mx-2"
                            @blur="setFormData"
                            :error-messages="errors['validity']"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 md3>
                          <small>PTR NO.<span class="pl-1 title"></span></small>
                          <v-text-field
                            v-model="form.designer.ptr_no"
                            solo
                            flat
                            dense
                            :disabled="isDisabled"
                            placeholder="PTR NO."
                            background-color="#F0F2F7"
                            color="#223345"
                            class="mx-2"
                            @blur="setFormData"
                            :error-messages="errors['ptr_no']"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 md3>
                          <small>Date Issued<span class="pl-1 title"></span></small>
                          <v-text-field
                            v-model="form.designer.date_issued"
                            flat
                            solo
                            type="date"
                            dense
                            :disabled="isDisabled"
                            placeholder="Date Issued"
                            background-color="#F0F2F7"
                            color="#223345"
                            class="mx-2"
                            @blur="setFormData"
                            :error-messages="errors['date_issued']"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 md6>
                          <small>Place Issued<span class="pl-1 title"></span></small>
                          <v-text-field
                            v-model="form.designer.place_issued"
                            solo
                            flat
                            dense
                            :disabled="isDisabled"
                            placeholder="Place Issued"
                            background-color="#F0F2F7"
                            color="#223345"
                            class="mx-2"
                            @blur="setFormData"
                            :error-messages="errors['place_issued']"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 md3>
                          <small>TIN<span class="pl-1 title"></span></small>
                          <v-text-field
                            v-model="form.designer.tin"
                            solo
                            flat
                            dense
                            :disabled="isDisabled"
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
                      <small v-if="!form.designer.file_upload">PRC ID and PTR (recent) with 3 signature specimen<span class="pl-1 title"></span></small>
                        <shared-file-upload
                          theme="grid"
                          title="PRC ID and PTR (recent) with 3 signature specimen"
                          :file_name="setFile(form.designer.file_upload)"
                          :errors="errors['file_upload']"
                          @fileData="setFileData"
                          :viewFile="form.designer.file_upload ? true : false"
                          :isChangeFile="false"
                        />
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12
              v-if="form.personal.client_type !== 'representative'">
              <v-card class="mt-5">
                <v-toolbar flat
                  v-if="userRole === 'representative'"
                  class="primary-bg-color">
                  <v-toolbar-title class="grey--text">
                    ADDRESS INFORMATION
                  </v-toolbar-title>

                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-toolbar flat
                  v-if="userRole === 'owner'"
                  class="primary-bg-color">
                  <v-toolbar-title class="grey--text">
                    ADDRESS INFORMATION
                  </v-toolbar-title>

                  <v-spacer></v-spacer>
                  <v-btn class="tertiary-bg-color" v-if="isDisabledAddress && !mobile" @click="editAddress">
                    <v-icon small >mdi-pencil</v-icon>
                    Edit
                  </v-btn>
                  <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      v-if="isDisabledAddress && mobile"
                      v-on="on"
                      icon
                      depressed
                      class="ma-1 white--text"
                      @click="editAddress"
                      >
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </template>
                  <span>Edit</span>
                </v-tooltip>
                  <v-btn v-if="!isDisabledAddress && !mobile" @click="saveAddress">
                    <v-icon small >mdi-content-save</v-icon>
                    Save
                  </v-btn>
                  <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      v-if="!isDisabledAddress && mobile"
                      v-on="on"
                      icon
                      depressed
                      class="ma-1 white--text"
                      @click="saveAddress"
                      >
                      <v-icon>mdi-content-save</v-icon>
                    </v-btn>
                  </template>
                  <span>Save</span>
                </v-tooltip>
                </v-toolbar>

                <v-divider></v-divider>

                <v-card-text>
                  <v-layout wrap>
                    <v-flex xs12>
                      <small class="ml-3">Status of Residence in Davao City
                        <span class="pl-1 red--text">*</span><span class="pl-1 title"></span></small>
                      <v-radio-group
                        :disabled="isDisabledAddress"
                        v-model="form.address.is_resident"
                        class="ml-3 my-0 py-2"
                        row
                        @blur="setFormData">
                        <v-radio label="Resident" :value="1"></v-radio>
                        <v-radio label="Non-Resident" :value="0"></v-radio>
                      </v-radio-group>
                    </v-flex>
                    <v-flex xs12>
                      <small>Owner’s Address (No.,Street,Barangay, City/Municipality)<span class="pl-1 title"></span></small>
                      <v-text-field
                        v-model="form.address.complete_address"
                        solo
                        flat
                        dense
                        :disabled="isDisabledAddress"
                        placeholder="Complete Address"
                        background-color="#F0F2F7"
                        color="#223345"
                        class="mx-2"
                        @blur="setFormData"
                        :error-messages="addressErrors['complete_address']"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 md4>
                      <small>Country<span class="pl-1 title"></span></small>
                      <v-autocomplete
                        v-model="form.address.country"
                        :items="country"
                        solo
                        flat
                        dense
                        :disabled="form.address.is_resident === 1 || isDisabledAddress"
                        background-color="#F0F2F7"
                        color="#223345"
                        placeholder="Select Country"
                        return-object
                        item-text="name"
                        item-value="name"
                        class="mx-2"
                        required
                        @change="setFormData"
                        :error-messages="addressErrors['country']">
                      </v-autocomplete>
                    </v-flex>
                    <v-flex xs12 md4>
                      <small>Province<span class="pl-1 title"></span></small>
                      <v-autocomplete
                        v-model="form.address.province"
                        :items="provinces"
                        solo
                        flat
                        dense
                        :disabled="form.address.is_resident === 1 || form.address.country !== 'PHILIPPINES' || isDisabledAddress"
                        background-color="#F0F2F7"
                        color="#223345"
                        placeholder="Select Province"
                        return-string
                        item-text="province"
                        item-value="province"
                        class="mx-2"
                        required
                        @change="setFormData"
                        :error-messages="addressErrors['province']">
                      </v-autocomplete>
                    </v-flex>
                    <v-flex xs12 md4>
                      <small>City<span class="pl-1 title"></span></small>
                      <v-autocomplete
                        v-if="form.address.is_resident === 0"
                        v-model="form.address.city"
                        :items="cities"
                        solo
                        flat
                        dense
                        return-string
                        :disabled="form.address.country !== 'PHILIPPINES' || isDisabledAddress"
                        background-color="#F0F2F7"
                        color="#223345"
                        placeholder="Select City"
                        item-text="city"
                        item-value="city"
                        class="mx-2"
                        @change="setFormData"
                        :error-messages="addressErrors['city']"
                      >
                      </v-autocomplete>
                      <v-text-field
                        v-model="form.address.city"
                        solo
                        flat
                        dense
                        v-if="form.address.is_resident === 1"
                        :disabled="form.address.is_resident === 1"
                        placeholder="City"
                        background-color="#F0F2F7"
                        color="#223345"
                        class="mx-2"
                        @blur="setFormData"
                        :error-messages="addressErrors['city']"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 md4
                      v-if="form.address.is_resident === 1">
                      <small>District<span class="pl-1 title"></span></small>
                      <v-autocomplete
                        v-model="form.address.district_id"
                        :items="districtItems"
                        solo
                        flat
                        dense
                        :disabled="isDisabledAddress"
                        return-object
                        background-color="#F0F2F7"
                        color="#223345"
                        placeholder="Select District"
                        item-text="name"
                        item-value="name"
                        class="mx-2"
                        @change="setFormData"
                        :error-messages="addressErrors['district']"
                      >
                      </v-autocomplete>
                    </v-flex>
                    <v-flex xs12 md4>
                      <small>Barangay<span class="pl-1 title"></span></small>
                      <v-autocomplete
                        v-model="form.address.barangay"
                        :items="barangays"
                        solo
                        flat
                        dense
                        :disabled="form.address.country !== 'PHILIPPINES' || isDisabledAddress"
                        return-string
                        background-color="#F0F2F7"
                        color="#223345"
                        placeholder="Select Barangay"
                        item-text="name"
                        item-value="name"
                        class="mx-2"
                        @change="setFormData"
                        :error-messages="addressErrors['barangay']"
                      >
                      </v-autocomplete>
                    </v-flex>
                    <v-flex xs12 md4>
                      <small>Zip Code<span class="pl-1 title"></span></small>
                      <v-text-field
                        v-model="form.address.zipcode"
                        solo
                        flat
                        dense
                        :disabled="isDisabledAddress"
                        background-color="#F0F2F7"
                        color="#223345"
                        class="mx-2"
                        @blur="setFormData"
                        :error-messages="addressErrors['zipcode']"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12>
              <v-card class="mt-5">
                <v-toolbar flat
                  v-if="userRole === 'representative'"
                  class="primary-bg-color">
                  <v-toolbar-title class="grey--text">
                    ACCOUNT INFORMATION
                  </v-toolbar-title>

                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-toolbar flat
                  v-if="userRole === 'owner'"
                  class="primary-bg-color">
                  <v-toolbar-title class="grey--text">
                    ACCOUNT INFORMATION
                  </v-toolbar-title>

                  <v-spacer></v-spacer>
                  <!-- <v-btn v-if="isDisabledAccout" @click="editAccount">
                    <v-icon small >mdi-pencil</v-icon>
                    Edit
                  </v-btn>
                  <v-btn v-if="!isDisabledAccout" @click="saveAccount">
                    <v-icon small >mdi-content-save</v-icon>
                    Save
                  </v-btn> -->
                </v-toolbar>

                <v-divider></v-divider>

                <v-card-text>
                  <v-layout wrap>
                    <v-flex xs12 md8>
                      <small>Email Address<span class="pl-1 title"></span></small>
                      <v-text-field
                        solo
                        flat
                        dense
                        :disabled="isDisabledAccout"
                        autocomplete="off"
                        v-model="form.account.email"
                        background-color="#F0F2F7"
                        color="#223345"
                        class="mx-2"
                        prepend-inner-icon="email"
                        @keyup.enter="submit()"
                        :error-messages="accountErrors['email']"
                      />
                    </v-flex>
                    <v-flex xs12 md4 />
                    <v-flex xs12
                      v-if="!isChangePass">
                      <v-card-actions>
                        <v-btn  @click="viewPassword">
                        <v-icon small >mdi-pencil</v-icon>
                        Change Password
                      </v-btn>
                      <v-spacer />
                      </v-card-actions>
                    </v-flex>
                    <v-flex xs12 md4
                      v-if="isChangePass">
                      <small>Create New Password<span class="pl-1 title"></span></small>
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
                        v-model="form.account.password"
                        light
                        class="mx-2"
                        prepend-inner-icon="lock"
                        :error-messages="accountErrors['password']"
                      />
                    </v-flex>
                    <v-flex xs12 md4
                      v-if="isChangePass">
                      <small>Confirm Password<span class="pl-1 title"></span></small>
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
                        v-model="form.account.confirm_password"
                        light
                        class="mx-2"
                        prepend-inner-icon="lock"
                        :error-messages="accountErrors['confirm_password']"
                      />
                    </v-flex>
                    <v-flex xs12
                      v-if="isChangePass">
                      <v-card-actions>
                      <v-btn @click="changePassword">
                        <v-icon small >mdi-content-save</v-icon>
                        Save New Password
                      </v-btn>
                      <v-spacer />
                      </v-card-actions>
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-card>
      </v-card>
      <shared-snackbar
        :snack="snackbar"
        :color="color"
        :message="snackMsg"
        @close="snackbar = false"
      />
      </v-main>
    </client-only>
  </v-container>
</template>
<script>
  import Global from '~/plugins/mixins/global'
  import imagePath from '~/plugins/imagepath'
  import constants from '~/plugins/mixins/constants/index'
  import Country from '~/plugins/mixins/country'
  import { omit, isEmpty, findIndex, pick } from 'lodash'
  import { mapMutations, mapActions, mapGetters } from 'vuex'
  export default {
    mixins: [
      Country,
      constants,
      Global,
      imagePath
    ],
    data() {
      return {
        items: [
          { title: 'FAQ', icon: 'mdi-frequently-asked-questions', name: 'index-faqs' },
          { title: 'User Manual', icon: 'mdi-folder-information', name: 'index-usermanual' }
        ],
        email: '',
        errors: {},
        loading: false,
        show: false,
        show1: false,
        form: {
          personal: {},
          designer: {},
          address: {},
          account: {}
        },
        dialog: false,
        cities: [],
        barangays: [],
        isDisabled: true,
        isDisabledProfile: true,
        snackbar: false,
        color: '',
        snackMsg: '',
        profileErrors: {},
        isDisabledAddress: true,
        addressErrors: {},
        accountErrors: {},
        isDisabledAccout: true,
        isChangePass: false,
        clientProfileId: null,
        userRole: null
      }
    },
    watch: {
      form: {
        handler (val) {
          if (val.address.is_resident === 1) {
            this.$set(this.form.address, 'country', 'PHILIPPINES')
            this.$set(this.form.address, 'province', 'DAVAO DEL SUR')
            this.$set(this.form.address, 'city', 'CITY OF DAVAO')
            this.setProvince()
            if (val.address.district_id) {
              this.$set(this.form.address, 'district', val.address.district_id.name)
              this.barangays = this.brgyChoices
            }
          }
          if (val.address.province) {
            this.setProvince()
          }
        },
        deep: true
      }
    },
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
        if (this.form.address.district_id) {
          if (this.form.address.district_id.id) {
            let items = this.brgyItems.filter(item => item.district_id === Number(this.form.address.district_id.id))
            return items
          } else {
            let findDistrict = this.districtItems.find(a => a.name === this.form.address.district_id)
            let items = this.brgyItems.filter(item => item.district_id === Number(findDistrict.id))
            return items
          }
        } else {
          return []
        }
      }
    },
    methods: {
      ...mapActions('user', ['POST_API', 'GET_API']),
      setProvince () {
        if (this.form.address.province) {
          this.barangays = []
          let index = _.findIndex(this.provinces, { province: String(this.form.address.province) })
          if (index !== -1) {
            this.cities = []
            for (let index2 of Object.keys(this.provinces[index].cities)) {
              this.cities.push(this.provinces[index].cities[index2])
            }
            let cindex = findIndex(this.cities, { city: String(this.form.address.city) })
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
        // this.SET_USER(this.form)
      },
      setFileData (payload) {
        this.$set(this.form, 'file_upload', payload)
        this.$set(this.form, 'name', 'PRC ID and PTR (recent) with 3 signature specimen')
        this.$set(this.form, 'file_name', payload.name)
      },
      editProfile () {
        this.isDisabledProfile = false
      },
      saveProfile () {
        let payload = {
          api: 'client/update',
          ...this.form.personal
        }
        // edit here
        this.POST_API(payload).then(res => {
          this.isDisabledProfile = true
          this.snackbar = true
          this.color = 'success'
          this.snackMsg = 'Profile data updated successfully.'
          this.fetchProfile()
        }).catch(err => {
          if (err) {
            this.profileErrors = err.response.data.errors
          }
        }).finally(() => {
          this.saveLoading = false
        })
      },
      fetchProfile () {
        let payload = {
          api: `client/fetch/${this.clientProfileId}`
        }
        this.GET_API(payload).then(res => {
          this.$set(this.form, 'personal', res.data.client)
        }).catch(err => {
          if (err) {
            console.log('err:', err)
          }
        }).finally(() => {
        })
      },
      editAddress () {
        this.isDisabledAddress = false
        this.snackbar = false
      },
      saveAddress () {
        let payload = {
          api: 'client/update/address',
          ...this.form.address
        }
        // edit here
        this.POST_API(payload).then(res => {
          this.isDisabledAddress = true
          this.snackbar = true
          this.color = 'success'
          this.snackMsg = 'Address data updated successfully.'
          this.fetchAddress()
        }).catch(err => {
          if (err) {
            this.addressErrors = err.response.data.errors
          }
        }).finally(() => {
          this.saveLoading = false
        })
      },
      fetchAddress () {
        let payload = {
          api: `client/fetch/address/${this.clientProfileId}`
        }
        this.GET_API(payload).then(res => {
          if (res.data.address) {
            let findDistrict = this.districtItems.find(a => a.name === res.data.address.district)
            this.$set(this.form, 'address', {
              ...omit(res.data.address, 'is_resident'),
              is_resident: res.data.address.is_resident ? 1 : 0,
              district_id: findDistrict ? findDistrict.name : null
            })
          }
        }).catch(err => {
          if (err) {
            console.log('err:', err)
          }
        }).finally(() => {
        })
      },
      editAccount () {
        this.isDisabledAccout = false
        this.snackbar = false
      },
      saveAccount () {
        let payload = {
          api: 'client/update',
          ...this.form.address
        }
        // edit here
        this.POST_API(payload).then(res => {
          this.isDisabledAccout = true
          this.snackbar = true
          this.color = 'success'
          this.snackMsg = 'Email updated successfully.'
        }).catch(err => {
          if (err) {
            this.addressErrors = err.response.data.errors
          }
        }).finally(() => {
          this.saveLoading = false
        })
      },
      viewPassword () {
        this.isChangePass = true
        this.snackbar = false
      },
      changePassword () {
        let payload = {
          api: 'admin/change/password',
          ...this.form.account
        }
        // edit here
        this.POST_API(payload).then(res => {
          this.form.account = {
            email: res.data.admin.email,
            password: '',
            confirm_password: '',
          }
          this.isChangePass = false
          this.snackbar = true
          this.color = 'success'
          this.snackMsg = 'Password changed successfully.'
        }).catch(err => {
          if (err) {
            this.accountErrors = err.response.data.error
          }
        }).finally(() => {
        })
      }
    },
    created() {
      let user = null
      let role = null
      if (process.client) {
        const token = localStorage.getItem('token')
        if (!isEmpty(localStorage.vuex)) {
          user = JSON.parse(localStorage.vuex).user.user
          this.clientProfileId = user.client.id
          this.userRole = user.client.client_type
          this.fetchProfile()
          this.fetchAddress()
          
          this.$set(this.form, 'account', user.user)
          this.$set(this.form, 'designer', user.client.attachment ? { ...user.client.attachment.designer , ...user.client.attachment } : {})
        }
        if (!isEmpty(user) && token) {
          this.goTo('index-myprofile')
        } else {
          localStorage.clear()
          this.goTo('index')
        }
      }
    }
  }
</script>
