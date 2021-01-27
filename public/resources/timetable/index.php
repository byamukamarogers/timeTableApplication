<?php
session_start();
// include config with database definition
if(isset($_GET['classid'])){

	$classid = $_GET['classid'];
	$semesterid = $_GET['semesterid'];
	$ssessionid = $_GET['ssessionid'];
	$_SESSION['classid'] = $_GET['classid'];
	$_SESSION['semesterid'] = $_GET['semesterid'];
	$_SESSION['ssessionid'] = $_GET['ssessionid'];

}
include('config.php');
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN">
<html>

<head>
	<meta name="author" content="Darko Bunic" />
	<meta name="description" content="Drag and drop table content with JavaScript" />
	<link rel="stylesheet" href="style.css" type="text/css" media="screen" />
	<script type="text/javascript" src="drag.js"></script>
	<!-- initialize drag and drop -->
	<script type="text/javascript">
		window.onload = function() {
			// initialization
			REDIPS.drag.init();
			// dragged elements can be placed to the empty cells only (disable more than one element in the same table cell)
			REDIPS.drag.drop_option = 'single';
			// set hover color
			REDIPS.drag.hover_color = '#9BB3DA';
			// don't ask on delete
			REDIPS.drag.trash_ask = false;
			// after element is dropped, print message
			REDIPS.drag.myhandler_dropped = function() {
				var obj = REDIPS.drag.obj; // reference to the dragged OBJect
				var obj_old = REDIPS.drag.obj_old; // reference to the original object
				var target_cell = REDIPS.drag.target_cell; // reference to the Target cell
				var target_row = REDIPS.drag.target_cell.parentNode; // reference to the Target row
				var marked_cell = REDIPS.drag.marked_cell; // reference to the meaning (deny/allow) of marked cells
				var mark_cname = REDIPS.drag.mark_cname; // reference to the name of marked cells
				var i, obj_new, mark_found, id; // local variables

				// print message only if target and source table cell differ
				if (REDIPS.drag.target_cell !== REDIPS.drag.source_cell) {
					print_message('Content has been changed (do not forget to save)!');
				}
			}
			// after element is deleted from the timetable, print message
			REDIPS.drag.myhandler_deleted = function() {
				print_message('Content has been deleted (do not forget to save)!');
			}
		}
		// save elements and their positions
		function save() {
			// scan second table (timetable)
			var content = REDIPS.drag.save_content(1);
			//console.log(content);
			window.location.href = 'save.php?' + content;
		}
		// print message
		function print_message(message) {
			document.getElementById('message').innerHTML = message;
		}
	</script>
	<title>FOS:: TimeTable</title>
</head>

<body>
	<div id="main_container">
		<!-- tables inside this DIV could have draggable content -->
		<div id="drag">
			<!-- left container -->
			<div style=" display:flex;">
				<!-- All Tables -->
				<div style="width: 10%;">
					<!-- first table -->
					<div id="left" style="position: fixed;">
						<table id="table1" style="margin-bottom: 10px;">
							<colgroup>
								<col width="100" />
							</colgroup>
							<tbody>
								<tr>
									<td>Courses</td>
								</tr>
								<?php subjects() ?>
								<tr>
									<td class="trash" title="Trash">Drop Here To Delete</td>
								</tr>
							</tbody>
						</table>
					</div>

				</div>
				<div style="width: 100%; overflow: scroll;">
					<table width="100%" id="table-<?php echo $classid.'-'.$semesterid.'-'.$ssessionid ?>">
						<thead>
							<tr>
								<th class="mark dark" width="100">Day</th>
								<th class="mark dark" width="100">Allocations</th>
								<th class="mark dark" width="100">07:00</th>
								<th class="mark dark" width="100">08:00</th>
								<th class="mark dark" width="100">09:00</th>
								<th class="mark dark" width="100">10:00</th>
								<th class="mark dark" width="100">11:00</th>
								<th class="mark dark" width="100">12:00</th>
								<th class="mark dark" class="mark dark" width="100">01:00</th>
								<th class="mark dark" width="100">02:00</th>
								<th class="mark dark" width="100">03:00</th>
								<th class="mark dark" width="100">04:00</th>
								<th class="mark dark" width="100">05:00</th>
							</tr>
						</thead>

						<tbody>
							<?php //echo getTimeTableRow(); 
							?>
							<?php echo getTimeTRow(13, 'Monday', 1, 2); ?>
							<?php echo getTimeTRow(13, 'Tuesday', 3, 4); ?>
							<?php echo getTimeTRow(13, 'Wednesday', 5, 6); ?>
							<?php echo getTimeTRow(13, 'Thursday', 7, 8); ?>
							<?php echo getTimeTRow(13, 'Friday', 9, 10); ?>
							<?php echo getTimeTRow(13, 'Saturday', 11, 12); ?>
						</tbody>
					</table>

				</div>
				<div style="width: 10%; margin: 0px 5px 5px 5px;">
					<div id="center" style="position: fixed;">
						<table id="table3">
							<colgroup>
								<col width="100" />
							</colgroup>
							<tbody>
								<tr>
									<td>Rooms</td>
								</tr>
								<?php rooms() ?>
								<tr>
									<td class="trash" title="Trash"> Drop Here To Delete</td>
								</tr>
							</tbody>
						</table>
						<div class="button_container">
							<input type="button" value="Save" class="button" onclick="save()" title="Save timetable" />
						</div>
					</div>
				</div>
			</div>

		</div><!-- drag container -->
		<br />
		<div style="margin: 10px 140px 10px 140px;">
			<div id="message">Please drag course units and rooms to the timetable</div>


		</div>
	</div><!-- main container -->
</body>

</html>