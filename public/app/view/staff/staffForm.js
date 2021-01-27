
Ext.define('TimeTableApp.view.staff.staffForm', {
    extend: 'Ext.panel.Panel',
    xtype: 'staffForm',

    requires: [
        'TimeTableApp.view.staff.staffFormController',
        'TimeTableApp.view.staff.staffFormModel'
    ],

    controller: 'staff-staffform',
    viewModel: {
        type: 'staff-staffform'
    },
    listeners: { afterrender: 'onAfterRender' },
    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            margin: 3,
            items: [
                {
                    title: 'Add New Staff Member',
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
                            fieldLabel: 'Staff Id',
                            bind: '{staffId}',
                            allowBlank: true,
                            readOnly: true
                        },
                        {
                            fieldLabel: 'Name',
                            bind: '{name}',
                            allowBlank: false
                        },
                        {
                            fieldLabel: 'Initials',
                            bind: '{initial}',
                            allowBlank: false
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'Gender',
                            bind: '{gender}',
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

                        },
                        {
                            fieldLabel: 'Address',
                            bind: '{address}',
                            allowBlank: false
                        },
                        {
                            fieldLabel: 'Email',
                            bind: '{email}',
                            allowBlank: false
                        },
                        {
                            fieldLabel: 'Mobile',
                            bind: '{phone1}',
                            allowBlank: false
                        },
                        {
                            fieldLabel: 'Telephone',
                            bind: '{phone2}',
                            defaultValue: 1,
                            value: 1,
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
                            handler: 'onStaffSubmitClicked'
                        }],
                }
            ]
        }
    ]
});
