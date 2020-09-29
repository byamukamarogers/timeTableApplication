Ext.define('TimeTableApp.view.class.newClassController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.class-newclass',
    onAfterRender: async function(){
        this.loadClassList();

    },    
    loadClassList: async function () {
        let allList = this.lookupReference('grdLectureClasses');
        let response = await Ext.Ajax.request({ url: '/loadLectureClasses', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records });
            allList.setStore(store);
            store.load();
        }
    },

});
