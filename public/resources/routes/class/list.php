<?php
	
require("../db.php");

session_start();

$sql = "SELECT * FROM `lectureclass` lc join programs p using(programid)  join departments d on lc.departmentid = d.departmentid  join staff s on lc.createdby = s.staffid left join courses c on lc.courseid = c.courseid";

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
