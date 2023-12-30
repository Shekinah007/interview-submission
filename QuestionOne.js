// console.clear()
let testString = "(((sjf(er)())))"

const bracketChecker = (str) => {

    let openingBrackets = 0;
    let closingBrackets = 0;
    let lastOpenBracket = false;

    for (let i = 0; i < str.length--; i++) {
        if (str[i] === "(" && lastOpenBracket == false) {
            openingBrackets++;
        } else if (str[i] === ")") {
            lastOpeningBracket = true  //stops the counting of any addional open brackets
            closingBrackets++;
        }
    }

    if (openingBrackets == closingBrackets) {
        return 1
    } else {
        return 0;
    };
}

console.log(bracketChecker(testString))
console.log(bracketChecker("(coder)(byte))"))
console.log(bracketChecker("(c(oder)) b(yte)"))
