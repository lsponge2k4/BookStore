import { useState } from "react";
import { Card, Form, Input, Button, Alert, Typography } from "antd";
import { BookOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export function LoginPage({ onLogin, onNavigateToRegister }) {
  const [form] = Form.useForm();
  const [error, setError] = useState("");

  const handleSubmit = (values) => {
    const { email, password } = values;

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    setError("");
    onLogin(email, password);
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
          Mừng bạn trở lại
        </Title>
        <Text
          type="secondary"
          style={{ display: "block", textAlign: "center", marginBottom: 20 }}
        >
          Đăng nhập để khám phá nhiều tiện ích hơn
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
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Hãy nhập email" },
              { type: "email", message: "Nhập email đúng cách nha!" },
            ]}
          >
            <Input placeholder="nva@example.com" />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
              { required: true, message: "Hẫy nhập mật khẩu của bạn" },
              { min: 6, message: "Mật khẩu ít nhất 6 ký tự đó" },
            ]}
          >
            <Input.Password placeholder="Nhập mật khẩu" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Đăng ký
            </Button>
          </Form.Item>

          <div style={{ textAlign: "center" }}>
            <Text type="secondary">Bạn chưa có tài khoản ? </Text>
            <Button
              type="link"
              onClick={onNavigateToRegister}
              style={{ padding: 0 }}
            >
              Đăng ký
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}
