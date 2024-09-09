import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts/1";

export const getData = () => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
};

export const getDataByAxios = async () => {
    try {
        const response = await axios.get(url);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error.message);
    }
};
