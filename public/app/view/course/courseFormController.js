Ext.define('TimeTableApp.view.course.courseFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.course-courseform',
    onAfterRender: async function(){
        let data = this.getView().formData;
        if(data){
            this.getViewModel().setData(data);
        }
        this.loadProgramNames();
        this.loadStaffGridData();
        this.loadCourseTypescmbo();
    },

    loadProgramNames: async function () {
        let combo = this.lookupReference('cboProgramName');
        let response = await Ext.Ajax.request({ url: 'resources/routes/program/list.php', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records.data });
            combo.setStore(store);
            store.load();
        }
    },
    onCourseUnitSubmitClicked: async function () {
        let data = this.cleanupData(this.getViewModel().getData());
        let record = {}
        record.data = data;
        this.saveData(record);
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
        let data = rawData;  
        let response = await Ext.Ajax.request({
            url: 'resources/routes/course/create.php',
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            params: JSON.stringify(data)
        });
        
        if (response.responseText) {
            let result = JSON.parse(response.responseText);
            if (result.status === 'OK') {
                Ext.Msg.alert('TimeTable Application', 'Data has been successfully saved');
                let parent = form.up('window');
                if (parent) {
                    parent.destroy();
                }
            }
        }
    },
    
    loadStaffGridData: async function () {
        let allList = this.lookupReference('cmboStaffList');
        let response = await Ext.Ajax.request({ url: 'resources/routes/staff/list.php', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records.data });
            allList.setStore(store);
            store.load();
        }
    },
    
    loadCourseTypescmbo: async function () {
        let allList = this.lookupReference('cmboCourseTypes');
        let response = await Ext.Ajax.request({ url: 'resources/routes/coursetype/list.php', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records.data });
            allList.setStore(store);
            store.load();
        }
    },
    onAddCourseType: async function(){
        
    }

});
