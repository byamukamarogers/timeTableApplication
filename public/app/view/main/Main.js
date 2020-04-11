Ext.define('TimeTableApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'TimeTableApp.view.main.MainController',
        'TimeTableApp.view.main.MainModel',
        'TimeTableApp.view.main.List',
        'TimeTableApp.view.tests.Test'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretch'
        },
        title: {
            bind: {
                text: 'TT - APP'
            },
            flex: 0
        }
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'left',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: '0 5 5 5',
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 60
                }
            }
        }
    },
    items: [
        {
            title: 'Design View',
            iconCls: 'x-fa fa-home',
            xtype:'designView',
        },
        {
            title: 'Structure',
            iconCls: 'x-fa fa-user',
            xtype: 'ttStructure'
        },
        {
            title: 'Modules',
            iconCls: 'x-fa fa-user',
            xtype: 'allModules'
        },
        {
            title: 'User View',
            iconCls: 'x-fa fa-user',
            xtype:'roomView',
        },
        {
            title: 'Testing',
            iconCls: 'x-fa fa-users',
            xtype: 'testGrid',
        },
        {
            title: 'Testing',
            iconCls: 'x-fa fa-users',
            //xtype: 'recipient-panel',
        }
    ]
});
