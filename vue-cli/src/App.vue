<template>
  <div>
    <!-- <AppHeader :프롭스 속성 이름="상위 컴포넌트의 데이터 이름"/> -->
    <AppHeader v-bind:propsdata="str" v-on:renew="renewStr"/>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import AppHeader from './components/AppHeader.vue';

export default Vue.extend({
  components: {
    AppHeader,
  },
  data() {
    return {
      str: 'Header'
    };
  },
  methods: {
    renewStr() {
      this.str = 'hi';
    },
  }
});
</script>

<style lang='scss' scoped>

</style>