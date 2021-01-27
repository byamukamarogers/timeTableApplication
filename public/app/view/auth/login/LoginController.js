Ext.define('TimeTableApp.view.auth.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    requires: [
        'TimeTableApp.view.auth.login.CapsLockTooltip',
        'TimeTableApp.util.Util',
        'TimeTableApp.util.SessionMonitor',
        'Ext.ux.DataTip'
    ],

    onTextFieldSpecialKey: function(field, e, options){
        if (e.getKey() === e.ENTER) {
            this.doLogin();
        }
    },

    onTextFieldKeyPress: function(field, e, options){

        var charCode = e.getCharCode(),
            me = this;

        if((e.shiftKey && charCode >= 97 && charCode <= 122) ||
            (!e.shiftKey && charCode >= 65 && charCode <= 90)){

            if(me.capslockTooltip === undefined){
            
                var tip = Ext.create('Ext.tip.ToolTip', {
                    target: 'password',
                    html: 'CAPS Lock On'
                });
            }
            tip.show();
        } else {

            if(me.capslockTooltip !== undefined){
                me.capslockTooltip.hide();
            }
        }
    },

    onButtonClickCancel: function(button, e, options){
        this.lookupReference('form').reset();
    },

    onButtonClickSubmit: function(button, e, options){
        var me = this;

        if (me.lookupReference('form').isValid()){
           me.doLogin();
        }
    },

    doLogin: function() {

        var me = this,
            form = me.lookupReference('form');

        me.getView().mask('Authenticating... Please wait...');

        form.submit({
            clientValidation: true,
            url: 'resources/routes/security/login.php',
            scope: me,
            success: 'onLoginSuccess',
            failure: 'onLoginFailure'
        });
    },

    onLoginFailure: function(form, action) {

        this.getView().unmask();

        /*var result = TimeTableApp.util.Util.decodeJSON(action.response.responseText);

        switch (action.failureType) {
            case Ext.form.action.Action.CLIENT_INVALID:
                TimeTableApp.util.Util.showErrorMsg('Form fields may not be submitted with invalid values');
                break;
            case Ext.form.action.Action.CONNECT_FAILURE:
                TimeTableApp.util.Util.showErrorMsg(action.response.responseText);
                break;
            case Ext.form.action.Action.SERVER_INVALID:
                TimeTableApp.util.Util.showErrorMsg(result.msg);
        }*/

        //alternative to code above - reuse code
        TimeTableApp.util.Util.handleFormFailure(action);
    },

    onLoginSuccess: function(form, action) {
        let response = action.response;
        var view = this.getView();
        view.unmask();
        view.close();
        let record = JSON.parse(response.responseText);
        localStorage.setItem("TimeTableLoggedIn", true);
        localStorage.setItem("staffid", record.staffid);
        localStorage.setItem("departmentid", record.departmentid);
        localStorage.setItem("fullname", record.data.name);
        Ext.create({xtype: 'app-main'});
        TimeTableApp.util.SessionMonitor.start();
        
    }
});