import axios from "axios";
const instance = axios.create({ baseURL: "https://api.stovepos.com/sys/" });
export default instance;
