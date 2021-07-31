(function () {
	var resources = [
		{tag: 'script', src: 'src', path: 'https://code.jquery.com/ui/1.12.1/jquery-ui.js', target: 'body'},
		{tag: 'script', src: 'src', path: 'https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js', target: 'body'},
		{tag: 'script', src: 'src', path: 'https://cdnjs.cloudflare.com/ajax/libs/tinycolor/1.4.1/tinycolor.min.js', target: 'body'},
		{tag: 'link', src: 'href', path: 'https://fonts.googleapis.com/css?family=Roboto', target: 'head'},
	];

	var el;
	for (var i in resources){
		el = document.createElement(resources[i].tag);
		el.setAttribute(resources[i].src, resources[i].path);

		document.getElementsByTagName(resources[i].target)[0].appendChild(el);
	}
})();

var Notify = function (options) {

	_this = this;

	this.name = 'Notify.js';

	this.options = {
		color: '#323232',
		position: 'right',
		rounded: false,
		content: null,
		callback: null,
		timeout: 4000
	};

	var build = function () {
		if (jQuery('.notify-js.notify-wraper').length)
			return;

		jQuery('head').append(`
							<style>
								.notify-js {
									font-family: "Roboto", sans-serif;
									font-weight: 300;
									font-size: 14px;
								}
								.notify-js.notify-wraper {
									position: ` + (isMobile() ? 'fixed' : 'absolute') + `;
									width: ` + (isMobile() ? '100%' : '1px') + `;
									text-align: ` + (isMobile() ? 'center' : 'left') + `;
									bottom: ` + (isMobile() ? '0px' : 'inherit') + `;
									top: ` + (isMobile() ? 'inherit' : '5%') + `;
									left: ` + (isMobile() ? '0' : '') + `;
									height: auto;
									z-index: 9999999999;
								}
								.notify-js.notify-message-wraper {
									padding: 1rem;
									color: white;
									margin-top: ` + (isMobile() ? '10px' : '0') + `;
									margin-bottom: ` + (isMobile() ? '0' : '10px') + `;
									cursor: pointer;
									box-shadow: 0px 1px 3px rgba(0,0,0,0.2);
									min-width: ` + (isMobile() ? '100%' : 'auto') + `;
									white-space: ` + (isMobile() ? 'inherit' : 'nowrap') + `;
									position: relative;
								}
								.notify-js .notify-message {
									letter-spacing: 1px;
								}
								.notify-right {
									right: 5%;
								}
								.notify-left {
									left: 5%;
								}
						   </style>
						   <meta charset="UTF-8">
						   <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">`);


		jQuery('body').append('<div class="notify-js notify-wraper notify-' + (isMobile() ? 'mobile' : 'desktop notify-right') + '"></div>');
			if (!isMobile())
				jQuery('body').append('<div class="notify-js notify-wraper notify-' + (isMobile() ? 'mobile' : 'desktop notify-left') + '"></div>');
	};


	var init = function (options) {
		if (typeof options === 'string')
			_this.options.content = options;
		else if (typeof options === 'object')
			_this.options = Object.assign(_this.options, options);
		else
			console.error(_this.name + ': Argument error, string or object are accepted.');

		_this.id = 'notify-js-' + Math.round(Math.random() * (99999 - 10) + 10);
		_this._id = '#' + _this.id;

		_this.dir = isMobile() ? 'margin-bottom': 'margin-top';

		build();
		message();
		behavior(_this);
	};

	var isMobile = function () {
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
 			return true;
 		return false;
	};

	var message = function () {
		if (!_this.options.content || !_this.options.content.length) {
			console.error(_this.name + ': options.content can\'t be empty');
			return;
		}


		_this.options.color = _this.options.color.toLowerCase() === 'random' ? tinycolor.random() : _this.options.color;
		var fontColor = tinycolor(_this.options.color).isDark() ? '#fff' : 'black';



		jQuery('.notify-js.notify-wraper' + (!isMobile() ? '.notify-' + _this.options.position : ''))
			.append(`<span class="notify-js notify-message-wraper" id="` + _this.id + `" style="opacity: 0;
																						  background: ` + _this.options.color + `;
																						  float: ` + _this.options.position + `;
																						  border-radius: ` + (_this.options.rounded ? '25px': '0px') + `;
																						  ` + _this.dir + `: 20px;
																						  "
																						  >
						<span class="notify-message" style="color: ` + fontColor + `">` + _this.options.content + `</span>
					</span>`);

		show();
		auto_destroy(_this._id, _this.options.timeout, _this.options.callback);
	};

	var show = function () {
		var args = {opacity: 1};
		args[_this.dir] = 0;

		jQuery(_this._id).animate(args, 200);
	};

	var behavior = function (_this) {
		jQuery(_this._id).draggable({
				axis: 'x',
				scroll:false,
				start: function() {
		        	jQuery(this).animate({opacity: 0}, 100).fadeOut();
		        	window.clearTimeout(_this.after);
		      	},
		      	stop: _this.options.callback
	      	});
	};

	var auto_destroy = function (target, moment, callback) {
		_this.after = setTimeout(function() {
			jQuery(target).animate({opacity: 0, marginTop: '-40px'}, 200, function () {jQuery(this).remove(); if (callback) callback(); });
		}, moment);
	};

	return init(options);

};
