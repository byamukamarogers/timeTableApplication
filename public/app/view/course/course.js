
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
                //Grid to display all COURSES
                {
                    bodyPadding: 0,
                    width: '100%',
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
                            { text: 'Course Id', dataIndex: 'courseId' },
                            { text: 'Course Code', dataIndex: 'courseCode' },
                            { text: 'Course Name', dataIndex: 'courseName', flex: 1 },
                            { text: 'Credit Units', dataIndex: 'creditUnits' },
                            { text: 'Course Type', dataIndex: 'courseTypeId', flex: 1 },
                            { text: 'Year of Study', dataIndex: 'studyYear' },
                            { text: 'Semester', dataIndex: 'studySemester' },
                            { text: 'Program', dataIndex: 'programName',flex: 1  },
                            { text: 'Lecturer', dataIndex: 'staffId',flex: 1  },
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
