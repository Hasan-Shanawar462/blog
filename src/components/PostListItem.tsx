import React from "react";
import { Link } from "react-router-dom";

interface PostListItemProps {
  id: string;
  title: string;
  categoryName: string;
  snippet: string;
  onClickCategory: (categoryName: string) => void;
}

const PostListItem: React.FC<PostListItemProps> = ({
  id,
  title,
  categoryName,
  snippet,
  onClickCategory,
}) => {
  return (
    <article className="mb-4 mx-auto px-2 px-md-3" style={{ maxWidth: "700px" }}>
      <h2 className="h5 fw-semibold mb-1">
        <Link to={`/post/${id}`} className="text-dark text-decoration-none">
          {title}
        </Link>
      </h2>

      <button
        type="button"
        className="btn btn-link p-0 mb-2"
        style={{ fontSize: "0.9rem", fontWeight: 500, color: "#0066cc" }}
        onClick={() => onClickCategory(categoryName)}
        aria-label={`Filter posts by ${categoryName}`}
      >
        {categoryName}
      </button>

      <p
        className="text-secondary"
        style={{
          maxHeight: "3.6em",
          overflow: "hidden",
          filter: "blur(3px)",
          userSelect: "none",
          lineHeight: "1.2em",
          marginBottom: 0,
        }}
      >
        {snippet}
      </p>
    </article>
  );
};

export default PostListItem;
