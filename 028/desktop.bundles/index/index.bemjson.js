module.exports = {
    block : 'page',
    js: true,
    mods: { loading: true },
    title : 'Identity',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300' },
        { elem: 'css', url: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' },
        { elem : 'css', url : 'index.min.css' }
    ],
    scripts: [{ elem : 'js', url : 'index.min.js' }],
    content : [
        {
            elem: 'content',
            content: [
                {
                    block: 'about',
                    content: [
                        {
                            elem: 'avatar',
                            content: [
                                {
                                    block: 'image',
                                    mix: { block: 'about', elem: 'image' },
                                    url: 'img/about__avatar.jpg'
                                }
                            ]
                        },
                        {
                            block: 'text',
                            mods: { type: 'title', ctx: 'page' },
                            mix: { block: 'about', elem: 'name' },
                            content: 'Jane Doe'
                        },
                        {
                            block: 'text',
                            mods: { type: 'description', ctx: 'page' },
                            mix: { block: 'about', elem: 'profession' },
                            content: 'Senior Psychonautics Engineer'
                        }
                    ]
                },
                {
                    block: 'social',
                    content: [
                        { type: 'twitter', url: '#' },
                        { type: 'inst', url: '#' },
                        { type: 'fb', url: '#' }
                    ].map(function(item) {
                        return [
                            {
                                elem: 'item',
                                content: [
                                    {
                                        block: 'link',
                                        mix: { block: 'social', elem: 'link', elemMods: { type: item.type } },
                                        url: item.url
                                    }
                                ]
                            }
                        ];
                    })
                }
            ]
        },
        {
            block: 'footer',
            content: [
                {
                    block: 'copyright',
                    content: [
                        '&copy; Oopscurity',
                        [
                            'Design: ',
                            {
                                block: 'link',
                                url: 'http://html5up.net',
                                content: 'HTML5 UP'
                            }
                        ]
                    ].map(function(item) {
                        return [
                            {
                                elem: 'item',
                                mix: { block: 'text', mods: { type: 'description' } },
                                content: item
                            }
                        ];
                    })
                }
            ]
        }
    ]
};
