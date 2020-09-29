
Ext.define('TimeTableApp.view.ABC.TimeTable', {
    extend: 'Ext.panel.Panel',
    xtype: 'timeTable',

    requires: [
        'TimeTableApp.view.ABC.TimeTableController',
        'TimeTableApp.view.ABC.TimeTableModel'
    ],

    controller: 'abc-timetable',
    viewModel: {
        type: 'abc-timetable'
    },
    listeners: {afterrender: 'onAfterRender'},
    //id: 'drag',

    margin: 3,
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [
        {
            id: 'left',
            margin: '0 2',
            width: '30%',
            items: [
                {
                    xtype: 'gridpanel',
                    cls: "table1",
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
                            id: "table1",
                            tpl: [
                      '<div id="{name}" draggable="true" ondragstart="drag(event)" data-effect-allowed="copy" >Drag Text</div>',
                      ]
                        },
                        { text: 'Lecturer', dataIndex: 'courseLecturer', flex: 1 },
                        {
                            text: 'Room',
                            flex: 1,
                            tdCls: 'dark',
                            xtype: 'templatecolumn',
                            tpl: '<b><div id="{courseLecturer}" class="drag green clone">{room}</div></b>',
                        },
                    ],
                }
            ],
        },
        {
            id: 'right',
            width: '70%',
            items: [
                {
                    extend: 'Ext.tree.Panel',
                    xtype: 'treepanel',
                    cls: "table2", 
                    id: "table2",
                    stripeRows: true,
                    title: 'Time Table',
                    reference:'timetableGrd',
                    columns: [
                        {
                            header: 'Day',
                            sortable: true,
                            dataIndex: 'day',
                            flex: 1,
                            tdCls: 'mark dark',
                            /* renderer: function(value, metaData, record){
                                console.log(record.data);
                            } */
                        },
                        {
                            header: '7:00 - 8:00',
                            sortable: true,
                            flex: 1,
                            dataIndex: 'leaf',

                        },
                        {
                            header: '8:00 - 9:00',
                            sortable: true,
                            dataIndex: '2',
                            flex: 1
                        },

                    ],
                    fbar: [
                        {
                            xtype: 'button',
                            text:'Save',
                            handler: 'ttsave1'
                        }
                    ]
                }
            ]
        },
        

    ]

});
