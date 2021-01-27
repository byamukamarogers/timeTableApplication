
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
                                    fieldLabel: 'Course ID',
                                    bind: '{courseid}',
                                    disabled: true
                                },
                                {
                                    fieldLabel: 'Course ID',
                                    bind: '{courseid}',
                                    hidden: true
                                },
                                {
                                    fieldLabel: 'Course Name',
                                    bind: '{coursename}',
                                    allowBlank: false
                                },
                                {
                                    fieldLabel: 'Course Code',
                                    bind: '{coursecode}',
                                    allowBlank: false
                                },
                                {
                                    fieldLabel: 'Credit Units',
                                    xtype: 'numberfield',
                                    bind: '{creditunits}',
                                    allowBlank: true
                                },
                                {
                                    xtype: 'combobox',
                                    fieldLabel: 'Year Of Study',
                                    bind: '{studyyear}',
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
                                    allowBlank: true,
                                    items: [
                                        { boxLabel: 'YES', name: 'iselectable', inputValue: 'YES' },
                                        { boxLabel: 'NO', name: 'iselectable', inputValue: 'NO' },
                                    ]
                                },
                                {
                                    xtype: 'combobox',
                                    fieldLabel: 'Semester Of Study',
                                    bind: '{studysemester}',
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
                                    bind: '{coursetypeid}',
                                    allowBlank: false,
                                    reference: 'cmboCourseTypes',
                                    displayField: 'coursetypename',
                                    valueField: 'coursetypeid',
                                    forceSelection: true,
                                    allowBlank: false
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
                                    xtype: 'combobox',
                                    reference: 'cboProgramName',
                                    bind: '{programid}',
                                    fieldLabel: 'Program Name',
                                    displayField: 'programname',
                                    valueField: 'programid',
                                    forceSelection: true,
                                    editable: false
                                },
                                {
                                    xtype: 'combobox',
                                    reference: 'cmboStaffList',
                                    bind: '{staffid}',
                                    fieldLabel: 'Select Lecturer',
                                    displayField: 'name',
                                    valueField: 'staffid',
                                    forceSelection: true,
                                    editable: false
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: 'No. of Lectures Per week',
                                    allowBlank: false,
                                    bind: '{numberoflecturesperweek}',
                                    minValue: 1
                                },
                                {
                                    xtype: 'combobox',
                                    fieldLabel: 'Duration Per Lecture',
                                    decimalPrecision: 2,
                                    allowBlank: false,
                                    bind: '{durationperlecture}',
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
                                    bind: '{maximumnumberoflecturesperday}',
                                    minValue: 1
                                }
                            ]
                        }
                    ],
                    buttons: [
                        {
                            text: 'Reset',
                            iconCls: 'x-fa fas fa-refresh',
                            handler: function () {
                                this.up('form').getForm().reset();
                            }
                        },
                        {
                            text: 'Save Course Unit',
                            formBind: true,
                            handler: 'onCourseUnitSubmitClicked'
                        }
                    ]
                }
            ]
        }
    ]
});
