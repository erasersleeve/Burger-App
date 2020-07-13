-- Drops the if it already exists --
DROP DATABASE IF EXISTS burgers_db;

-- Create the database and specified it for use.
CREATE DATABASE burgers_db;

USE burgers_db;

-- Create the table plans.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

