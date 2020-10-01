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
    },
    onEditCourse: async function(){
        let selection = this.lookupReference("grdallCourses").getSelection()
        if(selection.length> 0 ){
            let data = selection[0].data;
            Ext.create('Ext.window.Window', {
                title: 'COURSE REGISTRATION FORM',
                iconCls: 'x-fa fa-edit',
                width: '80%',
                bodyPadding: 5,
                modal: true,
                items: [
                    {
                        header: false,
                        xtype: 'courseForm',
                        formData: data
                    }
                ]
            }).show();
        } else {
            Ext.Msg.alert('Error', 'Please select a Course unit');
        }
    }


});
