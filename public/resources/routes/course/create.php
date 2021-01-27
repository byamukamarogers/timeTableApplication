<?php

require("../db.php");

//validate if user can do this action
//sanitize input for security

session_start();

$data = file_get_contents('php://input');

$data = json_decode(stripslashes($data));

foreach ($data as $value){
    
    $query = sprintf("INSERT INTO `courses`( `coursename`, `coursecode`, `creditunits`, `studyyear`, `studysemester`, `coursetypeid`, `programid`, `numberoflecturesperweek`, `durationperlecture`, `maximumnumberoflecturesperday`, `staffid`) 
    VALUES    ('%s', '%s', '%s','%s','%s', '%s', '%s','%s','%s', '%s', '%s')",
        $mysqli->real_escape_string($value->coursename),
        $mysqli->real_escape_string($value->coursecode),
        $mysqli->real_escape_string($value->creditunits),
        $mysqli->real_escape_string($value->studyyear),
        $mysqli->real_escape_string($value->studysemester),
        $mysqli->real_escape_string($value->coursetypeid),
        $mysqli->real_escape_string($value->programid),
        $mysqli->real_escape_string($value->numberoflecturesperweek),
        $mysqli->real_escape_string($value->durationperlecture),
        $mysqli->real_escape_string($value->maximumnumberoflecturesperday),
        $mysqli->real_escape_string($value->staffid) );

    if ($resultDb = $mysqli->query($query)) {
        $id = $mysqli->insert_id;
        $value->courseid = $id;
    }
}

echo json_encode(array(
    "success" => $mysqli->error == '',
    "data" => 'Inserted',
    "status" => 'OK'
));

/* close connection */
$mysqli->close();
