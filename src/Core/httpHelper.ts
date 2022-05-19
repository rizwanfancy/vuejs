import axios from "axios";

export default class HttpHelper {


    public async getAsync(url: string) {
        const result = await axios.get(url);
        return result;
    }

}