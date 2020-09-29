Ext.define('TimeTableApp.view.room.roomListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.room-roomlist',
    onAfterRoomLoad: async function () {
        this.loadAllGridData();
    },
    onAddRoomTypeSubmitClicked: async function () {

        let frm = Ext.create({ xtype: 'roomTypes' });
        let win = Ext.create('Ext.window.Window', {
            title: 'Room Types',
            width: '60%',
            closable: true,
            items: [frm]
        });
        win.show();

    },

    loadAllGridData: async function () {
        let allList = this.lookupReference('grdallRooms');
        let response = await Ext.Ajax.request({ url: '/rooms', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            var cleanRecords = [];
            for (var i = 0; i < records.length; i++) {
                var singleRecord = records[i];
                singleRecord["facultyName"] = singleRecord.Faculty.facultyName;
                delete singleRecord.Faculty;
                cleanRecords.push(singleRecord);
            }
            let store = Ext.create('Ext.data.Store', { data: cleanRecords });
            allList.setStore(store);
            store.load();
        }
    },
    // pasted here

    onAdd: function (button, e, options) {
        this.createAddDialog();
    },

    onEdit: function (button) {
        this.createDialog(button.getWidgetRecord());
    },

    onCancel: function (button, e, options) {
        var me = this;
        me.dialog = Ext.destroy(me.dialog);
    },

    onDelete: function (button, e, options) {
        var record = button.getWidgetRecord();
        Ext.Msg.show({
            title: 'Delete?',
            msg: 'Are you sure you want to delete?',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (buttonId) {
                if (buttonId == 'yes') {
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
    createAddDialog: function () {        
        let win = Ext.create('Ext.window.Window', {
            title: 'Add Lecture Room',          
            closable: true,
            items: [{
                xtype: 'roomView',
            }]
        });
        win.show();
    }


});
