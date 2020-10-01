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
            let store = Ext.create('Ext.data.Store', { data: records});
            allList.setStore(store);
            store.load();
        }
    },
    
    onEditRoom: async function () {
        let selection = this.lookupReference("grdallRooms").getSelection();
        if (selection.length > 0 ) {
            let data = selection[0].data;
            Ext.create('Ext.window.Window', {
                title: 'ROOM FORM',
                iconCls: 'x-fa fa-edit',
                width: '80%',
                bodyPadding: 5,
                modal: true,
                items: [
                    {
                        header: false,
                        xtype: 'roomForm',
                        formData: data
                    }
                ]
            }).show();
        
        } else {
            Ext.Msg.alert('Error', 'Please select a room to edit');
        }
    }


});
