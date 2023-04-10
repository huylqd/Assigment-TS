import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
interface IProduct {
  _id: string;
  name: string;
  price: number;
  image: object[];
  description: string;
}
interface Iprops {
  products: IProduct[];
}
const Products = (props: Iprops) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    setProducts(props.products);
  }, [props]);
  return (
    <div className="row container mx-auto mt-3 mb-4">
      {products.map((product) => {
        return (
          <div
            key={product._id}
            className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mt-3 pr-2 pl-2"
          >
            <div className="card">
              <Link to={`/products/${product._id}`}>
                <img
                  src={product.image}
                  className="card-img-top "
                  alt="product's image"
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">
                  <Link
                    to={`/products/${product._id}`}
                    className="text-decoration-none text-info"
                  >
                    {product.name}
                  </Link>
                </h5>
                <p className="card-text text-danger font-weight-bolder">
                  {product.price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
                <a href="#" className="btn btn-info">
                  Mua ngay
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
