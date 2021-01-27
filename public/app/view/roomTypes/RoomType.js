
Ext.define('TimeTableApp.view.roomTypes.RoomType', {
    extend: 'Ext.panel.Panel',
    xtype: 'roomTypes',

    requires: [
        'TimeTableApp.view.roomTypes.RoomTypeController',
        'TimeTableApp.view.roomTypes.RoomTypeModel'
    ],

    controller: 'roomtypes-roomtype',
    viewModel: {
        type: 'roomtypes-roomtype'
    },
    listeners: { afterrender: 'onAfterRoomTypeLoad' },
    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            margin: '3 0 0 0',
            items: [
                {
                    title: 'Register New Room Type',
                    bodyPadding: 5,
                    xtype:'form',
                    width: '40%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    defaultType: 'textfield',
                    items: [
                        {
                            fieldLabel: 'Type ID',
                            bind: '{roomtypeid}',
                            hidden:true
                        },
                        {
                            fieldLabel: 'Type ID',
                            bind: '{roomtypeid}',
                            disabled: true
                        },
                         {
                            fieldLabel: 'Type Name',
                            bind: '{roomtypename}',
                            allowBlank: false
                        },
                         {
                            fieldLabel: 'Type Code',
                            bind: '{roomtypecode}',
                            allowBlank: false
                        },
                         {
                            fieldLabel: 'Description',
                            xtype: 'textareafield',
                            bind: '{roomtypedescription}',
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
                            handler: 'onRoomTypeSubmitClicked'
                        }
                    ],
                },
                {
                    margin: '0 0 0 10',
                    bodyPadding: 0,
                    width: '60%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    defaultType: 'textfield',
                    items: [
                        {
                            xtype: 'grid',
                            title: 'All Room Types',
                            reference: 'grdallRoomTypes',
                            columns: [
                                { text: 'Type Name', dataIndex: 'roomtypename', flex: 1 },
                                { text: 'Type Name', dataIndex: 'roomtypecode', flex: 1 },
                                { text: 'Description', dataIndex: 'roomtypedescription', flex: 1 },
                            ],
                        }
                    ],

                },
            ]
        },
    ],
});
