Ext.define('TimeTableApp.view.room.roomController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.room-room',
    onInfo: function(grid, info){
        var destinations = Ext.pluck(Ext.pluck(info.group.grdallRooms.items, 'grdallRooms'), 'to').sort().join(', ');
        Ext.Msg.show({title : 'Destinations', html: destinations, width: 300});
    },

    onAfterRender: async function () {
        this.loadRoomGridData();
    },
    loadRoomGridData: async function () {
        let allList = this.lookupReference('grdallRooms');
        let response = await Ext.Ajax.request({ url: 'resources/routes/room/list.php', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records.data });
            allList.setStore(store);
            store.load();
        }
    }
});
