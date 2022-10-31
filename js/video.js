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
	volume.value = volslider.value;
	volume.textContent = volume.value;
	// check value using console
	console.log("volume is " + volume.value)
	
 });

 // what happens when pause button clicked
 document.querySelector("#pause").addEventListener("click", function(){
	console.log("pause button clicked")
	//pause
	video.pause();
 })

document.querySelector("#slower").addEventListener("click", function(){
	console.log("slow down button clicked")
	video.playbackRate = video.playbackRate - 0.10
	console.log("new video speed is " + video.playbackRate)
})

document.querySelector("#faster").addEventListener("click", function(){
	console.log("speed up button clicked")
	video.playbackRate = video.playbackRate + 0.10
	console.log("new video speed is " + video.playbackRate)
})

document.querySelector("#skip").addEventListener("click",function(){
	console.log("skip button clicked")
	newtime = video.currentTime + 10;
	vidmin = Math.floor(newtime /60);
	vidsec = newtime % 60;
	
	if (newtime >= video.duration){
		console.log("goes beyond the end of the video, back to beginning")
		video.currentTime = 0;
		console.log("new video time will be 0 minutes and 0 seconds")

	}
	else{
		console.log("skipping ahead!")
		video.currentTime = newtime;
		console.log("new video time will be " + vidmin + " minutes and " +vidsec+" seconds")
	}
})
clicknum = 0;



document.querySelector('#mute').addEventListener("click", function(){
	if (video.muted == false){
		console.log("mute")
		video.muted = true;
		volume.textContent = 0;
		volslider.value = 0;
	}
	else{
		console.log("unmute")
		video.muted = false;
		volume.textContent = volume.value;
		volslider.value = volume.value;
	}
	
})

volslider.addEventListener("change", function(){
	console.log("slider was changed")
	volume.value = volslider.value;
	console.log("new volume is " + volume.value)
	volume.textContent = volume.value
})

document.querySelector("#vintage").addEventListener("click",function(){
	console.log("we are going old school")
	if(video.classList.contains("oldSchool")){
		video.classList.remove("oldSchool")
	}
	else{
		video.classList.add("oldSchool")
	}
	
})

document.querySelector("#orig").addEventListener("click",function(){
	console.log("we are going back to basic")
	video.classList.remove("oldSchool")
})