<template src="./Todo.html"></template>
<script lang="ts">
import BaseComponent from "@/Core/BaseComponent.vue";
import Component from "vue-class-component";

@Component
export default class TodoComponent extends BaseComponent {
  task: string = "";
  isCompleted: boolean = false;
  todoItems: any[] = [];
  currentItem: any = null;

  addTask() {
    if (this.task.length > 0) {
      this.todoItems.push({
        id: Math.random(),
        task: this.task,
        isCompleted: this.isCompleted ? "Yes" : "No",
      });
    }

    this.resetTask();
  }

  updateTask() {
    if (this.currentItem) {
      let obj = this.todoItems.find((o) => o.id === this.currentItem.id);
      if (obj) {
        obj.task = this.task;
        obj.isCompleted = this.isCompleted ? "Yes" : "No";
        this.resetTask();
      }
    }
  }

  editTask(item: any) {
    this.currentItem = item;
    this.task = item.task;
    this.isCompleted = item.isCompleted === "Yes" ? true : false;
  }

  deleteTask(item: any) {
    let index = this.todoItems.indexOf(item);
    this.todoItems.splice(index, 1);
  }

  resetTask() {
    this.task = "";
    this.isCompleted = false;
    this.currentItem = null;
  }
}
</script>

<style scoped src="./Todo.scss" lang="scss">
</style>