<?php
// include config with database definition
include('config.php');

// start transaction
$con->query('start transaction');

// accept parameters (p is array)
$arr = $_REQUEST['p'];
$data =  json_encode(explode('-',explode('_',$arr[0])[0]));
list($table,$classid,$semesterid,$sessionid) = explode('-',explode('_',$arr[0])[0]);
// delete all
$con->query("delete from timetable where classid = '$classid' AND semester = '$semesterid' AND sessionid = '$sessionid' ");

// open loop through each array element
foreach ($arr as $p) {
	// detach values from combined parameters
	// $tbl parameter is ignored because saving goes only from table 1
	#table-1_Mo-r_2b3_3_2_7
	list($tableclassid, $dayid, $courseid, $tbl,  $row, $col) = explode('_', $p);
	// discard clone id part from the sub_id
	$courseid = substr($courseid, 0, 2);
	list($daycode, $rowcolidentifier) = explode('-', $dayid);
	//check for a room entry
	$roomid = null;
	if ($rowcolidentifier == 'r') {
		$col += 1;
		$roomid = $courseid;
	}
	$rowcolAddress = $row . '_' . $col;
	// insert to the database
	$con->query("INSERT INTO `timetable`( `classid`,`semester`,`sessionid`, `dayid`, `courseunitid`, `roomid`, `rowcoladdress`) VALUES 
	('$classid','$semesterid','$sessionid',(SELECT dayid FROM `days` where daycode = '$daycode'),'$courseid','$roomid','$rowcolAddress')");
}

// commit transaction (sqlCommit is function from config.php)

$con->query('commit');
mysqli_close($con);

// make redirect to the Home page
header('location: index.php?classid='.$classid.'&&semesterid='.$semesterid.'&&ssessionid='.$sessionid);
