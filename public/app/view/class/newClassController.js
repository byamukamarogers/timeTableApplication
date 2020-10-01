Ext.define('TimeTableApp.view.class.newClassController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.class-newclass',
    onAfterRender: async function(){
        this.loadClassList();

    },    
    loadClassList: async function () {
        let allList = this.lookupReference('grdLectureClasses');
        let response = await Ext.Ajax.request({ url: '/loadLectureClasses', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records });
            allList.setStore(store);
            store.load();
        }
    },
    onEditClass: async function(){
        let selection = this.lookupReference("grdLectureClasses").getSelection();
        if(selection.length> 0){
            let data = selection[0].data;
            Ext.create('Ext.window.Window', {
                title: 'CLASS REGISTRATION FORM',
                iconCls: 'x-fa fa-edit',
                width: '80%',
                bodyPadding: 5,
                modal: true,
                items: [
                    {
                        header: false,
                        xtype: 'newClassForm',
                        formData: data
                    }
                ]
            }).show();
        } else {
            Ext.Msg.alert('Error', 'Please select a Class');
        }
    }

});
