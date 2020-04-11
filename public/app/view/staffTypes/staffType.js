
Ext.define('TimeTableApp.view.staffTypes.staffType',{
    extend: 'Ext.panel.Panel',

    requires: [
        'TimeTableApp.view.staffTypes.staffTypeController',
        'TimeTableApp.view.staffTypes.staffTypeModel'
    ],

    controller: 'stafftypes-stafftype',
    viewModel: {
        type: 'stafftypes-stafftype'
    },

});
