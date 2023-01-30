export default {
  data () {
    return {
      evaluations: [
        { title: 'Subject for Resubmission', icon: 'mdi-file-alert' , color: '#EE7302' },
        { title: 'Approved', icon: 'mdi-file-check' , color: '#4EA466'},
        { title: 'Disapproved', icon: 'mdi-file-remove', color: '#FF0000'}
      ],
      evaluators: [
        { type: 'geodetic', title: 'GEODETIC ENGINEER', color: '#795548', flex: 'xs12 sm6 md6 lg4' },
        { type: 'architect', title: 'ARCHITECT' , color: '#4CAF50', flex: 'xs12 sm6 md6 lg4'},
        { type: 'civil', title: 'CIVIL / STRUCTURAL ENGR.', color: '#1976D2', flex: 'xs12 sm6 md6 lg4'},
        { type: 'sanitary_plumbing', title: 'SANITARY ENGR.', color: '#FF9800', flex: 'xs12 sm6 md6 lg4'},
        { type: 'electrical', title: 'PROF. ELECTRICAL ENGR.', color: '#E91E63', flex: 'xs12 sm6 md6 lg4'},
        { type: 'electronics', title: 'ELECTRONICS & COMMUNICATIONS ENGR.', color: '#9C27B0', flex: 'xs12 sm6 md6 lg4'},
        { type: 'mechanical', title: 'PRO. MECHANICAL ENGR.', color: '#607D8B', flex: 'xs12 sm6 md6 lg4'},
        { type: 'fire', title: 'FIRE MARSHALL', color: 'red darken-1', flex: 'xs12 sm6 md6 lg4'}
      ]
    }
  }
}
