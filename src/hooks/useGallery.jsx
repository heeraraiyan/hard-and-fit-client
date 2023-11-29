import { useEffect, useState } from "react";


const useGallery = () => {
    const [images,setImages] = useState([]);

    const [loading,setLoading] = useState(true)
   
    useEffect(()=>{
        fetch('gallery.json')
        .then(res=>res.json())
        .then(data=>{
            setImages(data);
            setLoading(false)
        })
    },[])
    return [images,loading]
};

export default useGallery;