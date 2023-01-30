import { mapMutations, mapActions, mapGetters } from 'vuex'
import { includes, isUndefined, forEach, uniq, isNull, isEmpty, concat, omit, pick } from 'lodash'
export default {
  computed: {
    ...mapGetters('user', ['app_no'])
  },
  methods: {
    ...mapMutations('user', ['SET_PRC_FILES']),
    ...mapActions('user', ['FETCH_PER_CLIENT']),
    isFileRequired (required, assignRequired) {
      if (required) {
        return required
      } else {
        if (isUndefined(assignRequired)) {
          return false
        } else {
          return assignRequired
        }
      }
    },
    hasRevisedFileUpload (arrayList, item) {
      // show upload revision file
      let list = arrayList.find(a => a.text === `REVISED: ${item.text}`)
      if (!isUndefined(list)) {
        if (isUndefined(this.files[list.require])) {
          return false
        } else {
          return this.files[list.require]
        }
      } else {
        // return true
      }
    },
    browseBulkRevision (type, item) {
      if (this.textIncludes('REVISED', item.name)) {
        // change revision file
        let mergeItems = concat(this.buildingArray, this.proofArray, this.companyArray, this.set_prc_item)
        let list = mergeItems.find(a => a.text === item.name)
        if (!isUndefined(list)) {
          let listIndex = mergeItems.indexOf(list)
          if (listIndex !== -1) {
            mergeItems[listIndex].required  = true
          }
          this.setFileItem[list.require] = true
          this.viewFiles[list.view] = false
        }
      } else {
        // upload revision file
        let mergeItems1 = concat(this.buildingArray, this.proofArray, this.companyArray, this.set_prc_item)
        let list = mergeItems1.find(a => a.text === `REVISED: ${item.name}`)
        if (!isUndefined(list)) {
          let listIndex = mergeItems1.indexOf(list)
          if (listIndex !== -1) {
            mergeItems1[listIndex].required = true
          }
          this.setFileItem[list.require] = true
        }
        if (type === 'proof') {
          let proofItem = this.sortedProofArray.find(a => a.text === list.text)
          let proofIndex = this.sortedProofArray.indexOf(proofItem)
          if (proofIndex !== -1) {
            this.sortedProofArray[proofIndex].required = true
          }
          if (isUndefined(proofItem)) {
            this.sortedProofArray.push(list)
          }
        }
        if (type === 'company') {
          let companyItem = this.sortedCompanyArray.find(a => a.text === list.text)
          let companyIndex = this.sortedCompanyArray.indexOf(companyItem)
          if (companyIndex !== -1) {
            this.sortedCompanyArray[companyIndex].required = true
          }
          if (isUndefined(companyItem)) {
            this.sortedCompanyArray.push(list)
          }
        }
      }
    },
    browseRevision () {
      // show browse to upload revision file
      this.isPrcRevision = true
      this.form.isPrcRevision = true
    },
    removeData (val) {
      // remove data unsaved to db
      const fileItem = this.files.find(item => item.name === val.name)
      const fileIndex = this.files.indexOf(fileItem)
      if (fileIndex !== -1) {
        this.$delete(this.setFileItem, fileIndex)
        this.SET_FILES(this.setFileItem)
      }
    },
    setComment (remarks, item) {
      // assign title, remarks and file id
      this.preevalTitle = 'Findings'
      this.attachment_id = item.id
      this.remarkDialog = true
      this.remarks = remarks
    },
    setRevComment (remarks, item) {
      // assign title, remarks and revision file id
      if (item.id.name) {
        if (!includes(item.id.name, 'REVISED')) {
          this.preevalTitle = 'Findings'
         this.attachment_id = item.id.id
        } else {
          this.preevalTitle = 'Remarks'
          this.attachment_id = item.id
        }
      } else {
        if (!includes(item.name, 'REVISED')) {
          this.preevalTitle = 'Findings'
        } else {
          this.preevalTitle = 'Remarks'
        }
        this.attachment_id = item.id
      }
      this.remarkDialog = true
      this.remarks = remarks
    },
    cancelRemark () {
      this.remarkDialog = false
      this.remarks = ''
    },
    setLoading (isUploadSuccess, item) {
      let mergeItems = concat(this.buildingArray, this.sortedProofArray, this.sortedCompanyArray, this.set_prc_item)
      let findItem = mergeItems.find(a => a.text === item.name)
      if (!isUndefined(findItem)) {
        if (findItem.text === 'PRC ID and PTR (recent) with 3 signature specimen') {
          if (!isUploadSuccess) {
            this.prcLoading = true
          } else {
            this.prcLoading = false
          }
        } else {
          if (this.viewFiles[findItem.view]) {
            this.setFileItem[findItem.load] = false
          } else {
            if (!isUploadSuccess) {
              this.setFileItem[findItem.load] = true
            } else {
              this.setFileItem[findItem.load] = false
            }
          }
        }
        if (item.name === 'REVISED: PRC ID and PTR (recent) with 3 signature specimen') {
          if (!isUploadSuccess) {
            this.prcRevisedLoading = true
          } else {
            this.prcRevisedLoading = false
          }
        }
         if (item.name === 'PRC ID and PTR (recent) with 3 signature specimen') {
          if (!isUploadSuccess) {
            this.prcLoading = true
          } else {
            this.prcLoading = false
          }
        }
      }
    },
    doComment (item) {
      // set title, remarks and file id
      this.preevalTitle = 'Findings'
      this.attachment_id = item.id
      this.remarkDialog = true
    },
    doRevComment (item) {
      // set title, remarks and revision file id
      if (item.id.name) {
        if (!includes(item.id.name, 'REVISED')) {
          this.preevalTitle = 'Findings'
         this.attachment_id = item.id.id
        } else {
          this.preevalTitle = 'Remarks'
          this.attachment_id = item.id
        }
      } else {
        if (!includes(item.name, 'REVISED')) {
          this.preevalTitle = 'Findings'
        } else {
          this.preevalTitle = 'Remarks'
        }
        this.attachment_id = item.id
      }
      this.remarkDialog = true
    },
    setUploads (iteratee) {
      // set refetch array of files
      if (iteratee) {
        let proofItems = []
        let authItems = []
        let companyItems = []
        let vm = this
        let mergeItems = concat(this.buildingArray, this.sortedProofArray, this.sortedCompanyArray, this.set_prc_item)
        if (iteratee.attachments) {
          // if has submitted files already
          forEach(mergeItems, function(val, key) {
            if (iteratee.attachments.length > 0) {
              const item = iteratee.attachments.find(a => String(a.name) === String(val.text))
              if (!isUndefined(item)) {
                const fileItem = vm.files.find(a => String(a.name) === String(val.text))
                if (isUndefined(fileItem)) {
                  vm.files.push(item)
                }
                if (isUndefined(vm.files[val.key])) {
                  vm.$set(vm.files, `${val.key}`, vm.setFile(item.file_upload))
                }
                if (isUndefined(vm.files[val.note])) {
                  vm.$set(vm.files, `${val.note}`, item.remarks)
                }
                if (isUndefined(vm.files[val.load])) {
                  vm.$set(vm.files, `${val.load}`, false)
                }
                if (isUndefined(vm.viewFiles[val.view])) {
                  vm.$set(vm.viewFiles, `${val.view}`, item.file_upload ? true : false)
                }
                if (isUndefined(vm.files[val.require])) {
                  vm.$set(vm.files, `${val.require}`, item.file_upload ? true : false)
                }
              }
            }
          })
        } else {
          if (this.app_no && this.clientId) {
            this.refetchData()
          }
        }
      }
    },
    refetchData () {
      // this.preLoading = true
      let items = []
      let sortItems = {}
      let payload = {
        application_no: this.app_no,
        client_id: this.clientId,
      }
      this.FETCH_PER_CLIENT(payload).then(res => {
        sortItems = omit(res.data.pre, 'address', 'client', 'lat', 'long')
        let pickclientType = pick(res.data.pre.client, 'client_type')
        this.preID = res.data.pre.id
        if (res.data.pre.attachments.length > 0) {
          const designerItem = res.data.pre.attachments.find(item => {
            return String(item.name) === 'PRC ID and PTR (recent) with 3 signature specimen'
          })
          if (!isUndefined(designerItem)) {
            this.$set(sortItems, 'application_id', res.data.pre.id)
            this.$set(sortItems, 'attachment', designerItem)
            this.$set(sortItems, 'lat', res.data.pre ? Number(res.data.pre.lat) : '')
            this.$set(sortItems, 'long', res.data.pre ? Number(res.data.pre.long) : '')
            this.$set(sortItems, 'remarks', designerItem.remarks)
            this.$set(sortItems, 'prof_fname', designerItem.designer ? designerItem.designer.first_name : '')
            this.$set(sortItems, 'profession', designerItem.designer ? (designerItem.designer.profession === 'architect' ? 'Architect' : 'Civil Engineer') : '')
            this.$set(sortItems, 'prof_lname', designerItem.designer ? designerItem.designer.last_name : '')
            this.$set(sortItems, 'prof_mname', designerItem.designer ? designerItem.designer.middle_name : '')
            this.$set(sortItems, 'prof_suffix', designerItem.designer ? designerItem.designer.suffix : '')
            this.$set(sortItems, 'prof_contact', designerItem.designer ? designerItem.designer.contact : '')
            this.$set(sortItems, 'prof_address', designerItem.designer ? designerItem.designer.complete_address : '')
            this.$set(sortItems, 'prc_no', designerItem.designer ? designerItem.designer.prc_no : '')
            this.$set(sortItems, 'validity', designerItem.designer ? designerItem.designer.validity : '')
            this.$set(sortItems, 'ptr_no', designerItem.designer ? designerItem.designer.ptr_no : '')
            this.$set(sortItems, 'date_issued', designerItem.designer ? designerItem.designer.date_issued : '')
            this.$set(sortItems, 'place_issued', designerItem.designer ? designerItem.designer.place_issued : '')
            this.$set(sortItems, 'tin', designerItem.designer ? designerItem.designer.tin : '')
            this.$set(sortItems, 'file_upload', this.setFile(designerItem.file_upload))
            this.$set(sortItems, 'attachment_id', res.data.pre.attachment ? res.data.pre.attachment.id : '')
            this.$set(sortItems, 'city', 'CITY OF DAVAO')
            this.$set(sortItems, 'zipcode', 8000)
            this.$set(sortItems, 'file_name', designerItem.file_name)
            this.$set(sortItems, 'name', designerItem.name)
          }
          const revisedDesignerItem = res.data.pre.attachments.find(item => {
            return String(item.name) === 'REVISED: PRC ID and PTR (recent) with 3 signature specimen'
          })
          this.$set(sortItems, 'isPrcRevision', isUndefined(revisedDesignerItem) ? false : true)
          if (!isUndefined(revisedDesignerItem)) {
            this.isRevisedViewFile = true
            this.$set(sortItems, 'revised_remarks', revisedDesignerItem.remarks)
            this.$set(sortItems, 'revised_file_upload', this.setFile(revisedDesignerItem.file_upload))
            this.$set(sortItems, 'revised_attachment_id', res.data.pre.attachment ? revisedDesignerItem.id : '')
          } else {
            this.isRevisedViewFile = false
          }
          items = Object.assign({}, sortItems, res.data.pre.address, pickclientType)
          this.setUploads(items)
        } else {
          this.setUploads(items)
        }
      }).catch(err => {
        if (err) {
        console.log('err:', err)
        }
      }).finally(() => {
        // this.preLoading = false
      })
    },
    setDistrict () {
      if (this.setData) {
        let item = this.districtItems.find(item => item.name === this.setData.district)
        if (!isUndefined(item)) {
          this.form.district_id = item
          let brgyItem = this.brgyItems.find(item => item.name === this.setData.barangay)
          if (!isUndefined(brgyItem)) {
            this.form.barangay_name = brgyItem
          }
        }
      }
    },
    setBrgyData () {
      if (this.form.district_id) {
        this.barangays = this.brgyItems.filter(item => Number(item.district_id) === Number(this.form.district_id.id))
      }
    },
    setFormData () {
      // for sorting of barangays
      this.setBrgyData()
      // for sorting of proof of ownership
      if (this.form.ownership_proof) {
        this.sorted_proof_items = this.proofItems.filter(item => {
          if (includes(item.type, this.form.ownership_proof)) {
            if (this.form.ownership_proof === 'Contract of Lease' ) {
              if (this.form.ownership_proof_type === 'Yes') {
                return item.text === 'Contract of Lease'
              } else if (this.form.ownership_proof_type === 'No') {
                return item
              } else {
                return item.text !== 'Contract of Lease' && item.text !== 'Certified True Copy of Land Title'
              }
            } else if (this.form.ownership_proof === 'City Housing Clearance') {
              // return item
              if (this.form.ownership_proof_type === 'City Owned') {
                return item.text === 'Certificate of Awardee from the city planning' || item.text === 'Advanced technical specs'
              } else if (this.form.ownership_proof_type === 'NHA') {
                return item.text === 'Certified True Copy of Land Title' || item.text === 'Certificate of Lot purchase from NHA' || item.text === 'Advanced technical specs (if not yet subdivide)'
              } else {
                return item.text !== 'Certificate of Awardee from the city planning' && item.text !== 'Advanced technical specs (if not yet subdivide)' && item.text !== 'Advanced technical specs'
                && item.text !== 'Certified True Copy of Land Title' && item.text !== 'Certificate of Lot purchase from NHA'
              }
            } else if (this.form.ownership_proof === 'Community Association') {
              // return item
              return item.text !== 'Certificate of Awardee from the city planning' && item.text !== 'Advanced technical specs (if not yet subdivide)'
                && item.text !== 'Certified True Copy of Land Title' && item.text !== 'Certificate of Lot purchase from NHA'
            } else {
              return item
            }
          }
        })
        let sortProofs = []
      // for sorting of proof of ownership with revisions
        sortProofs = this.proofArray.filter(item => {
          if (includes(item.type, this.form.ownership_proof)) {
            if (this.form.ownership_proof === 'Contract of Lease') {
              if (this.form.ownership_proof_type === 'Yes') {
                if (item.required && isUndefined(item.require)) {

                  return item.text === 'Contract of Lease'
                } else {
                  if (this.setData.attachments) {
                    let fileItem = this.setData.attachments.find(a => a.name === item.text)
                    if (!isUndefined(fileItem)) {
                      return includes(item.text, 'Contract of Lease')
                    } else {
                      return item.text === 'Contract of Lease'
                    }
                  } else {
                    return item.text === 'Contract of Lease'
                  }
                }
              } else if (this.form.ownership_proof_type === 'No') {
                if (item.required && isUndefined(item.require)) {
                  return !includes(item.text, 'REVISED')
                } else {
                  if (this.setData.attachments) {
                    let fileItem = this.setData.attachments.find(a => a.name === item.text)
                    if (!isUndefined(fileItem)) {
                      return item
                    } else {
                      return !includes(item.text, 'REVISED')
                    }
                  } else {
                    return !includes(item.text, 'REVISED')
                  }
                }
              } else {
                return !includes(item.text, 'Contract of Lease') && !includes(item.text, 'Certified True Copy of Land Title')
              }
            } else if (includes(this.form.ownership_proof, 'City Housing Clearance')) {
              // return item
              if (this.form.ownership_proof_type === 'City Owned') {
                if (item.required && isUndefined(item.require)) {
                  return item.text === 'Certificate of Awardee from the city planning' || item.text === 'Advanced technical specs'
                } else {
                  if (this.setData.attachments) {
                    let fileItem = this.setData.attachments.find(a => a.name === item.text)
                    if (!isUndefined(fileItem)) {
                      return includes(item.text, 'Certificate of Awardee from the city planning') || includes(item.text, 'Advanced technical specs')
                    } else {
                      return item.text === 'Certificate of Awardee from the city planning' || item.text === 'Advanced technical specs'
                    }
                  } else {
                    return item.text === 'Certificate of Awardee from the city planning' || item.text === 'Advanced technical specs'
                  }
                }
              } else if (this.form.ownership_proof_type === 'NHA') {
                if (item.required && isUndefined(item.require)) {
                  return item.text === 'Certified True Copy of Land Title' || item.text === 'Certificate of Lot purchase from NHA' || item.text === 'Advanced technical specs (if not yet subdivide)'
                } else {
                  if (this.setData.attachments) {
                    let fileItem = this.setData.attachments.find(a => a.name === item.text)
                    if (!isUndefined(fileItem)) {
                      return includes(item.text, 'Certified True Copy of Land Title') || includes(item.text, 'Certificate of Lot purchase from NHA') || includes(item.text, 'Advanced technical specs (if not yet subdivide)')
                    } else {
                      return item.text === 'Certified True Copy of Land Title' || item.text === 'Certificate of Lot purchase from NHA' || item.text === 'Advanced technical specs (if not yet subdivide)'
                    }
                  } else {
                    return item.text === 'Certified True Copy of Land Title' || item.text === 'Certificate of Lot purchase from NHA' || item.text === 'Advanced technical specs (if not yet subdivide)'
                  }
                }
              } else {
                if (item.required && isUndefined(item.require)) {
                  return item.text !== 'Certificate of Awardee from the city planning' && item.text !== 'Advanced technical specs (if not yet subdivide)' && item.text !== 'Advanced technical specs'
                  && item.text !== 'Certified True Copy of Land Title' && item.text !== 'Certificate of Lot purchase from NHA'
                } else {
                  if (this.setData.attachments) {
                    let fileItem = this.setData.attachments.find(a => a.name === item.text)
                    if (!isUndefined(fileItem)) {
                      return !includes(item.text, 'Certificate of Awardee from the city planning') && !includes(item.text, 'Advanced technical specs (if not yet subdivide)') && !includes(item.text, 'Advanced technical specs')
                       && !includes(item.text, 'Certified True Copy of Land Title') && !includes(item.text, 'Certificate of Lot purchase from NHA')
                    } else {
                      return item.text !== 'Certificate of Awardee from the city planning' && item.text !== 'Advanced technical specs (if not yet subdivide)' && item.text !== 'Advanced technical specs'
                      && item.text !== 'Certified True Copy of Land Title' && item.text !== 'Certificate of Lot purchase from NHA'
                    }
                  } else {
                    return item.text !== 'Certificate of Awardee from the city planning' && item.text !== 'Advanced technical specs (if not yet subdivide)' && item.text !== 'Advanced technical specs'
                      && item.text !== 'Certified True Copy of Land Title' && item.text !== 'Certificate of Lot purchase from NHA'
                  }
                }
              }
            } else if (this.form.ownership_proof === 'Community Association') {
              if (item.required && isUndefined(item.require)) {
                  // return item
                return item.text !== 'Certificate of Awardee from the city planning' && item.text !== 'Advanced technical specs (if not yet subdivide)'
                && item.text !== 'Certified True Copy of Land Title' && item.text !== 'Certificate of Lot purchase from NHA'
              } else {
                if (this.setData.attachments) {
                  let fileItem = this.setData.attachments.find(a => a.name === item.text)
                  if (!isUndefined(fileItem)) {
                    return !includes(item.text, 'Certificate of Awardee from the city planning') && !includes(item.text, 'Advanced technical specs (if not yet subdivide)')
                    && !includes(item.text, 'Certified True Copy of Land Title') && !includes(item.text, 'Certificate of Lot purchase from NHA')
                  } else {
                    // return item
                    return item.text !== 'Certificate of Awardee from the city planning' && item.text !== 'Advanced technical specs (if not yet subdivide)'
                    && item.text !== 'Certified True Copy of Land Title' && item.text !== 'Certificate of Lot purchase from NHA'
                  }
                } else {
                  return item.text !== 'Certificate of Awardee from the city planning' && item.text !== 'Advanced technical specs (if not yet subdivide)'
                    && item.text !== 'Certified True Copy of Land Title' && item.text !== 'Certificate of Lot purchase from NHA'
                }
              }
            } else {
              if (item.required && isUndefined(item.require)) {
                return !includes(item.text, 'REVISED')
              } else {
                if (this.setData.attachments) {
                  let fileItem = this.setData.attachments.find(a => a.name === item.text)
                  if (!isUndefined(fileItem)) {
                    return item
                  } else {
                    return (!includes(item.text, 'REVISED') && isUndefined(item.require)) || (includes(item.text, 'REVISED') && !isUndefined(item.require))
                  }
                } else {
                  return !includes(item.text, 'REVISED')
                }
              }
            }
          }
        })

        // check if return data has revised files
        let vm = this
        let sortedPoofArray = []
        forEach(sortProofs, function(val) {
          if (vm.setData.attachments) {
            let sortItem = vm.setData.attachments.find(a => a.name === val.text)
            sortedPoofArray.push({
              ...omit(val, 'required'),
              required: !isUndefined(sortItem) ? true : false
            })
            if (!isUndefined(val.require)) {
              vm.setFileItem[val.require] = !isUndefined(sortItem) ? true : false
              vm.viewFiles[val.view] = !isUndefined(sortItem) ? true : false
            }
          } else {
            sortedPoofArray.push(val)
          }
        })
        this.sortedProofArray = sortedPoofArray
      }
      if (this.form.ownership_type) {
        this.sorted_company_items = this.companyItems.filter(item => {
          if (includes(item.type, this.form.ownership_type)) {
            return item
          }
        })
        let itemArray = []
        itemArray = this.companyArray.filter(item => {
          if (includes(item.type, this.form.ownership_type)) {
            if (item.required && isUndefined(item.require)) {
              return !includes(item.text, 'REVISED')
            } else {
              if (this.setData.attachments) {
                let fileItem = this.setData.attachments.find(a => a.name === item.text)
                if (!isUndefined(fileItem)) {
                  return item
                } else {
                  return (!includes(item.text, 'REVISED') && isUndefined(item.require)) || (includes(item.text, 'REVISED') && !isUndefined(item.require))
                }
              } else {
                return !includes(item.text, 'REVISED')
              }
            }
          }
        })
        // check if return data has revised files
        let vm = this
        let sortedCompanys = []
        forEach(itemArray, function(val) {
          if (vm.setData.attachments) {
            let sortItem = vm.setData.attachments.find(a => a.name === val.text)
            sortedCompanys.push({
              ...omit(val, 'required'),
              required: !isUndefined(sortItem) ? true : false
            })
            if (!isUndefined(val.require)) {
              vm.setFileItem[val.require] = !isUndefined(sortItem) ? true : false
              vm.viewFiles[val.view] = !isUndefined(sortItem) ? true : false
            }
          } else {
            sortedCompanys.push(val)
          }
        })
        this.sortedCompanyArray = sortedCompanys
      }
    },
    setApproval () {
      if (!this.isApplicant) {
        if (!isUndefined(this.setData.approve)) {
          if (this.setData.approve.pre === 'mdi-file-check') {
            this.isApproved = true
          } else {
            if (!isEmpty(this.setData.checklist) && !isNull(this.setData.recommendation)) {
              this.isApproved = false
            } else {
              this.isApproved = true
            }
          }
        } else {
          if (!isEmpty(this.setData.checklist) && !isNull(this.setData.recommendation)) {
            this.isApproved = false
          } else {
            this.isApproved = true
          }
        }
      }
      
    },
    setAuthData () {
      this.setApproval()
      this.sorted_auth_items = this.authorizationItems.filter(item => item.type === this.clientType)
  
      // set all fetched data
      this.form = this.setData
  
      let items = []
      let prcItem = []
      if (this.setData.attachment) {
        if (this.setData.attachment.file_upload) {
          this.isViewFile = true
          if (this.setFileItem) {
            let hasPrc = this.setFileItem.find(item => item.name === String(this.setData.attachment.file_name))
            if (isUndefined(hasPrc)) {
              let fileToUpload = new File([this.setData.attachment.file_upload], `${this.form.file_name}`, {
                type: "application/pdf", // this should be from your string split of the filename to check the file upload type.
                lastModified: new Date(),
              })
              items.push({
                file_name: this.form.file_name,
                file_upload: fileToUpload,
                name: this.form.name
              })
              this.SET_PRC_FILES(uniq(items))
  
              if (this.set_prc_item.length < 1) {
                prcItem.push({
                  type: 'representative',
                  text: 'PRC ID and PTR (recent) with 3 signature specimen',
                  key: 'file_upload',
                  note: 'file_upload_note',
                  format_link: ''
                })
                this.set_prc_item = uniq(prcItem)
              }
            }
          } else {
            let fileToUpload = new File([this.setData.attachment.file_upload], `${this.form.file_name}`, {
                type: "application/pdf", // this should be from your string split of the filename to check the file upload type.
                lastModified: new Date(),
              })
              items.push({
                file_name: this.form.file_name,
                file_upload: fileToUpload,
                name: this.form.name,
              })
              this.SET_PRC_FILES(uniq(items))
  
              prcItem.push({
                type: 'representative',
                text: 'PRC ID and PTR (recent) with 3 signature specimen',
                key: 'file_upload',
                note: 'file_upload_note',
                format_link: ''
              })
              this.set_prc_item = uniq(prcItem)
          }
        } else {
          this.isViewFile = false
        }
      } else {
        if (this.set_prc_item.length < 1) {
          prcItem.push({
            type: 'representative',
            text: 'PRC ID and PTR (recent) with 3 signature specimen',
            key: 'file_upload',
            note: 'file_upload_note',
            format_link: ''
          })
          this.set_prc_item = uniq(prcItem)
        }
      }
      if (this.setData.attachments) {
        let hasRevisedPrc = this.setData.attachments.find(item => item.name === 'REVISED: PRC ID and PTR (recent) with 3 signature specimen')
        if (!isUndefined(hasRevisedPrc)) {
          this.isRevisedViewFile = true
        } else {
          this.isRevisedViewFile = false
        }
      }
    }
  },
  created () {
    this.setAuthData()
  },
  mounted () {
  	this.SET_FILES([])
    this.setAuthData()
  }
}
