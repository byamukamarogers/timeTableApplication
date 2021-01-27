<?php
$sessionid = $_SESSION['ssessionid'];
$semesterid = $_SESSION['semesterid'];
$classid = $_SESSION['classid'];

echo $semesterid.' '.$classid.' '.$sessionid;
// define database host, database name, user name and password 
$db_host = 'localhost';	// 99% chance you won't need to change this value (comment stolen from WordPress wp-config.php :)
//$db_name = 'myver';
$db_name = 'timetablingsystem';
$db_user = 'root';
$db_pwd  = '';

// reset record set to null ($rs is used in timetable function)
$rs = null;

// open database connection and select database
$db_conn = mysql_connect($db_host, $db_user, $db_pwd);
mysql_select_db($db_name, $db_conn);
$con = mysqli_connect($db_host, $db_user, $db_pwd,$db_name);


// function executes SQL statement and returns result set as array
function sqlQuery($sql)
{
	global $con;
	// execute query	
	$db_result = $con->query($sql);
	// if db_result is null then trigger error
	if ($db_result === null) {
		trigger_error(mysqli_errno($con) . ": " . mysqli_error($con) . "\n");
		exit();
	}
	// prepare resulted array
	$resultSet = array();
	// if resulted array isn't true and that is in case of select statement then open loop
	// (insert / delete / update statement will return true on success) 
	if ($db_result !== true) {
		// loop through fetched rows and prepare result set
		while ($row = $db_result->fetch_array()) {
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
	global $con;
	$con->query('commit');
	mysqli_close($con);
}


// print subjects
function subjects()
{
	// returned array is compound of nested arrays
	$courses = sqlQuery('select courseid, coursecode, ct.coursetypecode from courses join coursetypes ct using(coursetypeid) order by coursecode');
	// print_r($subjects);
	foreach ($courses as $course) {
		$id   = $course[0][0];
		$name = $course[0][1].' ('.$course[0][2].')';
		print "<tr><td class=\"dark\"><div id=\"$id\" class=\"drag green clone\">$name</div></td></tr>\n";
	}
}
function rooms()
{
	// returned array is compound of nested arrays
	$rooms = sqlQuery('select roomid, roomname, roomtypecode from rooms join roomtypes using(roomtypeid) order by roomname');
	// print_r($subjects);
	foreach ($rooms as $room) {
		$id   = $room[0][0];
		$name = $room[0][1].' ('.$room[0][2].')';
		print "<tr><td class=\"dark\"><div id=\"$id\" class=\"drag green clone\">$name</div></td></tr>\n";
	}
}


function getRooms($hrs,$row)
{
	global $classid;
	global $semesterid;
	global $sessionid;
	$rooms = '<th class="mark dark room_td">Room</th>';	
	$rs = null;
	if ($rs === null) {
		// first column of the query is used as key in returned array
		$rs = sqlQuery("select rowcoladdress as pos, t.timetableid, t.courseunitid,  r.roomname, s.coursecode, rt.roomtypecode
		from timetable t join courses s on t.courseunitid = s.courseid join rooms r using(roomid) join roomtypes rt using(roomtypeid)
		where classid='$classid' AND semester = '$semesterid' AND sessionid = '$sessionid'
		");
	}
	for ($x = 2; $x < $hrs; $x++) {		
		$pos =  $row. '_' .$x   ;
		//open table cell
		$rooms .= "<td class='room_td rm_td rm' ondragover='mouseOver'>";
		if (array_key_exists($pos, $rs)) {
			// prepare elements for defined position (it could be more than one element per table cell)
			$elements = $rs[$pos];
			// open loop for each element in table cell
			for ($i = 0; $i < count($elements); $i++) {
				// id of DIV element will start with sub_id and followed with 'b' (because cloned elements on the page have 'c') and with tbl_id
				// this way content from the database will not be in collision with new content dragged from the left table and each id stays unique
				$id = $elements[$i][2] . 'b' . $elements[$i][1];
				$name = $elements[$i][3].' ('.$elements[$i][5].')';
				$rooms .= "<div id=\"$id\" class=\"drag green\"> $name</div>";
			}
		}
		// close table cell
		$rooms .= '</td>';
	}
	return $rooms;
}
function getCourses($hrs, $day, $row)
{
	global $classid;
	global $semesterid;
	global $sessionid;

	$courses = '<th class="mark dark course_td" rowspan="2">' . $day . '</th>' . '<th class="mark dark course_td">Course</th>';
	$rs = null;
	if ($rs === null) {
		// first column of the query is used as key in returned array
		$rs = sqlQuery("select rowcoladdress as pos, t.timetableid, t.courseunitid, s.coursecode, st.initial
		from timetable t join courses s	on t.courseunitid = s.courseid join staff st on st.staffid = s.staffid
		where classid='$classid' AND semester = '$semesterid' AND sessionid = '$sessionid'
		");
	}
	for ($col = 2; $col < $hrs; $col++) {
		// create table cell
		$courses .= '<td class="course_td crse_td crse">';
		// prepare position key in the same way as the array key looks
		$pos =  $row. '_' .$col   ;
		// if content for the current position exists

		//$courses .= "(" . $pos . ")";
		if (array_key_exists($pos, $rs)) {
			// prepare elements for defined position (it could be more than one element per table cell)
			$elements = $rs[$pos];
			// open loop for each element in table cell
			for ($i = 0; $i < count($elements); $i++) {
				// id of DIV element will start with sub_id and followed with 'b' (because cloned elements on the page have 'c') and with tbl_id
				// this way content from the database will not be in collision with new content dragged from the left table and each id stays unique
				$id = $elements[$i][2] . 'b' . $elements[$i][1];
				$name = $elements[$i][3].' ('.$elements[$i][4].')';
				$courses .= "<div id=\"$id\" class=\"drag green\"> $name</div>";
			}
		}
		// close table cell
		$courses .= '</td>';
	}

	return $courses;
}


function getTimeTRow($hrs, $weekDay, $courseRow, $roomRow)
{
	$id = $weekDay[0].$weekDay[1];
	$div = '<div id="' . $id . '">';
	# code...
	$course = '<tr id="'.$id.'-c">';
	$course .= getCourses($hrs, $weekDay, $courseRow);
	$course .= '</tr>';
	# code...
	$room = '<tr id="'.$id.'-r">';
	$room .= getRooms($hrs,$roomRow);
	$room .= '</tr>';

	$div .= $course . $room . '</div>';

	return $div;
}
