// Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order. 

const reverseArray = arr => {
    const reverse = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reverse.push(arr[i])
    }
    return reverse
  }
  
  
  // When you're ready to test your code, uncomment the below and run:
  
  const sentence = ['sense.','make', 'all', 'will', 'This'];
  
  console.log(reverseArray(sentence)) 
  // Should print ['This', 'will', 'all', 'make', 'sense.'];