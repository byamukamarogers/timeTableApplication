Ext.define('TimeTableApp.view.modules.modules', {
    extend: 'Ext.panel.Panel',
    xtype: 'allModules',

    requires: [
        'TimeTableApp.view.modules.modulesController',
        'TimeTableApp.view.modules.modulesModel'
    ],

    controller: 'modules-modules',
    viewModel: {
        type: 'modules-modules'
    },
    items: [
        {
            extend: 'Ext.tab.Panel',
            width: '100%',
            height: '100%',
            xtype: 'tabpanel',
            activeTab: 0,
            //tabPosition: 'left',
            layout: 'hbox',
            rotation: 'right',
            items: [
                {
                    title: 'Room',
                    xtype:'roomView',
                },
                {
                    title: 'Duration',
                    xtype:'durationView',
                }, {
                    title: 'Course',
                    xtype:'courseView',
                },
                {
                    title: 'Program',
                    xtype:'programView',
                },
                {
                    title: 'Student',
                    items: [
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            items: [
                                //Customer registration form        
                                {
                                    title: 'Customer Registration Form',
                                    bodyPadding: 5,
                                    width: 350,
                                    layout: 'anchor',
                                    defaults: {
                                        anchor: '100%'
                                    },
                                    defaultType: 'textfield',
                                    items: [{
                                        fieldLabel: 'Customer ID',
                                        name: 'custID',
                                        bind: '{custID}',
                                        allowBlank: false
                                    }, {
                                        fieldLabel: 'Names',
                                        name: 'names',
                                        bind: '{Names}',
                                        allowBlank: false
                                    }, {
                                        xtype: 'textfield',
                                        fieldLabel: 'Email',
                                        bind: '{Email}',
                                        allowBlank: false
                                    }, {
                                        xtype: 'textfield',
                                        fieldLabel: 'Phone Number',
                                        bind: '{Phone}'

                                    }, {
                                        xtype: 'combobox',
                                        bind: '{Gender}',
                                        fieldLabel: 'Gender',
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

                                    }, {
                                        xtype: 'datefield',
                                        fieldLabel: 'Date Of Birth',
                                        name: 'dateOfBirth',
                                        bind: '{dateOfBirth}',
                                        allowBlank: false
                                    }, {
                                        xtype: 'textfield',
                                        fieldLabel: 'Address',
                                        bind: '{Address}'
                                    },
                                    ],
                                    buttons: [{
                                        text: 'Reset'
                                    }, {
                                        text: 'Submit',
                                        handler: 'onSubmitClicked'
                                    }],
                                },
                                //Grid to display all customers
                                {
                                    margin: '0 5 0 15',
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
                        },

                    ],
                },
                {
                    title: 'Staff',
                    xtype: 'staffView',
                },
                {
                    title: 'Department',
                    xtype:'departmentView',
                },
                {
                    title: 'Faculty',
                    xtype:'facultyView',
                },{
                    title: 'Institution',
                    xtype:'institutionView',
                }

            ]
        }
    ]
});
