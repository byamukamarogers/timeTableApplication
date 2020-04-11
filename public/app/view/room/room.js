
Ext.define('TimeTableApp.view.room.room', {
    extend: 'Ext.panel.Panel',
    xtype: 'roomView',

    requires: [
        'TimeTableApp.view.room.roomController',
        'TimeTableApp.view.room.roomModel'
    ],

    controller: 'room-room',
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
                    items: [{
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
                            text: 'Add Room Type',
                            handler: 'onAddRoomTypeSubmitClicked'
                        },
                        {
                            text: 'Reset'
                        },
                        {
                            text: 'Submit',
                            handler: 'onRoomSubmitClicked'
                        }],
                },
                //Grid to display all Available rooms
                {
                    margin: '0 0 0 10',
                    bodyPadding: 0,
                    width: '65%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    defaultType: 'textfield',
                    items: [{
                        extend: 'Ext.grid.Grid',
                        xtype: 'grid',
                        title: 'All Rooms',
                        reference: 'grdallRooms',
                        plugins: [{
                            ptype: 'rowediting',
                            enableDeleteButton: false,
                            triggerEvent: 'celldblclick',
                        }],
                        actions: {
                            delete: {
                                iconCls: 'x-fa fa-trash-o red',
                                tooltip: 'Delete'
                            },
                            edit: {
                                iconCls: 'x-fa fa-pencil-square blue',
                                tooltip: 'Edit'
                            }
                        },
                        items: [{
                            docked: 'top',
                            xtype: 'toolbar',
                            items: [{
                                text: 'Search Box',
                            }]
                        }],
                        columns: [
                            { text: 'Room Name', dataIndex: 'roomName', flex: 1, editable: true },
                            { text: 'Capacity', dataIndex: 'capacity', flex: 1, editable: true },
                            { text: 'Location', dataIndex: 'location', editable: true },
                            { text: 'Room Type', dataIndex: 'roomTypeId', editable: true },
                            { text: 'Faculty', dataIndex: 'facultyName', flex: 1, editable: true },
                            {
                                width: 70,
                                sortable: false,
                                menuDisabled: true,
                                xtype: 'actioncolumn',
                                items: ['@delete', '@edit']
                            }
                        ],
                        //Add Pagination toolbar, Paging not working yet, this just sample
                        bbar: {
                            xtype: 'pagingtoolbar',
                            displayInfo: true,
                            displayMsg: 'Display records {0} - {1} of {2}',
                            emptyMsg: 'No Record to display'
                        },
                        tbar: [
                            {
                                xtype: 'textfield',
                                emptyText: 'Search...',
                                width: 200,
                                enableKeyEvents: true,
                                listeners: {
                                    keyup: {
                                        fn: function (field, e) {
                                                var val = field.getValue();
                                                invoicesGrid.getStore().filterBy(function(record){
                                                return record.get('Client').substring(0, val.length) ===
                                                val;
                                                }, this);
                                        },
                                        buffer: 250
                                    }
                                }
                            },
                            {
                                xtype: 'button',
                                text: 'Search',
                                iconCls: 'x-fa fa-search blue',
                                handler: 'searchFilter',
                            },
                            {
                                xtype: 'button',
                                text: 'Refresh',
                                iconCls: 'x-fa fa-refresh blue'
                            }
                        ],
                    }
                    ],

                },
            ]
        },
    ],
});
