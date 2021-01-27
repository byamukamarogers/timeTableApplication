Ext.define('TimeTableApp.view.modules.MenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main-menu',
     onMenuItemClicked: async function (tree, record, item, index, e, options) {
        let me = Ext.getCmp('modulesCentralPanel').items.get(0);
        let nodeText = record.data.text,
            mainCentralPanel = Ext.getCmp('modulesCentralPanel').items.get(0);
        mainCentralPanel.removeAll();
        mainCentralPanel.setTitle(record.data.text);
        if (record.data.leaf === true) {


        }

        mainCentralPanel.add({
            xtype: record.data.xtype,
        });
    }, 

    
    onMenuLoad: async function () {
        this.loadStaffMenuComponent();
        this.loadFacultyMenuComponent();
        this.loadDurationMenuComponent();
        this.loadCampusMenuComponent();
        this.loadDepartmentMenuComponent();
        this.loadProgramMenuComponent();
        this.loadCourseMenuComponent();
        this.loadRoomMenuComponent();
        this.loadClassMenuComponent();
        this.loadDesignComponent();
    },

    loadDesignComponent: async function () {
        Ext.create('Ext.tree.Panel', {
            id: 'designTree',
            header: false,
            textAlign: 'left',
            store: {
                root: {
                    expanded: false,
                    children: [
                        { text: "Structure", leaf: true,  xtype: 'testView'},
                        { text: "Test", leaf: true, xtype: 'ttStructure' },
                    ]
                }
            },
            rootVisible: false,

            listeners: { itemclick: 'onMenuItemClicked', }
        });
        var designPanel = Ext.getCmp('designTreePanel');
        var designTree = Ext.getCmp('designTree');
        designPanel.add(designTree);
    },
    loadStaffMenuComponent: async function () {
        Ext.create('Ext.tree.Panel', {
            //title: 'A list of all the wards registerd in the appilication database',
            id: 'staffsTree',
            header: false,
            textAlign: 'left',
            store: {
                root: {
                    expanded: false,
                    children: [
                        { text: "Add Staff", leaf: true,  xtype: 'staffForm',},
                        { text: "Staff List", leaf: true, xtype: 'staffView', },
                    ]
                }
            },
            rootVisible: false,

            listeners: { itemclick: 'onMenuItemClicked', }
        });
        var staffListPanel = Ext.getCmp('staffsTreePanel');
        var staffListTree = Ext.getCmp('staffsTree');
        staffListPanel.add(staffListTree);
    },
    loadFacultyMenuComponent: async function () {
        Ext.create('Ext.tree.Panel', {
            //title: 'A list of all the wards registerd in the appilication database',
            id: 'facultyTree',
            header: false,
            textAlign: 'left',
            store: {
                root: {
                    expanded: false,
                    children: [
                        { text: "Add Faculty", leaf: true, xtype: 'facultyForm',},
                        { text: "List Faculties", leaf: true, xtype:'facultyView', },
                    ]
                }
            },
            rootVisible: false,
            listeners: { itemclick: 'onMenuItemClicked', }
        });
        var facultyListPanel = Ext.getCmp('facultyTreePanel');
        var facultyListTree = Ext.getCmp('facultyTree');
        facultyListPanel.add(facultyListTree);

    },
    loadDurationMenuComponent: async function () {
        Ext.create('Ext.tree.Panel', {
            //title: 'A list of all the wards registerd in the appilication database',
            id: 'durationTree',
            header: false,
            textAlign: 'left',
            store: {
                root: {
                    expanded: false,
                    children: [
                        { text: "Add Duration", leaf: true, xtype: 'durationForm',},
                        { text: "View All Durations", leaf: true, xtype: 'durationView', },
                    ]
                }
            },
            rootVisible: false,
            listeners: { itemclick: 'onMenuItemClicked', }
        });
        var durationListPanel = Ext.getCmp('durationTreePanel');
        var durationListTree = Ext.getCmp('durationTree');
        durationListPanel.add(durationListTree);
    },
    loadCampusMenuComponent: async function () {
        Ext.create('Ext.tree.Panel', {
            //title: 'A list of all the wards registerd in the appilication database',
            id: 'campusTree',
            header: false,
            textAlign: 'left',
            store: {
                root: {
                    expanded: false,
                    children: [
                        { text: "Add Institution", leaf: true, xtype:'institutionForm',},
                        { text: "View All Institutions", leaf: true, xtype:'institutionView', },
                    ]
                }
            },
            rootVisible: false,
            listeners: { itemclick: 'onMenuItemClicked', }
        });
        var campusListPanel = Ext.getCmp('campusTreePanel');
        var campusListTree = Ext.getCmp('campusTree');
        campusListPanel.add(campusListTree);
    },
    loadDepartmentMenuComponent: async function () {
        Ext.create('Ext.tree.Panel', {
            //title: 'A list of all the wards registerd in the appilication database',
            id: 'departmentTree',
            header: false,
            textAlign: 'left',
            store: {
                root: {
                    expanded: false,
                    children: [
                        { text: "Add Department", leaf: true, xtype: 'departmentForm',},
                        { text: "View All Departments", leaf: true, xtype: 'departmentView', },
                    ]
                }
            },
            rootVisible: false,
            listeners: { itemclick: 'onMenuItemClicked', }
        });
        let departmentListPanel = Ext.getCmp('departmentTreePanel');
        let departmentListTree = Ext.getCmp('departmentTree');
        departmentListPanel.add(departmentListTree);
    },
    loadProgramMenuComponent: async function () {
        Ext.create('Ext.tree.Panel', {
            //title: 'A list of all the wards registerd in the appilication database',
            id: 'programTree',
            header: false,
            textAlign: 'left',
            store: {
                root: {
                    expanded: false,
                    children: [
                        { text: "Add Program", leaf: true, xtype: 'programForm',},
                        { text: "View All Programs", leaf: true, xtype:'programView', },
                    ]
                }
            },
            rootVisible: false,
            listeners: { itemclick: 'onMenuItemClicked', }
        });
        let programListPanel = Ext.getCmp('programTreePanel');
        let programListTree = Ext.getCmp('programTree');
        programListPanel.add(programListTree);
    },
    loadCourseMenuComponent: async function () {
        Ext.create('Ext.tree.Panel', {
            //title: 'A list of all the wards registerd in the appilication database',
            id: 'courseTree',
            header: false,
            textAlign: 'left',
            store: {
                root: {
                    expanded: false,
                    children: [
                        { text: "Add Course", leaf: true, xtype: 'courseForm'},
                        { text: "Course Type", leaf: true, xtype: 'courseTypes'},
                        { text: "View All Courses", leaf: true, xtype: 'courseView'},
                    ]
                }
            },
            rootVisible: false,
            listeners: { itemclick: 'onMenuItemClicked', }
        });
        let courseListPanel = Ext.getCmp('courseTreePanel');
        let courseListTree = Ext.getCmp('courseTree');
        courseListPanel.add(courseListTree);
    },
    loadRoomMenuComponent: async function () {
        Ext.create('Ext.tree.Panel', {
            //title: 'A list of all the wards registerd in the appilication database',
            id: 'roomTree',
            header: false,
            textAlign: 'left',
            store: {
                root: {
                    expanded: false,
                    children: [
                        { text: "Add New Room", leaf: true,  xtype: 'roomForm',},
                        { text: "View All Rooms", leaf: true, xtype: 'roomViewlist', },
                    ]
                }
            },
            rootVisible: false,
            listeners: { itemclick: 'onMenuItemClicked', }
        });
        let roomListPanel = Ext.getCmp('roomTreePanel');
        let roomListTree = Ext.getCmp('roomTree');
        roomListPanel.add(roomListTree);
    },
    loadClassMenuComponent: async function () {
        Ext.create('Ext.tree.Panel', {
            //title: 'A list of all the wards registerd in the appilication database',
            id: 'classTree',
            header: false,
            textAlign: 'left',
            store: {
                root: {
                    expanded: false,
                    children: [
                        { text: "Add Class", leaf: true,  xtype: 'newClassForm',},
                        { text: "View All Classes", leaf: true, xtype: 'lectureClass', },
                    ]
                }
            },
            rootVisible: false,
            listeners: { itemclick: 'onMenuItemClicked', }
        });
        let classListPanel = Ext.getCmp('classTreePanel');
        let classListTree = Ext.getCmp('classTree');
        classListPanel.add(classListTree);
    },
});
