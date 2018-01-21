<?php require_once ('../DB/dbcontroller.php');

$db_handle = new DBController();
$query = "SELECT name,price,enddate FROM  Liste WHERE status=1 ORDER BY enddate";
$content = $db_handle->runQuery($query);
echo json_encode($content,JSON_NUMERIC_CHECK);

?>
