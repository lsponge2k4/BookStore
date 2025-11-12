import React from "react";
import { Layout, Row, Col, Typography } from "antd";

const { Footer: AntFooter } = Layout;
const { Title, Text } = Typography;

export default function Footer() {
  return (
    <AntFooter
      style={{
        background: "#fafafa",
        borderTop: "1px solid #f0f0f0",
        marginTop: 64,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <Row gutter={[32, 32]}>
          <Col xs={24} md={6}>
            <Title level={4}>IYM Book Store</Title>
            <Text type="secondary">
              Your trusted partner for Love, Knowledge, and History books.
            </Text>
          </Col>

          <Col xs={24} md={6}>
            <Title level={5}>Categories</Title>
            <ul style={{ listStyle: "none", padding: 0, color: "#666" }}>
              <li>Love & Romance</li>
              <li>Knowledge & Learning</li>
              <li>History & Heritage</li>
            </ul>
          </Col>

          <Col xs={24} md={6}>
            <Title level={5}>Support</Title>
            <ul style={{ listStyle: "none", padding: 0, color: "#666" }}>
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Returns</li>
              <li>Shipping</li>
            </ul>
          </Col>

          <Col xs={24} md={6}>
            <Title level={5}>Connect</Title>
            <ul style={{ listStyle: "none", padding: 0, color: "#666" }}>
              <li>Newsletter</li>
              <li>Social Media</li>
              <li>Book Club</li>
              <li>Events</li>
            </ul>
          </Col>
        </Row>

        <div
          style={{
            borderTop: "1px solid #eee",
            marginTop: 32,
            paddingTop: 16,
            textAlign: "center",
          }}
        >
          <Text type="secondary">
            © 2024 IYM Book Store. All rights reserved.
          </Text>
        </div>
      </div>
    </AntFooter>
  );
}
