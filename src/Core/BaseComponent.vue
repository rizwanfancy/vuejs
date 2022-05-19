<script lang="ts">
import axios from "axios";
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class BaseComponent extends Vue {
  constructor() {
    super();
  }

  async get(url: any) {
    const result = await axios.get(url);
    return result.data;
  }
}
</script>