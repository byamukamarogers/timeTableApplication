Ext.define('TimeTableApp.view.class.newClassFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.class-newclassform',
    onAfterRender: async function () {
        this.loadDepartmentcmbo();
        this.loadCourseCmbo();
        this.loadProgramCmbo();

    },
    loadCourseCmbo: async function () {
        let allList = this.lookupReference('cmboCourse');
        let response = await Ext.Ajax.request({ url: '/courseunits', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records });
            allList.setStore(store);
            store.load();
        }
    },
    loadProgramCmbo: async function () {
        let allList = this.lookupReference('cmboPrograms');
        let response = await Ext.Ajax.request({ url: '/programs', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            var cleanRecords = [];
            for(var i = 0; i < records.length; i++){
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
    loadDepartmentcmbo: async function () {
        let allList = this.lookupReference('comboDepartments');
        let response = await Ext.Ajax.request({ url: '/departments', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            var cleanRecords = [];
            for (var i = 0; i < records.length; i++) {
                var singleRecord = records[i];
                singleRecord["facultyName"] = singleRecord.Faculty.facultyName;
                delete singleRecord.Faculty;
                cleanRecords.push(singleRecord);
            }
            let store = Ext.create('Ext.data.Store', { data: cleanRecords });
            allList.setStore(store);
            store.load();
        }
    },
    onIsProgramSelect: async function (combo, record, eOpts) {
        if (combo.rawValue === 'Yes') {
            Ext.getCmp('isCourseOpt').setHidden('true');
            Ext.getCmp('courseIdSelect').setHidden('true');
        }

    },
    onWardSelect: async function (combo, record, eOpts) {
        let numberofrooms = record.data.Rooms.length;
        let selectedWard = combo.rawValue;
        if (numberofrooms === 0) {
            Ext.Msg.confirm('Alert ', selectedWard + ' Ward Has No Rooms in it, Please Add a Room First', 'onConfirm', this);
        } else {
            this.loadRoomListcmbo(record.data.wardId);
        }
    },
    onLectureClassSubmit: async function () {
        let data = this.getViewModel().getData();
        this.saveData(data);
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

    saveData: async function (rawData) {
        let form = this.getView();
        console.log(rawData);
        let data = this.cleanupData(rawData);  
        let response = await Ext.Ajax.request({
            url: '/addLectureClass',
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            params: JSON.stringify(data)
        });
        
        if (response.responseText) {
            let result = JSON.parse(response.responseText);
            if (result.status === 'OK') {
                Ext.Msg.alert('Faculty Of Science TimeTable Application', 'Data has been successfully saved');
                let parent = form.up('window');
                if (parent) {
                    parent.destroy();
                }
            }
        }
    },

});
