// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'Waldo') {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(num) {
  console.log('Found him!');
  console.log(num);

}

findWaldo(['Alice', 'Bob', 'Waldo', 'Winston'], actionWhenFound);

console.log('this worked on develop')
