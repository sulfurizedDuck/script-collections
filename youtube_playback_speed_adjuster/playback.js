var video = $('video')

document.addEventListener('keydown', ev => {
	let playbackRate = 1

	switch(ev.keyCode) {
	case 81: 	// q
		playbackRate = 8
		break
	case 87: 	// w
		playbackRate = 4
		break
	case 69: 	// e
		playbackRate = 2
		break
	case 82: 	// r
		playbackRate = 1
		break
	case 65: 	// a
		if (video.playbackRate <= 0.5) return
		playbackRate = video.playbackRate - 0.5
		break
	case 68: 	// d
		playbackRate = video.playbackRate + 0.5
		break
	default:
		return
	}

	video.playbackRate = playbackRate
	console.log(`Current PlaybackRate: ${video.playbackRate}`)
})
