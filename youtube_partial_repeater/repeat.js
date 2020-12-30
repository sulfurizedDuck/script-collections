/* 
Music Collections
Osamuraisan Medley 1	: https://www.youtube.com/watch?v=JpMTS_PM1ws
*/

// TODO put music name here
let play = "osamuraisan_medley_1"

let musics = {
	/* template: copy these part for every new music that managed to catch your ears */
	// "music_name": {
	// 	"start_second": 568,
	// 	"end_second": 970,
	// },
	"osamuraisan_medley_1": {
		'start_second': 568,
		'end_second': 970,
	},
}

let video = $('video')
let length = musics[play]['end_second'] - musics[play]['start_second']
setInterval(function() {
	video.currentTime = musics[play]['start_second']
}, length*1000)
video.currentTime = musics[play]['start_second']
