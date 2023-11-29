import { useQuery } from "@tanstack/react-query";
import useAxiosScure from "./useAxiosScure";


const useSubscribes = () => {
    const axiosSecure = useAxiosScure();
    // tanstack 
    const {data: subscribes =[]} = useQuery({
        queryKey: ['subscribes'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/subscribes')
            return res.data;
        }
         
    })
    return [subscribes]
};

export default useSubscribes;