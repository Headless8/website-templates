module.exports = {
	block : 'page',
	title : 'Sedona (003)',
	favicon : '/favicon.ico',
	head : [
		{ elem : 'meta', attrs : { name : 'description', content : '' } },
		// { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'normalize.css'},
		{ elem: 'css', url: 'https://fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700&subset=latin,cyrillic'},
		{ elem : 'css', url : 'index.min.css' }
	],
	scripts: [{ elem : 'js', url : 'index.min.js' }],
	content : [
		{
			block: 'header',
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
									mix: { block: 'menu-item', elem: 'link', elemMods: { active: true } },
									url: '#',
									content: 'Информация'
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
									content: 'Фото и видео'
								}
							]
						},
						{
							block: 'menu-item',
							mods: { type: 'logo' },
							content: [
								{
									block: 'link',
									mix: { block: 'menu-item', elem: 'link' },
									url: '#',
									content: [
										{
											block: 'image',
											mix: { block: 'menu-item', elem: 'image'},
											alt: 'Sedona',
											url: '../../img/logo.png'
										}
									]
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
									content: 'Карта штата'
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
									content: 'Гостиницы'
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
							block: 'intro',
							content: [
								{							
									block: 'image',
									mix: [
										{ block: 'intro', elem: 'welcome'},
										{ block: 'intro', elem: 'image'}
									],
									alt: 'Welcome to the gorgeous',
									url: '../../img/intro-welcome.png'
									
								},
								{
									block: 'image',
									mix: [
										{ block: 'intro', elem: 'title' },
										{ block: 'intro', elem: 'image'}
									],
									alt: 'Sedona',
									url: '../../img/intro-sedona.png'
								},
								{
									block: 'image',
									mix: [
										{ block: 'intro', elem: 'slogan'},
										{ block: 'intro', elem: 'image'}
									],
									alt: '"Because the Grand Canyon sucks!"',
									url: '../../img/intro-slogan.png'
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
									elem: 'header',
									content: [
										{
											block: 'promo',
											mix: { block: 'features', elem: 'promo' },
											content: 'Седона — небольшой городок в Аризоне, заслуживающий большего!'
										},
										{
											block: 'appeal',
											mix: { block: 'features', elem: 'appeal' },
											content: 'Рассмотрим 5 причин, по которым Седона круче, чем Гранд Каньон!' 
										}
									]
								},
								{
									elem: 'content',
									content: [
										{
											elem: 'row',
											content: [
												{
													block: 'features-item',
													mods: { type: 'reason', align: 'left', theme: 'blue' },
													content: [
														{
															elem: 'title',
															content: 'Настоящий городок'
														},
														{
															elem: 'num',
															content: '- №1 -'
														},
														{
															elem: 'description',
															content: 'Седона не аттракцион для туристов, там течет своя жизнь'
														}
													]
												},
												{
													block: 'image',
													mix: { block: 'features', elem: 'image' },
													mods: { align: 'right' },
													alt: '',
													url: '../../img/pic/reason1.jpg'
												}
											]
										},
										{
											elem: 'row',
											content: [
												{
													block: 'features-item',
													mods: { type: 'feature' },
													content: [
														{
															block: 'image',
															mix: { block: 'features-item', elem: 'image' },
															url: '../../img/ico/house.png'
														},
														{
															elem: 'title',
															content: 'Жилье'
														},
														{
															elem: 'description',
															content: 'Рекомендуем пожить в настоящем мотеле, все как в кино!'
														}
													]
												},
												{
													block: 'features-item',
													mods: { type: 'feature' },
													content: [
														{
															block: 'image',
															mix: { block: 'features-item', elem: 'image' },
															url: '../../img/ico/food.png'
														},
														{
															elem: 'title',
															content: 'Еда'
														},
														{
															elem: 'description',
															content: 'Всегда заказывайте фирменный бургер, вы не разочаруетесь!'
														}
													]
												},
												{
													block: 'features-item',
													mods: { type: 'feature' },
													content: [
														{
															block: 'image',
															mix: { block: 'features-item', elem: 'image' },
															url: '../../img/ico/gift.png'
														},
														{
															elem: 'title',
															content: 'Сувениры'
														},
														{
															elem: 'description',
															content: 'Не только китайского, но и местного производства!'
														}
													]
												}
											]
										},
										{
											elem: 'row',
											content: [
												{
													block: 'image',
													mix: { block: 'features', elem: 'image' },
													mods: { align: 'left' },
													url: '../../img/pic/bridge.jpg',
													alt: ''
												},
												{
													block: 'features-item',
													mods: { type: 'reason', align: 'right', theme: 'blue' },
													content: [
														{
															elem: 'title',
															content: 'Там есть мост Дьявола'
														},
														{
															elem: 'num',
															content: '- №2 -'
														},
														{
															elem: 'description',
															content: 'Да, по нему можно пройти! Если, конечно, вы осмелитесь'
														}
													]
												}
											]
										},
										{
											elem: 'row',
											content: [
												{
													block: 'features-item',
													mods: { type: 'reason', theme: 'grey' },
													content: [
														{
															elem: 'title',
															content: 'Небольшая площадь'
														},
														{
															elem: 'num',
															content: '- №3 -'
														},
														{
															elem: 'description',
															content: 'Все достопримечательности находятся очень близко'
														}
													]
												},
												{
													block: 'features-item',
													mods: { type: 'reason', theme: 'grey' },
													content: [
														{
															elem: 'title',
															content: 'Красивая дорога'
														},
														{
															elem: 'num',
															content: '- №4 -'
														},
														{
															elem: 'description',
															content: 'Ехать в Седону из Лас-Вегаса совсем не скучно!'
														}
													]
												},
												{
													block: 'features-item',
													mods: { type: 'reason', theme: 'grey' },
													content: [
														{
															elem: 'title',
															content: 'Мало туристов'
														},
														{
															elem: 'num',
															content: '- №5 -'
														},
														{
															elem: 'description',
															content: 'Большинство едет в Гранд Каньон и толпится там'
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
					content: [
						{
							block: 'search',
							content: [
								{
									elem: 'header',
									content: [
										{
											elem: 'title',
											content: 'Заинтересовались?'
										},
										{
											elem: 'description',
											content: 'Укажите предполагаемые даты поездки,<br>и мы покажем вам лучшие предложения гостиниц в Седоне'
										}
									]
								},
								{
									elem: 'content',
									content: [
										{
											block: 'popup',
											mix: { block: 'search', elem: 'popup' }, 
											content: [
												{
													elem: 'header',
													content: 'Поиск гостиницы в Седоне'
												},
												{
													elem: 'form',
													content: [
														{
															elem: 'row',
															id: 'children',
															content: [
																{
																	elem: 'label',
																	elemMods: { align: 'left' },
																	for: 'arrival',
																	content: 'Дата заезда:'
																},
																{
																	block: 'input',
																	id: 'arrival',
																	name: 'arrival',
																	mix: { block: 'popup', elem: 'input', elemMods: { type: 'date' } },
																	placeholder: '24 апреля 2014'
																}
															]
														},
														{
															elem: 'row',
															id: 'children',
															content: [
																{
																	elem: 'label',
																	elemMods: { align: 'left' },
																	for: 'departure',
																	content: 'Дата выезда:'
																},
																{
																	block: 'input',
																	id: 'departure',
																	name: 'departure',
																	mix: { block: 'popup', elem: 'input', elemMods: { type: 'date' } },
																	placeholder: '4 июля 2014'
																}
															]
														},
														{
															elem: 'row',
															content: [
																{
																	elem: 'column',
																	elemMods: { align: 'left' },
																	content: [
																		{
																			elem: 'label',
																			elemMods: { align: 'left' },
																			for: 'adult',
																			content: 'Взрослые:'
																		},
																		{
																			elem: 'field',
																			elemMods: { align: 'right' },
																			content: [
																				{
																					block: 'button',
																					mix: { block: 'popup', elem: 'button', elemMods: { type: 'minus' } },
																					id: 'adult_minus'
																				},
																				{
																					block: 'input',
																					id: 'adult',
																					name: 'adult',
																					mix: { block: 'popup', elem: 'input', elemMods: { min: true } },
																					size: '5',
																					placeholder: '2',
																				},
																				{
																					block: 'button',
																					mix: { block: 'popup', elem: 'button', elemMods: { type: 'plus'} },
																					id: 'adult_plus'
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
																			elem: 'label',
																			elemMods: { align: 'left', min: true },
																			for: 'children',
																			content: 'Дети:'
																		},
																		{
																			elem: 'field',
																			elemMods: { align: 'right' },
																			content: [
																				{
																					block: 'button',
																					mix: { block: 'popup', elem: 'button', elemMods: { type: 'minus'} },
																					id: 'children_minus'
																				},
																				{
																					block: 'input',
																					id: 'children',
																					name: 'children',
																					mix: { block: 'popup', elem: 'input', elemMods: { min: true } },
																					placeholder: '0'
																				},
																				{
																					block: 'button',
																					mix: { block: 'popup', elem: 'button', elemMods: { type: 'plus'} },
																					id: 'children_plus'
																				}
																			]
																		}
																	]
																}
															]
														},
														{
															elem: 'row',
															content: [
																{
																	block: 'button',
																	mods: { type: 'submit' },
																	mix: { block: 'popup', elem: 'submit' },
																	text: 'Найти'
																}
															]
														}
													]
												}
											]
										},
										{
											block: 'image',
											mix: { block: 'search', elem: 'image' },
											url: '/img/pic/map.jpg',
											height: '583'
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
							elem: 'hashtag',
							content: '#visitsedona'
						}
					]
				},
				{
					elem: 'section',
					content: [
						{
							block: 'social',
							content: [
								{
									elem: 'item',
									content: [
										{
											block: 'link',
											mix: { block: 'social', elem: 'link', elemMods: { site: 'twitter' } },
											url: '#'
										}
									]
								},
								{
									elem: 'item',
									content: [
										{
											block: 'link',
											mix: { block: 'social', elem: 'link', elemMods: { site: 'fb' } },
											url: '#'
										}
									]
								},
								{
									elem: 'item',
									content: [
										{
											block: 'link',
											mix: { block: 'social', elem: 'link', elemMods: { site: 'youtube' } },
											url: '#'
										}
									]
								},
							]
						}
					]
				},
				{
					elem: 'section',
					content: [
						{
							block: 'copyright',
							mix: { block: 'footer', elem: 'copyright' },
							content: [
								{
									elem: 'text',
									content: 'Website by'
								},
								{
									block: 'link',
									mix: { block: 'copyright', elem: 'author' },
									url: '#'
								},
								{
									elem: 'text',
									content: 'for'
								},
								{
									block: 'link',
									mix: { block: 'copyright', elem: 'client' },
									url: '#'
								}
							]
						}
					]
				}
			]
		}
	]
};
