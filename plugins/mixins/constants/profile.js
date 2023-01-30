import { mapGetters } from 'vuex'
import { isEmpty, isUndefined, isNull } from 'lodash'
export default {
  computed: {
    ...mapGetters('user', ['user']),
    name_initials () {
      if (!isEmpty(this.user)) {
        if (!isUndefined(this.user.client)) {
          return this.user.client ? `${this.user.client.first_name} ${this.user.client.last_name}` : this.user.user.name
        } else {
          return this.user.user.client ? this.user.user.client.name : this.user.user.name
        }
      } else {
        return 'Offline User'
      }
    },
    name () {
      if (!isEmpty(this.user)) {
        if (!isUndefined(this.user.client)) {
          return this.user.client ? `${this.user.client.first_name} ${this.user.client.middle_name ? this.initialLetter(this.user.client.middle_name) : ''}${this.user.client.middle_name ? '.' : ''} ${this.user.client.last_name} ${ !isNull(this.user.client.suffix) ? this.user.client.suffix : ''}` : this.user.user.name
        } else {
          return this.user.user.client ? this.user.user.client.name : this.user.user.name
        }
      } else {
        return 'Offline User'
      }
    },
    email () {
      if (!isEmpty(this.user)) {
        return this.user.user ? this.user.user.email : 'offline@gmail.com'
      }
    },
    role_name () {
      if (!isEmpty(this.user)) {
        return this.user.user.role ? this.user.user.role.role : ''
      }
    },
    applicant_role_type () {
      if (!isEmpty(this.user)) {
        if (this.user.user.role) {
          if (this.user.user.role.role === 'Applicant') {
            return this.user.client.client_type
          }
        }
      }
    }
  }
}
