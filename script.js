
//***********how to take input from user****************
// let x = prompt("Enter you name");
// console.log(x);

// alert("Hello World!!")

//*******type casting*********//
// let x = prompt("Enter first number");
// let y = prompt("Enter second number");
// // console.log();
// console.log(Number(x) + Number(y));

// let myName = "Ankur Mandal";
// let role = "Software Enggineer";
// console.log(`Hi, My name is ${myName}, I am a ${role}.`)

//Today's Agenda
// 1) Objects Iterations and Higher order functions
// 2) arrays method (filter,reduce,map,forEach)

// let arr = [3, 2, 1];
// let user = {
//     name: "Ankur Mandal",
//     email: "ankur@gmail.com"
// };
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

/* FOR IN LOOP */
// for (let x in arr) {
//     console.log(arr[x]);
// }

// for (let y in user) {
// console.log(y, typeof y);
// console.log(user[y]);
//     console.log(y);
// }

/* FOR OF LOOP => iterate over the value*/

// for (let x of arr) {
//     console.log(x);

// }


// for (let x of user) { // bcs object are unordered
//         console.log(x);

//     }

// let user1 = {
//     age: 25,
//     name: "Shanku Mandal",
//     email: "ankur@gmail.com",
//     1: "Hello World",
//     2: "Hi",
//     3: "Js"
// };
// console.log(user1);

// Q) Given an array of n numbers, find the occurance of each element

// let arr = [3, 2, 1, 2, 8, 4, 6, 6, 9, 1, 2, 3, 2, 2, 6];

// let freq = {};

// for (let x of arr) {
//     if (freq[x]) {
//         freq[x]++;
//     }
//     else freq[x] = 1;
// }
// console.log(freq);


// function sum(a, b) {
//     return a + b;
// }

// let r=sum(3, 4);

// console.log(r);

// let printSum = function (a, b, c) {
//     return a + b + c;
// }
// let r = printSum(3, 4, 2);
// console.log(typeof printSum);
// console.log(r);

// arrow function was introduced in ES6 (2015)
// let arrowFunc = (a, b) => {
//     console.log("hello");
//     console.log("world");
//     return a + b;
// }
// let r = arrowFunc(3, 4);
// console.log(r);

// let difference = (a) => 2 * a;
// let r = difference(12);
// console.log(r);

// Arrays Methods yet we learn (pop, push, shift, unshift, slice, splice)

// let nums = [3, 4, 2,2,4];
//forEach => it used to iterate on array
// let f = (element, index, nums) => {
//     console.log(element, index, nums);
// }
// let f = function () {
//     console.log("Inside function!!");
// }
// nums.forEach(f);

// q) find the sum of whole array using forEach

// let sum = 0;
// let f = function (element) {
//     sum += element;
// }
//  nums.forEach(f);
// console.log(sum);


// q) find the sum of even index of an array using forEach

// let sum = 0;
// let f = function (element, index) {
//     if (index % 2 == 0) {
//         sum += element;
//     }
// }
// nums.forEach(f);
// console.log(sum);


//***************map***************

// its syntax is exactly same as forEach except one thing
// its return an array and its length is equal to source array length
// let nums = [10, 20, 30, 40, 50]

// let f = (element, index, nums) => {
//     return element + index;
// }

// let r1 = nums.forEach(f);// does not return anything...

// let r2 = nums.map(f);//it collect the returning ans of each element present in the array
// console.log(r1, typeof r1);
// console.log(r2,typeof r2);


//call back function:-
// when a function is pass as an argument to another function is called as called call back function

// let nums = [10, 20, 30, 40, 50]

// nums.forEach(function (e, i, arr) { //call back function
//     console.log(e, i, arr);
// })

// function temp(x) {
// x =  () => {
//     console.log("Ankur")
// }
// console.log(typeof x);
// x();// call the x function

// }
// console.log(temp); //.... print the whole function of temp but not run it
// temp(() => {
//     console.log("Ankur")
//  });//call back function

// let nums = [10, 20, 30, 40, 50];
// let r=nums.map((e, i, arr) => {
//     return 10 + e - i;
// })
// console.log(r);

// if you have one argument and one line of code that simply return than arrow function can be written as mention below:-
// let nums = [10, 20, 30, 40, 50];
// let r = nums.map(e => 2 * e);
// console.log(r);



//***********filter***********

// Q) Given an array, return only even element

// let arr = [9, 5, 6, 3, 2, 8];
// let r = arr.filter(e => e % 2 == 0);
// console.log(r);

//***********reduce***********
//its take two argument
//first => function
// second => function
// its return only one number which is the result of last itration
// let arr = [9, 5, 6];

//the first call back function can take 3 argument
// let r = arr.reduce((prev, curr, idx) => {
//     // 1 9 0
//     // 10 5 1
//     // 16 6 2
//     console.log(prev, curr, idx);
//     return prev + curr + idx;
// },1);
// console.log(r);

// function temp(x) {
//     x();
//     x();
// }
// temp(() => {
//     console.log("Hello Ankur!!!");
// })

// Q)Find the sum of the array

// let arr = [9, 5, 6];
// let ans = arr.reduce((prev, curr) => prev + curr, 0);
// console.log(ans);

// let arr = [9, 5, 6];

//if 2nd argument of reduce is not given,than it will skip the first itration and start directly with 2nd itration and take prev = first element, curr=2nd ele, idx=1
// let r = arr.reduce((prev, curr, idx) => {
//     // 9 5 1
//     // 15 6 2
//     // 23
//     console.log(prev, curr, idx);
//     return prev + curr + idx;
// });
// console.log(r);
