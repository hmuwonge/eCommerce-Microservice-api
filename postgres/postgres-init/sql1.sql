-- Create the database
-- CREATE DATABASE "eCommerceUsers";

-- Switch to the database (for psql usage; might be skipped in init scripts)
-- \c "eCommerceUsers"

-- Create the table
CREATE TABLE public."Users" (
  "Id" UUID NOT NULL,
  "PersonName" VARCHAR(50) COLLATE pg_catalog."default" NOT NULL,
  "Email" VARCHAR(50) COLLATE pg_catalog."default" NOT NULL,
  "Password" VARCHAR(50) COLLATE pg_catalog."default" NOT NULL,
  "Gender" VARCHAR(15) COLLATE pg_catalog."default",
  CONSTRAINT "Users_pkey" PRIMARY KEY ("Id")
);

-- Insert sample data
INSERT INTO public."Users" ("Id", "Email", "PersonName", "Gender", "Password")
VALUES
('c32f8b42-60e6-4c02-90a7-9143ab37189f', 'test1@example.com', 'John Doe', 'Male', 'password1'),
('8ff22c7d-18c7-4ef0-a0ac-988ecb2ac7f5', 'test2@example.com', 'Jane Smith', 'Female', 'password2');
