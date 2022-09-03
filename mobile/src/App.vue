<template>
  <div class="wrapper">
    <!-- 导航栏 -->
    <van-tabs v-model:active="tabActive" sticky animated swipeable>
      <van-tab v-for="item in tabList" :key="item.to">
        <template #title>
          <div @click="handleClickTab(item)">
            <van-icon :name="item.icon" style="margin-right: 5px"/>
            <span>{{ item.title }}</span>
          </div>
        </template>
      </van-tab>
    </van-tabs>
    <!-- 路由视图 -->
    <RouterView class="wrapper-body"/>
  </div>
</template>

<script setup>
import { RouterView, useRouter } from 'vue-router'
// import { Toast } from 'vant'

const tabList = $ref([
  {
    title: '社区',
    icon: 'star-o',
    to: '/knowledge'
  },
  {
    title: '知识',
    icon: 'like-o',
    to: '/adopt'
  },
  {
    title: '我的',
    icon: 'smile-o',
    to: '/me'
  }
])
const tabActive = $ref(0)
const router = useRouter()
const handleClickTab = (item) => {
  console.log(item)
  router.push(item.to)
}

</script>

<style lang="scss">
html, body {
  background: #F3F6F8;
}

.wrapper-body {
  padding: 10px;
  box-sizing: border-box;
}

</style>
