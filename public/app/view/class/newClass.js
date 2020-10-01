
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
            xtype: 'grid',
            width: '100%',
            margin: '2 2 0 2',
            title: 'All Classes',
            height: 400,
            scrollable: true,
            reference: 'grdLectureClasses',
            tbar: [
                {
                    xtype: 'combobox',
                    emptyText: 'Search ...',
                    width: 200
                },
                {
                    xtype: 'button',
                    text: 'Edit',
                    iconCls: 'x-fa fas fa-edit',
                    handler: 'onEditClass'
                }
            ],
            columns: [
                {
                    text: 'Class Id',
                    dataIndex: 'classId',
                    flex: 0.5,
                    hidden: true
                },
                {
                    text: 'Class Name',
                    dataIndex: 'className',
                    flex: 0.3
                },
                {
                    text: 'Study Semester',
                    dataIndex: 'semester',
                    flex: 0.2
                },
                {
                    text: 'No of Students',
                    dataIndex: 'totalStudents',
                    flex: 0.2
                },
                {
                    text: 'is Program',
                    dataIndex: 'isProgram',
                    flex: 0.2
                },
                {
                    text: 'Created By',
                    dataIndex: 'createdBy',
                    flex: 0.2,
                    hidden:true
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
                        '<b>Registered By :</b> {createdBy}<br/>',
                        '<b>Is Program :</b> {isProgram}<br/>',
                        '<b>Program :</b> {programId}<br/>',
                        '<b>Is Course :</b> {isCourse}<br/>',
                        '<b>Course :</b> {courseId}<br/>',
                    ]
                }
            ]
        }
    ]
});
