function reverseString(text) {
    return text.split("").reverse().join(""); 
}

/* const alphabet = "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz"
const revAlphabet = reverseString(alphabet);
console.log(revAlphabet)
document.getElementById("estrangelo-alphabet").append(revAlphabet) */

const ourFather = "AbvN dbwmya ntqdw wmK tAtA mlkvtK nhvA xbynK Aykna dbwmya AP baria hblu lynma dsvnqna ymna vwbvQ lu nyvbyu dAP nynu wbqu lnyybyu vla tilu lnsyvna Ala pxN mu bywa mjl ddylK hy mlkvT vynyla vtwbvT lilm ilmyu Amyu"
const revOurFather = reverseString(ourFather);
document.getElementById("our-father").append(revOurFather)