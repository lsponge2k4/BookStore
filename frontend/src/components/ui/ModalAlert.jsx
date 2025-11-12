import React from "react";
import { Modal, Button } from "antd";

/**
 * ModalAlert.jsx
 * Sử dụng Ant Design Modal để hiển thị cảnh báo xác nhận hành động.
 */

const ModalAlert = ({
  open,
  title = "Bạn có chắc chắn không?",
  description = "Hành động này không được phép.",
  okText = "Confirm",
  cancelText = "Cancel",
  onOk,
  onCancel,
  okType = "primary",
  confirmLoading = false,
}) => {
  return (
    <Modal
      open={open}
      title={title}
      onOk={onOk}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          {cancelText}
        </Button>,
        <Button key="ok" type={okType} loading={confirmLoading} onClick={onOk}>
          {okText}
        </Button>,
      ]}
      centered
    >
      <p style={{ marginTop: "8px", fontSize: "14px", color: "#555" }}>
        {description}
      </p>
    </Modal>
  );
};

export default ModalAlert;
