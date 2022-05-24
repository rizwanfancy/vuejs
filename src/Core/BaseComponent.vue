<template>
  <div>
    <header>
      <div style="display: flex; justify-content: flex-end; margin-top: 10px">
        <b-button-toolbar key-nav aria-label="Toolbar with button groups">
          <b-button-group class="mx-1">
            <b-button>&laquo;</b-button>
            <b-button>&lsaquo;</b-button>
          </b-button-group>
          <b-button-group class="mx-1">
            <b-button>Add</b-button>
            <b-button @click="EditClick()">Edit</b-button>
            <b-button>Delete</b-button>
          </b-button-group>
          <b-button-group class="mx-1">
            <b-button>&rsaquo;</b-button>
            <b-button>&raquo;</b-button>
          </b-button-group>
          <b-button-group class="mx-1">
            <b-button @click="changeTheme()">Change Theme</b-button>
          </b-button-group>
        </b-button-toolbar>
      </div>
    </header>
    <content>
      <slot name="content"> </slot>
    </content>
    <portal-target to="#footer" name="footer">
      <FooterComponent />
    </portal-target>
  </div>
</template>
<script lang="ts">
import axios from "axios";
import provide from "vue";
import Component from "vue-class-component";
import HttpHelper from "./HttpHelper";
import FooterComponent from "../views/footer/footer.vue";

@Component({
  components: {
    FooterComponent,
  },
})
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

  changeTheme() {}
  
}
</script>