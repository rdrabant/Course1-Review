let localStore = window.localStorage;

let doggoItem = document.querySelector("#doggo");
let doggoButton = document.createElement("button");
doggoButton.textContent = "Vote for Doggo";
doggoButton.addEventListener("click", function(){ vote("doggo")});
doggoItem.append(doggoButton);

let cattoItem = document.querySelector("#catto");
let cattoButton = document.createElement("button");
cattoButton.textContent = "Vote for Cat";
cattoButton.addEventListener("click", function(){ vote("catto")});
cattoItem.append(cattoButton);

let fishItem = document.querySelector("#fish");
let fishButton = document.createElement("button");
fishButton.textContent = "Vote for Cat";
fishButton.addEventListener("click", function(){ vote("fisho")});
fishItem.append(fishButton);

let doggoVotes = localStore.getItem('doggo');
let catVotes = localStore.getItem('catto')
let fishVotes = localStore.getItem('fisho')

if(doggoVotes == null){
    localStore.setItem('doggo', 0);
}else{
    doggoVotes = parseInt(doggoVotes);
    if(isNaN(doggoVotes)){
        doggoVotes = 0;
    }
}

if(catVotes == null){
    localStore.setItem('catto', 0);
}else{
    catVotes = parseInt(catVotes);
    if(isNaN(catVotes)){
        catVotes = 0;
    }
}

if(fishVotes == null){
    localStore.setItem('fisho', 0);
}else{
    
    fishVotes = parseInt(fishVotes);

    if(isNaN(fishVotes)){
        fishVotes = 0;
    }
}

console.log("FISH VOTES: " + fishVotes);

let dogTotalEl = document.querySelector("#doggo-votes");
let catTotalEl = document.querySelector("#catto-votes");
let fishTotalEl = document.querySelector("#fish-votes");

//init totals
dogTotalEl.textContent = doggoVotes;
catTotalEl.textContent = catVotes;
fishTotalEl.textContent = fishVotes;

function vote(idName){

    console.log(idName + " vote called");
    if(idName !== null){
        if(idName == "doggo"){
            doggoVotes = doggoVotes +1;
            localStore.setItem("doggo", doggoVotes)
        }else if(idName == "catto"){
            catVotes = catVotes + 1;
            localStore.setItem("catto", catVotes)
        }else if(idName == "fisho"){
            fishVotes = fishVotes +1;
            localStore.setItem("fisho", fishVotes)
        }else{
            console.log("error. ID not found")
        }

        //update the totals

        dogTotalEl.textContent = doggoVotes;
        catTotalEl.textContent = catVotes;
        fishTotalEl.textContent = fishVotes;

    }

}

