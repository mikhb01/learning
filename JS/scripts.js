function showMore(){
    document.getElementById("recipes1").style.display = "block";
    document.getElementById("box1").style.width = "100%";
    document.getElementById("b1").style.display = "none";
    document.getElementById("box2").style.display = "none";
    document.getElementById("box3").style.display = "none";
}

function showLess(){
    document.getElementById("recipes1").style.display = "none";
    document.getElementById("box1").style.width = "33.33%";
    document.getElementById("b1").style.display = "inline-block";
    document.getElementById("box2").style.display = "block";
    document.getElementById("box3").style.display = "block";
}

function showMore2(){
    document.getElementById("recipes2").style.display = "block";
    document.getElementById("box2").style.width = "100%";
    document.getElementById("b2").style.display = "none";
    document.getElementById("box1").style.display = "none";
    document.getElementById("box3").style.display = "none";
}

function showLess2(){
    document.getElementById("recipes2").style.display = "none";
    document.getElementById("box2").style.width = "33.33%";
    document.getElementById("b2").style.display = "inline-block";
    document.getElementById("box1").style.display = "block";
    document.getElementById("box3").style.display = "block";
}

function showMore3(){
    document.getElementById("recipes3").style.display = "block";
    document.getElementById("box3").style.width = "100%";
    document.getElementById("b3").style.display = "none";
    document.getElementById("box1").style.display = "none";
    document.getElementById("box2").style.display = "none";
}

function showLess3(){
    document.getElementById("recipes3").style.display = "none";
    document.getElementById("box3").style.width = "33.33%";
    document.getElementById("b3").style.display = "inline-block";
    document.getElementById("box1").style.display = "block";
    document.getElementById("box2").style.display = "block";
}