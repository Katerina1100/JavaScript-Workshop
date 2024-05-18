//Determining Shipping Cost Based on Order Amount (if the amout is above 100 shipping is free, if not it's $10)

let orderAmount = 110;

if (orderAmount > 100) {
    console.log("Shipping cost is free");
} else {
    console.log("Shipping cost is $10");
}

let shipping = orderAmount > 100 ? "Shipping cost is free" : "Shipping cost is $10";
console.log(shipping);