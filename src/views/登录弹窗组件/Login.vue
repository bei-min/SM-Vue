<template>
  <div>
    <a-button type="primary" @click="showModal">立即登录</a-button>
    <a-modal v-model:open="open" title="登录" :confirm-loading="confirmLoading" @ok="handleOk">
      <a-form
          :model="formState"
          name="basic"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 16 }"
          autocomplete="off"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
      >
        <a-form-item
            label="Username"
            name="username"
            :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item
            label="Password"
            name="password"
            :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
          <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
        </a-form-item>

<!--        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">-->
<!--          <a-button type="primary" html-type="submit">Submit</a-button>-->
<!--        </a-form-item>-->
      </a-form>

    </a-modal>
  </div>
</template>

<style>
.ant-modal-content{
  position: relative;
  top: 100px;
}
.ant-modal-body form{
  position: relative;
  right: 50px;
  top: 30px;
}
</style>
<script setup>
import axios from "axios"
import { ref } from 'vue';
const modalText = ref('Content of the modal');
const open = ref(false);
const confirmLoading = ref(false);

const formState = ref({
  username: '',
  password: '',
  remember: true,
});
const showModal = () => {
  open.value = true;
};
const onFinish = values => {
  console.log('Success');
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
const handleOk = () => {
  //axios.get("https://103.91.210.232:45247/demo_war/Servlet.Login" , {
  axios.get("http://localhost:25535/demo_war/Servlet.Login" , {
    params:{
      username : formState.value.username,
      password : formState.value.password,
    }
  }).then((res) => {
    modalText.value = 'The modal will be closed after two seconds';
    confirmLoading.value = true;
    if(res.data == true){
      setTimeout(() => {
        open.value = false;
        confirmLoading.value = false;
      }, 2000);

    }
    else{
      setTimeout(() => {
        confirmLoading.value = false;
      }, 2000);
    }
    console.log(res.data)
  }).catch((err) => {
    console.log('请求失败' + err);
  })
};
//--------------------------------------------------


</script>