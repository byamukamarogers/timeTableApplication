
Ext.define('TimeTableApp.view.faculty.facultyForm', {
    extend: 'Ext.panel.Panel',
    xtype: 'facultyForm',

    requires: [
        'TimeTableApp.view.faculty.facultyFormController',
        'TimeTableApp.view.faculty.facultyFormModel'
    ],

    controller: 'faculty-facultyform',
    viewModel: {
        type: 'faculty-facultyform'
    },
    listeners: { afterrender: 'onAfterRender' },
    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            margin: 3,
            items: [
                {
                    title: 'Add New Faculty',
                    bodyPadding: 5,
                    xtype: 'form',
                    width: '50%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    defaultType: 'textfield',
                    items: [
                        {
                            fieldLabel: 'Faculty Id',
                            bind: '{facultyid}',
                            hidden: true
                        },
                        {
                            fieldLabel: 'Faculty Id',
                            bind: '{facultyid}',
                            disabled: true
                        },
                        {
                            fieldLabel: 'Faculty Name',
                            bind: '{facultyname}',
                            allowBlank: false
                        },
                        {
                            xtype: 'combobox',
                            reference: 'cboInstitutionName',
                            bind: '{institutionid}',
                            fieldLabel: 'Institution Name',
                            displayField: 'institutionname',
                            valueField: 'institutionid',
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
                            handler: 'onFacultySubmitClicked'
                        }
                    ]
                }
            ]
        }
    ]
});
