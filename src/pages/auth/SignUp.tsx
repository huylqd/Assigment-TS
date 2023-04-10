import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { SignUpUser } from "../../types/user";
interface IProps {
  onSignUp: (data: SignUpUser) => void;
}
const SignUp = (props: IProps) => {
  const onFinish = (values: any) => {
    props.onSignUp(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    alert(errorInfo) 
  };

  return (
    <div className="mt-4">
      <h3 className="txt-title-inup">Đăng ký tài khoản</h3>
      <Form
        name="basic"
        style={{ maxWidth: 400 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="mx-auto"
      >
        <Form.Item
          label="Họ tên"
          name="name"
          rules={[{ required: true, message: "Vui lòng nhập họ tên của bạn!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Vui lòng nhập email của bạn!" },
            {
              type: "email",
              message: "Vui lòng nhập email đúng định dạng",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[
            { required: true, message: "Vui lòng nhập mật khẩu!" },
            { min: 6, message: "Mật khẩu phải nhiều hơn 6 ký tự!" },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Xác nhận mật khẩu"
          name="confirmPassword"
          rules={[
            { required: true, message: "Vui lòng nhập lại mật khẩu!" },
            { min: 6, message: "Mật khẩu phải nhiều hơn 6 ký tự!" },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ backgroundColor: "#fa541c" }}
          >
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;