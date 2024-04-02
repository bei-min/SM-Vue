<template>
  <div>
    <a-list item-layout="vertical" size="large" :data-source="listData">
      <template #renderItem="{ item }">
        <a-list-item key="item.title">
          <template v-if="!loading" #actions>
            <span v-for="({ icon, text }, index) in actions" :key="index">
              <component :is="icon" style="margin-right: 8px"></component>
              {{ text }}
            </span>
          </template>
          <template #extra>
            <img
                v-if="!loading"
                width="272"
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          </template>
          <a-skeleton :loading="loading" active avatar>
            <a-list-item-meta :description="item.description">
              <template #title>
                <p>{{ item.title }}</p>
              </template>
              <template #avatar><a-avatar :src="item.avatar" /></template>
            </a-list-item-meta>
            {{ item.content }}
          </a-skeleton>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>
<script setup>
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
const listData = [];

for (let i = 0; i < 5; i++) {
  listData.push({
    title: '123'
  });
}
const loading = ref(true);

// setTimeout(() => {
//   loading.value = false;
// }, 2000);

let actions = [
  {
    icon: StarOutlined,
    text: '156',
  },
  {
    icon: LikeOutlined,
    text: '156',
  },
  {
    icon: MessageOutlined,
    text: '2',
  },
];

import axios from "axios";
//axios.get("https://103.91.210.232:45247/demo_war/Servlet.InquireNews").then((res) => {
axios.get("http://localhost:25535/demo_war/Servlet.InquireNews" , {
  params:{
    cnt : 0,
  }
}).then((res) => {
  console.log(res.data);
  setTimeout(() => {
    loading.value = false;
    let pp = document.getElementById("pp");
    console.log(pp)
  }, 1000);

  //main.innerHTML = res.data['id'];
  //document.getElementsByClassName("ant-list-item-meta").innerText = res.data['description'];
}).catch((err) => {
  console.log('请求失败' + err);
})

</script>
<style scoped>
.skeleton-demo {
  border: 1px solid #f4f4f4;
}
</style>
