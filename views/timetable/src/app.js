


fetchCourses();
fetchRooms();


// save elements and their positions
function save() {
    // scan second table (timetable)
    var content = REDIPS.drag.save_content(3);
    var content2 = REDIPS.drag.save_content(3);
    console.log(content);
    // console.log(content2);
    //window.location.href = 'save.php?' + content;
    //window.location.href = 'saveNew.php?' + content2;
}
// print message
function print_message(message) {
    document.getElementById('message').innerHTML = message;
}
async function fetchCourses() {
    let coursesTable = document.querySelector("#table1")
    if (coursesTable) {
        let tbody = coursesTable.querySelector('tbody')
        let response = await fetch('/courseunits');
        if (response.statusText === 'OK') {
            let records = await response.json();
            for (let i = 0; i < records.length; i++) {
                let id = records[i].courseId;
                let courseCode = records[i].courseCode;
                tbody.innerHTML += '<tr><td class="dark"><div id="' + id + '" class="drag green clone">' + courseCode + '</div></td></tr>\n';
            }
        }
    }
}
async function fetchRooms() {
    let roomsTable = document.querySelector("#table3")
    if (roomsTable) {
        let tbody = roomsTable.querySelector('tbody');
        let response = await fetch('/rooms');
        if (response.statusText === 'OK') {
            let records = await response.json();
            for (let i = 0; i < records.length; i++) {
                let id = records[i].roomId;
                let courseCode = records[i].roomName;
                tbody.innerHTML += '<tr><td class="dark"><div id="' + id + '" class="drag green clone">' + courseCode + '</div></td></tr>\n';

            }
        }
    }
}

getCourses(13);
async function getCourses(hrs) {
    let timeTable = document.querySelector("#table4")
    let tableRow = timeTable.querySelector("tbody");
    let response = await fetch('/timeTableByDay');
    if (response.statusText === 'OK') {
        let records = await response.json();
        let rowRecord = '';
        console.log(records);
        for (let i = 0; i < records.length; i++) {
            let day = records[i].weekDay;
            let div = '<div id="' + day + '">';
            let courseRow = '<tr>';
            let roomRow = '<tr>';
            let courses = '';
            let rooms = '';
            courseRow += ' <th class="mark dark label-left  course_td" rowspan="2">' + day + '</th>' + '<th class="mark dark label-left course_td">Course</th>';
            roomRow += '<th class="mark label-left dark room_td">Room</th>';
            for (let col = 2; col < hrs; col++) {
                // create table cell
                courses += '<td class="course_td crse_td crse">';
                rooms += "<td class='room_td rm_td rm'>";
                if (records[i].TimeTables.length !== 0) {
                    let dayTimeTable = records[i].TimeTables;
                    for (j = 0; j < dayTimeTable.length; j++) {
                        let courseId = dayTimeTable[j].courseId;
                        let courseCode;
                        if (dayTimeTable[j].Course.Staff) {
                            courseCode = dayTimeTable[j].Course.courseCode + '(' + dayTimeTable[j].Course.Staff.initial + ')';
                        } else {
                            courseCode = dayTimeTable[j].Course.courseCode;
                        }
                        let roomName = null;
                        let roomId = null;
                        if (dayTimeTable[j].Room) {
                            roomName = dayTimeTable[j].Room.roomName;
                            roomId = dayTimeTable[j].roomId;
                        }
                        let timeTableId = dayTimeTable[j].timeTableId;
                        // if content for the current position exists
                        if (dayTimeTable[j].tableAddress !== null) {
                            let res = dayTimeTable[j].tableAddress.split("_");
                            // prepare position key in the same way as the array key looks
                            let pos = res[0] + '_' + col;
                            //courses += "(" + pos + ")";
                            // prepare elements for defined position (it could be more than one element per table cell)
                            // id of DIV element will start with sub_id and followed with 'b' (because cloned elements on the page have 'c') and with tbl_id
                            // this way content from the database will not be in collision with new content dragged from the left table and each id stays unique
                            if (pos === dayTimeTable[j].tableAddress) {
                                if (roomId !== null) {
                                    let roomid = roomId + 'b' + timeTableId;
                                    rooms += '<div id="' + roomid + '" class="drag green">' + roomName + '</div>';
                                }
                                if (courseId !== null) {
                                    let id = courseId + 'b' + timeTableId;
                                    courses += '<div id="' + id + '" class="drag green">' + courseCode + '</div>';
                                }
                            }
                        }
                    }
                }
                // close table cell
                courses += '</td>';
                rooms += '</td>';
            }
            courseRow += courses;
            courseRow += '</tr>';
            roomRow += rooms;
            roomRow += '</tr>';
            div += courseRow + roomRow;
            div += '</div>';
            rowRecord += div;
        }
        tableRow.innerHTML += rowRecord;
    }

}
if (document.readyState == 'complete') {
    console.log("Page loaded");
} else {
    document.onreadystatechange = function () {
        if (document.readyState === "complete") {
            console.log("Page loaded 3");
            initialDragging();
        }
        console.log("Page load changing");
    }
}

