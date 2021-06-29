/**
 * Lexical Scoping,nested function
 * It can access the outer variables
 * @param  {String} firstName The first name
 * @param  {Number} lastName The last name
 * @return {void}
 */
function welcome(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    function displayFullName () {
        alert( "Welcome " + fullName + "!");
    }
    displayFullName();
}
