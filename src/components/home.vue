<template>
    <div>
      <headTop signUp="home"></headTop>
      <a>test</a>
      <router-link to="./list"></router-link>
    </div>
</template>

<script>
// import env from '@config/env'
import headTop from './head/head'
export default {
  name: 'home',
  components: {
    headTop
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
