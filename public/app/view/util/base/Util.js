Ext.define('TimeTableApp.view.util.base.Util',{
    //extend: 'Ext.panel.Panel',

    requires: [
        'TimeTableApp.view.util.base.UtilController',
        'TimeTableApp.view.util.base.UtilModel',
        'Ext.window.Toast'
    ],

    /* controller: 'util-base-util',
    viewModel: {
        type: 'util-base-util'
    }, */

    statics : {

        required: '<span style="color:red;font-weight:bold" data-qtip="Required"> *</span>',

        decodeJSON : function (text) {

            var result = Ext.JSON.decode(text, true);

            if (!result){
                result = {};
                result.success = false;
                result.msg = text;
            }

            return result;
        },

        showErrorMsg: function (text) {

            Ext.Msg.show({
                title:'Error!',
                msg: text,
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        },

        handleFormFailure: function(action){

            var me = this,
                result = TimeTableApp.view.util.base.Util.decodeJSON(action.response.responseText);

            switch (action.failureType) {
                case Ext.form.action.Action.CLIENT_INVALID:
                    me.showErrorMsg('Form fields may not be submitted with invalid values');
                    break;
                case Ext.form.action.Action.CONNECT_FAILURE:
                    me.showErrorMsg(action.response.responseText);
                    break;
                case Ext.form.action.Action.SERVER_INVALID:
                    me.showErrorMsg(result.msg);
            }
        },

        showToast: function(text) {
            Ext.toast({
                html: text,
                closable: false,
                align: 't',
                slideInDuration: 400,
                minWidth: 400
            });
        }
    }
});
