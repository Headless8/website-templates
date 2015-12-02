module.exports = {
	block : 'page',
	title : 'PSD HTML Service',
	favicon : '/favicon.ico',
	head : [
		{ elem : 'meta', attrs : { name : 'description', content : '' } },
		{ elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
		{ elem : 'css', url : 'http://fonts.googleapis.com/css?family=Open+Sans' },
		{ elem : 'css', url : 'index.min.css' },
	],
	scripts: [{ elem : 'js', url : 'index.min.js' }],
	content: [
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
									mix: { block: 'header', elem: 'logo' },
									content: [
										{
											block: 'image',
											mix: { block: 'logo', elem: 'image' },
											url: '/img/logo/__image/logo__image.gif'
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
										{ content: 'Home', url: '#' },
										{ content: 'Our services', url: '#' },
										{ content: 'Quote request', url: '#' },
										{ content: 'How we work', url: '#' },
										{ content: 'About us', url: '#' },
										{ content: 'Why us', url: '#' },
										{ content: 'FAQ', url: '#' }
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
				},
				{
					elem: 'section',
					elemMods: { shadow: true },
					content: [
						{
							elem: 'title',
							mix: { block: 'text' },
							content: 'How we convert psd into html'
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
					mix: { block: 'content', elem: 'main' },
					content: [
						{
							elem: 'section',
							content: [
								{
									elem: 'title',
									mix: { block: 'text' },
									content: 'Convert PSD into HTML'
								},
								{
									block: 'theory',
									content: [
										{
											elem: 'wrap',
											content: [
												{
													block: 'image',
													mix: { block: 'theory', elem: 'image' },
													url: '/img/theory/__image/theory__image.gif'
												}
											]
										},
										{
											elem: 'description',
											mix: { block: 'text' },
											content: 'PSD files have a special purpose they serve, which is usually for editing photographs on your computer. While many web users like to use PSD files to build fancy-looking web pages, PSD files are not ideal formats for web pages. They usually are not compatible with browsers and will cause a great headache. HTML files are the best option for the most universally compatible web pages. Whether you want to convert PSD to HTML5, HTML4, or XHTML, our online HTML experts can help you convert PSD into HTML in 5 steps!'
										}
									]
								}
							]
						},
						{
							elem: 'section',
							content: [
								{
									block: 'progress',
									content: [
										{
											elem: 'wrap',
											content: [
												{
													block: 'image',
													mix: { block: 'progress', elem: 'image' },
													url: '/img/progress/__image/progress__image.gif'
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
									block: 'steps',
									content: [
										{ title: 'Step one', url: '/img/steps/__image/_num/steps__image_num_one.gif', description: 'The first thing you need to do is gather the PSD files that you want converted to HTML. Whether you wish to convert one single file or a whole batch of web page files, have everything ready to go.' },
										{ title: 'Step two', url: '/img/steps/__image/_num/steps__image_num_two.gif', description: 'The second step in converting your PSD files to HTML is quite simply contacting us. You can send us an email if you have questions, and we’ll be happy to answer all questions and address any concerns. We can’t help you convert your PSD to HTML5 or XHTML if you never contact us.' },
										{ title: 'Step three', url: '/img/steps/__image/_num/steps__image_num_three.gif', description: 'The third step in your conversion process is to fill out a form for your PSD to HTML conversion. This online form is easy to understand and easy to fill out. Most importantly, the online form allows you to make sure we know exactly what specific things you want done to your web pages.' },
										{ title: 'Step four', url: '/img/steps/__image/_num/steps__image_num_four.gif', description: 'Fourth, you make your one time credit card payment for our services. You will find that the prices we ask for our services are the lowest in the industry. Better yet, we use a special online payment processing system that keeps your financial information safe, secure, and 100% confidential.' },
										{ title: 'Step five', url: '/img/steps/__image/_num/steps__image_num_five.gif', description: 'The fifth step will be the easiest for you. This is the part where you get to sit back and relax while our web page gurus work on converting your PSD files into HTML format. The last thing you will need to do is take a look at the new HTML pages we give back to you. Let us know if that is what you’re looking for, or if you need revisions made. If you do need revisions, we will be happy to get to them immediately. After that, your PSD to HTML conversion is complete!' },
									].map(function(item, id) {
										
										var orderCount = id % 2;
										var orderValue = !orderCount ? 'normal' : 'reverse'

										return [
											{
												elem: 'step',
												elemMods: { order: orderValue },
												content: [
													{
														elem: 'wrap',
														content: [
															{
																block: 'image',
																mix: { block: 'steps', elem: 'image' },
																url: item.url
															}
														]
													},
													{
														elem: 'text',
														content: [
															{
																elem: 'title',
																content: item.title
															},
															{
																elem: 'description',
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
							elem: 'section',
							content: [
								{
									block: 'order',
									content: [
										{
											elem: 'promo',
											content: 'Do you have PSD files that you need to convert to HTML? Is the task confusing you and stressing you out? Have no fear! Our online web page conversion service has all the tools to get the job done. So what are you waiting for? Contact us today.'
										},
										{
											block: 'button',
											mix: { block: 'order', elem: 'action' },
											mods: { type: 'link' },
											text: 'Order now',
											url: '#'
										}
									]
								}
							]
						}
					]
				},
				{
					block: 'sidebar',
					mix: { block: 'content', elem: 'sidebar' },
					content: [
						{
							elem: 'section',
							content: [
								{
									elem: 'title',
									mix: { block: 'text' },
									content: 'We offer'
								},
								{
									block: 'menu',
									mix: { block: 'sidebar', elem: 'menu' },
									content: [
										{ text: 'PSD to HTML', url: '#' },
										{ text: 'PSD to WordPress', url: '#' },
										{ text: 'PSD to Joomla', url: '#' },
										{ text: 'PSD to Drupal', url: '#' },
										{ text: 'PSD to Magento', url: '#' },
										{ text: 'PSD to OsCommerce', url: '#' }
									].map(function(item) {
										return [
											{
												block: 'menu-item',
												mix: { block: 'sidebar', elem: 'menu-item' },
												content: [
													{
														block: 'link',
														mods: { type: 'offer' },
														mix: { block: 'sidebar', elem: 'link' },
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
							content: [
								{
									elem: 'title',
									mix: { block: 'text' },
									content: 'Key Steps'
								},
								{
									block: 'menu',
									mix: { block: 'sidebar', elem: 'menu' },
									content: [
										{ text: 'You Upload the File', url: '#' },
										{ text: 'We Review and Quote', url: '#' },
										{ text: 'We Slice and Code', url: '#' },
										{ text: 'We Test and Verify', url: '#' },
										{ text: 'You Review the Demo', url: '#' },
										{ text: 'You Approve the Dedign', url: '#' }
									].map(function(item) {
										return [
											{
												block: 'menu-item',
												mix: { block: 'sidebar', elem: 'menu-item' },
												content: [
													{
														block: 'link',
														mods: { type: 'step' },
														mix: { block: 'sidebar', elem: 'link' },
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
							content: [
								{
									elem: 'title',
									mix: { block: 'text' },
									content: 'Why us'
								},
								{
									block: 'menu',
									mix: { block: 'sidebar', elem: 'menu' },
									content: [
										{ text: 'Only hand Coding', url: '#' },
										{ text: 'Fastidious QA', url: '#' },
										{ text: 'Clean Verified Code', url: '#' },
										{ text: 'Lightweight CSS', url: '#' },
										{ text: 'Free Adjustments', url: '#' },
										{ text: 'SEO Optimized Pages', url: '#' },
										{ text: 'Money back Guarantee', url: '#' },
										{ text: 'Afforbable Pricing', url: '#' }
									].map(function(item) {
										return [
											{
												block: 'menu-item',
												mix: { block: 'sidebar', elem: 'menu-item' },
												content: [
													{
														block: 'link',
														mods: { type: 'feature' },
														mix: { block: 'sidebar', elem: 'link' },
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
							content: [
								{
									block: 'banner',
									mix: { block: 'sidebar', elem: 'banner' },
									content: [
										{
											block: 'image',
											mix: { block: 'banner', elem: 'image' },
											url: '/img/banner/__image/banner__image.gif'
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
							block: 'copyright',
							content: 'Copyright &copy; 2014 PSD HTML Service'
						}
					]
				}
			]
		}
	]
};
