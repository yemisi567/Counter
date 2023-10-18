import React from "react";
import cat from './cute-cat.jpeg'
const ErrorBoundary = () => {
  return (
    <div className="error-container">
      <h1 className="error-heading">Oops! Something went wrong.</h1>
      <p className="error-message">
        We're sorry, but an error occurred. Our team has been notified, and
        we'll do our best to fix it as soon as possible.
      </p>
      <div className="error-image">
        <img
          src={cat}
          alt="Cute Cat with an Apologetic Expression"
        />
      </div>
    </div>
  );
};

export default ErrorBoundary;
