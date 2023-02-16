<template>
  <div>
    <p class="manual-steptitle">
      <span class="manual-step">Step {{ step }}:</span>
      <span class="manual-title">{{ title }}</span>
    </p>

    <p v-for="info in infos" class="manual-info">
      <span v-if="info.includes('Active email address:')">
        <b>{{ info.substring(0, 21) }}</b>
        {{ info.substring(21, info.length) }}
      </span>

      <span v-else-if="info.includes('Aktibong email address:')">
        <b>{{ info.substring(0, 23) }}</b>
        {{ info.substring(23) }}
      </span>

      <span v-else-if="info.includes('Password:')">
        <b>{{ info.substring(0, 9) }}</b>
        {{ info.substring(9) }}
      </span>

      <span v-else-if="info.includes('Choose Sole Proprietorship:')">
        <b>{{ info.substring(0, 27) }}</b>
        {{ info.substring(27) }}
      </span>

      <span v-else-if="info.includes('Choose Partnership/Corporation:')">
        <b>{{ info.substring(0, 31) }}</b>
        {{ info.substring(31) }}
      </span>

      <span v-else-if="info.includes('Choose Community Association:')">
        <b>{{ info.substring(0, 29) }}</b>
        {{ info.substring(29) }}
      </span>

      <span v-else-if="info.includes('Choose Government:')">
        <b>{{ info.substring(0, 18) }}</b>
        {{ info.substring(18) }}
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
