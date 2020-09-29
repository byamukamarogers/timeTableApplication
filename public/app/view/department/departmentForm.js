
Ext.define('TimeTableApp.view.department.departmentForm',{
    extend: 'Ext.panel.Panel',
    xtype: 'departmentForm',

    requires: [
        'TimeTableApp.view.department.departmentFormController',
        'TimeTableApp.view.department.departmentFormModel'
    ],

    controller: 'department-departmentform',
    viewModel: {
        type: 'department-departmentform'
    },
    listeners: { afterrender: 'onAfterRender' },
    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            margin: 3,
            items: [
                {
                    title: 'Add New Department',
                    bodyPadding: 2,
                    width: '50%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    defaultType: 'textfield',
                    items: [{
                        fieldLabel: 'Department Id',
                        bind: '{departmentId}',
                        allowBlank: false,
                        readOnly: true
                    }, {
                        fieldLabel: 'Department Name',
                        bind: '{departmentName}',
                        allowBlank: false
                    },
                    {
                        fieldLabel: 'Department Code',
                        bind: '{departmentCode}',
                        allowBlank: false
                    },
                    {
                        xtype: 'combobox',
                        reference: 'cboFacultyName',
                        bind: '{facultyId}',
                        fieldLabel: 'Faculty Name',
                        displayField: 'facultyName',
                        valueField: 'facultyId',
                        forceSelection: true,
                        queryMode: 'local'
                    }

                    ],
                    buttons: [{
                        text: 'Reset'
                    }, {
                        text: 'Submit',
                        iconCls: 'x-fa fas fa-save',
                        handler: 'onDepartmentSubmitClicked'
                    }],
                },
                
            ],
        }
    ]
});
