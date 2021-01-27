<?php

// define database host, database name, user name and password 
$db_host = 'localhost';	// 99% chance you won't need to change this value (comment stolen from WordPress wp-config.php :)
$db_name = 'myver';
$db_user = 'root';
$db_pwd  = '';

// reset record set to null ($rs is used in timetable function)
$rs = null;

// open database connection and select database
$db_conn = mysql_connect($db_host, $db_user, $db_pwd);
mysql_select_db($db_name, $db_conn);


// function executes SQL statement and returns result set as array
function sqlQuery($sql)
{
	global $db_conn;
	// execute query	
	$db_result = mysql_query($sql, $db_conn);
	// if db_result is null then trigger error
	if ($db_result === null) {
		trigger_error(mysql_errno() . ": " . mysql_error() . "\n");
		exit();
	}
	// prepare resulted array
	$resultSet = array();
	// if resulted array isn't true and that is in case of select statement then open loop
	// (insert / delete / update statement will return true on success) 
	if ($db_result !== true) {
		// loop through fetched rows and prepare result set
		while ($row = mysql_fetch_array($db_result, MYSQL_NUM)) {
			// first column of the fetched row $row[0] is used for array key
			// it could be more elements in one table cell
			$resultSet[$row[0]][] = $row;
		}
	}
	// return result set
	return $resultSet;
}


// commit transaction
function sqlCommit()
{
	global $db_conn;
	mysql_query('commit', $db_conn);
	mysql_close($db_conn);
}


// print subjects
function subjects()
{
	// returned array is compound of nested arrays
	$subjects = sqlQuery('select sub_id, sub_name from redips_subject order by sub_name');
	// print_r($subjects);
	foreach ($subjects as $subject) {
		$id   = $subject[0][0];
		$name = $subject[0][1];
		print "<tr><td class=\"dark\"><div id=\"$id\" class=\"drag green clone\">$name</div></td></tr>\n";
	}
}
function rooms()
{
	// returned array is compound of nested arrays
	$subjects = sqlQuery('select rm_id, rm_name from redips_rooms order by rm_name');
	// print_r($subjects);
	foreach ($subjects as $subject) {
		$id   = $subject[0][0];
		$name = $subject[0][1];
		print "<tr><td class=\"dark\"><div id=\"$id\" class=\"drag green clone\">$name</div></td></tr>\n";
	}
}


