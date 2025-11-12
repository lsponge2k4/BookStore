import React from "react";
import { Avatar } from "antd";

/**
 * Avatar.jsx
 * Thay thế cho Radix Avatar bằng Ant Design Avatar.
 * Hỗ trợ hiển thị ảnh người dùng, fallback ký tự hoặc icon khi lỗi.
 */

const AvatarUser = ({
  src,
  alt = "User avatar",
  size = 40,
  name = "",
  style = {},
  className = "",
  shape = "circle", // hoặc 'square'
}) => {
  // Nếu có tên, lấy ký tự đầu làm fallback
  const fallbackText = name ? name.charAt(0).toUpperCase() : "U";

  return (
    <Avatar
      src={src}
      alt={alt}
      size={size}
      shape={shape}
      style={{
        backgroundColor: "#f56a00",
        verticalAlign: "middle",
        ...style,
      }}
      className={className}
    >
      {fallbackText}
    </Avatar>
  );
};

export default AvatarUser;
