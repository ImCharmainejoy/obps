import { trim, isUndefined } from 'lodash'
export default {
  methods: {
    loginMenus (role) {
      if (trim(role) === 'Superadmin') {
        let hasDashboardItem = this.items.find(item => item.title === 'Dashboard')
        if (isUndefined(hasDashboardItem)) {
          this.items.push({
            title: 'Dashboard',
            icon: 'dashboard',
            name: 'index-admin-dashboard'
          })
        }
        let hasAppItem = this.items.find(item => item.title === 'Application')
        if (isUndefined(hasAppItem)) {
          this.items.push({
            title: 'Application',
            icon: 'mdi-application-settings',
            name: 'index-admin-dashboard',
            itemGroup: []
          })
          let hasEvalItem = this.items[1].itemGroup.find(item => item.title === 'Evaluation')
          if (isUndefined(hasEvalItem)) {
            this.items[1].itemGroup.push({
              icon: 'mdi-clipboard-check-outline',
              title: 'Pre-Evaluation',
              name: 'index-admin-preevaluation'
            },
            {
              icon: 'mdi-domain',
              title: 'Evaluation',
              name: 'index-admin-evaluation'
            })
          }
        }
        let hasItem = this.items.find(item => item.title === 'Settings')
        if (isUndefined(hasItem)) {
          this.items.push({
            title: 'Settings',
            icon: 'mdi-application-cog-outline',
            itemGroup: [{
              icon: 'mdi-account-cog-outline',
              title: 'Manage Accounts',
              name: 'index-admin-manageaccounts'
            },
            {
              icon: 'mdi-account-settings',
              title: 'Manage Roles',
              name: 'index-admin-manageroles'
            },
            {
              icon: 'mdi-calendar-multiple',
              title: 'Manage Schedule',
              name: 'index-admin-manageschedule'
            }]
          })
        }
      }
      if (trim(role) === 'Admin') {
        let hasAppItem = this.items.find(item => item.title === 'Application')
        if (isUndefined(hasAppItem)) {
          this.items.push({
            title: 'Application',
            icon: 'mdi-application-settings',
            name: 'index-admin-dashboard',
            itemGroup: [{
              icon: 'mdi-clipboard-check-outline',
              title: 'Pre-Evaluation',
              name: 'index-admin-preevaluation'
            },
            {
              icon: 'mdi-domain',
              title: 'Evaluation',
              name: 'index-admin-evaluation'
            }]
          })
        }
        let hasItem = this.items.find(item => item.title === 'Settings')
        if (isUndefined(hasItem)) {
          this.items.push({
            title: 'Settings',
            icon: 'mdi-application-cog-outline',
            itemGroup: [{
              icon: 'mdi-account-cog-outline',
              title: 'Manage Accounts',
              name: 'index-admin-manageaccounts'
            },
            {
              icon: 'mdi-calendar-multiple',
              title: 'Manage Schedule',
              name: 'index-admin-manageschedule'
            }]
          })
        }
      }
      if (trim(role) === 'Building Official') {
        let hasAppItem = this.items.find(item => item.title === 'Application')
        if (isUndefined(hasAppItem)) {
          this.items.push({
            title: 'Application',
            icon: 'mdi-application-settings',
            name: 'index-admin-dashboard',
            itemGroup: [{
              icon: 'mdi-clipboard-check-outline',
              title: 'Pre-Evaluation',
              name: 'index-admin-preevaluation'
            },
            {
              icon: 'mdi-domain',
              title: 'Evaluation',
              name: 'index-admin-evaluation'
            }]
          })
        }
      }
      if (trim(role) === 'Pre-Evaluator') {
        let hasAppItem = this.items.find(item => item.title === 'Application')
        if (isUndefined(hasAppItem)) {
          this.items.push({
            icon: 'mdi-clipboard-check-outline',
            title: 'Pre-Evaluation',
            name: 'index-admin-preevaluation'
          })
        }
      }
      if (trim(role) !== 'Superadmin' && trim(role) !== 'Pre-Evaluator' && trim(role) !== 'Admin' && trim(role) !== 'Building Official') {
        let hasAppItem = this.items.find(item => item.title === 'Application')
        if (isUndefined(hasAppItem)) {
          this.items.push({
            icon: 'mdi-domain',
            title: 'Evaluation',
            name: 'index-admin-evaluation'
          })
        }
      }
    }
  }
}