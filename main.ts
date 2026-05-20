interface Product{
  id:number,
  name: string,
  price: number
}


function getProduct(id: number): Product{
  return {
    id:id,
    name:`New Product ${id}`,
    price: 22.2
  }
}

let obj = getProduct(3);
console.log(obj.name);

console.log(getProduct(2));

let name1: string = "Leo";
let flag: boolean = false;
let num1: number = 121;

let myIntArray: number[] = [1.3,2,4,5,6.6];
console.log(myIntArray);

let names: string[] = ["Swapnil", "Swappy"] ;
console.log(names);

let minObj : {
  id: number

}

let counter =0
// counter ="s"; gives type error 

let numBol: number | boolean;

numBol =false;

numBol = 1;

// numBol = "str";

let numBolStr: number | boolean | string;

numBolStr =false;

numBolStr = 1;

numBolStr = "str";


// bigint type
let bigIntNum: bigint = 7943693321321313n;
console.log(bigIntNum);


// string type in TS

let fullName: string = "Johnn Lei";
console.log(fullName);

let data = 12.32;
let desc = `This is an
sample data 
data = ${data}`;

console.log(desc);

// TypeScript object type

let emp: object = {
    name: "Demo",
    id:11,
    department: "HR"
}

console.log(emp);

// To explicitly specify properties of the employee object, you first use the following syntax to declare the employee object


let sampleEmp : {
    name: string,
    id: number,
    department: string,
    isPartTimeEmployee: boolean

}


sampleEmp = {
    name: "Leo",
    id: 12,
    department: "dev",
    isPartTimeEmployee: false

}

console.log(sampleEmp);

// arrays type in ts

let skills : string[] = ["Java"];

skills.push("Typescript");
skills.push("Python");

console.log(skills);

let mixedArrayType : (any)[] = [true, "Hello", 22.3];

console.log(mixedArrayType);

let intAndStringArray : (number | string)[] = [22.3, "String"]

