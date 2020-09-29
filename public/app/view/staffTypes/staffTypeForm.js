
Ext.define('TimeTableApp.view.staffTypes.staffTypeForm',{
    extend: 'Ext.panel.Panel',

    requires: [
        'TimeTableApp.view.staffTypes.staffTypeFormController',
        'TimeTableApp.view.staffTypes.staffTypeFormModel'
    ],

    controller: 'stafftypes-stafftypeform',
    viewModel: {
        type: 'stafftypes-stafftypeform'
    },

    html: 'Hello, World!!'
});
