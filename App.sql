-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Dim 21 Janvier 2018 à 23:15
-- Version du serveur :  10.1.10-MariaDB
-- Version de PHP :  5.5.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `App`
--

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `categorieName` varchar(255) NOT NULL,
  `idRayon` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `categories`
--

INSERT INTO `categories` (`id`, `categorieName`, `idRayon`) VALUES
(2, 'Vegetables', 'rayon__vege'),
(3, 'Meats', 'rayon__meats'),
(4, 'Fishs', 'rayon__fish');

-- --------------------------------------------------------

--
-- Structure de la table `Liste`
--

CREATE TABLE `Liste` (
  `id` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` float DEFAULT NULL,
  `enddate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `Liste`
--

INSERT INTO `Liste` (`id`, `status`, `name`, `price`, `enddate`) VALUES
(2, 1, 'Christmas List', 122, '2018-01-21 11:08:18'),
(3, 0, 'Lunch List', NULL, NULL),
(4, 0, 'Week List', NULL, NULL),
(15, 1, 'New year list', 32, '2018-01-21 10:02:38'),
(16, 1, 'Test', 0.8, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

CREATE TABLE `produits` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `rayonId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `produits`
--

INSERT INTO `produits` (`id`, `name`, `rayonId`) VALUES
(2, 'Mushrooms', 2),
(3, 'Avocados', 2),
(4, 'Limes', 2),
(5, 'Onions', 2),
(6, 'Apples', 2),
(7, 'Bananas', 2),
(8, 'Potatoes', 2),
(9, 'Carrots', 2),
(10, 'Cumcumbers', 2),
(11, 'Bacon', 3),
(12, 'Beef', 3),
(13, 'Chicken', 3),
(14, 'Ham', 3),
(15, 'Hamburger', 3),
(16, 'Hot dog', 3),
(17, 'Roast', 3),
(18, 'steak', 3),
(19, 'Crab', 4),
(20, 'Mussels', 4),
(21, 'Salmon', 4),
(22, 'Tuna', 4),
(57, 'hahaha', 3),
(58, 'lol', 2),
(59, 'top', 2),
(60, 'pleaz', 3),
(61, 'Pineapple', 2),
(62, 'Hello', 3),
(63, 'Hallo', 3),
(64, 'WELKOM', 4),
(65, 'DAG', 3);

-- --------------------------------------------------------

--
-- Structure de la table `produitsByList`
--

CREATE TABLE `produitsByList` (
  `id` int(11) NOT NULL,
  `listeId` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `idProduit` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `produitsByList`
--

INSERT INTO `produitsByList` (`id`, `listeId`, `status`, `idProduit`) VALUES
(2, 2, 1, 2),
(3, 2, 1, 3),
(4, 2, 1, 4),
(5, 2, 1, 7),
(6, 2, 1, 8),
(7, 2, 1, 9),
(8, 2, 1, 17),
(9, 2, 1, 21),
(10, 3, 1, 3),
(11, 3, 1, 4),
(12, 3, 1, 5),
(13, 3, 1, 7),
(14, 3, 1, 9),
(15, 3, 0, 10),
(16, 3, 0, 11),
(17, 3, 0, 12),
(18, 3, 1, 13),
(19, 3, 0, 14),
(20, 3, 1, 16),
(21, 3, 1, 17),
(22, 3, 1, 18),
(23, 3, 1, 19),
(24, 3, 1, 20),
(25, 3, 1, 22),
(26, 4, 1, 3),
(27, 4, 1, 4),
(28, 4, 1, 7),
(29, 4, 1, 9),
(30, 4, 1, 12),
(31, 4, 1, 16),
(32, 4, 1, 19),
(34, 4, 1, 22),
(35, 3, 1, 9),
(36, 3, 0, 21),
(38, 3, 1, 9),
(49, 3, 0, 61),
(50, 3, 1, 62),
(51, 3, 1, 63),
(52, 3, 1, 64),
(53, 3, 1, 65),
(54, 3, 0, 9);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `Liste`
--
ALTER TABLE `Liste`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `produits`
--
ALTER TABLE `produits`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Index pour la table `produitsByList`
--
ALTER TABLE `produitsByList`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `Liste`
--
ALTER TABLE `Liste`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT pour la table `produits`
--
ALTER TABLE `produits`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;
--
-- AUTO_INCREMENT pour la table `produitsByList`
--
ALTER TABLE `produitsByList`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
