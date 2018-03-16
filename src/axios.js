import axios from "axios";

export default axios.create({
    baseURL: "http://vicki.restful.training/api/",
    params: {
        key: "bee937170fc097c6e46ccafba16d5ffe2198ac48",
    },
    headers: {
        Accept: "application/json",
    },
});