<!--  -->
<template>
  <div class="vab-avatar">
    <a-dropdown>
      <span class="ant-dropdown-link">
        <a-avatar :src="avatar" />
        {{ username }}
        <DownOutlined />
      </span>
      <template v-slot:overlay>
        <a-menu>
          <a-menu-item @click="logout">退出登录</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script>
// 导入的其他文件 例如：import moduleName from 'modulePath';
import { DownOutlined } from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
export default {
  props: ['avatar'],
  components: {
    DownOutlined
  },
  setup() {
    const router = useRouter();
    const logout = () => {
      router.push("/login");
    };
    return {
      logout
    };
  }
};
</script>
<style lang='stylus' scoped>
.vab-avatar {
  .ant-dropdown-link {
    display: block;
    min-height: 64px;
    cursor: pointer;
  }
}
</style>