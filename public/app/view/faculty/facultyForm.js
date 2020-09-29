
Ext.define('TimeTableApp.view.faculty.facultyForm',{
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
                    width: '50%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    defaultType: 'textfield',
                    items: [{
                        fieldLabel: 'Faculty Id',
                        bind: '{facultyId}',
                        allowBlank: false
                    }, {
                        fieldLabel: 'Faculty Name',
                        bind: '{facultyName}',
                        allowBlank: false
                    },
                    {
                        xtype: 'combobox',
                        reference: 'cboInstitutionName',
                        bind: '{institutionId}',
                        fieldLabel: 'Institution Name',
                        displayField: 'InstitutionName',
                        valueField: 'institutionId',
                        forceSelection: true,
                        queryMode: 'local'
                    }

                    ],
                    buttons: [{
                        text: 'Reset'
                    }, {
                        text: 'Submit',
                        handler: 'onFacultySubmitClicked'
                    }],
                },
                //Grid to display all Programs
                
            ],
        }
    ]
});
