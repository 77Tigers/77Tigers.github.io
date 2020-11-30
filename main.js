(function(){
    var canvas = document.getElementsByClassName("canvas")[0];
    var pen = canvas.getContext("2d");
    var imageData = pen.getImageData(0, 0, 200, 200);
    
    function edit(){
        // Pass pixels to network and information it's passed to itself from a previous frame.
    }
    
    function render(){
        pen.putImageData(imageData);
    }
    
    (function main(){
        edit();
        render();
        requestAnimationFrame(main);
    })();
})();
