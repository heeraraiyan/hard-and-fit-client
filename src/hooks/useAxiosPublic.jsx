import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://hard-and-fit-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;