


<?php require_once ('DB/dbcontroller.php');












$id=$_GET["list_id"];
$db_handle = new DBController();
$query = "SELECT * FROM  ProduitsByList LEFT JOIN produits  ON ProduitsByList.idProduit = produits.id LEFT JOIN categories ON produits.rayonId = categories.id WHERE listeId =$id ";
$content = $db_handle->runQuery($query);
echo json_encode($content);
