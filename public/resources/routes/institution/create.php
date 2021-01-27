<?php

require("../db.php");

//validate if user can do this action
//sanitize input for security

session_start();

$data = file_get_contents('php://input');
//$test = var_dump($_POST);// $_REQUEST;
$post = file_get_contents('php://input');

$data = json_decode(stripslashes($data));

foreach ($data as $value){
     

    $query = sprintf("INSERT INTO `institutions`( `institutionname`, `address`, `phonecontact`, `email`)
    VALUES    ('%s', '%s', '%s','%s')",
        $mysqli->real_escape_string($value->institutionname),
        $mysqli->real_escape_string($value->address),
        $mysqli->real_escape_string($value->phonecontact),
        $mysqli->real_escape_string($value->email));

    if ($resultDb = $mysqli->query($query)) {
        $id = $mysqli->insert_id;
        $value->institutionid = $id;
    }
}

echo json_encode(array(
    "success" => $mysqli->error == '',
    "data" => 'Inserted',
    "status" => 'OK'
));

/* close connection */
$mysqli->close();
