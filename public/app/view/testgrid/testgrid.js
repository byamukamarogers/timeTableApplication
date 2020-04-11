
Ext.define('TimeTableApp.view.testgrid.testgrid', {
    extend: 'Ext.panel.Panel',
    xtype: 'testGrid',

    requires: [
        'TimeTableApp.view.testgrid.testgridController',
        'TimeTableApp.view.testgrid.testgridModel',
        'TimeTableApp.store.newGrid',
    ],

    controller: 'testgrid-testgrid',
    viewModel: {
        type: 'testgrid-testgrid'
    },
    listeners: { afterender: 'onafterTestLoad' },
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
        name: 'Customer',
        title: 'Customer list',
        id: 'customerGridId',
        height: 300,
        width: 600,
        frame: true,
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
            { text: 'ID', dataIndex: 'id', flex: 1 },
            { text: 'Name', dataIndex: 'name', flex: 1 },
            { text: 'Phone', dataIndex: 'phone', flex: 1 },
            { text: 'Address', dataIndex: 'address', flex: 1 },
            {
                width: 70,
                sortable: false,
                menuDisabled: true,
                xtype: 'actioncolumn',
                items: ['@delete', '@edit']
            }
        ],
        store: {
            data: [
                { id: 1, name: 'Makara', phone: '1111111', address: 'Phnom Penh' },
                { id: 2, name: 'Dara', phone: '222222', address: 'Kandal' },
                { id: 3, name: 'Bora', phone: '33333', address: 'Prey Veng' },
                { id: 4, name: 'Jonh', phone: '4444', address: 'Svay Reang' },
                { id: 5, name: 'Hong', phone: '555', address: 'Kompong Cham' },
                { id: 6, name: 'Leakena', phone: '222226662', address: 'Takeo' }
            ],
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
    ]
});
