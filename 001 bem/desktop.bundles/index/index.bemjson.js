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
					content: [
						{
							block: 'logo',
							mix: { block: 'content', elem: 'logo'},
							content: {
								block: 'image',
								url: ''
							}
						},
						{
							block: 'promo',
							mix: { block: 'content', elem: 'promo'},
							content: [
								{
									elem: 'item',
									content: [
										{
											block: 'title', 
											mix: { block: 'promo', elem: 'losung' },
											content: 'Быстро'
										},
										{
											block: 'text',
											mix: { block: 'promo', elem: 'description' },
											content: ''
										}
									]
								},
								{
									elem: 'item',
									content: [
										{
											block: 'title', 
											mix: { block: 'promo', elem: 'losung' },
											content: 'Круто'
										},
										{
											block: 'text',
											mix: { block: 'promo', elem: 'description' },
											content: ''
										}
									]
								},
								{
									elem: 'item',
									content: [
										{
											block: 'title', 
											mix: { block: 'promo', elem: 'losung' },
											content: 'Дорого'
										},
										{
											block: 'text',
											mix: { block: 'promo', elem: 'description' },
											content: ''
										}
									]
								}
							]
						}
					]
				},
				{
					elem: 'section',
					content: [
						{
							elem: 'side',
							elemMods: { align: 'left' },
							content: {
								block: 'news',
								content: [
									{
										block: 'title',
										mix: { block: 'content', elem: 'section-title' },
										content: 'Новости'
									},
									{
										elem: 'list',
										content: [
											{
												elem: 'item',
												content: [
													{
														block: 'text',
														mix: { block: 'news', elem: 'description' },
														content: ''
													},
													{
														elem: 'date',
														content: ''
													}
												]
											},
											{
												elem: 'item',
												content: [
													{
														block: 'text',
														mix: { block: 'news', elem: 'description' },
														content: ''
													},
													{
														elem: 'date',
														content: ''
													}
												]
											}
										]
									},
									{
										block: 'button',
										mix: { block: 'news', elem: 'button' },
										mods: { type: 'link' },
										text: 'Все новости'
									}
								]
							}
						},
						{
							elem: 'side',
							elemMods: { align: 'right' },
							content: {
								block: 'slide',
								content: ''
							}
						}
					]
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
					elem: 'item',
					elemMods: { align: 'left' },
					content: {
						block: 'address',
						mix: { block: 'footer', elem: 'address' },
						content: ''
					}
				},
				{
					elem: 'item',
					elemMods: { align: 'conter' },
					content: {
						block: 'social',
						mix: { block: 'footer', elem: 'social' },
						content: [
							{
								elem: 'item',
								content: [
									{
										block: 'button',
										mix: { block: 'social', elem: 'link' },
										mods: { type: 'link' },
										text: ''
									}
								]
							}
						]
					}
				},
				{
					elem: 'item',
					elemMods: { align: 'right' },
					content: {
						block: 'copyright',
						mix: { block: 'footer', elem: 'copyright' },
						content: [
							{
								block: 'text',
								mix: { block: 'copyright', elem: 'description' },
								content: 'Дизfйн сайта'
							},
							{
								block: 'button',
								mix: { block: 'copyright', elem: 'link' },
								mods: { type: 'link' },
								text: ''
							}
						]
					}
				}
			]
		}
	]
})
