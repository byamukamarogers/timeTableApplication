
Ext.define('TimeTableApp.view.faculty.faculty',{
    extend: 'Ext.panel.Panel',
    xtype:'facultyView',

    requires: [
        'TimeTableApp.view.faculty.facultyController',
        'TimeTableApp.view.faculty.facultyModel'
    ],

    controller: 'faculty-faculty',
    listeners:{afterrender:'onAfterFacultyLoad'},
    viewModel: {
        type: 'faculty-faculty'
    },    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            margin: '3 0 0 0',
            items: [     
                {
                    title: 'Add New Faculty',
                    bodyPadding: 5,
                    width: '30%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    defaultType: 'textfield',
                    items: [{
                        fieldLabel: 'Faculty Id',
                        bind: '{facultyId}',
                        allowBlank: false
                    }, {
                        fieldLabel: 'Faculty Name',
                        bind: '{facultyName}',
                        allowBlank: false
                    }, 
                    {
                        xtype: 'combobox',
                        reference: 'cboInstitutionName',
                        bind: '{institutionId}',
                        fieldLabel: 'Institution Name',
                        displayField: 'InstitutionName',
                        valueField: 'institutionId',
                        forceSelection: true,
                        queryMode: 'local'
                    }

                    ],
                    buttons: [{
                        text: 'Reset'
                    }, {
                        text: 'Submit',
                        handler: 'onFacultySubmitClicked'
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
                        title: 'Faculty List',
                        reference: 'grdallFaculties',
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
                            { text: 'Faculty id', dataIndex: 'facultyId'},
                            { text: 'Faculty Name', dataIndex: 'facultyName', flex: 1 },
                            { text: 'Institution', dataIndex: 'InstitutionName',flex: 1},
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
