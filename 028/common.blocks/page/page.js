modules.define(
	'page',
	[ 'i-bem__dom', 'jquery' ],
	function(provide, BEMDOM, $) {
		provide(BEMDOM.decl(this.name, {
			onSetMod: {
				js: {
					inited: function() {
						var _this = this;

						$(document).ready(function() {
							_this.delMod('loading');
						})
					}
				}
			}
		}));
	}
);