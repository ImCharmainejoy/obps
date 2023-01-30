<template>
  <v-data-table
    :headers="headers"
    :items="items"
    class="elevation-3 mt-2"
    :height="mobile ? '' : '600px'"
    :mobile-breakpoint="mobileBreakpoint"
    :page.sync="page"
    :items-per-page="itemsPerPage"
    @page-count="pageCount"
    :server-items-length="count"
    :options.sync="options"
    :loading="loading"
    hide-default-footer
    loading-text="Loading... Please wait">
  <template v-slot:header>
    <thead v-if="hasTHeader" class="table-header-bg">
      <tr >
        <th :style="index === 4 ? 'border-right: 1px solid white; margin: 2px 0 2px 0;' : ''" class="text-center white--text" v-for="(item, index) in headers" :key="index">
          {{ item.title }}
        </th>
      </tr>
    </thead>
  </template>
  <template v-slot:header.geo_evaluator="{ header }">
    <v-chip
      color="#795548"
      small
      label
      class="white--text">
      1
    </v-chip>
  </template>
  <template v-slot:header.arch_evaluator="{ header }">
    <v-layout wrap justify-left align-left>
      <v-flex xs12>
        <v-chip
          color="#4CAF50"
          small
          label
          class="white--text">
          2
        </v-chip>
      </v-flex>
    </v-layout>
  </template>
  <template v-slot:header.civil_evaluator="{ header }">
    <v-layout wrap justify-left align-left>
      <v-flex xs12>
        <v-chip
          color="#1976D2"
          small
          label
          class="white--text">
          3
        </v-chip>
      </v-flex>
    </v-layout>
  </template>
  <template v-slot:header.sanitary_evaluator="{ header }">
    <v-layout wrap justify-left align-left>
      <v-flex xs12>
        <v-chip
          color="#FF9800"
          small
          label
          class="white--text">
          4
        </v-chip>
      </v-flex>
    </v-layout>
  </template>
  <template v-slot:header.prof_evaluator="{ header }">
    <v-layout wrap justify-left align-left>
      <v-flex xs12>
        <v-chip
          color="#E91E63"
          small
          label
          class="white--text">
          5
        </v-chip>
      </v-flex>
    </v-layout>
  </template>
  <template v-slot:header.elec_evaluator="{ header }">
    <v-layout wrap justify-left align-left>
      <v-flex xs12>
        <v-chip
          color="#9C27B0"
          small
          label
          class="white--text">
          6
        </v-chip>
      </v-flex>
    </v-layout>
  </template>
  <template v-slot:header.pro_evaluator="{ header }">
    <v-layout wrap justify-left align-left>
      <v-flex xs12>
        <v-chip
          color="#607D8B"
          small
          label
          class="white--text">
          7
        </v-chip>
      </v-flex>
    </v-layout>
  </template>
  <template v-slot:item.pre_evaluation="{ item }">
    <v-btn
      :color="getColor(item.pre_evaluation)"
      x-small
      fab
      depressed>
      <v-icon class="white--text">{{ legendStatus(item.pre_evaluation) }}</v-icon>
    </v-btn>
  </template>
  <template v-slot:item.pre_actions="{ item }">
    <v-layout wrap justify-center align-center>
      <v-flex xs12>
        <v-btn
          class="ma-2"
          outlined
          rounded
          small
          color="#4EA466"
          v-if="item.pre_evaluation === 'Approved'"
          style="border: 1px solid #DBDBDA"
          @click="$emit('doPreExport', item)"
        >
          Download Checklist
        </v-btn>
      </v-flex>
      <v-flex xs12>
        <v-btn
          class="ma-2"
          outlined
          rounded
          small
          color="#EE7302"
          v-if="item.pre_evaluation === 'Subject for Resubmission'"
          style="border: 1px solid #DBDBDA"
          @click="$emit('doPreResubmit', item)"
        >
          Resubmit
        </v-btn>
      </v-flex>
      <v-flex xs12>
        <v-btn
          class="ma-2"
          outlined
          rounded
          small
          color="#EE7302"
          v-if="item.pre_evaluation === 'Subject for Resubmission'"
          style="border: 1px solid #DBDBDA !important;"
          @click="$emit('doPreRecommend', item)"
        >Recommendation
        </v-btn>
      </v-flex>
    </v-layout>
  </template>
  <template v-slot:item.actions="{ item }">
    <v-layout wrap justify-left align-left
      v-if="item.pre_evaluation === 'Approved'">
      <v-flex xs12>
        <v-btn
          class="ma-2"
          outlined
          rounded
          small
          color="purple"
          v-if="item.evaluation === 'Applied'"
          style="border: 1px solid #DBDBDA"
          @click="$emit('doSchedule', item)"
        >
          Schedule a visit
        </v-btn>
      </v-flex>
      <v-flex xs12>
        <v-btn
          class="ma-2"
          outlined
          rounded
          small
          v-if="item.evaluation === 'Applied'"
          style="border: 1px solid #DBDBDA"
          @click="$emit('viewStatus', item)"
        >
          View Status
        </v-btn>
      </v-flex>
      <v-flex xs12>
        <v-btn
          class="ma-2"
          outlined
          rounded
          small
          color="#EE7302"
          v-if="item.evaluation === 'Recommendation'"
          style="border: 1px solid #DBDBDA"
          @click="$emit('doRecommend', item)"
        >
          Recommendation
        </v-btn>
      </v-flex>
      <v-flex xs12>
        <v-btn
          class="ma-2"
          outlined
          rounded
          small
          color="#3F51B5"
          v-if="item.evaluation === 'Submitted'"
          style="border: 1px solid #DBDBDA"
          @click="$emit('doExport', item)"
        >
          Download Form
        </v-btn>
      </v-flex>
      <v-flex xs12
        v-if="item.pre_evaluation === 'Approved'">
        <v-btn
          class="ma-2"
          outlined
          rounded
          small
          :color="item.evaluation === 'Issuance' ? '#3F51B5' : (item.evaluation === 'Recommendation' ? '#EE7302' : '')"
          style="border: 1px solid #DBDBDA"
          @click="$emit('doApply', item)"
        >
          {{ applicationStatus(item) }}
        </v-btn>
      </v-flex>
    </v-layout>
  </template>
   <template v-slot:item.geo_evaluator="{ item }">
     <v-btn
       v-if="item.geo_evaluator"
      :color="getColor(item.geo_evaluator)"
      x-small
      fab
      depressed>
      <v-icon class="white--text">{{ legendStatus(item.geo_evaluator) }}</v-icon>
    </v-btn>
    <span v-else />
   </template>
   <template v-slot:item.arch_evaluator="{ item }">
     <v-btn
       v-if="item.arch_evaluator"
      :color="getColor(item.arch_evaluator)"
      x-small
      fab
      depressed>
      <v-icon class="white--text">{{ legendStatus(item.arch_evaluator) }}</v-icon>
    </v-btn>
    <span v-else />
   </template>
   <template v-slot:item.civil_evaluator="{ item }">
     <v-btn
       v-if="item.civil_evaluator"
      :color="getColor(item.civil_evaluator)"
      x-small
      fab
      depressed>
      <v-icon class="white--text">{{ legendStatus(item.civil_evaluator) }}</v-icon>
    </v-btn>
    <span v-else />
   </template>
   <template v-slot:item.sanitary_evaluator="{ item }">
     <v-btn
       v-if="item.sanitary_evaluator"
      :color="getColor(item.sanitary_evaluator)"
      x-small
      fab
      depressed>
      <v-icon class="white--text">{{ legendStatus(item.sanitary_evaluator) }}</v-icon>
    </v-btn>
    <span v-else />
   </template>
   <template v-slot:item.prof_evaluator="{ item }">
     <v-btn
       v-if="item.prof_evaluator"
      :color="getColor(item.prof_evaluator)"
      x-small
      fab
      depressed>
      <v-icon class="white--text">{{ legendStatus(item.prof_evaluator) }}</v-icon>
    </v-btn>
    <span v-else />
   </template>
   <template v-slot:item.elec_evaluator="{ item }">
     <v-btn
       v-if="item.elec_evaluator"
      :color="getColor(item.elec_evaluator)"
      x-small
      fab
      depressed>
      <v-icon class="white--text">{{ legendStatus(item.elec_evaluator) }}</v-icon>
    </v-btn>
    <span v-else />
   </template>
   <template v-slot:item.pro_evaluator="{ item }">
     <v-btn
       v-if="item.pro_evaluator"
      :color="getColor(item.pro_evaluator)"
      x-small
      fab
      depressed>
      <v-icon class="white--text">{{ legendStatus(item.pro_evaluator) }}</v-icon>
    </v-btn>
    <span v-else />
   </template>
 </v-data-table>
</template>
<script>
  import Global from '~/plugins/mixins/global'
  import legendsConstants from '~/plugins/mixins/constants/legends.js'
  import { isUndefined, isEmpty } from 'lodash'
  export default {
    mixins: [
      Global,
      legendsConstants
    ],
    props: {
      headers: {
        type: Array,
        default: []
      },
      items: {
        type: Array,
        default: []
      },
      hasTHeader: {
        type: Boolean,
        default: false
      },
      page: Number,
      pageCount: Number,
      itemsPerPage: Number,
      loading: {
        type: Boolean,
        default: false
      },
      count: Number,
      options: {
        type: [Object, Function],
        default: {}
      }
    }
  }
</script>
