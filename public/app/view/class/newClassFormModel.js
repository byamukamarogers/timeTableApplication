Ext.define('TimeTableApp.view.class.newClassFormModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.class-newclassform',
    data: {
        createdby: localStorage.staffid,
        iscourse: 0,
        courseid: 0
    }

});
