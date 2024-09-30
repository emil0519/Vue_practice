declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "vue-spinner/src/ClipLoader.vue" {
  import ClipLoader from "vue-spinner/src/ClipLoader.vue";
  export default ClipLoader;
}
