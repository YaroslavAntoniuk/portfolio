import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Yaroslav Antoniuk. All rights reserved.</p>
        <p>
          Follow me on{" "}
          <a href="https://www.linkedin.com/in/yaroslav-antoniuk-855718354/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>{" "}
          and{" "}
          <a href="https://github.com/YaroslavAntoniuk" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Footer;