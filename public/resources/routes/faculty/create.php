<?php

require("../db.php");

//validate if user can do this action
//sanitize input for security

session_start();

$data = file_get_contents('php://input');
$data = json_decode(stripslashes($data));

foreach ($data as $value){
    

    $query = sprintf("INSERT INTO `faculty`( `facultyname`, `institutionid`)
    VALUES    ('%s', '%s')",
        $mysqli->real_escape_string($value->facultyname),
        $mysqli->real_escape_string($value->institutionid));

    if ($resultDb = $mysqli->query($query)) {
        $id = $mysqli->insert_id;
        $value->facultyid = $id;
    }
}

echo json_encode(array(
    "success" => $mysqli->error == '',
    "data" => 'Inserted',
    "status" => 'OK'
));

/* close connection */
$mysqli->close();
