Ext.define('TimeTableApp.view.class.newClassForm', {
    extend: 'Ext.panel.Panel',
    xtype: 'newClassForm',

    requires: [
        'TimeTableApp.view.class.newClassFormController',
        'TimeTableApp.view.class.newClassFormModel'
    ],

    controller: 'class-newclassform',
    viewModel: {
        type: 'class-newclassform'
    },
    listeners: { afterrender: 'onAfterRender' },
    title: 'CREATE NEW CLASS',
    items: [
        {
            xtype: 'container',
            bodyPadding: 5,
            layout: 'anchor',
            margin: '3 3 0 0',
            items: [
                {
                    xtype: 'form',
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
                                    fieldLabel: 'Class ID',
                                    bind: '{classid}',
                                    hidden: true
                                },
                                {
                                    fieldLabel: 'Class ID',
                                    bind: '{classid}',
                                    disabled: true
                                },
                                {
                                    fieldLabel: 'Class Name',
                                    allowBlank: false,
                                    bind: '{classname}',
                                },
                                {
                                    xtype: 'combobox',
                                    fieldLabel: 'is Program',
                                    displayField: 'name',
                                    bind: '{isprogram}',
                                    valueField: 'id',
                                    store: {
                                        data: [
                                            { id: 1, name: 'Yes' },
                                            { id: 0, name: 'No' },
                                        ]
                                    },
                                    listeners: { select: 'onIsProgramSelect' }
                                },
                                {
                                    xtype: 'combobox',
                                    fieldLabel: 'Choose Program',
                                    id: 'programIdSelect',
                                    hidden: false,
                                    displayField: 'programname',
                                    bind: '{programid}',
                                    valueField: 'programid',
                                    reference: 'cmboPrograms',
                                    forceSelection: true
                                },
                                {
                                    id: 'isCourseOpt',
                                    hidden: false,
                                    xtype: 'combobox',
                                    fieldLabel: 'is Course',
                                    displayField: 'name',
                                    bind: '{iscourse}',
                                    valueField: 'id',
                                    store: {
                                        data: [
                                            { id: 1, name: 'Yes' },
                                            { id: 0, name: 'No' },
                                        ]
                                    }                                    
                                },
                                {
                                    xtype: 'combobox',
                                    fieldLabel: 'Choose Course',
                                    id: 'courseIdSelect',
                                    hidden: false,
                                    displayField: 'coursename',
                                    bind: '{courseid}',
                                    valueField: 'courseid',
                                    reference: 'cmboCourse',
                                    forceSelection: true
                                }
                            ]
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
                                    store: {
                                        data: [
                                            { id: '1', name: 'ONE' },
                                            { id: '2', name: 'TWO' },
                                        ]
                                    },
                                    allowBlank:false
                                },
                                {
                                    fieldLabel: 'No of Students',
                                    xtype: 'numberfield',
                                    bind: '{totalstudents}',
                                    allowBlank: false,
                                },
                                {
                                    fieldLabel: 'Classes Start At',
                                    xtype: 'timefield',
                                    bind: '{startat}',
                                    allowBlank: false,
                                    name: 'in',
                                    minValue: '6:00 AM',
                                    maxValue: '10:00 PM',
                                    increment: 60,
                                    anchor: '100%',
                                },
                                {
                                    fieldLabel: 'End At',
                                    xtype: 'timefield',
                                    bind: '{endat}',
                                    allowBlank: false,
                                    name: 'in',
                                    minValue: '6:00 AM',
                                    maxValue: '10:00 PM',
                                    increment: 60,
                                    anchor: '100%'
                                },
                                {
                                    xtype: 'combobox',
                                    fieldLabel: 'Department',
                                    displayField: 'departmentname',
                                    bind: '{departmentid}',
                                    valueField: 'departmentid',
                                    reference: 'comboDepartments',
                                    forceSelection: true,
                                    allowBlank: false,

                                },
                                {
                                    fieldLabel: 'Created By',
                                    allowBlank: false,
                                    hidden:true,
                                    bind: '{createdby}',
                                    value: 1
                                }
                            ]
                        }
                    ],                    
                    buttons: [
                        {
                        text: 'Reset',
                        iconCls: 'x-fa fas fa-refresh',
                        handler: function(){
                            this.up('form').getForm().reset();
                        }
                    }, 
                    {
                        text: 'Submit',
                        iconCls: 'x-fa fas fa-save',
                        handler: 'onLectureClassSubmit',
                        formBind: true
                    }],
                },
            ]
        },
    ],
});
