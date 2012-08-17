Ext.define('SmartDevCon.controller.tablet.Talks', {
    extend: 'SmartDevCon.controller.Talks',
    
    onListItemTap: function() {
        Ext.Msg.alert('Tablet User', 'Hi tablet user!');
    }
});

