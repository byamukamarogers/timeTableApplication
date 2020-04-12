Ext.define('TimeTableApp.view.design.designController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.design-design',
    onRSubmitClicked: async function(){        
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },
    onAfterDesignLoad: async function () {
        this.loadAllCourseGridData();
        this.loadAllStaffGridData();
    },
    loadAllCourseGridData: async function () {
        let allList = this.lookupReference('grdallCourses');
        let response = await Ext.Ajax.request({ url: '/courseunits', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            var cleanRecords = [];
            for(var i = 0; i < records.length; i++){
                var singleRecord = records[i];
                singleRecord["programName"] = singleRecord.Program.programName;
                delete singleRecord.Program;
                cleanRecords.push(singleRecord);
            }
            let store = Ext.create('Ext.data.Store', { data: cleanRecords });
            allList.setStore(store);
            store.load();
        }
    },
    loadAllStaffGridData: async function () {
        let allList = this.lookupReference('grdallStaff');
        let response = await Ext.Ajax.request({ url: '/staff', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            var cleanRecords = [];
            for(var i = 0; i < records.length; i++){
                var singleRecord = records[i];
                singleRecord["departmentName"] = singleRecord.Department.departmentName;
                delete singleRecord.Department;
                cleanRecords.push(singleRecord);
            }
            let store = Ext.create('Ext.data.Store', { data: cleanRecords });
            allList.setStore(store);
            store.load();
        }
    }

});
