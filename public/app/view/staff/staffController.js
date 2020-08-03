Ext.define('TimeTableApp.view.staff.staffController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.staff-staff',

    onAfterRender: async function(){
        this.loadStaffGridData();

    },
    loadStaffGridData: async function () {
        let allList = this.lookupReference('grdallStaff');
        let response = await Ext.Ajax.request({ url: '/staff', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            var cleanRecords = [];
            for(var i = 0; i < records.length; i++){
                var singleRecord = records[i];
                singleRecord["departmentName"] = singleRecord.Department.departmentName;
                delete singleRecord.Department;
                cleanRecords.push(singleRecord);
            }
            let store = Ext.create('Ext.data.Store', { data: cleanRecords });
            allList.setStore(store);
            store.load();
        }
    }


});
