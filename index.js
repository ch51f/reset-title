const u = navigator.userAgent;
const browser = {
    versions: {
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    }
}

const title = function (title) {
	document.title = title;

	if(browser.versions.ios) {
		let iframe = document.createElement("iframe");
		iframe.src="https://github.com/fluidicon.png";
		iframe.addEventListener("load", function() {
			setTimeout(function() {
				iframe.removeEventListener("load", function() {});
				iframe.parentNode.removeChild(iframe);
			}, 0);
		});

        document.body.appendChild(iframe);
	}
}

export default title;