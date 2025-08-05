

-- Activar extensión para generar UUIDs
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Crear esquema para agrupar todo lo relacionado a la tienda
CREATE SCHEMA IF NOT EXISTS store;

-- Tabla de usuarios (por ejemplo, Mariela u otros administradores de productos)
CREATE TABLE store.users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de productos con clave foránea a users
CREATE TABLE store.products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL,
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
  colors TEXT[],

  CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES store.users(id) ON DELETE CASCADE
);

-- Crear índices si vas a buscar por categorías
CREATE INDEX idx_products_categories ON store.products USING GIN (categories);
CREATE INDEX idx_products_colors ON store.products USING GIN (colors);
CREATE INDEX idx_products_name ON store.products (name);
-- SELECT * FROM store.products WHERE name = 'Zapatos' AND brand = 'Nike';

