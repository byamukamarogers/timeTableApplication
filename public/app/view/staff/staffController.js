Ext.define('TimeTableApp.view.staff.staffController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.staff-staff',

    onAfterRender: async function(){
        this.loadStaffGridData();

    },
    loadStaffGridData: async function () {
        let allList = this.lookupReference('grdallStaff');
        let response = await Ext.Ajax.request({ url: 'resources/routes/staff/list.php', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records.data });
            allList.setStore(store);
            store.load();
        }
    }


});
