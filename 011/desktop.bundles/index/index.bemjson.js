module.exports = {
	block : 'page',
	title : 'Title of the page',
	favicon : '/favicon.ico',
	head : [
		{ elem : 'meta', attrs : { name : 'description', content : '' } },
		{ elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
		{ elem : 'css', url : 'index.min.css' }
	],
	scripts: [{ elem : 'js', url : 'index.min.js' }],
	content : [
		{
			block: 'header',
			content: [
				{
					elem: 'section',
					content: [
						{
							elem: 'side',
							elemMods: { align: 'left' },
							content: [
								{
									block: 'logo',
									content: [
										{
											block: 'image',
											mix: { block: 'logo', elem: 'image' },
											url: '/img/logo/__image/logo__image_one.png'
										},
										{
											elem: 'title',
											content: 'Display'
										}
									]
								}
							]
						},
						{
							elem: 'side',
							elemMods: { align: 'right' },
							content: [
								{
									block: 'social',
									content: [
										{ site: 'twitter', url: '#', pseudo: true },
										{ site: 'fb', url: '#' },
										{ site: 'rss', url: '#' },
										{ site: 'pinterest', url: '#' },
										{ site: 'googleplus', url: '#' },
										{ site: 'dribble', url: '#' }
									].map(function(item) {
										return [
											{
												elem: 'item',
												content: [
													{
														block: 'link',
														mix: { block: 'social', elem: 'link', elemMods: { site: item.site } },
														mods: { pseudo: item.pseudo },
														url: item.url
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
					elem: 'section',
					content: [
						{
							elem: 'side',
							elemMods: { align: 'left' },
							content: [
								{
									block: 'menu',
									mix: { block: 'header', elem: 'menu' },
									content: [
										{ content: 'Home', url: '#' },
										{ content: 'About', url: '#' },
										{ content: 'Work', url: '#' },
										{ content: 'Contact', url: '#' }
									].map(function(item) {
										return [
											{
												block: 'menu-item',
												mix: { block: 'header', elem: 'menu-item' },
												content: [
													{
														block: 'link',
														mix: [
															{ block: 'menu-item', elem: 'link' },
															{ block: 'header', elem: 'link' }
														],
														url: item.url,
														content: item.content
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
					elemMods: { bg: 'wallpaper' },
					content: [
						{
							block: 'slider',
							mix: { block: 'content', elem: 'slider' },
							content: [
								{
									elem: 'item',
									content: [
										{
											block: 'image',
											mix: { block: 'slider', elem: 'image' },
											url: '/img/slider/__image/slider__image_one.png'
										},
										{
											elem: 'description',
											content: 'CodersTrust provides microfinance for underprivileged talents to upgrade their coding skills, so they can earn more money on freelance portals.'
										},
										{
											block: 'link',
											mix: { block: 'slider', elem: 'action' },
											url: '#',
											content: 'Browse portfolio'
										}
									]
								}
							]
						}
					]
				},
				{
					elem: 'section',
					elemMods: { bg: 'grey' },
					content: [
						{
							block: 'aside',
							content: [
								{
									elem: 'side',
									elemMods: { align: 'left' },
									content: [
										{
											block: 'image',
											mix: { block: 'aside', elem: 'image' },
											url: '/img/aside/__image/aside__image_one.png'
										}
									]
								},
								{
									elem: 'side',
									elemMods: { align: 'right' },
									content: [
										{
											elem: 'text',
											content: [
												{
													elem: 'title',
													content: 'Get to know us little better'
												},
												{
													elem: 'description',
													content: "Whats up guys so I'm finally here with some suiting reviews and suiting advice! The besttttt thing you can do for a suit is to get it tailored to fit your body like it should. The besttttt thing you can do for a suit is to get it tailored to fit your body like it should. The besttttt thing you can do for a suit is to get it tailored to fit your body like it should. The besttttt thing you can do for a suit is to get it tailored to fit your body like it should. The besttttt thing you can do for a suit is to get it tailored to fit your body like it should. Whats up guys so I'm finally here with some suiting<br><br>It shouldn't drape on you, it needs to be snug on you like its hugging you :P Hopefully you enjoy it and are along for the ride with me! reviews and suiting advice! reviews and suiting advice!"
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
					elemMods: { bg: 'dark' },
					content: [
						{
							block: 'promo',
							content: [
								{
									elem: 'side',
									elemMods: { align: 'left' },
									content: [
										{
											elem: 'question',
											content: 'Are you ready to be blown out?'
										}
									]
								},
								{
									elem: 'side',
									elemMods: { align: 'right' },
									content: [
										{
											block: 'link',
											mix: { block: 'promo', elem: 'action' },
											url: '#',
											content: 'Click here to find out'
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
			block: 'footer',
			content: [
				{
					elem: 'section',
					content: [
						{
							elem: 'side',
							elemMods: { align: 'left' },
							content: [
								{
									block: 'copyright',
									mix: { block: 'footer', elem: 'copyright' },
									content: 'Copyright 2013 Display All rights reserved'
								}
							]
						},
						{
							elem: 'side',
							elemMods: { align: 'right' },
							content: [
								{
									block: 'menu',
									mix: { block: 'footer', elem: 'menu' },
									content: [
										{ content: 'Home', url: '#' },
										{ content: 'About', url: '#' },
										{ content: 'Work', url: '#' },
										{ content: 'Contact', url: '#' }
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
														content: item.content
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
		}
	]
};
