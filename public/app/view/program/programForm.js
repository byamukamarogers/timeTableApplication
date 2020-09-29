
Ext.define('TimeTableApp.view.program.programForm',{
    extend: 'Ext.panel.Panel',
    xtype: 'programForm',

    requires: [
        'TimeTableApp.view.program.programFormController',
        'TimeTableApp.view.program.programFormModel'
    ],

    controller: 'program-programform',
    viewModel: {
        type: 'program-programform'
    },
    listeners:{afterrender:'onAfterRender'},
    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            margin: 3,
            items: [     
                {
                    title: 'Add New Program',
                    bodyPadding: 5,
                    width: '50%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    defaultType: 'textfield',
                    items: [{
                        fieldLabel: 'Program Id',
                        bind: '{programId}',
                        allowBlank: false
                    }, {
                        fieldLabel: 'Program Name',
                        bind: '{programName}',
                        allowBlank: false
                    }, {
                        fieldLabel: 'Program Code',
                        bind: '{programCode}',
                        allowBlank: false
                    }, 
                    {
                        fieldLabel: 'Duration',
                        xtype:'numberfield',
                        bind: '{duration}',
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
                        handler: 'onProgramSubmitClicked'
                    }],
                },
                
            ],
        }
    ]
});
