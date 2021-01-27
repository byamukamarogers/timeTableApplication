<?php

require("../db.php");

//validate if user can do this action
//sanitize input for security

session_start();

$data = file_get_contents('php://input');

$data = json_decode(stripslashes($data));

foreach ($data as $value){
    
    $query = sprintf("INSERT INTO `lectureclass`( `classname`, `isprogram`, `programid`, `iscourse`, `courseid`, `semester`, `totalstudents`, `departmentid`, `createdby`) 
    VALUES    ('%s','%s','%s', '%s', '%s','%s','%s', '%s', '%s')",
        $mysqli->real_escape_string($value->classname),
        $mysqli->real_escape_string($value->isprogram),
        $mysqli->real_escape_string($value->programid),
        $mysqli->real_escape_string($value->iscourse),
        $mysqli->real_escape_string($value->courseid),
        $mysqli->real_escape_string($value->semester),
        $mysqli->real_escape_string($value->totalstudents),
        $mysqli->real_escape_string($value->departmentid),
        $mysqli->real_escape_string($value->createdby) );

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
