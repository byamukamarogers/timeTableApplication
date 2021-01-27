
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
    listeners: { afterrender: 'onAfterRender' },
    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            margin: 3,
            items: [
                {
                    bodyPadding: 0,
                    width: '100%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [
                        {
                            xtype: 'grid',
                            title: 'All Courses',
                            reference: 'grdallCourses',
                            maxHeight: 400,
                            scrollable: true,
                            tbar: [
                                {
                                    xtype: 'combobox',
                                    emptyText: 'Program',
                                    width: 200
                                },
                                {
                                    xtype: 'combobox',
                                    emptyText: 'Year',
                                    width: 200
                                },
                                {
                                    xtype: 'combobox',
                                    emptyText: 'Semester',
                                    width: 200
                                },
                                {
                                    xtype: 'button',
                                    text: 'Edit Course',
                                    handler: 'onEditCourse'
                                }
                            ],
                            columns: [
                                {
                                    text: 'Course Id',
                                    dataIndex: 'courseid',
                                    hidden: true
                                },
                                {
                                    text: 'Course Code',
                                    dataIndex: 'coursecode',
                                    flex: 0.15
                                },
                                {
                                    text: 'Course Name',
                                    dataIndex: 'coursename',
                                    flex: 0.3
                                },
                                {
                                    text: 'Credit Units',
                                    dataIndex: 'creditunits',
                                    flex: 0.12
                                },
                                {
                                    text: 'Course Type',
                                    dataIndex: 'coursetypename',
                                    flex: 0.15
                                },
                                {
                                    text: 'Lecturer',
                                    xtype:'templatecolumn',
                                    tpl:'{name} ({initial})',
                                    flex: 0.2
                                }
                            ],
                            bbar: {
                                xtype: 'pagingtoolbar',
                                displayInfo: true,
                                displayMsg: 'Display records {0} - {1} of {2}',
                                emptyMsg: 'No Record to display'
                            },
                            plugins: [
                                {
                                    ptype: 'rowexpander',
                                    rowBodyTpl: [
                                        '<b>Program :</b> {programname}'
                                    ]
                                }
                            ]
                        }
                    ],

                }
            ],
        }
    ]
});
