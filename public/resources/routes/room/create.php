<?php

require("../db.php");

//validate if user can do this action
//sanitize input for security

session_start();

$data = file_get_contents('php://input');

$data = json_decode(stripslashes($data));

foreach ($data as $value){
    
    $query = sprintf("INSERT INTO `rooms`(`roomname`, `capacity`, `facultyid`, `roomtypeid`, `location`) 
    VALUES    ('%s','%s','%s', '%s', '%s')",
        $mysqli->real_escape_string($value->roomname),
        $mysqli->real_escape_string($value->capacity),
        $mysqli->real_escape_string($value->facultyid),
        $mysqli->real_escape_string($value->roomtypeid),
        $mysqli->real_escape_string($value->location) );

    if ($resultDb = $mysqli->query($query)) {
        $id = $mysqli->insert_id;
        $value->roomid = $id;
    }
}

echo json_encode(array(
    "success" => $mysqli->error == '',
    "data" => 'Inserted',
    "status" => 'OK'
));

/* close connection */
$mysqli->close();
