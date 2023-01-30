<template>
  <v-dialog
    :value="dialog"
    persistent
    :max-width="dialogWidth ? dialogWidth : '800'"
  >
    <v-card class="pb-3">
      <v-card tile flat class="py-1" :color="color">
      </v-card>
      <v-card-actions>
        <v-card-title>
          {{ title }}
        </v-card-title>
        <v-spacer />
        <v-btn
          v-if="hasClose"
          class="primary-text-color"
          text
          fab
          @click="close"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-actions>
        <v-data-table
        :headers="headers"
        :items="items"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        class="ml-3 my-1 font-weight-regular text-table-color"
        @page-count="pageCount = $event"
        :options.sync="options"
        :server-items-length="count"
        hide-default-footer
        :loading="loading"
        :single-select="isSingleSelect"
        loading-text="Loading... Please wait"
        :show-select="hasSelect ? hasSelect : false"
        v-model="selected"
      >
      <!-- <template v-slot:header.data-table-select="{ item }">
        <v-checkbox
          v-model="selected"
          label="Select"
        ></v-checkbox>
      </template> -->
      <template v-slot:item.findings="{ item }">
        <v-card flat class="mx-2">
          <v-layout wrap justify-center align-left>
            <v-flex xs12
              class="text-justify"
              v-for="(item, index) in hasFindings(item, countFindings)" :key="index">
              {{ item.description }}
            </v-flex>
          </v-layout>
<!-- 
          <v-card-actions>
            <v-spacer />
            <v-btn
              text
              small
              v-if="hasFindings(item, countFindings).length > 3"
              @click="ViewMoreFindings(item)"
              color="teal accent-4"
            >
              View More <v-icon left>{{ showAll ? 'mdi-menu-down' : 'mdi-menu-up'}}</v-icon>
            </v-btn>
          </v-card-actions> -->
        </v-card>
      </template>
      <template v-slot:footer>
        <v-card-title v-if="items.length > 0"/>
        <v-flex xs12>
          <v-card-actions>
            <v-card outlined v-show="hasNote">
              <v-card-text class="my-0 py-2">
                <v-icon left>mdi-information-outline</v-icon>{{ note }}
              </v-card-text>
            </v-card>
            <v-spacer />
              <small v-show="count > 0">Total of <span class="blue--text">{{ items.length }} / {{ count }} </span> <span>{{ items.length > 1 ? 'Items' : 'Item'}}</span></small>
          </v-card-actions>
        </v-flex>
        <v-flex xs12 lass="text-center pb-5">
          <v-pagination
            v-show="pageCount > 1"
            v-model="page"
            @next="setPage"
            @previous="setPage"
            :length="pageCount"
            :total-visible="10"
          ></v-pagination>
        </v-flex>
      </v-card-title>
      </template>
      </v-data-table>
      
      <v-card-actions>
        <v-spacer />
        <v-btn
          v-if="!hasClose"
          class="primary-text-color"
          text
          @click="close"
        >
          Cancel
        </v-btn>
        <v-btn
          v-if="!hasClose"
          class="primary-bg-color white--text "
          text
          @click="$emit('proceed')"
          @click.enter="$emit('save', selected)"
        >
          {{ isConfirm ? 'Confirm' : 'Proceed' }}
        </v-btn>
      </v-card-actions>
      </v-card>
    </v-card>
  </v-dialog>
</template>
<script>
  import Global from '~/plugins/mixins/global'
  import { forEach, isUndefined } from 'lodash'
  import { mapMutations, mapGetters } from 'vuex'
  export default {
    mixins: [
      Global
    ],
  	props: {
      dialog: {
        type: Boolean,
        default: false
      },
      message: String,
      color: String,
      hasClose: {
        type: Boolean,
        default: false
      },
      isConfirm: {
        type: Boolean,
        default: false
      },
      items: [Object, Array],
      headers: [Object, Array],
      title: String,
      loading: {
        type: Boolean,
        default: false
      },
      dialogWidth: String,
      hasSelect: {
        type: Boolean,
        default: false
      },
      isSingleSelect: {
        type: Boolean,
        default: false
      },
      count: Number,
      hasNote: {
        type: Boolean,
        default: false
      },
      note: String
  	},
    data () {
      return {
        pageCount: 0,
        itemsPerPage: 10,
        countFindings: 3,
        allCounts: null,
        showAll: false,
        lists: [],
        selected: [],
        page: 1,
        skip: 0,
        take: 10,
        options: {}
      }
    },
    watch: {
      dialog (val) {
        if (val) {
          this.page = 1
        }
      }
    },
    computed: {
      ...mapGetters('events', ['selections']),
      setCount: {
        get: function () {
          return this.countFindings
        },
        // setter
        set: function (value) {
          return value
        }
      },
      setLists: {
        get: function () {
          return this.lists
        },
        // setter
        set: function (value) {
          return value
        }
      }
    },
    watch: {
      options: {
        handler (old, newx) {
          this.skipItems = isUndefined(newx.itemsPerPage) ? 0 : newx.itemsPerPage
          this.takeItems = old.itemsPerPage
          this.prevPage = isUndefined(newx.page) ? 0 : newx.page
          this.currPage = old.page
          let skip = this.sortSkipped(this.skipItems, this.currPage, old.itemsPerPage)
          let take = old.itemsPerPage
          this.skip = skip
          this.take = take
          this.setPage()
        },
        deep: true
      },
      selections (val) {
        this.selected = val
      }
    },
    methods: {
      ...mapMutations('events', ['SET_OPTIONS']),
      close () {
        this.selected = []
        this.$emit('close')
      },
      setPage () {
        this.SET_OPTIONS({
          page: this.page,
          skip: this.skip,
          take: this.take
        })
        this.$emit('fetch')
      },
      ViewMoreFindings (item) {
        if (this.showAll) {
          this.showAll = false
          this.countFindings = this.hasFindings(item, this.countFindings).length + 1
          this.hasFindings(item, this.countFindings)
        } else {
          this.showAll = true
          this.countFindings = 3
          this.hasFindings(item, this.countFindings)
        }
      },
      hasFindings (val, count) {
        let items = []
        if (val.findings.length > 0) {
          return val.findings
        } else {
          this.lists = []
          return []
        }
      }
    }
  }
</script>
