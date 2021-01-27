<?php

require("../db.php");

//validate if user can do this action
//sanitize input for security

session_start();

$data = file_get_contents('php://input');

$data = json_decode(stripslashes($data));

foreach ($data as $value){
    
    $query = sprintf("INSERT INTO `programs` (`programname`, `programcode`, `departmentid`, `duration`)
    VALUES    ('%s', '%s', '%s','%s')",
        $mysqli->real_escape_string($value->programname),
        $mysqli->real_escape_string($value->programcode),
        $mysqli->real_escape_string($value->departmentid),
        $mysqli->real_escape_string($value->duration) );

    if ($resultDb = $mysqli->query($query)) {
        $id = $mysqli->insert_id;
        $value->programid = $id;
    }
}

echo json_encode(array(
    "success" => $mysqli->error == '',
    "data" => 'Inserted',
    "status" => 'OK'
));

/* close connection */
$mysqli->close();
