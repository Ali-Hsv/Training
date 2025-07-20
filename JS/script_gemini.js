//! parseInt()-------------------------

// console.log(parseInt("10"));   //* 10
// console.log(parseInt("10.5")); //* 10 ("." - den sonrasini silir);
// console.log(parseInt("10px"))  //* 10 ("p" - da durdu);
// console.log(parseInt("px10"))  //* NaN (setir ededle baslamir);
// console.log(parseInt("10", 8)) //* 8 (10 - 8 li say sisteminde 8 dir);
// console.log(parseInt("0xF", 16)) //* 15 (0xF - 16 li say sisteminde 15 dir);
// console.log(parseInt("010"))   //* 10 (brauzerlerde 10 say sistemi goturduyune gore 10 olacaq);

//! parseFloat()----------------------

// console.log(parseFloat("10")) //* 10
// console.log(parseFloat("10.5")) //* 10.5
// console.log(parseFloat("10.5px")) //* 10.5 ("p" - da durdu);
// console.log(parseFloat("px10.5")) //* NaN (setir ededle baslamir);
// console.log(parseFloat("3.14e-2")) //* 0.0314 (eksponensial qeydləri idarə edir);

//! Tasks ---------------------------

//! -----Task_#1-----
let a = "25 apples";
console.log(parseInt(a));

let b = "3.14 meters";
console.log(parseFloat(b));

//! -----Task_#2-----

let c = "0xFF";
console.log(parseInt(c, 16));

//! -----Task_#3-----

function extractNumbers(str){
    let num = [];
    
}

