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
    listeners: { afterrender: 'onAfterDepartmentLoad' },
    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            margin: '3 0 0 0',
            items: [
                {
                    title: 'Add New Department',
                    bodyPadding: 5,
                    width: '30%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    defaultType: 'textfield',
                    items: [{
                        fieldLabel: 'Department Id',
                        bind: '{departmentId}',
                        allowBlank: false
                    }, {
                        fieldLabel: 'Department Name',
                        bind: '{departmentName}',
                        allowBlank: false
                    },
                    {
                        fieldLabel: 'Department Code',
                        bind: '{departmentCode}',
                        allowBlank: false
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
                    buttons: [{
                        text: 'Reset'
                    }, {
                        text: 'Submit',
                        handler: 'onDepartmentSubmitClicked'
                    }],
                },
                //Grid to display all Programs
                {
                    margin: '0 0 0 10',
                    bodyPadding: 0,
                    width: '70%',
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
                        items:[{
                            docked:'top',
                            xtype:'toolbar',
                            items:[{
                                text: 'Search Box',
                            }]
                        }],
                        columns: [
                            { text: 'Department id', dataIndex: 'departmentId',  },
                            { text: 'Department Code', dataIndex: 'departmentCode', },
                            { text: 'Department Name', dataIndex: 'departmentName', flex: 1 },
                            { text: 'Faculty', dataIndex: 'facultyName', flex: 1},
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
