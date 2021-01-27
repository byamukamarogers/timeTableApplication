
Ext.define('TimeTableApp.view.program.program', {
    extend: 'Ext.panel.Panel',
    xtype: 'programView',

    requires: [
        'TimeTableApp.view.program.programController',
        'TimeTableApp.view.program.programModel'
    ],

    controller: 'program-program',
    viewModel: {
        type: 'program-program'
    },
    listeners: { afterrender: 'onAfterRender' },
    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            margin: 3,
            items: [
                {
                    bodyPadding: 0,
                    width: '100%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [
                        {
                            xtype: 'grid',
                            title: 'All Programs',
                            reference: 'grdallPrograms',
                            cls: 'table',
                            scrollable: true,
                            columns: [
                                { text: 'Program Code', dataIndex: 'programcode', flex: 0.15 },
                                { text: 'Program Name', dataIndex: 'programname', flex: 0.3 },
                                { text: 'Duration', dataIndex: 'duration', flex: 0.2 },
                                { text: 'Department', dataIndex: 'departmentname', flex: 0.3 }
                            ],
                            listeners: {
                                select: 'onItemSelected'
                            },
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
                                        keyup: 'onGridSearch',
                                    }
                                },
                                {
                                    xtype: 'button',
                                    text: 'Refresh',
                                    iconCls: 'x-fa fa-refresh blue'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});
