import { categories, authors } from '../data/data'; 
import { Link, useSearchParams } from 'react-router-dom';
import { usePosts } from '../hooks/useposts';
import CategoryFilter from '../components/CategoryFilter';

const HomePage = () => {
  const { posts } = usePosts();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category') || '';

  const filteredPosts = categoryFilter
    ? posts.filter((post) => post.categoryId === categoryFilter)
    : posts;

  const handleCategoryChange = (categoryId: string | null) => {
    if (categoryId) setSearchParams({ category: categoryId });
    else setSearchParams({});
  };

  const handleCategoryClick = (categoryId: string) => {
    if (categoryFilter === categoryId) setSearchParams({});
    else setSearchParams({ category: categoryId });
  };

  return (
    <main className="container my-5" style={{ maxWidth: '1140px' }}>
      <h2 className="mb-4 display-6 fw-bold text-dark">Latest Posts</h2>

      <CategoryFilter
        categories={categories}
        activeCategoryId={categoryFilter || null}
        onCategoryChange={handleCategoryChange}
      />

      {filteredPosts.length === 0 && (
        <p className="text-center">No posts found for the selected category.</p>
      )}

      <ul className="list-unstyled row g-4">
        {filteredPosts.map((post, index) => {
          const author = authors.find((a) => a.id === post.authorId);
          const category = categories.find((c) => c.id === post.categoryId);

          return (
            <li
              key={post.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              style={{ cursor: 'pointer' }}
            >
              <Link
                to={`/post/${post.id}`}
                className="card h-100 text-decoration-none text-dark card-animate"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="card-body d-flex flex-column">
                  <h3
                    className="card-title fw-bold"
                    style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}
                  >
                    {post.title}
                  </h3>
                  <p className="mb-1">
                    Category:{' '}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (category) handleCategoryClick(category.id);
                      }}
                      className="btn btn-link p-0 align-baseline fw-semibold text-decoration-underline text-dark"
                      aria-label={`Filter posts by ${category?.name}`}
                    >
                      {category?.name}
                    </button>
                  </p>
                  <p className="text-muted small mb-3">Author: {author?.name ?? 'Unknown'}</p>

                  <p
                    className="blurred-snippet flex-grow-1"
                    style={{
                      fontSize: '1rem',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: 'vertical',
                      color: '#555',
                      marginBottom: '1rem',
                    }}
                  >
                    {post.content}
                  </p>

                  <Link
                    to={`/post/${post.id}`}
                    className="btn btn-outline-dark mt-auto align-self-start"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Read More
                  </Link>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default HomePage;
