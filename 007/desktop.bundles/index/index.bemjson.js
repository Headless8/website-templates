module.exports = {
	block : 'page',
	title : '007',
	favicon : '/favicon.ico',
	head : [
		{ elem : 'meta', attrs : { name : 'description', content : '' } },
		// { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'normalize/normalize.css' },
		{ elem : 'css', url : 'index.min.css' }
	],
	scripts: [{ elem : 'js', url : 'index.min.js' }],
	content : [
		{
			block: 'header',
			content: [
				{
					elem: 'section',
					elemMods: { theme: 'black' },
					mix: { block: 'clearfix' },
					content: [
						{
							elem: 'side',
							elemMods: { align: 'left' },
							content: [
								{
									block: 'logo',
									content: [
										{
											block: 'link',
											mix: { block: 'logo', elem: 'link' },
											url: '#',
											title: 'Return to home',
											content: [
												{
													block: 'image',
													mix: { block: 'logo', elem: 'image' },
													url: '/img/log.gif'
												}
											]
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
									block: 'menu',
									mix: { block: 'header', elem: 'menu' },
									content: [
										{
											block: 'menu-item',
											content: [
												{
													block: 'link',
													mix: { block: 'menu-item', elem: 'link' },
													url: '#',
													content: 'About'
												}
											]
										},
										{
											block: 'menu-item',
											content: [
												{
													block: 'link',
													mix: { block: 'menu-item', elem: 'link' },
													url: '#',
													content: 'Services'
												}
											]
										},
										{
											block: 'menu-item',
											content: [
												{
													block: 'link',
													mix: { block: 'menu-item', elem: 'link' },
													url: '#',
													content: 'Contact'
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
					elemMods: { theme: 'blue' },
					mix: { block: 'clearfix' },
					content: [
						{
							block: 'promo',
							content: [
								{
									elem: 'main',
									elemMods: { align: 'left' },
									content: [
										{
											elem: 'title',
											mix: { block: 'text' },
											content: 'Really big title 2.0'
										},
										{
											elem: 'subtitle',
											mix: { block: 'text' },
											content: 'Simple, yet engaging and descriptive subtitle'
										},
										{
											elem: 'action-block',
											content: [
												{
													block: 'button',
													mods: { type: 'link' },
													mix: { block: 'promo', elem: 'action', elemMods: { type: 'primary' } },
													text: 'Primary call to action',
													url: ''
												},
												{
													block: 'button',
													mods: { type: 'link' },
													mix: { block: 'promo', elem: 'action', elemMods: { type: 'secondary' } },
													text: 'Secondary action',
													url: ''
												}
											]
										}
									]
								},
								{
									elem: 'illustration',
									elemMods: { align: 'right' },
									content: [
										{
											block: 'image',
											alt: 'Illustration',
											url: '/img/mac.png'
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
			block: 'content',
			content: [
				{
					elem: 'section',
					mix: { block: 'clearfix' },
					content: [
						{
							elem: 'column',
							elemMods: { align: 'left', size: 'large' },
							content: [
								{
									block: 'psd-to-html',
									content: [
										{
											elem: 'title',
											mix: { block: 'text' },
											content: 'PSD to HTML5 & CSS3'
										},
										{
											elem: 'text',
											mix: { block: 'text' },
											content: 'Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo.'
										},
										{
											elem: 'example-list',
											content: [
												{
													block: 'example-item',
													content: [
														{
															block: 'image',
															mix: { block: 'example-item', elem: 'image' },
															alt: 'A cute Puppy',
															url: '/img/example__puppy.jpg'
														},
														{
															elem: 'title',
															mix: { block: 'text' },
															content: 'A cute Puppy'
														},
														{
															elem: 'text',
															mix: { block: 'text' },
															content: 'Maecenas faucibus mollis interdum. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam.'
														}
													]
												},
												{
													block: 'example-item',
													content: [
														{
															block: 'image',
															mix: { block: 'example-item', elem: 'image' },
															alt: 'A crazy dog',
															url: '/img/example__crazy.jpg'
														},
														{
															elem: 'title',
															mix: { block: 'text' },
															content: 'A crazy dog'
														},
														{
															elem: 'text',
															mix: { block: 'text' },
															content: 'Maecenas faucibus mollis interdum. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam.'
														}
													]
												},
												{
													block: 'example-item',
													content: [
														{
															block: 'image',
															mix: { block: 'example-item', elem: 'image' },
															alt: 'A beautiful Huskey',
															url: '/img/example__huskey.jpg'
														},
														{
															elem: 'title',
															mix: { block: 'text' },
															content: 'A beautiful Huskey'
														},
														{
															elem: 'text',
															mix: { block: 'text' },
															content: 'Maecenas faucibus mollis interdum. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam.'
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
							elem: 'column',
							elemMods: { align: 'right' },
							content: [
								{
									block: 'aside',
									content: [
										{
											block: 'news',
											content: [
												{
													elem: 'title',
													mix: { block: 'text' },
													content: 'Latest news'
												},
												{
													elem: 'list',
													content: [
														{
															elem: 'item',
															content: [
																{
																	elem: 'date',
																	mix: { block: 'text' },
																	content: 'DEC 31, 2014'
																},
																{
																	elem: 'description',
																	mix: { block: 'text' },
																	content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam eget risus varius blandit sit amet non magna.'
																}
															]
														}
													]
												}
											]
										},
										{
											block: 'social',
											content: [
												{
													elem: 'title',
													mix: { block: 'text' },
													content: 'Follow us'
												},
												{
													elem: 'list',
													content: [
														{
															elem: 'item',
															content: [
																{
																	block: 'link',
																	mix: { block: 'social', elem: 'link' },
																	url: '#',
																	content: [
																		{
																			block: 'image',
																			alt: 'twitter',
																			url: '/img/social_twitter.gif'
																		}
																	]
																}
															]
														},
														{
															elem: 'item',
															content: [
																{
																	block: 'link',
																	mix: { block: 'social', elem: 'link' },
																	url: '#',
																	content: [
																		{
																			block: 'image',
																			alt: 'fb',
																			url: '/img/social_fb.gif'
																		}
																	]
																}
															]
														},
														{
															elem: 'item',
															content: [
																{
																	block: 'link',
																	mix: { block: 'social', elem: 'link' },
																	url: '#',
																	content: [
																		{
																			block: 'image',
																			alt: 'youtube',
																			url: '/img/social_youtube.gif'
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
								}
							]
						}
					]
				},
				{
					elem: 'section',
					elemMods: { type: 'secondary', bg: 'grey' },
					content: [
						{
							block: 'subscribe',
							content: [
								{
									elem: 'appeal',
									mix: { block: 'text' },
									content: 'Keep up to date with the latest news from our company'
								},
								{
									block: 'control-group',
									mix: { block: 'subscribe', elem: 'form' },
									content: [
										{
											block: 'input',
											mix: { block: 'subscribe', elem: 'field' },
											mods: { type: 'email' },
											name: 'email',
											placeholder: 'Enter your email here'
										},
										{
											block: 'button',
											mix: { block: 'subscribe', elem: 'action' },
											mods: { type: 'input' },
											text: 'Sign up'
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
					elem: 'side',
					elemMods: { align: 'left' },
					content: [
						{
							block: 'copyright',
							content: 'Copyright © 2014 Company Name'
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
								{
									block: 'menu-item',
									content: [
										{
											block: 'link',
											mix: { block: 'footer', elem: 'link' },
											url: '#',
											content: 'Home'
										}
									]
								},
								{
									block: 'menu-item',
									content: [
										{
											block: 'link',
											mix: { block: 'footer', elem: 'link' },
											url: '#',
											content: 'About'
										}
									]
								},
								{
									block: 'menu-item',
									content: [
										{
											block: 'link',
											mix: { block: 'footer', elem: 'link' },
											url: '#',
											content: 'Services'
										}
									]
								},
								{
									block: 'menu-item',
									content: [
										{
											block: 'link',
											mix: { block: 'footer', elem: 'link' },
											url: '#',
											content: 'Contact'
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
};
