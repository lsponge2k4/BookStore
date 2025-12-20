-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: bookstore_db
-- ------------------------------------------------------
-- Server version	5.7.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Books`
--

DROP TABLE IF EXISTS `Books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Books` (
  `book_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `publisher` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock` int(11) DEFAULT '0',
  `category_id` int(11) DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`book_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `Books_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `Categories` (`category_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Books`
--

LOCK TABLES `Books` WRITE;
/*!40000 ALTER TABLE `Books` DISABLE KEYS */;
INSERT INTO `Books` VALUES (1,'The Great Gatsby','F. Scott Fitzgerald','Scribner',150.00,10,1,'Classic novel set in the 1920s.','2025-11-04 15:09:31','2025-11-04 15:09:31'),(2,'To Kill a Mockingbird','Harper Lee','J.B. Lippincott & Co.',120.50,15,2,'Pulitzer Prize-winning novel about racial injustice.','2025-11-04 15:09:31','2025-11-04 15:09:31'),(3,'1984','George Orwell','Secker & Warburg',130.00,20,1,'Dystopian novel about totalitarian regime.','2025-11-04 15:09:31','2025-11-04 15:09:31'),(4,'The Hobbit','J.R.R. Tolkien','George Allen & Unwin',180.00,12,3,'Fantasy adventure preceding Lord of the Rings.','2025-11-04 15:09:31','2025-11-04 15:09:31'),(5,'Pride and Prejudice','Jane Austen','T. Egerton, Whitehall',110.00,8,2,'Romantic novel exploring manners and marriage.','2025-11-04 15:09:31','2025-11-04 15:09:31'),(6,'Jane Eyre','Charlotte Brontë','Smith, Elder & Co.',115.00,9,2,'A woman\'s journey to independence and love.','2025-11-07 09:33:11','2025-11-07 09:33:11'),(7,'Wuthering Heights','Emily Brontë','Thomas Cautley Newby',110.00,4,2,'A dark romance set on the Yorkshire moors.','2025-11-07 09:33:11','2025-11-07 09:33:11'),(8,'Little Women','Louisa May Alcott','Roberts Brothers',100.00,12,2,'Coming-of-age story of four sisters growing up in America.','2025-11-07 09:33:11','2025-11-07 09:33:11'),(9,'Sense and Sensibility','Jane Austen','Thomas Egerton',105.00,7,2,'A tale of love, romance, and societal expectations.','2025-11-07 09:33:12','2025-11-07 15:46:09'),(10,'Anna Karenina','Leo Tolstoy','The Russian Messenger',120.00,5,2,'A tragic story of love and society in 19th-century Russia.','2025-11-07 09:33:11','2025-11-07 09:33:11'),(11,'Great Expectations','Charles Dickens','Chapman & Hall',110.00,8,2,'The growth and personal development of an orphan named Pip.','2025-11-07 09:33:11','2025-11-07 09:33:11'),(12,'The Picture of Dorian Gray','Oscar Wilde','Ward, Lock & Co.',95.00,6,2,'A man trades his soul for eternal youth and beauty.','2025-11-07 09:33:11','2025-11-07 09:33:11'),(13,'Dracula','Bram Stoker','Archibald Constable and Company',115.00,5,2,'Gothic novel of love, horror, and supernatural suspense.','2025-11-07 09:33:11','2025-11-07 09:33:11'),(14,'The Secret Garden','Frances Hodgson Burnett','Frederick Warne & Co.',90.00,10,2,'A story of healing, friendship, and rediscovery of nature.','2025-11-07 09:33:11','2025-11-07 09:33:11'),(15,'Tess of the d\'Urbervilles','Thomas Hardy','James R. Osgood, McIlvaine & Co.',110.00,4,2,'A tragic tale exploring innocence, love, and societal norms.','2025-11-07 09:33:11','2025-11-07 09:33:11'),(17,'Combo 2 cuốn: Làm Giàu Từ Chứng Khoán và Hướng Dẫn Thực Hành Canslim','William O\'neil và Mathhew Galgani','Nhà Xuất Bản Thế Giới',460.00,1000,2,'Combo Làm Giàu Từ Chứng Khoán, Hướng Dẫn Thực Hành Canslim Với một người chưa đầu tư hoặc vừa bước chân vào đầu tư chứng khoán thì cảm giác đầu tiên của họ chính là sợ hãi. Họ sợ vì không biết bắt đầu từ đâu. Điều đó là bình thường, bởi đầu tư chứng khoán có tính thanh khoản cao và chỉ thực sự dành cho những người muốn làm giàu.','2025-11-09 17:14:25','2025-11-10 07:57:04'),(18,'Cuộc đời Đức Phật','Ohta Hisashi','Lao động',56.00,200,11,'Cuộc đời Đức Phật của Ohta Hisashi là một trong những tác phẩm như thế. Với cách thể hiện đổi mới, cuộc đời đức Phật được kể lại bằng hình thức truyện tranh khiến người đọc dễ dàng hình dung được bối cảnh, không gian, hình ảnh của câu chuyện. Đồng thời, chính hình ảnh sẽ là một yếu tố góp phần khiến nội dung được khắc sâu trong tâm trí bạn đọc hơn so với những kênh chữ đơn thuần. Ngôn từ trong sách được sử dụng đơn giản, dễ hiểu không quá nhiều những thuật ngữ Phật giáo sẽ rất phù hợp cho những ai chưa có nhiều sự tìm hiểu về đức Phật.','2025-12-12 09:25:59','2025-12-12 10:05:31'),(19,'Sách Không Diệt Không Sinh Đừng Sợ Hãi (TB5)','Thầy Thích Nhất Hạnh','Saigon Books',50.00,2000,11,'Không diệt Không sinh Đừng sợ hãi là tựa sách được Thiền sư Thích Nhất Hạnh viết nên dựa trên kinh nghiệm của chính mình. Ở đó, Thầy Nhất Hạnh đã đưa ra một thay thế đáng ngạc nhiên cho hai triết lý trái ngược nhau về vĩnh cửu và hư không: Tự muôn đời tôi vẫn tự do. Tử sinh chỉ là cửa ngõ ra vào, tử sinh là trò chơi cút bắt. Tôi chưa bao giờ từng sinh cũng chưa bao giờ từng diệt và Nỗi khổ lớn nhất của chúng ta là ý niệm về đến-đi, lui-tới.','2025-12-12 12:08:39','2025-12-13 08:52:01'),(20,'Gieo Trồng Hạnh Phúc','Thầy Thích Nhất Hạnh','Sách điện tử Thái Hà',45.00,199,11,'Chánh Niệm là nguồn năng lượng tỉnh thức đưa ta trở về với giây phút hiện tại và giúp ta tiếp xúc sâu sắc với sự sống trong mỗi phút giây của đời sống hằng ngày. Chúng ta không cần phải đi đâu xa để thực tập chánh niệm. Chúng ta có thể thực tập chánh niệm ngay trong phòng mình hoặc trên đường đi từ nơi này đến nơi khác. Ta vẫn có thể tiếp tục làm những công việc ta thường làm hằng ngày như đi, đứng, nằm, ngồi, làm việc, ăn, uống, giao tiếp, chuyện trò… nhưng với ý thức là mình đang làm những công việc ấy.\r\nHãy tưởng tượng ta đang ngắm mặt trời mọc với một số người. Trong khi những người khác đang thưởng thức khung cảnh đẹp đẽ ấy thì ta lại “bận rộn” với những thứ trong đầu mình. Ta bận rộn và lo lắng cho những kế hoạch của ta. Ta nghĩ về quá khứ hoặc tương lai mà không thực sự có mặt để trân quý cơ hội đó. Thay vì thưởng thức cảnh đẹp của buổi bình minh, ta lại để cho những khoảnh khắc quý giá ấy trôi qua oan uổng.','2025-12-12 12:23:08','2025-12-12 12:23:08'),(22,'Đỉnh Gió Hú (Bìa Mềm)','Emily Jane Bronte','NXB Văn Học',24.00,500,2,'Đỉnh Gió Hú (Bìa Mềm)\r\n\r\nÁm ảnh và dữ dội đúng như tên gọi, tiểu thuyết Đỉnh Gió Hú (1847) của Emily Brontë phả vào bầu không khí văn chương thế kỉ 19 một trận cuồng phong khác lạ từ chốn đồng hoang u tịch và bí ẩn – nơi khởi sinh mối tình kinh điển giữa cô tiểu thư bất trị Catherine Earnshaw với kẻ lạc loài mà cha cô đem về nuôi từ bé và đặt tên là Heathcliff. Từ những bất đồng về địa vị, sự hiểu lầm trẻ dại và những khuynh hướng mâu thuẫn trong bản tính, tình cảm ấy không chỉ gây sóng gió cho riêng họ mà còn lôi cuốn những người xung quanh vào vòng bất hạnh triền miên.\r\n\r\nGần hai trăm năm kể từ khi ra đời, Đỉnh Gió Hú vẫn nhận được những phản ứng yêu-ghét trái ngược và không ngừng thách thức người đọc bằng cốt truyện nhiều tầng bậc phảng phất sắc màu siêu linh, những nhân vật khó hiểu, khó cảm thông nhưng vẫn sống động lạ kì, cùng với đó là một trường cảm xúc mãnh liệt, khi tình yêu gần kề nỗi dằn vặt ám ảnh hơn niềm đam mê, khi bản năng ích kỉ, cuồng vọng chiếm hữu và khao khát phục thù phủ bóng đen u ám lên vận mệnh hai thế hệ…','2025-12-12 12:30:54','2025-12-12 12:30:54'),(23,'One Piece Gakuen 5','Sohei Koji','NXB Kim Đồng',25.00,1000,12,'Cuối cùng Luffy và các đồng đội cùng đến được đảo trên trời, một thế giới hoàn toàn khác lạ! Máu phiêu lưu trong người Luffy bùng lên mãnh liệt, chân tay cứ nhấp nhổm không yên. Thế nhưng chưa kịp tận hưởng thì bỗng dưng họ trở thành những tên tội phạm truy đuổi...Những chuyến ohiêu lưu trên đại dương xoay quanh \"One Piece\" lại bắt đầu','2025-12-12 12:39:12','2025-12-12 12:39:12'),(25,'Làm Sao Sống Cuộc Đời Bình An Tự Tại','Pháp Sư Dhammananda',' Nhà sách Phật giáo Vĩnh Nghiêm',50.00,200,11,'GIỚI THIỆU SÁCH\r\n- “Làm Sao Sống Cuộc Đời Bình An Tự Tại” là cuốn sách truyền cảm hứng từ pháp sư K. Sri Dhammananda, bản dịch của Đại đức Thích Quảng Lâm. Sách giúp người đọc tìm lại sự bình yên và hạnh phúc thật sự giữa nhịp sống bận rộn và áp lực của thời hiện đại.\r\n- Nội dung xoay quanh các câu hỏi muôn thuở: Vì sao chúng ta đau khổ? Làm thế nào để khắc phục lo âu? Bình yên thật sự đến từ đâu? Tác giả chỉ ra gốc rễ của bất an, đồng thời hướng dẫn cách khơi mở ng.uôn an lạc nội tâm bằng tình thương, sự hiểu biết và lòng từ bi.\r\n- Với giọng văn gần gũi, ví dụ thực tế, cuốn sách phù hợp cho những ai muốn làm chủ cảm xúc, sống tự tại và nuôi dưỡng tâm hồn an yên ngay trong cuộc sống thường ngày.','2025-12-13 08:43:04','2025-12-13 08:43:22');
/*!40000 ALTER TABLE `Books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CartItems`
--

DROP TABLE IF EXISTS `CartItems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CartItems` (
  `cart_item_id` int(11) NOT NULL AUTO_INCREMENT,
  `cart_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `quantity` int(11) DEFAULT '1',
  `added_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`cart_item_id`),
  KEY `cart_id` (`cart_id`),
  KEY `book_id` (`book_id`),
  CONSTRAINT `CartItems_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `Carts` (`cart_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `CartItems_ibfk_2` FOREIGN KEY (`book_id`) REFERENCES `Books` (`book_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CartItems`
--

LOCK TABLES `CartItems` WRITE;
/*!40000 ALTER TABLE `CartItems` DISABLE KEYS */;
INSERT INTO `CartItems` VALUES (6,2,2,7,'2025-11-09 05:32:39','2025-11-09 05:32:39','2025-11-09 05:33:45'),(7,2,5,4,'2025-11-09 05:33:53','2025-11-09 05:33:53','2025-11-09 05:35:31'),(12,3,17,9,'2025-12-11 08:02:24','2025-12-11 08:02:24','2025-12-11 09:59:55'),(15,3,6,2,'2025-12-11 08:26:53','2025-12-11 08:26:53','2025-12-11 08:30:09'),(16,3,12,2,'2025-12-11 08:26:59','2025-12-11 08:26:59','2025-12-11 08:30:22'),(17,3,9,7,'2025-12-11 08:29:46','2025-12-11 08:29:46','2025-12-11 08:30:08'),(18,3,11,3,'2025-12-11 08:30:15','2025-12-11 08:30:15','2025-12-11 10:00:30'),(19,3,7,2,'2025-12-11 08:30:24','2025-12-11 08:30:24','2025-12-11 08:35:36'),(20,3,1,1,'2025-12-11 08:30:41','2025-12-11 08:30:41','2025-12-11 08:30:41'),(25,5,17,1,'2025-12-11 10:23:15','2025-12-11 10:23:15','2025-12-11 10:23:15'),(26,5,9,1,'2025-12-11 10:23:23','2025-12-11 10:23:23','2025-12-11 10:23:23'),(51,7,18,1,'2025-12-12 10:25:05','2025-12-12 10:25:05','2025-12-12 10:25:05'),(52,7,17,1,'2025-12-12 10:25:22','2025-12-12 10:25:22','2025-12-12 10:25:22'),(53,1,23,1,'2025-12-13 02:40:44','2025-12-13 02:40:44','2025-12-13 14:52:23'),(54,1,22,1,'2025-12-13 02:40:48','2025-12-13 02:40:48','2025-12-13 14:52:21'),(55,9,25,1,'2025-12-13 10:45:36','2025-12-13 10:45:36','2025-12-13 10:45:36'),(56,8,25,6,'2025-12-13 14:56:27','2025-12-13 14:56:27','2025-12-13 14:56:35');
/*!40000 ALTER TABLE `CartItems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Carts`
--

DROP TABLE IF EXISTS `Carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Carts` (
  `cart_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `status` enum('active','checked_out','abandoned') COLLATE utf8mb4_unicode_ci DEFAULT 'active',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`cart_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `Carts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Carts`
--

LOCK TABLES `Carts` WRITE;
/*!40000 ALTER TABLE `Carts` DISABLE KEYS */;
INSERT INTO `Carts` VALUES (1,11,'active','2025-11-08 10:58:52','2025-11-08 10:58:52'),(2,12,'active','2025-11-08 11:22:34','2025-11-08 11:22:34'),(3,20,'active','2025-12-11 08:02:24','2025-12-11 08:02:24'),(4,10,'active','2025-12-11 09:30:21','2025-12-11 09:30:21'),(5,13,'active','2025-12-11 10:23:15','2025-12-11 10:23:15'),(6,21,'active','2025-12-12 02:12:33','2025-12-12 02:12:33'),(7,22,'active','2025-12-12 10:25:05','2025-12-12 10:25:05'),(8,18,'active','2025-12-13 02:43:16','2025-12-13 02:43:16'),(9,19,'active','2025-12-13 10:45:36','2025-12-13 10:45:36');
/*!40000 ALTER TABLE `Carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Categories`
--

DROP TABLE IF EXISTS `Categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Categories` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Categories`
--

LOCK TABLES `Categories` WRITE;
/*!40000 ALTER TABLE `Categories` DISABLE KEYS */;
INSERT INTO `Categories` VALUES (1,'Truyện Cười','2025-11-04 14:53:45','2025-11-09 15:55:44'),(2,'Tiểu thuyết','2025-11-04 14:53:45','2025-11-04 14:53:45'),(3,'Lịch sử','2025-11-04 14:53:45','2025-11-04 14:53:45'),(11,'Phật giáo','2025-12-12 09:23:07','2025-12-12 09:23:07'),(12,'Manga','2025-12-12 12:33:43','2025-12-12 12:33:43');
/*!40000 ALTER TABLE `Categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Images`
--

DROP TABLE IF EXISTS `Images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Images` (
  `image_id` int(11) NOT NULL AUTO_INCREMENT,
  `entity_type` enum('user','book','review','category','banner','admin') COLLATE utf8mb4_unicode_ci NOT NULL,
  `entity_id` int(11) NOT NULL,
  `image_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_type` enum('avatar','cover','gallery','main','other') COLLATE utf8mb4_unicode_ci DEFAULT 'other',
  `storage_type` enum('local','cloud') COLLATE utf8mb4_unicode_ci DEFAULT 'local',
  `uploaded_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`image_id`)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Images`
--

LOCK TABLES `Images` WRITE;
/*!40000 ALTER TABLE `Images` DISABLE KEYS */;
INSERT INTO `Images` VALUES (1,'user',11,'/image/users/avatars/1765511453259.jpg','avatar','local','2025-11-04 15:10:15'),(2,'book',2,'/image/books/covers/theBillOfRights.jpg','cover','local','2025-11-04 15:10:15'),(3,'book',1,'/image/books/covers/The_Great_Gatsby.jpg','cover','local','2025-11-05 03:52:26'),(4,'book',3,'/image/books/covers/1984.jpg','cover','local','2025-11-05 03:52:26'),(5,'book',4,'/image/books/covers/The_Hobbit.jpg','cover','local','2025-11-05 03:52:26'),(6,'book',5,'/image/books/covers/Pride_and_Prejudice.jpg','cover','local','2025-11-05 03:52:26'),(7,'user',12,'/image/users/avatars/1762444228542.jpg','avatar','local','2025-11-06 14:46:12'),(8,'book',3,'/image/books/gallery/1984_geogre_orwell.jpg','gallery','local','2025-11-07 07:23:58'),(9,'book',6,'/image/books/covers/Jane_Eyre.jpg','cover','local','2025-11-07 09:51:18'),(10,'book',7,'/image/books/covers/Wuthering_Heights.jpg','cover','local','2025-11-07 09:51:18'),(11,'book',8,'/image/books/covers/Little_Women.jpg','cover','local','2025-11-07 09:51:18'),(12,'book',9,'/image/books/covers/Sense_and_Sensibility.jpg','cover','local','2025-11-07 09:51:18'),(13,'book',10,'/image/books/covers/Anna_Karenina.jpg','cover','local','2025-11-07 09:51:18'),(14,'book',11,'/image/books/covers/Great_Expectations.jpg','cover','local','2025-11-07 09:51:18'),(15,'book',12,'/image/books/covers/The_Picture_of_Dorian_Gray.jpg','cover','local','2025-11-07 09:51:18'),(16,'book',13,'/image/books/covers/Dracula.jpg','cover','local','2025-11-07 09:51:18'),(17,'book',14,'/image/books/covers/The_Secret_Garden.jpg','cover','local','2025-11-07 09:51:18'),(18,'book',15,'/image/books/covers/Tess_of_the_dUrbervilles.jpg','cover','local','2025-11-07 09:51:18'),(23,'category',1,'/image/categories/1762703744449.jpg','main','local','2025-11-09 15:55:28'),(24,'category',2,'/image/categories/1762703810874.jpg','main','local','2025-11-09 15:56:50'),(25,'category',3,'/image/categories/1762703881817.jpg','main','local','2025-11-09 15:58:01'),(34,'book',17,'/image/books/covers/1762746096902.jpg','cover','local','2025-11-10 03:41:36'),(35,'book',17,'/image/books/gallery/1762746096969.jpg','gallery','local','2025-11-10 03:41:36'),(36,'book',17,'/image/books/gallery/1762746096981.jpg','gallery','local','2025-11-10 03:41:36'),(37,'book',17,'/image/books/gallery/1762746096992.jpg','gallery','local','2025-11-10 03:41:36'),(38,'user',18,'/image/users/avatars/1765615074363.webp','avatar','local','2025-12-10 09:48:22'),(39,'user',19,'/image/users/avatars/1765368711170.jpg','avatar','local','2025-12-10 11:54:24'),(40,'user',20,'/image/users/avatars/1765464391533.jpg','avatar','local','2025-12-11 14:46:31'),(41,'user',10,'/image/users/avatars/1765530524552.jpg','avatar','local','2025-12-11 16:13:58'),(42,'user',21,'/image/users/avatars/1765505590302.jpg','avatar','local','2025-12-12 02:13:10'),(50,'category',11,'/image/categories/1765531387755.jpg','main','local','2025-12-12 09:23:07'),(52,'book',18,'/image/books/gallery/1765531559459.jpg','gallery','local','2025-12-12 09:25:59'),(56,'book',18,'/image/books/covers/1765533931171.jpg','cover','local','2025-12-12 10:05:31'),(57,'user',22,'/image/users/avatars/1765535022984.jpg','avatar','local','2025-12-12 10:23:43'),(58,'book',19,'/image/books/covers/1765541319391.webp','cover','local','2025-12-12 12:08:39'),(59,'book',19,'/image/books/gallery/1765541319413.webp','gallery','local','2025-12-12 12:08:39'),(60,'book',20,'/image/books/covers/1765542188468.webp','cover','local','2025-12-12 12:23:08'),(61,'book',20,'/image/books/gallery/1765542188483.webp','gallery','local','2025-12-12 12:23:08'),(62,'book',20,'/image/books/gallery/1765542188492.webp','gallery','local','2025-12-12 12:23:08'),(66,'book',22,'/image/books/covers/1765542654994.webp','cover','local','2025-12-12 12:30:54'),(67,'book',22,'/image/books/gallery/1765542655007.webp','gallery','local','2025-12-12 12:30:55'),(68,'book',22,'/image/books/gallery/1765542655016.webp','gallery','local','2025-12-12 12:30:55'),(69,'category',12,'/image/categories/1765542823579.webp','main','local','2025-12-12 12:33:43'),(71,'book',23,'/image/books/covers/1765543152867.webp','cover','local','2025-12-12 12:39:12'),(73,'book',23,'/image/books/gallery/1765543152891.jpg','gallery','local','2025-12-12 12:39:12'),(75,'book',23,'/image/books/gallery/1765543152904.webp','gallery','local','2025-12-12 12:39:12'),(77,'book',25,'/image/books/covers/1765615384682.webp','cover','local','2025-12-13 08:43:04'),(79,'book',25,'/image/books/gallery/1765615384699.webp','gallery','local','2025-12-13 08:43:04'),(81,'book',25,'/image/books/gallery/1765615384712.webp','gallery','local','2025-12-13 08:43:04'),(83,'book',25,'/image/books/gallery/1765615384724.webp','gallery','local','2025-12-13 08:43:04');
/*!40000 ALTER TABLE `Images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `OrderItems`
--

DROP TABLE IF EXISTS `OrderItems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `OrderItems` (
  `order_item_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) DEFAULT NULL,
  `book_id` int(11) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`order_item_id`),
  KEY `order_id` (`order_id`),
  KEY `book_id` (`book_id`),
  CONSTRAINT `OrderItems_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `Orders` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `OrderItems_ibfk_2` FOREIGN KEY (`book_id`) REFERENCES `Books` (`book_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `OrderItems`
--

LOCK TABLES `OrderItems` WRITE;
/*!40000 ALTER TABLE `OrderItems` DISABLE KEYS */;
INSERT INTO `OrderItems` VALUES (1,1,2,2,120.50,'2025-11-04 15:09:54','2025-11-04 15:09:54'),(2,1,3,1,200.00,'2025-11-04 15:09:54','2025-11-04 15:09:54'),(3,2,1,1,150.00,'2025-11-04 15:09:54','2025-11-04 15:09:54'),(4,3,1,3,330.00,'2025-11-04 15:09:54','2025-11-04 15:09:54'),(5,1,2,2,360.00,'2025-11-04 15:09:54','2025-11-04 15:09:54');
/*!40000 ALTER TABLE `OrderItems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Orders`
--

DROP TABLE IF EXISTS `Orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Orders` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `total_price` decimal(12,2) DEFAULT NULL,
  `status` enum('pending','paid','shipped','completed','cancelled') COLLATE utf8mb4_unicode_ci DEFAULT 'pending',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `receiver_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Unknown',
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0000000000',
  `shipping_address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'No address',
  PRIMARY KEY (`order_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `Orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Orders`
--

LOCK TABLES `Orders` WRITE;
/*!40000 ALTER TABLE `Orders` DISABLE KEYS */;
INSERT INTO `Orders` VALUES (1,11,350.00,'pending','2025-11-04 15:09:44','2025-11-04 15:09:44','Unknown','0000000000','No address'),(2,11,120.50,'paid','2025-11-04 15:09:44','2025-11-04 15:09:44','Unknown','0000000000','No address'),(3,12,200.00,'shipped','2025-11-04 15:09:44','2025-11-04 15:09:44','Unknown','0000000000','No address'),(4,12,500.00,'completed','2025-11-04 15:09:44','2025-11-04 15:09:44','Unknown','0000000000','No address'),(5,12,75.00,'cancelled','2025-11-04 15:09:44','2025-11-04 15:09:44','Unknown','0000000000','No address');
/*!40000 ALTER TABLE `Orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Payments`
--

DROP TABLE IF EXISTS `Payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Payments` (
  `payment_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) DEFAULT NULL,
  `method` enum('credit_card','paypal','card','bank_transfer') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `amount` decimal(12,2) DEFAULT NULL,
  `status` enum('pending','success','failed') COLLATE utf8mb4_unicode_ci DEFAULT 'pending',
  `paid_at` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`payment_id`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `Payments_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `Orders` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Payments`
--

LOCK TABLES `Payments` WRITE;
/*!40000 ALTER TABLE `Payments` DISABLE KEYS */;
/*!40000 ALTER TABLE `Payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Reviews`
--

DROP TABLE IF EXISTS `Reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Reviews` (
  `review_id` int(11) NOT NULL AUTO_INCREMENT,
  `book_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `comment` text COLLATE utf8mb4_unicode_ci,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`review_id`),
  UNIQUE KEY `unique_user_book_review` (`user_id`,`book_id`),
  KEY `book_id` (`book_id`),
  CONSTRAINT `Reviews_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `Books` (`book_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Reviews_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Reviews`
--

LOCK TABLES `Reviews` WRITE;
/*!40000 ALTER TABLE `Reviews` DISABLE KEYS */;
INSERT INTO `Reviews` VALUES (3,1,11,5,'This is a good book. I really love it','2025-11-07 06:36:31','2025-11-07 06:36:31');
/*!40000 ALTER TABLE `Reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20251026000100-create-user.js'),('20251026000200-create-category.js'),('20251026000300-create-book.js'),('20251026000400-create-order.js'),('20251026000500-create-order-item.js'),('20251026000600-create-payment.js'),('20251026000700-create-cart.js'),('20251026000800-create-cart-item.js'),('20251026000900-create-review.js'),('20251102135939-create-image.js'),('20251105145621-add-shipping-info-to-orders.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` enum('customer','admin') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'customer',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (10,'Phạm Bá Hoàng','lsponge2k4@gmail.com','$2b$10$FZpRYBMvCTEm5lQrJx6P3e/C/AAfdUch6u.hwgC91Yr3aESki/6Qq','admin','2025-11-04 14:48:29','2025-12-13 08:32:40'),(11,'Lsponge2k4','john@gmail.com','$2b$10$R5N09NBGb/tUo1ZWowToJeu4JlAEEgEzt0kT8L42X5vxA/4RKeCS.','customer','2025-11-04 14:48:29','2025-12-13 08:33:39'),(12,'HelloName','kikidog@gmail.com','$2b$10$.mH/zxr4hHjl6CEq/pieL.uYv1MXTpalb5uWiYGt2ZFt1/9AxOjGW','customer','2025-11-04 14:48:29','2025-11-06 14:46:12'),(13,'Sponge2k4','hoang@gmail.com','$2b$10$GodFk1QiBBjkbaQ0gSeMnOXYIMNqXI3yiuiKvV7jTuGliCFpou8PK','customer','2025-11-05 13:18:08','2025-11-05 13:18:08'),(14,'phamhoang','cat@gmail.com','$2b$10$c1fmVmqEQ1qHvu1yEa9GoenOikeapO2UwVsORrbBNcy0i1.GkKmBG','customer','2025-11-05 13:32:21','2025-11-05 13:32:21'),(15,'Sponge2k4','hoang123@gmail.com','$2b$10$Tv3srOc1mPa4VJbSD7A57OUQR0bMUcHCFFM8AiSpktkxKpyvSdYfG','customer','2025-11-05 13:33:37','2025-11-05 13:33:37'),(16,'Sponge2k4','hoang1234@gmail.com','$2b$10$EE.AXVjD3CLwrr/5ABRInO.AjGhz33jNiX25ipKaoVEmadHf5f1P6','customer','2025-11-06 02:04:15','2025-11-06 02:04:15'),(17,'newbie','newbie@gmail.com','$2b$10$rYhFXDwZm0x2tdAWFdw4V.cW0OBLgDiSbt1sOqRNAY.VAMPeh4TyK','customer','2025-11-06 15:32:34','2025-11-06 15:32:34'),(18,'Minh Thiên','john123@gmail.com','$2b$10$/NzBImLHtZlcEsS8h5JIAOMTBDYAyZE9lWDCJPNZ3vKvhtKiVGOXm','customer','2025-12-10 07:50:03','2025-12-13 08:31:35'),(19,'john1234','john1234@gmail.com','$2b$10$pl0bBrs89MEcO2.2luPB2erlyASMKWTiefLR60nbLB7FlM9z2trUO','customer','2025-12-10 11:53:38','2025-12-10 11:53:38'),(20,'john12345','john12345@gmail.com','$2b$10$X2bZnVtkaLKXYas3xGjrs.GDYkghgZ8J6QsA1iHFx51Pmn.J1g7u2','customer','2025-12-10 12:16:13','2025-12-10 12:16:13'),(21,'newbie1','newbie1@gmail.com','$2b$10$/tg/fC78X.y/yQxjds.jnufPGSwaB01vx528MyB3xU9A7tBNo1jg.','customer','2025-12-12 02:12:18','2025-12-12 02:12:18'),(22,'Nguyễn Văn A','nguyenvana@gmail.com','$2b$10$Y74iZPrV/JX5eVfL7NF7aOJgFtkjTK/rmaqgDxBIoM1yAKBNtr1Ie','customer','2025-12-12 10:23:16','2025-12-12 10:23:16'),(23,'hola','john4@gmail.com','$2b$10$cuY3YMnDhEP.QWaRgQUpKeiLlug3w5FgaSJapdbdR6ScQqKOIEV.i','customer','2025-12-14 15:04:24','2025-12-14 15:04:24');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'bookstore_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-12-15 14:24:50
