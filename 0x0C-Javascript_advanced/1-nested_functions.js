/**
 * Closure Scope Chain
 * Show how  the inner Lexical Environment
 * @return {void}
 */
let globalVariable = "Welcome";
function outer() {
    alert(globalVariable);
    let course = "Holberton";

    function inner() {
        alert(globalVariable + " " + course);
        let exclamation = "!";

        function inception() {
            alert(globalVariable + " " + course + exclamation);
        }
        inception();
    }
    inner();
}
outer();