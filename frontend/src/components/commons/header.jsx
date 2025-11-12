import React, { useState } from "react";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  BookOutlined,
  HomeOutlined,
  FireOutlined,
  EnvironmentOutlined,
  InfoCircleOutlined,
  MenuOutlined,
  LogoutOutlined,
  CreditCardOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Menu,
  Button,
  Input,
  Dropdown,
  Avatar,
  Drawer,
  Badge,
  Space,
} from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

export function HeaderBar({
  currentPage,
  onPageChange,
  onSearch,
  profileName,
  cartCount,
  onLogout,
  isLoggedIn,
  onCartClick,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    {
      key: "home",
      label: <Link to={"/"}>Trang chủ</Link>,
      icon: <HomeOutlined />,
    },
    {
      key: "popular",
      label: <Link to={"/popular"}>Ưu thích</Link>,
      icon: <FireOutlined />,
    },
    {
      key: "location",
      label: <Link to={"/location"}>Địa chỉ</Link>,
      icon: <EnvironmentOutlined />,
    },
    {
      key: "information",
      label: <Link to={"/information"}>Thông tin</Link>,
      icon: <InfoCircleOutlined />,
    },
  ];

  const handleSearch = (value) => {
    onSearch(value);
  };

  const profileMenu = {
    items: [
      {
        key: "profile",
        label: `Hồ sơ (${profileName})`,
        icon: <UserOutlined />,
        onClick: () => onPageChange("profile"),
      },
      {
        key: "payment",
        label: "Phương thức thanh toán",
        icon: <CreditCardOutlined />,
        onClick: () => onPageChange("payment"),
      },
      {
        key: "logout",
        label: "Đăng xuất",
        icon: <LogoutOutlined />,
        danger: true,
        onClick: onLogout,
      },
    ],
  };

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        width: "100%",
        background: "#fff",
        borderBottom: "1px solid #f0f0f0",
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
      }}
    >
      {/* Logo */}
      <div
        onClick={() => onPageChange("home")}
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          marginRight: 24,
        }}
      >
        <BookOutlined
          style={{ fontSize: 20, color: "#1677ff", marginRight: 8 }}
        />
        <span className="logo-text">IYM Book Store</span>
      </div>

      {/* Navigation (Desktop) */}
      <Menu
        mode="horizontal"
        selectedKeys={[currentPage]}
        onClick={(e) => onPageChange(e.key)}
        items={navItems}
        style={{ flex: 1, minWidth: 400 }}
      />

      {/* Search (Desktop) */}
      <Input.Search
        placeholder="Tìm kiếm sách, tác giả..."
        allowClear
        onSearch={handleSearch}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ width: 250, marginRight: 16 }}
      />

      {/* Right Side Actions */}
      <Space align="center">
        <Badge count={cartCount} size="small">
          <Button
            type="text"
            icon={<ShoppingCartOutlined />}
            onClick={onCartClick}
          />
        </Badge>

        {isLoggedIn ? (
          <Dropdown menu={profileMenu} placement="bottomRight">
            <Avatar
              style={{ backgroundColor: "#1677ff", cursor: "pointer" }}
              icon={<UserOutlined />}
            >
              {profileName?.charAt(0).toUpperCase()}
            </Avatar>
          </Dropdown>
        ) : (
          <Button
            type="primary"
            icon={<LoginOutlined />}
            onClick={() => onPageChange("login")}
          >
            Đăng nhập
          </Button>
        )}

        {/* Mobile menu button */}
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setDrawerOpen(true)}
          className="md:hidden"
        />
      </Space>

      {/* Mobile Drawer Menu */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
      >
        <Menu
          mode="inline"
          selectedKeys={[currentPage]}
          onClick={(e) => {
            onPageChange(e.key);
            setDrawerOpen(false);
          }}
          items={[
            ...navItems,
            ...(isLoggedIn
              ? [
                  {
                    key: "payment",
                    label: "Phương thức thanh toán",
                    icon: <CreditCardOutlined />,
                  },
                  {
                    key: "logout",
                    label: "Đăng xuất",
                    icon: <LogoutOutlined />,
                    danger: true,
                    onClick: () => {
                      onLogout();
                      setDrawerOpen(false);
                    },
                  },
                ]
              : [
                  {
                    key: "login",
                    label: <Link to={"/register"}>Đăng ký</Link>,
                    icon: <LoginOutlined />,
                    onClick: () => {
                      onPageChange("login");
                      setDrawerOpen(false);
                    },
                  },
                ]),
          ]}
        />
      </Drawer>
    </Header>
  );
}
