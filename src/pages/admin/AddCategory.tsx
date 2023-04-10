import { Button, Form, Input } from "antd";
import { ICategory } from "../../types/category";

//type of props
interface IProps {
  onAdd: (data: ICategory) => void;
}

const AddCategory = (props: IProps) => {
  const onFinish = (values: any) => {
    props.onAdd(values);
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
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Tên danh mục"
        name="name"
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
          Thêm
        </Button>
      </Form.Item>
    </Form>
  );
};
export default AddCategory;