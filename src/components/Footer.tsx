import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-light border-top mt-5">
      <div className="container py-4">
        
        <h4 className="fw-bold text-dark mb-3">Minimalist Blog</h4>

        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center text-secondary">
          <p className="mb-3 mb-sm-0 fs-6">
            &copy; {new Date().getFullYear()} Minimalist Blog. All rights reserved.
          </p>
          <nav>
            <a
              href="/"
              className="text-secondary text-decoration-none mx-3 fs-6"
              aria-label="Home page"
            >
              Home
            </a>
            <a
              href="/manage-post"
              className="text-secondary text-decoration-none mx-3 fs-6"
              aria-label="Create a new post"
            >
              Create Post
            </a>
            {/* <a
              href="/contact"
              className="text-secondary text-decoration-none mx-3 fs-6"
              aria-label="Contact page"
            >
              Contact
            </a> */}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
