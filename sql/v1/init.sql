CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  brand VARCHAR(255),
  offer VARCHAR(100),
  description TEXT,
  about TEXT,
  quantity INT,
  rating NUMERIC(2,1),
  discount INT,
  sale_price NUMERIC(10,2),
  offer_price NUMERIC(10,2),
  gender VARCHAR(10),
  popularity BIGINT,
  date BIGINT,
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  is_stock BOOLEAN,
  new INT,
  image VARCHAR(255),
  categories TEXT[],   
  colors TEXT[]        
);


CREATE INDEX idx_products_categories ON products USING GIN (categories);


