<!--  -->
<template>
  <div class="layout-wrap">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider v-model:collapsed="collapse" :collapsible="true" width="250">
        <div class="logo" />
        <a-menu
          theme="dark"
          v-model:selectedKeys="selectedKeys"
          @click="menuHandleClick"
          :key="index"
          mode="inline"
          v-for="(item,index) in menuList"
        >
          <a-menu-item v-if="item.key!== 2" :key="item.key">
            <HomeFilled v-if="item.key === 1" />
            <FrownFilled v-if="item.key === 3" />
            <span>{{item.title}}</span>
          </a-menu-item>
          <a-sub-menu key="sub1" v-if="item.key === 2" @titleClick="titleClick">
            <template #title>
              <span>
                <AppstoreFilled />
                <span>{{item.title}}</span>
              </span>
            </template>
            <a-menu-item key="5">Option Form</a-menu-item>
            <a-menu-item key="6">Option 6</a-menu-item>
            <a-menu-item key="7">Option 7</a-menu-item>
            <a-menu-item key="8">Option 8</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <Header :collapsed="collapse" @toggle-collapsed="toggleCollapse" />

        <!-- <Breadcrumb /> -->
        <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
        >
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs, watch } from "vue";
import Header from "./header";
import Breadcrumb from "./breadcrumb";
import { useRoute, useRouter } from "vue-router";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeFilled,
  AppstoreFilled,
  FrownFilled
} from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    Header,
    Breadcrumb,
    HomeFilled,
    AppstoreFilled,
    FrownFilled,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const state = reactive({
      collapse: false,
      selectedKeys: ["2"],
      openKeys: ["/"],
      menuList: [
        {
          key: 1,
          path: "/home",
          title: "首页"
        },
        {
          key: 2,
          path: "/vab",
          title: "组件"
        },
        {
          key: 3,
          path: "/error",
          title: "错误"
        }
      ]
    });
    const toggleCollapse = () => {
      state.collapse = !state.collapse;
      console.log(state.collapse, " state.collapse");
    };
    const menuHandleClick = e => {
      console.log(e, "menu");
      if (e.key === 1) {
        router.push({
          path: "/index/home"
        });
      }
      if (e.key === "5") {
        router.push({
          path: "/index/vab/form"
        });
      }
      if (e.key === 3) {
        router.push({
          path: "/index/403"
        });
      }
    };
    const titleClick = e => {
      console.log(e, "sub");
    };

    // 监听路由
    watch(
      () => route,
      route => {
        console.log(route, "route");
        // state.matched = route.matched;
      },
      {
        immediate: true,
        deep: true
      }
    );
    watch(
      () => router,
      router => {
        console.log(router, "router");
        // state.matched = route.matched;
      },
      {
        immediate: true,
        deep: true
      }
    );
    return {
      ...toRefs(state),
      toggleCollapse,
      menuHandleClick,
      titleClick
    };
  }
});
</script>
<style lang='stylus'>
@import '../antComm/index.css';

.layout-wrap {
  display: flex;
  flex: 1;
  height: 100vh;

  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
}
</style>