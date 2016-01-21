module.exports = {
	block : 'page',
	js: true,
	title : 'Identity',
	favicon : '/favicon.ico',
	head : [
		{ elem : 'meta', attrs : { name : 'description', content : '' } },
		{ elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
		{ elem : 'css', url : '/assets/reset.css' },
		{ elem : 'css', url : '/assets/fonts/fontawesome.min.css' },
		{ elem : 'css', url : 'http://fonts.googleapis.com/css?family=Source+Sans+Pro:300' },
		{ elem : 'css', url : 'index.min.css' }
	],
	scripts: [{ elem : 'js', url : 'index.min.js' }],
	content : [
		{
			block: 'content',
			content: [
				{
					elem: 'section',
					content: [
						{
							block: 'info',
							content: [
								{
									elem: 'avatar',
									content: [
										{
											block: 'image',
											mix: { block: 'info', elem: 'image' },
											url: '/assets/img/info/info__avatar.jpg'
										}
									]
								},
								{
									elem: 'name',
									content: 'Jane Doe'
								},
								{
									elem: 'subject',
									content: 'Senior psychonautics engineer'
								}
							]
						}
					]
				},
				{
					elem: 'section',
					content: [
						{
							block: 'social',
							content: [
								{ url: '#', type: 'twitter' },
								{ url: '#', type: 'instagram' },
								{ url: '#', type: 'facebook' }
							].map(function(item) {
								return [
									{
										elem: 'item',
										content: [
											{
												block: 'link',
												mix: { block: 'social', elem: 'link', elemMods: { type: item.type } },
												url: item.url,
												content: item.label
											}
										]
									}
								];						
							})
						}
					]
				}
			]
		},
		{
			block: 'footer',
			content: [
				{
					block: 'copyright',
					content: [
						{
							elem: 'item',
							content: '&copy; Jane Doe'
						},
						{
							elem: 'item',
							content: [
								'Design: ',
								{
									block: 'link',
									mix: { block: 'copyright', elem: 'link' },
									url: 'http://html5up.net/',
									content: 'HTML5 UP'
								}
							]
						}
					]
				}
			]
		}
	]
};
