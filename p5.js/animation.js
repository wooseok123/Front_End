let mySound, fft, Width;

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound("material/credit.mp3");
}

function setup() {
    fft = new p5.FFT();
    peakDetect = new p5.PeakDetect();
    frameRate(30);
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.mousePressed(canvasPressed);
    stroke('black');
    text('tap here to play', windowWidth/2, windowHeight/2);
}

function draw() {


    fft.analyze();
    peakDetect.update(fft);

    if ( peakDetect.isDetected ) {
        Width = 100;
    } else {
        Width *= 0.8;
    }
    stroke(random(255),random(255),random(50)*5);
    if (Width > 50) {
        ellipse(random(windowWidth), random(windowHeight), Width);
    } else {
        rect(random(windowWidth), random(windowHeight), Width);
    }

}

function canvasPressed() {
    if (mySound.isPlaying()) {
        mySound.stop();
    } else
        mySound.play();
}
