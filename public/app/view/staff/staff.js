Ext.define('TimeTableApp.view.staff.staff',{
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
    listeners:{afterrender:'onStaffLoad'},
    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            margin: '3 0 0 0',
            items: [     
                {
                    title: 'Add New Staff Member',
                    bodyPadding: 5,
                    width: '30%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    defaultType: 'textfield',
                    items: [{
                        fieldLabel: 'Staff Id',
                        bind: '{staffId}',
                        allowBlank: false
                    }, 
                    {
                        fieldLabel: 'Name',
                        bind: '{name}',
                        allowBlank: false
                    }, 
                    {
                        fieldLabel: 'Initials',
                        bind: '{initial}',
                        allowBlank: false
                    }, 
                    {
                        xtype: 'combobox',
                        fieldLabel: 'Gender',
                        bind:'{gender}',
                        displayField: 'name',
                        valuefield: 'id',
                        forceSelection: true,
                        store: {
                            data: [
                                { id: 'M', name: 'Male' },
                                { id: 'F', name: 'Female' }
                            ]
                        },
                        allowBlank: false

                    },
                    {
                        fieldLabel: 'Address',
                        bind: '{address}',
                        allowBlank: false
                    },
                    {
                        fieldLabel: 'Email',
                        bind: '{email}',
                        allowBlank: false
                    },
                    {
                        fieldLabel: 'Mobile',
                        bind: '{phone1}',
                        allowBlank: false
                    },
                    {
                        fieldLabel: 'Telephone',
                        bind: '{phone2}',
                        allowBlank: false
                    },
                    {
                        xtype: 'combobox',
                        reference: 'cboDepartmentName',
                        bind: '{departmentId}',
                        fieldLabel: 'Department Name',
                        displayField: 'departmentName',
                        valueField: 'departmentId',
                        forceSelection: true,
                        queryMode: 'local'
                    }

                    ],
                    buttons: [{
                        text: 'Reset'
                    }, {
                        text: 'Submit',
                        handler: 'onStaffSubmitClicked'
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
                        items:[{
                            docked:'top',
                            xtype:'toolbar',
                            items:[{
                                text: 'Search Box',
                            }]
                        }],
                        columns: [
                            { text: 'Staff Id', dataIndex: 'staffId'},
                            { text: 'Name', dataIndex: 'name', flex: 1 },
                            { text: 'Gender', dataIndex: 'gender' },
                            { text: 'Address', dataIndex: 'address' },
                            { text: 'Email', dataIndex: 'email' },
                            { text: 'Mobile', dataIndex: 'mobilePhone' },
                            { text: 'Telephone', dataIndex: 'telePhone' },
                            { text: 'Department', dataIndex: 'departmentName',flex: 1 },
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
