-- Create the database
CREATE DATABASE IF NOT EXISTS ecommerceproductdb;
USE ecommerceproductdb;

-- Create the products table
CREATE TABLE IF NOT EXISTS Products (
    ProductID CHAR(36) NOT NULL,
    ProductName VARCHAR(50) NOT NULL,
    Category VARCHAR(50) DEFAULT NULL,
    UnitPrice DECIMAL(10,2) DEFAULT NULL,
    QuantityInStock INT DEFAULT NULL,
    PRIMARY KEY (ProductID)
) ENGINE=INNODB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Insert 12 sample rows into the products table with specified categories
-- Insert 12 sample rows into the products table with specified categories
INSERT INTO Products (ProductID, ProductName, Category, UnitPrice, QuantityInStock) VALUES
    ('49df87b8-3f46-43cd-9f2a-1bf69229a77f', 'Apple iPhone 15 Pro Max', 'Electronics', 1299.99, 20),
    ('2c88e7c8-973a-4b11-9a1b-4dbe681c1ef7', 'Samsung Foldable Smart Phone 2', 'Electronics', 1499.99, 10),
    ('3f83eb3a-45a0-4cd0-8d8e-1e178ae2cf1a', 'Ergonomic Office Chair', 'Furniture', 249.99, 25),
    ('4c9cb67f-6c5d-485f-8db2-580112a36b63', 'Coffee Table with Storage', 'Furniture', 179.99, 30),
    ('7fa67b36-c6a7-4091-b77a-74d651d8d5b8', 'Samsung QLED 75 Inch', 'Electronics', 1999.99, 20),
    ('61a5d10a-72c1-4c28-95a8-5f8f84f5428d', 'Running Shoes', 'Furniture', 49.99, 75),
    ('37dc8bf7-6c8a-4f97-b874-5b7d384f2681', 'Anti-Theft Laptop Backpack', 'Accessories', 59.99, 50),
    ('8c5f6733-46fe-4291-9f5b-aecc37064af4', 'LG OLED 65 Inch', 'Electronics', 1499.99, 15),
    ('5b0a6f8c-d8fc-4291-8f51-9b7308d58960', 'Modern Dining Table', 'Furniture', 699.99, 10),
    ('b9126b68-8254-4ee8-9541-5a5db413ba7b', 'PlayStation 5', 'Electronics', 499.99, 40),
    ('11fe286a-9d5d-429f-b32c-3e4d652e3df8', 'Executive Office Desk', 'Furniture', 299.99, 18),
    ('b362b970-9101-4b1b-a563-6c6c994fe4e4', 'Breville Smart Blender', 'HomeAppliances', 129.99, 50);
