Ext.define('TimeTableApp.store.Rooms', {
    extend: 'Ext.data.Store',

    alias: 'store.rooms',
    storeId: 'rooms',
    itemId: 'rooms',
    //remoteFilter: true,

    proxy: {
        type: 'ajax',
        url:'/rooms',
    },
    autoLoad: true,
});
