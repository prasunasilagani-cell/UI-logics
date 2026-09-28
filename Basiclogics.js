// //program of sum of two numbers
// //Input
// let a=20;
// let b=30;
// //process
// let sum=a+b;
// //output
// console.log("Sum of two numbers is "+sum)


// //program to sum of n natural numbers
// let n=5;
// //process
// let sumofn =(n*(n+1)/2)
// ///output
// console.log("Sum of n natural numbers is"+sumofn)

//program of avg of first n natural numbers
let n=5;
let sum=(n*(n+1)/2);
let avg=sum/n;
console.log("Average of first n natural numbers is"+avg)

//Missing angle in triangle
//input
let a1=35;
let a2=50;
//process
let a3=180-(a1+a2);
//output
console.log("The missing angle is"+a3)

//profit percentage
//input
let sp=350;
let cp=300;
//process
let profit=sp-cp;
let profitpercentage=(profit/cp)*100
//output
console.log("The profit percentage is"+profitpercentage);

//simple Interest
//Input
let p=2500
let t=3
let r=10
//process
let SI=(p*t*r)/100
//output
console.log("The simple interest is"+SI)

//Gross salary
//Input
let bs=20000;
let bp=10;
let Ip=5;
//process
let b=bs*(bp/100);
let I=bs*(Ip/100);
let GS=bs+b+I;
//output
console.log(GS);

//Inhand Salary
//Input
let basicsal=35000;
let inc_per=20;
let bon_per=5;
let pf=2;
let health_per=1;
//process
let bonus=basicsal*(bon_per/100);
let inc=basicsal*(inc_per/100);
let gs=basicsal+bonus+inc;
let pf_amt=basicsal*(2/100);
let health_amt=basicsal*(1/100);
let ded=pf_amt+health_amt;
let inhand=(gs-ded);
//output
console.log("The inhand salary is",inhand)

//Last digit of given number
let num=132;
let last_digit=num%10;
console.log(last_digit);

//removing last digit
let number=1234;
let remove=parseInt(number/10);
console.log(remove)

//Swap two numbers
//By using other varible
//Input
let x=10;
let y=20;
console.log("------Before swapping-----")
console.log("x = ",x)
console.log("y = ",y)
//Process
let z;
z=x
x=y
y=z
console.log("---------After swapping-------")
console.log("x = ",x)
console.log("y = ",y)
//by using arthimetic operators(other method)
//Input
let d=10;
let e=20;
console.log("------Before swapping-----")
console.log("d = ",d)
console.log("e = ",e)
//Process
d=d+e
e=d-e
d=d-e
console.log("---------After swapping-------")
console.log("d = ",d)
console.log("e = ",e)
//Using distructing assignment
//Input
let f=10;
let g=20;
console.log("------Before swapping-----")
console.log("f = ",f);
console.log("g = ",g);
//Process
[f,g]=[g,f]
console.log("---------After swapping-------")
console.log("f = ",f)
console.log("g = ",g)
//using xor
//Input
let h=10;
let i=20;
console.log("------Before swapping-----")
console.log("h = ",h)
console.log("i = ",i)
//Process
h=h^i
i=h^i
h=h^i
console.log("---------After swapping-------")
console.log("h = ",h)
console.log("i = ",i)