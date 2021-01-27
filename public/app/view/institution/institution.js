Ext.define('TimeTableApp.view.institution.institution', {
    extend: 'Ext.panel.Panel',
    xtype: 'institutionView',

    requires: [
        'TimeTableApp.view.institution.institutionController',
        'TimeTableApp.view.institution.institutionModel'
    ],

    controller: 'institution-institution',
    viewModel: {
        type: 'institution-institution'
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
                    items: [{
                        xtype: 'grid',
                        title: 'All Institutions(Universities)',
                        reference: 'grdallUniversities',
                        columns: [
                            { text: 'INST ID', dataIndex: 'institutionid', flex: 0.1 },
                            { text: 'Name', dataIndex: 'institutionname', flex: 0.25 },
                            { text: 'Telephone', dataIndex: 'phonecontact', flex: 0.15 },
                            { text: 'Email', dataIndex: 'email', flex: 0.2 },
                            { text: 'Address', dataIndex: 'address', flex: 0.3 }
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
