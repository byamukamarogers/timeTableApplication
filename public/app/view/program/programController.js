Ext.define('TimeTableApp.view.program.programController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.program-program',
    onGridSearch: async function(field, e){
        var val = field.getValue();
        let allList = this.lookupReference('grdallPrograms').getStore();
        allList.filter([
            {
                property : 'programname',
                value    : val
            },
            {
                property : 'duration',
                value    : val
            },
            {
                property : 'departmentname',
                value    : val
            }
        ]);

    },
    onAfterRender: async function(){
        this.loadAllGridData();
    },

    loadAllGridData: async function () {
        let allList = this.lookupReference('grdallPrograms');
        let response = await Ext.Ajax.request({ url: 'resources/routes/program/list.php', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records.data });
            allList.setStore(store);
            store.load();
        }
    },

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?'+record, 'onConfirm', this);
    },

});
