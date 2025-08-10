import { useContext } from 'react';
import { PostsContext, type PostsContextType } from '../context/PostsContext';

export const usePosts = (): PostsContextType => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error('usePosts must be used within a PostsProvider');
  }
  return context;
};
