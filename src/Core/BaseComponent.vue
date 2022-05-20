<template>
  <div>
    <p>Hello From Base</p>
    <slot />
  </div>
</template>
<script lang="ts">
import axios from "axios";
import Component from "vue-class-component";
import HttpHelper from "./HttpHelper";

@Component
export default class BaseComponent extends HttpHelper {
  constructor() {
    super();
  }

  async get(url: any) {
    const result = await axios.get(url);
    return result.data;
  }
}
</script>