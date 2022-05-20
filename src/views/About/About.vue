<template src="./About.html" ></template>
<script lang="ts">
import BaseComponent from "@/Core/BaseComponent.vue";
import Component from "vue-class-component";

@Component
export default class AboutComponent extends BaseComponent {
  EditClickReceive(value: any) {
    alert(value);
  }
}
</script>

<style scoped src="./About.scss" lang="scss">
</style>