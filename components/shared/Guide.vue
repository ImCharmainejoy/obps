<template>
  <v-card tile :class="$vuetify.breakpoint.lgAndUp ? 'mx-2 mt-2' : 'mt-2'">
    <v-card flat tile color="#7C7C7C">
      <p :style="fontStyle" class="text-center py-3 white--text font-weight-bold">{{ title }}</p>
    </v-card>
    <v-layout wrap class="mx-2">
      <v-flex xs12
        v-for="(item, index) in items" :key="index">
        <v-layout wrap align-top>
          <v-flex xs12 md2>
            <v-btn
              fab
              depressed
              class="mx-2 primary-bg-color white--text headline"
              v-if="item.title !== 'Pre-Evaluation'">
            {{ haspreEval('Pre-Evaluation') ? index : index + 1 }}</v-btn>
            <span v-if="mobile" style="font-weight: 900;" class="ml-1 text-justify title" color="#555555">{{ item.title }}</span>
          </v-flex>
          <v-flex xs12 md9>
            <span  v-if="$vuetify.breakpoint.mdAndUp" style="font-weight: 900;" class="ml-1 text-justify title" color="#555555">{{ item.title }}</span>
            <ol type="A">
              <li class="text-justify" v-for="(itemList, indexList) in item.lists" :key="indexList">
                <span class="body-2" style="letter-spacing: 0.1px !important; word-break: break-word !important;">{{ itemList.title }}</span>
                <v-layout wrap>
                  <v-flex
                    style="font-size: 11px !important;"
                    v-for="(itemInnerlists, indexInnerlists) in itemList.innerlists" :key="indexInnerlists">
                    {{ indexInnerlists + 1}}) {{ itemInnerlists.title}}
                  </v-flex>
                </v-layout>
              </li>
            </ol>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
  import Global from '~/plugins/mixins/global'
  import { isUndefined } from 'lodash'
  export default {
    mixins: [
      Global
    ],
    props: {
      title: String,
      items: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    computed: {
      fontStyle () {
        if (this.$vuetify.breakpoint.lgAndUp) {
          return 'font-size: 16px !important;'
        } else {
          return 'font-size: 12px !important;'
        }
      }
    },
    methods: {
      haspreEval (title) {
      	let val = this.items.find(item => item.title === String(title))
      	if (isUndefined(val)) {
      	  return false
      	} else {
      	  return true
      	}
      }
    }
  }
</script>
