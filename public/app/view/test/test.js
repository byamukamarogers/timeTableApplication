
Ext.define('TimeTableApp.view.test.test', {
    extend: 'Ext.panel.Panel',
    xtype: 'testView',

    requires: [
        'TimeTableApp.view.test.testController',
        'TimeTableApp.view.test.testModel',
        //'Ext.ux.IFrameView'
    ],

    controller: 'test-test',
    viewModel: {
        type: 'test-test'
    },
    layout: 'hbox',
    items: [
        {
            title: 'Table Layout',
            xtype: 'component',
            width: '100%',
            height: '100%',
            html: '<iframe src="http://localhost/tt/example03/" height="100%" width="100%" title="Iframe Example"></iframe>',
        },
    ]
});
