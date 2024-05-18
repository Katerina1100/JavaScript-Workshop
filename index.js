//Check Age for Voting Eligibility

let age = 17;

if (age >= 18) {
    console.log("You can vote");
}   
else {
    console.log("You can't vote");
}

let votingEligibility = (age >= 18) ? "You can vote" : "You can't vote";
console.log(votingEligibility);