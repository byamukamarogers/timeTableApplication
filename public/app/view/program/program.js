
Ext.define('TimeTableApp.view.program.program',{
    extend: 'Ext.panel.Panel',
    xtype:'programView',

    requires: [
        'TimeTableApp.view.program.programController',
        'TimeTableApp.view.program.programModel'
    ],

    controller: 'program-program',
    viewModel: {
        type: 'program-program'
    },
    listeners:{afterrender:'onAfterRender'},
    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            margin: 3,
            items: [ 
                 //Grid to display all Programs
                {
                    bodyPadding: 0,
                    width: '100%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [{
                        extend: 'Ext.grid.Grid',
                        xtype: 'grid',
                        title: 'All Programs',
                        reference: 'grdallPrograms',
                        cls:'table',
                        scrollable:true,
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
                            { text: 'Program Code', dataIndex: 'programCode', flex: 1},
                            { text: 'Program Name', dataIndex: 'programName', flex: 1 },
                            { text: 'Duration', dataIndex: 'duration' },
                            { text: 'Department', dataIndex: 'departmentName',flex: 1 },
                            {
                                width: 70,
                                sortable: false,
                                menuDisabled: true,
                                xtype: 'actioncolumn',
                                items: ['@delete', '@edit']
                            }
                        ],

                        listeners: {
                            select: 'onItemSelected'
                        },
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
                                    keyup: 'onGridSearch', 
                                }
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
});
