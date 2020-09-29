
Ext.define('TimeTableApp.view.roomTypes.RoomTypeForm',{
    extend: 'Ext.panel.Panel',

    requires: [
        'TimeTableApp.view.roomTypes.RoomTypeFormController',
        'TimeTableApp.view.roomTypes.RoomTypeFormModel'
    ],

    controller: 'roomtypes-roomtypeform',
    viewModel: {
        type: 'roomtypes-roomtypeform'
    },

    html: 'Hello, World!!'
});
