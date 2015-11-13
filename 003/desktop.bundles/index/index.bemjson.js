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
					block: 'menu',
					mix: { block: 'header', elem: 'menu' },
					content: [
						{
							block: 'menu-item',
							content: [
								{
									block: 'link',
									mix: { block: 'menu', elem: 'link' },
									url: '#',
									content: 'Информация'
								},
								{
									block: 'link',
									mix: { block: 'menu', elem: 'link' },
									url: '#',
									content: 'Фото и видео'
								},
								{
									block: 'link',
									mods: { type: 'logo' },
									mix: { block: 'menu', elem: 'link' },
									url: '#',
									content: [
										{
											block: 'image',
											alt: 'Sedona',
											url: '#'
										}
									]
								},
								{
									block: 'link',
									mix: { block: 'menu', elem: 'link' },
									url: '#',
									content: 'Карта штата'
								},
								{
									block: 'link',
									mix: { block: 'menu', elem: 'link' },
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
									elem: 'greeting',
									content: [
										{
											block: 'image',
											mix: { block: 'intro', elem: 'welcome' },
											alt: 'Welcome to the gorgeous',
											url: '#'
										}
									]
								},
								{
									block: 'image',
									mix: { block: 'intro', elem: 'title'},
									alt: 'Sedona',
									url: '#'
								},
								{
									block: 'image',
									mix: { block: 'intro', elem: 'slogan'},
									alt: '"Because the Grand Canyon sucks!"',
									url: '#'
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
													mods: { type: 'reason', align: 'left', illustration: 'true' },
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
													mix: { block: 'features', elem: 'image', align: 'right'},
													alt: '',
													url: '#'
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
															mix: { block: 'features__item', elem: 'image' },
															url: '#'
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
															mix: { block: 'features__item', elem: 'image' },
															url: '#'
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
															mix: { block: 'features__item', elem: 'image' },
															url: '#'
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
													mods: { align: 'left' },
													url: ''
												},
												{
													block: 'features-item',
													mods: { type: 'reason', align: 'right', illustration: 'true' },
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
													mods: { type: 'reason' },
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
													mods: { type: 'reason' },
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
													mods: { type: 'reason' },
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
									elem: 'title',
									content: 'Заинтересовались?'
								},
								{
									elem: 'description',
									content: 'Укажите предполагаемые даты поездки, и мы покажем вам лучшие предложения гостиниц в Седоне'
								},
								{
									block: 'popup',
									mix: { block: 'search', elem: 'popup' }, 
									content: [
										{
											elem: 'title',
											content: 'Поиск гостиницы в Седоне'
										},
										{
											block: 'form',
											content: [
												{
													block: 'input',
													placeholder: '24 апреля 2014'
												}
											]
										}
									]
								},
								{
									block: 'image',
									url: ''
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
					content: []
				},
				{
					elem: 'section',
					content: [
						{
							block: 'social',
							content: [
								{
									block: 'button',
									mix: { block: 'social', elem: 'item' },
									mods: { type: 'link', platform: 'twitter' },
									ico: ''
								},
								{
									block: 'button',
									mix: { block: 'social', elem: 'item' },
									mods: { type: 'link', platform: 'fb' },
									ico: ''
								},
								{
									block: 'button',
									mix: { block: 'social', elem: 'item' },
									mods: { type: 'link', platform: 'vk' },
									ico: ''
								}
							]
						}
					]
				},
				{
					elem: 'section',
					content: [
						{
							block: 'copyright',
							content: [
								{
									block: 'link',
									mix: { block: 'copyright', elem: 'author' },
									after: 'Website by',
									content: [
										{
											block: 'image',
											mix: { block: 'copyright', elem: 'author-image'}
										}
									]
								},
								{
									block: 'link',
									mix: { block: 'copyright', elem: 'client' },
									after: 'for',
									content: [
										{
											block: 'image',
											mix: { block: 'copyright', elem: 'client-image'}
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
