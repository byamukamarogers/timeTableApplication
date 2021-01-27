<?php

require("../db.php");

//validate if user can do this action
//sanitize input for security

session_start();

$data = file_get_contents('php://input');

$data = json_decode(stripslashes($data));

foreach ($data as $value){
    
    $query = sprintf("INSERT INTO `coursetypes`( `coursetypename`, `coursetypecode`, `coursetypedescription`, `staffid`)
    VALUES    ('%s', '%s', '%s','%s')",
        $mysqli->real_escape_string($value->coursetypename),
        $mysqli->real_escape_string($value->coursetypecode),
        $mysqli->real_escape_string($value->coursetypedescription),
        $mysqli->real_escape_string($value->staffid) );

    if ($resultDb = $mysqli->query($query)) {
        $id = $mysqli->insert_id;
        $value->coursetypeid = $id;
    }
}

echo json_encode(array(
    "success" => $mysqli->error == '',
    "data" => 'Inserted',
    "status" => 'OK'
));

/* close connection */
$mysqli->close();
