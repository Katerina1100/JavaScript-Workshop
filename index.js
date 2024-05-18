// Checking Age for Different Ticket Prices 
let age = 11;

if (age < 12) {
    console.log("Child ticket is 5$");
}
else if (age >= 12 && age <= 18) {
    console.log("Teen ticket: $7");
}
else if (age >= 18 && age <= 60) {
    console.log("Senior ticket: $10");
    
}
else{
    console.log("Adult ticket: $8");
}