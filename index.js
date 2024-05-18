//Determining Pass or Fail Based on Score 0-100 ( below 65 is a fail )

let score = 45;

if (score >= 65) {
    console.log("Pass");
} else {
    console.log("Fail");
}

let passOrFail = score >= 65 ? "Pass" : "Fail";
console.log(passOrFail)