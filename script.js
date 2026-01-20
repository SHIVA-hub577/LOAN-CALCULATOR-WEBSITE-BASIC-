document.body.style.backgroundColor = "orange";
// const bt = document.createElement('button');
// document.body.appendChild(bt);
// bt.textContent = 'Calculate';
// bt.addEventListener("click",()=>{
// let a=document.querySelector("#mi");
// let b=document.querySelector("#ir");
// let s=parseFloat(b.value)
// s= s/(12*100);
// a.value=s.toFixed(4);
// });
let bt=document.querySelector("#bt");
bt.addEventListener("click",()=>{
      let m=document.querySelector("#u2");
let a=document.querySelector("#u3");
let z=document.querySelector("#u1");
let p=parseFloat(z.value);  // Fixed: parseFloat early
let r=parseFloat(m.value)/12/100;
let months=a.value*12;  // Renamed n → months

if(!m.value || isNaN(m.value) || !a.value || isNaN(a.value) || isNaN(p) || isNaN(r) || isNaN(months)){
    alert("enter right value");
}
else{
    let o1=document.querySelector("#o1");
    o1.value=r.toFixed(4);
    let v=document.querySelector("#o2");
    v.value=months;  // Fixed: months not DOM
    let s=document.querySelector("#o3"); 
    let power = Math.pow(1 + r, months);  // Uses months
    let emi = (p * r * power) / (power - 1);
    s.value=emi.toFixed(2);
    let d=document.querySelector("#o4");
    d.value=(emi*months).toFixed(2);  // Fixed parens
    let f=document.querySelector("#o5");
    f.value=(emi*months-p).toFixed(2);  // Fixed parens
}

         
})
