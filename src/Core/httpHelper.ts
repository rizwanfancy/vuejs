import axios from "axios";
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class HttpHelper extends Vue {

    public async getAsync(url: string) {
        const result = await axios.get(url);
        return result.data;
    }
}