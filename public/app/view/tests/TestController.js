Ext.define('TimeTableApp.view.tests.TestController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tests-test',
    /**
     * Custom function used for column renderer
     * @param {Object} val
     */
    change: function (val) {
        if (val > 0) {
            return '<span style="color:green;">' + val + '</span>';
        } else if (val < 0) {
            return '<span style="color:red;">' + val + '</span>';
        }
        return val;
    },

    /**
     * Custom function used for column renderer
     * @param {Object} val
     */
    pctChange: function (val) {
        if (val > 0) {
            return '<span style="color:green;">' + val + '%</span>';
        } else if (val < 0) {
            return '<span style="color:red;">' + val + '%</span>';
        }
        return val;
    },


    onViewLoad: function () {
        Ext.QuickTips.init();
        this.change();
        this.pctChange();
    },

});
