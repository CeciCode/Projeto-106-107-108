function sons() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/6zjdpU2lJ/model.json", modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        r= Math.floor(Math.random() * 255) + 1;
        g= Math.floor(Math.random() * 255) + 1;
        b= Math.floor(Math.random() * 255) + 1;
        document.getElementById("result").innerHTML= "Posso ouvir: " + results[0].label;
        document.getElementById("confidence").innerHTML= "Precisão: " + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result").style.color= "rgb(" + r + ", " + g + ", " + b + ")";
        document.getElementById("confidence").style.color= "rgb(" + r + ", " + g + ", " + b + ")";
    }
}