// References to all the element we will need.,
var  take_photo_btn = document.querySelector('#take-photo');
   
    //error_message = document.querySelector('#error-message');

take_photo_btn.addEventListener("click", function(e){

    document.querySelector("#modalShare").setAttribute("style","");
    e.preventDefault();

    
    var aScene = document.querySelector("a-scene").components.screenshot.getCanvas("perspective")
    // then get the video layer canvas
    let frame = captureVideoFrame("video", "jpeg");
    // resize the ascene to the video scene
    console.log(frame);
    aScene = resizeCanvas(aScene, frame.width, frame.height)
    // then merge the two base64 image using https://github.com/lukechilds/merge-images
    mergeImages([frame.dataUri, aScene]).then(b64 => {
        
          document.getElementById("shareImg").src=b64;
        
    });
    

});

document.querySelector("#scene").addEventListener("click",function()
{
    document.querySelector("#modalShare").setAttribute("style","display:none");
});
function resizeCanvas(origCanvas, width, height) {
	let resizedCanvas = document.createElement("canvas");
	let resizedContext = resizedCanvas.getContext("2d");

    resizedCanvas.height = height;
    resizedCanvas.width = width;
console.log("width : "+width +",height :"+height);
	resizedContext.drawImage(origCanvas, 0, 0, width, height);
	return resizedCanvas.toDataURL();
}


function captureVideoFrame(video, format, width, height) {
    if (typeof video === 'string') {
        video = document.querySelector(video);
    }

    format = format || 'jpeg';

    if (!video || (format !== 'png' && format !== 'jpeg')) {
        return false;
    }
    console.log("width : "+video.videoWidth +",height :"+video.videoHeight);
    var canvas = document.createElement("CANVAS");

    canvas.width = width || video.videoWidth;
    canvas.height = height || video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    var dataUri = canvas.toDataURL('image/' + format);
    var data = dataUri.split(',')[1];
    var mimeType = dataUri.split(';')[0].slice(5)

    var bytes = window.atob(data);
    var buf = new ArrayBuffer(bytes.length);
    var arr = new Uint8Array(buf);

    for (var i = 0; i < bytes.length; i++) {
        arr[i] = bytes.charCodeAt(i);
    }

    var blob = new Blob([ arr ], { type: mimeType });
    return { blob: blob, dataUri: dataUri, format: format, width: canvas.width, height: canvas.height };
};




 
