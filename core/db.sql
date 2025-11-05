
-- Author : Pham Ba Hoang.
-- Tạo database
CREATE DATABASE IF NOT EXISTS bookstore_db;
USE bookstore_db;

-- Bảng Users
CREATE TABLE Users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('customer','admin') DEFAULT 'customer',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Bảng Categories
CREATE TABLE Categories (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL
);

-- Bảng Books
CREATE TABLE Books (
    book_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    author VARCHAR(100),
    publisher VARCHAR(255),
    price DECIMAL(10,2) NOT NULL,
    stock INT DEFAULT 0,
    category_id INT,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES Categories(category_id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);
-- CREATE TABLE UserAddresses (
--     address_id INT PRIMARY KEY AUTO_INCREMENT,
--     user_id INT NOT NULL,
--     receiver_name VARCHAR(100) NOT NULL,
--     phone VARCHAR(20) NOT NULL,
--     address_line VARCHAR(255) NOT NULL,
--     city VARCHAR(100),
--     province VARCHAR(100),
--     postal_code VARCHAR(20),
--     is_default BOOLEAN DEFAULT FALSE,
--     created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (user_id) REFERENCES Users(user_id)
--         ON DELETE CASCADE
--         ON UPDATE CASCADE
-- );

-- Bảng Orders
CREATE TABLE Orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    -- address_id INT,
    total_price DECIMAL(12,2),
    status ENUM('pending','paid','shipped','completed','cancelled') DEFAULT 'pending',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
    -- FOREIGN KEY (address_id) REFERENCES UserAddresses(address_id)
    -- ON DELETE SET NULL
    -- ON UPDATE CASCADE
);

-- Bảng OrderItems
CREATE TABLE OrderItems (
    order_item_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT,
    book_id INT,
    quantity INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES Orders(order_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (book_id) REFERENCES Books(book_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Bảng Payments
CREATE TABLE Payments (
    payment_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT,
    method ENUM('credit_card','paypal','card','bank_transfer'),
    amount DECIMAL(12,2),
    status ENUM('pending','success','failed') DEFAULT 'pending',
    paid_at DATETIME,
    FOREIGN KEY (order_id) REFERENCES Orders(order_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Bảng Carts
CREATE TABLE Carts (
    cart_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    status ENUM('active','checked_out','abandoned') DEFAULT 'active',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Bảng CartItems
CREATE TABLE CartItems (
    cart_item_id INT PRIMARY KEY AUTO_INCREMENT,
    cart_id INT NOT NULL,
    book_id INT NOT NULL,
    quantity INT DEFAULT 1,
    added_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cart_id) REFERENCES Carts(cart_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (book_id) REFERENCES Books(book_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Bảng Reviews
CREATE TABLE Reviews (
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    book_id INT,
    user_id INT,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (user_id, book_id),
    FOREIGN KEY (book_id) REFERENCES Books(book_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Bảng Images (ảnh dùng chung cho mọi loại entity)
CREATE TABLE Images (
    image_id INT PRIMARY KEY AUTO_INCREMENT,
    entity_type ENUM('user', 'book', 'review', 'category', 'banner', 'admin') NOT NULL,
    entity_id INT NOT NULL, 
    image_url VARCHAR(255) NOT NULL,
    image_type ENUM('avatar', 'cover', 'gallery', 'main', 'other') DEFAULT 'other',
    storage_type ENUM('local', 'cloud') DEFAULT 'local',
    uploaded_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_entity (entity_type, entity_id)
);

