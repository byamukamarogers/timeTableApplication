
Ext.define('TimeTableApp.view.department.departmentForm', {
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
                    xtype: 'form',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    defaultType: 'textfield',
                    items: [
                        {
                            fieldLabel: 'Department Id',
                            bind: '{departmentid}',
                            disabled: true
                        },
                        {
                            fieldLabel: 'Department Id',
                            bind: '{departmentid}',
                            hidden: true
                        },
                        {
                            fieldLabel: 'Department Name',
                            bind: '{departmentname}',
                            allowBlank: false
                        },
                        {
                            fieldLabel: 'Department Code',
                            bind: '{departmentcode}',
                            allowBlank: false
                        },
                        {
                            xtype: 'combobox',
                            reference: 'cboFacultyName',
                            bind: '{facultyid}',
                            fieldLabel: 'Faculty Name',
                            displayField: 'facultyname',
                            valueField: 'facultyid',
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
                            iconCls: 'x-fa fas fa-save',
                            handler: 'onDepartmentSubmitClicked'
                        }
                    ]
                }
            ]
        }
    ]
});
