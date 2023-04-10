import React from "react";

const HomePage = () => {
  return (
    <div className="container">
      <div
        id="carouselExampleIndicators"
        className="carousel slide wrapper-carousel my-3 mx-auto"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://static.vecteezy.com/system/resources/previews/003/692/287/original/big-sale-discount-promotion-banner-template-with-blank-product-podium-scene-graphic-free-vector.jpg"
              className="d-block w-100"
              alt="Slide's Image"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://1.bp.blogspot.com/-RS1wY4-J7Bo/YMdpGjII0fI/AAAAAAAACoc/nj1Nw_OqadMeHqDSpWHERRyzYrMx7OvfwCLcBGAsYHQ/s1280/Product%2BBanner%2BDesign.webp"
              className="d-block w-100"
              alt="Slide's Image"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.template.net/wp-content/uploads/2016/11/15115545/Free-Marketing-Product-Sale-Banner.jpg"
              className="d-block w-100"
              alt="Slide's Image"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-target="#carouselExampleIndicators"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-target="#carouselExampleIndicators"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
