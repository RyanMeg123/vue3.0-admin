<!--  -->
<template>
  <a-breadcrumb :style="{
      padding: '24px',
      paddingBottom: '0',
    }">
    <template>
      <!-- <a-breadcrumb-item v-for="item in matched" :key="item.path">
        <a href="javascript:;" @click="jumped(item.path)">
          {{
          item.meta.title
          }}
        </a>
      </a-breadcrumb-item> -->
    </template>
  </a-breadcrumb>
</template>

<script>
// 导入的其他文件 例如：import moduleName from 'modulePath';
import { useRoute, useRouter } from "vue-router";
import {defineComponent, reactive, watch, toRef} from 'vue'
export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();
    const state = reactive({
      // matched: route.matched
    });

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

    const jumped = (path) => {
      console.log(path, 'path')
      router.push({
        path: path
      })
    }
    return {
      ...toRef(state),
      jumped
    }
  }
});
</script>
<style lang='stylus' scoped>
//@import url(); 引入公共css类
</style>