
Ext.define('TimeTableApp.view.faculty.faculty', {
    extend: 'Ext.panel.Panel',
    xtype: 'facultyView',

    requires: [
        'TimeTableApp.view.faculty.facultyController',
        'TimeTableApp.view.faculty.facultyModel'
    ],

    controller: 'faculty-faculty',
    listeners: { afterrender: 'onAfterRender' },
    viewModel: {
        type: 'faculty-faculty'
    },
    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            margin: 3,
            items: [
                
                //Grid to display all Programs
                {
                    bodyPadding: 0,
                    width: '100%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [{
                        extend: 'TimeTableApp.view.util.base.Grid',
                        xtype: 'baseGrid',
                        title: 'Faculty List',
                        reference: 'grdallFaculties',
                        columns: [
                            { text: 'Faculty id', dataIndex: 'facultyId' },
                            { text: 'Faculty Name', dataIndex: 'facultyName', flex: 1 },
                            { text: 'Institution', dataIndex: 'InstitutionName', flex: 1 },

                        ],

                    }
                    ],

                }
            ],
        }
    ]
});
