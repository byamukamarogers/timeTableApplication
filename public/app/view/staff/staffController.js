Ext.define('TimeTableApp.view.staff.staffController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.staff-staff',
   /*  requires:[
        'resources.Utils.Utils',
    ], */
    onStaffLoad: async function(){
        this.loadDepartmentNames();
        this.loadAllGridData();

    },

    loadDepartmentNames: async function () {
        let combo = this.lookupReference('cboDepartmentName');
        let response = await Ext.Ajax.request({ url: '/departments', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records });
            combo.setStore(store);
            store.load();
        }
    },
    onStaffSubmitClicked: async function () {
        let data = this.getViewModel().getData();
        this.saveData(data);
        this.loadAllGridData();
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
        let data = this.cleanupData(rawData);  
        let response = await Ext.Ajax.request({
            url: '/addStaff',
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            params: JSON.stringify(data)
        });
        
        if (response.responseText) {
            let result = JSON.parse(response.responseText);
            if (result.status === 'OK') {
                Ext.Msg.alert('Faculty Of Science TimeTable Application', 'Data has been successfully saved',);
                let parent = form.up('window');
                if (parent) {
                    parent.destroy();
                }
            }
        }
    },
    loadAllGridData: async function () {
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
