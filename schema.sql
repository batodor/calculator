SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE DATABASE IF NOT EXISTS `want_result` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `want_result`;

CREATE TABLE IF NOT EXISTS `calculations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `value1` int(11),
  `value2` int(11),
  `operation` varchar(50),
  `result` int(11),
  PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5;