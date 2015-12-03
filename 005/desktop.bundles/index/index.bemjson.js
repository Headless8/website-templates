module.exports = {
	block : 'page',
	title : 'Dashboard',
	favicon : '/favicon.ico',
	head : [
		{ elem : 'meta', attrs : { name : 'description', content : '' } },
		{ elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'http://fonts.googleapis.com/css?family=Open+Sans:300,400,700' },
		{ elem : 'css', url : 'index.min.css' }
	],
	scripts: [{ elem : 'js', url : 'index.min.js' }],
	content : [
		{
			block: 'header',
			content: [
				{
					elem: 'section',
					elemMods: { type: 'bar' },
					content: [
						{
							elem: 'side',
							elemMods: { align: 'left' },
							content: [
								{
									block: 'menu',
									content: [

										{ text: 'Business', url: '#' },
										{ text: 'Personal', url: '#' }

									].map(function(item) {
										return [
											{
												block: 'menu-item',
												mix: { block: 'header', elem: 'menu-item', elemMods: { type: 'bar' } },
												content: [
													{
														block: 'link',
														mix: [
															{ block: 'menu-item', elem: 'link' },
															{ block: 'header', elem: 'link', elemMods: { type: 'bar' } }
														],
														url: item.url,
														content: item.text
													}
												]
											}
										];
									})
								}
							]
						},
						{
							elem: 'side',
							elemMods: { align: 'right' },
							content: [
								{
									block: 'form',
									mix: { block: 'header', elem: 'form' },
									content: [
										{
											block: 'control-group',
											content: [
												{
													block: 'input',
													mix: { block: 'header', elem: 'input' },
													placeholder: 'Leave your email'
												},
												{
													block: 'input',
													mix: { block: 'header', elem: 'input' },
													mods: { type: 'password' },
													placeholder: '******'
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					elem: 'section',
					elemMods: { type: 'main' },
					content: [
						{
							elem: 'side',
							elemMods: { align: 'left' },
							content: [
								{
									block: 'logo',
									mix: { block: 'header', elem: 'logo' },
									content: [
										{
											block: 'link',
											mix: { block: 'logo', elem: 'link' },
											url: '#'
										}
									]
								},
								{
									block: 'menu',
									mix: { block: 'header', elem: 'menu' },
									content: [

										{ text: 'Buy', url: '#' },
										{ text: 'Sell', url: '#' },
										{ text: 'Manage', url: '#' }

									].map(function(item) {
										return [
											{
												block: 'menu-item',
												mix: { block: 'header', elem: 'menu-item', elemMods: { type: 'main' } },
												content: [
													{
														block: 'link',
														mix: [
															{ block: 'menu-item', elem: 'link' },
															{ block: 'header', elem: 'link', elemMods: { type: 'main' } }
														],
														url: item.url,
														content: item.text
													}
												]
											}
										];
									})
								}
							]
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
					elemMods: { bg: 'woman' },
					content: [
						{
							block: 'promo',
							mix: { block: 'content', elem: 'promo' },
							content: [
								{
									elem: 'title',
									content: 'Paul makes your payments easy'
								},
								{
									elem: 'description',
									content: 'With over 1 Billion users paypal is simply the best way to pay online'
								},
								{
									elem: 'action',
									content: [
										{
											block: 'link',
											mix: { block: 'promo', elem: 'check' },
											url: '#',
											content: 'Check this awesome button right here'
										}
									]
								},
								{
									elem: 'action',
									content: [
										{
											elem: 'appeal',
											content: 'Sign up for a paypal account today'
										},
										{
											block: 'link',
											mix: { block: 'promo', elem: 'sign-up' },
											url: '#',
											content: 'Click here to join'
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
							block: 'features',
							content: [
								{
									elem: 'list',
									content: [
										{
											title: 'Website feature',
											description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
											url: '#',
											image: '/img/features/__image/features__image_star.png'
										},
										{
											title: 'Design',
											description: 'Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
											url: '#',
											image: '/img/features/__image/features__image_leaf.png'
										},
										{
											title: 'Simplicity',
											description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
											url: '#',
											image: '/img/features/__image/features__image_badge.png'
										}
									].map(function(item) {
										return [
											{
												elem: 'item',
												content: [
													{
														block: 'image',
														mix: { block: 'features', elem: 'image' },
														url: item.image
													},
													{
														elem: 'title',
														content: item.title
													},
													{
														elem: 'description',
														content: item.description
													},
													{
														block: 'link',
														mix: { block: 'features', elem: 'link' },
														url: item.url,
														content: 'Read more'
													}
												]
											}
										];
									})
								}
							]
						}
					]
				}
			]
		},
		{
			block: 'footer',
			content: [
				{
					elem: 'section',
					elemMods: { theme: 'light' },
					content: [
						{
							block: 'menu',
							mix: { block: 'footer', elem: 'menu' },
							content: [

								{ text: 'Home', url: '#' },
								{ text: 'Help', url: '#' },
								{ text: 'FAQs', url: '#' },
								{ text: 'Another page link', url: '#' },
								{ text: 'Buzz', url: '#' }

							].map(function(item) {
								return [
									{
										block: 'menu-item',
										mix: { block: 'footer', elem: 'menu-item' },
										content: [
											{
												block: 'link',
												mix: [
													{ block: 'menu-item', elem: 'link' },
													{ block: 'footer', elem: 'link' }
												],
												url: item.url,
												content: item.text
											}
										]
									}
								];
							})
						}
					]
				},
				{
					elem: 'section',
					elemMods: { theme: 'dark' },
					content: [
						{
							block: 'menu',
							mix: { block: 'footer', elem: 'menu' },
							content: [

								{ text: 'About', url: '#' },
								{ text: 'PayPaul', url: '#' },
								{ text: 'PayPaul blog', url: '#' },
								{ text: 'Jobs', url: '#' },
								{ text: 'More', url: '#' },
								{ text: 'Share feedback', url: '#' }

							].map(function(item) {
								return [
									{
										block: 'menu-item',
										mix: { block: 'footer', elem: 'menu-item' },
										content: [
											{
												block: 'link',
												mix: [
													{ block: 'menu-item', elem: 'link' },
													{ block: 'footer', elem: 'link' }
												],
												url: item.url,
												content: item.text
											}
										]
									}
								];
							})
						},
						{
							elem: 'text',
							content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
						}
					]
				}
			]
		}
	]
};
