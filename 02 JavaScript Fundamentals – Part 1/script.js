// console.log("Hello World");


// alert("Hello world!");


// let variable1="Welcome to js";
// if(variable1=="Welcom to js"){
//     alert("True");
// }
// else{
//     alert("No");
// }


// console.log(34+32+45+76);
// console.log(34+34+56+23-45-93-48);



// 2-10 values and variables:

// let firstName="Deepz";
// let lastName='Nathis';
// console.log(firstName);
// console.log(firstName);
// console.log(firstName+lastName);

// let 3jfvn="vf";
// console.log(3jfvn);

// let first&Name="Nathis";
// console.log(first&Name);

// words which we doesn't change later we can declare in uppercase:
// let PI=3.14;
// console.log(PI);



// 2-13 Data types:

// let name='NathisS';
// let age=20;
// let eligibleForVoting=true;
// console.log(name+" "+age+" "+eligibleForVoting);

// let firstName;
// firstName='karina';
// console.log(firstName);

// changing variable from one type to another type:
// let age=23;
// console.log(age);
// age='eligble age';
// console.log(age);

// let name='NathisS';
// let age=20;
// let eligibleForVoting=true;
// console.log(typeof name+" "+typeof age+" "+typeof eligibleForVoting);

// let age;
// console.log(age+" "+typeof age);
// age=20;
// console.log(age+" "+typeof age);



// 2-14 let,const,var:

// let ageMohan=30;
// console.log(ageMohan);
// ageMohan=23;
// console.log(ageMohan);

// const ageTharun=32;
// console.log(ageTharun);
// ageTharun=75;
// console.log(ageTharun);

// var ageArun=32;
// console.log(ageArun);
// ageArun=52;
// console.log(ageArun);

// name='sanjith';
// console.log(name);



// 2-14 Basic operators:

// let age=23;
// console.log(age);
// console.log(age+34);
// console.log(age-9);
// console.log(age*10);
// console.log(age**4);
// console.log(age/2);
// console.log(age>20);
// console.log(age<19);
// console.log(age++);
// console.log(age--);



// 2-15 Operator Precedence:

// if(10-5<5-2){
//     console.log("True");
// }
// else{
//     console.log("False");
// }

// let x,y;
// console.log(x+" "+y);
// x=y=65+4;
// console.log(x+" "+y);

// let x;
// let y=12;
// x=y-34-4-2;
// console.log(x);

// console.log(34+53/3);
// console.log((34+53)/3);



// 2-16 Coding challenge:

// let mark_mass=78;
// let mark_height=1.69;
// let mark_bmi=mark_mass/(mark_height*mark_height);
// let john_mass=92;
// let john_height=1.95;
// let john_bmi=john_mass/(john_height*john_height);
// let res=mark_bmi>john_bmi;
// console.log(res);



// 2-17 Strings and template literals:

// let firstName="Nathis";
// let lastName="S";
// let age="35";
// let dpt="CT";
// let res=("Name : "+firstName+" "+lastName+", "+"age : "+age+", "+"department : "+dpt);
// console.log(res);

// let firstName="Nathis";
// let lastName="S";
// let age="35";
// let dpt="CT";
// let res2=`I am ${firstName} ${lastName}, age is ${age}, department is ${dpt}`;
// console.log(res2);


// printinng in next line:
// console.log('I am Nathis S \n\My age is 20 \n\Department is CT');
// console.log();
// console.log(`I am Nathis S
// My age is 20
// Department is CT`);



// 2-18 Taking decisions if-else statement:

// let mark_age=34;
// let john_age=43;
// let res;
// if(mark_age>john_age){
//     console.log(true);
//     res=mark_age;
// }
// else{
//     console.log(false);
//     res=john_age;
// }
// console.log(res);



// 2-19 Codeing challenge 2:

// let mark_mass=95;
// let mark_height=1.88;
// let mark_bmi=mark_mass/(mark_height*mark_height);
// let john_mass=85;
// let john_height=1.76;
// let john_bmi=john_mass/(john_height*john_height);
// if(mark_bmi>john_bmi){
//     console.log(`Mark's BMI (${mark_bmi}) is higher than John's(${john_bmi})`);
// }
// else{
//     console.log(`John's BMI (${john_bmi}) is higher than Mark's(${mark_bmi})`);
// }



