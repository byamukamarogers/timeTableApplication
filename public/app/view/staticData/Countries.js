Ext.define('TimeTableApp.view.staticData.Countries', {
    extend: 'TimeTableApp.view.staticData.BaseGrid',
    xtype: 'countriesgrid',

    //store: 'staticData.Countries',

    columns: [
        {
            text: 'Country Id',
            width: 100,
            dataIndex: 'country_id',
            filter: {
                type: 'numeric'
            }
        },
        {
            text: 'Country Name',
            flex: 1,
            dataIndex: 'country',
            editor: {
                allowBlank: false,
                maxLength: 45
            },
            filter: {
                type: 'string'
            }
        }
    ]
});