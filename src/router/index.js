import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },

  {
    path: "/zhibo",
    name: "Zhibo",
    component: () => import("@/views/xgPlayer/zhibo/index"),
    meta: { title: "直播m3u8", icon: "video" },
  },
  {
    path: "/huifang",
    name: "Huifang",
    component: () => import("@/views/xgPlayer/huifang/index"),
    meta: { title: "回放播放器", icon: "video" },
  },
  {
    path: "/video",
    name: "Video",
    component: () => import("@/views/video/index"),
    meta: { title: "video", icon: "video" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
