<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "", "app");

$result = $conn->query("SELECT * FROM Liste");

$outp = "";
while($r = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"Name":"'  . $r["name"] . '",';
    $outp .= '"id":"'   . $r["id"]        . '",';
    $outp .= '"Status":"'. $r["status"]     . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>
