<!--  -->
<template>
  <div class="layout-wrap">
    <a-layout>
      <a-layout-sider
        collapsible
        class="vab-sider"
        width="250"
        v-model:collapsed="state.collapse"
        :trigger="null"
      >
        <a-menu
          class="vab-menu"
          theme="dark"
          mode="inline"
          v-model:selectedKeys="state.selectedKeys"
          v-model:openKeys="state.openKeys"
        >
          <a-menu-item key="1">
            <user-outlined />
            <span>nav 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <video-camera-outlined />
            <span>nav 2</span>
          </a-menu-item>
          <a-menu-item key="3">
            <upload-outlined />
            <span>nav 3</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout class="vab-layout">
        <a-layout-header class="vab-header">
          <a-row>
            <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="2">
              <menu-unfold-outlined v-if="state.collapse" class="trigger" @click="toggleCollapse" />
              <menu-fold-outlined v-else class="trigger" @click="toggleCollapse" />
            </a-col>
            <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
              <vab-avatar />
            </a-col>
          </a-row>
        </a-layout-header>
        <vab-tabs />
        <vab-content />
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined
  },
  setup() {
    const state = reactive({
      collapse: false,
      selectedKeys: ["2"],
      openKeys: ["/"]
    });
    const toggleCollapse = () => {
      state.collapse = !state.collapse;
    };
    return {
      state,
      toggleCollapse
    };
  }
});
</script>
<style lang='stylus'>
.layout-wrap {
  display: flex;
  flex: 1;
  height: 100vh;

  .vab-sider {
    position: fixed;
    left: 0;
    height: 100vh;
    overflow: auto;

    .vab-menu {
      height: calc(100vh - $layout-header-height);
    }
  }

  .vab-layout {
    padding-left: 250px;
    transition: all 0.2s;
  }

  .vab-header {
    padding: 0;
    background: #fff;

    .ant-col + .ant-col {
      display: flex;
      justify-content: flex-end;
      padding: 0 @vab-padding;
    }

    .trigger {
      height: @vab-header-height;
      padding: 0 @vab-padding;
      font-size: 18px;
      line-height: @vab-header-height;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #1890ff;
      }
    }
  }

  .vab-collapse {
    .vab-logo .anticon + span {
      display: inline-block;
      max-width: 0;
      opacity: 0;
      transition: all 0.2s;
    }

    & + .vab-layout {
      padding-left: 81px;
      transition: all 0.2s;
    }
  }
}
</style>