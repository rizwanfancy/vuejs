<template src="./Home.html"></template>
<script lang="ts">
import BaseComponent from "@/Core/BaseComponent.vue";
import "devextreme/dist/css/dx.light.css";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import HomeUserComponent from "../HomeUsers/Home-User.vue";

@Component({ components: { HomeUserComponent } })
export default class HomeComponent extends BaseComponent {
  firstName: string = "";
  lastName: string = "";
  fullName: string = "";
  SelectedUser: any = { name: "" };
  HomeUsers: any = [
    { id: 1, name: "rizwan" },
    { id: 2, name: "rizwan fancy" },
  ];

  @Watch("firstName")
  @Watch("lastName")
  getFullName() {
    this.fullName = this.firstName + " " + this.lastName;
  }

  selectedUser(user: any) {
    this.SelectedUser = user;
  }
}
</script>

<style scoped src="./Home.scss" lang="scss">
</style>