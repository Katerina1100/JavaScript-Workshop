//Check temperature for comfort level ( comfort is between 20 and 25 )

let temp = 10;

if (temp >= 20 && temp <= 25) {
    console.log("The temperature is comfortable");
}
else {
    console.log("The temperature is not comfortable");
}

let comfortlevel = temp >= 20 && temp <= 25 ? "The temperature is comfortable" : "The temperature is not comfortable";
console.log(comfortlevel);