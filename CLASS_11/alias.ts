// Topic : "alias"
// kesi baary variable ko choty form mn definne krna 
//keyword using making alias "type typename "
// type Ivariablename = {key value type}
// static type : hum aik bar declared krkyb har jaga use nh krskty alag alag deni hogi 
// type ko dynamic banany ky liye type alias bananty hen 
// type alias hum variable mn object mn use krskty hen arrya mn bh 

type IStudent = {
    name: string,
    age: number,
    rollNo: number,
    inCanteen: {
        item1: string,
        item2: string,
        drinks: (string | string[])[]
    },
    isPass: boolean
}
let student: IStudent = {
    name: "darakhshan",
    age: 18,
    rollNo: 9235211,
    inCanteen: {
        item2: "biryani",
        item1: "daal chawal",
        drinks: ["orange", "mango", "milkshake"]
    },
    isPass: true
}

// union literals mn bh alias  use hota hai 

type IrollNo = string | number
let rollNo: IrollNo = 9090909;
rollNo = "909090";



type IStudent2 = {
    name: string,
    age: number,
    rollNo: number,
    inCanteen: {
        item1: string,
        item2: string,
        drinks: (string | { name: string })[]
    },
    isPass: boolean
}
let student2: IStudent2 = {
    name: "darakhshan",
    age: 18,
    rollNo: 9235211,
    inCanteen: {
        item2: "biryani",
        item1: "daal chawal",
        drinks: ["orange", "mango", "milkshake", { name: "abc" }]
    },
    isPass: true
}