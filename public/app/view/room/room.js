
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
                        {
                            title: 'Register New Room',
                            bodyPadding: 5,
                            xtype: 'form',
                            width: '35%',
                            layout: 'anchor',
                            defaults: {
                                anchor: '100%'
                            },
                            defaultType: 'textfield',
                            items: [
                                {
                                    fieldLabel: 'Room ID',
                                    bind: '{roomid}',
                                    hidden: true
                                },
                                {
                                    fieldLabel: 'Room ID',
                                    bind: '{roomid}',
                                    disabled: true
                                },
                                {
                                    fieldLabel: 'Room Name',
                                    bind: '{roomname}',
                                    allowBlank: false
                                },
                                {
                                    fieldLabel: 'Capacity',
                                    bind: '{capacity}',
                                    allowBlank: false
                                },
                                {
                                    fieldLabel: 'Location',
                                    bind: '{location}',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'combobox',
                                    reference: 'cboRoomTypeName',
                                    bind: '{roomtypeid}',
                                    fieldLabel: 'Room Type',
                                    displayField: 'roomtypename',
                                    valueField: 'roomtypeid',
                                    forceSelection: true,
                                    queryMode: 'local',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'combobox',
                                    reference: 'cboFacultyName',
                                    bind: '{facultyid}',
                                    fieldLabel: 'Faculty Name',
                                    displayField: 'facultyname',
                                    valueField: 'facultyid',
                                    forceSelection: true,
                                    queryMode: 'local',
                                    allowBlank: false
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Reset'
                                },
                                {
                                    text: 'Submit',
                                    formBind: true,
                                    handler: 'onRoomSubmitClicked'
                                }
                            ]
                        },
                        {
                            title: 'Room Types',
                            layout: 'anchor',
                            width: '100%',
                            defaults: {
                                anchor: '100%'
                            },
                            defaultType: 'textfield',
                            items: [
                                {
                                    xtype: 'roomTypes',
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});
