Ext.define('SmartDevCon.view.Talks', {
    extend: 'Ext.dataview.List',
    xtype: 'talks',

    config: {
        store: 'Talks',
        itemTpl: "{title} - {speaker}"
    }
});

