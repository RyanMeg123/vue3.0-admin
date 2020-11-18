<!--  -->
<template>
  <div class="login-container">
    <img src="~@/assets/login/login-logo.png" class="login-logo" />
    <div class="login-body">
      <span class="title">Hello!</span>
      <span class="title2">欢迎来到 定制化admin</span>
      <div class="body-form">
        <a-form :model="formData" :rules="formRules" ref="formRef" labelAlign="left">
          <a-form-item name="account" label="账号">
            <a-input size="large" v-model:value="formData.account" placeholder="Username: vben" />
          </a-form-item>
          <a-form-item name="password" label="密码">
            <a-input-password
              size="large"
              visibilityToggle
              v-model:value="formData.password"
              placeholder="Password: 123456"
            />
          </a-form-item>
          <a-row>
            <a-col :span="5">
              <a-form-item>
                <!-- 未做逻辑，需要自行处理 -->
                <a-checkbox v-model:checked="autoLogin" size="small">自动登录</a-checkbox>
              </a-form-item>
            </a-col>
            <a-col :span="18">
              <a-form-item :style="{ 'text-align': 'right' }">
                <!-- 未做逻辑，需要自行处理 -->
                <a-button type="link" size="small">忘记密码</a-button>
              </a-form-item>
            </a-col>
          </a-row>
          <a-form-item>
            <a-button
              type="primary"
              size="large"
              class="rounded-sm"
              :block="true"
              @click="login"
              :loading="formState.loading"
            >登录</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
// 导入的其他文件 例如：import moduleName from 'modulePath';
import { defineComponent, toRef, reactive, ref, unref, onMounted } from "vue";
export default defineComponent({
  setup() {
    const formRef = ref(null);
    const formData = reactive({
      account: "",
      password: ""
    });
    const formRules = reactive({
      account: [{ required: true, message: "请输入账号", trigger: "blur" }],
      password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      // verify: unref(openLoginVerifyRef) ? [{ required: true, message: '请通过验证码校验' }] : [],
    });
    const formState = reactive({
      loading: false
      // form: unref(formRef).createForm(this, { name: "coordinated" })
    });
    const autoLoginRef = ref(false);
    const labelCol = reactive({
      span: 4
    });
    const wrapperCol = reactive({
      span: 4
    });
    async function handleLogin() {
      const form = unref(formRef);
      console.log(form);
      if (!form) return;
      formState.loading = true;
      setTimeout(() => {
        formState.loading = false;
      }, 3000);
      try {
        const data = await form.validate();
        console.log(data, "data");
        // const userInfo = await
      } catch (error) {}
    }
    onMounted(() => {
      console.log(formState, "onMounted");
    });
    return {
      formRef,
      formData,
      formRules,
      formState,
      labelCol,
      wrapperCol,
      autoLogin: autoLoginRef,
      login: handleLogin
    };
  }
});
</script>
<style lang='stylus' scoped>
@import '../antComm/index.css';

.login-container {
  height: 100vh;
  background-color: #5a31cc;
  width: 100;
  layout-flex(row, center, center);

  .login-logo {
    width: 600px;
    height: 600px;
    margin-top: 300px;
    margin-right: 140px;
  }

  .login-body {
    layout-flex(column, , flex-start);
    width: 600px;
    padding: 4vh;
    height: 480px;
    box-shadow: 0 2px 8px 0 rgba(7, 17, 27, 0.06);
    background-image: linear-gradient(#5a31cc, #a9a6f5);
    border-radius: 10px;
    margin-left: calc(30% - 400px);

    .title {
      color: #fff;
      font-size: 32px;
    }

    .title2 {
      color: #fff;
      font-size: 24px;
    }

    .body-form {
      width: 100%;
      layout-flex(column);
    }
  }
}
</style>