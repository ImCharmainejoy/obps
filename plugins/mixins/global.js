import { mapMutations, mapGetters } from 'vuex'
import { isEmpty, isUndefined, isNull, capitalize, isEqual, trim, includes } from 'lodash'
import { format } from 'date-fns'
export default {
  data () {
    return {
      isMounted: false
    }
  },
  computed: {
    ...mapGetters('user', ['user', 'client_id', 'app_no']),
    hasUser () {
      return !isEmpty(this.user) && this.isToken
    },
    userClientId () {
      if (this.user) {
        if (this.user.client) {
          return this.user.client.id
        } else if (this.user.user) {
          if (this.user.user.client) {
            return this.user.user.client.id
          } else {
            if (process.client) {
              let clientId =  JSON.parse(localStorage.vuex).user.user.client
              if (clientId) {
                return clientId.id
              } else {
                return this.client_id
              }
            }
          }
        } else {
          if (process.client) {
            let clientId =  JSON.parse(localStorage.vuex).user.user.client
            if (clientId) {
              return clientId.id
            } else {
              return this.client_id
            }
          }
        }
      } else {
        if (process.client) {
          let clientId =  JSON.parse(localStorage.vuex).user.user.client
          if (clientId) {
            return clientId.id
          } else {
            return this.client_id
          }
        }
      }
    },
    userClientContact () {
      if (this.user) {
        if (this.user.client) {
          return this.user.client.contact
        } else if (this.user.user) {
          if (this.user.user.client) {
            return this.user.user.client.contact
          } else {
            if (process.client) {
              let clientId =  JSON.parse(localStorage.vuex).user.user.client
              if (clientId) {
                return clientId.contact
              } else {
                return ''
              }
            }
          }
        } else {
          if (process.client) {
            let clientId =  JSON.parse(localStorage.vuex).user.user.client
            if (clientId) {
              return clientId.contact
            } else {
              return ''
            }
          }
        }
      } else {
        if (process.client) {
          let clientId =  JSON.parse(localStorage.vuex).user.user.client
          if (clientId) {
            return clientId.contact
          } else {
            return ''
          }
        }
      }
    },
    isToken () {
      const token = localStorage.getItem('token')
      if (!token) {
        return false
      } else {
        return true
      }
    },
    routeName () {
      return this.$nuxt._route.name
    },
    roleId () {
      if (process.client) {
        return Number(JSON.parse(localStorage.vuex).user.user.user.role_id)
      } else {
        return null
      }
    },
    appNo () {
      if (process.client) {
        let item = JSON.parse(localStorage.vuex).user.app_no
        return item
      } else {
        return this.app_no
      }
    },
    hasTHeader () {
      if (this.xsMobile) {
        return false
      } else {
        return true
      }
    },
    evaluatorRole () {
      if (this.roleId === 10) {
        return 'geodetic'
      } else if (this.roleId === 11) {
        return 'architect'
      } else if (this.roleId === 12) {
        return 'civil'
      } else if (this.roleId === 13) {
        return 'sanitary_plumbing'
      } else if (this.roleId === 14) {
        return 'electrical'
      } else if (this.roleId === 15) {
        return 'electronics'
      } else if (this.roleId === 16) {
        return 'mechanical'
      } else {
        return ''
      }
    },
    evaluatorRoleName () {
      if (this.roleId === 10) {
        return 'Geodetic Engr.'
      } else if (this.roleId === 11) {
        return 'Architect'
      } else if (this.roleId === 12) {
        return 'Civil / Structural Engr.'
      } else if (this.roleId === 13) {
        return 'Sanitary Engr.'
      } else if (this.roleId === 14) {
        return 'Electrical Engr.'
      } else if (this.roleId === 15) {
        return 'Electronics Engr.'
      } else if (this.roleId === 16) {
        return 'Mechanical Engr.'
      } else {
        return ''
      }
    },
    UserEvaluator () {
      if (this.roleId === 10) {
        return 'LINE and GRADE Evaluation'
      } else if (this.roleId === 11) {
        return 'ARCHITECTURAL/ACCESSIBILITY Evaluation'
      } else if (this.roleId === 12) {
        return 'CIVIL/STRUCTURAL Evaluation'
      } else if (this.roleId === 13) {
        return 'PLUMBING/SANITARY Evaluation'
      } else if (this.roleId === 14) {
        return 'ELECTRICAL Evaluation'
      } else if (this.roleId === 15) {
        return 'ELECTRONICS Evaluation'
      } else if (this.roleId === 16) {
        return 'MECHANICAL Evaluation'
      } else if (this.roleId === 18) {
        return 'FIRE MARSHALL'
      } else {
        return 'BUILDING OFFICIAL Evaluation'
      }
    },
    roleName () {
      if (!isUndefined(this.user)) {
        if (!isUndefined(this.user.user)) {
          return trim(this.user.role.role)
        } else {
          return ''
        }
      } else {
        return ''
      }
    },
    adminRole () {
      if (!isUndefined(this.user)) {
        if (!isUndefined(this.user.user)) {
          return Number(this.user.user.role_id) === 1
        } else {
          return false
        }
      } else {
        return false
      }
    },
    isBldgDisabled () {
      let clientId =  JSON.parse(localStorage.vuex).user.user.client
      if (clientId) {
        return false
      } else {
        return true
      }
    },
    appName () {
      return this.$nuxt._route.params.name.split('/')[0]
    },
    clientId () {
      if (this.roleId === 3) {
        return this.userClientId
      } else {
        return this.client_id
      }
    },
    routeName () {
      return this.$nuxt._route.name.split('-')[2]
    },
    paramName () {
      return capitalize(this.$nuxt._route.params.name)
    },
    mobile () {
      return this.isMounted && ['xs', 'sm'].includes(this.$vuetify.breakpoint.name)
    },
    xsMobile () {
      return this.isMounted && ['xs'].includes(this.$vuetify.breakpoint.name)
    },
    xlDevice () {
      return this.isMounted && ['xl'].includes(this.$vuetify.breakpoint.name)
    },
    lgDevice () {
      return this.isMounted && ['lg'].includes(this.$vuetify.breakpoint.name)
    },
    tabDevice () {
      return this.isMounted && ['sm', 'md'].includes(this.$vuetify.breakpoint.name)
    },
    mdAndUpDevices () {
      return this.isMounted && ['md', 'lg', 'xl'].includes(this.$vuetify.breakpoint.name)
    },
    smAndUpDevices () {
      return this.isMounted && ['sm', 'md', 'lg', 'xl'].includes(this.$vuetify.breakpoint.name)
    },
    breakpoint () {
      return this.isMounted ? this.$vuetify.breakpoint : { smAndUp: true, xsOnly: undefined }//Any constant deault value would do here
    }
  },
  methods: {
    ...mapMutations('events', ['RESET_EVENT_STATE']),
    ...mapMutations('user', ['RESET_USER_STATE']),
    textIncludes (val, text) {
      return includes(text, val)
    },
    getActive (val, idx) {
      return {
        'active': Number(val) === Number(idx),
        'white--text': Number(val) === Number(idx),
        'menu': Number(val) === Number(idx)
      }
    },
    formatDateTime (val) {
      return format(new Date(val), 'MMM. D, YYYY @ hh:mm:ss a')
    },
    sortSkipped (value, currPage, pageCount) {
      if (isEqual(value, 0)) {
        return value
      } else {
        return (value * currPage) - pageCount
      }
    },
    newLink (payload) {
      if (process.client) {
        window.open(payload, '_blank')
      }
    },
    setFile (val) {
      if (process.env.VUE_API_URL) {
        if (val) return `${process.env.VUE_API_URL}storage/${val}`
        return  ''
      } else {
        return ''
      }
    },
    getTopPage () {
      window.scrollTo(0, 0)
    },
    getBottomPage () {
      window.scrollTo(0,document.body.scrollHeight)
    },
    getIndex (index, activeItem) {
      return {
        'active': index === activeItem,
        'primary-text-color': index === activeItem
      }
    },
    getEvalIndex (index, activeItem) {
      return {
        'active': index === activeItem,
        'tabEvalColor': index !== activeItem
      }
    },
    getColor (val) {
      if (val === 'mdi-check') {
        return 'green'
      } else if (val === 'mdi-clipboard-clock-outline') {
        return 'orange'
      } else if (val === 'mdi-file-alert') {
        return '#EE7302'
      } else {
        return 'mdi-close'
      }
    },
    goTo (name) {
      this.$router.push({ name: name })
    },
    Logout () {
      this.RESET_USER_STATE()
      this.RESET_EVENT_STATE()
      setTimeout(() => {
        window.localStorage.clear()
      }, 1000)
    },
    wordCount (val) {
      if (!isEmpty(val) || !isUndefined(val)) {
        const lowerLabel = val.toLowerCase()
        const splitLabel = lowerLabel.split(' ')
        return splitLabel.length
      } else {
        return 0
      }
    },
    lastTwoWords (val) {
      if (!isEmpty(val) || !isUndefined(val)) {
        let replaceItem = val.replaceAll('_', ' ')
        const splitLabel = replaceItem.split(' ')
        let lastWord = splitLabel[splitLabel.length -1] ? this.textCapitalize(splitLabel[splitLabel.length -1]) : ''
        let SecondToLastWord = splitLabel[splitLabel.length -2] ? this.textCapitalize(splitLabel[splitLabel.length -2]) : ''
        return `${SecondToLastWord} ${lastWord}`
      } else {
        return ''
      }
    },
    textCapitalize (value) {
      if (!value) return ''
      value = capitalize(value)
      let str = value.split(' ')
       for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
      }
      return str.join(' ')
    },
    initialLetter (item) {
      if (!isNull(item) && !isUndefined(item)) {
        const splitName = item.split(' ')
        const initial = splitName.map((word) => {
          if (word) {
            return word[0].toUpperCase()
          } else {
            return word
          }
        })
        const joinName = initial.join('')
        if (isUndefined(joinName)) {
          const joinName = initial.join(' ')
          const replaceName = joinName.replaceAll(' ', '')
          return `${replaceName}`
        } else {
          return `${joinName}`
        }
      } else {
        return ''
      }
    }
  },
  mounted () {
    this.isMounted = true
  }
}
