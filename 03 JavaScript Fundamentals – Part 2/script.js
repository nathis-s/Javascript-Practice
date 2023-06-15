//  3-32 Activating strict mode

// without using strict - here,if assign a value to undefined variable it doesn't shows error and create new variable

//  let var1=false;
//  let var2=true;
//  if(var2){
//     va1=true;
//  }
//  console.log(va1);


//  using strict

// 'use strict';
// let var1=false;
// let var2=true;
// if(var2){
//     va1=true;
// }
// console.log(va1);


// without using strict mode

// let interface=true;
// console.log(interface);
// let private=true;
// console.log(private);


// using strict mode

// 'use strict';
// let interface=true;
// console.log(interface);
// let private=true;
// console.log(private);



// 3-33 Functions

// function fun1(){
//     console.log("hello world");
// }
// fun1();


// function fun1(name,age){
//     const details=`Your name is ${name} and your age is ${age}`;
//     return details;
// }
// var name='Nathis S';
// var age=23;
// const res=fun1(name,age);
// console.log(res);


// function fun1(name,age){
//     const res=`Your name is ${name} and your age is ${age}`;
//     return res;
// }
// const res1=fun1('Nathis',20);
// console.log(res1);
// const res2=fun1('Vikash',34);
// console.log(res2);



// 3-34 Function declaration vs expressions

// function declaration

// function fun1(age){
//     return age-18;
// }
// const res1=fun1(30);
// console.log(`Your are ${res1} years more from 18`);

// function expression

// const var1=function(age){
//     return age-18;
// }
// console.log(`Your are ${var1(30)} years more from 18`);


// we can't call the function expression before initializing it --> it gives error

// console.log(var1(5));
// const var1=function(age){
//     return age;
// }


// but in function declaration we can call the function before initialization

// const res=fun1(5);
// console.log(res);
// function fun1(age){
//     return age;
// }



// 3-35 Arrow functions

// arrow function can only be written as function expression
// arrow can be best suitable only if we are using one paramater and one line code inside the function otherwise it will increase complexity

// const res= age =>age;
// console.log(res(10));


// const res = (currentYear,birthYear) => {
//     const age=currentYear-birthYear;
//     const retirement=65-age;
//     return retirement;
// }
// console.log(`You have ${res(2023,2003)} years to reach your retirement age`);



// 3-36 Functions calling other functions

// const fruits_ph=function (fruits){
//     return fruits*4;
// }
// const fruit_processor=function(var1,var2){
//     const res_var1=fruits_ph(var1);
//     const res_var2=fruits_ph(var2);
//     return `Here is the 1st output ${res_var1} and 2nd output ${res_var2}`;
// }
// console.log(fruit_processor(5,10));



// 3-37 Reviewing functions

// const percentage=function (mark){
//     return mark/4;
// }

// const marks=function(math_mark,phy_mark,che_mark,bio_mark){
//     const res=percentage(math_mark)+percentage(phy_mark)+percentage(che_mark)+percentage(bio_mark);
//     if(res>25){
//         return 'Pass';
//     }
//     else{
//         return 'Fail';
//     }
// }
// const res=marks(80,65,76,79);
// console.log(res);



// 3-38 Coding challlengs 1

// const calcAverage=(sc1,sc2,sc3) => (sc1+sc2+sc3)/3;

// const checkWinner=function (avgDolphins,avgKoalas){
//     console.log(`${avgDolphins}`+` `+`${avgKoalas}`);
//     if(avgDolphins>=avgKoalas*2){
//         console.log(`Dolphin wins 🏆 with ${avgDolphins} score`);
//     }
//     else if(avgKoalas>=avgDolphins*2){
//         console.log(`Koalas wins 🏆 with ${avgKoalas} score`);
//     }
//     else{
//         console.log(`No one wins the game`);
//     }
// }

// const avgDolphins=calcAverage(85,54,41);
// const avgKoalas=calcAverage(23,34,27);
// checkWinner(avgDolphins,avgKoalas);



// 3-39 Introduction to arrays

// array can store values of same data types and as well as different data types

// const arr1=[35,67,98,54,78];
// const arr2=['Michael','Steven','Jobs','Robin'];
// const arr3=[45,67,'Michael',34,'Harry','Parker'];
// console.log(arr1,arr2,arr3);
// console.log(arr1[0]+"  "+arr2[2]+"  "+arr3[4]);
// console.log(arr1.length+"  "+arr2.length+"  "+arr3.length);


// to print the last element in the array

// const arr2=['Michael','Steven','Jobs','Robin'];
// console.log(arr2[arr2.length-1]);


