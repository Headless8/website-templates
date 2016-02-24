module.exports = {
    block : 'page',
    title : 'Future Imperfect',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'https://fonts.googleapis.com/css?family=Raleway:400,800,900' },
        { elem: 'css', url: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400' },
        { elem: 'css', url: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' },
        { elem : 'css', url : 'index.min.css' }
    ],
    scripts: [{ elem : 'js', url : 'index.min.js' }],
    content : [
        {
            block: 'header',
            content: [
                {
                    block: 'logo',
                    content: [
                        {
                            block: 'text',
                            mods: { type: 'title', ctx: 'page' },
                            mix: { block: 'logo', elem: 'title' },
                            content: [
                                {
                                    block: 'link',
                                    url: '#',
                                    content: 'Future Imperfect'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'menu',
                    mix: [
                        { block: 'header', elem: 'item' },
                        { block: 'header', elem: 'menu' },
                    ],
                    js: false,
                    content: [
                        { content: 'Lorem', url: '#' },
                        { content: 'Ipsum', url: '#' },
                        { content: 'Feugiat', url: '#' },
                        { content: 'Tempus', url: '#' },
                        { content: 'Adipiscing', url: '#' }
                    ].map(function(item) {
                        return [
                            {
                                block: 'menu-item',
                                mix: { block: 'header', elem: 'menu-item' },
                                js: false,
                                content: [
                                    {
                                        block: 'link',
                                        mix: [
                                            { block: 'text', mods: { type: 'title', ctx: 'section' } }
                                        ],
                                        url: item.url,
                                        content: item.content
                                    }
                                ]
                            }
                        ];
                    })
                },
                {
                    block: 'search',
                    mix: { block: 'header', elem: 'search' },
                    content: [
                        {
                            block: 'button',
                            mods: { type: 'submit' },
                            mix: [
                                { block: 'search', elem: 'submit' }
                            ]
                        },
                        {
                            block: 'input',
                            mods: { type: 'search' },
                            mix: { block: 'search', elem: 'input', elemMods: { visible: false } },
                            placeholder: 'Search'
                        }
                    ]
                },
                {
                    block: 'link',
                    mix: { block: 'menu', elem: 'hamburger' },
                    url: '#'
                }
            ]
        },
        {
            block: 'menu',
            mix: { block: 'aside', elem: 'menu' },
            content: [
                [
                    {
                        title: 'Lorem ipsum',
                        description: 'Feugiat tempus veroeros dolor',
                        url: '#'
                    },
                    {
                        title: 'Dolor sit amet',
                        description: 'Sed vitae justo condimentum',
                        url: '#'
                    },
                    {
                        title: 'Feugiat veroeros',
                        description: 'Phasellus sed ultricies mi congue',
                        url: '#'
                    },
                    {
                        title: 'Etiam sed consequat',
                        description: 'Porta lectus amet ultricies',
                        url: '#'
                    }
                ].map(function(item) {
                    return [
                        {
                            block: 'menu-item',
                            content: [
                                {
                                    block: 'link',
                                    url: item.url,
                                    content: [
                                        {
                                            block: 'text',
                                            mods: { type: 'title', ctx: 'section' },
                                            content: item.title
                                        },
                                        {
                                            block: 'text',
                                            mods: { type: 'description', ctx: 'section' },
                                            content: item.description
                                        }
                                    ]
                                }
                            ]
                        }
                    ];
                }),
                {
                    block: 'link',
                    mods: { type: 'button' },
                    url: '#',
                    content: 'Log in'
                }
            ]
        },
        {
            block: 'content',
            content: [
                {
                    title: 'Magna sed adipiscing',
                    description: 'Lorem ipsum dolor amet nullam consequat etiam feugiat',
                    dateshort: '2015-11-01',
                    date: 'November 1, 2015',
                    username: 'Jane Doe',
                    userurl: '#',
                    userava: 'img/avatar.jpg',
                    url: '#',
                    image: 'img/first.jpg',
                    content: 'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
                    tags: 'general',
                    likes: '28',
                    comments: '128'
                },
                {
                    title: 'Ultricies sed magna euismod enim vitae gravida',
                    description: 'Lorem ipsum dolor amet nullam consequat etiam feugiat',
                    dateshort: '2015-10-25',
                    date: 'October 25, 2015',
                    username: 'Jane Doe',
                    userurl: '#',
                    userava: 'img/avatar.jpg',
                    url: '#',
                    image: 'img/second.jpg',
                    content: 'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper.',
                    tags: 'general',
                    likes: '28',
                    comments: '128'
                },
                {
                    title: 'Euismod et accumsan',
                    description: 'Lorem ipsum dolor amet nullam consequat etiam feugiat',
                    dateshort: '2015-10-22',
                    date: 'October 22, 2015',
                    username: 'Jane Doe',
                    userurl: '#',
                    userava: 'img/avatar.jpg',
                    url: '#',
                    image: 'img/third.jpg',
                    content: 'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Cras vehicula tellus eu ligula viverra, ac fringilla turpis suscipit. Quisque vestibulum rhoncus ligula.',
                    tags: 'general',
                    likes: '28',
                    comments: '128'
                },
            ].map(function(item) {
                return [
                    {
                        block: 'article',
                        content: [
                            {
                                elem: 'header',
                                content: [
                                    {
                                        elem: 'section',
                                        mix: { block: 'article', elem: 'title' },
                                        content: [
                                            {
                                                block: 'text',
                                                mods: { type: 'title', ctx: 'article' },
                                                content: [
                                                    {
                                                        block: 'link',
                                                        content: item.title
                                                    }
                                                ]
                                            },
                                            {
                                                block: 'text',
                                                mods: { type: 'description', ctx: 'section' },
                                                content: item.description
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'section',
                                        mix: { block: 'article', elem: 'meta' },
                                        content: [
                                            {
                                                block: 'text',
                                                mods: { type: 'title', mods: 'section' },
                                                mix: { block: 'article', elem: 'date' },
                                                date: item.dateshort,
                                                content: item.date
                                            },
                                            {
                                                block: 'user',
                                                mix: { block: 'article', elem: 'user' },
                                                content: [
                                                    {
                                                        block: 'text',
                                                        mods: { type: 'link' },
                                                        url: item.userurl,
                                                        content: item.username
                                                    },
                                                    {
                                                        block: 'image',
                                                        mix: { block: 'user', elem: 'image' },
                                                        url: item.userava
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                elem: 'content',
                                content: [
                                    {
                                        block: 'link',
                                        url: item.url,
                                        content: [
                                            {
                                                block: 'image',
                                                mix: { block: 'article', elem: 'image' },
                                                url: item.image
                                            }
                                        ]
                                    },
                                    {
                                        block: 'text',
                                        mods: { type: 'plain' },
                                        content: item.content
                                    }
                                ]
                            },
                            {
                                elem: 'footer',
                                content: [
                                    {
                                        block: 'link',
                                        mods: { type: 'button' },
                                        url: item.url,
                                        content: 'Continue reading'
                                    },
                                    {
                                        elem: 'info',
                                        content: [
                                            {
                                                block: 'link',
                                                mix: { block: 'info', elem: 'tag' },
                                                content: [
                                                    {
                                                        block: 'text',
                                                        mods: { type: 'link' },
                                                        content: item.tags
                                                    }
                                                ]
                                            },
                                            {
                                                block: 'text',
                                                mods: { type: 'description', ctx: 'section' },
                                                mix: { block: 'info', elem: 'likes' },
                                                content: item.likes
                                            },
                                            {
                                                block: 'text',
                                                mods: { type: 'description', ctx: 'section' },
                                                mix: { block: 'info', elem: 'comments' },
                                                content: item.comments
                                            }
                                        ].map(function(info) {
                                            return [
                                                {
                                                    elem: 'item',
                                                    content: info
                                                }
                                            ];
                                        })
                                    }
                                ]
                            }
                        ]
                    }
                ];
            })
        }
    ]
};
