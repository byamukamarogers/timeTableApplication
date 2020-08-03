
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
    items: [
        {
            xtype: 'container',
            scrollable: true,
            bodyPadding: 5,
            layout: 'anchor',
            margin: '3 3 0 0',
            items: [
                {
                    bodyPadding: 5,
                    width: '50%',
                    layout: 'hbox',
                    items: [
                        {
                            bodyPadding: 5,
                            width: '50%',
                            layout: 'anchor',
                            defaults: {
                                anchor: '100%'
                            },
                            defaultType: 'textfield',
                            items: [
                                {
                                    xtype: 'combobox',
                                    fieldLabel: 'Select A Class',
                                    displayField: 'name',
                                    bind: '{isProgram}',
                                    valueField: 'id',
                                    allowBlank: false,
                                    store: {
                                        data: [
                                            { id: 'true', name: 'Yes' },
                                            { id: 'false', name: 'No' },
                                        ]
                                    },
                                },
                                
                            ],
                        },
                        {
                            margin: '0 5 0 10',
                            bodyPadding: 0,
                            width: '50%',
                            layout: 'anchor',
                            defaults: {
                                anchor: '100%',
                                xtype: 'textfield',
                            },
                            items: [
                                {
                                    fieldLabel: 'Choose Semester',
                                    xtype: 'combobox',
                                    displayField: 'name',
                                    bind: '{semester}',
                                    valueField: 'id',
                                    allowBlank: false,
                                    store: {
                                        data: [
                                            { id: '1', name: 'ONE' },
                                            { id: '2', name: 'TWO' },
                                        ]
                                    }
                                },
                                
                            ],

                        },
                    ],
                    buttons: [{
                        text: 'Reset',
                    }, {
                        text: 'Submit',
                        handler: 'onClassPicked',
                    }],
                },
            ]
        },
    ],
});