//<!-- initialize drag and drop -->
//window.onload = function () {
function initialDragging() {
    console.log("Page loaded 4");
    // initialization
    REDIPS.drag.init();
    // dragged elements can be placed to the empty cells only (disable more than one element in the same table cell)
    REDIPS.drag.drop_option = 'single';
    // set hover color
    REDIPS.drag.hover_color = '#9BB3DA';
    REDIPS.drag.dropMode = 'switching';
    REDIPS.drag.trash.question = 'Are you sure you want to delete DIV element?';
    // don't ask on delete
    REDIPS.drag.trash_ask = false;
    // after element is dropped, print message
    REDIPS.drag.myhandler_dropped = function () {
        var obj = REDIPS.drag.obj; // reference to the dragged OBJect
        var obj_old = REDIPS.drag.obj_old; // reference to the original object
        var target_cell = REDIPS.drag.target_cell; // reference to the Target cell
        var target_row = REDIPS.drag.target_cell.parentNode; // reference to the Target row
        var marked_cell = REDIPS.drag.marked_cell; // reference to the meaning (deny/allow) of marked cells
        var mark_cname = REDIPS.drag.mark_cname; // reference to the name of marked cells
        var i, obj_new, mark_found, id; // local variables
        // if checkbox is checked and original element is "clone" type then clone school subject to the week
        if (document.getElementById('week').checked === true && obj_old.className.indexOf('clone') > -1) {
            // loop through table cells
            for (i = 0; i < target_row.cells.length; i++) {
                // skip table cell where DIV element is dropped
                if (target_cell === target_row.cells[i]) {
                    continue;
                }
                // skip if table cell is not empty
                if (target_row.cells[i].childNodes.length > 0) {
                    continue;
                }
                // search for 'mark' class name
                mark_found = target_row.cells[i].className.indexOf(mark_cname) > -1 ? true : false;
                // if current cell is marked and access type is 'deny' or current cell isn't marked and access type is 'allow'
                // then skip this table cell
                if ((mark_found === true && marked_cell === 'deny') || (mark_found === false && marked_cell === 'allow')) {
                    continue;
                }
                // clone DIV element
                obj_new = obj.cloneNode(true);
                // set id (first two characters are id of original element)
                id = obj.id.substring(0, 2);
                // set id for cloned element
                obj_new.id = id + 'c' + REDIPS.drag.cloned_id[id];
                // set reference to the DIV container 
                obj_new.redips_container = obj.redips_container;
                // increment cloned_id for cloned element
                REDIPS.drag.cloned_id[id] += 1;
                // set onmousedown event for cloned object
                obj_new.onmousedown = REDIPS.drag.handler_onmousedown;
                // append to the table cell
                target_row.cells[i].appendChild(obj_new);
            }
        }
        // print message only if target and source table cell differ
        if (REDIPS.drag.target_cell !== REDIPS.drag.source_cell) {
            print_message('Content has been changed (do not forget to save)!');
        }
    }
    // after element is deleted from the timetable, print message
    REDIPS.drag.myhandler_deleted = function () {
        print_message('Content has been deleted (do not forget to save)!');
    }
}

/* EXPERIMENTAL */

function onDragStart(event) {
    event
        .dataTransfer
        .setData('text/plain', event.target.id);

    event
        .currentTarget
        .style
        .backgroundColor = 'yellow';
}
function onDragOver(event) {
    event.preventDefault();
}
function onDrop(event) {
    const id = event
        .dataTransfer
        .getData('text');
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    dropzone.appendChild(draggableElement);
    event
        .dataTransfer
        .clearData();
}


/* END OF EXPERIMENTAL */






