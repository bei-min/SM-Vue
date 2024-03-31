<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" />
</template>
<script setup>
import { h, ref } from 'vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
const current = ref(['mail']);
const items = ref([
  {
    key: 'mail',
    icon: () => h(MailOutlined),
    label: '首页',
    title: 'Navigation One',
  },
  {
    key: 'app',
    icon: () => h(AppstoreOutlined),
    label: '',
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
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: '立即登录',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    key: 'alipay',
    label: h(
        'a',
        {
          href: 'https://antdv.com',
          target: '_blank',
        },
        '发布帖子',
    ),
    title: 'Navigation Four - Link',
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