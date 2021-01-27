
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
    
    title: 'Time Table Design View',
    margin: '2 2 0 1',
    listeners: { afterrender: 'onAfterRender' },
    items: [
        {
            xtype: 'form',
            title: '',
            layout: 'hbox',
            bodyPadding: 15,
            items:[
                {
                    width: '30%',
                    xtype: 'combobox',
                    margin: 5,
                    labelAlign: 'top',
                    fieldLabel: 'Select Class',
                    reference: 'cmbLectureClasses',
                    displayField: 'classname',
                    valueField: 'classid',
                    bind:'{classid}',
                    allowBlank:false,
                    forceSelection:true
                },
                {
                    width: '30%',
                    xtype: 'combobox',
                    margin: 5,
                    bind:'{semesterid}',
                    labelAlign: 'top',
                    fieldLabel: 'Select Semester',
                    reference: 'cmbSemester',
                    displayField: 'name',
                    valueField: 'semesterid',
                    store: {
                        data:[
                            { semesterid: 1, name:'Semester One'},
                            { semesterid: 2, name:'Semester Two'}
                        ]
                    },
                    allowBlank:false,
                    forceSelection:true
                },
                {
                    width: '30%',
                    xtype: 'combobox',
                    labelAlign: 'top',
                    margin: 5,
                    bind:'{ssessionid}',
                    reference:'cmboSessions',
                    fieldLabel: 'Select Sssession',
                    displayField: 'ssessionName',
                    valueField: 'ssessionid',
                    allowBlank:false,
                    forceSelection:true
                }
            ],
            buttons:[
                {
                    text: 'EDIT',
                    formBind:true,
                    handler:'onEditTimeTable'
                }
            ]
        }
    ]
});
