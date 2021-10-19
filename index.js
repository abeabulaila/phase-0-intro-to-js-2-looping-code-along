function writeCards(friends, event) {
  const newArray = [];
    for (let i = 0; i < friends.length; i++) {
        newArray[i] = (`Thank you, ${friends[i]}, for the wonderful ${event} gift!`);
    debugger;
    }
    return newArray;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday"); 


function countDown(integer = 10){
while (integer > -1) {
  console.log(integer--);
}
return countDown;
}


