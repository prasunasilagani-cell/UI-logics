function addTwo(){
    let n1=parseInt(document.getElementById("n1").value)
    let n2=parseInt(document.getElementById("n2").value)
     let sum=n1+n2;
     document.getElementById("res").value=sum;
}

function avg(){
     let a=parseInt(document.getElementById("a").value)
    let b=parseInt(document.getElementById("b").value)
     let c=parseInt(document.getElementById("c").value)
     let avg=(a+b+c)/3;
     document.getElementById("result").value=avg;
}

function sum(){
     let x=parseInt(document.getElementById("x").value)
     let sumofn=(x*(x+1)/2)
     document.getElementById("output").value=sumofn;
}

function avgofn(){
     let y=parseInt(document.getElementById("y").value)
     let avgofn=(y*(y+1)/2)/y;
     document.getElementById("output1").value=avgofn;
}

function missing_angle(){
     let a1=parseInt(document.getElementById("a1").value)
     let a2=parseInt(document.getElementById("a2").value)
     let a3=180-(a1+a2)
     document.getElementById("a3").value=a3;
}

function per(){
     let sp=parseInt(document.getElementById("sp").value)
     let cp=parseInt(document.getElementById("cp").value)
     let profit=sp-cp;
     let profitpercentage=(profit/cp)*100
     document.getElementById("p").value=profitpercentage;
}

function simpleinterest(){
     let p=parseInt(document.getElementById("pa").value)
     let t=parseInt(document.getElementById("t").value)
     let r=parseInt(document.getElementById("r").value)
     let si=(p*t*r)/100;
     document.getElementById("si").value=si;
}

function GrossSalary(){
     let bs=parseInt(document.getElementById("bs").value)
     let bp=parseInt(document.getElementById("bp").value)
     let ip=parseInt(document.getElementById("ip").value)
     let bonus_amt=bs*(bp/100);
     let inc_amt=bs*(ip/100);
     let GS=bs+bonus_amt+inc_amt;
     document.getElementById("gs").value=GS;
}

function InhandSalary(){
     let bas_sal=parseInt(document.getElementById("bassal").value)
     let bon_per=parseInt(document.getElementById("bonper").value)
     let inc_per=parseInt(document.getElementById("incper").value)
     let pf_per=parseInt(document.getElementById("pfper").value)
     let health_per=parseInt(document.getElementById("healthper").value)
     let bonus=bas_sal*(bon_per/100);
     let incentive=bas_sal*(inc_per/100);
     let Gross=bas_sal+bonus+incentive;
     let pf=bas_sal*(pf_per/100);
     let health_amt=bas_sal*(health_per/100);
     let deductions=pf+health_amt;
     let inhand_sal=(Gross-deductions);
     document.getElementById("is").value=inhand_sal;
}

function Last_digit(){
     let number=parseInt(document.getElementById("number1").value)
     let lastdigit=number%10;
     document.getElementById("ld").value=lastdigit;
}

function remove_lastdigit(){
     let num=parseInt(document.getElementById("number2").value)
     let remove=parseInt(num/10);
     document.getElementById("rem").value=remove;
}