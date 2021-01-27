<?php
	
require("../db.php");

session_start();

$sql = "SELECT * FROM `rooms` r join roomtypes rt USING(roomtypeid) join faculty f using(facultyid)";

$result = array();

if ($resultDb = $mysqli->query($sql)) {

	while($record = $resultDb->fetch_assoc()) {
		array_push($result, $record);
	}	

	$resultDb->close();
}

//send back information to ExtJS
echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"data" => $result
));	

/* close connection */
$mysqli->close();
