import React from "react";


interface Category {
  id: string;
  name: string;
}

interface CategoryFilterProps {
  categories: Category[];
  activeCategoryId: string | null;
  onCategoryChange: (categoryId: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategoryId,
  onCategoryChange,
}) => {
  return (
    <div className="mb-4 d-flex flex-wrap gap-2">
      <button
        type="button"
        className={`btn ${
          !activeCategoryId ? "btn-primary" : "btn-outline-secondary"
        }`}
        onClick={() => onCategoryChange(null)}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          className={`btn ${
            activeCategoryId === category.id ? "btn-primary" : "btn-outline-secondary"
          }`}
          onClick={() => onCategoryChange(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