//another method to create an array using new keyword

// const arr=new Array(54,56,87,34,78);
// console.log(arr);


// even if we declare an array as const we can modify(mutate)  the partial values in array but not the entire array

// const arr1=['Robin','Jack','Sparrow','Peter'];
// console.log(`Before changing the array : ${arr1}`);
// arr1[2]='Philip';
// console.log(`After changing the array : ${arr1}`);


// if we declare the array as const, it is not possible to change the entire array,it gives an error

// const arr1=['Robin','Jack','Sparrow','Peter'];
// arr1=['Jack','Robin','Nothing',"Sweden"];


// but if we declare array as let (or) var we can change the entire array

// var arr1=['Michael','Steven','Jobs','Robin'];
// console.log(arr1);
// console.log(`Before changing the array : ${arr1}`);
// arr1=['Vimal','AK','Maran'];
// console.log(`After changing the array : ${arr1}`);


// manipulation array elements

// Eg:1

// function fun1(arr1){
//     const name=arr1[2];
//     return name;
// }
// const arr1=['Robin','Jack','Sparrow','Peter'];
// console.log(fun1(arr1));


// Eg:2

// function fun1(val){
//     const name=val;
//     return name;
// }
// const arr1=['Robin','Jack','Sparrow','Peter'];
// console.log(fun1(arr1[2]));


// if we pass a variable to function then the function creates a copy of the variable and any modification done inside the variable doesn't reflect outside of the function

// function fun1(val1){
//     val1='Vikash';
//     console.log(val1);
// }
// var val1='Nathis';
// fun1(val1);
// console.log(val1);


// but in array if we pass the array to function it points to a reference of the array and if any modification done inside the function also reflects outside the function

// function fun1(arr2){
//     arr2[2]='Najos';
//     console.log(arr2);
// }
// const arr1=['Robin','Jack','Sparrow','Peter'];
// fun1(arr1);
// console.log(arr1);



// 3-40 Basic array operations (methods)

// all the below using array operations must return some value

// add value at last of the array and returns the length of the array

// const arr=[53,76,96,57];
// console.log(`Before modifying the array : ${arr}`);
// console.log(arr.push(87));
// console.log(`After modifying the array : ${arr}`);


// add value at first of the array and returns the length of the array

// const arr=[53,76,96,57];
// console.log(`Before modifying the array : ${arr}`);
// console.log(arr.unshift(87));
// console.log(`After modifying the array : ${arr}`);


// remove value at last of the array and returns the removed value

// const arr=[53,76,96,57];
// console.log(`Before modifying the array : ${arr}`);
// console.log(arr.pop(87));
// console.log(`After modifying the array : ${arr}`);


// remove value at last of the array and returns the removed value

// const arr=[53,76,96,57];
// console.log(`Before modifying the array : ${arr}`);
// console.log(arr.shift(87));
// console.log(`After modifying the array : ${arr}`);


// print the index of the value and it is based strict equality

// const arr=[53,76,96,57];
// console.log(arr.indexOf(76));
// console.log(arr.indexOf('76'));


// prints the boolean value whether the value is present or not and it is based on strict equality

// const arr=[53,76,96,57];
// console.log(arr.includes(76));
// console.log(arr.includes('76'));



// 3-41 Coding challenge 2

// function calcTip(billValue){
//     const tip=billValue>=50 && billValue<300 ? billValue*0.15 : billValue*0.20;
//     return tip;
// }

// var bills=[125,555,44];
// var tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
// var totals=[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
// console.log(bills,tips,totals);



// 3-42 Introduction to objects

// var obj1={
//     name:'Nathis',
//     age:20,
//     dpt:'CT',
//     marks:{
//         math:23,
//         phy:34,
//         che:54
//     },
//     skills:['Java','HTML','CSS']
// };
// console.log(obj1);
// console.log(obj1.age);



// 3-43 dot vs bracket notation

// using dot notation

// var obj1={
//     name:'Nathis',
//     age:20,
//     dpt:'CT',
//     marks:{
//         math:23,
//         phy:34,
//         che:54
//     },
//     skills:['Java','HTML','CSS']
// };
// console.log(obj1.marks.math);
// console.log(obj1.skills[2]);


// using bracket notation

// var obj1={
//     name:'Nathis',
//     age:20,
//     dpt:'CT',
//     marks:{
//         math:23,
//         phy:34,
//         che:54
//     },
//     skills:['Java','HTML','CSS']
// };
// console.log(obj1['name']);
// console.log(obj1['marks']);


// recommended method is using bracket notation due to some reasons

