import { useEffect, useState } from "react";


const useFeatures = () => {
    const [features,setFeatures] = useState([]);

    const [loading,setLoading] = useState(true)
   
    useEffect(()=>{
        fetch('https://hard-and-fit-server.vercel.app/features')
        .then(res=>res.json())
        .then(data=>{
            setFeatures(data);
            setLoading(false)
        })
    },[])
    return [features,loading]
};

export default useFeatures;