
Ext.define('TimeTableApp.view.class.newClass', {
    extend: 'Ext.panel.Panel',
    xtype: 'lectureClass',

    requires: [
        'TimeTableApp.view.class.newClassController',
        'TimeTableApp.view.class.newClassModel'
    ],

    controller: 'class-newclass',
    viewModel: {
        type: 'class-newclass'
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
                    defaultType: 'textfield',
                    items: [{
                        extend: 'Ext.grid.Panel',
                        xtype: 'grid',
                        title: 'All Classes',
                        reference: 'grdLectureClasses',
                        columns: [
                            { text: 'Class Id', dataIndex: 'classId', flex: 0.5, },
                            { text: 'Class Name', dataIndex: 'className', flex: 1, },
                            { text: 'Study Semester', dataIndex: 'semester', },
                            { text: 'No of Students', dataIndex: 'totalStudents' },
                            { text: 'is Course', dataIndex: 'isCourse' },
                            { text: 'Courses', dataIndex: 'courseId' },
                            { text: 'is Program', dataIndex: 'isProgram' },
                            { text: 'Program', dataIndex: 'programId' },
                            { text: 'Created By', dataIndex: 'createdBy' },
                        ],
                    }
                    ],

                },
            ]
        },
    ],
});
