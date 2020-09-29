Ext.define('TimeTableApp.view.institution.institutionFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.institution-institutionform',
    onAfterRender: async function () {

    },

    onInstitutionSubmitClicked: async function () {
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
            url: '/addInstitution',
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            params: JSON.stringify(data)
        });
        
        if (response.responseText) {
            let result = JSON.parse(response.responseText);
            if (result.status === 'OK') {
                Ext.Msg.alert('FOS Time Table', 'Data has been successfully saved');
                let parent = form.up('window');
                if (parent) {
                    parent.destroy();
                }
            }
            
        }
    },

});
