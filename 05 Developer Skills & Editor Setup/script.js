// 5-59 Using Google, StackOverflow and MDN

// Problem 1
// Find temperature amplitude

// const arr=[3,-2,-6,-1,'error',9,13,17,15,14,9,5];
// const calcAmplitude=function (arr){
//     var min=Number.MAX_VALUE;
//     var max=Number.MIN_VALUE;
//     for(var i=0;i<arr.length;i++){
//         if(typeof(arr[i])!='string' && arr[i] < min){
//             min=arr[i];
//         }
//         if(typeof(arr[i])!='string' && arr[i] > max){
//             max=arr[i];
//         }
//     }
//     return max-min;
// }
// console.log(`The temperature Amplitude is ${calcAmplitude(arr)}`);


// Problem 2
// Merge 2 arrays

// const arr1=[34,74,23,90];
// const arr2=[35,25,83,60];
// const res=arr1.concat(arr2);
// console.log(res);


// Problem 3
// combine problem 1 and problem 2

// const calcAmplitude=function (arr1,arr2){
//     const resArr=arr1.concat(arr2);
//     var min=Number.MAX_VALUE;
//     var max=Number.MIN_VALUE;
//     for(let i=0;i<resArr.length;i++){
//         if(typeof(resArr[i])!='string' && resArr[i] > max){
//             max=resArr[i];
//         }
//         if(typeof(resArr[i])!='string' && resArr[i]<min){
//             min=resArr[i];
//         }
//     }
//     return max-min;
// }
// const arr1=[3,-2,-6,-1,'error'];
// const arr2=[9,13,17,15,14,9,5];
// console.log(calcAmplitude(arr1,arr2));



// 5-61 Debugging with the console and breakpoints

// here prompt get the input as string format so we will get wrong output
// after analysing and fixing the problem using some strategies the output will comes perfect

// some strategies:
//      printing the functionality of the output value
//      printing the values related to the output

// const convertKelvin=function(){
//     const measurement={
//         type:'temp',
//         unit:'celcius',
//         value:Number(prompt(`Enter the celcius value`))
//     }
//     // console.warn(measurement['value']);
//     // console.error(measurement['value']);
//     // console.table(measurement);
//     const kelvin=measurement['value']+273;
//     return kelvin;
// }
// consolee.log(convertKelvin());


// 5-62 Coding challenge 1

// const printForecast=function(arr){
//     let str='...';
//     for(let i=0;i<arr.length;i++){
//         str+=`${arr[i]}ºC in ${i+1} days ...`;
//     }
//     return str;
// }
// const arr=[17,21,23];
// console.log(printForecast(arr));
