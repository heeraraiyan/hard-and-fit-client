import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';
import { Pagination, Navigation } from 'swiper/modules';


const Blog = () => {
    const [articles, setArticles] = useState([]);

  useEffect(() => {
   
    fetch('blog.json')
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []); const swiperParams = {
    pagination: {
      type: 'progressbar',
    },
    navigation: true,
    modules: [Pagination, Navigation],
  };

  return (
    <div>
      <h2 className='text-4xl italic text-amber-500 text-center mb-12 font-bold'>
        Latest Articles
      </h2>

      <Swiper {...swiperParams} className="mySwiper">
        {articles.map((article) => (
          <SwiperSlide key={article.id}>
            <div className='bg-white p-6 rounded-lg shadow-md text-center mb-20'>
              <h3 className='text-xl font-bold mb-4'>{article.title}</h3>
              <p className='text-gray-600'>{article.content.slice(0, 100)}...</p>
              <p className='text-gray-400 mt-2'>By {article.author} | {article.date}</p>
              <a href={`/blog/${article.id}`} className='text-blue-500 mt-2 block'>
                Read More
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;