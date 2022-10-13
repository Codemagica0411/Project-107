function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ihok8pE20/', modelReady)  
}


function modelReady() {
classifier.classify(gotResults);
}


function gotResults() {
console.log("gotresult")
}