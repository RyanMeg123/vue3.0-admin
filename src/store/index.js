import { createStore } from "vuex";
const modules = {};
const files = require.context("./modules", false, /\.js$/);
files.keys().forEach(key => {
  modules[key.replace(/(\.\/|\.js)/g, "")] = files(key).default;
});
Object.keys(modules).forEach(key => {
  modules[key]["namespaced"] = true;
});
export default createStore({
  modules
});
