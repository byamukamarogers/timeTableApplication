Ext.define('TimeTableApp.view.course.courseController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.course-course',
    onAfterRender: async function(){
        this.loadCourseGrdData();
    },
    loadCourseGrdData: async function () {
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
    }


});
