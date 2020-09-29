Ext.define('TimeTableApp.view.util.base.GridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.util-base-grid',
    requires: [
        'TimeTableApp.view.util.base.Util',
    ],

    onAdd: function(button, e, options){
        this.createDialog(null);
    },

    onEdit: function(button){
        this.createDialog(button.getWidgetRecord());
    },

    onCancel: function(button, e, options){
        var me = this;
        me.dialog = Ext.destroy(me.dialog);
    },

    onDelete: function(button, e, options){
        var record = button.getWidgetRecord();
        Ext.Msg.show({
            title:'Delete?',
            msg: 'Are you sure you want to delete?',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (buttonId){
                if (buttonId == 'yes'){
                    record.drop();
                }
            }
        });
    },

    viewSessionChanges: function () {
        var changes = this.getView().getSession().getChanges();
        if (changes !== null) {
            new Ext.window.Window({
                autoShow: true,
                title: 'Session Changes',
                modal: true,
                width: 600,
                height: 400,
                layout: 'fit',
                items: {
                    xtype: 'textarea',
                    value: JSON.stringify(changes, null, 4)
                }
            });
        } else {
            Ext.Msg.alert('No Changes', 'There are no changes to the session.');
        }
    },
    createDialog: function(record){
        
            let frm = Ext.create({xtype: 'roomView',});
            let win = Ext.create('Ext.window.Window', {
                    //title:'Add Lecture Room',
                    closable:true,
                    viewModel: {
                        data: {
                            //title: 'Edit',
                            title: record ? 'Edit: ' + record.get('title') : 'Add Film',
                            iconCls: record ? 'x-fa fa-edit' : 'x-fa fa-add' 
                        },
                    },
                    items:[frm]
            });
            win.show();
        

        /* var me = this,
            view = me.getView();

        //me.isEdit = !!record;
        me.dialog = view.add({
            xtype: 'roomView',
            viewModel: {
                data: {
                    title: 'Edit',
                    /* title: record ? 'Edit: ' + record.get('title') : 'Add Film',
                    iconCls: record ? 'x-fa fa-edit' : 'x-fa fa-add' 
                },
                /* links: {
                    currentFilm: record || {
                        type: 'Film',
                        create: true
                    }
                } 
            },
            session: true //child session
        });

        me.dialog.show(); */
    }

});
