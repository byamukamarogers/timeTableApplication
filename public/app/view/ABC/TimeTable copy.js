
Ext.define('TimeTableApp.view.ABC.TimeTableCopy', {
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
    //listeners: {afterrender: 'onAfterRender'},
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
                            //tpl: '<b><div id="{name}" class="drag green clone">{name}</div></b>',
                            tpl: [
                      '<div id="{name}" draggable="true" ondragstart="drag(event)" data-effect-allowed="copy" >Drag Text</div>',
                      ]
                        },
                        { text: 'Lecturer', dataIndex: 'courseLecturer', flex: 1 },
                        {
                            text: 'Room',
                            //dataIndex: 'room',
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
                    xtype: 'gridpanel',
                    cls: "table2",
                    id: "table2",
                    stripeRows: true,
                    title: 'Time Table',
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
                            flex: 1,
                            xtype: 'templatecolumn',
                            tpl: [
                                '<div style="padding: 10px; border: 1px solid #aaaaaa;"  id="{day}" ondrop="drop(event)" ondragover="allowDrop(event)" ></div>',
                            ],
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
                }
            ]
        },
        

    ]

});
