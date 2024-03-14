// ******************************************************************************
//TYPES
// ******************************************************************************

//STRING
let string: string

// NUMBER 
let number: number

// BOOLEAN 
let boolean: boolean

// UNION TYPE 
let stringOrNumber: string | number //union types

// ARRAY 
let array: []
let stringArray: string[]
let numberArray: number[]
let stringOrNumberArray: (string | number)[]

// OBJECT 
let object: {}
let info: {
    Name: string;
    age: number;
    phone?: string; // can add or leave phone 
}

// ANY 
let any: any

//FUNCTIONS 
// normal function
let func = () => {
    console.log("Hola, Functions")
}

// function with return type
let funcReturn = (): number => {
    console.log("this function should return a number")
    return 2
}

// function with parameter and return type
let funcReturnParameter = (num1: number, num2: number, isTrue: boolean, name?: string): number | string => {
    const sum: number = num1 + num2
    return sum
} // here "name" parameter is optional while doing a function call and the function should return a number or string


// ******************************************************************************
//TYPE ALIASES := Helps create custom types
/* In TypeScript, type aliases are used to assign a name for any type. 
    It doesn't create a new type. Instead, it provides a name for the type.
*/
// ******************************************************************************

//object
type UserType = {
    username: string;
    age: number;
    phone?: number;
}

// number
type num = number
let a: num
a = 1

// string
type str = string
let s: str
s = "charan"

// function
type func = (parameterOne: number, parameterTwo: string) => void
// parameter types  => return type


let objectOfUserInfo: UserType = {
    username: "charan",
    age: 20,
}
function aa(user: UserType) {
    console.log("hello")
}

let ar: func = (one, two) => {
    console.log("type aliases function check")
}
ar(20, "1")



// ******************************************************************************
// INTERFACES 
/**
 * Interfaces are a feature of TypeScript that allows us to define the structure or 
   shape of an object and specify the properties and methods that an object has or should have.
 */
// ******************************************************************************

interface DemoInterface {
    username: string;
    email: string;
    phone?: number;
}

interface Demo2Interface extends DemoInterface {
    empid: string;
}

const empInfo: Demo2Interface = {
    username: "charan",
    email: "charanrajs4122003@gmail.com",
    empid: "0000id1"
}


// ******************************************************************************
// GENERICS 
/**
 * Generics are a TypeScript feature that allows us to pass in various types of data 
   and create reusable code to handle different inputs. They allow us to define placeholder 
   types which are then replaced when the code is executed with the actual types passed in.
 */
// ******************************************************************************

interface IAuther {
    id: number;
    name: string;
}

interface ICategory {
    id: number;
    name: string;
}

interface IPost<T> {
    id: number;
    name: string;
    extra: T;
    extra2: T[];
}

const test: IPost<IAuther> = {  //IAuther can be replaced with string/number etc..
    id: 2,
    name: "charan",
    extra: { id: 12, name: "Charan" },
    extra2: [{ id: 11, name: "Raj" }],
}

