import { useState } from "react";
import { Card, Form, Input, Button, Alert, Typography } from "antd";
import { BookOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export function RegisterPage({ onRegister, onNavigateToLogin }) {
  const [form] = Form.useForm();
  const [error, setError] = useState("");

  const handleSubmit = (values) => {
    const { name, email, password, confirmPassword } = values;

    if (password !== confirmPassword) {
      setError("Mật khẩu không khớp!!");
      return;
    }

    setError("");
    onRegister(name, email, password);
  };

  return (
    <div
      style={{
        minHeight: "calc(100vh - 4rem)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f5f5",
        padding: "1rem",
      }}
    >
      <Card style={{ width: 400 }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <BookOutlined style={{ fontSize: 32, color: "#1677ff" }} />
          <div>
            <Text strong style={{ fontSize: 18, color: "#1677ff" }}>
              IYM Book Store
            </Text>
          </div>
        </div>

        <Title level={4} style={{ textAlign: "center" }}>
          Gia nhập cộng đồng chúng tôi
        </Title>
        <Text
          type="secondary"
          style={{ display: "block", textAlign: "center", marginBottom: 20 }}
        >
          Đăng ký để trải nghiệm mua sắm tốt hơn
        </Text>

        {error && (
          <Alert
            message="Error"
            description={error}
            type="error"
            showIcon
            style={{ marginBottom: 16 }}
          />
        )}

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          autoComplete="off"
        >
          <Form.Item
            label="Họ & tên"
            name="name"
            rules={[
              { required: true, message: "Hãy thêm đủ tên của bạn nhé !" },
            ]}
          >
            <Input placeholder="Nguyễn Văn A" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Hãy thêm email của bạn" },
              { type: "email", message: "Nhập email đúng chuẩn nhé!" },
            ]}
          >
            <Input placeholder="ngva@example.com" />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
              { required: true, message: "Nhập mật khẩu của bạn" },
              { min: 6, message: "Mật khẩu phải có ít nhất 6 ký tự" },
            ]}
          >
            <Input.Password placeholder="Ít nhất 6 ký tự nhé!" />
          </Form.Item>

          <Form.Item
            label="Xác thực mật khẩu"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Xác thực lại mật khẩu của bạn nhé!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Mật khẩu chưa khớp nè"));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Xác thực mật khẩu" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Create Account
            </Button>
          </Form.Item>

          <div style={{ textAlign: "center" }}>
            <Text type="secondary">Bạn có tài khoản rồi sao? </Text>
            <Button
              type="link"
              onClick={onNavigateToLogin}
              style={{ padding: 0 }}
            >
              Đăng nhập
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}
