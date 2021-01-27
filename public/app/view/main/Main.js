Ext.define('TimeTableApp.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'TimeTableApp.view.main.MainController',
        'TimeTableApp.view.main.MainModel',
        'TimeTableApp.view.class.newClass',
        'TimeTableApp.view.room.roomList',
        'TimeTableApp.view.*',

        //new layout
        'TimeTableApp.view.modules.Menu',
    ],
    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',

    ui: 'navigation',
    bodypadding: 10,
    layout: 'border',
    height: 'max',
    plugins: 'viewport',
    itemId: 'main-viewport',

    id: 'modulesCentralPanel',

    title: 'FOS TimeTable',
    listeners: {
        afterrender: 'onAfterRender'
    },
    items: [
        {
            region: 'north',
            //layout: 'hbox',
            header: {
                height: 70,
                margin: 1,
                html: ['<img src="resources/images/logo.png" style="display:block; width:6%; height: auto">','<h3>TIME TABLE MANAGEMENT SYSTEM</h3>'],
                items: [
                    {
                        xtype: 'label',
                        bind: {
                            text: 'Welcome      {fullName}'
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'logout',
                        margin: 2,
                        handler: 'onLogoutClick'
                    }]
            }

        },
        {
            region: 'center',            
            itemId: 'centerPanel'
        },
        {
            region: 'west',
            title: 'Menu',
            margin: 2,
            width: 230,
            layout: {
                type: 'accordion',
                title: 'Control Panel2',
                titleCollapse: false,
                animate: true,
                activeOnTop: false

            },
            plugins: 'responsive',
            responsiveConfig: {
                'width < 768 && tall': {
                    visible: false
                },
                'width >= 768': {
                    visible: true
                }
            },
            items: [
                {
                    title: 'Design',
                    iconCls: 'fa fa-pencil-square-o',
                    bind: { disabled: '{frontDesk}', collapsed: '{collapsed}' },
                    height: 200,
                    scrollable: 'y',
                    items: [
                        {
                            xtype: 'menu',
                            floating: false,
                            items: [
                                /* { text: 'Dashboard', handler: 'onFrontDashboardSelected' },
                                { text: 'Search & Add visit', handler: 'onSearchClient' }, */
                                { text: "Design Time Table",   handler: 'onStructureSelected'},
                                { text: "View Time Table",  handler: 'onTestSelected' },
                            ]
                        }
                    ]
                },
                {
                    title: 'Class',
                    iconCls: 'fa fa-pencil-square-o',
                    bind: { disabled: '{frontDesk}', collapsed: '{collapsed}' },
                    height: 200,
                    scrollable: 'y',
                    items: [
                        {
                            xtype: 'menu',
                            floating: false,
                            items: [
                                { text: "Add Class",   handler: 'onAddClassSelected'},
                                { text: "View All Classes", handler: 'onViewClassesSelected' },
                            ]
                        }
                    ]
                },
                {
                    title: 'Room',
                    iconCls: 'fa fa-pencil-square-o',
                    bind: { disabled: '{frontDesk}', collapsed: '{collapsed}' },
                    height: 200,
                    scrollable: 'y',
                    items: [
                        {
                            xtype: 'menu',
                            floating: false,
                            items: [
                                { text: "Add New Room", handler: 'onAddRoom'},
                                { text: "View All Rooms", handler: 'onViewRooms' },
                            ]
                        }
                    ]
                },
                {
                    title: 'Session',
                    iconCls: 'fa fa-pencil-square-o',
                    bind: { disabled: '{frontDesk}', collapsed: '{collapsed}' },
                    height: 200,
                    scrollable: 'y',
                    items: [
                        {
                            xtype: 'menu',
                            floating: false,
                            items: [
                                { text: "View All Sessions", handler: 'onViewDurations' }
                            ]
                        }
                    ]
                },
                {
                    title: 'Course',
                    iconCls: 'fa fa-pencil-square-o',
                    bind: { disabled: '{frontDesk}', collapsed: '{collapsed}' },
                    height: 200,
                    scrollable: 'y',
                    items: [
                        {
                            xtype: 'menu',
                            floating: false,
                            items: [
                                { text: "Add Course",  handler: 'onAddCourse'},
                                { text: "Course Type",  handler: 'onCourseTypesSelected'},
                                { text: "View All Courses", handler: 'onViewCourses'},
                            ]
                        }
                    ]
                },
                {
                    title: 'Program',
                    iconCls: 'fa fa-pencil-square-o',
                    bind: { disabled: '{frontDesk}', collapsed: '{collapsed}' },
                    height: 200,
                    scrollable: 'y',
                    items: [
                        {
                            xtype: 'menu',
                            floating: false,
                            items: [
                                { text: "Add Program",  handler: 'onAddProgram'},
                                { text: "View All Programs",  handler:'onViewProgram' },
                            ]
                        }
                    ]
                },
                {
                    title: 'Staff',
                    iconCls: 'fa fa-pencil-square-o',
                    bind: { disabled: '{frontDesk}', collapsed: '{collapsed}' },
                    height: 200,
                    scrollable: 'y',
                    items: [
                        {
                            xtype: 'menu',
                            floating: false,
                            items: [
                                { text: "Add Staff",   handler: 'onAddStaff'},
                                { text: "Staff List",  handler: 'onViewStaff'}
                            ]
                        }
                    ]
                },
                {
                    title: 'Department',
                    iconCls: 'fa fa-pencil-square-o',
                    bind: { disabled: '{frontDesk}', collapsed: '{collapsed}' },
                    height: 200,
                    scrollable: 'y',
                    items: [
                        {
                            xtype: 'menu',
                            floating: false,
                            items: [
                                { text: "Add Department",  handler:'onAddDepartment'},
                                { text: "View All Departments",  handler: 'onViewDepartment' },
                            ]
                        }
                    ]
                },
                {
                    title: 'Faculty',
                    iconCls: 'fa fa-pencil-square-o',
                    bind: { disabled: '{frontDesk}', collapsed: '{collapsed}' },
                    height: 200,
                    scrollable: 'y',
                    items: [
                        {
                            xtype: 'menu',
                            floating: false,
                            items: [
                                { text: "Add Faculty",  handler: 'onAddFaculty'},
                                { text: "List Faculties",  handler: 'onViewFaculty' },
                            ]
                        }
                    ]
                },
                {
                    title: 'Institution',
                    iconCls: 'fa fa-pencil-square-o',
                    bind: { disabled: '{frontDesk}', collapsed: '{collapsed}' },
                    height: 200,
                    scrollable: 'y',
                    items: [
                        {
                            xtype: 'menu',
                            floating: false,
                            items: [
                                { text: "Add Institution",  handler : 'onAddInstitution'},
                                { text: "View All Institutions",  handler: 'onViewInstitutions' },
                            ]
                        }
                    ]
                },
            ]
        }

    ],

});
