
    function saveData(rawData) {
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
    }