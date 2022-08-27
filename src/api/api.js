import axios from "axios";
import { base_url } from "../constants/constants";

const http = axios.create({
    baseURL: base_url
})

const Api = {
    getPizza: () => http.get("pizza-card"),


    delPizza: (id) => http.delete("pizza-card/" + id),
    createPizza: (status ,data) => http.post(status + data)
}


export default Api