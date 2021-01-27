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

    $query = sprintf("INSERT INTO `staff`( `name`, `initial`, `gender`, `address`, `email`, `phone1`, `phone2`, `departmentid`) 
    VALUES    ('%s', '%s', '%s','%s', '%s', '%s','%s')",
        $mysqli->real_escape_string($value->name),
        $mysqli->real_escape_string($value->initial),
        $mysqli->real_escape_string($value->gender),
        $mysqli->real_escape_string($value->address),
        $mysqli->real_escape_string($value->email),
        $mysqli->real_escape_string($value->phone1),
        $mysqli->real_escape_string($value->phone2),
        $mysqli->real_escape_string($value->departmentid));

    if ($resultDb = $mysqli->query($query)) {
        $id = $mysqli->insert_id;
        $value->actor_id = $id;
    }
}

echo json_encode(array(
    "success" => $mysqli->error == '',
    //"Test"=> $post,
    "data" => 'Inserted',
    "status" => 'OK'
));

/* close connection */
$mysqli->close();
