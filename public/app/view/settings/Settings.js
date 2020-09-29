
Ext.define('TimeTableApp.view.settings.Settings', {
    extend: 'Ext.panel.Panel',
    xtype: 'settings',

    requires: [
        'TimeTableApp.view.settings.SettingsController',
        'TimeTableApp.view.settings.SettingsModel'
    ],

    controller: 'settings-settings',
    viewModel: {
        type: 'settings-settings'
    },
    listeners: { afterrender: 'onAfterSettingsLoad' },
    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            margin: '3 0 0 0',
            items: [
                //Grid to display Course units
                {
                    bodyPadding: '0 5 0 0',
                    width: '100%',
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
                                    title: 'SESSIONS',
                                    margin: '5 0 0 0',
                                    items: [
                                        {
                                            xtype: 'container',
                                            layout: 'hbox',
                                            items: [
                                                {
                                                    title: 'Add New Session',
                                                    bodyPadding: 5,
                                                    width: '30%',
                                                    layout: 'anchor',
                                                    defaults: {
                                                        anchor: '100%'
                                                    },
                                                    defaultType: 'textfield',
                                                    items: [{
                                                        fieldLabel: 'Session Id',
                                                        bind: '{ssessionId}',
                                                        allowBlank: false
                                                    },
                                                    {
                                                        xtype: 'combobox',
                                                        fieldLabel: 'From',
                                                        bind: '{from}',
                                                        displayField: 'name',
                                                        valuefield: 'id',
                                                        forceSelection: true,
                                                        store: {
                                                            data: [
                                                                { id: '06:00 AM', name: '06:00 AM' },
                                                                { id: '07:00 AM', name: '07:00 AM' },
                                                                { id: '08:00 AM', name: '08:00 AM' },
                                                                { id: '09:00 AM', name: '09:00 AM' },
                                                                { id: '10:00 AM', name: '10:00 AM' },
                                                                { id: '11:00 AM', name: '11:00 AM' },
                                                                { id: '12:00 PM', name: '12:00 PM' },
                                                                { id: '01:00 PM', name: '01:00 PM' },
                                                                { id: '02:00 PM', name: '02:00 PM' },
                                                                { id: '03:00 PM', name: '03:00 PM' },
                                                                { id: '04:00 PM', name: '04:00 PM' },
                                                                { id: '06:00 PM', name: '06:00 PM' },
                                                                { id: '07:00 PM', name: '07:00 PM' },
                                                                { id: '08:00 PM', name: '08:00 PM' },
                                                                { id: '09:00 PM', name: '09:00 PM' },
                                                                { id: '10:00 PM', name: '10:00 PM' },
                                                            ]
                                                        },
                                                        allowBlank: false

                                                    },
                                                    {
                                                        xtype: 'combobox',
                                                        fieldLabel: 'To',
                                                        bind: '{to}',
                                                        displayField: 'name',
                                                        valuefield: 'id',
                                                        forceSelection: true,
                                                        store: {
                                                            data: [
                                                                { id: '06:00 AM', name: '06:00 AM' },
                                                                { id: '07:00 AM', name: '07:00 AM' },
                                                                { id: '08:00 AM', name: '08:00 AM' },
                                                                { id: '09:00 AM', name: '09:00 AM' },
                                                                { id: '10:00 AM', name: '10:00 AM' },
                                                                { id: '11:00 AM', name: '11:00 AM' },
                                                                { id: '12:00 PM', name: '12:00 PM' },
                                                                { id: '01:00 PM', name: '01:00 PM' },
                                                                { id: '02:00 PM', name: '02:00 PM' },
                                                                { id: '03:00 PM', name: '03:00 PM' },
                                                                { id: '04:00 PM', name: '04:00 PM' },
                                                                { id: '06:00 PM', name: '06:00 PM' },
                                                                { id: '07:00 PM', name: '07:00 PM' },
                                                                { id: '08:00 PM', name: '08:00 PM' },
                                                                { id: '09:00 PM', name: '09:00 PM' },
                                                                { id: '10:00 PM', name: '10:00 PM' },
                                                            ]
                                                        },
                                                        allowBlank: false

                                                    },

                                                    ],
                                                    buttons: [{
                                                        text: 'Reset'
                                                    }, {
                                                        text: 'Save Ssession',
                                                        handler: 'onSsessionSave'
                                                    }],
                                                },
                                                //Grid to display all Lecturers
                                                {
                                                    margin: '0 0 0 5',
                                                    bodyPadding: 0,
                                                    width: '70%',
                                                    layout: 'anchor',
                                                    defaults: {
                                                        anchor: '100%'
                                                    },
                                                    items: [
                                                        {
                                                            xtype: 'grid',
                                                            title: 'All SESSIONS',
                                                            reference: 'grdallSsessions',
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
                                                                { text: 'Session ID', dataIndex: 'ssessionId' },
                                                                { text: 'From', dataIndex: 'from' },
                                                                { text: 'To', dataIndex: 'to' },
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
                                                                    width: 200
                                                                },
                                                                {
                                                                    xtype: 'button',
                                                                    text: 'Search',
                                                                    iconCls: 'x-fa fa-search blue'
                                                                },
                                                                {
                                                                    xtype: 'button',
                                                                    text: 'Refresh',
                                                                    iconCls: 'x-fa fa-refresh blue'
                                                                }
                                                            ],
                                                        }
                                                    ],

                                                }
                                            ],
                                        }
                                    ]
                                },
                                {
                                    title: 'WEEK DAYS',
                                    margin: '5 0 0 0',
                                    items: [
                                        {
                                            xtype: 'container',
                                            layout: 'hbox',
                                            items: [
                                                {
                                                    title: 'Add New Week Day',
                                                    bodyPadding: 5,
                                                    width: '30%',
                                                    layout: 'anchor',
                                                    defaults: {
                                                        anchor: '100%'
                                                    },
                                                    defaultType: 'textfield',
                                                    items: [{
                                                        fieldLabel: 'Day Id',
                                                        bind: '{dayId}',
                                                        allowBlank: false
                                                    },
                                                    {
                                                        xtype: 'textfield',
                                                        fieldLabel: 'Day',
                                                        bind: '{weekDay}',
                                                        allowBlank: false

                                                    },

                                                    ],
                                                    buttons: [{
                                                        text: 'Reset'
                                                    }, {
                                                        text: 'Save Ssession',
                                                        handler: 'onWeekDaySave'
                                                    }],
                                                },
                                                //Grid to display all Lecturers
                                                {
                                                    margin: '0 0 0 5',
                                                    bodyPadding: 0,
                                                    width: '70%',
                                                    layout: 'anchor',
                                                    defaults: {
                                                        anchor: '100%'
                                                    },
                                                    items: [
                                                        {
                                                            xtype: 'grid',
                                                            title: 'Week Days',
                                                            reference: 'grdAllDays',
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
                                                                { text: 'Day ID', dataIndex: 'dayId' },
                                                                { text: 'Day', dataIndex: 'weekDay' },
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
                                                                    width: 200
                                                                },
                                                                {
                                                                    xtype: 'button',
                                                                    text: 'Search',
                                                                    iconCls: 'x-fa fa-search blue'
                                                                },
                                                                {
                                                                    xtype: 'button',
                                                                    text: 'Refresh',
                                                                    iconCls: 'x-fa fa-refresh blue'
                                                                }
                                                            ],
                                                        }
                                                    ],

                                                }
                                            ],
                                        }
                                    ]
                                },
                            ]
                        }
                    ],

                },
            ],
        },
    ]
});
