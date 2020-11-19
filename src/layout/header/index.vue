<!--  -->
<template>
  <a-layout-header class="header">
    <div class="header-dd">
      <a-col :xl="2">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="toggleCollapsed" />
        <menu-fold-outlined v-else class="trigger" @click="toggleCollapsed" />
      </a-col>
      <Avatar :avatar="'https://i.gtimg.cn/club/item/face/img/2/15922_100.gif'" />
    </div>
  </a-layout-header>
</template>

<script>
// 导入的其他文件 例如：import moduleName from 'modulePath';
import { defineComponent } from "vue";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import Avatar from "../avatar";

export default defineComponent({
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    Avatar
  },
  props: {
    collapsed: Boolean
  },
  setup(props, { emit }) {
    const toggleCollapsed = () => {
      console.log(props, "props");
      emit("toggle-collapsed");
    };
    return {
      toggleCollapsed
    };
  }
});
</script>
<style lang='stylus' scoped>
// @import url(); 引入公共css类
.header-dd {
  layout-flex(row, space-between, center);
}
</style>