Ext.define('TimeTableApp.view.faculty.facultyController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.faculty-faculty',
    onAfterFacultyLoad: async function(){
        this.loadInstitutionNames();
        this.loadAllGridData();
    },

    loadInstitutionNames: async function () {
        let combo = this.lookupReference('cboInstitutionName');
        let response = await Ext.Ajax.request({ url: '/institution', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records });
            combo.setStore(store);
            store.load();
        }
    },
    onFacultySubmitClicked: async function () {
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
            url: '/addFaculty',
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