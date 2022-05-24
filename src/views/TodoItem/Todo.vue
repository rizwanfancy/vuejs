<template src="./Todo.html"></template>
<script lang="ts">
import BaseComponent from "@/Core/BaseComponent.vue";
import Component from "vue-class-component";
import DxTextBox from "devextreme-vue/text-box";
import { Inject } from "vue-property-decorator";

@Component({ components: { DxTextBox } })
export default class TodoComponent extends BaseComponent {
  emailValue: any = "smith@corp.com";
  rules: any = { X: /[02-9]/ };
  @Inject("homeValue") private providedValue!: string;
  mounted() {}
  valueChanged(data: any) {
    this.emailValue = `${data.value.replace(/\s/g, "").toLowerCase()}@corp.com`;
  }
}
</script>

<style scoped src="./Todo.scss" lang="scss">
</style>