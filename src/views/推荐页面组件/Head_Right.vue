<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" id="menu-right"></a-menu>
</template>

<script setup>
import { h, ref } from 'vue';
import {MobileOutlined, SettingOutlined} from '@ant-design/icons-vue';

const current = ref(['mail']);
const items = ref([
  {
    key: 'login',
    icon: () => h(SettingOutlined),
    label: '登录',
    title: 'login',
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
  {
    key: 'intercut',
    icon: () => h(MobileOutlined),
    label: '切换手机版',
    title: 'intercut',
  },
]);
</script>