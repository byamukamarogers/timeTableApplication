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
                            title: 'All Lecturers',
                            reference: 'grdallStaff',
                            columns: [
                                { text: 'Staff Id', dataIndex: 'staffid', flex: 0.1 },
                                { text: 'Name', dataIndex: 'name', flex: 0.25 },
                                { text: 'Initial', dataIndex: 'initial', flex:0.1 },
                                { text: 'Email', dataIndex: 'email', flex:0.25 },
                                { text: 'Mobile', dataIndex: 'phone1', flex:0.15 },
                                { text: 'Department', dataIndex: 'departmentname', flex: 0.2 }
                            ],
                            bbar: {
                                xtype: 'pagingtoolbar',
                                displayInfo: true,
                                displayMsg: 'Display records {0} - {1} of {2}',
                                emptyMsg: 'No Record to display'
                            },
                            plugins: [
                                {
                                    ptype: 'rowexpander',
                                    rowBodyTpl: [
                                        '<b>Gender :</b> {gender} ',
                                        '<b>Telephone :</b> {phone2}',
                                        '<b>Address :</b> {address}',
                                        '<b>Department :</b> {departmentname}'
                                    ]
                                }
                            ],
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
