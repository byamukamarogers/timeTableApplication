
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
                            title: 'Faculty List',
                            reference: 'grdallFaculties',
                            columns: [
                                { text: 'Faculty id', dataIndex: 'facultyid', flex: 0.15 },
                                { text: 'Faculty Name', dataIndex: 'facultyname', flex: 0.35 },
                                { text: 'Institution', dataIndex: 'institutionname', flex: 0.35 }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});
