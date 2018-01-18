<?php require_once ('DB/dbcontroller.php');

$db_handle = new DBController();
$query = "SELECT * FROM  Liste WHERE status = '0'";
$content = $db_handle->runQuery($query);
echo json_encode($content);

?>
