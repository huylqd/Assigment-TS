import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  Col,
  Divider,
  Row,
  theme,
  Layout,
  Typography,
  Button,
} from "antd";
import { useParams } from "react-router-dom";
import { IProduct } from "../types/product";
import { ICategory } from "../types/category";
interface Iprops {
  products: IProduct[];
  categories: ICategory[];
}
const ProductDetail = (props: Iprops) => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>();
  const [categories, setCategories] = useState<ICategory[]>();

  //get one product
  useEffect(() => {
    setProduct(props.products?.find((product) => product._id === id));
  }, [props]);

  //get one product
  useEffect(() => {
    setCategories(props.categories);
  }, [props]);

  //find one category and get name of category
  const cateName = categories?.find((category) => {
    return category._id === product?.categoryId;
  });
  const { Header, Content, Footer } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Content className="site-layout" style={{ padding: "0 50px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
        <Breadcrumb.Item>Sản phẩm</Breadcrumb.Item>
        <Breadcrumb.Item>Chi tiết</Breadcrumb.Item>
      </Breadcrumb>
      <div
        style={{ padding: 24, minHeight: 380, background: colorBgContainer }}
      >
        <Row>
          <Col flex={2}>
            <img
              src={product?.image}
              alt="product's image"
              style={{
                border: "1px solid #f1f2f3",
                borderRadius: "5px",
                width: "400px",
              }}
            />
          </Col>
          <Col flex={3}>
            <Typography
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "#fa541c",
                marginTop: "10px",
              }}
            >
              {product?.name}
            </Typography>
            <Typography
              style={{
                fontSize: "20px",
                fontWeight: "600",
                marginTop: "10px",
                color: "#1677ff",
              }}
            >
              {cateName?.name}
            </Typography>
            <Typography
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#f5222d",
                marginTop: "10px",
              }}
            >
              {product?.price.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </Typography>
            <Typography
              style={{
                fontSize: "18px",
                fontWeight: "400",

                marginTop: "10px",
              }}
            >
              {product?.description}
            </Typography>
            <Button
              style={{
                backgroundColor: "#ff7a45",
                color: "#ffff",
                width: "120px",
                height: "40px",
                marginTop: "20px",
              }}
            >
              Mua ngay
            </Button>
          </Col>
        </Row>
      </div>
    </Content>
  );
};

export default ProductDetail;