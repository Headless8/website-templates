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
					elem: 'bar',
					mods: { side: 'top' },
					content: [
						{
							block: 'cookies',
							content: [
								{
									block: 'text',
									mix: { block: 'cookies', elem: 'description' },
									content: [
										'This site uses cookies, so that my service can work better.'
									]
								},
								{
									block: 'button',
									mods: { type: 'link' },
									mix: { block: 'cookies', elem: 'action' },
									text: 'Accept',
									url: '/'
								}
							]
						}
					]
				},
				{
					block: 'button',
					mix: { block: 'header', elem: 'menu-button' },
					mods: { type: 'link', side: 'right' },
					icon: {
						block: 'icon',
						mods: { type: 'menu' }
					}
				},
				{
					block: 'info',
					content: [
						{
							block: 'image',
							mix: { block: 'info', elem: 'avatar' },
							url: ''
						},
						{
							block: 'text',
							mix: { block: 'info', elem: 'title' },
							content: 'Free portfolio psd template for graphic designers'
						},
						{
							block: 'text',
							mix: { block: 'info', elem: 'description' },
							content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
						},
						{
							block: 'button',
							mods: { type: 'link' },
							mix: { block: 'info', elem: 'action' },
							text: 'Hire me',
							url: '/'
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
					content: [
						{
							block: 'about',
							content: [
								{
									block: 'text',
									mix: { block: 'section', elem: 'title' },
									content: 'About me'
								},
								{
									block: 'text',
									mix: { block: 'section', elem: 'content' },
									content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'
								}
							]
						}
					]
				},
				{
					elem: 'section',
					content: [
						{
							block: 'skills',
							content: [
								{
									block: 'text',
									mix: { block: 'section', elem: 'title' },
									content: 'Expert in'
								},
								{
									elem: 'list',
									content: [
										{
											elem: 'item',
											content: [
												{
													block: 'image',
													mix: { block: 'skills', elem: 'image' },
													url: ''
												},
												{
													block: 'text',
													mix: { block: 'skills', elem: 'name' },
													content: 'Mobile app design'
												},
												{
													block: 'text',
													mix: { block: 'skills', elem: 'description'},
													content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim'
												}
											]
										},
										{
											elem: 'item',
											content: [
												{
													block: 'image',
													mix: { block: 'skills', elem: 'image' },
													url: ''
												},
												{
													block: 'text',
													mix: { block: 'skills', elem: 'name' },
													content: 'Web design'
												},
												{
													block: 'text',
													mix: { block: 'skills', elem: 'description'},
													content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
												}
											]
										},
										{
											elem: 'item',
											content: [
												{
													block: 'image',
													mix: { block: 'skills', elem: 'image' },
													url: ''
												},
												{
													block: 'text',
													mix: { block: 'skills', elem: 'name' },
													content: 'Web development'
												},
												{
													block: 'text',
													mix: { block: 'skills', elem: 'description'},
													content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim'
												}
											]
										},
										{
											elem: 'item',
											content: [
												{
													block: 'image',
													mix: { block: 'skills', elem: 'image' },
													url: ''
												},
												{
													block: 'text',
													mix: { block: 'skills', elem: 'name' },
													content: 'Product design'
												},
												{
													block: 'text',
													mix: { block: 'skills', elem: 'description'},
													content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim'
												}
											]
										},
										{
											elem: 'item',
											content: [
												{
													block: 'image',
													mix: { block: 'skills', elem: 'image' },
													url: ''
												},
												{
													block: 'text',
													mix: { block: 'skills', elem: 'name' },
													content: 'UX & UI'
												},
												{
													block: 'text',
													mix: { block: 'skills', elem: 'description'},
													content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
												}
											]
										},
										{
											elem: 'item',
											content: [
												{
													block: 'image',
													mix: { block: 'skills', elem: 'image' },
													url: ''
												},
												{
													block: 'text',
													mix: { block: 'skills', elem: 'name' },
													content: 'Animations'
												},
												{
													block: 'text',
													mix: { block: 'skills', elem: 'description'},
													content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim'
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
					content: [
						{
							block: 'latest',
							content: [
								{
									block: 'text',
									mix: { block: 'section', elem: 'title' },
									content: 'Latest works'
								},
								{
									elem: 'list',
									content: [
										{
											elem: 'item',
											content: [
												{
													block: 'image',
													mix: { block: 'latest', elem: 'image' },
													url: ''
												}
											]
										},
										{
											elem: 'item',
											content: [
												{
													block: 'image',
													mix: { block: 'latest', elem: 'image' },
													url: ''
												}
											]
										},
										{
											elem: 'item',
											content: [
												{
													block: 'image',
													mix: { block: 'latest', elem: 'image' },
													url: ''
												}
											]
										},
										{
											elem: 'item',
											content: [
												{
													block: 'image',
													mix: { block: 'latest', elem: 'image' },
													url: ''
												}
											]
										},
										{
											elem: 'item',
											content: [
												{
													block: 'image',
													mix: { block: 'latest', elem: 'image' },
													url: ''
												}
											]
										},
										{
											elem: 'item',
											content: [
												{
													block: 'image',
													mix: { block: 'latest', elem: 'image' },
													url: ''
												}
											]
										},
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
							block: 'clients',
							content: [
								{
									elem: 'list',
									content: [
										{
											elem: 'item',
											content: [
												{
													block: 'image',
													mix: { block: 'clients', elem: 'logo' },
													url: ''
												}
											]
										},
										{
											elem: 'item',
											content: [
												{
													block: 'image',
													mix: { block: 'clients', elem: 'logo' },
													url: ''
												}
											]
										},
										{
											elem: 'item',
											content: [
												{
													block: 'image',
													mix: { block: 'clients', elem: 'logo' },
													url: ''
												}
											]
										},
										{
											elem: 'item',
											content: [
												{
													block: 'image',
													mix: { block: 'clients', elem: 'logo' },
													url: ''
												}
											]
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
					block: 'action',
					content: [
						{
							block: 'text',
							mix: { block: 'action', elem: 'promo' },
							content: 'Need a graphic designer?'
						},
						{
							block: 'button',
							mix: { block: 'action', elem: 'button' },
							mods: { type: 'link' },
							url: '/',
							text: ''
						}
					]
				}
			]
		}
	]
};
