
Ext.define('TimeTableApp.view.room.room', {
    extend: 'Ext.panel.Panel',
    xtype: 'roomView',

    requires: [
        'TimeTableApp.view.room.roomController',
        'TimeTableApp.view.room.roomModel',
    ],

    controller: 'room-room',
    viewModel: {
        type: 'room-room'
    },
    listeners: { afterrender: 'onAfterRender' },
    
    autoScroll: true,
    items: [
        {
            xtype: 'form',
            layout: {
                type: 'fit'
            },
            items: [
                {
                    xtype: 'tabpanel',
                    activeTab: 0,
                    items: [
                        //Room registration form        
                        {
                            title: 'Register New Room',
                            bodyPadding: 5,
                            width: '35%',
                            layout: 'anchor',
                            defaults: {
                                anchor: '100%'
                            },
                            defaultType: 'textfield',
                            items: [
                                {
                                    fieldLabel: 'Room ID',
                                    bind: '{roomId}',
                                    allowBlank: false
                                }, {
                                    fieldLabel: 'Room Name',
                                    bind: '{roomName}',
                                    allowBlank: false
                                }, {
                                    fieldLabel: 'Capacity',
                                    bind: '{capacity}',
                                    allowBlank: false
                                }, {
                                    fieldLabel: 'Location',
                                    bind: '{location}'

                                },
                                {
                                    xtype: 'combobox',
                                    reference: 'cboRoomTypeName',
                                    bind: '{roomTypeId}',
                                    fieldLabel: 'Room Type',
                                    displayField: 'roomTypeName',
                                    valueField: 'roomTypeId',
                                    forceSelection: true,
                                    queryMode: 'local'
                                },
                                {
                                    xtype: 'combobox',
                                    reference: 'cboFacultyName',
                                    bind: '{facultyId}',
                                    fieldLabel: 'Faculty Name',
                                    displayField: 'facultyName',
                                    valueField: 'facultyId',
                                    forceSelection: true,
                                    queryMode: 'local'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Reset'
                                },
                                {
                                    text: 'Submit',
                                    handler: 'onRoomSubmitClicked'
                                }],
                        },
                        {
                            title: 'Room Types',
                            layout: 'anchor',
                            width: '100%',
                            defaults: {
                                anchor: '100%'
                            },
                            defaultType: 'textfield',
                            items: [{
                                xtype: 'roomTypes',
                            },
                            ],
                        },

                    ]
                },
            ]
        }

    ],
});
