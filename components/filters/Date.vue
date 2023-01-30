<template>
  <v-container fluid class="pb-0 mb-0">
    <v-layout wrap justify-center align-center>
      <v-flex xs12 md6>
        <v-text-field
          color="accent"
          class="pt-0 mx-1"
          dense
          label="From"
          outlined
          clearable
          clear-icon="mdi-close-circle"
          type="date"
          v-model="application_date[0]"
          @blur="OnfocusOut(application_date)"
        ></v-text-field>
      </v-flex>

      <v-flex xs12 md6>
        <v-text-field
          color="accent"
          class="pt-0 mx-1"
          dense
          label="To"
          outlined
          clearable
          clear-icon="mdi-close-circle"
          type="date"
          v-model="application_date[1]"
          @blur="OnfocusOut(application_date)"
        ></v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      application_date: []
    }
  },
  computed: {
    ...mapGetters('filters', ['filter'])
  },
  // watch: {
  //   filter: {
  //     handler (val) {
  //       this.application_date = val.visit_date
  //       let payload = {}
  //       if (val.visit_date) {
  //         console.log('val.visit_date:', val.visit_date)
  //         if (val.visit_date.length > 0) {
  //           this.$set(payload, 'visit_date', val.visit_date)
  //         } else {
  //           this.$set(payload, 'visit_date', [])
  //         }
  //       } else {
  //         this.$set(payload, 'visit_date', [])
  //       }
  //       this.SET_FILTER(payload)
  //     },
  //     deep: true
  //   }
  // },
  methods: {
    ...mapMutations('filters', ['SET_FILTER', 'SET_FILTER']),
    OnfocusOut (val) {
      if (val) {
        let payload = {
          visit_date: val
        }
        this.SET_FILTER(payload)
      } else {
        let payload = {
          visit_date: []
        }
        this.SET_FILTER(payload)
      }
    }
  },
  mounted () {
    if (this.filter.visit_date) {
      this.application_date = this.filter.visit_date
    }
  }
}
</script>
