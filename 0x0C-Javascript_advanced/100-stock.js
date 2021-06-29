let stock = { macbook: 2, iphone: 4 };

/**
 * change the stock, by removing one item
 * of the stock for the item passed in argument
 * @param {String} itemName Item Name to process
 */
function processPayment(itemName) {
  delete stock[itemName];
  console.log('Payment is being processed for item ' + itemName);
}

/**
 * Logs to the console
 * @param {String} itemName Item Name to process
 */
function processError(itemName) {
  console.log(`No more ${itemName} in stock`);
  console.log(`Payment is not being processed`);
}

/**
 * Makes different process based on the previous functions
 * making callbacks, and logs to console
 * @param {String} itemName Item Name to process
 * @param {Function} callbackPayment
 * @param {Function} callbackError
 */
function processOrder(itemName, callbackPayment, callbackError) {
  console.log(`Verifying the stock of ${itemName}`);
  if (stock[itemName] === undefined) callbackError(itemName);
  else callbackPayment(itemName);
}

console.log('');
var itemName = prompt(
  'Please enter the item you would like to purchase (Macbook, iPhone)'
);

if (itemName === 'Macb0ok' || itemName === 'Macbook') itemName = 'macbook';
if (itemName === 'iPhone') itemName = 'iphone';
processOrder(itemName, processPayment, processError);
