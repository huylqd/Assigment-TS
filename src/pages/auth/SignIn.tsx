import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { SignInUser } from "../../types/user";

//type of Props
interface IProps {
  onSignIn: (data: SignInUser) => void;
}
const SignIn = (props: IProps) => {
  const onFinish = (values: any) => {
    props.onSignIn(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    alert(errorInfo)
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="mt-4">
      <h3 className="txt-title-inup">Đăng nhập tài khoản</h3>
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
          // name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 5, span: 10 }}
        >
          <Checkbox>Ghi nhớ tài khoản</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 11, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ backgroundColor: "#fa541c" }}
          >
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;