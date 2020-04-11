
Ext.define('TimeTableApp.view.test.test', {
    extend: 'Ext.panel.Panel',
    xtype: 'testView',

    requires: [
        'TimeTableApp.view.test.testController',
        'TimeTableApp.view.test.testModel'
    ],

    controller: 'test-test',
    viewModel: {
        type: 'test-test'
    },
    items: [{
        title: 'Administrative view',
        height: '100%',
        width: '100%',
        border: 2,
        closable: true,
        cls: 'card',
        //layout: 'fit',
        layout: 'hbox',
        items: [
            //Customer registration form        
            {
                title: 'Operations',
                bodyPadding: 5,
                margin: 5,
                width: '35%',
                layout: 'anchor',
                defaults: {
                    anchor: '100%'
                },


                items: [ {
                    extend: 'Ext.tab.Panel',
                    width: 400,
                    height: 400,
                    xtype: 'panel',
                    items: [{
                        title: 'Home',
                        html: 'Home',
                        itemId: 'home'
                    }, {
                        title: 'Users',
                        html: 'Users',
                        itemId: 'users',
                        hidden: true
                    }, {
                        title: 'Tickets',
                        html: 'Tickets',
                        itemId: 'tickets'
                    }]

                }
                ]
            },
            //Grid to display all customers
            {
                margin: '5 5 0 15',
                bodyPadding: '0 5 0 0',
                width: '65%',
                layout: 'anchor',
                defaults: {
                    anchor: '100%'
                },
                defaultType: 'textfield',
                items: [{
                    extend: 'Ext.grid.Panel',
                    xtype: 'grid',
                    title: 'All Customers',
                    reference: 'grdallCustomers',
                    columns: [
                        { text: 'Name', dataIndex: 'Names', flex: 1 },
                        { text: 'Email', dataIndex: 'Email', flex: 1 },
                        { text: 'Phone', dataIndex: 'Phone' },
                        { text: 'Gender', dataIndex: 'Gender' },
                        { text: 'D . O . B', dataIndex: 'dateOfBirth' },
                        { text: 'Address', dataIndex: 'Address', flex: 1 }
                    ],

                    /* store: {
                        data: [
                            { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
                            { name: 'Worf', email: "worf.moghsson@enterprise.com", phone: "555-222-2222" },
                            { name: 'Deanna', email: "deanna.troi@enterprise.com", phone: "555-333-3333" },
                            { name: 'Data', email: "mr.data@enterprise.com", phone: "555-444-4444" }
                        ]
                    } */
                }
                ],

            },


        ]

    }]
});
