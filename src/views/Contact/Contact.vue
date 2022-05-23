<template src="./Contact.html" extends></template>
<script lang="ts">
import BaseComponent from "@/Core/BaseComponent.vue";
import Component from "vue-class-component";
import ContactDetailComponent from "../Contact-Details/Contact-Details.vue";

@Component({ components: { ContactDetailComponent } })
export default class ContactComponent extends BaseComponent {
  selectedEmployee: any = null;
}
</script>

<style scoped src="./Contact.scss" lang="scss">
</style>