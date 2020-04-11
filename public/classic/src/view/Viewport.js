Ext.define('TimeTableApp.view.Viewport', {
    extend: 'Ext.container.Viewport',
    id:'viewport',
    items:[
        {
            region:'north',
            xtype: 'app-main',
        },
        {
            region:'center',
            xtype:'tabpanel',
            activeTab:0,
            itemId:'viewport-target'
        },
        {
            region:'south',
            html: '<h1> Footer Label here </h1>'
        }
    ]
});