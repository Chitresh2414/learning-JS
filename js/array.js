const arr1 = ["chinku" ,11,true ,"hello"];
/*console.log(arr1);
*/

const numArr = [1, 2, 3, 4, 5];

//while loop useing 
let i=0;
let add=0;
while(i<numArr.length){
    add+=numArr[i];
    i++;
}
console.log(`sum of array is ${add}`);

const numArr2 = [6, 7, 8, 9, 10];
//for loop useing
let sum=0;
for(let j=0;j<numArr2.length;j++){
  console.log(`element at index ${j} is ${numArr2[j]}`);
    sum=sum+numArr2[j];
}
console.log(`sum of array is ${sum}`);

//do while loop useing
let numArr3 = [11, 12, 13, 14, 15];
let k = 0;
let total = 0;
do {
    total += numArr3[k];
    k++;
} while (k < numArr3.length);
console.log(`sum of array is ${total}`);