<template src="./Contact-Details.html" extends></template>
<script lang="ts">
import BaseComponent from "@/Core/BaseComponent.vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class ContactDetailComponent extends BaseComponent {
  @Prop() selectedEmployee: any;
  constructor() {
    super();
  }

  back() {
    this.$emit("backToContact", true);
  }
  async mounted() {}
}
</script>

<style scoped src="./Contact-Details.scss" lang="scss">
</style>