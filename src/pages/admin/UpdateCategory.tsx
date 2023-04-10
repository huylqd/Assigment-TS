import React, { useEffect, useState } from "react";
import { Button, Form, Input, FormInstance } from "antd";
import { useParams } from "react-router-dom";
import { ICategory } from "../../types/category";
interface IProps {
  categories: ICategory[];
  onUpdate: (data: ICategory) => void;
}
const UpdateCategory = (props: IProps) => {
  const { id } = useParams();
  const formRef = React.useRef<FormInstance>(null);
  const [form] = Form.useForm();
  const [category, setCategory] = useState<ICategory>();

  useEffect(() => {
    setCategory(props.categories?.find((category: ICategory) => category._id === id));
  }, [props.categories]);

  useEffect(() => {
    setFields();
  }, [category]);

  const setFields = () => {
    form.setFieldsValue({
      _id: category?._id,
      name: category?.name,
      products: category?.products,
    });
  };

  const onReset = () => {
    formRef.current?.resetFields();
  };
  const onFinish = (values: any) => {
    props.onUpdate(values)
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      form={form}
      ref={formRef}
      autoComplete="off"
    >
       <Form.Item name="_id" style={{ display: "none" }}>
        <Input />
      </Form.Item>
      <Form.Item name="products" style={{ display: "none" }}>
        <Input />
      </Form.Item>
      <Form.Item
        name="name"
        label="Tên danh mục"
        rules={[
          { required: true, message: "Vui lòng nhập tên danh mục!" },
          { min: 3, message: "Vui lòng nhập tên sản phẩm nhiều hơn 3 ký tự" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type="primary"
          htmlType="submit"
          style={{ background: "#1677FF" }}
        >
          Cập nhật
        </Button>
        <Button
          type="primary"
          style={{ background: "#1677FF", marginLeft: "5px" }}
          onClick={onReset}
        >
          Đặt lại
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UpdateCategory;