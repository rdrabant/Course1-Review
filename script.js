let localStore = window.localStorage;

let doggoVotes = localStore.getItem('doggo');
let catVotes = localStore.getItem('catto')
let fishVotes = localStore.getItem('fisho')

let dogTotalEl = document.querySelector("#doggo-votes");
let catTotalEl = document.querySelector("#catto-votes");
let fishTotalEl = document.querySelector("#fish-votes");

//init totals
dogTotalEl.textContent = doggoVotes;
catTotalEl.textContent = catVotes;
fishTotalEl.textContent = fishVotes;

if(doggoVotes === null){
    localStore.setItem('doggo', 0);
}

if(catVotes === null){
    localStore.setItem('catto', 0);
}

if(fishVotes === null){
    localStore.setItem('fisho', 0);
}

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

