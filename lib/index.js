"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var u = navigator.userAgent;
var browser = {
	versions: {
		ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
	}
};

var title = function title(_title) {
	document.title = _title;

	if (browser.versions.ios) {
		var iframe = document.createElement("iframe");
		iframe.src = "http://res.fangstar.net/wxqy/img-bed/2016-11-29/583d22660912c.ico";
		iframe.addEventListener("load", function () {
			setTimeout(function () {
				iframe.removeEventListener("load", function () {});
				iframe.parentNode.removeChild(iframe);
			}, 0);
		});

		document.body.appendChild(iframe);
	}
};

exports.default = title;