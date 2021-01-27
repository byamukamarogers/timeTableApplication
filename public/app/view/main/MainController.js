/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TimeTableApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    onAfterRender: function(){
        this.getViewModel().setData({ fullName: localStorage.fullname.toUpperCase() });
    },
    
    onStructureSelected: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype:'designView', autoShow: true
        });
    },
    onTestSelected: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype: 'ttStructure', autoShow: true
        });
    },
    onAddClassSelected: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype: 'newClassForm', autoShow: true
        });
    },
    onViewClassesSelected: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype: 'lectureClass', autoShow: true
        });
    },
    onAddRoom: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype: 'roomForm', autoShow: true
        });
    },
    onViewRooms: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype: 'roomViewlist', autoShow: true
        });
    },
    onAddDuration: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype: 'durationForm', autoShow: true
        });
    },
    onViewDurations: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype: 'durationView', autoShow: true
        });
    },
    onAddCourse: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype: 'courseForm', autoShow: true
        });
    },
    onCourseTypesSelected: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype: 'courseTypes', autoShow: true
        });
    },
    onViewCourses: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype: 'courseView', autoShow: true
        });
    },
    onAddProgram: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype: 'programForm', autoShow: true
        });
    },
    onViewProgram: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype:'programView', autoShow: true
        });
    },
    onAddStaff: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype: 'staffForm',autoShow: true
        });
    },
    onViewStaff: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype: 'staffView', autoShow: true
        });
    },
    onAddDepartment: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype: 'departmentForm',autoShow: true
        });
    },
    onViewDepartment: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype: 'departmentView',autoShow: true
        });
    },
    onAddFaculty: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype: 'facultyForm',autoShow: true
        });
    },
    onViewFaculty: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype:'facultyView',autoShow: true
        });
    },
    onAddInstitution: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype:'institutionForm', autoShow: true
        });
    },
    onViewInstitutions: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype:'institutionView',autoShow: true
        });
    },




    onLogoutClick: function () {
        // Remove the localStorage key/value
        localStorage.removeItem('TimeTableLoggedIn');
        localStorage.removeItem('staffid');
        localStorage.removeItem('fullname');        
        let login = Ext.ComponentQuery.query('#loginWindowHidden');
        if(login){
            Ext.getCmp('login-dialog').destroy();
        }
        // Remove Main View
        this.getView().destroy();
        // Add the Login Window
        Ext.create({xtype: 'login-dialog'});
    }
});
