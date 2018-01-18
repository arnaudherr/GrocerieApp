<?php
class DBController {

/* UNCOMMENT THIS FOR ONLINE VERSION*/
	/*private $host = 'remembertuadmin.mysql.db';
	private $user = 'remembertuadmin';
	private $password = 'Multimedia11';
	private $database = 'remembertuadmin';*/
	/*COMMENT THIS FOR ONLINE VERSION*/
	private	$host = 'localhost';
	private	$user = 'root';
	private $password = '';
	private $database = 'App';

		function __construct() {

		}

		function connectDB() {
			$conn = mysqli_connect($this->host,$this->user,$this->password,$this->database);
			return $conn;
		}

		function selectDB($conn) {
			mysql_select_db($this->database,$conn);
		}

		function runQuery($query) {
			$conn = mysqli_connect($this->host,$this->user,$this->password,$this->database);
			$result = mysqli_query($conn,$query)or die(mysqli_error());

			while($row=mysqli_fetch_assoc($result)) {

				$resultset[] = $row;
			}
			if(!empty($resultset)){
				return $resultset;

			}
			else{
			}
		}
		function insertQuery($query) {
			$conn = mysqli_connect($this->host,$this->user,$this->password,$this->database);
			$result = mysqli_query($conn,$query)or die(mysqli_error());

		}
		function deleteQuery($query) {
			$conn = mysqli_connect($this->host,$this->user,$this->password,$this->database);
			$result = mysqli_query($conn,$query)or die(mysqli_error());

		}
		function updateQuery($query) {
			$conn = mysqli_connect($this->host,$this->user,$this->password,$this->database);
			$result = mysqli_query($conn,$query)or die(mysqli_error());

		}

		function numRows($query) {
			$conn = mysqli_connect($this->host,$this->user,$this->password,$this->database);
			$result  = mysqli_query($conn,$query);
			$rowcount = mysqli_num_rows($result);
			return $rowcount;
		}
	}
	?>
