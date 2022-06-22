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
    document.getElementById("captured_image").innerHTML = '<img src="' + data_uri + '" id="captured_snap">';
  });
}

console.log("Your Current ml5 Version Is: ", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ZFig2sdQt/model.json", modelloaded);

function modelloaded() {
  console.log("Model Loaded!👍👍");
}

function speak() {
  var synth = window.speechSynthesis;
  speak_data_1 = "The First Prediction gesture Is: " + gesture_1;
  speak_data_2 = "The Second Prediction gesture Is: " + gesture_2;
  var utterthis = new SpeechSynthesisUtterance(speak_data_1 + "And" + speak_data_2);
  synth.speak(utterthis);
}

function check() {
  img = document.getElementById("captured_snap");
  classifier.classify(img, gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("prediction_1_result").innerHTML = results[0].label;
    document.getElementById("prediction_2_result").innerHTML = results[1].label;
    gesture_1 = results[0].label;
    gesture_2 = results[1].label;
    speak();
    if (results[0].label == "Thumbs Up") {
      document.getElementById("new_emoji_1").innerHTML = "👍";
    }
    if (results[0].label == "Palm") {
      document.getElementById("new_emoji_1").innerHTML = "✋";
    }
    if (results[0].label == "Nice Hand") {
      document.getElementById("new_emoji_1").innerHTML = "👌";
    }
    if (results[0].label == "Fist") {
      document.getElementById("new_emoji_1").innerHTML = "👊";
    }
    if (results[0].label == "Rocking") {
      document.getElementById("new_emoji_1").innerHTML = "🤘";
    }
    if (results[0].label == "Namaste") {
      document.getElementById("new_emoji_1").innerHTML = "🙏";
    }
    
    //second Prediction
    if (results[1].label == "Thumbs Up") {
      document.getElementById("new_emoji_2").innerHTML = "👍";
    }
    if (results[1].label == "Palm") {
      document.getElementById("new_emoji_2").innerHTML = "✋";
    }
    if (results[1].label == "Nice Hand") {
      document.getElementById("new_emoji_2").innerHTML = "👌";
    }
    if (results[1].label == "Fist") {
      document.getElementById("new_emoji_2").innerHTML = "👊";
    }
    if (results[1].label == "Rocking") {
      document.getElementById("new_emoji_2").innerHTML = "🤘";
    }
    if (results[1].label == "Namaste") {
      document.getElementById("new_emoji_2").innerHTML = "🙏";
    }
  }
}
