<?php require_once ('DB/dbcontroller.php');

$name=$_GET['listeName'];
echo $name;
$db_handle = new DBController();
$query = "INSERT INTO Liste (status,name) VALUES ('0','$name')";
$content = $db_handle->insertQuery($query);

?>
