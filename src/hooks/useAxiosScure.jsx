import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://hard-and-fit-server.vercel.app'
})

const useAxiosScure = () => {
    return axiosSecure;
};

export default useAxiosScure;