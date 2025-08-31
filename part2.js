// Custom function
function square(number) {
  return number * number;
}

// Using the function
console.log(square(5));  // 25
console.log(square(10)); // 100


function canVote(age) {
  if (age >= 18) {
    return "You are eligible to vote.";
  } else {
    return "Sorry, you are not old enough to vote.";
  }
}

// Using the function
console.log(canVote(20)); // "You are eligible to vote."
console.log(canVote(16)); // "Sorry, you are not old enough to vote."
