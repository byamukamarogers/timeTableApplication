Ext.define('TimeTableApp.view.department.departmentController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.department-department',
    onAfterRender: async function(){
        this.loadAllGridData();
    },
    loadAllGridData: async function () {
        let allList = this.lookupReference('grdallDepartments');
        let response = await Ext.Ajax.request({ url: '/departments', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            var cleanRecords = [];
            for(var i = 0; i < records.length; i++){
                var singleRecord = records[i];
                singleRecord["facultyName"] = singleRecord.Faculty.facultyName;
                delete singleRecord.Faculty;
                cleanRecords.push(singleRecord);
            }
            let store = Ext.create('Ext.data.Store', { data: cleanRecords });
            allList.setStore(store);
            store.load();
        }
    }

});
