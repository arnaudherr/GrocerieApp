
<?php require_once ('../DB/dbcontroller.php');

$idListe=$_GET["list_id"];
$prix=$_GET['newPrice'];
$db_handle = new DBController();

$query = "UPDATE  Liste SET price= $prix WHERE id=$idListe";
$content = $db_handle->updateQuery($query);
echo json_encode($content);
