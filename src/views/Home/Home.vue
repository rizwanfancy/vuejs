<template src="./Home.html"></template>
<script lang="ts">
import BaseComponent from "@/Core/BaseComponent.vue";
import "devextreme/dist/css/dx.light.css";
import Component from "vue-class-component";
import TodoComponent from "../TodoItem/Todo.vue";
import AboutComponent from "../About/About.vue";
@Component({
  components: {
    todo: TodoComponent,
    about: AboutComponent,
  },
})
export default class HomeComponent extends BaseComponent {
  applyStyle: boolean = false;
  item: string = "todo";
  focusRef() {
    if (this.$refs && this.$refs.input) {
      let input = this.$refs.input as any;
      if (input) {
        input.placeholder = "Please Enter your Value";
        input.focus();
      }
    }
  }

  focusItem(value: string) {
    debugger;
    this.item = value;
  }
}
</script>

<style scoped src="./Home.scss" lang="scss">
</style>