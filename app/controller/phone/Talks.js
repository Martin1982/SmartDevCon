Ext.define('SmartDevCon.controller.phone.Talks', {
    extend: 'SmartDevCon.controller.Talks',
    
    onListItemTap: function() {
        Ext.Msg.alert('Phone User', 'Hi phone user!');
    }
});

