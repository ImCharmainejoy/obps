import { isUndefined, isNull, isEmpty } from 'lodash'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      guidesList: [
        {
          title: 'Pre-Evaluation',
          lists: [
            {
              title: 'Fill in and upload the following required forms:',
              innerlists: [
                {
                  title: 'Pre-Evaluation Form'
                },
                {
                  title: 'Site Development Plan'
                },
                {
                  title: 'Floor Plans'
                },
                {
                  title: '4-Elevations'
                },
                {
                  title: '2-Sections'
                },
                {
                  title: 'Perspctive'
                },
                {
                  title: 'Sketch Plan'
                },
                {
                  title: 'Certified True Copy of Land Title '
                }
              ]
            },
            {
              title: 'Wait for an SMS for your pre-evaluation. Your pre-evaluation approval usually takes 3 days.',
              innerlists: [
                {
                  title: 'If the recommendation applies, reupload and resubmit as advised. Your pre-evaluation approval resets to 3 days.'
                }
              ]
            }
          ]
        },
        {
          title: 'Proceed Application',
          lists: [
            {
              title: 'Complete the following mandatory sections:',
              innerlists: [
                {
                  title: 'Unified  Application for Building Permit'
                },
                {
                  title: 'Application for Location Clearance'
                },
                {
                  title: 'Plumbing Permit'
                },
                {
                  title: 'Mechanical Permit'
                },
                {
                  title: 'Electronics Permit'
                },
                {
                  title: 'Sanitary Permit'
                }
              ]
            }
          ]
        },
        {
          title: 'Resume Application',
          lists: [
            {
              title: 'Upload all pre-requisite and technical documents defined by the OCBO officials during pre-evaluation that must be signed, sealed, and notarized.'
            },
            {
              title: 'Wait for an SMS with your evaluation results and check your online application on a regular basis. Your evaluation approval usually takes 7 days. The evaluation starts after the submission of documents during the visit.',
              innerlists: [
                {
                  title: 'If the recommendation applies, reupload and resubmit as advised. Your evaluation approval resets to 7 days.'
                }
              ]
            }
          ]
        },
        {
          title: 'Schedule a visit',
          lists: [
            {
              title: 'This will be enabled after all the evaluators finish the evaluation  and give their remarks as well.'
            },
            {
              title: 'On the scheduled visit, validate your online application and bring your signed, sealed, and notarized documents for validation and do payment processing.'
            }
          ]
        }
      ],
      occupandyHeader: [
        {
          text: 'Application No.',
          align: 'start',
          sortable: false,
          value: 'application_no',
        },
        { 
          align: 'center',
          text: 'Name of Owner', value: 'owners_name', sortable: false},
        { 
          align: 'center',
          text: 'Project Location', value: 'project_location', sortable: false},
        { 
          align: 'center',
          text: 'Evaluation', value: 'evaluator', sortable: false
        },
        { 
          align: 'center',
          text: '', value: 'actions', sortable: false,
        }
      ]
    }
  },
  computed: {
    ...mapGetters('user', ['user']),
    applicant_role_type () {
      if (!isEmpty(this.user)) {
        if (this.user.user.role) {
          if (this.user.user.role.role === 'Applicant') {
            return this.user.client.client_type
          }
        }
      }
    },
    roleId () {
      if (process.client) {
        return Number(JSON.parse(localStorage.vuex).user.user.user.role_id)
      } else {
        return null
      }
    },
    dateTimeApproved () {
      if (this.roleId === 2 || this.roleId === 1) {
        return 'Date & Time Approved/Disapproved by last Evaluator'
      } else if (this.roleId === 17) {
        return 'Date & Time of Issuance Status'
      } else {
        return `Date & Time Processed by ${this.evaluatorRoleName}`
      }
    },
    headers () {
      if (this.$vuetify.breakpoint.smAndUp) {
        if (this.applicant_role_type === 'owner') {
          return [
            {
              title: 'Application No.',
              text: '',
              align: 'center',
              sortable: false,
              value: 'application_no',
            },
            { title: 'Project Location',
              align: 'center',
              text: '',
              value: 'project_location',
              sortable: false
            },
            { title: 'Pre-Evaluation',
              align: 'center',
              text: '',
              value: 'pre',
              sortable: false
            },
            { title: 'Actions',
              align: 'center',
              text: '',
              value: 'pre_actions',
              sortable: false
            },
            { title: '',
              align: 'center',
              text: '',
              value: 'geodetic',
              sortable: false
            },
            { title: '',
              align: 'center',
              text: '',
              value: 'architect',
              sortable: false
            },
            { title: '',
              align: 'center',
              text: '',
              value: 'structural',
              sortable: false
            },
            { title: 'Evaluation',
              align: 'center',
              text: '',
              value: 'sanitary',
              sortable: false
            },
            { title: '',
              align: 'center',
              text: '',
              value: 'electrical',
              sortable: false
            },
            { title: '',
              align: 'center',
              text: '',
              value: 'electronics',
              sortable: false
            },
            { title: '',
              align: 'center',
              text: '',
              value: 'mechanical',
              sortable: false
            },

            { title: '',
              align: 'center',
              text: '',
              value: 'fire',
              sortable: false
            },
            { title: 'Actions',
              align: 'center',
              text: '',
              value: 'actions',
              sortable: false
            }
          ]
        } else {
          return [
            {
              title: 'Application No.',
              text: '',
              align: 'center',
              sortable: false,
              value: 'application_no',
            },
            { title: 'Name of Owner',
              text: '',
              align: 'left',
              value: 'owners_name',
              sortable: false
            },
            { title: 'Project Location',
              align: 'center',
              text: '',
              value: 'project_location',
              sortable: false
            },
            { title: 'Pre-Evaluation',
              align: 'center',
              text: '',
              value: 'pre',
              sortable: false
            },
            { title: 'Actions',
              align: 'center',
              text: '',
              value: 'pre_actions',
              sortable: false
            },
            { title: '',
              align: 'center',
              text: '',
              value: 'geodetic',
              sortable: false
            },
            { title: '',
              align: 'center',
              text: '',
              value: 'architect',
              sortable: false
            },
            { title: '',
              align: 'center',
              text: '',
              value: 'structural',
              sortable: false
            },
            { title: 'Evaluation',
              align: 'center',
              text: '',
              value: 'sanitary',
              sortable: false
            },
            { title: '',
              align: 'center',
              text: '',
              value: 'electrical',
              sortable: false
            },
            { title: '',
              align: 'center',
              text: '',
              value: 'electronics',
              sortable: false
            },
            { title: '',
              align: 'center',
              text: '',
              value: 'mechanical',
              sortable: false
            },
            { title: '',
              align: 'center',
              text: '',
              value: 'fire',
              sortable: false
            },
            { title: 'Actions',
              align: 'center',
              text: '',
              value: 'actions',
              sortable: false
            }
          ]
        }
      } else {
        return [
          {
            text: 'Application No.',
            align: 'start',
            sortable: false,
            value: 'application_no',
          },
          { 
            align: 'center',
            text: 'Name of Owner',
            value: 'owners_name',
            sortable: false
          },
          { 
            align: 'center',
            text: 'Project Location',
            value: 'project_location',
            sortable: false
          },
          { 
            align: 'center',
            text: 'Pre-Evaluation (ARCHITECH/ZONING PERSONNEL)',
            value: 'pre',
            sortable: false
          },
          { 
            align: 'center',
            text: 'Actions',
            value: 'pre_actions',
            sortable: false
          },
          { 
            align: 'center',
            text: 'Evaluation(GEODETIC ENGINEER)',
            value: 'geodetic',
            sortable: false
          },
          { 
            align: 'center',
            text: 'Evaluation(ARCHITECH)',
            value: 'architect',
            sortable: false
          },
          { 
            align: 'center',
            text: 'Evaluation(CIVIL / STRUCTURAL ENGR.)',
            value: 'structural',
            sortable: false
          },
          { 
            align: 'center',
            text: 'Evaluation(SANITARY ENGR.)',
            value: 'sanitary',
            sortable: false
          },
          { 
            align: 'center',
            text: 'Evaluation(PROF. ELECTRICAL ENGR.)',
            value: 'electrical',
            sortable: false
          },
          { 
            align: 'center',
            text: 'Evaluation(ELECTRONICS & COMMUNICATIONS ENGR.)',
            value: 'electronics',
            sortable: false
          },
          { 
            align: 'center',
            text: 'Evaluation(PRO. MECHANICAL ENGR.)',
            value: 'mechanical',
            sortable: false
          },
          { 
            align: 'center',
            text: 'Evaluation(FIRE MARSHALL)',
            value: 'fire',
            sortable: false
          },
          { 
            align: 'center',
            text: 'Actions',
            value: 'actions',
            sortable: false
          }
        ]
      }
    },
    evalHeaders () {
      if (this.$vuetify.breakpoint.smAndUp) {
        if (this.roleId === 17 || this.roleId === 2) {
          return [
            {
              title: 'Application No.',
              text: '',
              align: 'start',
              sortable: false,
              value: 'application_no',
              class: 'white--text',
              title: 'Issuance Status',
              icon: 'mdi-list-status',
              field: 'status'
            },
            { title: 'Name of Owner',
              text: '',
              align: 'left',
              value: 'owners_name',
              class: 'white--text'
            },
            { title: 'Project Location',
              text: '',
              align: 'center',
              value: 'project_location',
              class: 'white--text'
            },
            { title: 'Date & Time Received',
              text: '',
              align: 'center',
              value: 'date_time_received',
              class: 'white--text'
            },
            { title: `${this.dateTimeApproved}`,
              text: '',
              align: 'center',
              value: 'date_time_processed',
              class: 'white--text'
            },
            { title: '',
              align: 'center',
              text: '',
              value: 'geodetic',
              sortable: false
            },
            { title: '',
              align: 'center',
              text: '',
              value: 'architect',
              sortable: false
            },
            { title: '',
              align: 'center',
              text: '',
              value: 'structural',
              sortable: false
            },
            { title: 'Evaluation',
              align: 'center',
              text: '',
              value: 'sanitary',
              sortable: false
            },
            { title: '',
              align: 'center',
              text: '',
              value: 'electrical',
              sortable: false
            },
            { title: '',
              align: 'center',
              text: '',
              value: 'electronics',
              sortable: false
            },
            { title: '',
              align: 'center',
              text: '',
              value: 'mechanical',
              sortable: false
            },
            { title: '',
              align: 'center',
              text: '',
              value: 'fire',
              sortable: false
            },
            { title: 'Issuance Status',
              text: '',
              align: 'center',
              value: 'issuance',
              class: 'white--text'
            },
            { title: 'Actions',
              text: '',
              align: 'center',
              value: 'view',
              class: 'white--text'
            }
          ]
        } else {
          return [
            {
              title: 'Application No.',
              text: '',
              align: 'start',
              sortable: false,
              value: 'application_no',
              class: 'white--text'
            },
            { title: 'Name of Owner',
              text: '',
              align: 'left',
              value: 'owners_name',
              class: 'white--text'
            },
            { title: 'Project Location',
              text: '',
              align: 'center',
              value: 'project_location',
              class: 'white--text'
            },
            { title: 'Date & Time Received',
              text: '',
              align: 'center',
              value: 'date_time_received',
              class: 'white--text'
            },
            { title: `${this.dateTimeApproved}`,
              text: '',
              align: 'center',
              value: 'date_time_processed',
              class: 'white--text'
            },
            { title: 'Remarks',
              text: '',
              align: 'center',
              value: 'remark_val',
              class: 'white--text'
            },
            { title: '',
              align: 'center',
              text: '',
              value: 'geodetic',
              sortable: false
            },
            { title: '',
              align: 'center',
              text: '',
              value: 'architect',
              sortable: false
            },
            { title: '',
              align: 'center',
              text: '',
              value: 'structural',
              sortable: false
            },
            { title: 'Evaluation',
              align: 'center',
              text: '',
              value: 'sanitary',
              sortable: false
            },
            { title: '',
              align: 'center',
              text: '',
              value: 'electrical',
              sortable: false
            },
            { title: '',
              align: 'center',
              text: '',
              value: 'electronics',
              sortable: false
            },
            { title: '',
              align: 'center',
              text: '',
              value: 'mechanical',
              sortable: false
            },
            { title: '',
              align: 'center',
              text: '',
              value: 'fire',
              sortable: false
            },
            { title: 'Actions',
              text: '',
              align: 'center',
              value: 'view',
              class: 'white--text'
            }
          ]
        }
      } else {
        return [
          {
            text: 'Application No.',
            align: 'start',
            sortable: false,
            value: 'application_no',
            class: 'table-header-bg white--text',
            title: 'Issuance Status',
            icon: 'mdi-list-status',
            field: 'status'
          },
          { text: 'Name of Owner',
            align: 'left',
            value: 'owners_name',
            class: 'table-header-bg white--text'
          },
          { text: 'Project Location',
            align: 'center',
            value: 'project_location',
            class: 'table-header-bg white--text'
          },
          { text: 'Date & Time Received',
            align: 'center',
            value: 'date_time_received',
            class: 'table-header-bg white--text'
          },
            { title: `${this.dateTimeApproved}`,
            align: 'center',
            value: 'date_time_processed',
            class: 'table-header-bg white--text'
          },
          { text: 'Findings',
            align: 'center',
            value: 'findings',
            class: 'table-header-bg white--text'
          },
          { text: 'Remarks',
            align: 'center',
            value: 'remark_val',
            class: 'table-header-bg white--text'
          },
          { 
            align: 'center',
            text: 'Evaluation(GEODETIC ENGINEER)',
            value: 'geodetic',
            sortable: false
          },
          { 
            align: 'center',
            text: 'Evaluation(ARCHITECH)',
            value: 'architect',
            sortable: false
          },
          { 
            align: 'center',
            text: 'Evaluation(CIVIL / STRUCTURAL ENGR.)',
            value: 'structural',
            sortable: false
          },
          { 
            align: 'center',
            text: 'Evaluation(SANITARY ENGR.)',
            value: 'sanitary',
            sortable: false
          },
          { 
            align: 'center',
            text: 'Evaluation(PROF. ELECTRICAL ENGR.)',
            value: 'electrical',
            sortable: false
          },
          { 
            align: 'center',
            text: 'Evaluation(ELECTRONICS & COMMUNICATIONS ENGR.)',
            value: 'electronics',
            sortable: false
          },
          { 
            align: 'center',
            text: 'Evaluation(PRO. MECHANICAL ENGR.)',
            value: 'mechanical',
            sortable: false
          },
          { 
            align: 'center',
            text: 'Evaluation(FIRE MARSHALL)',
            value: 'fire',
            sortable: false
          },
          { title: 'Issuance Status',
            text: '',
            align: 'center',
            value: 'issuance',
            class: 'white--text'
          },
          { text: 'Action',
            align: 'center',
            value: 'view',
            class: 'table-header-bg white--text'
          }
        ]
      }
    },
    hasPreEval () {
      let val = this.headers.find(item => item.value === 'pre')
      if (isUndefined(val)) {
        return false
      } else {
        return true
      }
    },
    hasEval () {
      let val = this.headers.find(item => item.value === 'geodetic')
      if (isUndefined(val)) {
        return false
      } else {
        return true
      }
    },
    mobileBreakpoint () {
      return isUndefined(this.breakpoint.xsOnly) ? 0 : 600
    }
  },
  methods: {
    getColor (val) {
      if (val === 'Subject for Resubmission') {
        return '#EE7302'
      } else if (val === 'Approved') {
        return '#4EA466'
      } else if (val === 'Disapproved') {
        return '#FF0000'
      } else {
        return ''
      }
    },
    doApplication(item) {
      if (item.pre_status === 'Approved' && item.evaluation === '') {
        return 'Proceed Application'
      } else if (item.pre_status === 'Approved' && item.evaluation === 'Submitted') {
        return 'Resume Application'
      } else if (item.pre_status === 'Approved' && item.evaluation === 'Recommendation') {
        return 'Resubmit Application'
      } else {
        return 'Download Permit'
      }
    },
    applicationStatus (item) {
      if (item.pre_status === 'Approved' && item.eval_status === '') {
        return 'Proceed Application'
      } else if (item.pre_status === 'Approved' && item.eval_status === 'Resume') {
        return 'Resume Application'
      } else if (item.pre_status === 'Approved' && item.eval_status === 'Resubmit') {
        return 'Resubmit Application'
      } else {
        return 'Download Permit'
      }
    },
    legendStatus (evaluator) {
      if (evaluator === 'Subject for Resubmission') {
        return 'mdi-file-alert'
      } else if (evaluator === 'Approved') {
        return 'mdi-file-check'
      } else {
        return 'mdi-file-remove'
      }
    }
  }
}
