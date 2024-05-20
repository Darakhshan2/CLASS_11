// intersection : 2 type ko murge krky aik hi object mn likhna 
// we use & operator for type intersection 
// unione mn hum bolty hen ya to ye nh to ye koi bh aik lazmi
// is mn har type ki totle property
// agr 2 types ko murge krny pr aik hi property dono type mn ho to hum sirf aik bar likhen gy

type ITeacher = {
     name:string,
     skill:string,
     experience:number
}

type IStudents = {
    name:string,
    rollNo:number

}
// normal way
/* let fullName:IStudents & ITeacher ={   yahan pr type define krna bht lamba ho rha hai to hum type alias mn
    name:"Okasha",                         dono type ko save krden gy
    skill:"web developer",
    rollNo:90909,
    experience:4
}*/

//best practice

type intersection = IStudents & ITeacher;

let fullName :intersection ={
    skill:"web developer",
    rollNo:90909,
    experience:4,
    name:"okasha"
}