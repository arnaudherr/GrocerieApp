


<?php require_once ('../DB/dbcontroller.php');
$name=$_GET['name'];
$db_handle = new DBController();
$query = "SELECT name FROM  produits WHERE name = '$name'";
$content = $db_handle->runQuery($query);
  //echo json_encode($content);
  if(!empty($content))
{
  echo json_encode($content);
}
