var video = $('video')

document.addEventListener('keydown', ev => {

	switch(ev.keyCode) {
	case 37: 	// left
		video.currentTime -= 5
		break
	case 39: 	// right
		video.currentTime += 5
		break
	case 188: 	// <
		if (ev.shiftKey) {
			video.playbackRate -= 0.25
			console.log(video.playbackRate)
		}
		break
	case 190: 	// >
		if (ev.shiftKey) {
			video.playbackRate += 0.25
			console.log(video.playbackRate)
		}
		break
	default:
		return
	}

	console.log(`Current time: ${video.currentTime}`)
})
