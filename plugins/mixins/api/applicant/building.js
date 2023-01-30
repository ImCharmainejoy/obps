import { mapActions, mapMutations } from 'vuex'
import { omit, isUndefined, forEach, includes, isEmpty, flattenDeep } from 'lodash'
import Global from '~/plugins/mixins/global'
export default {
  mixins: [
    Global
  ],
  data () {
    return {
    }
  },
  computed: {
    isBldgDisabled () {
      if (this.$nuxt._route.params.name) {
        return false
      } else {
        return true
      }
    },
    appName () {
      if (this.$nuxt._route.params.name) {
        return this.$nuxt._route.params.name.split('/')[0]
      } else {
        return null
      }
    },
    clientId () {
      if (this.$nuxt._route.params.name) {
        return this.$nuxt._route.params.name.split('/')[1]
      } else {
        if (this.$nuxt._route.params.id) {
          return this.$nuxt._route.params.id.split('/')[0]
        } else {
          return null
        }
      }
    },
    appNo () {
      if (this.$nuxt._route.params.name) {
        return this.$nuxt._route.params.name.split('/')[2]
      } else {
        if (this.$nuxt._route.params.id) {
          return this.$nuxt._route.params.id.split('/')[1]
        } else {
          return null
        }
      }
    }
  },
  methods: {
    plumbingFixtures (plumbItems) {
      let vm = this
      forEach(this.plumbingItems, function(val) {
        forEach(val.items, function(value, key) {
          let item = plumbItems.find(item => item.fixture === value.text)
          if (!isUndefined(item)) {
            let sortItem = vm.plumbingArray.find(item => item.fixture === value.text)
            if (isUndefined(sortItem)) {
              vm.plumbingArray.push(item)
              vm.$set(vm.plumbing, `${value.qty}`, item.qty)
              vm.$set(vm.plumbing, `${value.new}`, item.fixture_type)
              vm.$set(vm.plumbing, `${value.kind}`, item.fixture)
              if (item.specification) {
                vm.$set(vm.plumbing, `${value.specific}`, item.specification)
              }
            }
          }
        })
      })
    },
    splitMechArray (iteratee, items) {
      let vm = this
      let sortedData = []
      let toArrayItems = items.split(',')
      forEach(iteratee, function(item, key) {
        forEach(item.items, function(itemList, key) {
          let isInArray = toArrayItems.find(item => item === itemList.value)
          if (!isUndefined(isInArray)) {
            vm.$set(sortedData, `${itemList.type}`, isInArray)
          }
        })
      })
      return sortedData
    },
    splitArray (iteratee, items) {
      let vm = this
      let sortedData = []
      let toArrayItems = items.split(',')
      forEach(iteratee, function(item, key) {
        forEach(item.items, function(itemList, key) {
          let isInArray = toArrayItems.find(item => item === itemList.text)
          if (!isUndefined(isInArray)) {
            vm.$set(sortedData, `${itemList.type}`, isInArray)
          }
        })
      })
      return sortedData
    },
    splitKeyArray (iteratee, items) {
      let vm = this
      let sortedData = []
      forEach(Object.keys(items), function(itemVal, key) {
        forEach(iteratee, function(item, key) {
          forEach(item.items, function(value, key) {
            forEach(value.items, function(val, key) {
              if (itemVal === val.type) {
                vm.$set(sortedData, `${itemVal}`, items[itemVal])
              }
            })
          })
        })
      })
      return sortedData
    },
    fetchBuildingData () {
      this.fetchLoading = true
      let payload = {
        api: `building/fetch/${this.userClientId}/${this.evalAppNo}`
      }
      this.GET_API(payload).then(data => {
        if (data.data.building) {
          if (data.data.building.pre.ownership_proof === 'Certified True Copy of Land Title' && data.data.building.pre.ownership_proof === 'Notarized Deed of Absolute Sale' && data.data.building.pre.ownership_proof === 'Notarized Deed of Absolute Sale' && data.data.building.pre.ownership_proof === 'City housing clearance') {
            this.ownership = true
          } else {
            this.ownership = false
          }
          // building
          this.buildingId = data.data.building.id
          // plumbing
          if (data.data.building.bldg_clearance) {
            this.$set(this.formData, 'location', data.data.building.bldg_clearance)
          } else {
            this.$set(this.formData, 'location', {})
          }
          if (data.data.building.bldg_plumbing) {
            this.$set(this.formData, 'bldg_plumbing', data.data.building.bldg_plumbing)
            if (data.data.building.bldg_plumbing.lists.length > 0) {
              this.plumbingFixtures(data.data.building.bldg_plumbing.lists)
            }
          }
          if (data.data.building.bldg_mechanical) {
            this.$set(this.formData.bldg_mech, 'installation_operation', data.data.building.bldg_mechanical.installation_operation)
            this.mechanical = this.splitMechArray(this.mechanicalItems, data.data.building.bldg_mechanical.installation_operation)
          }
          if (data.data.building.bldg_electronic) {
            this.$set(this.formData.bldg_electronics, 'installation_works', data.data.building.bldg_electronic.installation_works)
            this.electronics = this.splitArray(this.electronicsItems, data.data.building.bldg_electronic.installation_works)
          }
          if (data.data.building.bldg_sanitary) {
            this.$set(this.formData.bldg_sanitary, 'installation_works', data.data.building.bldg_sanitary.water_supply)
            this.sanitary = this.splitArray(this.sanitaryItems, data.data.building.bldg_sanitary.water_supply)
            this.$set(this.formData.bldg_sanitary, 'installation_works', data.data.building.bldg_sanitary.system_of_disposal)
            this.sanitary_disposal = this.splitArray(this.sanitaryDisposalItems, data.data.building.bldg_sanitary.system_of_disposal)
          }
          if (data.data.building.bldg_electrical) {
            this.$set(this.formData.bldg_electrical, 'pcab_no', data.data.building.bldg_electrical.pcab_no)
            this.$set(this.formData.bldg_electrical, 'pcab_validity', data.data.building.bldg_electrical.pcab_validity)
            this.$set(this.formData.bldg_electrical, 'contractor_first_name', data.data.building.bldg_electrical.contractor_first_name)
            this.$set(this.formData.bldg_electrical, 'contractor_middle_name', data.data.building.bldg_electrical.contractor_middle_name)
            this.$set(this.formData.bldg_electrical, 'contractor_last_name', data.data.building.bldg_electrical.contractor_last_name)
            this.$set(this.formData.bldg_electrical, 'contractor_suffix', data.data.building.bldg_electrical.contractor_suffix)
            this.$set(this.formData.bldg_electrical, 'contractor_address', data.data.building.bldg_electrical.contractor_address)
            this.$set(this.formData.bldg_electrical, 'contractor_contact', data.data.building.bldg_electrical.contractor_contact)
            this.electrical = this.splitKeyArray(this.electricalItems, data.data.building.bldg_electrical)
          }
          if (data.data.building.designer.length > 0) {
            let plumbingItem = data.data.building.designer.find(item => (item.profession === 'Master Plumber')
              && item.position === 'DESIGN PROFESSIONAL, PLANS AND SPECIFICATIONS')
            if (!isUndefined(plumbingItem)) {
              this.$set(this.formData.bldg_plumbing, 'plumbing_design_position', plumbingItem.position)
              this.$set(this.formData.bldg_plumbing, 'plumbing_design_profession', plumbingItem.profession)
              this.$set(this.formData.bldg_plumbing, 'plumbing_design_first_name', plumbingItem.first_name)
              this.$set(this.formData.bldg_plumbing, 'plumbing_design_middle_name', plumbingItem.middle_name)
              this.$set(this.formData.bldg_plumbing, 'plumbing_design_last_name', plumbingItem.last_name)
              this.$set(this.formData.bldg_plumbing, 'plumbing_design_suffix', plumbingItem.suffix)
              this.$set(this.formData.bldg_plumbing, 'plumbing_design_date_signed', plumbingItem.date_signed)
              this.$set(this.formData.bldg_plumbing, 'plumbing_design_prc_no', plumbingItem.prc_no)
              this.$set(this.formData.bldg_plumbing, 'plumbing_design_validity', plumbingItem.validity)
              this.$set(this.formData.bldg_plumbing, 'plumbing_design_ptr_no', plumbingItem.ptr_no)
              this.$set(this.formData.bldg_plumbing, 'plumbing_design_date_issued', plumbingItem.date_issued)
              this.$set(this.formData.bldg_plumbing, 'plumbing_design_place_issued', plumbingItem.place_issued)
              this.$set(this.formData.bldg_plumbing, 'plumbing_design_tin', plumbingItem.tin)
              this.$set(this.formData.bldg_plumbing, 'plumbing_design_complete_address', plumbingItem.complete_address)
              this.$set(this.formData.bldg_plumbing, 'plumbing_design_email', plumbingItem.email)
            }
            let plumbingSupItem = data.data.building.designer.find(item => (item.profession === 'Master Plumber')
              && item.position === 'SUPERVISOR / IN-CHARGE OF PLUMBING WORKS')
            if (!isUndefined(plumbingSupItem)) {
              this.$set(this.formData.bldg_plumbing, 'plumbing_incharge_position', plumbingSupItem.position)
              this.$set(this.formData.bldg_plumbing, 'plumbing_incharge_profession', plumbingSupItem.profession)
              this.$set(this.formData.bldg_plumbing, 'plumbing_incharge_first_name', plumbingSupItem.first_name)
              this.$set(this.formData.bldg_plumbing, 'plumbing_incharge_middle_name', plumbingSupItem.middle_name)
              this.$set(this.formData.bldg_plumbing, 'plumbing_incharge_last_name', plumbingSupItem.last_name)
              this.$set(this.formData.bldg_plumbing, 'plumbing_incharge_suffix', plumbingSupItem.suffix)
              this.$set(this.formData.bldg_plumbing, 'plumbing_incharge_date_signed', plumbingSupItem.date_signed)
              this.$set(this.formData.bldg_plumbing, 'plumbing_incharge_prc_no', plumbingSupItem.prc_no)
              this.$set(this.formData.bldg_plumbing, 'plumbing_incharge_validity', plumbingSupItem.validity)
              this.$set(this.formData.bldg_plumbing, 'plumbing_incharge_ptr_no', plumbingSupItem.ptr_no)
              this.$set(this.formData.bldg_plumbing, 'plumbing_incharge_date_issued', plumbingSupItem.date_issued)
              this.$set(this.formData.bldg_plumbing, 'plumbing_incharge_place_issued', plumbingSupItem.place_issued)
              this.$set(this.formData.bldg_plumbing, 'plumbing_incharge_tin', plumbingSupItem.tin)
              this.$set(this.formData.bldg_plumbing, 'plumbing_incharge_complete_address', plumbingSupItem.complete_address)
            }
            if (isUndefined(plumbingItem) && isUndefined(plumbingSupItem) && !data.data.building.bldg_plumbing) {
              this.$set(this.formData, 'bldg_plumbing', {})
            }
            // mechanical
            let mechDesignItem = data.data.building.designer.find(item => (item.profession === 'PROFESSIONAL MECHANICAL ENGINEER' || item.profession === 'MECHANICAL ENGINEER')
              && item.position === 'SUPERVISOR / IN-CHARGE OF MECHANICAL WORKS')
              if (!isUndefined(mechDesignItem)) {
                this.$set(this.formData.bldg_mech, 'mechanical_incharge_position', mechDesignItem.position)
                this.$set(this.formData.bldg_mech, 'mechanical_incharge_profession', mechDesignItem.profession)
                this.$set(this.formData.bldg_mech, 'mechanical_incharge_first_name', mechDesignItem.first_name)
                this.$set(this.formData.bldg_mech, 'mechanical_incharge_middle_name', mechDesignItem.middle_name)
                this.$set(this.formData.bldg_mech, 'mechanical_incharge_last_name', mechDesignItem.last_name)
                this.$set(this.formData.bldg_mech, 'mechanical_incharge_suffix', mechDesignItem.suffix)
                this.$set(this.formData.bldg_mech, 'mechanical_incharge_date_signed', mechDesignItem.date_signed)
                this.$set(this.formData.bldg_mech, 'mechanical_incharge_prc_no', mechDesignItem.prc_no)
                this.$set(this.formData.bldg_mech, 'mechanical_incharge_validity', mechDesignItem.validity)
                this.$set(this.formData.bldg_mech, 'mechanical_incharge_ptr_no', mechDesignItem.ptr_no)
                this.$set(this.formData.bldg_mech, 'mechanical_incharge_date_issued', mechDesignItem.date_issued)
                this.$set(this.formData.bldg_mech, 'mechanical_incharge_place_issued', mechDesignItem.place_issued)
                this.$set(this.formData.bldg_mech, 'mechanical_incharge_tin', mechDesignItem.tin)
                this.$set(this.formData.bldg_mech, 'mechanical_incharge_complete_address', mechDesignItem.complete_address)
              }
            let mechSupItem = data.data.building.designer.find(item => (item.profession === 'Professional Mechanical Engineer')
            && item.position === 'DESIGN PROFESSIONAL, PLANS AND SPECIFICATIONS')
            if (!isUndefined(mechSupItem)) {
              this.$set(this.formData.bldg_mech, 'mechanical_design_position', mechSupItem.position)
              this.$set(this.formData.bldg_mech, 'mechanical_design_profession', mechSupItem.profession)
              this.$set(this.formData.bldg_mech, 'mechanical_design_first_name', mechSupItem.first_name)
              this.$set(this.formData.bldg_mech, 'mechanical_design_middle_name', mechSupItem.middle_name)
              this.$set(this.formData.bldg_mech, 'mechanical_design_last_name', mechSupItem.last_name)
              this.$set(this.formData.bldg_mech, 'mechanical_design_suffix', mechSupItem.suffix)
              this.$set(this.formData.bldg_mech, 'mechanical_design_date_signed', mechSupItem.date_signed)
              this.$set(this.formData.bldg_mech, 'mechanical_design_prc_no', mechSupItem.prc_no)
              this.$set(this.formData.bldg_mech, 'mechanical_design_validity', mechSupItem.validity)
              this.$set(this.formData.bldg_mech, 'mechanical_design_ptr_no', mechSupItem.ptr_no)
              this.$set(this.formData.bldg_mech, 'mechanical_design_date_issued', mechSupItem.date_issued)
              this.$set(this.formData.bldg_mech, 'mechanical_design_place_issued', mechSupItem.place_issued)
              this.$set(this.formData.bldg_mech, 'mechanical_design_tin', mechSupItem.tin)
              this.$set(this.formData.bldg_mech, 'mechanical_design_complete_address', mechSupItem.complete_address)
              this.$set(this.formData.bldg_mech, 'mechanical_design_email', mechSupItem.email)
            }
            if (isUndefined(mechDesignItem) && isUndefined(mechSupItem) && !data.data.building.bldg_mechanical) {
              this.$set(this.formData, 'bldg_mech', {})
            }
            // electronics
            let electronicsItem = data.data.building.designer.find(item => (item.profession === 'Professional Electronics Engineer')
            && item.position === 'DESIGN PROFESSIONAL, PLANS AND SPECIFICATIONS')
            if (!isUndefined(electronicsItem)) {
              this.$set(this.formData.bldg_electronics, 'electronic_design_position', electronicsItem.position)
              this.$set(this.formData.bldg_electronics, 'electronic_design_profession', electronicsItem.profession)
              this.$set(this.formData.bldg_electronics, 'electronic_design_first_name', electronicsItem.first_name)
              this.$set(this.formData.bldg_electronics, 'electronic_design_middle_name', electronicsItem.middle_name)
              this.$set(this.formData.bldg_electronics, 'electronic_design_last_name', electronicsItem.last_name)
              this.$set(this.formData.bldg_electronics, 'electronic_design_suffix', electronicsItem.suffix)
              this.$set(this.formData.bldg_electronics, 'electronic_design_date_signed', electronicsItem.date_signed)
              this.$set(this.formData.bldg_electronics, 'electronic_design_prc_no', electronicsItem.prc_no)
              this.$set(this.formData.bldg_electronics, 'electronic_design_validity', electronicsItem.validity)
              this.$set(this.formData.bldg_electronics, 'electronic_design_ptr_no', electronicsItem.ptr_no)
              this.$set(this.formData.bldg_electronics, 'electronic_design_date_issued', electronicsItem.date_issued)
              this.$set(this.formData.bldg_electronics, 'electronic_design_place_issued', electronicsItem.place_issued)
              this.$set(this.formData.bldg_electronics, 'electronic_design_tin', electronicsItem.tin)
              this.$set(this.formData.bldg_electronics, 'electronic_design_complete_address', electronicsItem.complete_address)
              this.$set(this.formData.bldg_electronics, 'electronic_design_email', electronicsItem.email)
            }
            let electronicsSupItem = data.data.building.designer.find(item => (item.profession === 'Professional Electronics Engineer')
            && item.position === 'SUPERVISOR / IN-CHARGE OF ELECTRONICS WORKS')
            if (!isUndefined(electronicsSupItem)) {
              this.$set(this.formData.bldg_electronics, 'electronic_incharge_position', electronicsSupItem.position)
              this.$set(this.formData.bldg_electronics, 'electronic_incharge_profession', electronicsSupItem.profession)
              this.$set(this.formData.bldg_electronics, 'electronic_incharge_first_name', electronicsSupItem.first_name)
              this.$set(this.formData.bldg_electronics, 'electronic_incharge_middle_name', electronicsSupItem.middle_name)
              this.$set(this.formData.bldg_electronics, 'electronic_incharge_last_name', electronicsSupItem.last_name)
              this.$set(this.formData.bldg_electronics, 'electronic_incharge_suffix', electronicsSupItem.suffix)
              this.$set(this.formData.bldg_electronics, 'electronic_incharge_date_signed', electronicsSupItem.date_signed)
              this.$set(this.formData.bldg_electronics, 'electronic_incharge_prc_no', electronicsSupItem.prc_no)
              this.$set(this.formData.bldg_electronics, 'electronic_incharge_validity', electronicsSupItem.validity)
              this.$set(this.formData.bldg_electronics, 'electronic_incharge_ptr_no', electronicsSupItem.ptr_no)
              this.$set(this.formData.bldg_electronics, 'electronic_incharge_date_issued', electronicsSupItem.date_issued)
              this.$set(this.formData.bldg_electronics, 'electronic_incharge_place_issued', electronicsSupItem.place_issued)
              this.$set(this.formData.bldg_electronics, 'electronic_incharge_tin', electronicsSupItem.tin)
              this.$set(this.formData.bldg_electronics, 'electronic_incharge_complete_address', electronicsSupItem.complete_address)
            }
            if (isUndefined(electronicsItem) && isUndefined(electronicsSupItem) && !data.data.building.bldg_electronic) {
              this.$set(this.formData, 'bldg_electronics', {})
            }
            // sanitary
            let sanitaryItem = data.data.building.designer.find(item => (item.profession === 'Sanitary Engineer')
            && item.position === 'DESIGN PROFESSIONAL, PLANS AND SPECIFICATIONS')
            if (!isUndefined(sanitaryItem)) {
              this.$set(this.formData.bldg_sanitary, 'sanitary_design_position', sanitaryItem.position)
              this.$set(this.formData.bldg_sanitary, 'sanitary_design_profession', sanitaryItem.profession)
              this.$set(this.formData.bldg_sanitary, 'sanitary_design_first_name', sanitaryItem.first_name)
              this.$set(this.formData.bldg_sanitary, 'sanitary_design_middle_name', sanitaryItem.middle_name)
              this.$set(this.formData.bldg_sanitary, 'sanitary_design_last_name', sanitaryItem.last_name)
              this.$set(this.formData.bldg_sanitary, 'sanitary_design_suffix', sanitaryItem.suffix)
              this.$set(this.formData.bldg_sanitary, 'sanitary_design_date_signed', sanitaryItem.date_signed)
              this.$set(this.formData.bldg_sanitary, 'sanitary_design_prc_no', sanitaryItem.prc_no)
              this.$set(this.formData.bldg_sanitary, 'sanitary_design_validity', sanitaryItem.validity)
              this.$set(this.formData.bldg_sanitary, 'sanitary_design_ptr_no', sanitaryItem.ptr_no)
              this.$set(this.formData.bldg_sanitary, 'sanitary_design_date_issued', sanitaryItem.date_issued)
              this.$set(this.formData.bldg_sanitary, 'sanitary_design_place_issued', sanitaryItem.place_issued)
              this.$set(this.formData.bldg_sanitary, 'sanitary_design_tin', sanitaryItem.tin)
              this.$set(this.formData.bldg_sanitary, 'sanitary_design_complete_address', sanitaryItem.complete_address)
              this.$set(this.formData.bldg_sanitary, 'sanitary_design_email', sanitaryItem.email)
            }
            let sanitarySupItem = data.data.building.designer.find(item => (item.profession === 'Sanitary Engineer')
            && item.position === 'SUPERVISOR / IN-CHARGE OF SANITARY WORKS')
            if (!isUndefined(sanitarySupItem)) {
              this.$set(this.formData.bldg_sanitary, 'sanitary_incharge_position', sanitarySupItem.position)
              this.$set(this.formData.bldg_sanitary, 'sanitary_incharge_profession', sanitarySupItem.profession)
              this.$set(this.formData.bldg_sanitary, 'sanitary_incharge_first_name', sanitarySupItem.first_name)
              this.$set(this.formData.bldg_sanitary, 'sanitary_incharge_middle_name', sanitarySupItem.middle_name)
              this.$set(this.formData.bldg_sanitary, 'sanitary_incharge_last_name', sanitarySupItem.last_name)
              this.$set(this.formData.bldg_sanitary, 'sanitary_incharge_suffix', sanitarySupItem.suffix)
              this.$set(this.formData.bldg_sanitary, 'sanitary_incharge_date_signed', sanitarySupItem.date_signed)
              this.$set(this.formData.bldg_sanitary, 'sanitary_incharge_prc_no', sanitarySupItem.prc_no)
              this.$set(this.formData.bldg_sanitary, 'sanitary_incharge_validity', sanitarySupItem.validity)
              this.$set(this.formData.bldg_sanitary, 'sanitary_incharge_ptr_no', sanitarySupItem.ptr_no)
              this.$set(this.formData.bldg_sanitary, 'sanitary_incharge_date_issued', sanitarySupItem.date_issued)
              this.$set(this.formData.bldg_sanitary, 'sanitary_incharge_place_issued', sanitarySupItem.place_issued)
              this.$set(this.formData.bldg_sanitary, 'sanitary_incharge_tin', sanitarySupItem.tin)
              this.$set(this.formData.bldg_sanitary, 'sanitary_incharge_complete_address', sanitarySupItem.complete_address)
            }
            if (isUndefined(sanitaryItem) && isUndefined(sanitarySupItem) && !data.data.building.bldg_sanitary) {
              this.$set(this.formData, 'bldg_sanitary', {})
            }
            // electrical
            let electricalItem = data.data.building.designer.find(item => (item.profession === 'Professional Electrical Engineer')
            && item.position === 'PROFESSIONAL ELECTRICAL ENGINEER WHO SIGNED AND SEALED THE PLANS & SPECIFICATION')
            if (!isUndefined(electricalItem)) {
              this.$set(this.formData.bldg_electrical, 'electrical_design_position', electricalItem.position)
              this.$set(this.formData.bldg_electrical, 'electrical_design_profession', electricalItem.profession)
              this.$set(this.formData.bldg_electrical, 'electrical_design_first_name', electricalItem.first_name)
              this.$set(this.formData.bldg_electrical, 'electrical_design_middle_name', electricalItem.middle_name)
              this.$set(this.formData.bldg_electrical, 'electrical_design_last_name', electricalItem.last_name)
              this.$set(this.formData.bldg_electrical, 'electrical_design_suffix', electricalItem.suffix)
              this.$set(this.formData.bldg_electrical, 'electrical_design_date_signed', electricalItem.date_signed)
              this.$set(this.formData.bldg_electrical, 'electrical_design_prc_no', electricalItem.prc_no)
              this.$set(this.formData.bldg_electrical, 'electrical_design_validity', electricalItem.validity)
              this.$set(this.formData.bldg_electrical, 'electrical_design_ptr_no', electricalItem.ptr_no)
              this.$set(this.formData.bldg_electrical, 'electrical_design_date_issued', electricalItem.date_issued)
              this.$set(this.formData.bldg_electrical, 'electrical_design_place_issued', electricalItem.place_issued)
              this.$set(this.formData.bldg_electrical, 'electrical_design_tin', electricalItem.tin)
              this.$set(this.formData.bldg_electrical, 'electrical_design_complete_address', electricalItem.complete_address)
              this.$set(this.formData.bldg_electrical, 'electrical_design_email', electricalItem.email)
            }
            let electricalSupItem = data.data.building.designer.find(item => (item.profession === 'PROFESSIONAL ELECTRICAL ENGINEER') || (item.profession === 'REGISTERED ELECTRICAL ENGINEER')
              || (item.profession === 'REGISTERED MASTER ELECTRICIAN (not exceeding 600 volts and 500 KVA)')
            && item.position === 'PERSON IN-CHARGE OF INSTALLATION')
            if (!isUndefined(electricalSupItem)) {
              this.$set(this.formData.bldg_electrical, 'electrical_incharge_position', electricalSupItem.position)
              this.$set(this.formData.bldg_electrical, 'electrical_incharge_profession', electricalSupItem.profession)
              this.$set(this.formData.bldg_electrical, 'electrical_incharge_first_name', electricalSupItem.first_name)
              this.$set(this.formData.bldg_electrical, 'electrical_incharge_middle_name', electricalSupItem.middle_name)
              this.$set(this.formData.bldg_electrical, 'electrical_incharge_last_name', electricalSupItem.last_name)
              this.$set(this.formData.bldg_electrical, 'electrical_incharge_suffix', electricalSupItem.suffix)
              this.$set(this.formData.bldg_electrical, 'electrical_incharge_date_signed', electricalSupItem.date_signed)
              this.$set(this.formData.bldg_electrical, 'electrical_incharge_prc_no', electricalSupItem.prc_no)
              this.$set(this.formData.bldg_electrical, 'electrical_incharge_validity', electricalSupItem.validity)
              this.$set(this.formData.bldg_electrical, 'electrical_incharge_ptr_no', electricalSupItem.ptr_no)
              this.$set(this.formData.bldg_electrical, 'electrical_incharge_date_issued', electricalSupItem.date_issued)
              this.$set(this.formData.bldg_electrical, 'electrical_incharge_place_issued', electricalSupItem.place_issued)
              this.$set(this.formData.bldg_electrical, 'electrical_incharge_tin', electricalSupItem.tin)
              this.$set(this.formData.bldg_electrical, 'electrical_incharge_complete_address', electricalSupItem.complete_address)
            }
            if (isUndefined(electricalSupItem) && isUndefined(electricalItem) && !data.data.building.bldg_electrical) {
              this.$set(this.formData, 'bldg_electrical', {})
            }
            if (isUndefined(data.data.building.bldg_clearance)) {
              this.otherForm = Object.assign({} , this.other_permits.others)
              this.plumbing = Object.assign({} , this.other_permits.plumbing)
              this.mechanical = Object.assign({} , this.other_permits.mechanical)
              this.sanitary = Object.assign({} , this.other_permits.sanitary)
              this.sanitary_disposal = Object.assign({} , this.other_permits.sanitary_disposal)
              this.electrical = Object.assign({} , this.other_permits.electrical)
              this.electronics = Object.assign({} , this.other_permits.electronics)
            } else {
              this.SET_OTHER_PERMITS({})
              this.otherForm = { ...this.formData }
            }
          }
        }
      }).catch(err => {
        if (err) { 
          console.log('err:', err)
        }
      }).finally(() => {
        this.fetchLoading = false
      })
    }
  }
}
