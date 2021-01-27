<?php

$con = mysqli_connect('localhost', 'root', '', 'timetablingsystem');
if ($con) {
} else {
    die("Failled: " . mysqli_error($con));
}

function fetchCourses()
{
    $courses = '';
    global $con;
    $selectCourses = $con->query('select * from courses');
    while ($row = $selectCourses->fetch_array()) {
        $id = $row['courseid'];
        $courseCode = $row['coursecode'];
        $courses .= '<tr><td class="dark"><div id="' . $id . '" class="drag green clone">' . $courseCode . '</div></td></tr>';
    }
    return $courses;
}
function fetchRooms()
{
    $rooms = '';
    global $con;
    $selectRoom = $con->query('select * from rooms');
    while ($row = $selectRoom->fetch_array()) {
        $id = $row['roomid'];
        $roomName = $row['roomname'];
        $rooms .= '<tr><td class="dark"><div id="' . $id . '" class="drag green clone">' . $roomName . '</div></td></tr>';
    }
    return $rooms;
}



function getCourses($hrs)
{
    $tableRow = '';
    global $con;
    $result  = $con->query('select * from days');

    for ($i = 1; $i < 8; $i++) {
        for ($j = 2; $j < 13; $j++) {
            if ($j == 1) {
                echo str_pad($i . '_' . $j, 2, " ", STR_PAD_LEFT);
            } else {
                echo str_pad($i . '_' . $j, 4, " ", STR_PAD_LEFT);
            }
        }
        echo "\n";
    }

    for ($i=1; $i<$result->num_rows; $i++) {

        $row = $result->fetch_array();

        $day = $row['weekday'];
        $div = '<div id="' . $day . '">';
        $courseRow = '<tr>';
        $roomRow = '<tr>';
        $courses = '';
        $rooms = '';
        $courseRow .= ' <th class="mark dark label-left  course_td" rowspan="2">' . $day . '</th>' . '<th class="mark dark label-left course_td">Course</th>';
        $roomRow .= '<th class="mark label-left dark room_td">Room</th>';
        $num = 2;
            for ($col = 2; $col < $hrs; $col++) {
                // create table cell
                $courses .= '<td class="course_td crse_td crse">'.$col;
                
                $rooms .= "<td class='room_td rm_td rm'>".$num;
                $num+=2;
                $selectTable = $con->query("select * from timetable where dayid = " . $row['dayid'] . "");
                $row2 = $selectTable->fetch_array();
                //$courses .= $row2['rowcoladdress'];
                /* while ($row2 = $selectTable->fetch_array()) {
                $courseId = $row2['courseunitid'];
                if ($col % 2 == 0) {
                    $courseCode = '';
                    $selectCourse = $con->query('select s.initial, c.coursecode from courses c join staff s using(staffid) where courseid = ' . $courseId . '');
                    $row3 = $selectCourse->fetch_array();
                    if ($selectCourse->num_rows) {
                        $courseCode = $row3['coursecode'] . '(' . $row3['initial'] . ')';
                    } else {
                        $courseCode = $row3['coursecode'];
                    }
                } else {

                    $roomName = null;
                    $roomId = $row2['roomid'];
                    $selectRoom = $con->query('select * from rooms r where roomid = ' . $roomId . '');
                    $row4 = $selectRoom->fetch_array();
                    if ($selectRoom->num_rows) {
                        $roomName = $row4['roomname'];
                    }
                }
                $timeTableId = $row2['timetableid'];
                $tableAddress = $row2['rowcoladdress'];
                // if content for the current position exists
                if ($tableAddress !== null) {
                    $res = explode("_", $tableAddress);
                    // prepare position key in the same way as the array key looks
                    $pos = $res[0] . '_' . $col;
                    //courses .= "(" . pos . ")";
                    // prepare elements for defined position (it could be more than one element per table cell)
                    // id of DIV element will start with sub_id and followed with 'b' (because cloned elements on the page have 'c') and with tbl_id
                    // this way content from the database will not be in collision with new content dragged from the left table and each id stays unique
                    if ($pos === $tableAddress) {
                        if ($roomId !== null) {
                            $roomid = $roomId . 'b' . $timeTableId;
                            $rooms .= '<div id="' . $roomid . '" class="drag green">' . $roomName . '</div>';
                        }
                        if ($courseId !== null) {
                            $id = $courseId . 'b' . $timeTableId;
                            $courses .= '<div id="' . $id . '" class="drag green">' . $courseCode . '</div>';
                        }
                    }
                }
            } */
                $courses .= '</td>';
                $rooms .= '</td>';
                
            }
        
        $courseRow .= $courses;
        $courseRow .= '</tr>';
        $roomRow .= $rooms;
        $roomRow .= '</tr>';
        $div .= $courseRow . $roomRow;
        $div .= '</div>';
        $tableRow .= $div;
    }
    return  $tableRow;
}
