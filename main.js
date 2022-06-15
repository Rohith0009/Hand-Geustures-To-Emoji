prediction_1 = "";
prediction_2 = "";

Webcam.set({
  width: 350,
  height: 300,
  image_format: "png",
  png_quality: 100,
});

camera = document.getElementById("camera");
Webcam.attach(camera);

function snap_pic() {
  Webcam.snap(function (data_uri) {
    document.getElementById("captured_image").innerHTML = '<img src="' + data_uri + '" id="captured_img">';
  });
}

console.log("Your Current ml5 Version Is: ", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/hJtX70nsL/model.json", modelloaded);

function modelloaded() {
  console.log("Model Loaded!👍👍");
}

function speak() {
  var synth = window.speechSynthesis;
  speak_data_1 = "The First Prediction Is: " + prediction_1;
  speak_data_2 = "The Second Prediction Is: " + prediction_2;
  var utterthis = new SpeechSynthesisUtterance(speak_data_1 + "And" + speak_data_2);
  synth.speak(utterthis);
}
