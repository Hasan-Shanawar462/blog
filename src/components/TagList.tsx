import React from "react";

interface TagListProps {
  tags: string[];
  onTagClick: (tag: string) => void;
}

const TagList: React.FC<TagListProps> = ({ tags, onTagClick }) => {
  if (!tags.length) return null;

  return (
    <div className="d-flex flex-wrap gap-2">
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          onClick={() => onTagClick(tag)}
          className="btn btn-sm btn-outline-secondary rounded-pill text-nowrap"
          aria-label={`Filter posts by tag ${tag}`}
        >
          #{tag}
        </button>
      ))}
    </div>
  );
};

export default TagList;
