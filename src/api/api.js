import axios from "axios";

const instance = axios.create({
    baseURL: "http://193.187.172.89:8080"
})

export const getData = {
    async suboptimal(key) {
        let response = await instance.get(`/suboptimalsearch/${key}`);
        console.log(response);
        return response;
    },
    async optimalUniversal(key) {
        let response = await instance.get(`/optimal/universal/${key}`);
        console.log(response);
        return response;
    },
    async optimalOrdered(key) {
        let response = await instance.get(`/optimal/ordered/${key}`);
        console.log(response);
        return response;
    },
    async optimalUnordered(key) {
        let response = await instance.get(`/optimal/unordered/${key}`);
        console.log(response);
        return response;
    },
}
/*export const getData = async (key) => {
    let response = await axios.get(`http://193.187.172.89:8080/suboptimalsearch/${key}`);
    return response;
}*/

