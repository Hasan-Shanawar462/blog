import { createContext,  useState } from "react";
import type { ReactNode } from "react";
import type { Post } from "../types";
import { posts as initialPosts } from "../data/data";

export interface PostsContextType {
  posts: Post[];
  addPost: (post: Post) => void;
  updatePost: (post: Post) => void;
}

const PostsContext = createContext<PostsContextType | undefined>(undefined);

export const PostsProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const addPost = (post: Post) => {
    setPosts((prev) => [...prev, post]);
  };

  const updatePost = (updatedPost: Post) => {
    setPosts((prev) =>
      prev.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
  };

  return (
    <PostsContext.Provider value={{ posts, addPost, updatePost }}>
      {children}
    </PostsContext.Provider>
  );
};



export { PostsContext };
