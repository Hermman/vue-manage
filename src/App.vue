<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="handleClick">测试跨域请求</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import request from './utils/request'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    handleClick() {
      console.log('开始发送请求')
      return request('/login')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
