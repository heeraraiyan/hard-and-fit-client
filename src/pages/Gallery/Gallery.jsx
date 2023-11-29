import { useState } from "react";
import useGallery from "../../hooks/useGallery";
import InfiniteScroll from "react-infinite-scroll-component";
import '../Gallery/Gallery.css'


const Gallery = () => {
    // const [images] = useGallery();

    const [images, fetchMoreImages, hasMoreImages] = useGallery(12);
    const [hasMore, setHasMore] = useState(hasMoreImages);
  
    const handleLoadMore = () => {
      if (hasMore) {
        fetchMoreImages();
        setHasMore(hasMoreImages);
      }
    };
  
    return (
        <div className="pt-28 gallery-container mb-20">
      <h2>{images.length}</h2>

      <InfiniteScroll
        dataLength={images.length}
        next={handleLoadMore}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <div className="image-grid">
          {images.map((image, index) => (
            <img key={index} src={image.url} alt={`Image ${index}`} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Gallery;