// 2-20 Type conversion and coercion:
// Type conversion:

// let str="3446";
// console.log(typeof(str),typeof(Number(str)));



// 2-21 Truthy and Falsy value:
// falsy values:

// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(''));

// truthy values:

// console.log(Boolean({}));
// console.log(Boolean(34));
// console.log(Boolean('addad'));

// const money=0;
// if(money){
//     console.log("Start an startup");
// }
// else{
//     console.log("You need to work as employee");
// }



// 2-22 Equality operator == vs === :

// strictly equal is always recommended

// strictly equal === :
// it works for only same datatype variables

// const var1='18';
// if(var1===18){
//     console.log(`The given var1 : ${var1} is equal to 18`);
// }
// else{
//     console.log(`The given var1 : ${var1} is not equal to 18`);
// }

// loosly equal == :
// it compares the values with different datatypes

// const var1='18';
// if(var1==18){
//     console.log(`The given var1 : ${var1} is equal to 18`);
// }
// else{
//     console.log(`The given var1 : ${var1} is not equal to 18`);
// }



// 2-23 Boolean logic
// 2-24 Logical Operators

// const math=85;
// const phy=0;

// if(math && phy){
//     console.log("You don't have any arrears");
// }
// else{
//     console.log("You have an arrear");
// }
// if(math || phy){
//     console.log("You have passed atleast one sub");
// }
// else{
//     console.log("You don't have passed atleast one sub")
// }
// if(!phy){
//     console.log("You are failed in physics  ");
// }
// if(!math){
//     console.log("You are failed in maths");
// }



// 2-25 Coding Challenge

// const dolphins=(96+108+89)/3;
// const koalas=(88+91+110)/3;
// console.log(dolphins+" "+koalas);
// if(dolphins>=100 || koalas>=100){
//     if(dolphins>koalas && dolphins>=100){
//         console.log("dolphins team wins the match");
//     }
//     else if(koalas>dolphins && koalas>=100){
//         console.log("koalas team wins the match");
//     }
//     else{
//         console.log("Match get draw");
//     }
// }
// else{
//     console.log("No team wins the match");
// }



// 2-26 The switch statement

// const month=5;
// let num_month=null;
// switch(month){
//     case 1:
//         num_month='jan';
//         break;
//     case 2:
//         num_month='feb';
//         break;
//     case 3:
//         num_month='mar';
//         break;
//     case 4:
//         num_month='apr';
//         break;
//     case 5:
//         num_month='may';
//         break;
//     case 6:
//         num_month='june';
//         break;
//     case 7:
//         num_month='july';
//         break;
//     case 8:
//         num_month='aug';
//         break;
//     case 9:
//         num_month='sept';
//         break;
//     case 10:
//         num_month='oct';
//         break;
//     case 11:
//         num_month='nov';
//         break;
//     case 12:
//         num_month='dec';
//         break;
//     default:
//         num_month='Not a valid month';
// }
// console.log(num_month);




// 2-27 Statements and expressions


// var year=2023;
// var dob=2003;
// console.log(`This year is ${year} and you're age is ${year-dob}`);

// Explanation :-
// year ===> expression
// yaer-dob ===> expression
// console.log(`This year is ${year} and you're age is ${year-dob}`) ===> statement



// 2-28 Conditional(Ternary) Operator

// const age=17;
// age>=18 ? console.log("You are eligible for voting") : console.log("You are not eligible for voting");

// without using ternary operator:

// let parent_age=30;
// let child_age;
// if(parent_age>=30){
//     child_age=5;
// }
// else{
//     child_age=0;
// }
// console.log(child_age);

// by using ternary operator:

// let parent_age=30;
// let child_age=parent_age>=30 ? 5 : 0;
// console.log(child_age);



// 2-29 Coding challenge:

// let bill=40;
// let f_bill=bill>=50 && bill<=300 ? bill+(bill/100*15) : bill+(bill/100*20);
// console.log(`The bill is ${bill} and the tip is ${f_bill-bill}, finally the total amount is ${f_bill}`);
