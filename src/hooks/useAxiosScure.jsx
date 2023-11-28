import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosScure = () => {
    return axiosSecure;
};

export default useAxiosScure;