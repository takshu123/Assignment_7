//Answer -1


let myColor=["Red","Green","White","Black"];

let ansstring='"'+myColor.toString()+'"';
console.log(ansstring)
console.log(ansstring)
console.log('"'+myColor.join("+")+'"')

// Answer -2
let arr1=[3,'a','a','a',2,3,'a',3,'a',2,3,9,3];
for(let i=0;i<arr1.length;i++){
    if(arr1[i]=='a'){
        console.log(arr1[i]);

    }

}

// Answer -3

function truncateString(string ,num){

 let newstring='"'+string.slice(0,num)+'"'
return newstring;
}
console.log(truncateString("Robin Singh",4));

// Answer -4
function capitalizeWords(str){
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
console.log(capitalizeWords("js string exercises"))

// Answer -5

function arrBetween(min,max,array){
    let newarray=[];
    let pointer=0;
    for(let i=0;i<array.length;i++){
        if(array[i]>min &&array[i]<max){
            newarray[pointer++]=array[i];
          
        }

    }
    return newarray;

}

console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]));


// Answer-6
function findindex(ar,items){
    let index=-1;
for(let i=0;i<ar.length;i++){
    if(ar[i]==items){
      index=i;
    }

}
return index;

}

console.log(findindex(["hi", "edabit", "fgh", "abc"], "fgh"))
