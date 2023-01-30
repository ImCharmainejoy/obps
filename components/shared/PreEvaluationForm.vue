<template>
  <client-only>
    <v-container fluid fill
      v-scroll="onScroll">
      <v-skeleton-loader
       v-if="preLoading"
        class="px-3"
        type="article, article, card-heading, image, article, article, article, article, image, article, image, article, image"
      ></v-skeleton-loader>
      <v-layout wrap justify-center align-center
       v-else>
        <v-flex xs12>
          <small>Name of the Owner</small>
          <v-layout wrap>
            <v-flex xs12 sm4 md3>
              <small>First Name<span class="pl-1 red--text title">*</span></small>
              <v-text-field
                v-model="form.first_name"
                solo
                flat
                dense
                :disabled="roleId !== 3 || isFieldDisable"
                placeholder="First Name"
                background-color="#F0F2F7"
                color="#223345"
                class="mx-2 my-0 py-0"
                @blur="setFormData"
                :error-messages="errors['first_name']"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm4 md3>
              <small>Middle Name<span class="pl-1 title"></span></small>
              <v-text-field
                v-model="form.middle_name"
                solo
                flat
                dense
                :disabled="roleId !== 3 || isFieldDisable"
                placeholder="Middle Name"
                background-color="#F0F2F7"
                color="#223345"
                class="mx-2 my-0 py-0"
                @blur="setFormData"
                :error-messages="errors['middle_name']"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm4 md3>
              <small>Last Name<span class="pl-1 red--text title">*</span></small>
              <v-text-field
                v-model="form.last_name"
                solo
                flat
                dense
                :disabled="roleId !== 3 || isFieldDisable"
                placeholder="Last Name"
                background-color="#F0F2F7"
                color="#223345"
                class="mx-2 my-0 py-0"
                @blur="setFormData"
                :error-messages="errors['last_name']"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm4 md3>
              <small>Suffix<span class="pl-1 title"></span></small>
              <v-autocomplete
                v-model="form.suffix"
                :items="suffixes"
                solo
                flat
                dense
                :disabled="roleId !== 3 || isFieldDisable"
                background-color="#F0F2F7"
                color="#223345"
                placeholder="Select Suffix"
                return-string
                class="mx-2 my-0 py-0"
                required
                @change="setFormData"
                :error-messages="errors['suffix']">
              </v-autocomplete>
            </v-flex>
            <v-flex xs12>
              <small>Owner's Address<span class="pl-1 red--text title">*</span></small>
              <v-text-field
                v-model="form.application_address"
                solo
                flat
                dense
                :disabled="roleId !== 3 || isFieldDisable"
                placeholder="Owner's Address"
                background-color="#F0F2F7"
                color="#223345"
                class="mx-2 my-0 py-0"
                @blur="setFormData"
                :error-messages="errors['application_address']"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12>
          <small>Project Location</small>
          <v-layout wrap>
            <v-flex xs12 md7>
              <v-layout wrap>
                <v-flex xs12>
                  <v-layout wrap>
                    <v-flex xs12>
                      <small>Complete Address<span class="pl-1 red--text title">*</span></small>
                      <v-text-field
                        v-model="form.complete_address"
                        solo
                        flat
                        dense
                        :disabled="roleId !== 3 || isFieldDisable"
                        placeholder="Complete Address"
                        background-color="#F0F2F7"
                        color="#223345"
                        class="mx-2 my-0 py-0"
                        @blur="setFormData"
                        :error-messages="errors['complete_address']"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm4 md3>
                      <small>City<span class="pl-1 red--text title">*</span></small>
                      <v-text-field
                        v-model="form.city"
                        solo
                        flat
                        dense
                        :disabled="true"
                        placeholder="City"
                        background-color="#F0F2F7"
                        color="#223345"
                        class="mx-2 my-0 py-0"
                        @blur="setFormData"
                        :error-messages="errors['city']"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm4 md3>
                      <small>District<span class="pl-1 red--text title">*</span></small>
                      <v-autocomplete
                        v-model="form.district_id"
                        :items="districtItems"
                        solo
                        flat
                        dense
                        return-object
                        :disabled="roleId !== 3 || isFieldDisable"
                        background-color="#F0F2F7"
                        color="#223345"
                        label="Select District"
                        item-text="name"
                        item-value="name"
                        class="mx-2 my-0 py-0"
                        @change="setFormData"
                        :error-messages="errors['district']"
                      >
                      </v-autocomplete>
                    </v-flex>
                    <v-flex xs12 sm4 md6>
                      <small>Barangay<span class="pl-1 red--text title">*</span></small>
                      <v-autocomplete
                        v-model="form.barangay_name"
                        :items="barangays"
                        solo
                        flat
                        dense
                        :disabled="!Boolean(form.district_id) || roleId !== 3 || isFieldDisable"
                        return-object
                        background-color="#F0F2F7"
                        color="#223345"
                        label="Select Barangay"
                        item-text="name"
                        item-value="name"
                        class="mx-2 my-0 py-0"
                        @change="setFormData"
                        :error-messages="errors['barangay']"
                      >
                      </v-autocomplete>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs12>
                  <v-layout wrap>
                    <v-flex xs12 sm6 md6>
                      <small>Project Cost<span class="pl-1 red--text title">*</span></small>
                      <v-text-field
                        v-model="form.project_cost"
                        solo
                        flat
                        type="number"
                        dense
                        :disabled="roleId !== 3 || isFieldDisable"
                        placeholder="Project Cost"
                        background-color="#F0F2F7"
                        color="#223345"
                        class="mx-2 my-0 py-0"
                        @blur="setFormData"
                        :error-messages="errors['project_cost']"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                      <small>Proposed Date of Construction<span class="pl-1 red--text title">*</span></small>
                      <v-text-field
                        v-model="form.date_construction"
                        flat
                        solo
                        type="date"
                        dense
                        :disabled="roleId !== 3 || isFieldDisable"
                        placeholder="Proposed Date of Construction"
                        background-color="#F0F2F7"
                        color="#223345"
                        class="mx-2 my-0 py-0"
                        @blur="setFormData"
                        :error-messages="errors['date_construction']"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                      <small>Proposed Date of Completion<span class="pl-1 red--text title">*</span></small>
                      <v-text-field
                        v-model="form.date_completion"
                        solo
                        flat
                        type="date"
                        dense
                        :disabled="roleId !== 3 || isFieldDisable"
                        placeholder="Proposed Date of Completion"
                        background-color="#F0F2F7"
                        color="#223345"
                        class="mx-2 my-0 py-0"
                        @blur="setFormData"
                        :error-messages="errors['date_completion']"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                      <small>{{ form.client_type === 'owner' ? `Owner's Mobile Number` : `Representative Mobile Number` }}<span class="pl-1 red--text title">*</span></small>
                      <v-text-field
                        v-model="form.contact"
                        solo
                        flat
                        dense
                        :disabled="roleId !== 3 || isFieldDisable"
                        :placeholder="form.client_type === 'owner' ? `Owner's Mobile Number` : `Representative Mobile Number`"
                        label="###-###-####"
                        background-color="#F0F2F7"
                        color="#223345"
                        v-mask="'###-###-####'"
                        :masked="true"
                        prefix="+63"
                        class="mx-2 my-0 py-0"
                        @blur="setFormData"
                        :error-messages="errors['contact']"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs12 md5>
              <small>Pin Location:</small>
              <small>{{ form.lat }}<span v-show="form.lat && form.long">,</span> {{ form.long }}</small>
              <small v-show="!form.lat && !form.long" class="red--text">{{ errors['lat']}}, {{ errors['long'] }}</small>
              <shared-open-layer
                @customData="setCoordinates"
                :customForm="form"
                :isMapDisabled="roleId !== 3 || isFieldDisable"
              />
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12>
          <v-layout wrap>
            <v-flex xs12 md3>
              <small>Type of Ownership<span class="pl-1 red--text title">*</span></small>
              <v-radio-group
                v-model="form.ownership_type"
                row
                :disabled="roleId !== 3 || isFieldDisable"
                @change="setFormData"
                :error-messages="errors['ownership_type']"
              >
                <v-radio
                  v-for="(item, index) in typeItems"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                ></v-radio>
              </v-radio-group>
            </v-flex>
            <v-flex xs12 md9>
              <small>Proof of Ownership<span class="pl-1 red--text title">*</span></small>
              <v-layout wrap>
                <v-flex xs12 md3>
                  <v-radio-group
                    row
                    :disabled="roleId !== 3 || isFieldDisable"
                    class="ma-0 pa-0"
                    v-model="form.ownership_proof"
                    @change="setFormData"
                    :error-messages="errors['ownership_proof']">
                    <v-radio
                      label="Certified True Copy of Land Title"
                      value="Certified True Copy of Land Title"
                    ></v-radio>
                  </v-radio-group>
                </v-flex>
                <v-flex xs12 md3>
                  <v-radio-group
                    row
                    :disabled="roleId !== 3 || isFieldDisable"
                    class="ma-0 pa-0"
                    v-model="form.ownership_proof"
                    :error-messages="errors['ownership_proof']"
                    @change="setFormData">
                    <v-radio
                      label="Notarized Deed of Absolute Sale"
                      value="Notarized Deed of Absolute Sale"
                    ></v-radio>
                  </v-radio-group>
                </v-flex>
                <v-flex xs12 md3>
                  <v-layout wrap justify-center align-center>
                    <v-flex xs12>
                      <v-radio-group
                        row
                        :disabled="roleId !== 3 || isFieldDisable"
                        class="ma-0 pa-0"
                        v-model="form.ownership_proof"
                        @change="setFormData"
                       :error-messages="errors['ownership_proof']">
                        <v-radio
                          label="Contract of Lease"
                          value="Contract of Lease"
                        ></v-radio>
                      </v-radio-group>
                    </v-flex>
                    <v-flex xs10>
                      <small
                        v-show="form.ownership_proof === 'Contract of Lease'">Is this inside Mall Area?</small>
                      <v-radio-group
                        row
                        :disabled="roleId !== 3 || isFieldDisable"
                        class="ma-0 pa-0"
                        v-model="form.ownership_proof_type"
                        v-show="form.ownership_proof === 'Contract of Lease'"
                        @change="setFormData"
                       :error-messages="errors['ownership_proof']">
                        <v-radio
                          label="Yes"
                          value="Yes"
                        ></v-radio>
                        <v-radio
                          label="No"
                          value="No"
                        ></v-radio>
                      </v-radio-group>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs12 md3>
                  <v-radio-group
                    row
                    :disabled="roleId !== 3 || isFieldDisable"
                    class="ma-0 pa-0"
                    v-model="form.ownership_proof"
                    :error-messages="errors['ownership_proof']"
                    @change="setFormData">
                    <v-radio
                      label="Contract of Sell"
                      value="Contract of Sell"
                    ></v-radio>
                  </v-radio-group>
                </v-flex>
                <v-flex xs12 md3>
                  <v-radio-group
                    row
                    :disabled="roleId !== 3 || isFieldDisable"
                    class="ma-0 pa-0"
                    v-model="form.ownership_proof"
                    :error-messages="errors['ownership_proof']"
                    @change="setFormData">
                    <v-radio
                      label="Notarized Authority to Construct"
                      value="Notarized Authority to Construct"
                    ></v-radio>
                  </v-radio-group>
                </v-flex>
                <v-flex xs12 md3>
                  <v-radio-group
                    row
                    :disabled="roleId !== 3 || isFieldDisable"
                    class="ma-0 pa-0"
                    v-model="form.ownership_proof"
                    :error-messages="errors['ownership_proof']"
                    @change="setFormData">
                    <v-radio
                      label="Community Association"
                      value="Community Association"
                    ></v-radio>
                  </v-radio-group>
                </v-flex>
                <v-flex xs12 md3>
                  <v-layout wrap justify-center align-center>
                    <v-flex xs12>
                      <v-radio-group
                        row
                        :disabled="roleId !== 3 || isFieldDisable"
                        class="ma-0 pa-0"
                        v-model="form.ownership_proof"
                        @change="setFormData"
                        :error-messages="errors['ownership_proof']">
                        <v-radio
                          label="City Housing Clearance"
                          value="City Housing Clearance"
                        ></v-radio>
                      </v-radio-group>
                    </v-flex>
                    <v-flex xs10>
                      <v-radio-group
                        row
                        :disabled="roleId !== 3 || isFieldDisable"
                        class="ma-0 pa-0"
                        v-model="form.ownership_proof_type"
                        v-show="form.ownership_proof === 'City Housing Clearance'"
                        @change="setFormData">
                        <v-radio
                          label="City Owned"
                          value="City Owned"
                        ></v-radio>
                        <v-radio
                          label="NHA"
                          value="NHA"
                        ></v-radio>
                      </v-radio-group>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs12 md3>
                  <v-radio-group
                    row
                    :disabled="roleId !== 3 || isFieldDisable"
                    class="ma-0 pa-0"
                    v-model="form.ownership_proof"
                    :error-messages="errors['ownership_proof']"
                    @change="setFormData">
                    <v-radio
                      label="Ancestral Domain"
                      value="Ancestral Domain"
                    ></v-radio>
                  </v-radio-group>
                </v-flex>
                <v-flex xs12 md3>
                  <v-radio-group
                    row
                    :disabled="roleId !== 3 || isFieldDisable"
                    class="ma-0 pa-0"
                    v-model="form.ownership_proof"
                    :error-messages="errors['ownership_proof']"
                    @change="setFormData">
                    <v-radio
                      label="Certificate of Lot purchase (for mausoleum only)"
                      value="Certificate of Lot purchase (for mausoleum only)"
                    ></v-radio>
                  </v-radio-group>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs12>
              <v-layout wrap justify-center align-top>
                <v-flex xs12 sm12 md12 lg6>
                  <v-layout wrap justify-center align-top>
                    <v-flex xs12 sm11>
                      <small class="font-weight-bold">Designing Engineer/Architect Information</small>
                        <v-card
                          color="#F2F4FA"
                          outlined
                          class="pa-2 mx-2"
                          style="border: 1px solid #E5E4E4;"
                        >
                          <v-layout wrap class="ma-1">
                          <v-flex xs12>
                            <small>Profession<span class="pl-1 red--text title">*</span></small>
                            <v-radio-group
                              v-model="form.profession"
                              row
                              :disabled="roleId !== 3 || isFieldDisable"
                              @blur="setFormData"
                              class="my-0 py-2"
                              :error-messages="errors['profession']"
                            >
                              <v-radio
                                label="Architect"
                                value="Architect"
                              ></v-radio>
                              <v-radio
                                label="Civil Engineer"
                                value="Civil Engineer"
                              ></v-radio>
                            </v-radio-group>
                          </v-flex>
                            <v-flex xs12>
                              <v-layout wrap align-top>
                                <v-flex xs12 sm6 md3>
                                 <small>First Name<span class="pl-1 red--text title">*</span></small>
                                  <v-text-field
                                    v-model="form.prof_fname"
                                    solo
                                    flat
                                    dense
                                    :disabled="roleId !== 3 || isFieldDisable"
                                    placeholder="First Name"
                                    background-color="white"
                                    color="#223345"
                                    class="mx-2 my-0 py-0"
                                    @blur="setFormData"
                                    :error-messages="errors['prof_fname']"
                                  ></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md3>
                                 <small>Middle Name<span class="pl-1 title"></span></small>
                                  <v-text-field
                                    v-model="form.prof_mname"
                                    solo
                                    flat
                                    dense
                                    :disabled="roleId !== 3 || isFieldDisable"
                                    placeholder="Middle Name"
                                    background-color="white"
                                    color="#223345"
                                    class="mx-2 my-0 py-0"
                                    @blur="setFormData"
                                    :error-messages="errors['prof_mname']"
                                  ></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                 <small>Last Name<span class="pl-1 red--text title">*</span></small>
                                  <v-text-field
                                    v-model="form.prof_lname"
                                    solo
                                    flat
                                    dense
                                    :disabled="roleId !== 3 || isFieldDisable"
                                    placeholder="Last Name"
                                    background-color="white"
                                    color="#223345"
                                    class="mx-2 my-0 py-0"
                                    @blur="setFormData"
                                    :error-messages="errors['prof_lname']"
                                  ></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md2>
                                 <small>Suffix<span class="pl-1 title"></span></small>
                                 <v-autocomplete
                                    v-model="form.prof_suffix"
                                    :items="suffixes"
                                    solo
                                    flat
                                    dense
                                    :disabled="roleId !== 3 || isFieldDisable"
                                    background-color="white"
                                    color="#223345"
                                    placeholder="Select Suffix"
                                    return-string
                                    class="mx-2"
                                    required
                                    @change="setFormData"
                                    :error-messages="errors['prof_suffix']">
                                  </v-autocomplete>
                                </v-flex>
                                <v-flex xs12 sm12 md6>
                                  <small>Address<span class="pl-1 red--text title">*</span></small>
                                  <v-text-field
                                    v-model="form.prof_address"
                                    solo
                                    flat
                                    dense
                                    :disabled="roleId !== 3 || isFieldDisable"
                                    background-color="white"
                                    color="#223345"
                                    class="mx-2 my-0 py-0"
                                    @blur="setFormData"
                                    :error-messages="errors['prof_address']"
                                  ></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm12 md6>
                                  <small>Mobile Number<span class="pl-1 red--text title">*</span></small>
                                  <v-text-field
                                    v-model="form.prof_contact"
                                    solo
                                    flat
                                    dense
                                    :disabled="roleId !== 3 || isFieldDisable"
                                    placeholder="###-###-####"
                                    background-color="white"
                                    color="#223345"
                                    v-mask="'###-###-####'"
                                    :masked="true"
                                    prefix="+63"
                                    class="mx-2 my-0 py-0"
                                    @blur="setFormData"
                                    :error-messages="errors['prof_contact']"
                                  ></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm12 md6>
                                  <small>PRC N0.<span class="pl-1 red--text title">*</span></small>
                                  <v-text-field
                                    v-model="form.prc_no"
                                    solo
                                    flat
                                    dense
                                    :disabled="roleId !== 3 || isFieldDisable"
                                    type="number"
                                    background-color="white"
                                    color="#223345"
                                    class="mx-2 my-0 py-0"
                                    @blur="setFormData"
                                    :error-messages="errors['prc_no']"
                                  ></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm12 md6>
                                  <small>Validity<span class="pl-1 red--text title">*</span></small>
                                  <v-text-field
                                    v-model="form.validity"
                                    solo
                                    flat
                                    dense
                                    :disabled="roleId !== 3 || isFieldDisable"
                                    type="date"
                                    background-color="white"
                                    color="#223345"
                                    class="mx-2 my-0 py-0"
                                    @blur="setFormData"
                                    :error-messages="errors['validity']"
                                  ></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm12 md6>
                                  <small>PTR N0.<span class="pl-1 red--text title">*</span></small>
                                  <v-text-field
                                    v-model="form.ptr_no"
                                    solo
                                    flat
                                    dense
                                    :disabled="roleId !== 3 || isFieldDisable"
                                    background-color="white"
                                    color="#223345"
                                    class="mx-2 my-0 py-0"
                                    @blur="setFormData"
                                    :error-messages="errors['ptr_no']"
                                  ></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm12 md6>
                                  <small>Date Issued<span class="pl-1 red--text title">*</span></small>
                                  <v-text-field
                                    v-model="form.date_issued"
                                    solo
                                    flat
                                    dense
                                    :disabled="roleId !== 3 || isFieldDisable"
                                    type="date"
                                    background-color="white"
                                    color="#223345"
                                    class="mx-2 my-0 py-0"
                                    @blur="setFormData"
                                    :error-messages="errors['date_issued']"
                                  ></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm12 md6>
                                  <small>Place Issued<span class="pl-1 red--text title">*</span></small>
                                  <v-text-field
                                    v-model="form.place_issued"
                                    solo
                                    flat
                                    dense
                                    :disabled="roleId !== 3 || isFieldDisable"
                                    background-color="white"
                                    color="#223345"
                                    class="mx-2 my-0 py-0"
                                    @blur="setFormData"
                                    :error-messages="errors['place_issued']"
                                  ></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm12 md6>
                                  <small>Tin<span class="pl-1 red--text title">*</span></small>
                                  <v-text-field
                                    v-model="form.tin"
                                    solo
                                    flat
                                    dense
                                    :disabled="roleId !== 3 || isFieldDisable"
                                    placeholder="####-###-###-###"
                                    v-mask="'####-###-###-###'"
                                    :masked="true"
                                    background-color="white"
                                    color="#223345"
                                    class="mx-2 my-0 py-0"
                                    @blur="setFormData"
                                    :error-messages="errors['tin']"
                                  ></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                  <small v-show="!isViewFile">PRC ID and PTR (recent) with 3 signature specimen</small>
                                  <shared-file-upload
                                    :isRevision="(roleId !== 3 || isFieldDisable) && !isRevisedViewFile"
                                    :loading="prcLoading"
                                    :isAdmin="roleId !== 3 || isFieldDisable"
                                    :hasRemarks="form.remarks ? true : false"
                                    theme="list"
                                    title="PRC ID and PTR (recent) with 3 signature specimen"
                                    :file_name="form.file_upload"
                                    :errors="errors['file_upload']"
                                    :viewFile="isViewFile"
                                    @browse="isViewFile = false"
                                    @bulkFileData="setFileData"
                                    @comment="doComment({ id: form.attachment.id })"
                                    @revComment="doRevComment({ id: form.attachment })"
                                    @removeData="removeData"
                                    @setcomment="setComment(form.remarks, { id: form.attachment })"
                                    @setRevComment="setRevComment(form.revised_remarks, { id: form.attachment })"
                                    maxSize="20MB"
                                    :errorText="{
                                      type: 'Invalid file type. Only pdf Allowed',
                                      size: 'Files should not exceed 20MB in size',
                                    }"
                                    helpText="Browse pdf file (max of 20MB)"
                                    @browseRevision="browseRevision"
                                    :isChangeFile="(!form.remarks && isResubmit) || isChangeFile ? true : false"
                                  />
                                </v-flex>
                                <v-flex xs12
                                  v-show="form.isPrcRevision || isPrcRevision">
                                  <small v-show="!isRevisedViewFile">REVISED: PRC ID and PTR (recent) with 3 signature specimen</small>
                                  <shared-file-upload
                                    :hasRemove="roleId !== 3 ? true : false"
                                    :isRevision="true || isFieldDisable"
                                    :loading="prcRevisedLoading"
                                    :isAdmin="roleId !== 3 || isFieldDisable"
                                    :hasRemarks="form.revised_remarks ? true : false"
                                    theme="list"
                                    title="REVISED: PRC ID and PTR (recent) with 3 signature specimen"
                                    :file_name="form.revised_file_upload"
                                    :errors="errors['revised_file_upload']"
                                    :viewFile="isRevisedViewFile"
                                    @bulkFileData="setFileData"
                                    @revComment="doRevComment({ id: form.revised_attachment_id })"
                                    @removeData="removeData"
                                    @setRevComment="setRevComment(form.revised_remarks, { id: form.revised_attachment_id })"
                                    maxSize="20MB"
                                    :errorText="{
                                      type: 'Invalid file type. Only pdf Allowed',
                                      size: 'Files should not exceed 20MB in size',
                                    }"
                                    helpText="Browse pdf file (max of 20MB)"
                                    @browseRevision="isRevisedViewFile = false"
                                    @remove="removeFile('prc', { name: 'REVISED: PRC ID and PTR (recent) with 3 signature specimen'})"
                                    :isChangeFile="form.revised_remarks && isChangeFile? true : false"
                                  />
                                </v-flex>
                              </v-layout>
                            </v-flex>
                          </v-layout>
                        </v-card>
                    </v-flex>
                  </v-layout>
                  <v-layout wrap justify-center align-top>
                    <v-flex xs12 sm11>
                      <small class="font-weight-bold">Building Plan<span class="pl-1 red--text title">*</span></small>
                      <v-card
                        color="#F2F4FA"
                        outlined
                        style="border: 1px solid #E5E4E4;"
                        class="pa-2 mx-2"
                      >
                        <v-layout wrap class="ma-1">
                          <v-flex xs12
                            v-for="(item, index) in buildingArray"
                            :key="index"
                            v-show="isFileRequired(item.required, setFileItem[item.require])">

                            <small v-show="!viewFiles[item.view]">{{ item.text }}</small>
                            <shared-file-upload
                              :hasRemove="textIncludes('REVISED', item.text) && roleId !== 3 ? true : false"
                              :isRevision="!textIncludes('REVISED', item.text) ? (roleId !== 3 || (isFieldDisable) && !hasRevisedFileUpload(buildingArray, item)) : true"
                              :loading="setFileItem[item.load]"
                              :isAdmin="roleId !== 3 || isFieldDisable"
                              :hasRemarks="setFileItem[item.note] ? true : false"
                              theme="list"
                              :title="item.text"
                              :file_name="setFileItem[item.key]"
                              :errors="errors[item.key]"
                              :viewFile="viewFiles[item.view]"
                              @browse="browseBulkFile(item)"
                              @bulkFileData="setFileData"
                              @removeData="removeData"
                              @comment="doComment(getPerFile(item.text))"
                              @setcomment="setComment(setFileItem[item.note], getPerFile(item.text))"
                              @revComment="doRevComment(getPerFile(item.text))"
                              @setRevComment="setRevComment(setFileItem[item.note], getPerFile(item.text))"
                              maxSize="20MB"
                              :errorText="{
                                type: 'Invalid file type. Only pdf Allowed',
                                size: 'Files should not exceed 20MB in size',
                              }"
                              helpText="Browse pdf file (max of 20MB)"
                              @browseRevision="browseBulkRevision('bldg', getPerFile(item.text))"
                              @remove="removeFile('bulk', getPerFile(item.text))"
                              :isChangeFile="(!setFileItem[item.note] && isResubmit) || isChangeFile ? true : false"
                            />
                          </v-flex>
                        </v-layout>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs12 sm12 md12 lg6>
                  <v-layout wrap justify-center align-top>
                    <v-flex xs12 sm11>
                      <small class="font-weight-bold">Proof of Ownership Validation</small>
                      <v-card
                        color="#F2F4FA"
                        outlined
                        style="border: 1px solid #E5E4E4;"
                        class="pa-2 mx-2"
                      >
                        <v-layout wrap class="ma-1">
                          <v-flex xs12>
                            <small>TCT No.<span class="pl-1 red--text title">*</span></small>
                            <v-text-field
                              v-model="form.tct_no"
                              solo
                              flat
                              dense
                              :disabled="roleId !== 3 || isFieldDisable"
                              placeholder="TCT No."
                              background-color="white"
                              color="#223345" 
                              class="mx-2 my-0 py-0"
                              @blur="setFormData"
                              :error-messages="errors['tct_no']"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs12
                            v-for="(item, index) in sortedProofArray"
                            :key="index"
                            v-show="isFileRequired(item.required, setFileItem[item.require])">
                            <small v-show="!viewFiles[item.view]">{{ item.text }}</small>
                            <shared-file-upload
                              :hasRemove="textIncludes('REVISED', item.text) && roleId !== 3 ? true : false"
                              :isRevision="!textIncludes('REVISED', item.text) ? ((roleId !== 3 || isFieldDisable) && !hasRevisedFileUpload(sortedProofArray, item)) : true"
                              :loading="files[item.load]"
                              :isAdmin="roleId !== 3 || isFieldDisable"
                              :hasRemarks="setFileItem[item.note] ? true : false"
                              theme="list"
                              :title="item.text"
                              :file_name="files[item.key]"
                              :errors="errors[item.key]"
                              :viewFile="viewFiles[item.view]"
                              @browse="browseBulkFile(item)"
                              @bulkFileData="setFileData"
                              @removeData="removeData"
                              @comment="doComment(getPerFile(item.text))"
                              @setcomment="setComment(setFileItem[item.note], getPerFile(item.text))"
                              @revComment="doRevComment(getPerFile(item.text))"
                              @setRevComment="setRevComment(setFileItem[item.note], getPerFile(item.text))"
                              maxSize="20MB"
                              :errorText="{
                                type: 'Invalid file type. Only pdf Allowed',
                                size: 'Files should not exceed 20MB in size',
                              }"
                              helpText="Browse pdf file (max of 20MB)"
                              @browseRevision="browseBulkRevision('proof', getPerFile(item.text))"
                              @remove="removeFile('bulk', getPerFile(item.text))"
                              :isChangeFile="(!setFileItem[item.note] && isResubmit) || isChangeFile ? true : false"
                            />
                          </v-flex>
                        </v-layout>
                      </v-card>
                    </v-flex>
                  </v-layout>
                <!--   <v-layout wrap justify-center align-top>
                    <v-flex xs12 sm11>
                      <small class="font-weight-bold">Applicant/Authorized Representative Validation<span class="pl-1 red--text title">*</span></small>
                      <v-card
                        color="#F2F4FA"
                        outlined
                        style="border: 1px solid #E5E4E4;"
                        class="pa-2 mx-2"
                      >
                        <v-layout wrap class="ma-1">
                          <v-flex xs12
                            v-for="(item, index) in sorted_auth_items"
                            :key="index">
                            <small>{{ item.text }}</small>
                            <shared-file-upload
                              :loading="setFileItem[item.load]"
                              :isAdmin="roleId !== 3 || isFieldDisable"
                              :hasRemarks="setFileItem[item.note] ? true : false"
                              theme="list"
                              :title="item.text"
                              :file_name="files[item.key]"
                              :errors="errors[item.key]"
                              :viewFile="viewFiles[item.view]"
                              @browse="browseBulkFile(item)"
                              @bulkFileData="setFileData"
                              @removeData="removeData"
                              @comment="doComment(getPerFile(item.text))"
                              @setcomment="setComment(setFileItem[item.note], getPerFile(item.text))"
                              :isChangeFile="setFileItem[item.note] && isChangeFile ? true : false"
                            />
                          </v-flex>
                        </v-layout>
                      </v-card>
                    </v-flex>
                  </v-layout> -->
                  <v-layout wrap justify-center align-top>
                    <v-flex xs12 sm11>
                      <small class="font-weight-bold">Type of Ownership Validation<span class="pl-1 red--text title">*</span>
                      </small>
                      <v-card
                        color="#F2F4FA"
                        outlined
                        style="border: 1px solid #E5E4E4;"
                        class="pa-2 mx-2"
                      >
                        <v-layout wrap class="ma-1">
                          <v-flex xs12
                            v-for="(item, index) in sortedCompanyArray"
                            :key="index"
                            v-show="isFileRequired(item.required, setFileItem[item.require])">
                            <small v-show="!viewFiles[item.view]">{{ item.text }}</small>
                            <shared-file-upload
                              :hasRemove="textIncludes('REVISED', item.text) && roleId !== 3 ? true : false"
                              :isRevision="!textIncludes('REVISED', item.text) ? ((roleId !== 3 || isFieldDisable) && !hasRevisedFileUpload(sortedCompanyArray, item)) : true"
                              :loading="files[item.load]"
                              :isAdmin="roleId !== 3 || isFieldDisable"
                              :hasRemarks="setFileItem[item.note] ? true : false"
                              theme="list"
                              :title="item.text"
                              :file_name="files[item.key]"
                              :errors="errors[item.key]"
                              :viewFile="viewFiles[item.view]"
                              @browse="browseBulkFile(item)"
                              @bulkFileData="setFileData"
                              @removeData="removeData"
                              @comment="doComment(getPerFile(item.text))"
                              @setcomment="setComment(setFileItem[item.note], getPerFile(item.text))"
                              @revComment="doRevComment(getPerFile(item.text))"
                              @setRevComment="setRevComment(setFileItem[item.note], getPerFile(item.text))"
                              maxSize="20MB"
                              :errorText="{
                                type: 'Invalid file type. Only pdf Allowed',
                                size: 'Files should not exceed 20MB in size',
                              }"
                              helpText="Browse pdf file (max of 20MB)"
                              @browseRevision="browseBulkRevision('company', getPerFile(item.text))"
                              @remove="removeFile('bulk', getPerFile(item.text))"
                              :isChangeFile="(!setFileItem[item.note] && isResubmit) || isChangeFile ? true : false"
                            />
                          </v-flex>
                        </v-layout>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12
          v-show="isApplicant">
          <v-card-actions>
            <v-spacer />
            <v-btn
              large
              :disabled="isBtnDisabled || submitLoading"
              :loading="submitLoading"
              :width="mobile ? '' : '110'"
              class="primary-bg-color white--text text-right"
              @click="submit"
            >
              Submit
            </v-btn>
          </v-card-actions>
        </v-flex>
        <v-flex xs12
          v-show="roleId !== 3 && routeName !== 'evaluation'">
          <v-card-actions>
            <v-spacer />
            <v-btn
              large
              :disabled="isApproved"
              class="primary-bg-color white--text text-right"
              @click="approval('Approved')"
            >
              Approved
            </v-btn>
            <v-btn
              large
              :disabled="isApproved"
              color="amber darken-1"
              class="white--text text-right"
              @click="approval('Subject for Resubmission')"
            >
              Subject for Resubmission
            </v-btn>
          </v-card-actions>
        </v-flex>
      </v-layout>

      <shared-float-btn
        v-show="offsetTop > 1"
        @scrollPage="getTopPage()"
        icon="mdi-chevron-up"
        class="floating-btn mb-2"
      />

      <shared-float-btn
        v-show="offsetTop < 1"
        @scrollPage="getBottomPage()"
        icon="mdi-chevron-down"
        class="floating-btn mb-2"
      />
      <v-dialog
        v-model="remarkDialog"
        persistent
        max-width="500"
      >
        <v-card class="pb-3 px-2">
          <v-card-actions>
            <v-card-title class="text-h5">
              {{ preevalTitle }}
            </v-card-title>
            <v-spacer />
            <v-btn
              v-show="roleId === 3"
              class="primary-text-color"
              text
              fab
              @click="cancelRemark"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-actions>
            <v-textarea
              solo
              flat
              dense
              :disabled="roleId === 3"
              background-color="#F0F2F7"
              color="#223345"
              class="mx-2 my-0 py-0"
              v-model="remarks"
            ></v-textarea>
          <v-card-actions
            v-show="roleId !== 3">
            <v-spacer />
            <v-btn
              text
              @click="cancelRemark"
            >
              Cancel
            </v-btn>
            <v-btn
              class="primary-bg-color white--text"
              text
              @click="submitRemark"
            >
              Submit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <shared-snackbar
        :snack="snackbar"
        :color="color"
        :message="snackMsg"
        @close="snackbar = false"
      />

      <shared-confirm-dialog
        :dialog="confirmDialog"
        @proceed="isApplicant ? proceed() : doApproval()"
        @close="confirmDialog = false"
        :message="confirmMessage"
        :hasClose="isApplicant ? false : true"
        :isConfirm="isApplicant ? false : true"
        :color="colorStatus"
        :hasConfirm="hasConfirm"
        :icon="icon"
      />

    </v-container>
  </client-only>
