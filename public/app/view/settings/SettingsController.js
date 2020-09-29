Ext.define('TimeTableApp.view.settings.SettingsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.settings-settings',
    onAfterSettingsLoad:async function () {
        this.loadAllGridData();
        this.loadWeekGridData();
    },
    onSsessionSave: async function () {
        let data = this.getViewModel().getData();
        this.saveData(data);
        this.loadAllGridData();
    },
    onWeekDaySave: async function () {
        let data = this.getViewModel().getData();
        this.saveWeekData(data);
        this.loadWeekGridData();
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
        console.log(rawData);
        let data = this.cleanupData(rawData);
        let response = await Ext.Ajax.request({
            url: '/addSsession',
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            params: JSON.stringify(data)
        });

        if (response.responseText) {
            let result = JSON.parse(response.responseText);
            if (result.status === 'OK') {
                Ext.Msg.alert('Faculty Of Science TimeTable Application', 'Data has been successfully saved');
                let parent = form.up('window');
                if (parent) {
                    parent.destroy();
                }
            }
        }
    },

    saveWeekData: async function (rawData) {
        let form = this.getView();
        let data = this.cleanupData(rawData);
        let response = await Ext.Ajax.request({
            url: '/addDay',
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            params: JSON.stringify(data)
        });

        if (response.responseText) {
            let result = JSON.parse(response.responseText);
            if (result.status === 'OK') {
                Ext.Msg.alert('Faculty Of Science TimeTable Application', 'Data has been successfully saved');
                let parent = form.up('window');
                if (parent) {
                    parent.destroy();
                }
            }
        }
    },
    
    
    loadAllGridData: async function () {        
        let allList = this.lookupReference('grdallSsessions');
        let response = await Ext.Ajax.request({ url: '/allSsession', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records });
            allList.setStore(store);
            store.load();
        }
    },
    loadWeekGridData: async function () {        
        let allList = this.lookupReference('grdAllDays');
        let response = await Ext.Ajax.request({ url: '/allWeekDays', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records });
            allList.setStore(store);
            store.load();
        }
    },
});
