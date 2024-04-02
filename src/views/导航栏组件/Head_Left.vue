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

addEventListener("click" , function () {
  if(current.value[0] == 'mail'){
    document.getElementById('content-r').style.display = 'none';
    document.getElementById('content-l').style.display = 'block';
  }
  else{
    document.getElementById('content-l').style.display = 'none';
    document.getElementById('content-r').style.display = 'block';
  }
  //console.log(current.value[0]);
})

</script>