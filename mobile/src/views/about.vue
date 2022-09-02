<template>
  <div class="about">
    我是 about 页面
    <van-tabbar v-model="tabBarActive" @change="handleTabbarChange">
      <van-tabbar-item icon="home-o">home</van-tabbar-item>
      <van-tabbar-item icon="search">about</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签3</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签4</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { Toast } from 'vant'
import { useRouter } from 'vue-router'

const router = useRouter()

const tabBarActive = $ref(1)

const handleTabbarChange = (index) => {
  Toast(index)
  router.push('/')
}

</script>

<style scoped>

</style>
