import React from "react";
import { Breadcrumb } from "antd";
import { RightOutlined, EllipsisOutlined } from "@ant-design/icons";

/**
 * Breadcrumb.jsx
 * Chuyển từ Radix UI sang Ant Design Breadcrumb.
 * Dùng để hiển thị đường dẫn điều hướng.
 */

const BreadcrumbNav = ({ items = [], ellipsis = false }) => {
  // items: [{ title: "Home", href: "/" }, { title: "Books" }, ...]

  // Nếu muốn hiển thị dấu "..." cho phần giữa (khi breadcrumb dài)
  const processedItems = ellipsis
    ? [
        items[0],
        { title: <EllipsisOutlined />, disabled: true },
        items[items.length - 1],
      ]
    : items;

  return (
    <Breadcrumb
      items={processedItems.map((item, index) => ({
        title: item.href ? (
          <a href={item.href}>{item.title}</a>
        ) : (
          <span>{item.title}</span>
        ),
        key: index,
      }))}
      separator={<RightOutlined style={{ fontSize: "10px" }} />}
    />
  );
};

export default BreadcrumbNav;
