Ext.define('TimeTableApp.view.test.testController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.test-test',
    loadData: async function(){
        let grid = this.lookupReference("samplegrd");
        let data = [
            
                { name: 'Aubrey',  age: 17 },
                { name: 'Joshua',  age: 13 },
                { name: 'Cale',    age: 10 },
                { name: 'Nikol',   age: 5 },
                { name: 'Solomon', age: 0 }
            
        ]
        
        let store = Ext.create('Ext.data.Store', { data: data });
        grid.setStore(store);
        store.load();

    }


});
