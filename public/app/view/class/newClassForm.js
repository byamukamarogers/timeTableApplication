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
    items: [
        {
            xtype: 'container',
            scrollable: true,
            bodyPadding: 5,
            layout: 'anchor',
            margin: '3 3 0 0',
            items: [
                {
                    extend: 'Ext.form.Panel',
                    xtype: 'form',
                    bodyPadding: 5,
                    width: '50%',
                    reset: true,
                    //title:'Add CLIENT',
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
                                    allowBlank: false,
                                    bind: '{classId}',
                                },
                                {
                                    fieldLabel: 'Class Name',
                                    allowBlank: false,
                                    bind: '{className}',
                                },
                                {
                                    xtype: 'combobox',
                                    fieldLabel: 'is Program',
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
                                    listeners: { select: 'onIsProgramSelect' }
                                },
                                {
                                    xtype: 'combobox',
                                    fieldLabel: 'Choose Program',
                                    id: 'programIdSelect',
                                    hidden: false,
                                    displayField: 'programName',
                                    bind: '{programId}',
                                    valueField: 'programId',
                                    allowBlank: false,
                                    reference: 'cmboPrograms',
                                    forceSelection: true,
                                },
                                {
                                    id: 'isCourseOpt',
                                    hidden: false,
                                    xtype: 'combobox',
                                    fieldLabel: 'is Course',
                                    displayField: 'name',
                                    bind: '{isCourse}',
                                    valueField: 'id',
                                    allowBlank: false,
                                    store: {
                                        data: [
                                            { id: 'true', name: 'Yes' },
                                            { id: 'false', name: 'No' },
                                        ]
                                    }
                                },
                                {
                                    xtype: 'combobox',
                                    fieldLabel: 'Choose Course',
                                    id: 'courseIdSelect',
                                    hidden: false,
                                    displayField: 'courseName',
                                    bind: '{courseId}',
                                    valueField: 'courseId',
                                    allowBlank: false,
                                    reference: 'cmboCourse',
                                    forceSelection: true,
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
                                {
                                    fieldLabel: 'No of Students',
                                    xtype: 'numberfield',
                                    bind: '{totalStudents}',
                                    allowBlank: false,
                                },
                                {
                                    fieldLabel: 'Classes Start At',
                                    xtype: 'timefield',
                                    bind: '{startAt}',
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
                                    bind: '{endAt}',
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
                                    displayField: 'departmentName',
                                    bind: '{departmentId}',
                                    valueField: 'departmentId',
                                    reference: 'comboDepartments',
                                    forceSelection: true,
                                    allowBlank: false,

                                },
                                {
                                    fieldLabel: 'Created By',
                                    allowBlank: false,
                                    bind: '{createdBy}',
                                }
                            ],

                        },
                    ],                    
                    buttons: [{
                        text: 'Reset',
                    }, {
                        text: 'Submit',
                        handler: 'onLectureClassSubmit',
                    }],
                },
            ]
        },
    ],
});
