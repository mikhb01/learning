// Box resize function after clicking "show more" or "show less"
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

// Fetch starting text out of json
//
fetch("https://raw.githubusercontent.com/mikhb01/learning/refs/heads/main/Project%201/JSON/recipe.JSON")
    .then(response => {
        if(!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json(); //JSON parsing the respone
    })
    .then(data =>{
        document.getElementById("r1").innerHTML = data.recipes[0].name;
        document.getElementById("r2").innerHTML = data.recipes[1].name;
        document.getElementById("r3").innerHTML = data.recipes[2].name;
        document.getElementById("desc1").innerHTML = data.recipes[0].shortDesc;
        document.getElementById("desc2").innerHTML = data.recipes[1].shortDesc;
        document.getElementById("desc3").innerHTML = data.recipes[2].shortDesc;
    })
    .catch(error => {
        console.error("There was a problem with the fetch operation", error);
    });

// Show more/ show less function of buttons
//Included in it: loading of data and recipe from a JSON file 

//No new loading of the data after the button was pressed once
let schonGeladen1 = false;
let schonGeladen2 = false;
let schonGeladen3 = false;

    
function showMore(){    

    async function loadRecipe() {
        if(schonGeladen1) return;

        schonGeladen1 = true;

        let j = 0;

        const response = await fetch("https://raw.githubusercontent.com/mikhb01/learning/refs/heads/main/Project%201/JSON/recipe.JSON", {headers:{'Accept': 'application/json'}});
        const liste = document.getElementById("ing1");

        let text = await response.json();
        let jsonString = JSON.stringify(text);
    
        let obj = JSON.parse(jsonString);
        console.log(obj);

        for(i = 0; i < obj.recipes[0].ingredients.length; i++){
            console.log(obj.recipes[0].ingredients[i]);
            let li = document.createElement("li");
            li.textContent = obj.recipes[0].ingredients[i];
            console.log(li);
            liste.appendChild(li);
            }
        document.getElementById("cre1").innerHTML = obj.recipes[j].creation;
        console.log(obj.recipes[j].creation);
    }
    document.getElementById("recipes1").style.display = "block";
    document.getElementById("box1").style.width = "100%";
    document.getElementById("b1").style.display = "none";
    document.getElementById("box2").style.display = "none";
    document.getElementById("box3").style.display = "none";
    
    loadRecipe();
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

    async function loadRecipe() {
        if(schonGeladen2) return;

        schonGeladen2 = true;

        let j = 1;

        const response = await fetch("https://raw.githubusercontent.com/mikhb01/learning/refs/heads/main/Project%201/JSON/recipe.JSON", {headers:{'Accept': 'application/json'}});
        const liste = document.getElementById("ing2");

        let text = await response.json();
        let jsonString = JSON.stringify(text);
    
        let obj = JSON.parse(jsonString);
        console.log(obj);

        for(i = 0; i < obj.recipes[1].ingredients.length; i++){
            console.log(obj.recipes[1].ingredients[i]);
            let li = document.createElement("li");
            li.textContent = obj.recipes[1].ingredients[i];
            console.log(li);
            liste.appendChild(li);
        }
        document.getElementById("cre2").innerHTML = obj.recipes[j].creation;
        console.log(obj.recipes[j].creation);
    }

    document.getElementById("recipes2").style.display = "block";
    document.getElementById("box2").style.width = "100%";
    document.getElementById("b2").style.display = "none";
    document.getElementById("box1").style.display = "none";
    document.getElementById("box3").style.display = "none";

    loadRecipe();
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

    async function loadRecipe() {
        if(schonGeladen3) return;

        schonGeladen3 = true;

        let j = 2;

        const response = await fetch("https://raw.githubusercontent.com/mikhb01/learning/refs/heads/main/Project%201/JSON/recipe.JSON", {headers:{'Accept': 'application/json'}});
        const liste = document.getElementById("ing3");

        let text = await response.json();
        let jsonString = JSON.stringify(text);
    
        let obj = JSON.parse(jsonString);
        console.log(obj);

        for(i = 0; i < obj.recipes[2].ingredients.length; i++){
            console.log(obj.recipes[2].ingredients[i]);
            let li = document.createElement("li");
            li.textContent = obj.recipes[2].ingredients[i];
            console.log(li);
            liste.appendChild(li);
        }
        document.getElementById("cre3").innerHTML = obj.recipes[j].creation;
        console.log(obj.recipes[j].creation);
    }

    document.getElementById("recipes3").style.display = "block";
    document.getElementById("box3").style.width = "100%";
    document.getElementById("b3").style.display = "none";
    document.getElementById("box1").style.display = "none";
    document.getElementById("box2").style.display = "none";

    loadRecipe();

}

function showLess3(){
    document.getElementById("recipes3").style.display = "none";
    document.getElementById("b3").style.display = "inline-block";
    document.getElementById("box2").style.display = "block";
    document.getElementById("box1").style.display = "block";
    if(window.innerWidth > 600){
        document.getElementById("box3").style.width = "33.33%";
    }
}
