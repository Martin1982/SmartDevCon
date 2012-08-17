Ext.define('SmartDevCon.profile.Tablet', {
    extend: 'Ext.app.Profile',
    
    //define any additional classes your Profile needs here
    config: {
        views: [],
        models: [],
        stores: [],
        controllers: ['Talks']
    },
    
    //this profile will be activated if we detect we're running on a Tablet
    isActive: function(app) {
        return Ext.os.is.Tablet;
    }
});