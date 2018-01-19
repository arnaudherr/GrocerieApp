
<?php require_once ('../DB/dbcontroller.php');

$idListe=$_GET["list_id"];
$idProduit=$_GET['idproduit'];
$db_handle = new DBController();

$query = "UPDATE  produitsByList SET status= 1 WHERE idProduit=$idProduit AND listeId=$idListe";
$content = $db_handle->updateQuery($query);
echo json_encode($content);
echo $idListe .' '.$idProduit;
