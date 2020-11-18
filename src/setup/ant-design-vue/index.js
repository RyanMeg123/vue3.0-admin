
import  { App } from 'vue';

import {
  // need
  Form,
  Input,
  Row,
  Col,
  Spin,
} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';


export function setupAntd(App) {
  // need
  // Here are the components required before registering and logging in
  App.use(Form).use(Input).use(Row).use(Col).use(Spin);
}