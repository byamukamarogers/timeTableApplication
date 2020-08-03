Ext.define('TimeTableApp.view.structure.structureController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.structure-structure',
    onAfterRender: async function(){
        //this.loadRoomListCmbo();
    },
    
    loadRoomListCmbo: async function () {
        let allList = this.lookupReference('cmboRoomList');
        let response = await Ext.Ajax.request({ url: '/rooms', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            var cleanRecords = [];
            for (var i = 0; i < records.length; i++) {
                var singleRecord = records[i];
                singleRecord["facultyName"] = singleRecord.Faculty.facultyName;
                delete singleRecord.Faculty;
                cleanRecords.push(singleRecord);
            }
            let store = Ext.create('Ext.data.Store', { data: cleanRecords });
            allList.setStore(store);
            store.load();
        }
    },

});
