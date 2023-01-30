<template>
<v-snackbar
  :value="snack"
  top
  right
  :color="color"
  :timeout="timeout"
    >
  <v-card-actions class="my-1 py-1">
    <v-icon left v-show="icon" class="mb-1">{{ icon }}</v-icon>{{ message }}
    <v-spacer />
    <v-btn
      outlined
      text
      small
      class="mx-2"
      @click="$emit('close')"
    >
      Close
    </v-btn>
  </v-card-actions>
</v-snackbar>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  export default {
    props: {
      snack: {
        type: Boolean,
        default: false
      },
      color: String,
      timeout: {
        type: Number,
        default: 2000
      },
      message: String,
      icon: String
    }
  }
</script>
