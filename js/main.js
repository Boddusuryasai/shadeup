function randompickerbtn() {
   let randomPicker = document.getElementById("randomPicker")
    const letters = '0123456789ABCDEF';
    let color = "#"
    for(let i =0; i<=5 ; i++){
        color+=letters[Math.floor(Math.random()*16)];
    } 
    randomPicker.style.backgroundColor = color;
    document.getElementById("randomValuePara").innerText = color
  
}
function hexFindbtn() {   
    let num = document.getElementById("hexInput").value
    console.log(num);
    document.getElementById("color-box").style.backgroundColor = num;
} 


function RGBFindbtn() {
    let red = rgbToHex(document.getElementById("RInput").value);
    let green = rgbToHex(document.getElementById("GInput").value);
    let blue = rgbToHex(document.getElementById("BInput").value);  
    console.log(red , blue , green);
    document.getElementById("rgb-color-box").style.backgroundColor = "#"+red+green+blue;
}

function RangeSelector() { 
   let red = rgbToHex(document.getElementById("RrInput").value);
   let green = rgbToHex(document.getElementById("GrInput").value);
   let blue = rgbToHex(document.getElementById("BrInput").value);  
   console.log(red , blue , green);
   document.getElementById("range-color-box").innerText = "#"+red+green+blue;
}



String.prototype.convertToRGB = function () {
  
};

function hexConvbtn() {
    let num = document.getElementById("hexCInp").value
    let r = parseInt(num.slice(1,3), 16)
    let g = parseInt(num.slice(3,5), 16);
    let b = parseInt(num.slice(-2), 16);
    let rgb = `rgb(${r}  ${g}  ${b})` 
   let colorBox= document.getElementById("hexCOut")
   colorBox.innerText = rgb;
  
  
}

function rgbConvbtn() { 
    let red = rgbToHex(document.getElementById("RCInput").value);
    let green = rgbToHex(document.getElementById("GCInput").value);
    let blue = rgbToHex(document.getElementById("BCInput").value); 
    document.getElementById("rgbCOut").innerText = "#"+red+green+blue;
}
function rgbToHex(rgb) {
    let hex = parseInt(rgb).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  }
