Ext.define('SmartDevCon.view.Speakers', {
    extend: 'Ext.carousel.Carousel',
    xtype: 'speakercarousel',

    config: {
        items: [
            {
                xtype: 'img',
                src: 'resources/images/1.jpg',
                width: '100%'
            },
            {
                xtype: 'img',
                src: 'resources/images/2.jpg',
                width: '100%'
            },
            {
                xtype: 'img',
                src: 'resources/images/3.jpg',
                width: '100%'
            },
            {
                xtype: 'img',
                src: 'resources/images/4.jpg',
                width: '100%'
            },
            {
                xtype: 'img',
                src: 'resources/images/5.jpg',
                width: '100%'
            }
        ]
    }
});

