<template>
  <header>
    <h1>{{ propsdata }}</h1>
    <button v-on:click="sendEvent">send</button>
  </header>
</template>

<script lang='ts'>
export default {
  props: ['propsdata'],
  methods: {
    sendEvent() {
      this.$emit('renew');
    },
  }
}
</script>

<style lang='scss' scoped></style>