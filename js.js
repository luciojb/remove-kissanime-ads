// for (let alal of document.getElementsByTagName('body')[0].children) {
// 	if (alal.tagName == 'DIV' && ! alal.id) {
// 		alal.parentNode.removeChild(alal)
// 	}
// }

// var i = setInterval(damnIframes, 200);
function damnIframes() {
	var frames = document.querySelectorAll('iframe');
	if (frames.length > 0){
		console.log('aa')
		for (let frame of frames) {
			frame.parentNode.removeChild(frame);
		}
	}
}
damnIframes();

var x = setInterval(removeThem, 200);
function removeThem() {
	// let closeable = document.getElementsByClassName('divCloseBut')
	// if (closeable.length > 0) {
	// 	for (let element of closeable) {
	// 		for (let a of element.getElementsByTagName('a')) {
	// 			a.click();
	// 		}
	// 	}
	// }
	for (let i = 0; i<20; i++) {
		$('#adsIfrme'+i).remove();
	}
}

var y = setTimeout(() => clearInterval(x), 10000);

function monitorGlxTs() {
	const glxTsIds = [11565, 11875, 11874, 11873, 11963, 11964, 11965, 11966];
	let glxTs;
	
	for (let i = 0; i <= glxTsIds.length; i++) {
		glxTs = document.getElementById('glx-' + glxTsIds[i] + '-container');
		
		if (glxTs) {
			break;
		}
	}
	
	if (!glxTs) {
		return setTimeout(monitorGlxTs, 300);
	}

		glxTs.remove();
}

monitorGlxTs();
setTimeout(() => {
	var comments = document.getElementById('btnShowComments');
	if (comments) {
		console.log('comments')
		$('#btnShowComments').on('click', () => {
		// comments.addEventListener('click', () => {
			var c = setInterval(() => {
				$.each($('iframe'), (arr,x) => {
					let src = $(x).attr('src');
					if (src && src.match(/(ads-iframe)|(disqusads)/gi)) {
						$(x).remove();
					}
				});
			}, 300);
			var d = setTimeout(() => clearInterval(c), 10000);
		});

	}
}, 1000);