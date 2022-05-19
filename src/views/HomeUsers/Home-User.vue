<template src="./Home-User.html"></template>
<script lang="ts">
import BaseComponent from "@/Core/BaseComponent.vue";
import Component from "vue-class-component";
import { Prop, Vue } from "vue-property-decorator";

@Component
export default class HomeUserComponent extends BaseComponent {
  @Prop() userList: any;

  emitUser(user: any) {
    this.$emit("selectedUser", user);
  }
}
</script>

<style lang="scss" scoped src="./Home-User.scss">
</style>