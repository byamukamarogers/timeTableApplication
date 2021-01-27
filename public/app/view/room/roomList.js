Ext.define('TimeTableApp.view.room.roomList', {
    extend: 'Ext.panel.Panel',
    xtype: 'roomViewlist',

    requires: [
        'TimeTableApp.view.room.roomListController',
    ],

    controller: 'room-roomlist',
    viewModel: {
        type: 'room-room'
    },

    listeners: { afterrender: 'onAfterRoomLoad' },

    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            margin: '3 0 0 0',
            items: [
                {
                    margin: '0 0 0 0',
                    bodyPadding: 0,
                    width: '100%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },


                    defaultType: 'textfield',
                    items: [
                        {
                            title: 'Lecture Rooms',
                            reference: 'grdallRooms',
                            xtype: 'grid',
                            tbar: [
                                {
                                    xtype: 'combobox',
                                    emptyText: 'Search ...',
                                    width: 200
                                },
                                {
                                    xtype: 'button',
                                    text: 'Edit',
                                    iconCls: 'x-fa fas fa-edit',
                                    handler: 'onEditRoom'
                                }
                            ],
                            columns: [
                                {
                                    text: 'Room Id',
                                    dataIndex: 'roomid',
                                    flex: 0.2,
                                    hidden: true
                                },
                                {
                                    text: 'Room Name',
                                    dataIndex: 'roomname',
                                    flex: 0.3
                                },
                                {
                                    text: 'Capacity',
                                    dataIndex: 'capacity',
                                    flex: 0.2
                                },
                                {
                                    text: 'Room Type',
                                    dataIndex: 'roomtypename',
                                    flex: 0.2
                                },
                                {
                                    text: 'Location',
                                    dataIndex: 'location',
                                    flex: 0.3
                                }
                            ],
                            bbar: {
                                xtype: 'pagingtoolbar',
                                displayInfo: true,
                                displayMsg: 'Display records {0} - {1} of {2}',
                                emptyMsg: 'No Record to display'
                            },
                            plugins: [
                                {
                                    ptype: 'rowexpander',
                                    rowBodyTpl: [
                                        '<b>Location :</b> {location}<br/>',
                                        '<b>Faculty :</b> {facultyname}'
                                    ]
                                }
                            ]
                        }
                    ],

                },
            ]
        },
    ],

});
