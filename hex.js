
function convert() {
    //declare variables
    let thisHex = document.getElementById("input").value;
    //takes away #
    let RGB = thisHex.replace("#", "");
    let r = parseInt(RGB.substring(0, 2), 16);
    let g = parseInt(RGB.substring(2, 4), 16);
    let b = parseInt(RGB.substring(4, 6), 16);
    //shows the rgb
    let output = document.getElementById("output");
    output.textContent = `RGB: ${r}, ${g}, ${b}`;
  }

