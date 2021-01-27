Ext.define('TimeTableApp.view.department.departmentController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.department-department',
    onAfterRender: async function(){
        this.loadAllGridData();
    },
    loadAllGridData: async function () {
        let allList = this.lookupReference('grdallDepartments');
        let response = await Ext.Ajax.request({ url: 'resources/routes/department/list.php', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records.data });
            allList.setStore(store);
            store.load();
        }
    }

});
