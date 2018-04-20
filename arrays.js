var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var newArray = [...array]
  newArray.unshift(element)
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
<<<<<<< HEAD
  array.unshift(element)
  return array
}
=======
  return array.unshift(element)
 }
>>>>>>> 7289534c5ca24354ddbd3fabca6367c14f59d9e4

function addElementToEndOfArray(array, element) {
  var newArray = [...array]
  newArray.push(element)
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element) {
<<<<<<< HEAD
  array.push(element)
  return array
} 

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
 
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
 
 
 
 
 
 
 
=======
  return array.push(element)
} 
>>>>>>> 7289534c5ca24354ddbd3fabca6367c14f59d9e4
