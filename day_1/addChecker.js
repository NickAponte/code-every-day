// Write a function called addChecker that accepts two arguments.
// The first argument is an array containing at least two integers. The integers in the array have been pre-sorted in ascending order.
// The second argument is an integer.
// The addChecker function should return true if there are two integers in the array of integers (first argument) that, when added together, equals the integer passed in as the second argument.
// If there are no two integers in the array with a sum equal to the second argument, addChecker should return false.
// Hint:
// An efficient solution can leverage the fact that the integers in the array come sorted for you.


function addChecker(arr,answer){
    let result = false
    for (let i = 1; i < arr.length ; i++) {
        // console.log(arr[0] + arr[i]);
        if ((arr[0] + arr[i]) == answer){
            
            result = true
        }
        
    }
    // console.log(sum)
    return (result)
}




console.log(addChecker( [1, 2], 3 )) // => true
console.log(addChecker( [-3, 2], 9 ))// => false
console.log(addChecker( [10, 15, 16, 22], 32 )) // => true
console.log(addChecker( [10, 15, 16, 22], 19 )) // => false