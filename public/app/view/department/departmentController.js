Ext.define('TimeTableApp.view.department.departmentController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.department-department',
    onAfterDepartmentLoad: async function(){
        this.loadFacultyNames();
        this.loadAllGridData();
    },

    loadFacultyNames: async function () {
        let combo = this.lookupReference('cboFacultyName');
        let response = await Ext.Ajax.request({ url: '/faculties', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records });
            combo.setStore(store);
            store.load();
        }
    },
    onDepartmentSubmitClicked: async function () {
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
            url: '/addDepartment',
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
