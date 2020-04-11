Ext.define('TimeTableApp.view.course.courseController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.course-course',
    onAfterCourseUnitLoad: async function(){
        this.loadProgramNames();
        this.loadAllGridData();
    },

    loadProgramNames: async function () {
        let combo = this.lookupReference('cboProgramName');
        let response = await Ext.Ajax.request({ url: '/programs', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records });
            combo.setStore(store);
            store.load();
        }
    },
    onCourseUnitSubmitClicked: async function () {
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
            url: '/addCourseUnit',
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
        let allList = this.lookupReference('grdallCourses');
        let response = await Ext.Ajax.request({ url: '/courseunits', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            var cleanRecords = [];
            for(var i = 0; i < records.length; i++){
                var singleRecord = records[i];
                singleRecord["programName"] = singleRecord.Program.programName;
                delete singleRecord.Program;
                cleanRecords.push(singleRecord);
            }
            let store = Ext.create('Ext.data.Store', { data: cleanRecords });
            allList.setStore(store);
            store.load();
        }
    }


});
