// number, string, boolean, Array, typle, enum, any, void, null & undefined , never, object, union and intersection types.

let num1 : number = 45;
let num2 : number = 45.34;

let str : string = "Hello World!";

let isPresent : boolean = true;

let numbers : number[] = [1,23,4,5];

let person : [string, number]=["Prince", 25];

//======================================================================>

enum color{
    Red,
    Green,
    Blue
}

// usecases of enum

enum HttpStatusCode {
  OK = 200,
  NotFound = 404,
  InternalServerError = 500
}

const responseCode: HttpStatusCode = HttpStatusCode.OK;

console.log(responseCode); // output- 200;

//==================================================================>


let data : any = "Hello"; // bypasses typescript's type checking, use carefully;

// void: often used as a return type of a funtion that does'nt return any value

let emptyValue : null = null;

// never : represents a value that never occur: for example - a function that always throw error;

// object : represents any non-primitive value;

let person2 : {name : string, age:number} = {name : "prince", age:21};

//These are just a few examples of data types available in TypeScript. 

//TypeScript's type system is flexible and allows you to create custom types, interfaces, and more to suit your needs.

//Type annotations can help you define the expected data type for variables, function parameters, and return values, enhancing code quality and catching errors early in the development process.