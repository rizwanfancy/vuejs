<template>
  <div>
    <p>Hello From Base</p>
    <div>
      <b-button-toolbar key-nav aria-label="Toolbar with button groups">
        <b-button-group class="mx-1">
          <b-button>&laquo;</b-button>
          <b-button>&lsaquo;</b-button>
        </b-button-group>
        <b-button-group class="mx-1">
          <b-button @click="EditClick()">Edit</b-button>
          <b-button>Undo</b-button>
          <b-button>Redo</b-button>
        </b-button-group>
        <b-button-group class="mx-1">
          <b-button>&rsaquo;</b-button>
          <b-button>&raquo;</b-button>
        </b-button-group>
      </b-button-toolbar>
    </div>
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

  EditClick() {
    this.$emit("EditClick", "yes");
  }
}
</script>