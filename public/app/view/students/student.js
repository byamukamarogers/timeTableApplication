
Ext.define('TimeTableApp.view.students.student',{
    extend: 'Ext.panel.Panel',

    requires: [
        'TimeTableApp.view.students.studentController',
        'TimeTableApp.view.students.studentModel'
    ],

    controller: 'students-student',
    viewModel: {
        type: 'students-student'
    },

    html: 'Hello, World!!'
});