</template>
<script>
  import Global from '~/plugins/mixins/global'
  import constants from '~/plugins/mixins/constants/index'
  import preevalConstants from '~/plugins/mixins/constants/preevaluation'
  import preevalMixins from '~/plugins/mixins/applicant/preeval'
  import { includes, findIndex, isUndefined, omit, forEach, concat, difference, uniq, isNull, isEmpty, isObject, trim } from 'lodash'
  import { mapActions, mapGetters, mapMutations } from 'vuex'
  export default {
    mixins: [
      constants,
      Global,
      preevalConstants,
      preevalMixins
    ],
    props: {
      setData: Object,
      isApplicant: {
        type: Boolean,
        default: false
      },
      isResubmit: {
        type: Boolean,
        default: false
      },
      preLoading: {
        type: Boolean,
        default: false
      },
      isApply: {
        type: Boolean,
        default: false
      },
      isFieldDisable: {
        type: Boolean,
        default: false
      },
      hasRevisedFile: {
        type: Boolean,
        default: false
      },
      isChangeFile: {
        type: Boolean,
        default: true
      }

    },
    data () {
      return {
        form: {
          ownership_proof: '',
          proof_files: [],
          zipcode: 8000,
          city: 'CITY OF DAVAO',
          country: 'PHILIPPINES',
          province: 'DAVAO DEL SUR',
          ownership_type: '',
          client_type: ''
        },
        errors: {},
        barangays: [],
        radios: '',
        sorted_proof_items: [],
        sorted_auth_items: [],
        colorStatus: '',
        uploadFiles: [],
        offsetTop: 0,
        isViewFile: false,
        sorted_company_items: [],
        submitLoading: false,
        remarkDialog: false,
        remarks: '',
        attachment_id: null,
        snackbar: false,
        color: '',
        snackMsg: '',
        set_prc_item: [],
        isApproved: true,
        confirmDialog: false,
        confirmMessage: '',
        approval_status: '',
        hasConfirm: false,
        viewFiles: [],
        preID: '',
        prcLoading: false,
        prcRevisedLoading: false,
        isUploadSuccess: false,
        isRevisedViewFile: false,
        isPrcRevision: false,
        preevalTitle: '',
        sortedCompanyArray: [],
        sortedProofArray: [],
        icon: ''
      }
    },
    watch: {
      form: {
        handler (val) {
          if (val.ownership_type === 'Community Association') {
            val.ownership_proof = 'Community Association'
          }
          this.setFormData()
        },
        deep: true
      },
      setData: {
        handler (val) {
          this.setFormData()
          this.setAuthData()
          this.setDistrict()
          this.setUploads(this.setData)
        }
      }
    },
    computed: {
      ...mapGetters('user', ['user', 'files', 'prc_file', 'app_no', 'contact']),
      clientType () {
        if (this.setData) {
          return this.setData.client_type
        } else {
          return 'owner'
        }
      },
      hasAllUploads () {
        let mergeItems = concat(this.buildingItems, this.sorted_proof_items, this.sorted_company_items, this.set_prc_item)
        let mappedItems = mergeItems.map(item => item.text)
        let mapLoadItems = mergeItems.map(item => item.text && !this.setFileItem[item.load])
        const mergeFiles = concat(this.setPrcFileItem, this.files)
        let mappedFiles = mergeFiles.map(item => item.name)
        let diffItems = difference(mappedItems, mappedFiles)
        if (Boolean(diffItems.length < 1)) {
          if (includes(uniq(mapLoadItems), 'true')) {
            return true
          } else {
            return Boolean(diffItems.length < 1)
          }
        }
      },
      setFileItem: {
        get: function () {
          return this.files
        },
        // setter
        set: function (value) {
          return this.SET_FILES(value)
        }
      },
      setPrcFileItem: {
        get: function () {
          return this.prc_file
        },
        // setter
        set: function (value) {
          return this.SET_PRC_FILES(value)
        }
      },
      isBtnDisabled () {
        let name = this.$nuxt._route.name
        if (this.isApply) {
          return !this.hasAllUploads
        } else {
          if (name === 'index-application-unified-building-checklist-preevaluation') {
            return true
          } else {
            return false
          }
        }
      }
    },
    methods: {
      ...mapActions('user', ['POST_API']),
      ...mapMutations('user', ['SET_FILES', 'SET_PRC_FILES']),
      approval (val) {
        this.approval_status = val
        this.confirmDialog = true
        if (val === 'Subject for Resubmission') {
          this.icon = 'mdi-message-text-clock-outline'
          this.colorStatus = '#EE7302'
        } else {
          this.icon = 'mdi-message-check-outline'
          this.colorStatus = '#4EA466'
        }
        this.confirmMessage = `Please confirm to send an sms to the Applicant No. ${this.app_no} regarding pre-evaluation status.`
        this.hasConfirm = true
      },
      doApproval () {
        this.confirmDialog = false
        let payload = {
          api: 'admin/approve/application',
          client_id: this.clientId,
          application_no: this.app_no,
          status: this.approval_status,
          type: 'pre',
          contact: this.contact
        }
        this.POST_API(payload).then(data => {
          if (data.data) {
            if (data.data.status) {
              this.confirmDialog = true
              this.hasConfirm = false
              this.confirmMessage = `An sms has been successfully sent to aplication no. ${data.data.status.application_no} with a ${data.data.status.status} status.`
            } else {
              this.confirmDialog = true
              this.hasConfirm = false
              this.colorStatus = 'error'
              this.confirmMessage = 'Please refer to your systems administrator.'
            }
          }
        }).catch(err => {
          this.submitLoading = false
          this.getTopPage()
          if (err) {
            console.log('err:', err)
            this.confirmDialog = true
            this.hasConfirm = false
            this.colorStatus = 'error'
            this.confirmMessage = 'Please refer to your systems administrator.'
          }
        })
      },
      setFileData (item) {
        if (!this.textIncludes('REVISED', item.name)) {
          this.isUploadSuccess = false
          this.setLoading(this.isUploadSuccess, item)
          const inputs = new FormData()
          this.$set(inputs, 'api', 'attachment/upload')
          inputs.append('application_type', 'pre')
          inputs.append('client_id', this.clientId)
          inputs.append('application_id', this.isResubmit ? this.setData.application_id : this.preID)
          inputs.append('file_upload', item.file_upload)
          inputs.append('file_name', item.file_name)
          inputs.append('name', item.name)
          inputs.append('is_resubmit', this.isResubmit ? true : false)
          this.POST_API(inputs).then(data => {
            this.setViewFilePerUpload(data.data.attachment)
            this.setFileItem.push(data.data.attachment)
            this.SET_FILES(this.setFileItem)
            this.isUploadSuccess = true
            this.$emit('refetch')
          }).catch(err => {
            console.log('err:', err)
          }).finally(() => {
            this.$nextTick(() => {
              this.setLoading(this.isUploadSuccess, item)
            })
          })
        } else {
          this.isUploadSuccess = false
          this.setLoading(this.isUploadSuccess, item)
          const inputs = new FormData()
          this.$set(inputs, 'api', 'attachment/upload')
          inputs.append('application_type', 'pre')
          inputs.append('client_id', this.clientId)
          inputs.append('application_id', this.setData.application_id)
          inputs.append('file_upload', item.file_upload)
          inputs.append('file_name', item.file_name)
          inputs.append('name', item.name)
          inputs.append('is_resubmit', this.isResubmit ? true : false)
          this.POST_API(inputs).then(data => {
            this.setViewFilePerUpload(data.data.attachment)
            this.setFileItem.push(data.data.attachment)
            this.SET_FILES(this.setFileItem)
            this.isUploadSuccess = true
            this.$emit('refetch')
          }).catch(err => {
            console.log('err:', err)
          }).finally(() => {
            this.$nextTick(() => {
              this.setLoading(this.isUploadSuccess, item)
            })
          })
        }
      },
      setViewFilePerUpload (item) {
        let mergeItems = concat(this.buildingArray, this.sortedProofArray, this.sortedCompanyArray, this.set_prc_item)
        let findItem = mergeItems.find(a => a.text === item.name)
        if (!isUndefined(findItem)) {
          if (findItem.text === 'PRC ID and PTR (recent) with 3 signature specimen') {
            this.isViewFile = true
          } else {
            let listIndex = mergeItems.indexOf(findItem)
            if (listIndex !== -1) {
              mergeItems[listIndex].required  = true
            }
            this.$set(this.setFileItem, `${findItem.key}`, this.setFile(item.file_upload))
            this.$set(this.setFileItem, findItem.require, true)
            this.$set(this.viewFiles, findItem.view, true)
          }
        } else {
          if (item.name === 'REVISED: PRC ID and PTR (recent) with 3 signature specimen') {
            this.isRevisedViewFile = true
          }
          if (item.name === 'PRC ID and PTR (recent) with 3 signature specimen') {
            this.isViewFile = true
          }
        }
      },
      isViewBulkFile (item) {
        if (this.files[item.key]) {
          return true
        } else {
          return false
        }
      },
      removeFile (type, item) {
        // remove file already saved to db
        if (this.setData.attachments) {
          const fileItem = this.setData.attachments.find(a => String(trim(a.name)) === String(trim(item.name)))
          if (!isUndefined(fileItem)) {
            const fileIndex = this.setData.attachments.indexOf(fileItem)
            if (fileIndex !== -1) {
              let payload = {
                api: `attachment/delete/${fileItem.id}`
              }
              this.POST_API(payload).then(data => {
                if (type === 'prc') {
                  this.isRevisedViewFile = false
                }
                this.$delete(this.setData.attachments, fileIndex)
              }).catch(err => {
                console.log('err:', err)
              }).finally(() => {
                if (type === 'prc') {
                  this.isPrcRevision = false
                  this.form.isPrcRevision = false
                } else {
                  // remove uploaded revision file
                  let mergeItems = concat(this.buildingArray, this.proofArray, this.companyArray, this.set_prc_item)
                  let list = mergeItems.find(a => a.text === fileItem.name)
                  if (!isUndefined(list)) {
                    let listIndex = mergeItems.indexOf(list)
                    if (listIndex !== -1) {
                      mergeItems[listIndex].required  = false
                    }
                    this.$set(this.setFileItem, list.require, false)
                    this.$set(this.viewFiles, list.view, false)
                  }
                }
                this.$emit('refetch')
              })
            }
          }
        }
      },
      browseBulkFile(item) {
        this.$set(this.viewFiles, item.key, '')
        this.$set(this.viewFiles, item.view, !this.viewFiles[item.view])
        const fileItem = this.files.find(a => String(trim(a.name)) === String(trim(item.text)))
        if (!isUndefined(fileItem)) {
          const fileIndex = this.files.indexOf(fileItem)
          // if (fileIndex !== -1) {
          //   let payload = {
          //     api: `attachment/delete/${fileItem.id}`
          //   }
          //   this.POST_API(payload).then(data => {
          //     this.$delete(this.files, fileIndex)
          //   }).catch(err => {
          //     console.log('err:', err)
          //   }).finally(() => {
          //   })
          // }
        }
      },
      onScroll (e) {
        this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
      },
      proceed () {
        this.$router.push({ name: 'index-application-unified-building'})
      },
      getPerFile (text) {
        let item = this.files.find(item => item.name === text)
        if (!isUndefined(item)) {
          return item
        } else {
          return {}
        }
      },
      submit () {
        if (this.isResubmit) {
          this.errors = {}
          let sortItem = omit(this.form, ['project_cost', 'proof_files', 'files', 'id', 'attachment'])
          if (!isEmpty(sortItem)) {
            this.submitLoading = true
            let payload = {
              api: 'pre/update',
              ...sortItem,
              id: this.form.application_id,
              attachment_id: this.form.attachment.id
            }
            this.POST_API(payload).then(data => {
              // this.uploads(data, 'updated')
              this.$emit('refetch')
              this.confirmDialog = true
              this.hasConfirm = true
              this.colorStatus = 'success'
              this.confirmMessage = `Your data was updated successfully. Please wait for an SMS for your pre-evaluation.This will take a minimum of 3 days`
            }).catch(err => {
              this.submitLoading = false
              this.getTopPage()
              if (err) {
                this.errors = err.response.data.errors
              }
            }).finally(() => {
              this.submitLoading = false
            })
          }
        } else {
          this.submitLoading = true
          this.errors = {}
          let sortItem = omit(this.form, ['project_cost', 'proof_files', 'files', 'attachment'])
          let payload = {
            api: 'pre/create',
            client_id: this.user.client ? this.user.client.id : null,
            ...sortItem,
            district: this.form.district_id ? this.form.district_id.name : '',
            project_cost: Number(this.form.project_cost),
            barangay: this.form.barangay_name ? this.form.barangay_name.name : '',
            country: 'PHILIPPINES',
            province: 'DAVAO DEL SUR'
          }
          this.POST_API(payload).then(data => {
            // this.uploads(data, 'saved')
            this.$emit('refetch')
            this.confirmDialog = true
            this.hasConfirm = true
            this.colorStatus = 'success'
            this.confirmMessage = `Your data was saved successfully. Please wait for an SMS for your pre-evaluation.This will take a minimum of 3 days`
          }).catch(err => {
            this.submitLoading = false
            this.getTopPage()
            if (err) {
              this.errors = err.response.data.errors
            }
          }).finally(() => {
            this.submitLoading = false
          })
        }
      },
      submitRemark () {
        if (this.attachment_id) {
          let payload = {
            api: 'attachment/remarks',
            id: this.attachment_id,
            remarks: this.remarks,
            is_resubmit: false
          }
          this.POST_API(payload).then(data => {
            if (data.data.name === 'PRC ID and PTR (recent) with 3 signature specimen') {
              this.form.remarks = data.data.remarks
            } else if (data.data.name === 'REVISED: PRC ID and PTR (recent) with 3 signature specimen') {
              this.form.revised_remarks = data.data.remarks
            } else {
              let mergeItems = concat(this.buildingArray, this.sortedProofArray, this.sortedCompanyArray)
              let remarkedItem = mergeItems.find(a => a.text === data.data.name)
              if (!isUndefined(remarkedItem)) {
                if (data.data.remarks !== '') {
                  this.setFileItem[remarkedItem.note] = data.data.remarks
                } else {
                  this.setFileItem[remarkedItem.note] = null
                }
              }
            }
            this.$emit('refetch')
            this.remarkDialog = false
            this.snackbar = true
            this.color = 'success'
            if (this.preevalTitle === 'Findings') {
              this.snackMsg = 'Findings added Successfully'
            } else {
              this.snackMsg = 'Remarks added Successfully'
            }
            this.remarks = ''
          }).catch(err => {
            console.log('err:', err)
            // if (err) {
            //   this.errors = err.response.data.errors
            // }
          }).finally(() => {
             this.submitLoading = false
          })
        }
      },
      uploads (val, type) {
        // deprecated - this was used when we do bulk saving of files
        let vm = this
        let mergeItems = concat(this.buildingArray, this.proofArray, this.companyArray, this.set_prc_item)
        let mappedItems = mergeItems.map(item => item.text)
        const mergeFiles = concat(vm.prc_file, uniq(vm.files))
        let mappedFiles = mergeFiles.map(item => item.name)
        let diffItems = difference(mappedItems, mappedFiles)
        if (diffItems.length > 0) {
          forEach(diffItems, function(value) {
            let sortErr = mergeItems.find(item => String(item.text) === String(value))
            if (!isUndefined(sortErr)) {
              vm.$set(vm.errors, `${sortErr.key}`, [`${sortErr.text} file is required.`])
            }
          })
        } else {
          const mergeFiles = concat(vm.prc_file, uniq(vm.files))
          let allUploaded = mergeFiles.find(a => vm.setFileItem[a.note] === false)
          if (!isUndefined(allUploaded)) {
            this.submitLoading = true       
          } else {
            this.submitLoading = false
          }
          forEach(mergeFiles, function(value) {
            if (val.data.pre) {
              const inputs = new FormData()
                vm.$set(inputs, 'api', 'attachment/upload')
                inputs.append('application_type', 'pre')
                inputs.append('client_id', val.data.pre.client_id)
                inputs.append('application_id', val.data.pre.id)
                inputs.append('file_upload', value.file_upload)
                inputs.append('file_name', value.file_name)
                inputs.append('name', value.name)
                inputs.append('is_resubmit', vm.isResubmit ? true : false)
                vm.POST_API(inputs).then(data => {
                  setTimeout(() => {
                    vm.$emit('refetch')
                    vm.confirmDialog = true
                    vm.hasConfirm = true
                    vm.colorStatus = 'success'
                    vm.confirmMessage = `Your data was ${type} successfully. Please wait for an SMS for your pre-evaluation.This will take a minimum of 3 days`
                  }, Number(1000))
                }).catch(err => {
                  console.log('err:', err)
                  if (val.status === 200) {
                    setTimeout(() => {
                      vm.$emit('refetch')
                      vm.confirmDialog = true
                      vm.hasConfirm = true
                      vm.colorStatus = 'success'
                      vm.confirmMessage = `Your data was ${type} successfully. Please wait for an SMS for your pre-evaluation.This will take a minimum of 3 days`
                    }, Number(1000))
                  }
                  // if (err) {
                  //   vm.errors = err.response.data.errors
                  // }
                }).finally(() => {
                   vm.submitLoading = false
                })
            } else {
              vm.confirmDialog = true
              vm.hasConfirm = true
              vm.colorStatus = 'error'
              vm.confirmMessage = 'Please fill all required (*)  fields.'
            }
          })
        }
      },
      setCoordinates (payload) {
        this.$set(this.form, 'long', payload.lng)
        this.$set(this.form, 'lat', payload.lat)
      }
    },
    created () {
      this.$emit('refetch')
    },
    mounted () {
      this.$emit('refetch')
    }
  }
</script>
