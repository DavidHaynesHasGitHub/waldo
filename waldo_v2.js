// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(found)
}

function actionWhenFound(input) {
  if(input === 'Waldo'){
    console.log("You found him!");
  }
}

findWaldo(['Alice', 'Bob', 'Waldo', 'Winston'], actionWhenFound);

//this is the develop branch
