import axios from "axios";
import server_url from "../API/server_url";
export default axios.create({
  baseURL: server_url,
});
