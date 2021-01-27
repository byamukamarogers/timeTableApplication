Ext.define('TimeTableApp.view.institution.institutionController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.institution-institution',


    onAfterRender: async function () {
        this.loadAllGridData();
    },

    loadAllGridData: async function () {
        let allList = this.lookupReference('grdallUniversities');
        let response = await Ext.Ajax.request({ url: 'resources/routes/institution/list.php', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records.data });
            allList.setStore(store);
            store.load();
        }
    }

});
