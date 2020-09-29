Ext.define('TimeTableApp.view.modules.Menu', {
    extend: 'Ext.panel.Panel',
    xtype: 'modulesmainmenu',
    requires: [
        'TimeTableApp.view.modules.MenuController',
        'TimeTableApp.view.modules.MenuModel',
        'TimeTableApp.view.room.roomForm',
        'TimeTableApp.view.duration.durationForm',
        'TimeTableApp.view.course.courseForm',
        'TimeTableApp.view.program.programForm',
        'TimeTableApp.view.staff.staffForm',
        'TimeTableApp.view.department.departmentForm',
        'TimeTableApp.view.faculty.facultyForm',
        'TimeTableApp.view.institution.institutionForm',
        'TimeTableApp.view.class.newClassForm',
    ],
    controller: 'main-menu',
    collapsible: true,
    hideCollapseTool: false,
    split: true,
    iconCls: 'x-fa fa-sitemap fa-lg',
    title: 'Modules Menu',
    width: 250,
    scrollable: true,
    listeners: { afterrender: 'onMenuLoad' },

    items: [
        {
            extend: 'Ext.panel.Panel',
            layout: {
                // layout-specific configs 
                type: 'accordion',
                titleCollapse: false,
                animate: false,
                activeOnTop: false,
            },
            items: [
                {
                    title: 'Class',
                    id: 'classTreePanel',
                },
                {
                    title: 'Room',
                    id: 'roomTreePanel',
                },
                {
                    title: 'Duration',
                    id: 'durationTreePanel',
                },
                {
                    title: 'Course',
                    id: 'courseTreePanel',
                },
                {
                    title: 'Program',
                    id: 'programTreePanel',
                },
                {
                    title: 'Staff',
                    id: 'staffsTreePanel',
                },
                {
                    title: 'Department',
                    id: 'departmentTreePanel',
                },
                {
                    title: 'Faculty',
                    id: 'facultyTreePanel',
                },
                {
                    title: 'Institution',
                    id: 'campusTreePanel',
                },
            ],

        },

    ]
});