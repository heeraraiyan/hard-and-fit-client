import { useQuery } from "@tanstack/react-query";
import useAxiosScure from "./useAxiosScure";


const useTrainer = () => {
    const axiosSecure = useAxiosScure();
    // tanstack 
    const {data: trainer =[]} = useQuery({
        queryKey: ['trainer'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/trainers')
            return res.data;
        }
         
    })
    return [trainer]
};

export default useTrainer;