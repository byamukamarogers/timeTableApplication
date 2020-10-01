Ext.define('TimeTableApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'TimeTableApp.view.main.MainController',
        'TimeTableApp.view.main.MainModel',
        'TimeTableApp.view.main.List',
        'TimeTableApp.view.tests.Test',
        'TimeTableApp.view.class.newClass',
        'TimeTableApp.view.staticData.Actors',
        'TimeTableApp.view.util.base.Grid',
        'TimeTableApp.view.room.roomList',
        'TimeTableApp.view.settings.Settings',
        'TimeTableApp.view.*',

        //new ordering
        'TimeTableApp.view.modules.Menu',
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
            headerPosition: 'top'
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
        title: '',
    items: [         
        {
            title: 'Test ABC',
            iconCls: 'x-fa fa-users',
            //xtype: 'testGrid',
            xtype: 'timeTable',
        },
        {
            title: 'Structure',
            iconCls: 'x-fa fa-user',
            xtype: 'ttStructure'
        },   
        {
            title: 'Modules',
            iconCls: 'x-fa fa-home',
            margin: '2 1 1 1',

            layout: {
                type: 'border'
            },

            id: 'modulesCentralPanel',
            items: [
                 {
                    region: 'center',
                    title:'Time Table Modules',

                },
                {
                    xtype: 'modulesmainmenu',
                    region: 'west',
                    plugins: 'responsive',
                    responsiveConfig: {
                        'width < 768 && tall': {
                            visible: false
                        },
                        'width >= 768': {
                            visible: true
                        }
                    }
                } 
            ],

        },
        {
            title: 'Design View',
            iconCls: 'x-fa fa-home',
            xtype:'designView',
        },
        {
            title: 'Modules',
            iconCls: 'x-fa fa-user',
            xtype: 'allModules'
        },
        {
            title: 'Settings',
            iconCls: 'x-fa fa-users',
            xtype: 'settings',
        },
    ] 
});
