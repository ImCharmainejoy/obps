<template>
  <v-card
    flat
    :loading="!viewFile ? loading : false"
    class="px-2 pb-2"
    :class="textIncludes('REVISED', title) ? 'mb-2 mt-0' : 'mt-2'">
    <v-layout wrap>
      <v-flex xs12>
        <small v-if="errors" class="red--text">{{ errors[0] }}</small>
        <VueFileAgent
          class="mt-2"
          v-if="!viewFile"
          ref="vueFileAgent"
          :theme="theme"
          :multiple="false"
          :deletable="true"
          :meta="true"
          :maxSize="maxSize"
          :accept="'application/pdf'"
          :helpText="helpText"
          :errorText="errorText"
          :disabled="false"
          @select="filesSelected($event)"
          @beforedelete="onBeforeDelete($event)"
          @delete="fileDeleted($event)"
          v-model="fileRecords"
        ></VueFileAgent>

        <v-card outlined
          v-if="viewFile"
          class="mt-2"
          :style="textIncludes('REVISED', title) ? 'border-left: 5px #EE7302 solid;' : 'border-left: 5px #C05A5A solid;'">
          <v-card-actions
            class="ma-0 pa-0"
            v-show="hasRemove">
            <!-- <span class="text-justify mx-2" v-show="!xsMobile">{{ title }}</span> -->
            <v-spacer />
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn
                  v-on="on"
                  large
                  icon
                  depressed
                  class="ma-1 text-right"
                  @click="$emit('remove')"
                  >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </template>
              <span>Remove File</span>
            </v-tooltip>
          </v-card-actions>
          <v-card-actions>
            <v-btn
              fab
              v-show="!xsMobile && !isGridFile"
              depressed
              color="#C05A5A"
              class="ma-1 white--text"
              >
              <v-icon>mdi-file-pdf-box</v-icon>
            </v-btn>
            <v-spacer />
              <span class="text-justify" v-if="!xsMobile && !isGridFile">{{ title }}</span>
            <v-spacer />
            <!-- for admin comment -->
            <v-badge
              v-show="!xsMobile && !isRevision && hasRemarks && !isGridFile"
              color="error"
              overlap
              content="1"
            >
              <v-btn
                v-show="!xsMobile && !isRevision && hasRemarks && !isGridFile"
                icon
                large
                depressed
                class="ma-1 text-right"
                @click="$emit('setcomment')"
                >
                <v-icon>mdi-comment-text-outline</v-icon>
              </v-btn>
            </v-badge>
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn
                 v-show="!xsMobile && isAdmin && !isRevision && !hasRemarks && !isGridFile"
                  v-on="on"
                  large
                  icon
                  depressed
                  class="ma-1 text-right"
                  @click="$emit('comment')"
                  >
                  <v-icon>mdi-comment-text-outline</v-icon>
                </v-btn>
              </template>
              <span>Findings</span>
            </v-tooltip>
            <!-- for applicant comment -->
            <v-badge
              v-show="!xsMobile && isRevision && hasRemarks && !isGridFile"
              color="error"
              overlap
              content="1"
            >
              <v-btn
                v-show="!xsMobile && hasRemarks && isRevision && !isGridFile"
                icon
                large
                depressed
                class="ma-1 text-right"
                @click="$emit('setRevComment')"
                >
                <v-icon>mdi-comment-text-outline</v-icon>
              </v-btn>
            </v-badge>
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn
                 v-show="!xsMobile && isRevision && isAdmin && !hasRemarks && !isGridFile"
                  v-on="on"
                  large
                  icon
                  depressed
                  class="ma-1 text-right"
                  @click="$emit('revComment')"
                  >
                  <v-icon>mdi-comment-text-outline</v-icon>
                </v-btn>
              </template>
              <span>Remarks</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn
                  v-show="!xsMobile && !isAdmin && !textIncludes('REVISED', title) && !isGridFile && isChangeFile"
                  v-on="on"
                  large
                  icon
                  depressed
                  color="blue"
                  class="ma-1"
                  @click="$emit('browse')"
                  >
                  <v-icon>mdi-cloud-upload</v-icon>
                </v-btn>
              </template>
              <span>Change File</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn
                  v-show="!xsMobile && isRevision && isAdmin && !isGridFile && isChangeFile"
                  v-on="on"
                  large
                  icon
                  depressed
                  color="blue"
                  class="ma-1"
                  @click="$emit('browseRevision')"
                  >
                  <v-icon>mdi-cloud-upload</v-icon>
                </v-btn>
              </template>
              <span>{{ hasRemove ? 'Change Revision File' : 'Upload Revision File' }}</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn
                  v-show="!xsMobile && !isGridFile"
                  v-on="on"
                  large
                  icon
                  depressed
                  color="#C05A5A"
                  class="ma-1"
                  :href="link"
                  target="_blank"
                  @click="newLink(file_name)"
                  >
                  <v-icon>mdi-tray-arrow-down</v-icon>
                </v-btn>
              </template>
              <span>Download</span>
            </v-tooltip>
          <v-layout wrap
            v-show="xsMobile || isGridFile">
            <v-flex xs12>
              <v-layout wrap justify-center align-center>
                <v-btn
                  fab
                  depressed
                  color="#C05A5A"
                  class="mx-1 white--text mb-7"
                  >
                  <v-icon>mdi-file-pdf-box</v-icon>
                </v-btn>
              </v-layout>
            </v-flex>
            <v-flex xs12>
              <p class="caption text-justify">{{ title }}</p>
            </v-flex>
            <v-flex xs12>
              <v-card-actions class="mt-0 pt-0">
                <v-spacer />
                <!-- for admin comment -->
                <v-badge
                  v-show="hasRemarks && !isRevision"
                  color="error"
                  overlap
                  content="1"
                >
                  <v-btn
                    v-show="hasRemarks"
                    icon
                    large
                    depressed
                    class="ma-1 text-right"
                    @click="$emit('setcomment')"
                    >
                    <v-icon>mdi-comment-text-outline</v-icon>
                  </v-btn>
                </v-badge>
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      v-show="isAdmin && !hasRemarks && !isRevision"
                      v-on="on"
                      large
                      icon
                      depressed
                      class="ma-1 text-right"
                      @click="$emit('comment')"
                      >
                      <v-icon>mdi-comment-text-outline</v-icon>
                    </v-btn>
                  </template>
                  <span>Remarks</span>
                </v-tooltip>
                <!-- for applicant comment -->
                <v-badge
                  v-show="hasRemarks && isRevision"
                  color="error"
                  overlap
                  content="1"
                >
                  <v-btn
                    v-show="hasRemarks && isRevision"
                    icon
                    large
                    depressed
                    class="ma-1 text-right"
                    @click="$emit('setRevComment')"
                    >
                    <v-icon>mdi-comment-text-outline</v-icon>
                  </v-btn>
                </v-badge>
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      v-show="isAdmin && !hasRemarks && isRevision"
                      v-on="on"
                      large
                      icon
                      depressed
                      class="ma-1 text-right"
                      @click="$emit('revComment')"
                      >
                      <v-icon>mdi-comment-text-outline</v-icon>
                    </v-btn>
                  </template>
                  <span>Remarks</span>
                </v-tooltip>
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      v-on="on"
                      v-show="!isAdmin && !textIncludes('REVISED', title) && isChangeFile"
                      large
                      icon
                      depressed
                      color="blue"
                      class="ma-1 text-right"
                      @click="$emit('browse')"
                      >
                      <v-icon>mdi-cloud-upload-outline</v-icon>
                    </v-btn>
                  </template>
                  <span>Change File</span>
                </v-tooltip>
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-btn
                    v-show="isRevision && isAdmin && isChangeFile"
                    v-on="on"
                    large
                    icon
                    depressed
                    color="blue"
                    class="ma-1"
                    @click="$emit('browseRevision')"
                    >
                    <v-icon>mdi-cloud-upload</v-icon>
                  </v-btn>
                </template>
                <span>{{ hasRemove ? 'Change Revision File' : 'Upload Revision File' }}</span>
              </v-tooltip>
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      v-on="on"
                      large
                      icon
                      depressed
                      color="#C05A5A"
                      class="ma-1 text-right"
                      :href="link"
                      target="_blank"
                      @click="newLink(file_name)"
                      >
                      <v-icon>mdi-tray-arrow-down</v-icon>
                    </v-btn>
                  </template>
                  <span>Download</span>
                </v-tooltip>
              </v-card-actions>
            </v-flex>
          </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
  import { mapMutations, mapGetters, mapActions } from 'vuex'
  import Global from '~/plugins/mixins/global'
  import { isEmpty, includes, isUndefined, isNull, isBoolean } from 'lodash'
  export default {
    mixins: [
      Global
    ],
    props: {
      errors: {
        type: [Object, Array],
        default: () => ({})
      },
      title: String,
      file_name: String,
      theme: String,
      helpText: {
        type: String,
        default: 'Browse pdf file (max of 10MB)'
      },
      maxSize: {
        type: String,
        default: '10MB'
      },
      errorText: {
        type: Object,
        default: () => {
          return {
          type: 'Invalid file type. Only pdf Allowed',
          size: 'Files should not exceed 10MB in size',
          }
        }
      },
      viewFile: {
        type: Boolean,
        default: false
      },
      isAdmin: {
        type: Boolean,
        default: false
      },
      hasRemarks: {
        type: Boolean,
        default: false
      },
      isGridFile: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      isRevision: {
        type: Boolean,
        default: false
      },
      hasRemove: {
        type: Boolean,
        default: false
      },
      isChangeFile: {
        type: Boolean,
        default: true
      }
    },
    data: () => ({
      fileObject: null,
      link: '',
      fileName: '',
      error_key: '',
      fileRecordsForUpload: [],
      fileRecords: []
    }),
    computed: {
      ...mapGetters('form', ['form']),
      ...mapGetters('user', ['user', 'company', 'application_item']),
      routeName () {
        return this.$nuxt._route.name
      }
    },
    methods: {
      filesSelected (fileRecordsNewlySelected) {
        var validFileRecords = fileRecordsNewlySelected.filter((fileRecord) => !fileRecord.error)
        this.fileRecordsForUpload = this.fileRecordsForUpload.concat(validFileRecords)
        this.uploadFiles(fileRecordsNewlySelected)
      },
      onBeforeDelete (fileRecord) {
        var i = this.fileRecordsForUpload.indexOf(fileRecord)
        if (i !== -1) {
          this.fileRecordsForUpload.splice(i, 1)
          var k = this.fileRecords.indexOf(fileRecord)
          if (k !== -1) this.fileRecords.splice(k, 1)
        } else {
          this.$refs.vueFileAgent.deleteFileRecord(fileRecord)
        }
      },
      fileDeleted (fileRecord) {
        const inputs = new FormData()
        this.$set(inputs, 'file_name', fileRecord.file.name)
        this.$set(inputs, 'file_upload', fileRecord.file)
        this.$set(inputs, 'name', this.title)
        this.$emit('removeData', inputs)
        var i = this.fileRecordsForUpload.indexOf(fileRecord)
        if (i !== -1) {
          this.fileRecordsForUpload.splice(i, 1)
        }
      },
      uploadFiles (upload) {
        let pdffile = this.$refs.vueFileAgent.fileRecords[0].file
        this.$emit('fileData', pdffile)

        const inputs = new FormData()
        this.$set(inputs, 'file_name', pdffile.name)
        this.$set(inputs, 'file_upload', pdffile)
        this.$set(inputs, 'name', this.title)
        this.$emit('bulkFileData', inputs)
        this.fileRecordsForUpload = []
      }
    }
  }
</script>
