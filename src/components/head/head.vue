<template>
  <div class="headItem">
    <section v-if="goBack"></section>
    <router-link :to="userInfo?'/list':'/login/zhangsan'" v-if="signUp" >
      <span v-if="userInfo">登路人:{{userInfo}}</span>
      <span v-else>登录|注册</span>
    </router-link>
    <section class="headStyle" v-if="headTitle">{{headTitle}}</section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'headTop',
  props: {
    signUp: {
      type: String,
      require: true
    },
    headTitle: {
      type: String,
      require: true
    },
    goBack: {
      type: Boolean
    }
  },
  computed: {
    ...mapState([
      'userInfo'
    ])
  }

}
</script>

<style scoped>
.headItem {
  height: 50px;
  width: 100%;
  background-color: #3190e8;
  text-align: right;
  vertical-align: middle;
}
  .headStyle{
    text-align: center;
    color: #ffffff;
    line-height: 50px;
  }
</style>
