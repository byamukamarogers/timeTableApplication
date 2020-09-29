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
                //Grid to display all Available rooms
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
                            extend: 'TimeTableApp.view.util.base.Grid',
                            xtype: 'baseGrid',
                            plugins: [
                                {
                                    enableDeleteButton: false,
                                    ptype: 'cellediting',
                                    clicksToEdit: 2,
                                    pluginId: 'cellplugin'
                                },
                                {
                                    ptype: 'gridfilters'
                                }
                            ],
                            columns: [
                                { text: 'Room Id', dataIndex: 'roomId', flex: 0.5, editable: false },
                                { text: 'Room Name', dataIndex: 'roomName', flex: 1, editable: true },
                                { text: 'Capacity', dataIndex: 'capacity', flex: 1, editable: true },
                                { text: 'Location', dataIndex: 'location', editable: true },
                                { text: 'Room Type', dataIndex: 'roomTypeId', editable: true },
                                { text: 'Faculty', dataIndex: 'facultyName', flex: 1, editable: true },

                            ],
                            selModel: {
                                selType: 'cellmodel'
                            },
                        }
                    ],

                },
            ]
        },
    ],

});
