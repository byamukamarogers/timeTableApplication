
Ext.define('TimeTableApp.view.program.programForm', {
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
    listeners: { afterrender: 'onAfterRender' },
    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            margin: 3,
            items: [
                {
                    title: 'Add New Program',
                    xtype: 'form',
                    bodyPadding: 5,
                    width: '50%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    defaultType: 'textfield',
                    items: [
                        {
                            fieldLabel: 'Program Id',
                            bind: '{programid}',
                            hidden: true
                        },
                        {
                            fieldLabel: 'Program Id',
                            bind: '{programid}',
                            disabled: true
                        },
                        {
                            fieldLabel: 'Program Name',
                            bind: '{programname}',
                            allowBlank: false
                        }, 
                        {
                            fieldLabel: 'Program Code',
                            bind: '{programcode}',
                            allowBlank: false
                        },
                        {
                            fieldLabel: 'Duration',
                            xtype: 'numberfield',
                            bind: '{duration}',
                            allowBlank: false
                        },
                        {
                            xtype: 'combobox',
                            reference: 'cboDepartmentName',
                            bind: '{departmentid}',
                            fieldLabel: 'Department Name',
                            displayField: 'departmentname',
                            valueField: 'departmentid',
                            forceSelection: true,
                            queryMode: 'local',
                            allowBlank: false
                        }

                    ],
                    buttons: [
                        {
                            text: 'Reset'
                        },
                        {
                            text: 'Submit',
                            formBind: true,
                            handler: 'onProgramSubmitClicked'
                        }
                    ]
                }
            ]
        }
    ]
});
