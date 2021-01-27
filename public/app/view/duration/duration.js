
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
    listeners: { afterrender: 'onAfterRender' },
    items: [
        {
            bodyPadding: 0,
            width: '100%',
            layout: 'hbox',
            margin: 3,
            items: [
                {
                    xtype: 'grid',
                    width: '60%',
                    title: 'All Sessions',
                    reference: 'grdallSessions',
                    columns: [
                        { text: 'Session Id', dataIndex: 'ssessionid', flex: 1 },
                        { text: 'Session Name', dataIndex: 'ssessionName', flex: 1 }
                    ],
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
                            handler: 'onGridRefresh',
                            iconCls: 'x-fa fa-refresh blue'
                        }
                    ]
                },
                {
                    xtype: 'durationForm',
                    margin: '0 0 0 3',
                    width: '40%',
                    anchor: '100%'
                }
            ]
        }
    ]
});
