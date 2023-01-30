<template>
<v-card :flat="flat" :class="cardClass ? cardClass : 'my-2 py-4'">
  <v-toolbar flat color="white"
    v-if="$vuetify.breakpoint.mdAndUp">
    <v-card-title>{{ cardTitle }}</v-card-title>
    <v-spacer v-show="cardTitle" />
    <v-text-field
      v-if="isSearch"
      :rounded="rounded"
      :filled="filled"
      :solo="solo"
      :dense="dense"
      :append-icon="mobile ? '' : 'mdi-magnify'"
      :label="label"
      class="my-3 px-3 pt-6 black--text"
      :hint="hint"
      clearable
      v-model="keyword"
      :placeholder="placeholder"
      clear-icon="mdi-close-circle"
      @click:clear="clear"
      @keyup.enter="EnterSearch"
      :color="color"
      :background-color="backgroundColor"
    ></v-text-field>
    <v-spacer v-show="!cardTitle" />
    <v-btn
      right
      :text="text"
      :large="large"
      class="text-none mr-1 mb-1 primary-bg-color"
      v-if="!isSwitched && isFilter"
      @click="$emit('open')">
      <span class="white--text">Filter</span>
      <v-icon right class="white--text">arrow_drop_up</v-icon>
    </v-btn>
    <v-btn
      right
      :text="text"
      :large="large"
      class="text-none mr-1 mb-1 primary-bg-color"
      v-if="isSwitched && isFilter"
      @click="$emit('closeFilter')"
      @click:stop="$emit('clear')">
      <span class="white--text">Reset</span>
      <v-icon right size="20" class="white--text">mdi-refresh</v-icon>
    </v-btn>
    <v-btn
      right
      :text="text"
      :large="large"
      v-if="isAdd && $vuetify.breakpoint.smAndUp"
      class="text-none mr-1 mb-1 primary-bg-color"
      :loading="loading"
      :disabled="isAddDisabled"
      @click="$emit('add')">
      <v-icon left class="white--text">{{ addTitleIcon }}</v-icon>
      <span :class="addBtnClass">{{ addTitle }}</span>
    </v-btn>
    <v-toolbar-items>
      <v-btn
        style="border: solid;"
        v-if="isStatus && $vuetify.breakpoint.smAndUp"
        :width="statusWidth"
        color="accent"
        :class="fontSize"
        class="text-none mr-1 mb-1"
        :loading="statusloading"
        :disabled="isStatusDisabled"
        @click="$emit('clickStatus')">
        <span :class="addBtnClass">{{ status }}</span>
        <template v-slot:loader>
          <span>updating...</span>
        </template>
      </v-btn>
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn
            v-on="on"
            v-if="isStatus && $vuetify.breakpoint.xsOnly"
            :width="statusWidth"
            color="accent"
            :class="fontSize"
            class="text-none mr-1 mb-1"
            :loading="statusloading"
            :disabled="isStatusDisabled"
            @click="$emit('clickStatus')">
            <v-icon medium dark>{{ statusIcon }}</v-icon>
          </v-btn>
        </template>
        <span>{{ status }}</span>
      </v-tooltip>
    </v-toolbar-items>
  </v-toolbar>
  <v-card-title dark class="pa-0 mb-3"
    v-else>
    <v-layout wrap justify-center align-center>
      <v-flex xs12>
        <v-card-title>{{ cardTitle }}</v-card-title>
      </v-flex>
      <v-flex xs12>
        <v-text-field
          :rounded="rounded"
          :filled="filled"
          :solo="solo"
          :dense="dense"
          v-if="isSearch"
          prepend-inner-icon="mdi-magnify"
          :label="label"
          class="mb-3 mt-11 px-3 black--text"
          :hint="hint"
          clearable
          v-model="keyword"
          :color="color"
          :background-color="backgroundColor"
          :placeholder="placeholder"
          @click:clear="clear"
          @keyup.enter="EnterSearch"
        ></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-card-actions v-if="breakPoints">
          <v-spacer />
          <!-- <export
            :link="link"
            @pdf="$emit('pdf')"
            @excel="$emit('excel')"
            @word="$emit('word')"
            :isExport="isExport"
            :isWord="isWord"
            :isExcel="isExcel"
            :isPdf="isPdf"
            :isDisabled="isDisabled"
            :classStyle="fontSize"/>
          <v-btn
            v-if="isExport"
            color="accent"
            :class="exportClass"
            class="text-none body-1 mb-1"
            @click="openExport">
            Export
          </v-btn>
          <v-btn
            v-if="isImport"
            color="accent"
            :class="importClass"
            class="text-none body-1 mb-1"
            @click="openImport">
            Import
          </v-btn> -->
          <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn
              dark
              right
              text
              v-on="on"
              v-if="isFilter"
              class="text-none mr-1 mb-1 primary-bg-color"
              :loading="loading"
              :disabled="isAddDisabled"
              @click.enter="!isSwitched && isFilter ? '' : $emit('reset')"
              @click:stop="!isSwitched && isFilter ? '' : $emit('clear')"
              @click="!isSwitched && isFilter ? $emit('open') : $emit('closeFilter')">
              <v-icon medium dark>{{ addFilterIcon }}</v-icon>
            </v-btn>
          </template>
          <span>{{ addFilterTitle }}</span>
        </v-tooltip>
          <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn
              dark
              right
              text
              v-on="on"
              v-if="isAdd"
              class="text-none mr-1 mb-1 primary-bg-color"
              :loading="loading"
              :disabled="isAddDisabled" 
              @click="$emit('add')">
              <v-icon medium dark>{{ addTitleIcon }}</v-icon>
            </v-btn>
          </template>
          <span>{{ addTitle }}</span>
        </v-tooltip>
        </v-card-actions>
      </v-flex>
    </v-layout>
  </v-card-title>
  <v-card-title
    class="mb-3" v-if="isSwitched === true">
    <v-layout wrap justify-center align-center
      class="ma-0 pa-0">
      <v-flex xs12> 
        <v-tabs
          v-model="tab"
          background-color="white"
          light
          icons-and-text
          fixed-tabs
          show-arrows
          class="py-0 my-0"
        >
          <NuxtLink
            v-for="(item, index) in filterItems" :key="index"
            class="text-decor-none pa-0 ma-0"
            :to="{ name: item.name, params: item.params }">
            <v-tab
              v-if="item.title && item.field"
              :class="getActive(getFilteredFields(item.field))"
              class="text-none ma-0 pa-0"
            >
              <v-layout wrap justify-center align-center
                class="mx-0 py-0">
                <v-avatar color="accent" class="mt-1 mx-0 px-0" size="40">
                  <v-icon color="white">{{ item.icon }}</v-icon>
                </v-avatar>
                <v-flex xs12 class="body-3 font-weight-regular">{{ item.title }}</v-flex>
              </v-layout>
            </v-tab>
          </NuxtLink>
        </v-tabs>
      </v-flex>

      <v-flex xs12>
        <v-card flat color="grey lighten-4" class="pt-2">
           <v-tabs-items v-model="tab">
            <v-tab-item
              v-for="(item, index) in filterItems" :key="index"
            >
              <v-card flat
                v-if="item.title === 'Date'">
                <filters-date />
              </v-card>
              <v-card flat
                v-if="item.title === 'Pre-Evaluation Status'">
                <filters-pre-status />
              </v-card>
              <v-card flat
                v-if="item.title === 'Issuance Status'">
                <filters-status />
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-flex>
    </v-layout>
  </v-card-title>

 <!--  <export-dialog
    :lecLink="lecLink"
    :lecLabLink="lecLabLink"
    :labLink="labLink"
    @doLecLab="$emit('exportLecLab')"
    @doLec="$emit('exportLec')"
    @doLab="$emit('exportLab')"
  />

  <import-dialog
    :lecLink="lecLink"
    :lecLabLink="lecLabLink"
    :labLink="labLink"
    @doLecLab="doLecLab"
    @doLec="doLec"
    @doLab="doLab"
  /> -->
