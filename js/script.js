function palindrome(str) {
    "use strict";
    let strArray = str.replace(/[_\W]/g, "").toLowerCase().split("");
    if (strArray.join("").length % 2 !== 0) {
        strArray.splice(Math.floor(strArray.length / 2), 1);
    }
    for (let i = 0; i < Math.round(strArray.length / 2); i++) {
        if (strArray[i] != strArray[strArray.length - i - 1]) {
            return document.getElementById("answer").innerHTML = "It isn't a palindrome";
        }
    }
    return document.getElementById("answer").innerHTML = "It is a palindrome!";
}
document.getElementById("button").addEventListener("click", function() {
    palindrome(document.getElementById("str").value);
});