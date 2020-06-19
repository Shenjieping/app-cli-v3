/**
* @file index.js
* @author shenjp@founder.com
* @date 2020-06-19 22:30:03
*/
import {
  Button,
  Toast,
  Tab,
  Tabs,
  Popup,
  Calendar,
  Dialog
} from 'vant';

export default function install (Vue) {
  Vue.use(Button);
  Vue.use(Toast);
  Vue.use(Tab);
  Vue.use(Tabs);
  Vue.use(Popup);
  Vue.use(Calendar);
  Vue.use(Dialog);
  Vue.prototype.$toast = Toast;
  Vue.prototype.$confirm = Dialog.confirm;
}
