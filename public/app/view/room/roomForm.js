
Ext.define('TimeTableApp.view.room.roomForm', {
    extend: 'Ext.panel.Panel',
    xtype: 'roomForm',

    requires: [
        'TimeTableApp.view.room.roomFormController',
        'TimeTableApp.view.room.roomFormModel'
    ],

    controller: 'room-roomform',
    viewModel: {
        type: 'room-roomform'
    },
    listeners: { afterrender: 'onAfterRender' },
    height: 400,
    width: 800,
    autoScroll: true,
    items: [
        {
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
                                    xtype: 'roomTypes'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});
