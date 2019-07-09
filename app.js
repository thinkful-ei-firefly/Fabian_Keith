function min(numbers){
    if (numbers.length === 0)
        return null;
    let i = 0;
    let min;
    while (i <= numbers.length){
        if (!min)
            min = numbers[i];
        else if (min > numbers[i])
            min = numbers[i];
        i++;
    }
    return min;
}

function max(numbers){
    if (numbers.length === 0)
        return null;
    let i = 0;
    let max;
    while (i <= numbers.length){
        if (!max)
            max = numbers[i];
        else if (max < numbers[i])
            max = numbers[i];
        i++;
    }
    return max;
}

let test = [1,5,3,15,20, -5];
console.log(min(test));
console.log(max(test));