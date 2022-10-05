import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SelectedShow from "../views/SelectedShow.vue";

export enum RouterPaths {
  HOME = "/",
  SELECTED_SHOW = "/shows/:id",
}

export const createShowLink = (id: number) => {
  return RouterPaths.SELECTED_SHOW.replace(":id", String(id));
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: RouterPaths.HOME,
      name: "home",
      component: HomeView,
    },
    {
      path: RouterPaths.SELECTED_SHOW,
      name: "selected-show",
      component: SelectedShow,
    },
  ],
});

export default router;
