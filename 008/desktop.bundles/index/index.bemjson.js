module.exports = {
	block : 'page',
	title : 'Untitled (008)',
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
					elem: 'side',
					elemMods: { align: 'left' },
					content: [
						{
							block: 'logo',
							mix: { block: 'header', elem: 'logo' },
							content: [
								{
									block: 'image',
									mix: { block: 'logo', elem: 'image' },
									url: '/img/logo/logo__image.png',
									alt: 'Hockley & Dawson'
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
							content: [
								{ content: 'Home' },
								{ content: 'Projects', active: true },
								{ content: 'Case studies' },
								{ content: 'Contact us' },
								{ content: 'Blog' }
							].map(function(item) {
								return [
									{
										block: 'menu-item',
										mix: { block: 'header', elem: 'menu-item', elemMods: { active: item.active } },
										content: [
											{
												block: 'link',
												mix: { block: 'menu-item', elem: 'link' },
												url: '#',
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
		},
		{
			block: 'content',
			content: [
				{
					block: 'main',
					content: [
						{
							block: 'category-info',
							content: [
								{
									elem: 'title',
									mix: { block: 'text' },
									content: 'Landmark Buildings'
								},
								{
									elem: 'description',
									mix: { block: 'text' },
									content: 'Our landmark building projects include work places such as Tower of London and The Monument as well as Smithfield Market.'
								}
							]
						},
						{
							block: 'project-list',
							content: [
								{
									title: 'Kensington Palace',
									client: 'Historic Royal Palaces',
									architect: 'John Simpson & Partners',
									description: 'Alterations and conservation to create the Palace for All project',
									img: '/img/project/__image/_place/project__image_place_kens.jpg',
									avarded: 'true',
									avard: 'RICS London Awards - Tourism & Leisure and Community Benefit'
								},
								{
									title: 'The White Tower',
									client: 'Historic Royal Palaces',
									architect: 'Carden & Godfrey Architects',
									description: 'Conservation and renovation of the White Tower at the Tower of London. The White Tower was under renovation for three years, keeping it scaffolded and shrouded whilst being cleaned and essential remedial work took place. It was the largest conservation project undertaken by the Historic Royal Palaces.',
									img: '/img/project/__image/_place/project__image_place_white.jpg'
								},
								{
									title: 'The Monument',
									client: 'City of London',
									architect: 'Julian Harrap Architects',
									description: 'Conservation and remedial to The Monument',
									img: '/img/project/__image/_place/project__image_place_monum.jpg'
								}
							].map(function(item) {
								return [
									{
										block: 'project',
										content: [
											{
												block: 'image',
												mix: { block: 'project', elem: 'image' },
												url: item.img
											},
											{
												elem: 'info',
												content: [
													{
														elem: 'title',
														mix: { block: 'text' },
														content: item.title
													},
													{
														elem: 'client',
														mix: { block: 'client' },
														content: item.client
													},
													{
														elem: 'architect',
														mix: { block: 'architect' },
														content: item.architect
													}
												]
											},
											{
												elem: 'read-more',
												mix: { block: 'button' },
												icon: {
													block: 'icon',
													url: ''
												}
											},
											{
												elem: 'details',
												content: [
													{
														block: 'button',
														mix: { block: 'project', elem: 'to-all-photo' },
														text: 'View Project Photos'
													},
													{
														elem: 'description',
														mix: { block: 'text' },
														content: item.description
													}
												]
											}
										]
									}
								];
							})
						}
					]
				},
				{
					block: 'sidebar',
					content: [
						{
							block: 'page-info',
							content: [
								{
									elem: 'title',
									mix: { block: 'text' },
									content: 'Projects',
								},
								{
									elem: 'description',
									mix: { block: 'text' },
									content: 'An array of diverse projects across many categories...'
								}
							]
						},
						{
							block: 'menu',
							mix: { block: 'sidebar', elem: 'menu' },
							content: [
								{ content: 'Castles (6)' },
								{ content: 'Cathedrals, Abbeys, Churches and places of worship. (5)' },
								{ content: 'Commercial (4)' },
								{ content: 'Conservation (4)' },
								{ content: 'Country Houses & Estates (2)' },
								{ content: 'Domestic & Remedial (2)' },
								{ content: 'Gardens, Arches & Bridges (4)' },
								{ content: 'Landmark Buildings (3)', active: true },
								{ content: 'London Projects (2)' },
								{ content: 'Museums & Education (2)' },
								{ content: 'Previous projects of interest (2)' },
								{ content: 'Projects abroad (2)' },
								{ content: 'Recent Awards (1)' },
								{ content: 'Ruins (3)' },
								{ content: 'Talks & Lectures (2)' }
							].map(function(item) {

								return [
									{
										block: 'menu-item',
										mix: { block: 'sidebar', elem: 'menu-item', elemMods: { active: item.active } },
										content: [
											{
												block: 'link',
												mix: { block: 'menu-item', elem: 'link' },
												url: '#',
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
									block: 'contacts',
									content: [
										{
											elem: 'title',
											mix: { block: 'text' },
											content: 'Contact details'
										},
										{
											elem: 'main',
											content: [
												{
													elem: 'address',
													mix: { block: 'text' },
													content: [
														'Hockley & Dawson Consulting Engineers Ltd<br>',
														'The Great Barn, Smithbrook Barns<br>',
														'Cranleigh, Surrey. GU6 8LH'
													]
												},
												{
													elem: 'tel',
													mix: { block: 'text' },
													content: '01483 548784'
												},
												{
													elem: 'fax',
													mix: { block: 'text' },
													content: '01483 268765'
												},
												{
													elem: 'email',
													mix: { block: 'text' },
													content: [
														{
															block: 'link',
															mix: { block: 'contacts', elem: 'email-address' },
															url: 'mailto:admin@hockleyanddawson.co.uk',
															content: 'admin@hockleyanddawson.co.uk'
														}
													]
												}
											]
										},
										{
											block: 'image',
											mix: { block: 'contacts', elem: 'annyversary' },
											url: 'http://www.hockleyanddawson.co.uk/assets/images/main/50th_birthday.png'
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
									block: 'follow',
									mix: { block: 'footer', elem: 'follow' },
									content: [
										{
											elem: 'title',
											mix: { block: 'text' },
											content: 'Follow us'
										},
										{
											block: 'social',
											mix: { block: 'follow', elem: 'social' },
											content: [
												{
													elem: 'item',
													content: [
														{
															block: 'link',
															mix: { block: 'social', elem: 'link', elemMods: { site: 'linkedin' } },
															url: '#',
															content: 'LinkedIn'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'link',
															mix: { block: 'social', elem: 'link', elemMods: { site: 'twitter' } },
															url: '#',
															content: 'Twitter'
														},
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'link',
															mix: { block: 'social', elem: 'link', elemMods: { site: 'facebook' } },
															url: '#',
															content: 'Facebook'
														}
													]
												}
											]
										},
										{
											block: 'partners',
											mix: { block: 'follow', elem: 'partners' },
											content: [
												{ url: '#', img: '/img/partners/__item/_org/partners__item_org_chas.png' },
												{ url: '#', img: '/img/partners/__item/_org/partners__item_org_ace.png' },
												{ url: '#', img: '/img/partners/__item/_org/partners__item_org_constr.png' },
												{ url: '#', img: '/img/partners/__item/_org/partners__item_org_qscl.png' },
											].map(function(item) {
												return [
													{
														elem: 'item',
														content: [
															{
																block: 'link',
																mix: { block: 'partners', elem: 'link' },
																url: item.url,
																content: [
																	{
																		block: 'image',
																		mix: { block: 'partners', elem: 'image' },
																		url: item.img
																	}
																]
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
					elem: 'section',
					content: [
						{
							elem: 'side',
							elemMods: { align: 'left' },
							content: [
								{
									block: 'menu',
									mix: { block: 'footer', elem: 'menu' },
									content: [
										{ content: 'About', url: '#' },
										{ content: 'Vacancies', url: '#' },
										{ content: 'Links', url: '#' },
										{ content: 'Cookie policy', url: '#' }
									].map(function(item, id) {
										var pure = {
											block: 'menu-item',
											mix: { block: 'footer', elem: 'menu-item' },
											content: [
												{
													block: 'link',
													mix: { block: 'menu-item', elem: 'link' },
													url: item.url,
													content: item.content
												}
											]
										};
										var split = {
											elem: 'split',
											mix: [ { block: 'text' }, { block: 'footer', elem: 'split' } ],
											content: '|'
										};

										if (id === 0)
											return pure;
										else
											return [ split, pure ];
									})
								}
							]
						},
						{
							elem: 'side',
							elemMods: { align: 'right' },
							content: [
								{
									block: 'copyright',
									content: [
										{
											elem: 'description',
											mix: { block: 'text' },
											content: '© 2012 Hockley & Dawson Ltd | website by '
										},
										{
											block: 'link',
											mix: { block: 'copyright', elem: 'link' },
											url: 'http://github.com/Oopscurity',
											content: 'Oopscurity'
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
