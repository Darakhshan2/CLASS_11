// there are two types of object
// fresh objects : jo naya naaya banay hai 
// stale objects : jo purany object new variable mn store krky use kren 
// structure typing : memory location ko check nh krtin structure ko dekhti hwen uska same hona zaroori 

let ball = {
    diameter : 10
}
let sphere ={
   diameter :20
}
ball = sphere  // ball ko replace kro sphere sy
sphere = ball // sphere ki value ko replace kro ball sy yahan hamen ball ki updated value hogi 
console.log(ball)
console.log(sphere);

/*
ball = {
  diameter :30 ,
 // length : 35 // agr hum aik  object ky under hum new object assign krty hen to errorr fresh object mn aye ga
}
*/

// agr aik obj mn aik property hai or dosryv mn 2 property hen  to dono ko assign krty hen but ye store hen alag varible mn to ye error nh aye ga  as a stale object nh aye 

// stale object : new property ko any dety hen 
// fresh object : mn agr new property ko access kren gy to error 

let alpha = {
    rollNo : 909090,
    cgpa : 2.3    
}

let beta = {
    rollNo : 909090,
    radius : 34,
    name : "darakhshan"
}
// alpha = beta