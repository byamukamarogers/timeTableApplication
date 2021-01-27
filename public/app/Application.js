/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
function loadLocale() {

    var lang = localStorage ? (localStorage.getItem('user-lang') || 'en') : 'en',
        extJsFile = Ext.util.Format.format("resources/locale/{0}.js", lang);
    //extJsFile = Ext.util.Format.format("ext/packages/ext-locale/build/ext-locale-{0}.js", lang);

    /*Ext.Loader.loadScript({url: file, onError: function(){
        alert('Error loading locale file. Please contact system administrator.');
    }});*/
    Ext.Loader.loadScript({ url: extJsFile });
}

loadLocale();

Ext.define('TimeTableApp.Application', {
    extend: 'Ext.app.Application',

    name: 'TimeTableApp',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    //defaultToken : 'home',
    stores: [
        // TODO: add global / shared stores here
    ],
    launch: function () {
    
    },
   });
