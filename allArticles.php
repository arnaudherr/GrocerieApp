


<?php require_once ('DB/dbcontroller.php');

$db_handle = new DBController();
$query = "SELECT * FROM  produits";
$content = $db_handle->runQuery($query);
echo json_encode($content);
