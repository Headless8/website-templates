({
	block : 'page',
	title : 'Barbershop',
	head : [
		{ elem : 'meta', attrs : { name : 'description', content : '' } },
		{ elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
		{ elem : 'css', url : '_index.css' }
	],
	scripts: [{ elem : 'js', url : '_index.js' }],
	content: [
		{
			block : 'header',
			content : [
				{
					block: 'menu',
					mix: { block: 'header', elem: 'menu' },
					content: ''
				},
				{
					block: 'user',
					mix: { block: 'header', elem: 'user' },
					content: [
						{
							block: 'link',
							mix: { block: 'user', elem: 'link' },
							mods: { visible: 'true' },
							content: 'Вход'
						}
					]
				}
			]
		},
		{
			block: 'content',
			content: [
				{
					elem: 'section',
					elemMods: { bg: 'transparent' },
					content: ''
				},
				{
					elem: 'section',
					content: ''
				},
				{
					elem: 'section',
					content: ''
				}
			]
		},
		{
			block: 'footer',
			content: [
				{
					block: 'address',
					mix: { block: 'footer', elem: 'address' },
					content: ''
				},
				{
					block: 'social',
					mix: { block: 'footer', elem: 'social' },
					content: ''
				},
				{
					block: 'copyright',
					mix: { block: 'footer', elem: 'copyright' },
					content: ''
				}
			]
		}
	]
})
