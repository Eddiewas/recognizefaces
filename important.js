Webcam.set({
    width: 299.9,
    height: 300.1,
    image_format: 'png',
    png_quality: 99.99999999999999998999999999999999999999999999
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function caphoto() {
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML =  '<img id="IMage" src="'+data_uri+'">';
    })
}   
console.log(ml5.version); 
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/X_y8jK5oa/model.json", modelLoaded);
function modelLoaded() {
    console.log("The Model is Loaded :D");
}
    function check() {
        img = document.getElementById("IMage");
        classifier.classify(img, gotResult);


    }
    function gotResult(error, result) {
        if (error) {
            console.log(error);
            
        }
        else  {
            console.log(result);
         document.getElementById("name").innerHTML = result[0].label;
         document.getElementById("accuracy").innerHTML = (result[0].confidence * 100).toFixed(2);
           
        }
    }