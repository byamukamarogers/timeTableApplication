Ext.define('TimeTableApp.view.department.department', {
    extend: 'Ext.panel.Panel',
    xtype: 'departmentView',

    requires: [
        'TimeTableApp.view.department.departmentController',
        'TimeTableApp.view.department.departmentModel'
    ],

    controller: 'department-department',
    viewModel: {
        type: 'department-department'
    },
    listeners: { afterrender: 'onAfterRender' },
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
                        extend: 'Ext.grid.Panel',
                        xtype: 'grid',
                        title: 'All Departments',
                        reference: 'grdallDepartments',
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
                        columns: [
                            { text: 'Department id', dataIndex: 'departmentid', flex: 0.15 },
                            { text: 'Department Code', dataIndex: 'departmentcode', flex: 0.15 },
                            { text: 'Department Name', dataIndex: 'departmentname', flex: 0.3 },
                            { text: 'Faculty', dataIndex: 'facultyname', flex: 0.3 }
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
