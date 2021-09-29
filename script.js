let localStore = window.localStorage;

let doggoVotes = localStore.getItem('doggo');
let catVotes = localStore.getItem('cat')
let fishVotes = localStore.getItem('fish')

if(doggoVotes === null){
    localStore.setItem('doggo', 0);
}

if(catVotes === null){
    localStore.setItem('cat', 0);
}

if(fishVotes === null){
    localStore.setItem('fish', 0);
}

function voteDoggo(idName){

    console.log(idName + " vote called");
}

