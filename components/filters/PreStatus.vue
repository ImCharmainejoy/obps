<template>
  <v-container fluid class="py-0 my-0">
    <v-layout wrap justify-center align-center>
      <v-flex xs12 sm6 md4>
        <v-switch
        v-model="switch_status"
        inset
        dense
        label="Subject for Resubmission"
        value="Subject for Resubmission"
        @click="setStatus">
        </v-switch>
      </v-flex>
      <v-flex xs12 sm6 md4>
        <v-switch
        v-model="switch_status"
        inset
        dense
        label="Approved"
        value="Approved"
        @click="setStatus">
        </v-switch>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data: () => ({
    switch_status: []
  }),
  computed: {
    ...mapGetters('filters', ['filter'])
  },
  methods: {
    ...mapMutations('filters', ['SET_FILTER']),
    setStatus () {
      if (this.switch_status) {
        let payload = {
          pre_status: this.switch_status
        }
        this.SET_FILTER(payload)
      } else {
        let payload = {
          pre_status: []
        }
        this.SET_FILTER(payload)
      }
    }
  },
  mounted () {
    if (this.filter.status) {
      this.switch_status = this.filter.status
    }
  }
}
</script>
