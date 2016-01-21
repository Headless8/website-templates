modules.define('page', ['i-bem__dom'], function(provide, BEMDOM) {
	provide(BEMDOM.decl(this.name, {

		onSetMod: {
			js: {
				'inited': function() {
					//this.setMod('loading');
					this.bindToWin('load', this, this._onLoad);
				}
			}
		},

		_onLoad: function(a) {
			this.toggleMod('loading');
		}
	}))
})

// if ('addEventListener' in window) {
// 	window.addEventListener('load',
// 		function() {
// 			document.body.className = document.body.className.replace(/\bis-loading\b/, '');
// 		});
	
// 	document.body.className += (navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? ' is-ie' : '');
// }