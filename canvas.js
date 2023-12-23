var colorSquares = document.querySelectorAll(".colorPicker");
var targetColor = "#F00";
var brushSize = 10;

colorSquares[0].style.height = "52px";
colorSquares[0].style.width = "52px";

colorSquares.forEach(function(square) {
    square.addEventListener("click", pickColor);
});

var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");
canvas.addEventListener("mousemove", drawOnCanvas);

var brushSizeInput = document.getElementById("brushSizeInput");
brushSizeInput.addEventListener("change", updateBrushSize);

document.getElementById("clearCanvas").addEventListener("click", clearCanvas);

function pickColor(e) {
    targetColor = e.target.id;
    colorSquares.forEach(function(square) {
        square.style.height = "35px";
        square.style.width = "35px";
    });
    e.target.style.height = "52px";
    e.target.style.width = "52px";
}

function drawOnCanvas(e) {
    if (e.buttons === 1) {
        canvasContext.fillStyle = targetColor;
        canvasContext.beginPath();
        canvasContext.arc(e.offsetX, e.offsetY, brushSize, 0, Math.PI * 2);
        canvasContext.fill();
    }
}

function updateBrushSize() {
    brushSize = parseInt(brushSizeInput.value);
}

function clearCanvas() {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
}