-- MySQL Script generated by MySQL Workbench
-- 03/10/21 10:11:54
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mele_base
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mele_base
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mele_base` DEFAULT CHARACTER SET utf8 ;
USE `mele_base` ;

-- -----------------------------------------------------
-- Table `mele_base`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mele_base`.`users` (
  `id_user` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `surname` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `admin` TINYINT(1) NOT NULL,
  `profile` VARCHAR(45) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mele_base`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mele_base`.`category` (
  `id_category` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id_category`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mele_base`.`subcategory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mele_base`.`subcategory` (
  `id_subcategory` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id_subcategory`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mele_base`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mele_base`.`products` (
  `id_product` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `mark` VARCHAR(45) NOT NULL,
  `price` VARCHAR(45) NOT NULL,
  `detail` VARCHAR(300) NOT NULL,
  `img` VARCHAR(45) NOT NULL,
  `id_category` INT NULL,
  `id_subcategory` INT NULL,
  PRIMARY KEY (`id_product`),
  INDEX `fk_products_category_idx` (`id_category` ASC),
  INDEX `fk_products_subcategory_idx` (`id_subcategory` ASC),
  CONSTRAINT `fk_products_category`
    FOREIGN KEY (`id_category`)
    REFERENCES `mele_base`.`category` (`id_category`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_subcategory`
    FOREIGN KEY (`id_subcategory`)
    REFERENCES `mele_base`.`subcategory` (`id_subcategory`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mele_base`.`users_products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mele_base`.`users_products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_user` INT UNSIGNED NOT NULL,
  `id_product` INT NOT NULL,
  `quantify` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_carts_products_idx` (`id_product` ASC),
  INDEX `fk_carts_users_idx` (`id_user` ASC),
  CONSTRAINT `fk_carts_products`
    FOREIGN KEY (`id_product`)
    REFERENCES `mele_base`.`products` (`id_product`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_carts_users`
    FOREIGN KEY (`id_user`)
    REFERENCES `mele_base`.`users` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mele_base`.`library`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mele_base`.`library` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_user` INT UNSIGNED NOT NULL,
  `id_product` INT NOT NULL,
  `quantify` INT NOT NULL,
  `date` DATETIME NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_library_users_idx` (`id_user` ASC),
  INDEX `fk_library_products_idx` (`id_product` ASC),
  CONSTRAINT `fk_library_users`
    FOREIGN KEY (`id_user`)
    REFERENCES `mele_base`.`users` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_library_products`
    FOREIGN KEY (`id_product`)
    REFERENCES `mele_base`.`products` (`id_product`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