// create timetable row
function timetable($hour, $row)
{
	global $rs;
	// if $rs is null than query database (this should be only first time)
	if ($rs === null) {
		// first column of the query is used as key in returned array
		$rs = sqlQuery("select concat(t.tbl_row,'_',t.tbl_col) as pos, t.tbl_id, t.sub_id, s.sub_name
						from redips_timetable t, redips_subject s
						where t.sub_id = s.sub_id");
	}
	print '<tr>';
	print '<td class="mark dark">' . $hour . '</td>';
	// column loop starts from 1 because column 0 is for hours
	for ($col = 1; $col <= 5; $col++) {
		// create table cell
		print '<td>';
		// prepare position key in the same way as the array key looks
		$pos = $row . '_' . $col;
		echo ' (' . $pos . ') ';
		// if content for the current position exists
		if (array_key_exists($pos, $rs)) {
			// prepare elements for defined position (it could be more than one element per table cell)
			$elements = $rs[$pos];
			// open loop for each element in table cell
			for ($i = 0; $i < count($elements); $i++) {
				// id of DIV element will start with sub_id and followed with 'b' (because cloned elements on the page have 'c') and with tbl_id
				// this way content from the database will not be in collision with new content dragged from the left table and each id stays unique
				$id = $elements[$i][2] . 'b' . $elements[$i][1];
				$name = $elements[$i][3];
				print "<div id=\"$id\" class=\"drag green\">$name</div>";
			}
		}
		// close table cell
		print '</td>';
	}
	print "</tr>\n";
}
function timetable2($hour, $row)
{
	global $rs;
	// if $rs is null than query database (this should be only first time)
	if ($rs === null) {
		// first column of the query is used as key in returned array
		$rs = sqlQuery("select concat(t.tbl_row,'_',t.tbl_col) as pos, t.tbl_id, t.sub_id, s.sub_name
						from redips_timetable t, redips_subject s
						where t.sub_id = s.sub_id");
	}
	print '<tr>';
	print '<td class="mark dark">' . $hour . '</td>';
	// column loop starts from 1 because column 0 is for hours
	for ($col = 0; $col <= 6; $col++) {
		// create table cell
		print '<td>';
		// prepare position key in the same way as the array key looks
		$pos = $col . '_' . $row;
		// if content for the current position exists
		if (array_key_exists($pos, $rs)) {
			// prepare elements for defined position (it could be more than one element per table cell)
			$elements = $rs[$pos];
			// open loop for each element in table cell
			for ($i = 0; $i < count($elements); $i++) {
				// id of DIV element will start with sub_id and followed with 'b' (because cloned elements on the page have 'c') and with tbl_id
				// this way content from the database will not be in collision with new content dragged from the left table and each id stays unique
				$id = $elements[$i][2] . 'b' . $elements[$i][1];
				$name = $elements[$i][3];
				print "<div id=\"$id\" class=\"drag green\">$name</div>";
			}
		}
		// close table cell
		print '</td>';
	}
	print "</tr>\n";
}
function getRooms($hrs,$row)
{
	$rooms = '<th class="mark dark room_td">Room</th>';
	for ($x = 2; $x < $hrs; $x++) {
		$rooms .= "<td class='room_td rm_td rm'>S2.0" . $x . "</td>";
	}
	return $rooms;
}
function getCourses($hrs, $day, $row)
{

	$courses = '<th class="mark dark course_td" rowspan="2">' . $day . '</th>' . '<th class="mark dark course_td">Course</th>';
	/* for ($x = 0; $x < $hrs; $x++) {
		$courses .=  "<td> <div id='' class='drag green'>SIS3202 (SJ)</div> </td>";
	} */
	$rs = null;
	if ($rs === null) {
		// first column of the query is used as key in returned array
		$rs = sqlQuery("select concat(t.tbl_row,'_',t.tbl_col) as pos, t.tbl_id, t.sub_id, s.sub_name
						from redips_timetable t, redips_subject s
						where t.sub_id = s.sub_id");
	}
	for ($col = 2; $col < $hrs; $col++) {
		// create table cell
		$courses .= '<td class="course_td crse_td crse">';
		// prepare position key in the same way as the array key looks
		$pos =  $row. '_' .$col   ;
		// if content for the current position exists

		$courses .= "(" . $pos . ")";
		if (array_key_exists($pos, $rs)) {
			// prepare elements for defined position (it could be more than one element per table cell)
			$elements = $rs[$pos];
			// open loop for each element in table cell
			for ($i = 0; $i < count($elements); $i++) {
				// id of DIV element will start with sub_id and followed with 'b' (because cloned elements on the page have 'c') and with tbl_id
				// this way content from the database will not be in collision with new content dragged from the left table and each id stays unique
				$id = $elements[$i][2] . 'b' . $elements[$i][1];
				$name = $elements[$i][3];
				$courses .= "<div id=\"$id\" class=\"drag green\"> $name</div>";
			}
		}
		// close table cell
		$courses .= '</td>';
	}

	return $courses;
}

function getTimeTableRow()
{
	$weekDays = ['Monday'];
	$row = '';
	//for ($days = 0; $days < count($weekDays); $days++) {
	$row .= '<div id="' . $weekDays[0] . '">';
	$color = 'white';
	/* if ($days % 2 === 0) {
			$color = 'grey';
		} */
	$row .= '<tr style="background-color: ' . $color . ';">' .  getCourses(11, $weekDays[0]) . '</tr>' . '<tr style="background-color: ' . $color . ';">' . getRooms(11) . '</tr>';

	$row .= '</div>';
	//}
	return $row;
}

function getTimeTRow($hrs, $weekDay, $courseRow, $roomRow)
{
	$div = '<div id="' . $weekDay . '">';
	# code...
	$course = '<tr >';
	$course .= getCourses($hrs, $weekDay, $courseRow);
	$course .= '</tr>';
	# code...
	$room = '<tr>';
	$room .= getRooms($hrs,$roomRow);
	$room .= '</tr>';

	$div .= $course . $room . '</div>';

	return $div;
}
