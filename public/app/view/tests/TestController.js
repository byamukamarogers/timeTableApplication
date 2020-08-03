Ext.define('TimeTableApp.view.tests.TestController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tests-test',
    onAfterRender: async function () {
        Ext.create('Ext.Component', {
            id:'myComponent',
            renderTo: Ext.getBody(),
            html:'Hello World!',
            items:[{

                xtype: 'gridpanel',
                cls: "table1",
                margin: '0 2',
                width: '30%',
                stripeRows: true,
                title: 'Associations',
                store: {
                    data: [
                        { name: 'SIS3201', courseLecturer: 'SJ', room: 'IICD UP', },
                        { name: 'SIS3202', courseLecturer: 'SR', room: 'S2.39' },
                        { name: 'SIS3203', courseLecturer: 'BM', room: 'S2.39' },
                        { name: 'SIS3204', courseLecturer: 'KBM', room: 'S2.40' },
                        { name: 'SIS3205', courseLecturer: 'Research', room: 'S2.37' },
                    ]
                },
    
                columns: [
                    {
                        text: 'Course Unit',
                        dataIndex: 'name',
                        tdCls: 'dark',
                        xtype: 'templatecolumn',
                        tpl: '<b><div id="{name}" class="drag green clone">{name}</div></b>',
                    },
                    { text: 'Lecturer', dataIndex: 'courseLecturer', flex: 1 },
                    {
                        text: 'Room',
                        //dataIndex: 'room',
                        flex: 1,
                        tdCls: 'dark',
                        xtype: 'templatecolumn',
                        tpl: '<b><div id="{room}" class="drag green clone">{room}</div></b>',
                    },
                ],
            }]
        });
        // initialization
        REDIPS.drag.init();
        // dragged elements can be placed to the empty cells only (disable more than one element in the same table cell)
        REDIPS.drag.drop_option = 'single';
        // set hover color
        REDIPS.drag.hover_color = '#9BB3DA';
        // don't ask on delete
        REDIPS.drag.trash_ask = false;
        // after element is dropped, print message
        REDIPS.drag.myhandler_dropped = function () {
            var obj = REDIPS.drag.obj;						// reference to the dragged OBJect
            var obj_old = REDIPS.drag.obj_old;					// reference to the original object
            var target_cell = REDIPS.drag.target_cell;				// reference to the Target cell
            var target_row = REDIPS.drag.target_cell.parentNode;	// reference to the Target row
            var marked_cell = REDIPS.drag.marked_cell;				// reference to the meaning (deny/allow) of marked cells
            var mark_cname = REDIPS.drag.mark_cname;				// reference to the name of marked cells
            var i, obj_new, mark_found, id;							// local variables
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
    },

    // save elements and their positions
    save: async function () {
        // scan second table (timetable)
        var content = REDIPS.drag.save_content(1);
        window.location.href = 'save.php?' + content;
    },
    // print message
    print_message: function (message) {
        document.getElementById('message').innerHTML = message;
    }

});
