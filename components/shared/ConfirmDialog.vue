<template>
  <v-dialog
    :value="dialog"
    persistent
    :scrollable="hasDocuments ? true : false"
    :max-width="dialogWidth ? dialogWidth : 420"
  >
    <v-card class="pb-3">
      <v-card tile flat class="py-1" color="primary-bg-color">
      </v-card>
      <v-card-title class="text-h5">
        <v-layout wrap justify-center align-center>
          <v-icon x-large
          :color="color"
          class="text-center justify-center"
          >{{icon ? icon : 'mdi-check-circle-outline'}}</v-icon>
        </v-layout>
      </v-card-title>
      <v-card-text class="text-center break-word">{{ message }}</v-card-text>
      <v-card-text
        :style="cardStyle"
        v-if="hasDocuments">
        <v-layout wrap>
          <v-flex :class="item.flex"
            v-for="(item, index) in docsItems" :key="index">
            <span class="font-weight-regular" v-show="item.title">{{ item.title }}</span>
            <span class="font-weight-regular"v-show="item.file_name">The <span class="font-weight-bold">{{ item.file_name }}</span> file have been changed as of <span class="font-weight-bold">{{ item.date }}.</span></span>
            <span class="font-weight-regular"v-show="item.email">Email sent to <span class="font-weight-bold">{{ item.profession }}</span> with email address <span class="font-weight-bold">{{ item.email }}.</span></span>
            <v-layout wrap class="ml-3">
              <v-flex :class="item.flex"
                v-for="(itemList, indexList) in item.items" :key="indexList">
                <small class="subtitle-2 font-weight-bold">{{ indexList + 1 }}. {{ itemList.text }}</small>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          v-if="hasExport"
          class="primary-bg-color white--text"
          depressed
          :href="link"
          target="_blank"
          @click="newLink(link)"
        >
          Download Form<v-icon right>mdi-tray-arrow-down</v-icon>
        </v-btn>
        <v-btn
          v-if="haschooseTitle"
          class="primary-text-color"
          text
          :outlined="isOutlined"
          @click="$emit('choose')"
        >
          {{ openTitle }}
        </v-btn>
        <v-btn
          v-if="hasClose"
          class="primary-text-color"
          text
          @click="$emit('close')"
        >
          Close
        </v-btn>
        <v-btn
          v-if="hasConfirm"
          :class="confirmClass ? confirmClass : 'white--text primary-bg-color'"
          depressed
          :outlined="isOutlined"
          :width="btnWidth ? btnWidth : ''"
          @click="$emit('proceed')"
        >
          {{ isConfirm ? 'Confirm' : 'Proceed' }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
  export default {
  	props: {
      dialog: {
        type: Boolean,
        default: false
      },
      message: String,
      color: String,
      hasClose: {
        type: Boolean,
        default: false
      },
      isConfirm: {
        type: Boolean,
        default: false
      },
      hasConfirm: {
        type: Boolean,
        default: false
      },
      dialogWidth: {
        type: Number,
        default: 400
      },
      hasExport: {
        type: Boolean,
        default: false
      },
      link: String,
      isOutlined: {
        type: Boolean,
        default: false
      },
      btnWidth: Number,
      hasDocuments: {
        type: Boolean,
        default: false
      },
      docsItems: {
        type: [Array, Object]
      },
      haschooseTitle: {
        type: Boolean,
        default: false
      },
      openTitle: String,
      icon: String,
      confirmClass: String,
      count: Number
  	},
    methods: {
      newLink (payload) {
        if (process.client) {
          window.open(payload, '_blank')
        }
      }
    },
    computed: {
      cardStyle () {
        if (this.count > 6) {
          return 'height: 500px'
        } else {
          return 'height: 150px'
        }
      }
    }
  }
</script>
