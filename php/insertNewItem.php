<?php
require_once ('../DB/dbcontroller.php');

$idList=$_GET['idList'];
$productName=$_GET['productName'];
$rayon=$_GET['rayon'];



$db_handle = new DBController();

if (!empty($_GET['productId'])){
  $productId=$_GET['productId'];
  $query = "INSERT INTO ProduitsByList (listeId,status,idProduit) VALUES ($idList,0,$productId)";
  $content = $db_handle->insertQuery($query);

}
else {
  // 1 insert new product
  $query = "INSERT INTO produits (id,name,rayonId) VALUES (NULL,'$productName',$rayon)";
  $content = $db_handle->insertQuery($query);
  echo $productName;
  $query = "SELECT * FROM  produits WHERE name = '$productName'";
  $content = $db_handle->runQuery($query);
  echo json_encode($content);
  $id =$content[0]['id'];
  // 2 insert this product to the liste
  $query = "INSERT INTO ProduitsByList (listeId,status,idProduit) VALUES ($idList,0,'$id')";
  $content = $db_handle->insertQuery($query);

}
