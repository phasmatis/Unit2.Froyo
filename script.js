// Object to store the observed froyo flavors and their counts
const observedFlavors = {
  vanilla: 0,
  strawberry: 0,
  coffee: 0,
};
// console.table(observedFlavors);

function processFroyoInput(input) {
  // Splits the input into an array of flavors
  const flavors = input.split(",").map((flavor) => flavor.trim());

  // Count the occurrences of each flavor and update the observedFlavors object
  flavors.forEach((flavor) => {
    observedFlavors[flavor] = (observedFlavors[flavor] || 0) + 1;
  });

  // Displays the current state of observedFlavors in the console
  console.table(observedFlavors);

  // Returns the array of froyo flavors
  return flavors;
}

// Prompt the user for input when entering the website
const userInput = prompt(
  "Welcome to our froyo website! Please enter a list of comma-separated froyo flavors:"
);

// Checks if the user provided input
if (userInput !== null && userInput !== "") {
  processFroyoInput(userInput);
}

// -------NOTES---------

// input.split("") method helps break up the users input string into an array of substrings using the comma as a de limiter
// example of user input: "vanilla,coffee,strawberry" will be fixed to ["vanilla", "coffee", "strawberry"]
// .map((flavor) => flavor.trim()) removed the whitespace around each flavor.
