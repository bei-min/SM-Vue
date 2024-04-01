<template>
  <a-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      登录
    </a>
    <template #overlay>
      <a-menu @click="onClick" style="padding: 20px;font-size: 15px;position: relative; right: 125px; width: 300px;">
        <p>登录后可以 : </p>
        <li style="float: left">
          <SaveOutlined />
          <span>存储浏览记录</span>
        </li>
        <li style="float: right">
          <UploadOutlined />
          <span>发布作品/短讯</span>
        </li>
        <li style="margin-top: 50px;text-align: center">
          <login></login>
        </li>

      </a-menu>
    </template>
  </a-dropdown>

  <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" id="menu-right"></a-menu>
</template>

<style>
.ant-dropdown-link{
  margin-left: 125px;
  font-size: 20px;
}
.ant-dropdown-link:hover{
  background: #fff;
}
</style>

<script setup>

import Login from "@/views/登录弹窗组件/Login.vue";

const onClick = ({ key }) => {

  console.log(`Click on item ${key}`);
};

//--------------------------------------------------------------
import { h, ref } from 'vue';
import {MobileOutlined , SaveOutlined , UploadOutlined} from '@ant-design/icons-vue';

const current = ref(['mail']);
const items = ref([
  {
    key: 'intercut',
    icon: () => h(MobileOutlined),
    label: '切换手机版',
    title: 'intercut',
  },
]);
</script>