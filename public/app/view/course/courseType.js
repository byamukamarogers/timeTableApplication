Ext.define('TimeTableApp.view.course.courseType', {
    extend: 'Ext.panel.Panel',
    xtype: 'courseTypes',

    requires: [
        'TimeTableApp.view.course.courseTypeController',
        'TimeTableApp.view.course.courseTypeModel'
    ],

    controller: 'course-coursetype',
    viewModel: {
        type: 'course-coursetype'
    },
    listeners: {
        afterrender: 'onAfterRender'
    },
    layout: 'hbox',
    margin: '1 2 0 2',
    items: [
        {
            title: 'Course Types',
            width: '70%',
            margin: '0 2 0 0',
            reference: 'grdCourseTypes',
            xtype: 'grid',
            height: 350,
            scrollable: true,
            columns: [
                {
                    text: 'Course Type Id',
                    dataIndex: 'courseId',
                    hidden: true
                },
                {
                    text: 'Course Type Name',
                    dataIndex: 'courseTypeName',
                    flex: 0.4
                },
                {
                    text: 'Course Type Code',
                    dataIndex: 'courseTypeCode',
                    flex: 0.2,
                    hidden: true
                },
                {
                    text: 'Description',
                    dataIndex: 'courseTypeDescription',
                    flex: 0.3
                }
            ],
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
                    text: 'Edit',
                    iconCls: 'x-fa fas fa-edit',
                    handler: 'onEditCourseType'
                }
            ],
        },
        {
            xtype: 'form',
            title: 'Course Type Form',
            bodyPadding: 5,
            width: '30%',
            layout: 'anchor',
            defaultType: 'textfield',
            defaults: {
                anchor: '100%'
            },
            items: [
                {
                    fieldLabel: 'Course Type ID',
                    bind: '{courseTypeId}',
                    allowBlank: true,
                    readOnly: true
                },
                {
                    fieldLabel: 'Course Type Name',
                    bind: '{courseTypeName}',
                    allowBlank: false
                },
                {
                    fieldLabel: 'Course Type Code',
                    bind: '{courseTypeCode}',
                    allowBlank: true
                },
                {
                    fieldLabel: 'Description',
                    xtype: 'textarea',
                    bind: '{courseTypeDescription}',
                    allowBlank: true
                }
            ],
            buttons: [
                {
                    text: 'Reset',
                    iconCls: 'x-fa fas fa-refresh',
                    handler: function () {
                        this.up('form').getForm().reset();
                    }
                },
                {
                    text: 'Save ',
                    iconCls: 'x-fa fas fa-save',
                    formBind: true,
                    handler: 'onCourseTypeSave'
                }
            ],
        }
    ]
});
