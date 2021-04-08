-- MySQL dump 10.13  Distrib 8.0.22, for Linux (x86_64)
--
-- Host: localhost    Database: mele_base
-- ------------------------------------------------------
-- Server version	8.0.23-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id_category` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id_category`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'albumes'),(2,'instrumentos'),(3,'coleccion'),(4,'electronica'),(5,'otros');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `library`
--

DROP TABLE IF EXISTS `library`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `library` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_user` int unsigned NOT NULL,
  `id_product` int NOT NULL,
  `quantity` int NOT NULL,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_library_users_idx` (`id_user`),
  KEY `fk_library_products_idx` (`id_product`),
  CONSTRAINT `fk_library_products` FOREIGN KEY (`id_product`) REFERENCES `products` (`id_product`),
  CONSTRAINT `fk_library_users` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `library`
--

LOCK TABLES `library` WRITE;
/*!40000 ALTER TABLE `library` DISABLE KEYS */;
/*!40000 ALTER TABLE `library` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id_product` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `mark` varchar(45) NOT NULL,
  `price` varchar(45) NOT NULL,
  `detail` varchar(500) NOT NULL,
  `img` varchar(45) NOT NULL,
  `id_category` int DEFAULT NULL,
  `id_subcategory` int DEFAULT NULL,
  PRIMARY KEY (`id_product`),
  KEY `fk_products_category_idx` (`id_category`),
  KEY `fk_products_subcategory_idx` (`id_subcategory`),
  CONSTRAINT `fk_products_category` FOREIGN KEY (`id_category`) REFERENCES `category` (`id_category`),
  CONSTRAINT `fk_products_subcategory` FOREIGN KEY (`id_subcategory`) REFERENCES `subcategory` (`id_subcategory`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (10,'Remera Sublimada','Ariana Grande','800','Remera sublimada de Ariana Grande Sweetener\r\n100% algodón\r\nTalles XS-S-M-L-XL','file-product-1617902576283.jpg',5,1),(11,'Cuadro Tríptico','Billie Eilish ','2700','Impresos en placas de 2 mm de espesor.\r\nResistentes al agua, el calor y la humedad.\r\nCada parte mide 30x60cm.·En total 90x60 cm.','file-product-1617900842403.jpg',3,2),(12,'Cuadro Audrey Hepburn','Splash','4500','Cuadro pintado a mano de estilo Pop-Art de Audrey Hepburn con cuatro imágenes de la famosa actríz que ilumina y alegra cualquier espacio decorativo.','file-product-1617901044953.jpeg',3,3),(13,'Libra','Lali','1471','Libra es el cuarto álbum de estudio de la actriz y cantante argentina Lali.1​ Lanzado el 12 de noviembre de 2020 a través de la discográfica Sony Music Argentina.\r\nTRACKLIST:\r\nEclipse - Ladrón - Fascinada - Bailo para mí - Enredados - No puedo olvidarte - LALIGERA - Lo que tengo yo - Pa que me quieras - Como así - Una esquina en Madrid ','file-product-1617901355045.jpg',1,2),(14,'Blue Madonna','BORNS','850','Blue Madonna es el segundo album de estudio del músico Børns. Fue lanzado el 12 de enero de 2018 por Interscope Records.\r\nTRACKLIST:\r\nGod Save Our Young Blood - Faded Heart - Sweet Dreams - We Don\'t Care - Man - Iceberg - Second Night of Summer - I Don\'t Want U Back - Tension - Supernatural - Blue Madonna - Bye-bye Darling','file-product-1617901730764.jpg',1,1),(15,'Wandavision','Funko Pop','9540','Funko Pop Original Wanda Vision\r\nHalloween Wanda 715','file-product-1617901960144.jpg',3,2),(17,'Wandavision','Funko Pop','8950','Funko Pop Original Marvel\r\nVision 307','file-product-1617902625068.jpg',3,2),(18,'Chemtrails over the Country Club','Lana del Rey','2100','Chemtrails over the Country Club es el séptimo álbum de estudio de la cantante y compositora estadounidense Lana Del Rey, lanzado el 19 de marzo de 2021​ por Polydor e Interscope Records.\r\nTRACKLIST:\r\nWhite Dress - Chemtrails over the Country Club - Tulsa Jesus Freak - Let Me Love You Like a Woman - Wild at Heart - Dark But Just a Game - Not All Who Wander Are Lost - Yosemite - Breaking up Slowly - Dance Till We Die - For Free','file-product-1617903129959.jpg',1,2),(19,'After Hours','The Weekend','996','After Hours es el cuarto álbum de estudio del cantante canadiense The Weeknd. Fue lanzado el 20 de marzo de 2020 por XO y Republic Records. \r\nTRACKLIST:\r\nAlone Again - Too Late - Hardest to Love - Scared to Live - Snowchild - Escape from LA - Heartless - Faith - Blinding Lights - In Your Eyes - Save Your Tears - Repeat After Me (Interlude) - After Hours - Until I Bleed Out','file-product-1617903506914.jpg',1,2),(20,'Smile','Katy Perry','950','Smile es el quinto álbum de estudio de la cantante estadounidense Katy Perry, fue lanzado el 28 de agosto de 2020 a través de Capitol Records.\r\nTRACKLIST:\r\nNever Really Over - Cry About It Later - Teary Eyes - Daisies - Resilient - Not the End of the World - Smile - Champagne Problems - Tucked - Harleys in Hawaii - Only Love - What Makes a Woman','file-product-1617903799376.jpg',1,2),(21,'Lover','Taylor Swift','950','Lover es el séptimo álbum de estudio de la cantante y compositora estadounidense Taylor Swift. Fue lanzado el 23 de agosto de 2019 a través de Republic Records. \r\nTRACKLIST:\r\nI Forgot That You Existed - Cruel Summer - Lover - The Man - The Archer - I Think He Knows - Miss Americana & the Heartbreak Prince - Paper Rings - Cornelia Street - Death by a Thousand Cuts - London Boy - Soon You\'ll Get Better - False God - You Need to Calm Down - Afterglow - Me! - It\'s Nice to Have a Friend - Daylight','file-product-1617904161810.jpg',1,1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategory`
--

DROP TABLE IF EXISTS `subcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subcategory` (
  `id_subcategory` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id_subcategory`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategory`
--

LOCK TABLES `subcategory` WRITE;
/*!40000 ALTER TABLE `subcategory` DISABLE KEYS */;
INSERT INTO `subcategory` VALUES (1,'ofertas'),(2,'nuevo'),(3,'otros');
/*!40000 ALTER TABLE `subcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id_user` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `admin` tinyint(1) NOT NULL,
  `profile` varchar(45) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Lucas','Enriquez','lucas.enriquez@gmail.com','$2b$12$VesMJpu7tV3tliY1qlwgd.UGn/UB.OkpKGJ4AKzHFxPgwk4qDtRyW',1,'profile-1617839016116.jpg','2021-04-07 23:43:36','2021-04-07 23:43:36'),(2,'Prueba','Prueba','prueba@gmail.com','$2b$12$AiP5wHAisIzx1o7OW.eiKe5PlCES91svi7pd9BaIsiVF8.jXx14B2',0,'profile-1617904231791.jpg','2021-04-08 17:50:32','2021-04-08 17:50:32');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_products`
--

DROP TABLE IF EXISTS `users_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_user` int unsigned NOT NULL,
  `id_product` int NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_carts_products_idx` (`id_product`),
  KEY `fk_carts_users_idx` (`id_user`),
  CONSTRAINT `fk_carts_products` FOREIGN KEY (`id_product`) REFERENCES `products` (`id_product`),
  CONSTRAINT `fk_carts_users` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_products`
--

LOCK TABLES `users_products` WRITE;
/*!40000 ALTER TABLE `users_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-08 14:52:09
