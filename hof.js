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

repeat(hello, 5);
repeat(goodbye, 5);