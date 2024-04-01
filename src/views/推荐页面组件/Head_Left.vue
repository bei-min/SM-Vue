<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" id="menu-left"></a-menu>
</template>

<script setup>
import { h, ref } from 'vue';
import { HomeOutlined, AppstoreOutlined } from '@ant-design/icons-vue';

const current = ref(['mail']);
const items = ref([
  {
    key: 'mail',
    icon: () => h(HomeOutlined),
    label: '推荐',
    title: 'Navigation One',
  },
  {
    key: 'app',
    icon: () => h(AppstoreOutlined),
    label: '分类',
    title: 'Navigation Two',
  },
]);
</script>