// var obj1={
//     name:'Nathis',
//     age:20,
//     dpt:'CT',
//     marks:{
//         math:23,
//         phy:34,
//         che:54
//     },
//     skills:['Java','HTML','CSS']
// };
// const var1='age';
// console.log(obj1.var1);      // here it gives an error, for this reason we are using bracket notation
// console.log(obj1[var1]);


// var obj1={
//     firstname:'Nathis',
//     lastname:'S',
//     age:20,
//     dpt:'CT',
//     marks:{
//         math:23,
//         phy:34,
//         che:54
//     },
//     skills:['Java','HTML','CSS']
// };
// const var1=prompt('Enter the value');
// console.log(obj1.var1);         // it doesn't gives the output
// console.log(obj1[var1]);


// var obj1={
//     firstname:'Nathis',
//     lastname:'S',
//     age:20,
//     dpt:'CT',
//     marks:{
//         math:23,
//         phy:34,
//         che:54
//     },
//     skills:['Java','HTML','CSS']
// };
// const var1=prompt('Enter the value');
// console.log(obj1['first'+var1]);


// insert values in object documentation

// var obj1={
//     firstname:'Nathis',
//     lastname:'S',
//     age:20,
//     dpt:'CT',
//     marks:{
//         math:23,
//         phy:34,
//         che:54
//     },
//     skills:['Java','HTML','CSS']
// };

// // using dot notation

// obj1.location='Sathy';

// // // using bracket notation

// obj1['batch']='2024';
// console.log(obj1);

// console.log(obj1.skills[2]);
// console.log(obj1.marks['math']);
// console.log(obj1.skills.length);


// creating a function inside object and paasing parameter externally to the function

// var obj1={
//     firstname:'Nathis',
//     lastname:'S',
//     age:20,
//     dpt:'CT',
//     marks:{
//         math:23,
//         phy:34,
//         che:54
//     },
//     skills:['Java','HTML','CSS'],
//     percent:function(val){
//         return (val/500)*100;
//     }
// };
// console.log(obj1.percent(76));


// creating a function inside object and passing paramter(value) which is present inside the object using 'this' keyword
// uses of 'this' keyword is to ignore the manual changes of the input whether the object name is changed
// don't worry if you didn't understand the explanation, by seeing eg:1 & 2 you will get clear idea

// Eg:1

// var obj1={
//     firstname:'Nathis',
//     lastname:'S',
//     age:20,
//     dpt:'CT',
//     marks:{
//         math:23,
//         phy:34,
//         che:54
//     },
//     skills:['Java','HTML','CSS'],
//     dob:function(){
//         return 2023-this.age;
//     }
// }
// console.log(`Your birth year is ${obj1.dob()}`);


// Eg:2

// var obj1={
//     firstname:'Nathis',
//     lastname:'S',
//     age:20,
//     dpt:'CT',
//     marks:{
//         math:23,
//         phy:34,
//         che:54
//     },
//     skills:['Java','HTML','CSS'],
//     dob:function(age=this.age){
//         return 2023-age;
//     }
// }
// console.log(`Your birth year is ${obj1.dob()}`);


// Eg:3

// storing the calculated value from the function(inside object) using 'this' keyword

// var obj1={
//     firstname:'Nathis',
//     lastname:'S',
//     age:20,
//     dpt:'CT',
//     marks:{
//         math:23,
//         phy:34,
//         che:54
//     },
//     skills:['Java','HTML','CSS'],
//     dobcalc:function(){
//         this.dob=2023-this.age;
//     }
// }
// obj1.dobcalc();
// console.log(obj1);
// console.log(obj1.dob);


// coding challenge

// soln:1

// var jonas={
//     firstname:'Nathis',
//     lastname:'S',
//     age:20,
//     dpt:'CT',
//     marks:{
//         math:23,
//         phy:34,
//         che:54
//     },
//     skills:['Java','HTML','CSS'],
//     license:true,
//     summary:function(){
//         if(this.age>18 && this.license){
//             this.result=`eligible`;
//         }
//         else{
//             this.result=`not eligible`;
//         }
//         return this.result;
//     }
// }
// console.log(jonas.summary());


// soln:2

// var jonas={
//     firstname:'Nathis',
//     lastname:'S',
//     age:20,
//     dpt:'CT',
//     marks:{
//         math:23,
//         phy:34,
//         che:54
//     },
//     skills:['Java','HTML','CSS'],
//     license:true,
//     summary:function(){
//         return `Your name is ${this.firstname+" "+this.lastname} and your age is ${this.age}. So you are ${this.license? 'a' :'not'} eligible for driving`;
//     }
// }
// console.log(jonas.summary());


