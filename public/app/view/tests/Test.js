
Ext.define('TimeTableApp.view.tests.Test', {
    extend: 'Ext.panel.Panel',
    xtype: 'testsView',

    requires: [
        'TimeTableApp.view.tests.TestController',
        'TimeTableApp.view.tests.TestModel',
        'TimeTableApp.view.tests.Test',
    ],

    controller: 'tests-test',
    viewModel: {
        type: 'tests-test'
    },
    controller: 'main-menu',
    collapsible: true,
    hideCollapseTool: false,
    split: true,
    iconCls: 'x-fa fa-sitemap fa-lg',
    title: 'Modules Menu',
    width: 250,
    scrollable: true,

    items: [
        {
            extend: 'Ext.panel.Panel',
            layout: {
                // layout-specific configs 
                type: 'accordion',
                titleCollapse: false,
                animate: false,
                activeOnTop: false,
            },
            items: [
                {
                    title: 'Class',
                },
                {
                    title: 'Room',
                },
            ],

        },

    ]


    //listeners: { afterrender: 'onAfterRender' },
    /* cls: 'drag',
    margin: 3,
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [
        {
            extend: 'Ext.panel.Panel',
            title: 'Drag And Drop',
            id: 'sample',
            items: [
                {
                    text: 'my sample 1'
                }
            ]
        },
         {
            xtype: 'gridpanel',
            cls: "table2",
            stripeRows: true,
            title: 'Time Table',
            width: '40%',
            html: '<b><div id="012" class="drag green clone">Room</div></b>',
            store: {
                extend: 'Ext.data.ArrayStore',
                fields: [
                    { name: 'day', type: 'string' },
                    { name: '7-8', type: 'string' },
                    { name: '8-9', type: 'string' },
                    { name: '9-10', type: 'string' },
                    { name: '10-11', type: 'string' },
                    { name: '11-12', type: 'string' },
                    { name: '12-13', type: 'string' },
                    { name: '13-14', type: 'string' },
                ],
                data: [
                    ['Monday',],
                    ['Tuesday',],
                    ['Wednesday',],
                    ['Thursday',],
                    ['Friday',],
                    ['Saturday',],
                    ['Sunday',],
                ]
            },
            columns: [
                {
                    header: 'Day',
                    sortable: true,
                    dataIndex: 'day',
                    flex: 1,
                    tdCls: 'mark dark'
                },
                {
                    text: '7:00 - 8:00',
                    sortable: true,
                    dataIndex: '1',
                    flex: 1
                },
                {
                    header: '8:00 - 9:00',
                    sortable: true,
                    dataIndex: '2',
                    flex: 1
                },
                {
                    header: '9:00 - 10:00',
                    sortable: true,
                    dataIndex: '3',
                    flex: 1
                },
                {
                    header: '10:00 - 11:00',
                    sortable: true,
                    dataIndex: '4',
                    flex: 1
                },
                {
                    header: '11:00 - 12:00',
                    sortable: true,
                    dataIndex: '5',
                    flex: 1,
                },

            ],
            fbar: [
                {
                    hidden: false,
                    html: '<i>my simple text</i> <div id="obj_new" style="height: 6px;width: 11px;"></div>',
                }
            ]
        },
        {

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
        }, 
        {
            extend: 'Ext.Component',
            cls: 'hopscotch-bubble-container',
            width: '100%',
            padding: 15,
            title: 'sample',
            store: {
                data: [
                    { name: 'SIS3201', courseLecturer: 'SJ', room: 'IICD UP', },
                    { name: 'SIS3202', courseLecturer: 'SR', room: 'S2.39' },
                    { name: 'SIS3203', courseLecturer: 'BM', room: 'S2.39' },
                    { name: 'SIS3204', courseLecturer: 'KBM', room: 'S2.40' },
                    { name: 'SIS3205', courseLecturer: 'Research', room: 'S2.37' },
                ]
            },
            //id: 'test',
            html: [
              '<div id="main_container">',
                  '<!-- tables inside this DIV could have draggable content -->',
                  '<div id="drag">',
          
                      '<!-- left container -->',
                      '<div id="left">',
                          '<table id="table1">',
                              '<colgroup>',
                                  '<col width="200"/>',
                              '</colgroup>',
                              '<tbody>',
                                  '<?php subjects() ?>',
                                  '<tr><td class="trash" title="Trash">{room}Trash</td></tr>',
                              '</tbody>',
                          '</table>',
                      '</div><!-- left container -->',
                      
                      '<!-- right container -->',
                      '<div id="right">',
                          '<table id="table2">',
                              '<colgroup>',
                                  '<col width="50"/>',
                                  '<col width="100"/>',
                                  '<col width="100"/>',
                                  '<col width="100"/>',
                                  '<col width="100"/>',
                                  '<col width="100"/>',
                              '</colgroup>',
                              '<tbody>',
                                  '<tr>',
                                      '<!-- if checkbox is checked, clone school subjects to the whole table row  -->',
                                      '<td class="mark blank"><input id="week" type="checkbox" title="Apply school subjects to the week"/></td>',
                                      '<td class="mark dark">Monday</td>',
                                      '<td class="mark dark">Tuesday</td>',
                                      '<td class="mark dark">Wednesday</td>',
                                      '<td class="mark dark">Thursday</td>',
                                      '<td class="mark dark">Friday</td>',
                                  '</tr>',
      
                                  "<?php timetable('08:00', 1) ?>",
                                  "<?php timetable('09:00', 2) ?>",
                                  "<?php timetable('10:00', 3) ?>",
                                  "<?php timetable('11:00', 4) ?>",
                                  "<?php timetable('12:00', 5) ?>",
                                  '<tr>',
                                      '<td class="mark dark">13:00</td>',
                                      '<td class="mark lunch" colspan="5">Lunch</td>',
                                  '</tr>',
                                  "<?php timetable('14:00', 7) ?>",
                                  "<?php timetable('15:00', 8) ?>",
                                  "<?php timetable('16:00', 9) ?>",
                              '</tbody>',
                          '</table>',
                      '</div><!-- right container -->',
                  '</div><!-- drag container -->',
                  '<br/>',
                  '<div id="message">Please drag school subjects to the timetable</div>',
                  '<div class="button_container">',
                      '<input type="button" value="Save" class="button" onclick="save()" title="Save timetable"/>',
                  '</div>',
              '</div><!-- main container -->',
            ]
            
        } 
    ] */



});
