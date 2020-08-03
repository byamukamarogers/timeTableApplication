Ext.define('TimeTableApp.view.faculty.facultyController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.faculty-faculty',
    onAfterRender: async function(){
        this.loadAllGridData();
    },

    loadAllGridData: async function () {
        let allList = this.lookupReference('grdallFaculties');
        let response = await Ext.Ajax.request({ url: '/faculties', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText); 
            var cleanRecords = [];
            for(var i = 0; i < records.length; i++){
                var singleRecord = records[i];
                singleRecord["InstitutionName"] = singleRecord.Institution.InstitutionName;
                delete singleRecord.Institution;
                cleanRecords.push(singleRecord);
            }
            let store = Ext.create('Ext.data.Store', { data: cleanRecords });
            allList.setStore(store);
            store.load();
        }
    }

});
