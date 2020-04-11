Ext.define('TimeTableApp.view.institution.institution',{
    extend: 'Ext.panel.Panel',
    xtype:'institutionView',

    requires: [
        'TimeTableApp.view.institution.institutionController',
        'TimeTableApp.view.institution.institutionModel'
    ],

    controller: 'institution-institution',
    viewModel: {
        type: 'institution-institution'
    },
    listeners: {afterrender:'onAfterRender'},
    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            margin: '3 0 0 0',
            items: [     
                {
                    title: 'Add New University',
                    bodyPadding: 5,
                    width: '30%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    defaultType: 'textfield',
                    items: [{
                        fieldLabel: 'Institution Id',
                        name: 'institutionid',
                        bind: '{institutionId}',
                        allowBlank: false,
                    }, {
                        fieldLabel: 'Institution Name',
                        name: 'institutionname',
                        bind: '{InstitutionName}',
                        allowBlank: false
                    },
                    {
                        fieldLabel: 'Address',
                        name: 'address',
                        bind: '{address}',
                        allowBlank: false
                    }, 
                    {
                        fieldLabel: 'Phone Contact',
                        name: 'phonecontact',
                        bind: '{phoneContact}',
                        allowBlank: false
                    },
                    {
                        fieldLabel: 'Email',
                        name: 'email',
                        bind: '{email}',
                        allowBlank: false
                    }

                    ],
                    buttons: [{
                        text: 'Reset'
                    }, {
                        text: 'Submit',
                        handler: 'onInstitutionSubmitClicked'
                    }],
                },
                //Grid to display all Universities
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
                        title: 'All Institutions(Universities)',
                        reference: 'grdallUniversities',
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
                            { text: 'University id', dataIndex: 'institutionId',flex: 0},
                            { text: 'Name', dataIndex: 'InstitutionName', flex: 1 },
                            { text: 'Telephone', dataIndex: 'phoneContact',flex: 1 },
                            { text: 'Email', dataIndex: 'email',flex: 1 },
                            { text: 'Address', dataIndex: 'address',flex: 1 },
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
