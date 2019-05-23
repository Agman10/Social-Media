-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Värd: localhost:3306
-- Tid vid skapande: 23 maj 2019 kl 10:37
-- Serverversion: 5.7.25-0ubuntu0.18.04.2
-- PHP-version: 7.2.15-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `Social_Media`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `text` longtext NOT NULL,
  `date` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `post`
--

INSERT INTO `post` (`id`, `username`, `title`, `text`, `date`) VALUES
(3, 'we', 'hej', 'första posten', '1558514422204'),
(4, 'we', 'hej', 'da', '1558514471017'),
(5, 'Agman', 'hej', '12sAD', '1558514910718'),
(6, 'Agman', 'sasr', 'fgdz', '1558515849137'),
(7, 'Agman', 'sasr', 'fgdz', '1558515849975'),
(8, 'Agman', 'sasr', 'fgdz', '1558515853878'),
(9, 'Agman', 'sdfg', 'asd', '1558515939560'),
(10, 'Agman', 'asd', 'zsdfd', '1558515950451'),
(11, 'Agman', 'sdg', 'sgd', '1558516027078'),
(12, 'Agman', 'asr', 'asg', '1558516083967'),
(13, 'Agman', 'asr', 'asg', '1558516084652'),
(14, 'Agman', 'zsf', 'asdf', '1558516098483'),
(15, 'Agman', 'zsf', 'asdf', '1558516098669'),
(16, 'Agman', 'zsf', 'asdf', '1558516098870'),
(17, 'Agman', 'zsf', 'asdf', '1558516099063'),
(18, 'Agman', 'zsf', 'asdf', '1558516099228'),
(19, 'Agman', 'sdfas', 'adfgasdg', '1558516377197'),
(20, 'Agman', 'dsf', 'noob', '1558593266991'),
(21, 'agwdfs', 'hej', 'hej', '1558598693241');

-- --------------------------------------------------------

--
-- Tabellstruktur `User`
--

CREATE TABLE `User` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `User`
--

INSERT INTO `User` (`id`, `username`, `password`) VALUES
(1, 'hej', 'heh'),
(2, NULL, '81dc9bdb52d04dc20036dbd8313ed055'),
(3, 'heeee', '267eb3281384a8c96197cc123d6e1cdc'),
(4, 'hejaa', 'd41d8cd98f00b204e9800998ecf8427e'),
(5, 'ga', 'e4da3b7fbbce2345d7772b0674a318d5'),
(6, 'gaas', '9a1158154dfa42caddbd0694a4e9bdc8'),
(7, 'af', 'a87ff679a2f3e71d9181a67b7542122c'),
(8, 'rg', '0cc175b9c0f1b6a831c399e269772661'),
(9, 'xd', '202cb962ac59075b964b07152d234b70'),
(10, '', 'd41d8cd98f00b204e9800998ecf8427e'),
(11, 'Olle', '74243d8f2a60c072dee87450ee49425a'),
(12, 'aa', '202cb962ac59075b964b07152d234b70'),
(13, 'we', '0cc175b9c0f1b6a831c399e269772661'),
(14, 'Agman', '81dc9bdb52d04dc20036dbd8313ed055'),
(15, 'hej23', '7cec85c75537840dad40251576e5b757'),
(16, 'agwdfs', '75429d136f65d2d6168b9b6c5f6ec951');

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT för tabell `User`
--
ALTER TABLE `User`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
