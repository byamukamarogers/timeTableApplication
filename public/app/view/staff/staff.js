Ext.define('TimeTableApp.view.staff.staff', {
    extend: 'Ext.panel.Panel',
    xtype: 'staffView',

    requires: [
        'TimeTableApp.view.staff.staffController',
        'TimeTableApp.view.staff.staffModel'
    ],

    controller: 'staff-staff',
    viewModel: {
        type: 'staff-staff'
    },
    listeners: { afterrender: 'onAfterRender' },
    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            margin: 3,
            items: [
                //Grid to display all Lecturers
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
                        title: 'All Lecturers',
                        reference: 'grdallStaff',
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
                            { text: 'Staff Id', dataIndex: 'staffId' },
                            { text: 'Name', dataIndex: 'name', flex: 1 },
                            { text: 'Gender', dataIndex: 'gender' },
                            { text: 'Address', dataIndex: 'address' },
                            { text: 'Email', dataIndex: 'email' },
                            { text: 'Mobile', dataIndex: 'mobilePhone' },
                            { text: 'Telephone', dataIndex: 'telePhone' },
                            { text: 'Department', dataIndex: 'departmentName', flex: 1 },
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

                }
            ],
        }
    ]
});
