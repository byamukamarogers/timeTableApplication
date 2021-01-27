/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'TimeTableApp',

    extend: 'TimeTableApp.Application',

    requires: [
        'TimeTableApp.view.main.Main',
        'TimeTableApp.view.auth.login.Login'
    ],

    launch: function () {
        // TODO - Launch the application
       
        var loggedIn;

        loggedIn = localStorage.getItem("TimeTableLoggedIn");
        
        Ext.create({
            xtype: loggedIn ? 'app-main' : 'login-dialog'
        });
    },

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    //mainView: 'TimeTableApp.view.auth.login.Login',
    //mainView: 'TimeTableApp.view.main.Main',
    //autoCreateViewport: false,
    //-------------------------------------------------------------------------
    // Most customizations should be made to TimeTableApp.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------


});
Ext.define('TimeTable.Globals', {
    singleton: true,
    currentUser: null,
    currency: null,
    cleanupData: function (rawData) {
        let data = {};
        for (let key in rawData) {
            let type = typeof rawData[key]
            if (!['object'].includes(type)) {
                data[key] = rawData[key];
            } else if (key.includes('date')) {
                data[key] = rawData[key]
            }
        }
        return data;
    }
});