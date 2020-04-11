
Ext.define('TimeTableApp.view.structure.structure', {
    extend: 'Ext.panel.Panel',
    xtype: 'ttStructure',

    requires: [
        'TimeTableApp.view.structure.structureController',
        'TimeTableApp.view.structure.structureModel'
    ],

    controller: 'structure-structure',
    viewModel: {
        type: 'structure-structure'
    },
    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            margin: '3 0 0 0',
            items: [
                //Grid to display Course units
                {
                    bodyPadding: '0 5 0 0',
                    width: '80%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    defaultType: 'textfield',
                    items: [
                        {
                            extend: 'Ext.tab.Panel',
                            width: '100%',
                            height: '100%',
                            xtype: 'tabpanel',
                            activeTab: 0,
                            //tabPosition: 'left',
                            layout: 'hbox',
                            rotation: 'right',
                            items: [
                                {
                                    title: 'DAY PROGRAM',
                                    margin: '5 0 0 0',
                                    items: [
                                        {
                                            extend: 'Ext.grid.Panel',
                                            xtype: 'grid',
                                            title: 'BIS III DAY SEM 2 TIME TABLE 2019/2020',
                                            defaults:{
                                                headerWrap: true,
                                            },
                                            columns: [
                                                { text: 'DAY', dataIndex: 'name', },
                                                { text: '8:00AM - 9:00AM', dataIndex: 'courseUnit', flex: 1,headerWrap: true, },
                                                { text: '9:00AM - 10:00AM', dataIndex: 'courseUnit', flex: 1 },
                                                { text: '10:00AM - 11:00AM', dataIndex: 'courseUnit', flex: 1 },
                                                { text: '11:00AM - 12:00PM', dataIndex: 'courseUnit', flex: 1 },
                                                { text: '12:00AM - 13:00PM', dataIndex: '', flex: 1 },
                                                { text: '13:00AM - 14:00PM', dataIndex: '', flex: 1 },
                                                { text: '14:00AM - 15:00PM', dataIndex: 'courseUnit', flex: 1 },
                                                { text: '15:00AM - 16:00PM', dataIndex: 'courseUnit', flex: 1 },
                                                { text: '16:00AM - 17:00PM', dataIndex: 'courseUnit', flex: 1 },
                                            ], 
                                            store: {
                                                data: [
                                                    { name: 'Monday', courseUnit: 'lisa@simpsons.com', },
                                                    { name: 'Tuesday', courseUnit: 'bart@simpsons.com', },
                                                    { name: 'Wednesday', courseUnit: 'homer@simpsons.com',},
                                                    { name: 'Thursday', courseUnit: 'marge@simpsons.com',},
                                                    { name: 'Friday', courseUnit: 'marge@simpsons.com',},
                                                    { name: 'Saturday', courseUnit: 'marge@simpsons.com',},
                                                    { name: 'Sunday', courseUnit: 'marge@simpsons.com',},
                                                ]
                                            }
                                        },
                                    ]
                                },
                                {
                                    title: 'EVENING PROGRAM',
                                    margin: '5 0 0 0',
                                    items: [
                                        {
                                            extend: 'Ext.grid.Panel',
                                            xtype: 'grid',
                                            title: 'BIS III EVENING SEM 2 TIME TABLE 2019/2020',
                                            reference: 'grdallRooms',
                                            columns: [
                                                { text: 'DAY', dataIndex: 'name', },
                                                { text: '17:00AM - 18:00PM', dataIndex: 'courseUnit', flex: 1 },
                                                { text: '18:00AM - 19:00PM', dataIndex: 'courseUnit', flex: 1 },
                                                { text: '19:00AM - 20:00PM', dataIndex: 'courseUnit', flex: 1 },
                                                { text: '20:00AM - 21:00PM', dataIndex: 'courseUnit', flex: 1 },
                                                { text: '21:00AM - 22:00PM', dataIndex: 'courseUnit', flex: 1 },
                                            ], 
                                            store: {
                                                data: [
                                                    { name: 'Monday', courseUnit: 'lisa@simpsons.com', },
                                                    { name: 'Tuesday', courseUnit: 'bart@simpsons.com', },
                                                    { name: 'Wednesday', courseUnit: 'homer@simpsons.com',},
                                                    { name: 'Thursday', courseUnit: 'marge@simpsons.com',},
                                                    { name: 'Friday', courseUnit: 'marge@simpsons.com',},
                                                    { name: 'Saturday', courseUnit: 'marge@simpsons.com',},
                                                    { name: 'Sunday', courseUnit: 'marge@simpsons.com',},
                                                ]
                                            }
                                        },

                                    ],
                                },
                            ]
                        }
                    ],
                    buttons: [{
                        text: 'Reset'
                    }, {
                        text: 'Submit',
                        handler: 'onRoomSubmitClicked'
                    }],

                },
                //Registered Course Units        
                {
                    title: 'Registered Course Units',
                    margin: '0 0 0 0',
                    bodyPadding: '5 0',
                    width: '20%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    defaultType: 'textfield',
                    items: [
                        {
                            extend: 'Ext.tab.Panel',
                            width: '100%',
                            height: '100%',
                            xtype: 'tabpanel',
                            activeTab: 0,
                            layout: 'hbox',
                            rotation: 'right',
                            items: [
                                {
                                    title: 'DAY',
                                    margin: '5 0 0 0',
                                    items: [
                                        {
                                            extend: 'Ext.grid.Panel',
                                            xtype: 'grid',
                                            title: 'BIS III DAY',
                                            reference: 'grdallRooms',
                                            headerWrap: true,
                                            columns: [
                                                { text: 'Course Unit', dataIndex: 'name', },
                                                { text: 'Lecturer', dataIndex: 'courseLecturer', flex: 1 },
                                                { text: 'Room', dataIndex: 'room', flex: 1 },
                                            ],
                                            store: {
                                                data: [
                                                    { name: 'SIS3201', courseLecturer: 'SJ', room:'IICD UP' },
                                                    { name: 'SIS3202', courseLecturer: 'SR', room:'S2.39' },
                                                    { name: 'SIS3203', courseLecturer: 'BM', room:'S2.39'},
                                                    { name: 'SIS3204', courseLecturer: 'KBM',room:'S2.40'},
                                                    { name: 'SIS3205', courseLecturer: 'Research', room:'S2.37'},
                                                ]
                                            }
                                        },
                                    ]
                                },
                                {
                                    title: 'EVENING',
                                    margin: '5 0 0 0',
                                    items: [
                                        {
                                            extend: 'Ext.grid.Panel',
                                            xtype: 'grid',
                                            title: 'BIS III EVENING',
                                            reference: 'grdallRooms',
                                            columns: [
                                                { text: 'DAY', dataIndex: 'roomname', },
                                                { text: '17:00AM - 18:00PM', dataIndex: 'roomname', flex: 1 },
                                            ],
                                        },

                                    ],
                                },
                            ]
                        }
                    ],
                },
            ],
        },
    ]
});
