<template src="./About.html" ></template>
<script lang="ts">
import BaseComponent from "@/Core/BaseComponent.vue";
import Component from "vue-class-component";
import { Inject } from "vue-property-decorator";

@Component
export default class AboutComponent extends BaseComponent {
  @Inject("homeValue") private providedValue!: string;
}
</script>

<style scoped src="./About.scss" lang="scss">
</style>