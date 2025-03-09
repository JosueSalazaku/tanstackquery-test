import type { Post } from "../types";
import { usePosts } from "../hooks/usePosts";

function FetchPosts() {
    const { data: posts, error, isLoading } = usePosts();
    
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading posts</p>;

      return (
          <div>
              {posts.map((post: Post) => (
                  <li key={post.id}>{post.title} {post.body}</li>
              ))}
          </div>
      );
}

export default FetchPosts;
