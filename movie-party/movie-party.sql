-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: Movie
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.20.04.1

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
-- Table structure for table `chat`
--

DROP TABLE IF EXISTS `chat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chat` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mId` int NOT NULL,
  `user_name` varchar(45) NOT NULL,
  `content` varchar(300) NOT NULL,
  `report_time` int NOT NULL,
  `rId` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=269 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chat`
--

LOCK TABLES `chat` WRITE;
/*!40000 ALTER TABLE `chat` DISABLE KEYS */;
INSERT INTO `chat` VALUES (1,1,'louis','hello',0,0),(2,1,'louis','HI',0,0),(3,1,'louis','HI',0,0),(4,1,'jason','why',0,0),(5,1,'jason','why',0,0),(6,1,'jason','why',0,0),(7,1,'jason','why',0,0),(8,1,'jason','why',0,0),(9,1,'louis','wtf',0,0),(10,1,'louis','lkglw',0,0),(11,1,'louis','asdas',0,0),(12,1,'louis','jhds\n',0,0),(13,1,'louis','m,fa',0,0),(14,1,'louis','fgss',0,0),(15,1,'louis','asfas',0,0),(16,1,'louis','sd',0,0),(17,1,'louis','aef',0,0),(18,1,'louis','asda',0,0),(19,1,'louis','asdsa',0,0),(20,1,'louis','af',0,0),(21,1,'louis','hello my name is louis\n',0,0),(22,1,'louis','user2\n',0,0),(23,1,'louis','awdw',0,0),(24,1,'jason','nice one\n',0,0),(25,1,'louis','this is so sad',0,0),(26,1,'louis','dd\n\n',0,0),(27,1,'louis','dgsg\n',0,0),(28,1,'louis','dgsg\nshshs',0,0),(29,1,'louis','room\n',0,24),(30,1,'louis','hi\n',0,35),(31,1,'Louis','asd',0,38),(32,1,'louis','ad',0,52),(33,1,'louis','ddge',0,51),(34,1,'louis','xc',0,50),(35,1,'louis','xc',0,50),(36,1,'louis','xc',0,50),(37,1,'louis','xc',0,50),(38,1,'louis','xc',0,50),(39,1,'louis','xc',0,50),(40,1,'louis','xc',0,50),(41,1,'louis','ascas',0,75),(42,3,'louis','asfa',0,84),(43,3,'louis','hello',0,84),(44,10,'anonymous','louis  按下開始',0,143),(45,1,'anonymous','louis  按下開始',0,144),(46,1,'anonymous','louis  按下開始',0,144),(47,7,'anonymous','louis  按下開始',0,147),(48,7,'anonymous','louis  按下暫停',0,147),(49,7,'anonymous','louis  跳轉影片',0,147),(50,7,'anonymous','louis  按下開始',0,147),(51,7,'anonymous','louis  按下開始',0,147),(52,7,'anonymous','louis  按下開始',0,147),(53,7,'anonymous','louis  跳轉影片',0,147),(54,7,'anonymous','louis  按下開始',0,147),(55,7,'anonymous','louis  按下開始',0,147),(56,7,'anonymous','louis  按下開始',0,147),(57,7,'anonymous','louis  按下開始',0,147),(58,7,'anonymous','louis  按下開始',0,147),(59,3,'anonymous','louis  按下開始',0,148),(60,3,'anonymous','louis  按下開始',0,148),(61,3,'anonymous','louis  按下暫停',0,148),(62,3,'anonymous','louis  按下暫停',0,148),(63,3,'anonymous','louis  按下開始',0,148),(64,3,'anonymous','louis  按下開始',0,148),(65,3,'anonymous','louis  跳轉影片',0,148),(66,3,'anonymous','louis  跳轉影片',0,148),(67,3,'anonymous','louis  按下開始',0,148),(68,3,'anonymous','louis  按下開始',0,148),(69,3,'anonymous','louis  按下開始',0,148),(70,3,'anonymous','louis  跳轉影片',0,148),(71,3,'anonymous','louis  跳轉影片',0,148),(72,3,'anonymous','louis  按下開始',0,148),(73,3,'anonymous','louis  按下暫停',0,148),(74,3,'anonymous','louis  按下暫停',0,148),(75,3,'anonymous','louis  按下開始',0,148),(76,3,'anonymous','louis  按下開始',0,148),(77,3,'anonymous','louis  按下暫停',0,148),(78,3,'anonymous','louis  按下暫停',0,148),(79,3,'anonymous','louis  按下開始',0,148),(80,3,'anonymous','louis  按下開始',0,148),(81,3,'anonymous','louis  按下開始',0,148),(82,3,'anonymous','louis  按下暫停',0,148),(83,3,'anonymous','louis  按下開始',0,148),(84,3,'anonymous','louis  按下暫停',0,148),(85,3,'anonymous','louis  按下開始',0,148),(86,3,'anonymous','louis  按下開始',0,148),(87,3,'anonymous','louis  按下暫停',0,148),(88,3,'anonymous','louis  按下暫停',0,148),(89,3,'anonymous','louis  按下開始',0,148),(90,3,'anonymous','louis  按下開始',0,148),(91,3,'anonymous','louis  按下暫停',0,148),(92,3,'anonymous','louis  按下暫停',0,148),(93,3,'anonymous','louis  按下開始',0,148),(94,3,'anonymous','louis  按下開始',0,148),(95,3,'anonymous','louis  按下暫停',0,148),(96,3,'anonymous','louis  按下暫停',0,148),(97,3,'anonymous','louis  按下開始',0,148),(98,3,'anonymous','louis  按下暫停',0,148),(99,3,'anonymous','louis  按下開始',0,148),(100,3,'anonymous','louis  按下暫停',0,148),(101,3,'anonymous','louis  按下開始',0,148),(102,3,'anonymous','louis  按下暫停',0,148),(103,3,'anonymous','louis  按下開始',0,148),(104,3,'anonymous','louis  按下暫停',0,148),(105,3,'anonymous','louis  按下開始',0,148),(106,3,'anonymous','louis  按下暫停',0,148),(107,3,'anonymous','louis  按下暫停',0,148),(108,3,'anonymous','louis  按下開始',0,148),(109,3,'anonymous','louis  按下開始',0,148),(110,3,'anonymous','louis  按下開始',0,148),(111,3,'anonymous','louis  按下開始',0,148),(112,3,'anonymous','louis  按下開始',0,148),(113,3,'anonymous','louis  按下暫停',0,148),(114,3,'anonymous','louis  按下暫停',0,148),(115,3,'anonymous','louis  加入聊天室',0,148),(116,3,'anonymous','louis  加入聊天室',0,148),(117,3,'anonymous','louis  加入聊天室',0,148),(118,3,'anonymous','louis  加入聊天室',0,148),(119,3,'anonymous','louis  按下開始',0,148),(120,3,'anonymous','louis  按下開始',0,148),(121,3,'anonymous','louis  按下開始',0,148),(122,3,'anonymous','louis  按下開始',0,148),(123,3,'anonymous','louis  按下開始',0,148),(124,3,'anonymous','louis  按下開始',0,148),(125,3,'anonymous','louis  加入聊天室',0,148),(126,3,'anonymous','louis  按下開始',0,148),(127,3,'anonymous','louis  按下暫停',0,148),(128,3,'anonymous','louis  加入聊天室',0,148),(129,3,'anonymous','louis  按下開始',0,148),(130,3,'anonymous','louis  按下開始',0,148),(131,3,'anonymous','louis  按下開始',0,148),(132,3,'anonymous','louis  按下開始',0,148),(133,3,'anonymous','louis  按下暫停',0,148),(134,3,'anonymous','louis  按下暫停',0,148),(135,3,'anonymous','louis  按下開始',0,148),(136,2,'anonymous','louis  加入聊天室',0,149),(137,2,'anonymous','louis  按下開始',0,149),(138,2,'anonymous','louis  加入聊天室',0,149),(139,2,'anonymous','louis  按下開始',0,149),(140,2,'anonymous','louis  按下開始',0,149),(141,2,'anonymous','louis  按下暫停',0,149),(142,2,'anonymous','louis  按下暫停',0,149),(143,2,'anonymous','louis  按下開始',0,149),(144,2,'anonymous','louis  按下開始',0,149),(145,2,'anonymous','louis  按下暫停',0,149),(146,2,'anonymous','louis  按下暫停',0,149),(147,2,'anonymous','louis  加入聊天室',0,149),(148,2,'anonymous','louis  按下開始',0,149),(149,2,'anonymous','louis  按下開始',0,149),(150,2,'anonymous','louis  按下暫停',0,149),(151,2,'anonymous','louis  按下暫停',0,149),(152,2,'anonymous','louis  按下開始',0,149),(153,2,'anonymous','louis  按下開始',0,149),(154,2,'anonymous','louis  按下暫停',0,149),(155,2,'anonymous','louis  按下暫停',0,149),(156,2,'anonymous','louis  按下開始',0,149),(157,2,'anonymous','louis  按下開始',0,149),(158,2,'anonymous','louis  按下暫停',0,149),(159,2,'anonymous','louis  按下暫停',0,149),(160,2,'anonymous','louis  按下開始',0,149),(161,2,'anonymous','louis  按下開始',0,149),(162,2,'anonymous','louis  按下暫停',0,149),(163,2,'anonymous','louis  按下暫停',0,149),(164,2,'anonymous','louis  按下開始',0,149),(165,2,'anonymous','louis  按下開始',0,149),(166,2,'anonymous','louis  按下暫停',0,149),(167,2,'anonymous','louis  按下暫停',0,149),(168,2,'anonymous','louis  按下開始',0,149),(169,2,'anonymous','louis  按下開始',0,149),(170,2,'anonymous','louis  按下暫停',0,149),(171,2,'anonymous','louis  按下暫停',0,149),(172,2,'anonymous','louis  按下開始',0,149),(173,2,'anonymous','louis  按下開始',0,149),(174,2,'anonymous','louis  按下暫停',0,149),(175,2,'anonymous','louis  按下暫停',0,149),(176,4,'anonymous','louis  加入聊天室',0,150),(177,4,'anonymous','louis  加入聊天室',0,150),(178,13,'anonymous','louis  加入聊天室',0,151),(179,13,'anonymous','louis  按下開始',0,151),(180,13,'anonymous','louis  按下暫停',0,151),(181,13,'anonymous','louis  加入聊天室',0,151),(182,2,'anonymous','louis  加入聊天室',0,152),(183,2,'anonymous','louis  加入聊天室',0,152),(184,2,'anonymous','louis  按下開始',0,152),(185,2,'anonymous','louis  按下開始',0,152),(186,2,'anonymous','louis  跳轉影片',0,152),(187,2,'anonymous','louis  跳轉影片',0,152),(188,2,'anonymous','louis  按下開始',0,152),(189,2,'anonymous','louis  按下開始',0,152),(190,2,'anonymous','louis  跳轉影片',0,152),(191,2,'anonymous','louis  跳轉影片',0,152),(192,2,'anonymous','louis  按下開始',0,152),(193,2,'anonymous','louis  按下開始',0,152),(194,2,'anonymous','louis  跳轉影片',0,152),(195,2,'anonymous','louis  跳轉影片',0,152),(196,2,'anonymous','louis  跳轉影片',0,152),(197,2,'anonymous','louis  跳轉影片',0,152),(198,2,'anonymous','louis  按下開始',0,152),(199,2,'anonymous','louis  按下開始',0,152),(200,2,'anonymous','louis  按下暫停',0,152),(201,2,'anonymous','louis  按下暫停',0,152),(202,2,'anonymous','louis  跳轉影片',0,152),(203,2,'anonymous','louis  跳轉影片',0,152),(204,2,'anonymous','louis  按下開始',0,152),(205,2,'anonymous','louis  按下開始',0,152),(206,2,'anonymous','louis  按下暫停',0,152),(207,2,'anonymous','louis  按下暫停',0,152),(208,2,'anonymous','louis  按下開始',0,152),(209,2,'anonymous','louis  按下開始',0,152),(210,2,'anonymous','louis  跳轉影片',0,152),(211,2,'anonymous','louis  跳轉影片',0,152),(212,2,'anonymous','louis  按下開始',0,152),(213,2,'anonymous','louis  按下開始',0,152),(214,2,'anonymous','louis  跳轉影片',0,152),(215,2,'anonymous','louis  跳轉影片',0,152),(216,2,'anonymous','louis  按下開始',0,152),(217,2,'anonymous','louis  按下開始',0,152),(218,2,'anonymous','louis  加入聊天室',0,152),(219,4,'anonymous','louis  加入聊天室',0,150),(220,2,'anonymous','louis  加入聊天室',0,153),(221,2,'anonymous','louis  加入聊天室',0,153),(222,2,'anonymous','louis  加入聊天室',0,152),(223,2,'anonymous','louis  加入聊天室',0,153),(224,4,'anonymous','louis  加入聊天室',0,150),(225,2,'anonymous','louis  加入聊天室',0,152),(226,2,'anonymous','louis  加入聊天室',0,153),(227,4,'anonymous','louis  加入聊天室',0,150),(228,2,'anonymous','louis  加入聊天室',0,153),(229,2,'anonymous','louis  加入聊天室',0,152),(230,4,'anonymous','louis  加入聊天室',0,150),(231,2,'anonymous','louis  加入聊天室',0,153),(232,2,'anonymous','louis  加入聊天室',0,152),(233,4,'anonymous','louis  加入聊天室',0,150),(234,4,'anonymous','louis  加入聊天室',0,154),(235,4,'anonymous','louis  加入聊天室',0,154),(236,4,'anonymous','louis  加入聊天室',0,154),(237,2,'anonymous','louis  加入聊天室',0,155),(238,2,'anonymous','louis  加入聊天室',0,155),(239,2,'anonymous','hi  加入聊天室',0,155),(240,2,'anonymous','hi  加入聊天室',0,155),(241,3,'anonymous','louis  加入聊天室',0,156),(242,3,'anonymous','hi  加入聊天室',0,156),(243,3,'anonymous','louis  加入聊天室',0,156),(244,3,'anonymous','hi  加入聊天室',0,156),(245,4,'anonymous','hi  加入聊天室',0,157),(246,4,'anonymous','louis  加入聊天室',0,157),(247,4,'anonymous','louis  加入聊天室',0,157),(248,4,'anonymous','louis  加入聊天室',0,157),(249,4,'anonymous','louis  加入聊天室',0,157),(250,1,'anonymous','louis  加入聊天室',0,158),(251,1,'anonymous','louis  加入聊天室',0,159),(252,1,'anonymous','hi  加入聊天室',0,159),(253,1,'anonymous','hi  按下開始',0,159),(254,1,'anonymous','hi  按下暫停',0,159),(255,1,'anonymous','louis  加入聊天室',0,159),(256,1,'anonymous','louis  加入聊天室',0,159),(257,7,'anonymous','hi  加入聊天室',0,160),(258,7,'anonymous','louis  加入聊天室',0,160),(259,7,'anonymous','louis  加入聊天室',0,160),(260,1,'anonymous','hi  加入聊天室',0,161),(261,1,'anonymous','louis  加入聊天室',0,162),(262,3,'anonymous','louis  加入聊天室',0,163),(263,3,'anonymous','louis  按下開始',0,163),(264,3,'louis','fsa',0,163),(265,3,'louis','glkw;g',0,163),(266,1,'anonymous','louis  加入聊天室',0,164),(267,1,'louis','asfas',0,164),(268,1,'louis','ih;whw',0,164);
/*!40000 ALTER TABLE `chat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chat_movie`
--

DROP TABLE IF EXISTS `chat_movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chat_movie` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mId` int NOT NULL,
  `user_name` varchar(45) NOT NULL,
  `content` varchar(300) NOT NULL,
  `report_time` int NOT NULL,
  `time` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chat_movie`
--

LOCK TABLES `chat_movie` WRITE;
/*!40000 ALTER TABLE `chat_movie` DISABLE KEYS */;
INSERT INTO `chat_movie` VALUES (1,1,'louis','afa',0,0),(2,1,'louis','time1',0,87),(3,1,'louis','0:09',0,9),(4,1,'louis','sjfla',0,17.6999),(5,1,'louis','30\n',0,32.4465),(6,1,'hi','',0,26.3313),(7,1,'hi','',0,26.3313),(8,1,'hi','',0,0),(9,1,'hi','asd',0,0),(10,1,'hi','asd',0,0),(11,1,'hi','asd',0,0),(12,1,'hi','asd',0,0),(13,1,'hi','asd',0,0),(14,1,'hi','asd',0,0),(15,1,'hi','asd',0,0),(16,1,'hi','asd',0,0),(17,1,'hi','asd',0,0),(18,1,'hi','asd',0,0),(19,1,'hi','asd',0,0),(20,1,'hi','asd',0,0),(21,1,'hi','asd',0,0),(22,1,'hi','asd',0,0),(23,1,'hi','asd',0,0),(24,1,'hi','asd',0,0),(25,1,'hi','asd',0,0),(26,1,'hi','asd',0,0),(27,1,'hi','asd',0,0),(28,1,'hi','asd',0,0),(29,1,'hi','asd',0,0),(30,1,'hi','asd',0,0),(31,1,'hi','asd',0,0),(32,1,'hi','sdasas',0,3.11083),(33,1,'hi','sdasas',0,3.63168),(34,1,'louis','nothing',0,0),(35,1,'louis','hello',0,2.16499),(36,1,'louis','what',0,4.51905);
/*!40000 ALTER TABLE `chat_movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie`
--

DROP TABLE IF EXISTS `movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie` (
  `id` int NOT NULL,
  `mId` int NOT NULL,
  `title` varchar(90) NOT NULL,
  `image` varchar(90) NOT NULL,
  `time` int NOT NULL,
  `rating` float NOT NULL,
  `year` int NOT NULL,
  `category` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie`
--

LOCK TABLES `movie` WRITE;
/*!40000 ALTER TABLE `movie` DISABLE KEYS */;
INSERT INTO `movie` VALUES (1,1,'Spider Man','https://i.postimg.cc/JnFs0Qwq/spider-man.jpg',148,8.3,2021,'marvel'),(2,2,'Avengers','https://i.postimg.cc/v8vKJSsf/ad.jpg',181,8.4,2019,'marvel'),(3,3,'Captain America','https://i.postimg.cc/QtYT537c/cap.jpg',124,7.9,2011,'marvel'),(4,4,'Iron Man','https://i.postimg.cc/SKD2FhDH/ir.jpg',126,6.9,2008,'marvel'),(5,5,'Thor','https://i.postimg.cc/P5DQjPw9/th.jpg',118,6.3,2022,'marvel'),(6,6,'Ant Man and the Wasp','https://i.postimg.cc/25113pNX/Ant-Man-and-the-Wasp-poster.jpg',118,7.9,2018,'marvel'),(7,7,'Black Panther: Wakanda Forever','https://i.postimg.cc/C1w9m0Mc/black.jpg',161,7.2,2022,'marvel'),(8,8,'Doctor Strange','https://i.postimg.cc/JzLwGjVw/Doctor-Strange-in-the-Multiverse-of-Madness-poster.jpg',127,6.9,2022,'marvel'),(9,9,'Free Guy','https://i.postimg.cc/4xLrwqHG/free.jpg',116,7.1,2021,'comedy'),(10,10,'Deadpool','https://i.postimg.cc/m2rjVDYc/deadpool.jpg',106,8,2016,'comedy'),(11,11,'Sing 2','https://i.postimg.cc/GtfyXcRY/sing2.jpg',109,7.4,2021,'anime'),(12,12,'Minions: The Rise of Gru','https://i.postimg.cc/qMR6r2Hs/mini.jpg',90,6.6,2022,'anime'),(13,13,'Detective Conan: The Scarlet Bullet','https://i.postimg.cc/65J6jR56/conan.jpg',110,6.2,2021,'anime'),(14,14,'Demon Slayer the Movie: Mugen Train ','https://i.postimg.cc/HL4bnHZX/mugen.jpg',117,8.2,2020,'anime'),(15,15,'The Lost City','https://i.postimg.cc/xdZCR44q/ilostcity.jpg',112,6.1,2022,'comedy'),(16,16,'Knives Out','https://i.postimg.cc/x8xFJLCr/knive.jpg',130,7.9,2019,'comedy'),(17,17,'Last Christmas','https://i.postimg.cc/fTCY87bs/chris.jpg',102,6.5,2019,'comedy');
/*!40000 ALTER TABLE `movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `party`
--

DROP TABLE IF EXISTS `party`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `party` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mId` int NOT NULL,
  `code` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=165 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `party`
--

LOCK TABLES `party` WRITE;
/*!40000 ALTER TABLE `party` DISABLE KEYS */;
INSERT INTO `party` VALUES (1,1,''),(2,1,''),(3,1,''),(4,1,''),(5,1,''),(6,1,''),(7,1,''),(8,1,''),(9,1,''),(10,1,''),(11,1,''),(12,1,''),(13,1,''),(14,1,''),(15,1,''),(16,1,''),(17,1,''),(18,1,''),(19,1,''),(20,1,''),(21,1,''),(22,1,''),(23,1,''),(24,1,''),(25,1,''),(26,1,''),(27,1,''),(28,1,''),(29,2,''),(30,1,''),(31,1,''),(32,2,''),(33,1,''),(34,1,''),(35,1,''),(36,1,''),(37,1,''),(38,1,''),(39,1,''),(40,1,''),(41,1,''),(42,1,''),(43,1,''),(44,1,''),(45,1,''),(46,1,''),(47,1,''),(48,1,''),(49,1,''),(50,1,''),(51,1,''),(52,1,''),(53,1,''),(54,4,''),(55,1,''),(56,1,''),(57,1,''),(58,1,''),(59,3,''),(60,2,''),(61,2,''),(62,1,''),(63,1,''),(64,2,''),(65,1,''),(66,1,''),(67,1,''),(68,2,''),(69,1,''),(70,1,''),(71,1,''),(72,1,''),(73,1,''),(74,1,''),(75,1,''),(76,2,''),(77,2,''),(78,3,''),(79,1,''),(80,2,''),(81,2,''),(82,2,''),(83,2,''),(84,3,''),(85,3,''),(86,2,''),(87,3,''),(88,3,''),(89,3,''),(90,3,''),(91,3,''),(92,3,''),(93,2,''),(94,2,''),(95,2,''),(96,2,''),(97,2,''),(98,2,''),(99,2,''),(100,2,''),(101,2,''),(102,2,''),(103,2,'gtn0wk'),(104,2,'qvayc'),(105,2,''),(106,2,' 7mlYHpqjz'),(107,5,' 9V2tEhTFw'),(108,4,' 4GP2C39n7'),(109,3,' v4IAako9d'),(110,5,' 4hA3HD8EC'),(111,2,' dzJNCjquE'),(112,2,' zMjgUqHNd'),(113,2,' eH4GmIVmW'),(114,8,' xMuAIfAnj'),(115,2,' Qd0W61kLk'),(116,2,' fiFQ4HIrR'),(117,2,' npdavttuw'),(118,3,' 9PfnUaXqb'),(119,1,' YBZiAkwv9'),(120,3,' 1ZYlqv86E'),(121,3,' EzJDfirFS'),(122,2,' pPvvvUFoz'),(123,2,' DULDzvuC6'),(124,2,' WU4E2meFC'),(125,2,' Qfa4iz7MG'),(126,2,' dkXIqTrBI'),(127,2,' UmuCBcf00'),(128,2,' aeBacO1sG'),(129,2,' dHKtbj3oK'),(130,2,' SnTW8aAJZ'),(131,2,' JFg2BKdqg'),(132,2,' TJcbh94HM'),(133,2,' Su4YXnbLi'),(134,2,' 3bFzGoTuu'),(135,2,' J11gWfwje'),(136,2,' 9cyqv2s1e'),(137,2,' 3vTqALEzj'),(138,2,' DXu9pUfad'),(139,2,' JlgWYKUvZ'),(140,2,' SaikfmBlg'),(141,2,' LhnnqZRoS'),(142,2,' 0YNheeZhC'),(143,10,' cWEowNgNH'),(144,1,' Dte91Ji28'),(145,2,' Kem4eRpFy'),(146,3,' PemOqOxGb'),(147,7,' SoinoIMXE'),(148,3,' fhR0gLlha'),(149,2,' KFJpWBw8N'),(150,4,' XHTUfW3gK'),(151,13,' yT3WQctQq'),(152,2,' Yb5GbiQ0P'),(153,2,' fDfJ7jAYw'),(154,4,' fl5jKgdw3'),(155,2,' 8jTJPhzbM'),(156,3,' dGKN8lgFu'),(157,4,' mvrtxJHkc'),(158,1,' nkLxVLj1P'),(159,1,' I3m7CaO4P'),(160,7,' dBuLFnTwP'),(161,1,' 0iqgyOBfP'),(162,1,' 9WmWAqL1F'),(163,3,' b0KQRjMTV'),(164,1,' il8XEFoeK');
/*!40000 ALTER TABLE `party` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `playing`
--

DROP TABLE IF EXISTS `playing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `playing` (
  `id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `playing`
--

LOCK TABLES `playing` WRITE;
/*!40000 ALTER TABLE `playing` DISABLE KEYS */;
/*!40000 ALTER TABLE `playing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) NOT NULL,
  `password` varchar(90) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'louis','$2b$10$guB4SWdW2s1j0DtkttWCKeQbF0xIBitagMRjwkiqVi85w1143zmh.'),(2,'hi','$2b$10$F2gnJ0OBZWUuBSZz7kX0tuqCTf9wJBKl1fcP4RcviYLLz.T/Hh/SK'),(3,'hello','$2b$10$ejqYKTrfr3E6LuSQGPIqyu8ewCWdAN65lBn3TlyZ82HJHvSfNSqy.');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-23 13:01:13
