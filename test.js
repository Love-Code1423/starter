/*
console.log(!!5);
console.log(!!0, !!-1, !!5, !!0.5);
console.log(!!'', !!``,!!"", !!"0", !!" ", !!"-1", !!"Farshad", !!0n);
console.log(!!false, !!true);
console.log(!!null, !!undefined);
console.log(!![], !!{});
*/
/*
console.log(
    true == true,
    true == false,
    true == 0,
    true == '',
    true == null,
    true == undefined,
    true == NaN,
    true == Infinity,
    true == [],
    true == {}
);

console.log(
    false == 0,
    null == undefined,
    false == [],
    !![0] == true
);
    console.log(
    false === 0,
    null === undefined,
    false == [],
    !![0] === true
);
    console.log(
    false === null,
    false === undefined,
    NaN == NaN,
    Infinity == true,
    true == [],
    !![0] === true
);
if(true){
    //truthly
} else {
    //falthly
}
*/
console.log(true && 5 && "anything" && []);

let accessAge = 18;
let userAge = 17;

if (true && 5 && "anything" && [] && userAge >= accessAge) {
    console.log("truthly");
} else {
    console.log("falthly");
}
if (false || 0 || "anything"|| [] || userAge >= accessAge) {
    console.log("truthly");
} else {
    console.log("falthly");
}