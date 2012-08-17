Ext.define('SmartDevCon.store.Talks', {
    extend: 'Ext.data.Store',

    config: {
        model: 'SmartDevCon.model.Talk',
        autoLoad: true
    }
});

