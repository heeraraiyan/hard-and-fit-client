import { useEffect, useState } from "react";


const Blog = () => {
    const [articles, setArticles] = useState([]);

  useEffect(() => {
   
    fetch('blog.json')
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);
    return (
        <div>
        <h2 className='text-4xl italic text-amber-500 text-center mb-12 font-bold'>
          Latest Articles
        </h2>
  
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {articles.map((article) => (
            <div key={article.id} className='bg-white p-6 rounded-lg shadow-md'>
              <h3 className='text-xl font-bold mb-4'>{article.title}</h3>
              <p className='text-gray-600'>{article.content.slice(0, 100)}...</p>
              <p className='text-gray-400 mt-2'>By {article.author} | {article.date}</p>
              <a href={`/blog/${article.id}`} className='text-blue-500 mt-2 block'>
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Blog;