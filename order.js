// Constants for item prices
const PRICE_HOTDOG = 4.65;
const PRICE_FRIES = 3.75;
const PRICE_SODA = 1.89;

// Function to round and format numbers to 2 decimal places
function showMoney(amount) {
    let rounded = Math.round(amount * 100) / 100;
    let decimalPart = (rounded - Math.floor(rounded)).toFixed(2).substring(2);
    return Math.floor(rounded) + "." + decimalPart;
}

// Function to calculate and display the order
function placeOrder() {
    // Get the quantities of each item
    const numDogs = parseInt(prompt("How many hotdogs do you want?"), 10);
    const numFries = parseInt(prompt("How many fries do you want?"), 10);
    const numSoda = parseInt(prompt("How many sodas do you want?"), 10);

    // Calculate the subtotal
    let subtotal = (numDogs * PRICE_HOTDOG) + (numFries * PRICE_FRIES) + (numSoda * PRICE_SODA);
    let originalSubtotal = subtotal; // To show before discount

    // Calculate discount
    let discount = 0;
    if (subtotal >= 25) {
        discount = 0.1 * subtotal;
        subtotal -= discount;
    }

    // Add tax
    const tax = 0.0625 * subtotal;
    const total = subtotal + tax;

    // Display order summary
    document.getElementById('orderSummary').innerHTML = `
        <p>Hotdogs Ordered: ${numDogs} (Total: $${showMoney(numDogs * PRICE_HOTDOG)})</p>
        <p>Fries Ordered: ${numFries} (Total: $${showMoney(numFries * PRICE_FRIES)})</p>
        <p>Sodas Ordered: ${numSoda} (Total: $${showMoney(numSoda * PRICE_SODA)})</p>
        <p>Subtotal (Before Discount): $${showMoney(originalSubtotal)}</p>
        <p>Discount: $${showMoney(discount)}</p>
        <p>Subtotal (After Discount): $${showMoney(subtotal)}</p>
        <p>Tax (6.25%): $${showMoney(tax)}</p>
        <p>Final Total: $${showMoney(total)}</p>
    `;
}
