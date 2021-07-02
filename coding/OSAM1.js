const input_num = `1
2
4
3
5
6
7
8
9
10
11
12
14
15`



const num_array = input_num.split("\n");


function sort_array(a,b) {
    a = Number(a)
    b = Number(b);
    return a-b;
}

num_array.sort(sort_array);

let total = 0;
const array_element = num_array.length
let avr = 0;
num_array.forEach((num,index) => {
    if (index != 0 && index != array_element-1) {
        total += Number(num);
        avr = total / (array_element-2);
        
    }
})

console.log(avr);



