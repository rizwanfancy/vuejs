<template src="./Contact.html" extends></template>
<script lang="ts">
import BaseComponent from "@/Core/BaseComponent.vue";
import Component from "vue-class-component";
import ContactDetailComponent from "../Contact-Details/Contact-Details.vue";

@Component({ components: { ContactDetailComponent } })
export default class ContactComponent extends BaseComponent {
  selectedEmployee: any = null;
  items: any[] = [
    { id: 0, total: 1000 },
    { id: 1, total: 2000 },
    { id: 2, total: 3000 },
    { id: 3, total: 4000 },
  ];

  get total() {
    debugger;
    return this.items.reduce(
      (total, current) => (total = total + current.total),
      0
    );
  }
}
</script>

<style scoped src="./Contact.scss" lang="scss">
</style>