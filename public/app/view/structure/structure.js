
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
                    width: '80%',
                    scrollable: true,
                    layout: 'anchor',
                    style: 'white-space: normal;',
                    defaults: {
                        anchor: '100%'
                    },
                    extend: 'Ext.grid.Panel',
                    xtype: 'grid',
                    id: 'ttgrid',
                    title: 'BIS III DAY SEM 2 TIME TABLE 2019/2020',

                    headerWrap: true,
                    cellWrap: true,
                    cls: 'ttHeaderWrap',

                    viewConfig: {
                        plugins: {
                            ptype: 'gridviewdragdrop',
                            dropGroup: 'firstGridDDGroup',
                            dropBackgroundColor: Ext.themeName === 'neptune' ? '#a4ce6c' : 'green',
                        },
                        listeners: {
                            drop: function (node, data, dropRec, dropPosition) {
                                var dropOn = dropRec ? ' ' + dropPosition + ' ' + dropRec.get('name') : ' on empty view';
                            }
                        }
                    },


                    columns: [
                        { text: 'DAY', dataIndex: 'name', },
                        { text: '8:00AM - 9:00AM', dataIndex: 'courseUnit', flex: 1, cellWrap: true, type: 'string' },
                        { text: '9:00AM - 10:00AM', dataIndex: 'courseUnit', flex: 1, cls: 'ttHeaderWrap', type: 'string' },
                        { text: '10:00AM - 11:00AM', dataIndex: 'courseUnit', flex: 1, cellWrap: true, type: 'string' },
                        { text: '11:00AM - 12:00PM', dataIndex: 'courseUnit', flex: 1, cellWrap: true, type: 'string' },
                        { text: '12:00AM - 13:00PM', dataIndex: '', flex: 1, cellWrap: true, type: 'string' },
                        { text: '13:00AM - 14:00PM', dataIndex: '', flex: 1, cellWrap: true, type: 'string' },
                        { text: '14:00AM - 15:00PM', dataIndex: 'courseUnit', flex: 1, cellWrap: true, type: 'string' },
                        { text: '15:00AM - 16:00PM', dataIndex: 'courseUnit', flex: 1, cellWrap: true, type: 'string' },
                        { text: '16:00AM - 17:00PM', dataIndex: 'courseUnit', flex: 1, cellWrap: true, type: 'string' },
                    ],
                    store: {
                        data: [
                            { name: 'Monday', courseUnit: 'lisa@ simpsons com', type: 'string' },
                            { name: 'Tuesday', courseUnit: 'bart@ simpsons. com', type: 'string' },
                            { name: 'Wednesday', courseUnit: 'homer @simpsons. com', type: 'string' },
                            { name: 'Thursday', courseUnit: 'marge@ simpsons. com', type: 'string' },
                            { name: 'Friday', courseUnit: 'marge@ simpsons. com', type: 'string' },
                            { name: 'Saturday', courseUnit: 'marge@ simpsons. com', type: 'string' },
                            { name: 'Sunday', courseUnit: 'marge@ simpsons. com', type: 'string' },
                        ]
                    }
                },
                {
                    margin: '0 0 0 0',
                    bodyPadding: '5 0',
                    width: '20%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    extend: 'Ext.grid.Panel',
                    xtype: 'grid',
                    title: 'Associations',
                    //reference: 'grdallRooms',
                    headerWrap: true,
                    viewConfig: {
                        plugins: {
                            ptype: 'gridviewdragdrop',
                            dragGroup: 'firstGridDDGroup',
                        },
                        listeners: {
                            drop: function (node, data, dropRec, dropPosition) {
                                var dropOn = dropRec ? ' ' + dropPosition + ' ' + dropRec.get('name') : ' on empty view';
                            }
                        }
                    },
                    plugins: [
                        {
                            ptype: 'cellediting',
                            clicksToEdit: 2,
                            pluginId: 'cellplugin'
                        },
                        {
                            ptype: 'gridfilters'
                        }
                    ],
                    columns: [
                        { text: 'Course Unit', dataIndex: 'name', },
                        { text: 'Lecturer', dataIndex: 'courseLecturer', flex: 1 },
                        {
                            text: 'Room',
                            dataIndex: 'room',
                            flex: 1,

                            editor: {
                                xtype: 'combobox',
                                allowBlank: false,
                                displayField: 'roomName',
                                valueField: 'roomId',
                                queryMode: 'local',
                                reference: 'cmboRoomList',
                                listeners: { afterrender: 'loadRoomListCmbo' },

                            },
                            /* renderer: function (value, metaData, record) {
                                let me = this.getView().lookupReference('cmboRoomList');                                
                                var roomStore = Ext.getStore(me);
                                var room = roomStore.findRecord('roomId', value);
                                return room != null ? room.get('roomName') : value;
                            }, */

                            filter: {
                                type: 'string'
                            }
                        },
                    ],
                    store: {
                        data: [
                            { name: 'SIS3201', courseLecturer: 'SJ', room: 'IICD UP' },
                            { name: 'SIS3202', courseLecturer: 'SR', room: 'S2.39' },
                            { name: 'SIS3203', courseLecturer: 'BM', room: 'S2.39' },
                            { name: 'SIS3204', courseLecturer: 'KBM', room: 'S2.40' },
                            { name: 'SIS3205', courseLecturer: 'Research', room: 'S2.37' },
                        ]
                    }
                },
            ],
        },
    ]
});
