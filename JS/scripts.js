window.onresize =function(){
    if(window.innerWidth <= 600){
        document.getElementById("box1").style.width = "100%";
        document.getElementById("box2").style.width = "100%";
        document.getElementById("box3").style.width = "100%";
    }else {
        document.getElementById("box1").style.width = "33.33%";
        document.getElementById("box2").style.width = "33.33%";
        document.getElementById("box3").style.width = "33.33%";
    }
}

function showMore(){
    document.getElementById("recipes1").style.display = "block";
    document.getElementById("box1").style.width = "100%";
    document.getElementById("b1").style.display = "none";
    document.getElementById("box2").style.display = "none";
    document.getElementById("box3").style.display = "none";
}

function showLess(){
    document.getElementById("recipes1").style.display = "none";
    document.getElementById("b1").style.display = "inline-block";
    document.getElementById("box2").style.display = "block";        
    document.getElementById("box3").style.display = "block";
    
    if(window.innerWidth > 600){
        document.getElementById("box1").style.width = "33.33%";
    }
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
    document.getElementById("b2").style.display = "inline-block";
    document.getElementById("box1").style.display = "block";
    document.getElementById("box3").style.display = "block";

    if(window.innerWidth > 600){
        document.getElementById("box2").style.width = "33.33%";
    }
}

function showMore3(){
    document.getElementById("recipes3").style.display = "block";
    document.getElementById("box3").style.width = "100%";
    document.getElementById("b3").style.display = "none";
    document.getElementById("box1").style.display = "none";
    document.getElementById("box2").style.display = "none";
}

function showLess3(){
    if(window.innerWidth <= 600){
        document.getElementById("recipes3").style.display = "none";
        document.getElementById("b3").style.display = "inline-block";
        document.getElementById("box2").style.display = "block";
        document.getElementById("box1").style.display = "block";
    }else{
        document.getElementById("recipes3").style.display = "none";
        document.getElementById("box3").style.width = "33.33%";
        document.getElementById("b3").style.display = "inline-block";
        document.getElementById("box2").style.display = "block";
        document.getElementById("box1").style.display = "block";
    }
}