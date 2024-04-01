<template>
  <a-space direction="vertical" :style="{ width: '100%'}" :size="[0, 48]">
    <a-layout>
      <a-layout-header :style="headerStyle">
        <Head_Left></Head_Left>
        <Search></Search>
        <Head_Right></Head_Right>
      </a-layout-header>
      <a-layout-content :style="contentStyle">Content</a-layout-content>
      <a-layout-footer :style="footerStyle">Footer</a-layout-footer>

    </a-layout>
  </a-space>
</template>

<script setup>
  import Head_Left from "@/views/推荐页面组件/Head_Left.vue";
  import Head_Right from "@/views/推荐页面组件/Head_Right.vue";
  import Search from "@/views/推荐页面组件/Search.vue";

  const headerStyle = {
    display : 'flex',
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
    height: '630px',
    color: '#000',
    backgroundColor: '#fff',
  };
  const footerStyle = {
    textAlign: 'center',
    color: '#000',
    backgroundColor: '#fff',
  };
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
  #menu-left li{
    margin-right: 125px;
    font-size: 20px;
  }
  #menu-left li span svg{
    width: 20px;
    height: 20px;
  }
  #menu-right li{
    margin-left: 125px;
    font-size: 20px;
  }
  #menu-right li span svg{
    width: 20px;
    height: 20px;
  }
</style>