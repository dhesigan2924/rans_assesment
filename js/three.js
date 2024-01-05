const windowElement1 = document.querySelector('.window1');
const titleBar1 = document.querySelector('.title-bar1');
const closeButton1 = document.querySelector('.close-button1');
const maximizeButton = document.querySelector('.maximize-button');
const minimizeButton = document.querySelector('.minimize-button');

// JavaScript code goes here
const windowElement = document.querySelector('.window');
const titleBar = document.querySelector('.title-bar');
const closeButton = document.querySelector('.close-button');
const openFileButton = document.querySelector('.open-file-button');

const enc = document.getElementsByClassName('enc');
const enc2 = document.getElementsByClassName('enc2');

const fileContent = document.querySelector('.file-content');

let isDragging = false;
let isMaximized = false;
let storedPosition = { x: 0, y: 0, width: 0, height: 0 };

windowElement1.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - windowElement1.getBoundingClientRect().left;
    offsetY = e.clientY - windowElement1.getBoundingClientRect().top;
});

windowElement1.addEventListener('mousemove', (e) => {
    if (isDragging && !isMaximized) {
        const left = e.clientX - offsetX;
        const top = e.clientY - offsetY;
        const right = e.clientX + offsetX;
        const bottom = e.clientY + offsetY;
        windowElement1.style.left = left + 'px';
        windowElement1.style.top = top + 'px';
        windowElement1.style.left = right - 'px';
        windowElement1.style.top = bottom - 'px';
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

closeButton.addEventListener('click', () => {
    windowElement.style.display ='none';
});
closeButton1.addEventListener('click', () => {
    windowElement1.style.display= 'none';
    
});
openFileButton.addEventListener('dblclick', () => {
    fileContent.style.display='block';
    windowElement1.style.display='block';
});


windowElement1.addEventListener("dragend", () => {
    const rect = windowElement1.getBoundingClientRect();
    const isDraggedOut = rect.left < 0 || rect.right > window.innerWidth || rect.top < 0 || rect.bottom > window.innerHeight;
    
    if (isDraggedOut) {
        windowElement1.style.display = "none";
    }
});

var inputElement1 = document.createElement("input");
var container = document.getElementById("input-container");
inputElement1.type = "text";
inputElement1.id = "myInput";
inputElement1.placeholder = "Enter Decryption Key...";
inputElement1.style.width='375px';
inputElement1.style.height='25px';
inputElement1.style.marginLeft='390px';

var inputElement2 = document.createElement("input");
var container = document.getElementById("input-container");
inputElement2.type = "text";
inputElement2.id = "myInput";
inputElement2.placeholder = "Enter Decryption Key...";
inputElement2.style.width='375px';
inputElement2.style.height='25px';
inputElement2.style.marginLeft='390px';



var payment_button=document.createElement("button");
var container1 = document.getElementById("buttonContainer1");
payment_button.innerHTML = "check payment";
payment_button.style.width='180px';
payment_button.style.height='25px';
payment_button.style.marginLeft='390px';
payment_button.onclick = function() {
    alert("pay $3000 to decrypt!... ");
};



var dec_button=document.createElement("button");
var container2 = document.getElementById("buttonContainer2");
dec_button.innerHTML = "decrypt";
dec_button.style.width='180px';
dec_button.style.height='25px';
dec_button.style.marginLeft='10px';
dec_button.onclick = function()
{
    var dec_key='#*36dgh$ybw!*tj357%20$xrykdt';
    var entred_key=inputElement1.value;
    if(entred_key==''){alert("Enter decryption key to ");}
    else if (dec_key === entred_key ) {
        alert("Decrypted !... ");
        windowElement.style.backgroundImage="url('img/pw.jpg')";
        inputElement1.style.display='none';
        var ad1=document.getElementById("op1");
        var ad2=document.getElementById("op2");
        var ad3=document.getElementById("op3");
        var ad4=document.getElementById("op4");
        var ad5=document.getElementById("op5");
        ad1.style.display="block";
        ad2.style.display='block';
        ad3.style.display='block';
        ad5.style.display='block';
        ad4.style.display='block';

    }
    else {
        alert("Entered value does not match");
    }
    
};
var dec_button2=document.createElement("button");
var container22 = document.getElementById("buttonContainer22");
dec_button2.innerHTML = "decrypt";
dec_button2.style.width='180px';
dec_button2.style.height='25px';
dec_button2.style.marginLeft='10px';
dec_button2.onclick = function()
{
    var dec_key='#*36dgh$ybw!*tj357%20$xrykdt';
    var entred_key=inputElement2.value;
    if(entred_key==''){alert("Enter decryption key to ");}
    else if (dec_key === entred_key ) {
        alert("Decrypted !... ");
        windowElement.style.backgroundImage="url('img/pw.jpg')";
        inputElement2.style.display='none';
        var ad1=document.getElementById("op1");
        var ad2=document.getElementById("op2");
        var ad3=document.getElementById("op3");
        var ad4=document.getElementById("op4");
        var ad5=document.getElementById("op5");
        ad1.style.display="block";
        ad2.style.display='block';
        ad3.style.display='block';
        ad5.style.display='block';
        ad4.style.display='block';

    }
    else {
        alert("Entered value does not match");
    }
    
};





document.getElementById("enc").ondblclick = function() {
    windowElement.style.backgroundImage="url('img/enc.jpg')";
    windowElement.style.backgroundSize="fixed";
    var ad1=document.getElementById("op1");
    var ad2=document.getElementById("op2");
    var ad3=document.getElementById("op3");
    var ad4=document.getElementById("op4");
    var ad5=document.getElementById("op5");
    ad1.style.display='none';
    ad2.style.display='none';
    ad3.style.display='none';
    ad4.style.display='none';
    ad5.style.display='none';
    windowElement1.style.display='none';
    container.style.marginTop='450px';
    container1.style.marginTop='25px';
    container2.style.marginTop='25px';
    container.appendChild(inputElement1);
    container1.appendChild(payment_button);
    container2.appendChild(dec_button);
}

document.getElementById("enc2").ondblclick = function() {
    windowElement.style.backgroundImage="url('img/img9.png')";
    windowElement.style.height='2000px';
    windowElement.style.width='1000px';
    var ad1=document.getElementById("op1");
    var ad2=document.getElementById("op2");
    var ad3=document.getElementById("op3");
    var ad4=document.getElementById("op4");
    var ad5=document.getElementById("op5");
    ad1.style.display='none';
    ad2.style.display='none';
    ad3.style.display='none';
    ad4.style.display='none';
    ad5.style.display='none';
    windowElement1.style.display='none';
    container.style.marginTop='1750px';
    container1.style.marginTop='25px';
    container2.style.marginTop='25px';
    container.appendChild(inputElement2);
    container1.appendChild(payment_button);
    container22.appendChild(dec_button2);
}


