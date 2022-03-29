const Input_Num = `6
10
6
3
23
10
6`;

const num_array = Input_Num.split("\n");

let newArray = []
let redundant = []

for (num in num_array) {
    console.log(num);
    if (newArray.includes(num_array[num])) {
        redundant.push(num_array[num]);
    } else {
        newArray.push(num_array[num]);
    }
}



for (num in redundant) {
    console.log(newArray.includes(redundant[num]));
    if (newArray.includes(redundant[num])) {
        newArray.splice(redundant[num],1);
        console.log(newArray);
    }
};

console.log(newArray);

function sort_array (a,b) {
    a = Number(a);
    b = Number(b);
    return a-b;
}

newArray.sort(sort_array);

let result = "";

for (num in newArray) {
    result += newArray[num] + " "
}



