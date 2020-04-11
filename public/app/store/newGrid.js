Ext.define('TimeTableApp.store.newGrid', {    
    storeId: 'customerStoreId',
    pageSize: 10,
    autoLoad: true,
    fields:[
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'phone', type: 'string'},
        {name: 'address', type: 'string'}
    ],
    proxy: {
        type: 'ajax',
        url: 'data.json',
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'total'
        }
    }
});
