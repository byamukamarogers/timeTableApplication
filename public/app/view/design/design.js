
Ext.define('TimeTableApp.view.design.design',{
    extend: 'Ext.panel.Panel',
    xtype:'designView',

    requires: [
        'TimeTableApp.view.design.designController',
        'TimeTableApp.view.design.designModel'
    ],

    controller: 'design-design',
    viewModel: {
        type: 'design-design'
    },
    listeners: { afterrender: 'onAfterDesignLoad' },
    items: [
        {
            extend: 'Ext.tab.Panel',
            width: '100%',
            height: '100%',
            xtype: 'tabpanel',
            activeTab: 0,
            //tabPosition: 'left',
            layout: 'hbox',
            rotation: 'right',
            items: [
                {
                    title: 'Test',
                    xtype:'testsView',
                },
                {
                    title: 'Lecturer Course Allocation',
                    items: [
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            margin: '3 0 0 0',
                            items: [
                                //Room registration form        
                                {
                                    title: 'Lecturer Course Association',
                                    bodyPadding: 5,
                                    width: '35%',
                                    layout: 'anchor',
                                    defaults: {
                                        anchor: '100%'
                                    },
                                    defaultType: 'textfield',
                                    items: [
                                    {
                                        xtype: 'combobox',
                                        fieldLabel: 'Course Unit',
                                        displayField: 'courseName',
                                        valuefield: 'courseId',
                                        reference: 'grdallCourses',
                                        forceSelection: true,
                                        allowBlank: false
                
                                    },
                                    {
                                        xtype: 'combobox',
                                        fieldLabel: 'Lecturer',
                                        displayField: 'name',
                                        valuefield: 'staffId',
                                        reference: 'grdallStaff',
                                        forceSelection: true,
                                        allowBlank: false
                
                                    },
                                    ],
                                    buttons: [{
                                        text: 'Reset'
                                    }, {
                                        text: 'Submit',
                                        handler: 'onRSubmitClicked'
                                    }],
                                },
                                //Grid to display all Available rooms
                                {
                                    margin: '0 0 0 10',
                                    bodyPadding: 0,
                                    width: '65%',
                                    layout: 'anchor',
                                    defaults: {
                                        anchor: '100%'
                                    },
                                    defaultType: 'textfield',
                                    items: [{
                                        extend: 'Ext.grid.Panel',
                                        xtype: 'grid',
                                        title: 'Lecturer Course List',
                                        reference: 'grdallRooms',
                                        columns: [
                                            { text: 'Room Name', dataIndex: 'roomname', flex: 1 },
                                            { text: 'Capacity', dataIndex: 'capacity', flex: 1 },
                                            { text: 'Location', dataIndex: 'location' },
                                            { text: 'Room Type', dataIndex: 'roomtype' },
                                            { text: 'Faculty', dataIndex: 'faculty' }
                                        ],
                                    }
                                    ],
                
                                },
                            ]
                        },
                    ],
                },
                {
                    title: 'Class',
                    xtype: 'lectureClass',
                }, {
                    title: 'Course',
                    xtype:'courseView',
                },
                {
                    title: 'Faculty',
                    xtype:'facultyView',
                },

            ]
        }
    ]
});
