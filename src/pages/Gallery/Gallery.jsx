import { useInfiniteQuery } from "@tanstack/react-query";

const getImages = async ({ pageParam = 0 }) => {
    const res = await fetch(`gallery.json&offset=${pageParam}`);
    const data = await res.json();
    return {
      pages: [{ ...data, prevOffset: pageParam }],
    };
  };

const Gallery = () => {
    const {data, fetchNextPage, hasNextPage} = useInfiniteQuery({

        queryKey: ["images"],
        queryFn: getImages,
        getNextPageParam: (lastPage) =>{
            if(lastPage.prevOffset + 10 > lastPage.imagesCount){
                return false;
            }
            return lastPage.prevOffset + 10;
        }
    })

    const images = data?.pages.reduce((acc, page) =>{
        
        return [...acc,  ...page.images]
        
    }, [])

    console.log(images)

    return (
        <div>
            
            
        </div>
    );
};

export default Gallery;