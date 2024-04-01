<template>
  <a-space direction="vertical" :style="{ width: '100%'}" :size="[0, 48]">
    <a-layout>
      <a-layout-header :style="headerStyle">

        <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items"></a-menu>
        <Search></Search>
      </a-layout-header>
      <a-layout-content :style="contentStyle">Content</a-layout-content>
      <a-layout-footer :style="footerStyle">Footer</a-layout-footer>

    </a-layout>
  </a-space>
</template>

<script setup>
import Search from "@/views/Search.vue";

const headerStyle = {
  display : 'inline',
  width: '100%',
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 10,
  lineHeight: '64px',
  backgroundColor: '#fff',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

import { h, ref } from 'vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';

const current = ref(['mail']);
const items = ref([
  {
    key: 'mail',
    icon: () => h(MailOutlined),
    label: '推荐',
    title: 'Navigation One',

  },
  {
    key: 'app',
    icon: () => h(AppstoreOutlined),
    label: '分类',
    title: 'Navigation Two',
  },
  {
    key: 'sub1',
    icon: () => h(SettingOutlined),
    label: '登录',
    title: 'Navigation Three - Submenu',
    children: [
      {
        type: 'group',
        label: '登陆后你可以：',
        children: [
          {
            label: '关注校园动态',
            key: 'setting:1',
          },
          {
            label: '发布帖子',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        children: [
          {
            label: '立即登录',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
]);

</script>

<script>
import axios from "axios"
axios.get("http://localhost:25535/demo_war/InquireNews").then((res) => {
    console.log(res);
    console.log(res.data)
  }).catch((err) => {
    console.log('请求失败' + err);
  })
</script>

<style>
  #app{
    margin: 0%;
    padding: 0%;
    height: 100%;
    width: 100%;
    max-width: calc(100%);
    display: flex;
  }
  li{
    margin-right: 50px;
  }
</style>