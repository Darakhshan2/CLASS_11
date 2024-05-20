// there are two types of object
// fresh objects : jo naya naaya banay hai 
// stale objects : jo purany object new variable mn store krky use kren 
var ball = {
    diameter: 10
};
var sphere = {
    diameter: 20
};
ball = sphere; // ball ko replace kro sphere sy
sphere = ball; // sphere ki value ko replace kro ball sy yahan hamen ball ki updated value hogi 
console.log(ball);
console.log(sphere);
