
Ext.define('TimeTableApp.view.roomTypes.RoomType',{
    extend: 'Ext.panel.Panel',
    xtype:'roomTypes',

    requires: [
        'TimeTableApp.view.roomTypes.RoomTypeController',
        'TimeTableApp.view.roomTypes.RoomTypeModel'
    ],

    controller: 'roomtypes-roomtype',
    viewModel: {
        type: 'roomtypes-roomtype'
    },
    listeners:{afterrender:'onAfterRoomTypeLoad'},
    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            margin: '3 0 0 0',
            items: [      
                {
                    title: 'Register New Room Type',
                    bodyPadding: 5,
                    width: '40%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    defaultType: 'textfield',
                    items: [{
                        fieldLabel: 'Type ID',
                        bind: '{roomTypeId}',
                        allowBlank: false
                    }, {
                        fieldLabel: 'Type Name',
                        bind: '{roomTypeName}',
                        allowBlank: false
                    }, {
                        fieldLabel: 'Description',
                        xtype:'textareafield',
                        bind: '{roomTypeDescription}',
                        allowBlank: false
                    },
                    ],
                    buttons: [{
                        text: 'Reset'
                    }, {
                        text: 'Submit',
                        handler: 'onRoomTypeSubmitClicked'
                    }],
                },
                //Grid to display all Available rooms
                {
                    margin: '0 0 0 10',
                    bodyPadding: 0,
                    width: '60%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    defaultType: 'textfield',
                    items: [{
                        extend: 'Ext.grid.Panel',
                        xtype: 'grid',
                        title: 'All Room Types',
                        reference: 'grdallRoomTypes',
                        columns: [
                            { text: 'Type Name', dataIndex: 'roomTypeName', flex: 1 },
                            { text: 'Description', dataIndex: 'roomTypeDescription', flex: 1 },
                        ],
                    }
                    ],

                },
            ]
        },
    ],
});
