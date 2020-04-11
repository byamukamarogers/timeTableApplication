
Ext.define('TimeTableApp.view.duration.duration', {
    extend: 'Ext.panel.Panel',
    xtype: 'durationView',

    requires: [
        'TimeTableApp.view.duration.durationController',
        'TimeTableApp.view.duration.durationModel'
    ],

    controller: 'duration-duration',
    viewModel: {
        type: 'duration-duration'
    },
    listeners: { afterrender: 'onAfterDurationLoad' },
    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            margin: '3 0 0 0',
            items: [
                //Duration form        
                {
                    title: 'Create New Duration',
                    bodyPadding: 5,
                    width: '35%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    defaultType: 'textfield',
                    items: [{
                        fieldLabel: 'Duration ID',
                        bind: '{durationId}',
                        allowBlank: false
                    }, {
                        fieldLabel: 'Length',
                        xtype: 'numberfield',
                        bind: '{durationLength}',
                        allowBlank: false
                    }, {
                        fieldLabel: 'Start Time',
                        xtype: 'timefield',
                        bind: '{startTime}',
                        allowBlank: false,
                        minValue: '6:00 AM',
                        maxValue: '10:00 PM',
                        increment: 30,
                        anchor: '100%'
                    },
                    {
                        xtype: 'combobox',
                        fieldLabel: 'End Time',
                        bind: '{endTime}',
                        displayField: 'name',
                        valueField: 'id',
                        forceSelection: true,
                        store: {
                            data: [
                                { id: '07:00', name: '07:00 AM' },
                                { id: '08:00', name: '08:00 AM' },
                                { id: '09:00', name: '09:00 AM' },
                                { id: '10:00', name: '10:00 AM' },
                                { id: '11:00', name: '11:00 AM' },
                                { id: '12:00', name: '12:00 AM' },
                                { id: '13:00', name: '01:00 PM' },
                                { id: '14:00', name: '02:00 PM' },
                                { id: '15:00', name: '03:00 PM' },
                                { id: '16:00', name: '04:00 PM' },
                                { id: '17:00', name: '05:00 PM' },
                                { id: '18:00', name: '06:00 PM' },
                                { id: '19:00', name: '07:00 PM' },
                                { id: '20:00', name: '08:00 PM' },
                                { id: '21:00', name: '09:00 PM' },
                                { id: '22:00', name: '10:00 PM' },
                            ]
                        },
                        allowBlank: false

                    },
                    ],
                    buttons: [{
                        text: 'Reset'
                    }, {
                        text: 'Submit',
                        handler: 'onDurationSubmitClicked'
                    }],
                },
                //Grid to display all durations
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
                        extend: 'Ext.grid.Panel',
                        xtype: 'grid',
                        title: 'All Durations',
                        reference: 'grdallDurations',
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
                        items:[{
                            docked:'top',
                            xtype:'toolbar',
                            items:[{
                                text: 'Search Box',
                            }]
                        }],
                        columns: [
                            { text: 'Length (Hours)', dataIndex: 'durationLength', flex: 1 },
                            { text: 'Start Time', dataIndex: 'startTime', flex: 1 },
                            { text: 'End Time', dataIndex: 'endTime' },
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

                },
            ]
        },

    ],
});
