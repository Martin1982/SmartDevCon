Ext.define('SmartDevCon.profile.Phone', {
    extend: 'Ext.app.Profile',
    
    //define any additional classes your Profile needs here
    config: {
        views: [],
        models: [],
        stores: [],
        controllers: ['Talks']
    },
    
    //this profile will be activated if we detect we're running on a Phone
    isActive: function(app) {
        return Ext.os.is.Phone;
    }
});