
Ext.define('TimeTableApp.view.structure.structure', {
    extend: 'Ext.panel.Panel',
    xtype: 'ttStructure',

    requires: [
        'TimeTableApp.view.structure.structureController',
        'TimeTableApp.view.structure.structureModel',
        'TimeTableApp.view.structure.ChooseClass',
        'Ext.grid.*',
        'Ext.data.*',
        'Ext.dd.*',
        'Ext.ux.CellDragDrop',
    ],

    controller: 'structure-structure',
    viewModel: {
        type: 'structure-structure'
    },
    listeners: {
        afterrender: 'onAfterRender',
    },
    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            margin: '3 0 0 0',
            items: [

                {
                    margin: '0 3 0 0',
                    bodyPadding: '5 0',
                    width: '100%',
                    scrollable: true,
                    style: 'white-space: normal;',
                    defaults: {
                        anchor: '100%'
                    },
                    xtype: 'grid',
                    id: 'ttgrid',
                    title: 'BIS III DAY SEM 2 TIME TABLE 2019/2020',

                    headerWrap: true,
                    cellWrap: true,
                    cls: 'ttHeaderWrap',
                    columns: [
                        {
                            text: 'DAY', dataIndex: 'name',
                            renderer: function (value, metaData) {
                                metaData.tdAttr = 'rowspan="1"';
                                metaData.tdAttr = 'data-qtip=' + value;
                                return value;
                            }
                        },
                        { text: '8:00AM', dataIndex: 'courseUnit', flex: 1, cellWrap: true, type: 'string' },
                        { text: '9:00AM', dataIndex: 'courseUnit', flex: 1, cls: 'ttHeaderWrap', type: 'string' },
                        { text: '10:00AM', dataIndex: 'courseUnit', flex: 1, cellWrap: true, type: 'string' },
                        { text: '11:00AM', dataIndex: 'courseUnit', flex: 1, cellWrap: true, type: 'string' },
                        { text: '12:00AM', dataIndex: '', flex: 1, cellWrap: true, type: 'string' },
                        { text: '13:00AM', dataIndex: '', flex: 1, cellWrap: true, type: 'string' },
                        { text: '14:00AM', dataIndex: 'courseUnit', flex: 1, cellWrap: true, type: 'string' },
                        { text: '15:00AM', dataIndex: 'courseUnit', flex: 1, cellWrap: true, type: 'string' },
                        { text: '16:00AM', dataIndex: 'courseUnit', flex: 1, cellWrap: true, type: 'string' },
                    ],
                    store: {
                        data: [
                            { name: 'Monday', courseUnit: 'lisa@ simpsons. com', module: 'Course Lecturer. Room' },
                            {  courseUnit: 'bart@ simpsons. com', type: 'string' },
                            { name: 'Wednesday', courseUnit: 'homer @simpsons. com', type: 'string' },
                            { name: 'Thursday', courseUnit: 'marge@ simpsons. com', type: 'string' },
                            { name: 'Friday', courseUnit: 'marge@ simpsons. com', type: 'string' },
                            { name: 'Saturday', courseUnit: 'marge@ simpsons. com', type: 'string' },
                            { name: 'Sunday', courseUnit: 'marge@ simpsons. com', type: 'string' },
                        ]
                    }
                }
            ]
        }
    ]
});
