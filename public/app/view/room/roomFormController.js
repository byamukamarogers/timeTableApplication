Ext.define('TimeTableApp.view.room.roomFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.room-roomform',
    onAfterRender: async function(){
        let data = this.getView().formData;
        if(data){
            this.getViewModel().setData(data);
        }
        this.loadFacultyNames();
        this.loadRoomTypeNames();
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

    loadRoomTypeNames: async function () {
        let combo = this.lookupReference('cboRoomTypeName');
        let response = await Ext.Ajax.request({ url: '/roomtypes', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records });
            combo.setStore(store);
            store.load();
        }
    },
    loadFacultyNames: async function () {
        let combo = this.lookupReference('cboFacultyName');
        let response = await Ext.Ajax.request({ url: '/faculties', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records });
            combo.setStore(store);
            store.load();
        }
    },
    onRoomSubmitClicked: async function () {
        let data = this.getViewModel().getData();
        this.saveData(data);
    },

    cleanupData: function (rawData) {
        let data = {};
        for (let key in rawData) {
            let type = typeof rawData[key]
            if (['string', 'number', 'date'].includes(type)) {
                data[key] = rawData[key];
            }
        }
        return data;
    },

    saveData: async function (rawData) {
        let form = this.getView();
        let data = this.cleanupData(rawData);
        let response = await Ext.Ajax.request({
            url: '/addRoom',
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            params: JSON.stringify(data)
        });

        if (response.responseText) {
            let result = JSON.parse(response.responseText);
            if (result.status === 'OK') {
                Ext.Msg.alert('FOS TimeTable Application', 'Data has been successfully saved');
                let parent = form.up('window');
                if (parent) {
                    parent.destroy();
                }
            }
        }
    },

});
