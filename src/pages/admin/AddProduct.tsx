import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  message,
  Upload,
  Space
} from "antd";
import type { FormInstance } from "antd/es/form";
import { IProduct } from "../../types/product";
import { ICategory } from "../../types/category";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";

//type Props
interface IProps {
  categories: ICategory[];
  onAdd: (data: IProduct) => void;
}
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AddProduct = (props: any) => {
  const formRef = React.useRef<FormInstance>(null);
  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    setCategories(props.categories);
  }, [props.categories]);

  // antd
  const onFinish = (values: any) => {
    const images = values.image.fileList.map((value: any) => {
      return value.response[0];
    });
    const {
      name,
      price,
      description,
      categoryId } = values
    const nameWithoutSpace = name.trim();
    const descriptionWithoutSpace = description.trim();
    const categoryIdWithoutSpace = categoryId.trim();
    props.onAdd({
      name: nameWithoutSpace,
      price,
      description: descriptionWithoutSpace,
      categoryId: categoryIdWithoutSpace,
      image: images
    } );
  };

  const onFinishFailed = (errorInfo: any) => {
    alert(errorInfo)
  };

  const onReset = () => {
    formRef.current?.resetFields();
  };

  return (
    <Form
      {...layout}
      ref={formRef}
      name="control-ref"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      style={{ maxWidth: 600 }}
    >
      <Form.Item
        name="categoryId"
        label="Danh mục"
        rules={[{ required: true, message: "Vui lòng chọn danh mục" }]}
      >
        <Select placeholder="Chọn danh mục" allowClear>
          {categories.map((category) => {
            return <Option value={category._id}>{category.name}</Option>;
          })}
        </Select>
      </Form.Item>

      <Form.Item
        name="name"
        label="Tên sản phẩm"
        rules={[
          { required: true, message: "Vui lòng nhập tên sản phẩm" },
          { min: 5, message: "Tên sản phẩm phải nhiều hơn 5 ký tự" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="description"
        label="Mô tả sản phẩm"
        rules={[
          { required: true, message: "Vui lòng nhập tên sản phẩm" },
          { min: 10, message: "Mô tả sản phẩm phải nhiều hơn 10 ký tự" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="price"
        label="Giá sản phẩm"
        rules={[
          { required: true, message: "Vui lòng nhập giá sản phẩm" },
          {
            pattern: /^(?:\d*)$/,
            message: "Giá sản phẩm phải là số",
          },
        ]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        name="image"
        label="Ảnh sản phẩm"
        rules={[{ required: true, message: "Dán link file ảnh" }]}
      >
        <Upload
            action="http://localhost:8080/api/images"
            listType="picture"
            name="image"
            multiple
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Thêm
        </Button>
        <Button htmlType="button" onClick={onReset} className="ml-2">
          Đặt lại
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddProduct;