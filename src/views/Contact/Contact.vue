<template src="./Contact.html"></template>
<script lang="ts">
import BaseComponent from "@/Core/BaseComponent.vue";
import Component from "vue-class-component";
import ICurrency from "../../Models/ICurrency";

@Component
export default class ContactComponent extends BaseComponent {
  infos: Array<ICurrency> = [];
  constructor() {
    super();
  }

  async mounted() {
    console.log(new Date());
    const result = await this.get(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    this.infos = result.bpi;
    console.log(new Date());
  }
}
</script>

<style scoped src="./Contact.scss" lang="scss">
</style>