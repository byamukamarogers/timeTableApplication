Ext.define('TimeTableApp.view.program.programController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.program-program',
    onGridSearch: async function(field, e){
        var val = field.getValue();
        let allList = this.lookupReference('grdallPrograms');
        let response = await Ext.Ajax.request({ url: '/programs/'+val, method: 'get' });
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

    },
    onAfterRender: async function(){
        this.loadAllGridData();
    },

    loadAllGridData: async function () {
        let allList = this.lookupReference('grdallPrograms');
        let response = await Ext.Ajax.request({ url: '/programs', method: 'get' });
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
    },

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?'+record, 'onConfirm', this);
    },

});
