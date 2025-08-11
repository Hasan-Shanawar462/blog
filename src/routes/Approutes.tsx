import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home';
import PostPage from '../pages/Postpage';
import ManagePostPage from '../pages/ManagePost';
import BlogPage from '../pages/Blog';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
       <Route path="/post/:postId" element={<PostPage />} />
       <Route path="/manage-post" element={<ManagePostPage />} />
        <Route path="/blog" element={<BlogPage />} />
    </Routes>
  );
}
