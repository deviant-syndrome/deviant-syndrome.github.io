function setupPlaylists(audioInstances) {
	Object.values(audioInstances).forEach(audio => {
		var container = audio.element.parentElement.parentElement;
                if (container.className == "audio-container") {
			container.querySelectorAll("li").forEach(elem => {
                          elem.onclick = function(e) {
                                  e.preventDefault();
                                 audio.load(elem.querySelector('a').getAttribute('data-src'));
                                  audio.play();
                          };
                  	});               
                };	
	});
}

audiojs.events.ready(function() {
    var as = audiojs.createAll();
    setupPlaylists(as);
});

