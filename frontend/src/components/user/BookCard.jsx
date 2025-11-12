import React from "react";
import { Card, Button, Tag, Rate, Image } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";

/**
 * Props:
 * book: {
 *   id, title, author, price, oldPrice, rating, category, genre, image, description
 * }
 * onAddToCart(book)
 * onBookClick(bookId)
 * onQuickView(bookId)
 */

const BookCard = ({ book, onAddToCart, onBookClick, onQuickView }) => {
  // Gán màu sắc theo category
  const getCategoryColor = (category) => {
    switch (category) {
      case "Love":
        return "red";
      case "Knowledge":
        return "blue";
      case "History":
        return "green";
      default:
        return "default";
    }
  };

  return (
    <Card
      hoverable
      className="book-card"
      cover={
        <div
          className="relative"
          style={{ position: "relative", overflow: "hidden" }}
          onClick={() => onBookClick?.(book.id)}
        >
          <Image
            alt={book.title}
            src={book.image}
            fallback="/fallback-image.jpg"
            preview={false}
            className="book-image"
            style={{
              height: 260,
              width: "100%",
              objectFit: "cover",
              borderRadius: 6,
            }}
          />
          {/* Badge Category */}
          <Tag
            color={getCategoryColor(book.category)}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              fontWeight: 500,
            }}
          >
            {book.category}
          </Tag>

          {/* Sale Badge */}
          {book.oldPrice && (
            <Tag
              color="volcano"
              style={{ position: "absolute", top: 10, left: 10 }}
            >
              Sale
            </Tag>
          )}

          {/* Hover overlay */}
          <div
            className="overlay"
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.4)",
              opacity: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "opacity 0.3s ease",
            }}
          >
            <Button
              type="primary"
              size="middle"
              icon={<EyeOutlined />}
              onClick={(e) => {
                e.stopPropagation();
                onQuickView?.(book.id);
              }}
            >
              Quick View
            </Button>
          </div>
        </div>
      }
      onMouseEnter={(e) => {
        const overlay = e.currentTarget.querySelector(".overlay");
        if (overlay) overlay.style.opacity = 1;
      }}
      onMouseLeave={(e) => {
        const overlay = e.currentTarget.querySelector(".overlay");
        if (overlay) overlay.style.opacity = 0;
      }}
    >
      {/* Title + Author */}
      <div onClick={() => onBookClick?.(book.id)} style={{ cursor: "pointer" }}>
        <h3 style={{ marginBottom: 4 }}>{book.title}</h3>
        <p style={{ color: "#999", fontSize: 13 }}>by {book.author}</p>
      </div>

      {/* Rating */}
      <Rate
        disabled
        allowHalf
        defaultValue={book.rating}
        style={{ fontSize: 14 }}
      />

      {/* Genre */}
      <Tag bordered={false} style={{ marginTop: 8, fontSize: 12 }}>
        {book.genre}
      </Tag>

      {/* Price + Button */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 12,
          borderTop: "1px solid #f0f0f0",
          paddingTop: 10,
        }}
      >
        <div>
          {book.oldPrice && (
            <span
              style={{
                textDecoration: "line-through",
                color: "#999",
                fontSize: 12,
                marginRight: 4,
              }}
            >
              ${book.oldPrice.toFixed(2)}
            </span>
          )}
          <span style={{ fontSize: 16, color: "#1890ff", fontWeight: 500 }}>
            ${book.price.toFixed(2)}
          </span>
        </div>

        <Button
          type="primary"
          icon={<ShoppingCartOutlined />}
          size="small"
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(book);
          }}
        >
          Add
        </Button>
      </div>
    </Card>
  );
};

export default BookCard;
