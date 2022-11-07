// setting up variables, to make different things easier to refer to
var video;
video = document.querySelector("#player1")
volslider = document.querySelector("#slider")
volume = document.querySelector("#volume")

// what happens when video loads
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	// stop autoplay, and don't loop the video
	video.autoplay = false;
	video.loop = false;
	// checking values, using the console
	console.log("autoplay is set to " + video.autoplay)
	console.log("loop is set to "+ video.loop)
});

// what happens when you click on the play button
document.querySelector("#play").addEventListener("click", function() {
 	console.log("play button clicked")
	//play video
	video.play();
	// update the volume value, actual value and value shown on screen
	volslider.value = volslider.value;
	volume.value = volslider.value;
	volume.textContent = volume.value + "%";
	// check value using console
	console.log("volume is " + volume.value)
	
 });

 // what happens when pause button clicked
 document.querySelector("#pause").addEventListener("click", function(){
	console.log("pause button clicked")
	//pause
	video.pause();
 })

 // what happens when you click the slow down button
document.querySelector("#slower").addEventListener("click", function(){
	console.log("slow down button clicked")
	// decreasing the video speed by 10%
	video.playbackRate = video.playbackRate - .10
	// checking value with console
	console.log("new video speed is " + video.playbackRate)
})

//what happens when speed up button clicked
document.querySelector("#faster").addEventListener("click", function(){
	console.log("speed up button clicked")
	//increasing video speed by 10%
	video.playbackRate = video.playbackRate + .10
	// checking value with console
	console.log("new video speed is " + video.playbackRate)
})

//what happens when skip button clicked
document.querySelector("#skip").addEventListener("click",function(){
	console.log("skip button clicked")
	// recording new time, and splitting it into minutes and seconds
	newtime = video.currentTime + 10;
	vidmin = Math.floor(newtime /60);
	vidsec = newtime % 60;
	//what happens if you try to skip beyond the end of the video
	if (newtime >= video.duration){
		console.log("goes beyond the end of the video, back to beginning")
		video.currentTime = 0;
		console.log("new video time will be 0 minutes and 0 seconds")

	}
	//simply skipping ahead
	else{
		console.log("skipping ahead!")
		video.currentTime = newtime;
		console.log("new video time will be " + vidmin + " minutes and " +vidsec+" seconds")
	}
})





document.querySelector('#mute').addEventListener("click", function(){
	//what happens if video is not muted yet, and you want to mute it
	if (video.muted == false){
		console.log("mute")
		//muting
		video.muted = true;
		//setting text and slider value to match
		volume.textContent = 0+"%";
		oldvol = volume.value;
		volslider.value = 0;
		//changing button value to unmute
		document.querySelector('#mute').textContent = "Unmute"
	}
	// what happens if video is already muted, and you want to unmute it
	else{
		console.log("unmute")
		// unmute
		video.muted = false;
		//setting text and slider value to match
		volume.textContent = volume.value + "%";
		volslider.value = volume.value;
		//changing button value to unmute
		document.querySelector('#mute').textContent = "Mute"
	}
	
})

//what happens when volume slider is changed
volslider.addEventListener("change", function(){
	console.log("slider was changed")
	//changing volume value and text based on slider value 
	volume.value = volslider.value;
	console.log("slider val is "+ volslider.value)
	volume.textContent = volume.value+"%"
	video.volume = volume.value / 100;
	//checking with console
	console.log("new volume is " + volume.value)
	
})

// what happens when old school button clicked
document.querySelector("#vintage").addEventListener("click",function(){
	console.log("we are going old school")
	// adding oldSchool class to video 
	video.classList.add("oldSchool")
	
	
})

//what happens when original button clicked
document.querySelector("#orig").addEventListener("click",function(){
	console.log("we are going back to basic")
	//removing oldSchool class from video
	video.classList.remove("oldSchool")
})