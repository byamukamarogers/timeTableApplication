<?php

require("../db.php");

//validate if user can do this action
//sanitize input for security

session_start();

$data = file_get_contents('php://input');

$data = json_decode(stripslashes($data));

foreach ($data as $value){
    
    $query = sprintf("INSERT INTO `departments`( `departmentname`, `departmentcode`, `facultyid`) 
    VALUES    ('%s', '%s', '%s')",
        $mysqli->real_escape_string($value->departmentname),
        $mysqli->real_escape_string($value->departmentcode),
        $mysqli->real_escape_string($value->facultyid));

    if ($resultDb = $mysqli->query($query)) {
        $id = $mysqli->insert_id;
        $value->departmentid = $id;
    }
}

echo json_encode(array(
    "success" => $mysqli->error == '',
    "data" => 'Inserted',
    "status" => 'OK'
));

/* close connection */
$mysqli->close();
