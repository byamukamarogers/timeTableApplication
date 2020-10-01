Ext.define('TimeTableApp.view.duration.durationFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.duration-durationform',
    onAfterRender: async function(){

    },
    
    onDurationSubmitClicked: async function () {
        let data = this.getViewModel().getData();
        console.log(data);
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
        let data = rawData;  
        let response = await Ext.Ajax.request({
            url: '/addSsession',
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
    onStartTimeSelect: async function (field, value, eOpts) {
        let formattedTime = Ext.Date.format(field.getValue(), 'g:i A');
        console.log(value.data.disp);
        let form = Ext.getCmp('durationForm');
        form.getViewModel().setData({
            from: formattedTime
        });
    },
    onEndTimeSelect: async function (field, value, eOpts) {
        let formattedTime = Ext.Date.format(field.getValue(), 'g:i A');
        let form = Ext.getCmp('durationForm');
        form.getViewModel().setData({
            to: formattedTime
        });
    },

});
