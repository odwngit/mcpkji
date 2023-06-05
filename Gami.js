class GamiCanvas {
    constructor(canvasId) {
        this.c = document.getElementById(canvasId).getContext("2d");
        this.canvasWidth = parseInt(getComputedStyle(document.getElementById(canvasId)).width);
        this.canvasHeight = parseInt(getComputedStyle(document.getElementById(canvasId)).height);
        console.log(this.canvasWidth)
        console.log(this.canvasHeight)
    }
    randInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    getPixelData(x, y) {
        return this.c.getImageData(x, y, 1, 1).data;
    }
    distance(x1, y1, x2, y2) {
        this.da = x1 - x2;
        this.db = y1 - y2;
        this.dc = Math.sqrt( this.da*this.da + this.db*this.db );
        return this.dc;
    }
    opacity(o) {
        this.c.globalAlpha = o;
    }
    setStroke(hex) {
        this.c.strokeStyle = hex;
    }
    setStrokeWidth(width) {
        this.c.lineWidth = width;
    }
    setFill(hex) {
        this.c.fillStyle = hex;
    }
    circle(x, y, r, f) {
        this.c.beginPath();
        this.c.arc(x, y, r, 0, 2*Math.PI);
        if (f == true) {
            this.c.fill();
        } else {
            this.c.stroke();
        }
    }
    image(image, x, y, w, h) {
        this.c.drawImage(image, x, y, w, h);
    }
    text(t, x, y, fs, f) {
        this.c.font = fs+"px "+f;
        this.c.fillText(t, x, y);
    }
    setLineDash(seg) {
        this.c.setLineDash(seg);
    }
    line(x1, y1, x2, y2) {
        this.c.beginPath();
        this.c.moveTo(x1, y1);
        this.c.lineTo(x2, y2);
        this.c.stroke();
    }
    rect(x, y, w, h) {
        this.c.fillRect(x, y, w, h);
    }
    clear() {
        this.c.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    }
}