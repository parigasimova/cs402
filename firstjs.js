let arr = [2,9,6,11,-5,-3,8,6,"AzerBayCan",true,12,346,"LANKARAN","LimOn",2,9,182];
for(let i=0;i<arr.length;i++){
    if(typeof arr[i] === 'number' && arr[i]%2 !==0){
      console.log(i);
    }
}
console.log("-------------------");

for(let i=0;i<arr.length;i++){
    if(typeof arr[i] === 'number' && arr[i]%2 ===0){
      console.log(arr[i]);
    }
}
console.log("-------------------");
let number = -Infinity
for(let i=0;i<arr.length;i++){
    if(typeof arr[i] === 'number'){
      if(arr[i]>number){
        number=arr[i];
    
      }
    }
}
console.log(number);
