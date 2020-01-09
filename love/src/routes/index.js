/*
 * @Date: 2019-08-26 10:34:45
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-09 10:33:20
 * @explain: 路由配置
 */
import HomePage from "../pages/homePage";
import RecordPage from "../pages/recordPage";
const routes = [
    {
      path: "/index",
      component: HomePage
    },
    {
      path: "/record",
      component: RecordPage
    }
];
export default routes 