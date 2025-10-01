/*
  # Create Instagram Packages System

  ## Overview
  This migration creates the database schema for managing Instagram package offerings
  and customer orders for the InStarup platform.

  ## New Tables

  ### 1. packages
  Stores available Instagram service packages (followers, likes, comments)
  - `id` (uuid, primary key) - Unique package identifier
  - `name` (text) - Package name (e.g., "Seguidores", "Curtidas")
  - `type` (text) - Package type: 'followers', 'likes', or 'comments'
  - `quantity` (integer) - Number of units in the package
  - `price` (numeric) - Package price in BRL
  - `is_active` (boolean) - Whether package is available for purchase
  - `created_at` (timestamptz) - Package creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 2. orders
  Stores customer orders with selected packages
  - `id` (uuid, primary key) - Unique order identifier
  - `customer_name` (text) - Customer's name
  - `customer_phone` (text) - Customer's phone number
  - `instagram_handle` (text) - Customer's Instagram username
  - `items` (jsonb) - Array of ordered items with package details
  - `total_amount` (numeric) - Total order amount in BRL
  - `status` (text) - Order status: 'pending', 'processing', 'completed', 'cancelled'
  - `created_at` (timestamptz) - Order creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ## Security
  - Enable RLS on all tables
  - Public read access for packages (authenticated and anonymous)
  - Authenticated users can create orders
  - Users can only view their own orders

  ## Indexes
  - Index on package type for faster filtering
  - Index on order status for faster status queries
*/

-- Create packages table
CREATE TABLE IF NOT EXISTS packages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  type text NOT NULL CHECK (type IN ('followers', 'likes', 'comments')),
  quantity integer NOT NULL CHECK (quantity > 0),
  price numeric(10,2) NOT NULL CHECK (price >= 0),
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_phone text NOT NULL,
  instagram_handle text NOT NULL,
  items jsonb NOT NULL DEFAULT '[]'::jsonb,
  total_amount numeric(10,2) NOT NULL CHECK (total_amount >= 0),
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'cancelled')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_packages_type ON packages(type);
CREATE INDEX IF NOT EXISTS idx_packages_is_active ON packages(is_active);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at DESC);

-- Enable RLS
ALTER TABLE packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Packages policies: Public read access
CREATE POLICY "Anyone can view active packages"
  ON packages
  FOR SELECT
  USING (is_active = true);

CREATE POLICY "Authenticated users can view all packages"
  ON packages
  FOR SELECT
  TO authenticated
  USING (true);

-- Orders policies: Authenticated users can create orders
CREATE POLICY "Authenticated users can create orders"
  ON orders
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Users can view their own orders"
  ON orders
  FOR SELECT
  TO authenticated
  USING (customer_phone = (auth.jwt()->>'phone'));

-- Insert default package options
INSERT INTO packages (name, type, quantity, price) VALUES
  -- Followers packages
  ('100 Seguidores', 'followers', 100, 5.00),
  ('500 Seguidores', 'followers', 500, 25.00),
  ('1000 Seguidores', 'followers', 1000, 50.00),
  ('2500 Seguidores', 'followers', 2500, 125.00),
  ('5000 Seguidores', 'followers', 5000, 250.00),
  ('10000 Seguidores', 'followers', 10000, 500.00),
  
  -- Likes packages
  ('50 Curtidas', 'likes', 50, 1.00),
  ('100 Curtidas', 'likes', 100, 2.00),
  ('250 Curtidas', 'likes', 250, 5.00),
  ('500 Curtidas', 'likes', 500, 10.00),
  ('1000 Curtidas', 'likes', 1000, 20.00),
  ('2500 Curtidas', 'likes', 2500, 50.00),
  
  -- Comments packages
  ('10 Comentários', 'comments', 10, 1.00),
  ('25 Comentários', 'comments', 25, 2.50),
  ('50 Comentários', 'comments', 50, 5.00),
  ('100 Comentários', 'comments', 100, 10.00),
  ('250 Comentários', 'comments', 250, 25.00),
  ('500 Comentários', 'comments', 500, 50.00)
ON CONFLICT DO NOTHING;

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
DROP TRIGGER IF EXISTS update_packages_updated_at ON packages;
CREATE TRIGGER update_packages_updated_at
  BEFORE UPDATE ON packages
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_orders_updated_at ON orders;
CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON orders
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
