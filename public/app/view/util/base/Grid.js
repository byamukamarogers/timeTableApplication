
Ext.define('TimeTableApp.view.util.base.Grid', {    
    extend: 'Ext.ux.LiveSearchGridPanel',
    xtype: 'baseGrid',
    /* requires: [
        'TimeTableApp.view.util.base.GridController',
        'TimeTableApp.view.util.base.GridModel'
    ],

    controller: 'util-base-grid', 
    viewModel: {
        type: 'util-base-grid'
    },*/
    viewConfig: {
        stripeRows: true
    }, 
    initComponent: function(){
        
        this.dockedItems = [
            {
                xtype: 'toolbar',
                dock: 'top',
                itemId: 'topToolbar',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'add',
                        text: 'Add',
                        iconCls: 'x-fa fa-plus',
                        handler: 'onAdd'
                    },
                    {
                        xtype: 'tbseparator'
                    },
                    {
                        xtype: 'button',
                        itemId: 'save',
                        text: 'Save Changes',
                        iconCls: 'x-fa fa-save',
                    },
                    {
                        xtype: 'button',
                        itemId: 'cancel',
                        text: 'Cancel Changes',
                        iconCls: 'x-fa fa-undo',
                    },
                    {
                        xtype: 'tbseparator'
                    },
                    {
                        xtype: 'button',
                        itemId: 'clearFilter',
                        text: 'Clear Filters',
                        iconCls: 'x-fa fa-filter',
                    }
                ]
            }
        ];
        
        this.columns = Ext.Array.merge(
            this.columns,
            [
            {
                xtype: 'widgetcolumn',
                width: 50,
                sortable: false,
                menuDisabled: true,
                widget: {
                    xtype: 'button',
                    iconCls: 'x-fa fa-edit',
                    tooltip: 'Edit',
                    handler: 'onEdit'
                }
            },
            {
                xtype: 'widgetcolumn',
                width: 50,
                sortable: false,
                menuDisabled: true,
                widget: {
                    xtype: 'button',
                    iconCls: 'x-fa fa-remove',
                    tooltip: 'Delete',
                    handler: 'onDelete'
                }
                }
        ]);
       this.callParent(arguments);
    },
});