</v-card>

</template>
<script>
import filterMixins from '~/plugins/mixins/filter'
import Global from '~/plugins/mixins/global'
import { mapGetters, mapMutations } from 'vuex'
export default {
  mixins: [
    Global,
    filterMixins
  ],
  props: {
    addTitle: {
      required: false,
      type: String
    },
    addTitleIcon: {
      required: false,
      type: String
    },
    addFilterIcon: {
      required: false,
      type: String
    },
    label: {
      required: false,
      type: String
    },
    hint: {
      required: false,
      type: String
    },
    isSwitched: {
      required: false,
      type: Boolean,
      default: () => {
        return false
      }
    },
    isSearch: {
      required: false,
      type: Boolean,
      default: () => {
        return false
      }
    },
    filterItems: {
      required: false,
      type: [Object, Array]
    },
    isFilter: {
      required: false,
      type: Boolean,
      default: () => {
        return false
      }
    },
    isAdd: {
      required: false,
      type: Boolean,
      default: () => {
        return false
      }
    },
    isExport: {
      required: false,
      type: Boolean,
      default: () => {
        return false
      }
    },
    btnEnrollTitle: {
      required: false,
      type: String
    },
    value: [String, Number, Array, Object, Boolean],
    loading: {
      required: false,
      type: Boolean,
      default: () => {
        return false
      }
    },
    link: {
      required: false,
      type: String
    },
    isDisabled: {
      required: false,
      type: Boolean,
      default: () => {
        return false
      }
    },
    isWord: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    isExcel: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    isPdf: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    importLink: {
      type: String
    },
    addBtnClass: {
      type: String,
      default: () => {
        return ''
      }
    },
    isAddDisabled: {
      required: false,
      type: Boolean,
      default: () => {
        return false
      }
    },
    isStatus: {
      required: false,
      type: Boolean,
      default: () => {
        return false
      }
    },
    statusloading: {
      required: false,
      type: Boolean,
      default: () => {
        return false
      }
    },
    isStatusDisabled: {
      required: false,
      type: Boolean,
      default: () => {
        return false
      }
    },
    status: {
      required: false,
      type: String
    },
    statusIcon: {
      required: false,
      type: String
    },
    btnEnrollIcon: {
      required: false,
      type: String
    },
    exportClass: {
      required: false,
      type: String
    },
    lecLink: {
      required: false,
      type: String
    },
    lecLabLink: {
      required: false,
      type: String
    },
    labLink: {
      required: false,
      type: String
    },
    isImport: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    importClass: {
      required: false,
      type: String
    },
    isAddDefault: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    placeholder: String,
    addFilterTitle: String,
    cardTitle: String,
    rounded: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    filled: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    solo: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    flat: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    text: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    large: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    dense: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    cardClass: String,
    color: String,
    backgroundColor: String
  },
  data () {
    return {
      tab: 0,
      keyword: ''
    }
  },
  computed: {
    ...mapGetters('user', ['user']),
    isDrawer: {
      get: function () {
        return this.drawer
      },
      // setter
      set: function (value) {
        return this.setDrawer(value)
      }
    },
    breakPoints () {
      if (this.isDrawer === true) {
        return this.$vuetify.breakpoint.smAndUp
      } else {
        return this.$vuetify.breakpoint
      }
    },
    fontSize () {
      if (this.$vuetify.breakpoint.smAndUp) return 'body-1'
      return 'caption'
    },
    filterWidth () {
      if (this.$vuetify.breakpoint.smAndUp) return '110px'
      return '90px'
    },
    addWidth () {
      if (!this.isAddDefault) {
        if (this.$vuetify.breakpoint.smAndUp) return '150px'
       return ''
      }
    },
    statusWidth () {
      if (this.$vuetify.breakpoint.smAndUp) return '170px'
      return ''
    }
  },
  methods: {
    ...mapMutations('user', ['setDrawer']),
    ...mapMutations('filters', ['SET_FILTER']),
    checkInput () {
      this.isInput = true
    },
    EnterSearch () {
      let payload = {
        search: this.keyword
      }
      this.SET_FILTER(payload)
    },
    clear () {
      this.keyword = ''
      let payload = {
        search: ''
      }
      this.SET_FILTER(payload)
      console.log('clear:', this.keyword)
    },
    // ...mapMutations('events', ['SET_EXPORT_DIALOG', 'SET_IMPORT_DIALOG']),
    // openExport () {
    //   this.SET_EXPORT_DIALOG(true)
    // },
    // openImport () {
    //   this.SET_IMPORT_DIALOG(true)
    // },
    // doLecLab (val) {
    //   this.$emit('importLecLab', val)
    // },
    // doLec (val) {
    //   this.$emit('importLec', val)
    // },
    // doLab (val) {
    //   this.$emit('importLab', val)
    // }
  }
}
</script>
