
<?php require_once ('../DB/dbcontroller.php');

$idListe=$_GET["list_id"];
$prix=$_GET['newPrice'];
$db_handle = new DBController();
$date = date('Y/m/d h:i:s a');
$query = "UPDATE  Liste SET price= '$prix', status=1, enddate='$date'WHERE id='$idListe'";
$content = $db_handle->updateQuery($query);
echo $date;
