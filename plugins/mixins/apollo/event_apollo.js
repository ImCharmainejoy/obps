/* eslint-disable */
/*
  NOTE: to resolve the first the import because we will need it
  to methods
*/
import {
  FETCH_EVENTS,
  CREATE_UPDATE_EVENT,
  DELETE_EVENT
} from '~/plugins/mixins/queries/events'

export default {
  methods: {
    async CREATE (mutation, variables, cachemutation) {
      return new Promise((resolve, reject) => {
        this.$apollo.mutate({
          mutation: mutation,
          variables: variables,
            update: (store, { data: { CreateUpdateEvent } }) => {
            // i update nimo ang cache murag murations sa vuex
            const todoQuery = {
              query: cachemutation
            }
              console.log(CreateUpdateEvent)
            let payload = {
              node: CreateUpdateEvent.event
            }
            const todoData = store.readQuery(todoQuery)
            todoData.all_events.edges.push(payload)
            store.writeQuery({ ...todoQuery, data: payload })
          }
        }).then(data => {
          resolve(data.data)
        }).catch(data => {
          reject(data)
        })
      })
    }
  }
}
