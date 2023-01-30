import { format } from 'date-fns'
import Vue from 'vue'

Vue.filter('monthdayyear', date => format(new Date(date), 'MMMM D, YYYY'))

Vue.filter('monthyear', date => format(new Date(date), 'MMMM YYYY'))

Vue.filter('monthday', date => format(new Date(date), 'MMM Do'))

Vue.filter('datetime', date => format(new Date(date), 'MMMM D, YYYY HH:mm A'))
