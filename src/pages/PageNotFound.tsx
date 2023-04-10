import React from "react";

const PageNotFound = () => {
  return (
    <div className="container">
      <h4 className="text-danger text-center mt-4">
        Sorry, Not Found This Page !
      </h4>
      <img
        src="https://static.vecteezy.com/system/resources/previews/007/162/540/original/error-404-page-not-found-concept-illustration-web-page-error-creative-design-modern-graphic-element-for-landing-page-infographic-icon-free-vector.jpg"
        alt="not found image"
        className="not-found-img"
      />
    </div>
  );
};

export default PageNotFound;
