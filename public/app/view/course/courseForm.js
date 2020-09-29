
Ext.define('TimeTableApp.view.course.courseForm', {
    extend: 'Ext.panel.Panel',
    xtype: 'courseForm',

    requires: [
        'TimeTableApp.view.course.courseFormController',
        'TimeTableApp.view.course.courseFormModel'
    ],

    controller: 'course-courseform',
    viewModel: {
        type: 'course-courseform'
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
                    //title:'Add Course Unit',
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
                                    fieldLabel: 'Course ID',
                                    bind: '{courseId}',
                                    allowBlank: false
                                }, {
                                    fieldLabel: 'Course Name',
                                    bind: '{courseName}',
                                    allowBlank: false
                                }, {
                                    fieldLabel: 'Course Code',
                                    bind: '{courseCode}',
                                    allowBlank: false
                                },
                                {
                                    fieldLabel: 'Credit Units',
                                    xtype: 'numberfield',
                                    bind: '{creditUnits}',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'combobox',
                                    fieldLabel: 'Year Of Study',
                                    bind: '{studyYear}',
                                    displayField: 'name',
                                    valueField: 'id',
                                    forceSelection: true,
                                    store: {
                                        data: [
                                            { id: '1', name: 'FIRST' },
                                            { id: '2', name: 'SECOND' },
                                            { id: '3', name: 'THIRD' },
                                            { id: '4', name: 'FOURTH' },
                                            { id: '5', name: 'FIFTH' },
                                        ]
                                    },
                                    allowBlank: false
                                },
                                {
                                    xtype: 'radiogroup',
                                    fieldLabel: 'is Electable',
                                    columns: 2,
                                    vertical: true,
                                    items: [
                                        { boxLabel: 'YES', name: 'isElectable', inputValue: 'YES' },
                                        { boxLabel: 'NO', name: 'isElectable', inputValue: 'NO' },
                                    ]
                                },
                                {
                                    xtype: 'combobox',
                                    fieldLabel: 'Semester Of Study',
                                    bind: '{studySemester}',
                                    displayField: 'name',
                                    valueField: 'id',
                                    forceSelection: true,
                                    store: {
                                        data: [
                                            { id: '1', name: 'FIRST' },
                                            { id: '2', name: 'SECOND' },
                                        ]
                                    },
                                    allowBlank: false
                                },
                                {
                                    fieldLabel: 'Course Type',
                                    xtype: 'combobox',
                                    bind: '{courseTypeId}',
                                    allowBlank: false,
                                    reference:'cmboCourseTypes',
                                    displayField: 'courseTypeName',
                                    valueField: 'courseTypeId',
                                    forceSelection: true,
                                    queryMode: 'local'
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
                                    xtype: 'combobox',
                                    reference: 'cboProgramName',
                                    bind: '{programId}',
                                    fieldLabel: 'Program Name',
                                    displayField: 'programName',
                                    valueField: 'programId',
                                    forceSelection: true,
                                    queryMode: 'local'
                                },
                                {
                                    xtype: 'combobox',
                                    reference: 'cmboStaffList',
                                    bind: '{staffId}',
                                    fieldLabel: 'Select Lecturer',
                                    displayField: 'name',
                                    valueField: 'staffId',
                                    forceSelection: true,
                                    queryMode: 'local'
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: 'No. of Lectures Per week',
                                    allowBlank: false,
                                    bind: '{numberOfLecturesPerWeek}',
                                },
                                {
                                    xtype: 'combobox',
                                    fieldLabel: 'Duration Per Lecture',
                                    decimalPrecision: 2,
                                    allowBlank: false,
                                    bind: '{durationPerLecture}',
                                    displayField: 'name',
                                    valueField: 'id',
                                    forceSelection: true,
                                    store: {
                                        data: [
                                            { id: '1', name: '1 hour' },
                                            { id: '1.5', name: '1.5 hours' },
                                            { id: '2', name: '2 hours' },
                                            { id: '2.5', name: '2.5 hours' },
                                            { id: '3', name: '3 hours' },
                                            { id: '3.5', name: '3.5 hours' },
                                            { id: '4', name: '4 hours' },
                                        ]
                                    },
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: 'Maximum No. of Lectures Per Day',
                                    allowBlank: false,
                                    bind: '{maxNumberOfLecturesPerDay}',
                                },
                                {
                                    fieldLabel: 'Created By',
                                    allowBlank: false,
                                    bind: '{staffId}',
                                }
                            ],

                        },
                    ],
                    buttons: [
                        {
                            text: 'Add New CourseType'
                        },
                        {
                            text: 'Reset'
                        },
                        {
                            text: 'Save Course Unit',
                            handler: 'onCourseUnitSubmitClicked'
                        }
                    ],
                },
            ]
        },
    ],
});
