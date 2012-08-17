Ext.define('SmartDevCon.controller.Talks', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            'talkslist': 'talks'
        },
        control: {
            'talkslist': {
                itemtap: 'onListItemTap'
            }
        }
    },
    
    onListItemTap: function() {
        Ext.Msg.alert('ILLEGAL USER!', 'How\'d you get here!!!!');
    }
});

