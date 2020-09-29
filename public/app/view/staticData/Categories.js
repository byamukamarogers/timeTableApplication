Ext.define('TimeTableApp.view.staticData.Categories', {
    extend: 'TimeTableApp.view.staticData.BaseGrid',
    xtype: 'categoriesgrid',

    //store: 'staticData.Categories',

    columns: [
        {
            text: 'Category Id',
            width: 100,
            dataIndex: 'category_id',
            filter: {
                type: 'numeric'
            }
        },
        {
            text: 'Category Name',
            flex: 1,
            dataIndex: 'name',
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