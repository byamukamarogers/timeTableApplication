<?php
// include config with database definition
include('config.php');

// start transaction
sqlQuery('start transaction');

// delete all
sqlQuery('delete from timetable where classid = 1');

// accept parameters (p is array)
$arr = $_REQUEST['p'];

print(json_encode($arr));

// open loop through each array element
foreach ($arr as $p) {
	// detach values from combined parameters
	// $tbl parameter is ignored because saving goes only from table 1
	#table-1_Mo-r_2b3_3_2_7
	list($classid, $dayid, $courseid, $tbl,  $row, $col) = explode('_', $p);
	// discard clone id part from the sub_id
	$courseid = substr($courseid, 0, 2);
	list($table, $classid) = explode('-', $classid);
	list($daycode, $rowcolidentifier) = explode('-', $dayid);
	//check for a room entry
	$roomid = null;
	if ($rowcolidentifier == 'r') {
		$col += 1;
		$roomid = $courseid;
	}
	$rowcolAddress = $row . '_' . $col;
	print($rowcolAddress);

	/* $sql = "INSERT INTO `timetable`( `classid`, `dayid`, `courseunitid`, `roomid`, `rowcoladdress`) VALUES 
	('$classid','$dayid','$courseid','$roomid','$rowcolAddress')";
 */
	// insert to the database
	//sqlQuery("insert into redips_timetable (sub_id, tbl_row, tbl_col) values ('$sub_id', $row, $col)");
	sqlQuery("INSERT INTO `timetable`( `classid`, `dayid`, `courseunitid`, `roomid`, `rowcoladdress`) VALUES 
	('$classid','$dayid','$courseid','$roomid','$rowcolAddress')");
}

// commit transaction (sqlCommit is function from config.php)
sqlCommit();

// make redirect to the index.php
header('location: index.php');
