Ext.define('TimeTableApp.view.staff.staffFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.staff-staffform',
    onAfterRender: async function(){
        this.loadDepartmentNames();
    },

    loadDepartmentNames: async function () {
        let combo = this.lookupReference('cboDepartmentName');
        let response = await Ext.Ajax.request({ url: 'resources/routes/department/list.php', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records.data });
            combo.setStore(store);
            store.load();
        }
    },
    onStaffSubmitClicked: async function () {
        let data1 = this.getViewModel().getData();
        let data = this.cleanupData(data1);
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
            url: 'resources/routes/staff/create.php',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            params: JSON.stringify(data)
        });
        
        if (response.responseText) {
            let result = JSON.parse(response.responseText);
            if (result.status === 'OK') {
                Ext.Msg.alert('TimeTable App', 'Data has been successfully');
                let parent = form.up('window');
                if (parent) {
                    parent.destroy();
                }
            }
        }
    },

});
