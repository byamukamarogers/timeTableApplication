Ext.define('TimeTableApp.view.course.courseTypeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.course-coursetype', 
    onAfterRender: async function(){
        await this.loadCourseTypes();
    },
    loadCourseTypes: async function () {
        let combo = this.lookupReference('grdCourseTypes');
        let response = await Ext.Ajax.request({ url: '/loadCourseTypes', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records });
            combo.setStore(store);
            store.load();
        }
    },
    onEditCourseType: async function(){
        let selection = this.lookupReference("grdCourseTypes").getSelection();
        if(selection.length > 0){
            this.getViewModel().setData(selection[0].data);
        }
    },
    onCourseTypeSave: async function () {
        let data = this.getViewModel().getData();
        this.saveData(data);
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
            url: '/coursetype',
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            params: JSON.stringify(data)
        });
        
        if (response.responseText) {
            let result = JSON.parse(response.responseText);
            if (result.status === 'OK') {
                Ext.Msg.alert('FOS TimeTable Application', 'Data has been successfully saved');
                await this.loadCourseTypes();
                let parent = form.up('window');
                if (parent) {
                    parent.destroy();
                }
            }
        }
    }

});
