Ext.define('TimeTableApp.view.duration.durationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.duration-duration',
    onAfterRender: async function(){
        this.loadAllGridData();
    },
    loadAllGridData: async function () {
        let allList = this.lookupReference('grdallSessions');
        let response = await Ext.Ajax.request({ url: 'resources/routes/session/list.php', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records.data });
            allList.setStore(store);
            store.load();
        }
    },
    onGridRefresh: async function(){
        this.loadAllGridData();
    }


});
