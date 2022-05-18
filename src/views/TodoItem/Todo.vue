<template src="./Todo.html"></template>
<script lang="ts">
import "devextreme/dist/css/dx.light.css";
import Component, { mixins } from "vue-class-component";
import Vue from "vue";
import {
  DxForm,
  DxSimpleItem,
  DxGroupItem,
  DxButtonItem,
  DxButtonOptions,
  DxTabbedItem,
  DxTab,
  DxTabPanelOptions,
  DxNumericRule,
  DxEmailRule,
} from "devextreme-vue/form";
import { DxCheckBox } from "devextreme-vue/check-box";
import "devextreme-vue/text-area";
import { IEmployee } from "../../Models/IEmployee";

@Component({
  components: {
    DxForm,
    DxSimpleItem,
    DxGroupItem,
    DxButtonItem,
    DxButtonOptions,
    DxTabbedItem,
    DxTab,
    DxTabPanelOptions,
    DxNumericRule,
    DxEmailRule,
    DxCheckBox,
  },
})
export default class TodoComponent extends Vue {
  employee: IEmployee = {} as IEmployee;
  isFormReadOnly = false;

  addTask() {
    alert("add task");
  }
}
</script>

<style scoped src="./Todo.scss" lang="scss">
</style>