export default {
  data: () => ({
    filteredData: {}
  }),
  methods: {
    clearFilteredData () {
      this.filteredData = {}
    },
    setFilteredData (val) {
      if (val) {
        this.filteredData = {...val}
      } else {
        this.clearFilteredData()
      }
    },
    getFilteredFields (field) {
      if (!field) {
        return []
      }
      let filter = this.filteredData
      for (let key of field.split('.')) {
        if (!filter) {
          break
        }
        filter = filter[key]
      }
      if (filter) {
        return filter.length
      }
      return 0
    },
    getActive (val) {
      return {
        'active': val > 0,
        'white--text': val > 0,
        'primary-bg-color': val > 0
      }
    }
  }
}
