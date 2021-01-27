<?php

require("../db.php");
require("PassHash.php");

session_start();

// username and password sent from form 
$userEmail = $_POST['user'];
$pass = $_POST['password']; 

// To protect MySQL injection (more detail about MySQL injection)
$userEmail = stripslashes($userEmail);
$pass = stripslashes($pass);

$userEmail = $mysqli->real_escape_string($userEmail);
$pass = $mysqli->real_escape_string($pass);
$sql = "SELECT * FROM USER  u join staff s on s.staffid = u.staffid where u.email= '$userEmail' ";

$result = array();

if ($resultDb = $mysqli->query($sql)) {

	// determine number of rows result set
	$count = $resultDb->num_rows;

	// If result matched $userName and $pass, table row must be 1 row
	if($count==1){

        $record = $resultDb->fetch_assoc();

        if (PassHash::check_password($record['password'],$pass)){
            $_SESSION['authenticated'] = "yes";
            $_SESSION['useremail'] = $userEmail;
            $_SESSION['username'] = $record['name'];
            $result['staffid'] = $record['staffid'];
            $result['departmentid'] = $record['departmentid'];
            $result['data'] = $record;

            $result['success'] = true;
            $result['msg'] = 'User authenticated!';

        } else{
            $result['success'] = false;
            $result['msg'] = 'Incorrect password.';
        }

	} else {
		
		$result['success'] = false;
		$result['msg'] = 'Incorrect user or password.';
	}

	/* close result set */
	$resultDb->close();
}

/* close connection */
$mysqli->close();

//JSON encoding
echo json_encode($result);
?>
