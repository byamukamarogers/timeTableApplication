Ext.define('TimeTableApp.view.design.designController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.design-design',
    onAfterRender: async function () {
        this.loadSessions();
        this.loadClassList();
    },
    loadClassList: async function () {
        let allList = this.lookupReference('cmbLectureClasses');
        let response = await Ext.Ajax.request({ url: 'resources/routes/class/list.php', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records.data });
            allList.setStore(store);
            store.load();
        }
    },

    loadSessions: async function () {
        let allList = this.lookupReference('cmboSessions');
        let response = await Ext.Ajax.request({ url: 'resources/routes/session/list.php', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records.data });
            allList.setStore(store);
            store.load();
        }
    },
    loadAllStaffGridData: async function () {
        let allList = this.lookupReference('grdallStaff');
        let response = await Ext.Ajax.request({ url: '/staff', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            var cleanRecords = [];
            for (var i = 0; i < records.length; i++) {
                var singleRecord = records[i];
                singleRecord["departmentName"] = singleRecord.Department.departmentName;
                delete singleRecord.Department;
                cleanRecords.push(singleRecord);
            }
            let store = Ext.create('Ext.data.Store', { data: cleanRecords });
            allList.setStore(store);
            store.load();
        }
    },

    onEditTimeTable: async function () {
        let data = this.cleanupData(this.getViewModel().getData());
        let record = {};
        record.data = data;
        console.log(data)
        this.EditTimeTable(data);
    },

    cleanupData: function (rawData) {
        let data = {};
        for (let key in rawData) {
            let type = typeof rawData[key]
            if (['string', 'number', 'date'].includes(type)) {
                data[key] = rawData[key];
            }
        }
        return data;
    },

    EditTimeTable: async function (data) {
        if (data.classid) {
            Ext.create('Ext.window.Window', {
                title: 'TIME TABLE DESIGN WINDOW',
                iconCls: 'x-fa fa-edit',
                width: '95%',
                height: '100%',
                bodyPadding: 5,
                modal: true,
                tools: [
                    {
                        itemId: 'refresh',
                        type: 'refresh',
                        callback: function () {
                            // do refresh
                            let page = Ext.ComponentQuery.query('#desginViewPage')[0];
                        }
                    }
                ],
                items: [
                    {
                        xtype: 'component',
                        itemId: 'desginViewPage',
                        width: '100%',
                        height: '100%',
                        html: '<iframe src="resources/timetable/index.php?classid=' + data.classid + '&&semesterid=' + data.semesterid + '&&ssessionid=' + data.ssessionid + '" height="100%" width="100%" title="Iframe Example"></iframe>',
                    }
                ]
            }).show();
        } else {
            Ext.Msg.alert('Error', 'Time Table Not Found');
        }
    }

});
