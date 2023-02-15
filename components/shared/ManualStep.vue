<template>
  <div>
    <p class="manual-steptitle">
      <span class="manual-step">Step {{ step }}:</span>
      <span class="manual-title">{{ title }}</span>
    </p>

    <p v-for="info in infos" class="manual-info">
      <span v-if="info.includes('Active email address:')">
        <b>{{ info.substring(0, 21) }}</b>
        {{ info.substring(21) }}
      </span>

      <span v-else-if="info.includes('Aktibong email address:')">
        <b>{{ info.substring(0, 24) }}</b>
        {{ info.substring(24) }}
      </span>

      <span v-if="info.includes('Password:')">
        <b>{{ info.substring(0, 10) }}</b>
        {{ info.substring(10) }}
      </span>

      <span v-else>
        {{ info }}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    step: Number,
    title: String,
    infos: Array
  }
}
</script>

<style scoped>
  .manual-steptitle {
    padding-top: 1rem
  }

  .manual-step {
    font-size: 1rem;
    font-weight: bold;
  }

  .manual-title {
    font-size: 1.1rem;
  }
</style>
