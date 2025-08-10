import { BrowserRouter } from 'react-router-dom';
import { PostsProvider } from './context/PostsContext';
import AppRoutes from './routes/Approutes';
import Header from './components/Header'; 
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <PostsProvider>
        <Header />
        <AppRoutes />
        <Footer/>
      </PostsProvider>
    </BrowserRouter>
  );
}

export default App;
