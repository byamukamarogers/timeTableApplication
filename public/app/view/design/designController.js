Ext.define('TimeTableApp.view.design.designController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.design-design',
    onRSubmitClicked: async function(){        
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    }

});
