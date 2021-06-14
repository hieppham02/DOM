let button1 = document.getElementById("btn1");
button1.onclick = function() {
    const x = document.getElementById("boxEx1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

let button2 = document.getElementById("btn2");
button2.onclick = function() {
    let colorCode = "456789ABCDEF";
    let color = "#";
    for (let i=0; i<6; i++){
        color += colorCode[Math.floor(Math.random()*12)];
    }
    document.getElementById("boxEx2").style.backgroundColor = color;
    console.log(color);
}

let button3 = document.getElementById("btn3");
button3.onclick = function() {
    let text1 = document.getElementById("p301").innerText;
    document.getElementById("p301").innerText = document.getElementById("p302").innerText;
    document.getElementById("p302").innerText = text1;
}

document.getElementById("p4").style.fontSize = "14px"
let fontSize = 14;
let button4 = document.getElementById("btn4");
button4.onclick = function() {
    fontSize = fontSize + 1;
    document.getElementById("p4").style.fontSize = fontSize + "px";
}


    

