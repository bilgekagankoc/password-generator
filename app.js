const getPassword = document.querySelector("#password");
const copyPssword = document.querySelector(".copy-password");
const rangePassword = document.querySelector("#range-password");
const passwordLength = document.querySelector(".password-length");
const passwordGenerator = document.querySelector(".password-generator");
const cb = document.querySelectorAll(".cb");



passwordGenerator.addEventListener("click", (e1) => {
    if (e1.target.id == "uppercase" || e1.target.id == "lowercase" || e1.target.id == "numbers" || e1.target.id == "symbols" || e1.target.id == "range-password") {
        var pswObj = {
            uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            lowercase: "abcdefghijklmnopqrstuvwxyz",
            symbols: "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~",
            numbers: "0123456789"
        }
        var getPswAll = "";
        cb.forEach((e, x) => {
            if (e.childNodes[0].checked) {
                for (var i = 0; i < x + 2; i++) {
                    if (e.childNodes[0].name == Object.keys(pswObj)[i]) {
                        getPswAll = getPswAll.concat(Object.values(pswObj)[i]);
                    }
                }
            }

        })
        passwordLength.textContent = rangePassword.value;
        getRandomPassword(getPswAll, rangePassword.value);
    }
    else if (e1.target.className == "ion-ios-copy-outline copy-password") {
        var copyText = document.getElementById("password");
        copyText.select();
        document.execCommand("copy");
        alert("Copied the text: " + copyText.value);
    }

})


function getRandomPassword(psw, number) {
    var retVal = "";
    var totalPsw = "";
    var totalPsw = totalPsw.concat(psw);
    for (var i = 0, n = totalPsw.length; i < number; i++) {
        retVal += totalPsw.charAt(Math.floor(Math.random() * n));
    }
    getPassword.value = retVal;
}

function myFunction() {

}


