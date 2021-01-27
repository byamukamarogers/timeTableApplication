Ext.define('TimeTableApp.view.duration.durationFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.duration-durationform',
    onAfterRender: async function(){
        let data = this.getView().formData;
        if(data){
            this.getViewModel().setData(data)
        }
    },
    
    onDurationSubmitClicked: async function () {
        let data = this.cleanupData(this.getViewModel().getData());
        let record = {};
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
            url: 'resources/routes/session/create.php',
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            params: JSON.stringify(data)
        });
        
        if (response.responseText) {
            let result = JSON.parse(response.responseText);
            if (result.status === 'OK') {
                Ext.Msg.alert('TimeTable Application', 'Data successfully saved',);
                let parent = form.up('window');
                if (parent) {
                    parent.destroy();
                }
            }
        }
    }

});
