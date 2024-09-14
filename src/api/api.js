import axios from "axios";

export const getData = async (key) => {
    let response = await axios.get(`http://193.187.172.89:8080/suboptimalsearch/${key}`);
    return response;
}

