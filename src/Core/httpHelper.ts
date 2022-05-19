import axios from "axios";

export default class HttpHelper {


    async get(url: string) {
        const result = await axios.get(url);
        return result;
    }

}