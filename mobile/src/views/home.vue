<template>
  <div class="home">
    <!-- 切换栏 -->
    <van-tabs v-model:active="tabActive" title-active-color="#0A86F4" border color="#0A86F4" sticky>
      <van-tab title="标签 1">
        <!-- 内容区 -->
        <div class="wrapper">
          <van-cell v-for="item in list" :key="item" :title="item"/>
        </div>
      </van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>

    <!-- 导航栏 -->
    <van-tabbar v-model="tabBarActive" @change="handleTabbarChange">
      <van-tabbar-item icon="home-o">home</van-tabbar-item>
      <van-tabbar-item icon="search">about</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签3</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签4</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
// const getTestData = async () => {
//   const baseURL = 'https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf'
//   const res = await $request.get(baseURL)
//   const childrenList = res.data.data.diseaseh5Shelf.areaTree[0].children
//   childrenList.forEach(item => {
//     list.push(item.name)
//   })
//   console.log(list)
// }
// getTestData()

import { Toast } from 'vant'
import { useRouter } from 'vue-router'

const router = useRouter()

const tabActive = $ref(0)
const tabBarActive = $ref(0)
const list = $ref(['台湾', '香港', '海南', '四川', '西藏', '广东', '天津', '陕西', '上海', '吉林', '福建', '重庆', '黑龙江', '内蒙古', '浙江', '辽宁', '新疆', '北京', '河南', '山东', '青海', '山西', '云南', '湖南', '江苏', '湖北', '甘肃', '河北', '江西', '贵州', '安徽', '广西', '澳门', '宁夏'
])

const handleTabbarChange = (index) => {
  Toast(index)
  router.push('/about')
}

</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .wrapper {
    flex: 1;
  }
}
</style>
