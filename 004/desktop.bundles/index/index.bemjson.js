module.exports = {
	block : 'page',
	title : 'Title of the page',
	favicon : '/favicon.ico',
	head : [
		{ elem : 'meta', attrs : { name : 'description', content : '' } },
		// { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
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
									url: ''
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
							block: 'avatar',
							mix: { block: 'info', elem: 'avatar' },
							content: [
								{
									block: 'image',
									url: ''
								}
							]
						},
						{
							elem: 'title',
							mix: { block: 'text' },
							content: 'Free portfolio psd template for graphic designers'
						},
						{
							elem: 'description',
							mix: { block: 'text' },
							content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
						},
						{
							block: 'button',
							mods: { type: 'link' },
							mix: { block: 'info', elem: 'action' },
							text: 'Hire me',
							url: ''
						},
						{
							elem: 'pointer',
							content: [
								{
									block: 'image',
									url: '/img/info/__pointer/info__pointer.png'
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
					content: [
						{
							block: 'about',
							content: [
								{
									elem: 'title',
									mix: [ { block: 'text', mods: { type: 'title' } } ],
									content: 'About me'
								},
								{
									elem: 'description',
									mix: { block: 'text', mods: { type: 'content' } },
									content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'
								}
							]
						}
					]
				},
				{
					elem: 'section',
					elemMods: { bg: 'lightblue' },
					content: [
						{
							block: 'skills',
							content: [
								{
									elem: 'title',
									mix: [ { block: 'text', mods: { type: 'title' } } ],
									content: 'Expert in'
								},
								{
									elem: 'list',
									content: [
										{ name: 'Mobile app design', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim', url: '/img/skills/__image/_job/skills__image_job_mobile.png' },
										{ name: 'Web design', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', url: '/img/skills/__image/_job/skills__image_job_webdesign.png' },
										{ name: 'Web development', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim', url: '/img/skills/__image/_job/skills__image_job_webdev.png' },
										{ name: 'Product design', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim', url: '/img/skills/__image/_job/skills__image_job_product.png' },
										{ name: 'UX & UI', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', url: '/img/skills/__image/_job/skills__image_job_uxui.png' },
										{ name: 'Animations', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim', url: '/img/skills/__image/_job/skills__image_job_anim.png' },
									].map(function(item) {
										return [
											{
												elem: 'item',
												content: [
													{
														elem: 'wrap',
														content: [
															{
																block: 'image',
																mix: { block: 'skills', elem: 'image' },
																url: item.url
															}
														]
													},
													{
														elem: 'name',
														mix: { block: 'text' },
														content: item.name
													},
													{
														elem: 'description',
														mix: { block: 'text', mods: { type: 'content' } },
														content: item.description
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
							block: 'latest',
							content: [
								{
									elem: 'title',
									mix: [{ block: 'text', mods: { type: 'title' } }, { block: 'latest', elem: 'title' } ],
									content: 'Latest works'
								},
								{
									elem: 'list',
									content: [
										{ url: '/img/latest/__image/_num/latest__image_num_1.png' },
										{ url: '/img/latest/__image/_num/latest__image_num_2.png' },
										{ url: '/img/latest/__image/_num/latest__image_num_3.png' },
										{ url: '/img/latest/__image/_num/latest__image_num_4.png' },
										{ url: '/img/latest/__image/_num/latest__image_num_5.png' },
										{ url: '/img/latest/__image/_num/latest__image_num_6.png' }
									].map(function(item) {
										return [
											{
												elem: 'item',
												content: [
													{
														block: 'image',
														mix: { block: 'latest', elem: 'image' },
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
					elemMods: { bg: 'lightblue' },
					content: [
						{
							block: 'clients',
							content: [
								{
									block: 'title',
									mix: [ { block: 'text', mods: { type: 'title' } }, { block: 'clients', elem: 'title' } ],
									content: 'Clients'
								},
								{
									elem: 'list',
									content: [
										{ url: '/img/clients/__image/_org/clients__image_org_ms.png' },
										{ url: '/img/clients/__image/_org/clients__image_org_samsung.png' },
										{ url: '/img/clients/__image/_org/clients__image_org_ibm.png' },
										{ url: '/img/clients/__image/_org/clients__image_org_google.png' }
									].map(function(item) {
										return [
											{
												elem: 'item',
												content: [
													{
														block: 'image',
														mix: { block: 'clients', elem: 'image' },
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
