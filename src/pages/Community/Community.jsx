import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import './Community.css'


const Community = () => {

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
  
    const axiosPublic = useAxiosPublic();
  

    useEffect(() => {
        
        axiosPublic.get('/posts')
          .then((response) => setPosts(response.data))
          .catch((error) => console.error('Error fetching posts:', error));
      }, [axiosPublic]);



    const handleVote = (postId, type) => {
        
        console.log(`Post ${postId} ${type}-voted`);
      };
    return ( <div className="community-container pt-28">
    <Helmet>
      <title>HARD & TIME | Community</title>
    </Helmet>

    {/* Display posts */}
    {posts.map((post) => (
      <div key={post.id} className="post-container">
        <div className="post-content">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
        <div className="vote-buttons">
          <button onClick={() => handleVote(post.id, 'up')}>Upvote</button>
          <button onClick={() => handleVote(post.id, 'down')}>Downvote</button>
        </div>
      </div>
    ))}

    {/* Pagination */}
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => prev - 1)}
      >
        Previous
      </button>
      <span>Page {currentPage}</span>
      <button onClick={() => setCurrentPage((prev) => prev + 1)}>Next</button>
    </div>
  </div>
);
};
  

export default Community;