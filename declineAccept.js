const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write a function declineEverything() that takes in an array of strings and, using .forEach(), loops through each element in the array and calls politelyDecline() with each of them.

const declineEverything = arr => {
  arr.forEach(politelyDecline)
};

declineEverything(veggies);

// Write a function acceptEverything() that takes in an array of strings and loops through each element in the array and grudgingly accepts each of them, by logging to the console in the following format: 'Ok, I guess I will eat some [element].'

const acceptEverything = arr => {
  arr.forEach(element => {
    console.log(`Ok, I guess I will eat some ${element}.`)
  })
}

acceptEverything(veggies);