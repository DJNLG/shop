<template>
    <div>
      <head-top headTitle="密码登录"></head-top>
      <form class="loginPart">
        <section class="input_container">
          <input type="text" placeholder="账号">
        </section>
        <section class="input_container">
          <input type="password" placeholder="密码">
        </section>
        <section class="input_container">
          <input type="text" placeholder="验证码">
          <div>
            <img v-if="imgUrlCode" :src="imgUrlCode">
            <div class="changeImg" @click="getImgCode">
              <p>看不请</p>
              <p>换一张</p>
            </div>
          </div>
          <router-link to="/list">{{fullName}}</router-link>
        </section>
      </form>
    </div>
</template>

<script>
import HeadTop from './head'
export default {
  name: 'login',
  data () {
    return {
      imgUrlCode: null,
      aaa: true,
      firstName: '董',
      lastName: '江南'
    }
  },
  mounted () {
  },
  beforeRouteEnter: (to, from, next) => {
    next()
  },
  beforeRouteLeave: (to, from, next) => {
    next()
  },
  methods: {
    getImgCode () {
      this.$router.push({path: '/list'})
    }
  },
  computed: {
    fullName () {
      console.log(this.$route.params)
      return this.firstName + this.lastName
    }
  },
  components: {HeadTop}
}
</script>

<style scoped>
  .loginPart{
    width: 100%;
    background-color: #fff;
    margin-top: .7rem;
  }
  .input_container{
    padding:.6rem .8rem;
    border-bottom: 1px solid #f1f1f1;
  }
  .input_container:after{
    content: "020";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  input{
    background-color: #cdffea;
    font-size: .7rem;
    float: left;
  }
  .changeImg p{
    font-size: .4rem;
  }
  .isBigfont{
    font-size: .5rem;
  }
</style>
