Ext.define('TimeTableApp.view.faculty.facultyController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.faculty-faculty',
    onAfterRender: async function(){
        this.loadAllGridData();
    },

    loadAllGridData: async function () {
        let allList = this.lookupReference('grdallFaculties');
        let response = await Ext.Ajax.request({ url: 'resources/routes/faculty/list.php', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records.data });
            allList.setStore(store);
            store.load();
        }
    }

});
