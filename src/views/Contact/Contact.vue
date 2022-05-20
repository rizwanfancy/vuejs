<template src="./Contact.html" extends></template>
<script lang="ts">
import BaseComponent from "@/Core/BaseComponent.vue";
import Component from "vue-class-component";
import ICurrency from "../../Models/ICurrency";
import ContactDetailComponent from "../Contact-Details/Contact-Details.vue";

@Component({ components: { ContactDetailComponent } })
export default class ContactComponent extends BaseComponent {
  infos: Array<ICurrency> = [];
  employees: any[] = [];
  selectedEmployee: any = null;
  constructor() {
    super();
  }

  Edit(item: any) {
    debugger;
    this.selectedEmployee = item;
  }

  async getCurrentPrice() {
    const result = await this.getAsync(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    this.infos = result.bpi;
  }

  backToContact(value: any) {
    this.selectedEmployee = null;
  }

  async getdummyEmployees() {
    const result = await this.getAsync(
      "http://dummy.restapiexample.com/api/v1/employees"
    );
    this.employees = result.data.sort(
      (a: any, b: any) => b.employee_salary - a.employee_salary
    );
  }

  async mounted() {
    await this.getCurrentPrice();
    await this.getdummyEmployees();
  }
}
</script>

<style scoped src="./Contact.scss" lang="scss">
</style>