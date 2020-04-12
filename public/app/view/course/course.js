
Ext.define('TimeTableApp.view.course.course', {
    extend: 'Ext.panel.Panel',
    xtype: 'courseView',

    requires: [
        'TimeTableApp.view.course.courseController',
        'TimeTableApp.view.course.courseModel'
    ],

    controller: 'course-course',
    viewModel: {
        type: 'course-course'
    },
    listeners: { afterrender: 'onAfterCourseUnitLoad' },
    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            margin: '3 0 0 0',
            items: [
                {
                    title: 'Add New Course (Course Unit)',
                    bodyPadding: 5,
                    width: '30%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    defaultType: 'textfield',
                    items: [{
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
                            { boxLabel: 'NO', name: 'isElectable', inputValue: 'NO'},
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
                        xtype: 'numberfield',
                        bind: '{courseTypeId}',
                        allowBlank: false
                    },
                    {
                        xtype: 'combobox',
                        reference: 'cboProgramName',
                        bind: '{programId}',
                        fieldLabel: 'Program Name',
                        displayField: 'programName',
                        valueField: 'programId',
                        forceSelection: true,
                        queryMode: 'local'
                    }

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
                        }],
                },
                //Grid to display all COURSES
                {
                    margin: '0 0 0 10',
                    bodyPadding: 0,
                    width: '70%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [{
                        extend: 'Ext.grid.Panel',
                        xtype: 'grid',
                        title: 'All Courses',
                        reference: 'grdallCourses',
                        actions: {
                            delete: {
                                iconCls: 'x-fa fa-trash-o red',
                                tooltip: 'Delete'
                            },
                            edit: {
                                iconCls: 'x-fa fa-pencil-square blue',
                                tooltip: 'Edit'
                            }
                        },
                        items:[{
                            docked:'top',
                            xtype:'toolbar',
                            items:[{
                                text: 'Search Box',
                            }]
                        }],
                        columns: [
                            { text: 'Course Code', dataIndex: 'courseCode' },
                            { text: 'Course Name', dataIndex: 'courseName', flex: 1 },
                            { text: 'Credit Units', dataIndex: 'creditUnits' },
                            { text: 'Course Type', dataIndex: 'courseTypeId', flex: 1 },
                            { text: 'Year of Study', dataIndex: 'studyYear' },
                            { text: 'Semester', dataIndex: 'studySemester' },
                            { text: 'Program', dataIndex: 'programName',flex: 1  },
                            {
                                width: 70,
                                sortable: false,
                                menuDisabled: true,
                                xtype: 'actioncolumn',
                                items: ['@delete', '@edit']
                            }
                        ],
                        //Add Pagination toolbar, Paging not working yet, this just sample
                        bbar: {
                            xtype: 'pagingtoolbar',
                            displayInfo: true,
                            displayMsg: 'Display records {0} - {1} of {2}',
                            emptyMsg: 'No Record to display'
                        },
                        tbar: [
                            {
                                xtype: 'textfield',
                                emptyText: 'Search...',
                                width: 200
                            },
                            {
                                xtype: 'button',
                                text: 'Search',
                                iconCls: 'x-fa fa-search blue'
                            },
                            {
                                xtype: 'button',
                                text: 'Refresh',
                                iconCls: 'x-fa fa-refresh blue'
                            }
                        ],
                    }
                    ],

                }
            ],
        }
    ]
});
