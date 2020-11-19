<!--  -->
<template>
  <div class="home-container">
    <a-alert
      :message="
      '欢迎体验基于 vue^3.0.0' +
      ' + ant-design-vue ^2.0.0-rc.1' +
      ' 开发的admin。'"
      type="success"
      show-icon
    />
    <div class="home-tab">
      <a-table :columns="columns" :data-source="data">
        <template #name="{text}">
          <a>{{ text }}</a>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script>
// 导入的其他文件 例如：import moduleName from 'modulePath';
import { reactive, defineComponent, toRef } from "vue";
export default defineComponent({
  setup() {
    const columns = [
      {
        title: "dependencies",
        dataIndex: "dependencies",
        key: "dependencies"
      },
      {
        title: "version",
        dataIndex: "version",
        key: "version"
      },
      {
        title: "description",
        dataIndex: "description",
        key: "description",
        ellipsis: true
      },
      {
        title: "docsEN",
        dataIndex: "docsEN",
        key: "docsEN",
        ellipsis: true
      },
      {
        title: "docsZH",
        dataIndex: "docsZH",
        key: "docsZH",
        ellipsis: true
      }
    ];
    const data = [
      {
        key: "1",
        dependencies: "vue",
        version: "^3.0.0",
        description: "vue3.0最新版本",
        docsZH: "https://vue3js.cn/docs/zh/",
        docsEN: "https://vue3js.cn/docs/"
      },
      {
        key: "2",
        dependencies: "ant-design-vue",
        version: "2.0.0-beta.15",
        description: "目前支持vue3.0最好的UI框架，element并不支持",
        docsZH: "https://2x.antdv.com/components/table-cn/",
        docsEN: "https://2x.antdv.com/components/table-cn/"
      },
      {
        key: "3",
        dependencies: "Vue Composition API",
        version: "...",
        description: "vue3.0响应式组件集合",
        docsZH: "无",
        docsEN: "https://composition-api.vuejs.org/"
      },
      {
        key: "4",
        dependencies: "vue-router",
        version: "^4.0.0-0",
        description: "vue-router4.0最新版本",
        docsZH: "....",
        docsEN: "...."
      },
      {
        key: "5",
        dependencies: "vuex",
        version: "^4.0.0-0",
        description: "vuex.0最新版本",
        docsZH: "....",
        docsEN: "...."
      }
    ];
    return {
      data,
      columns
      //   ...toRef(state)
    };
  }
});
</script>
<style lang='stylus' scoped>
.home-container {
  .home-tab {
    margin-top: 50px;
  }
}
</style>