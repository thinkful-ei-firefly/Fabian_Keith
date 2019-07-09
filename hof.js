function repeat(fn, n){
    for (let i = 1; i <= n; i++){
        fn();
    }
    /*let i = 1;
    while (i < n){
        fn();
        i++;65
    }*/
}

let hello = function hello(){
    console.log("Hello World");
}
let goodbye = function goodbye(){
    console.log("Goodbye World");
}

//repeat(hello, 5);
//repeat(goodbye, 5);

//------------------------------


function filter(arr, fn) {
    // TASK: Define your function here
    let newArray = [];
    for (let i = 0; i < arr.length; i++){
        if (fn(arr[i])){
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

//console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES


function hazardWarningCreator(typeOfWarning){
    let warningCounter = 0;

    return function(location){
        warningCounter++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
    };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const hail = hazardWarningCreator('Hail');
const deerCrossing = hazardWarningCreator('Deer crossing the road');
rocksWarning("USA");
hail('Canada');
rocksWarning("USA");

//-------------------------

function turtleMovement(movements){
    movements.filter(movement => {
        if (movement[0] >= 0 && movement[1] >= 0) return movement;
    }).map(movement => {
        return movement[0] + movement[1];
    }).forEach((item, index) => {console.log(`Movement #${index}: ${item} steps`)});
}

turtleMovement([[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]);

